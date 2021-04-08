#!/bin/bash
set -x

# git config
git config --global user.name "Build Agent"
git config --global user.email rmg.build.agent@users.noreply.github.com

# variables
export APP_NAME=rmg
BRANCH=$(git branch | grep \* | cut -d ' ' -f2 | tr '/' '.')
UAT_REPO_NAME=uat-rail-map-generator

# build PRD
npm run build

# bump version and git tag
if [ "$BRANCH" = "master" ]
then
  # build with a normal version
  npm version patch -m "${APP_NAME}-%s release" --force || { echo "Release Error"; exit 1; }
  export RELEASE_VERSION=$(node -p "require('./package.json').version")
#  git tag -a "${APP_NAME}-${RELEASE_VERSION}" -m "${APP_NAME}-${RELEASE_VERSION} release"
  git push origin HEAD
  git push origin "${APP_NAME}-${RELEASE_VERSION}"
else
  # build with a hashed version
  VERSION=`node -p "require('./package.json').version"`
  GITHASH=$(git log -n 1 --pretty=%h)
  export RELEASE_VERSION="$VERSION.$BRANCH.$GITHASH"
fi

echo "RMG_VER=${RELEASE_VERSION}" >> $GITHUB_ENV

# copy PRD artifact to repository
mkdir $UAT_REPO_NAME/$RMG_VER/
cp -r build/ $UAT_REPO_NAME/$RMG_VER/PRD/

# build UAT and copy artifact to repository
node -p "console.log(require('./package.json'))" | sed '2 s/RailMapGenerator/uat-rail-map-generator/' > package-new.json
cp package-new.json package.json
npm run build
cp -r build/ $UAT_REPO_NAME/$RMG_VER/UAT/

# upload artifacts
cd $UAT_REPO_NAME/
git add .
git commit -m "Build RMG version $RMG_VER"
git push

# print version
echo "====================\n$RMG_VER\n===================="
