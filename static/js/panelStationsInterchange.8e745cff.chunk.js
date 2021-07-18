(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[84],{135:function(e,t,n){"use strict";n.r(t);var i=n(12),a=n(8),c=n(4),o=n.n(c),s=n(11),r=n(5),l=n(15),d=n(78),u=n(1),j=Object(r.makeStyles)((function(){return Object(r.createStyles)({listItemIcon:{width:"1em",fontSize:"1.5rem",textAlign:"center"}})})),h=function(e){var t=Object(s.useTranslation)().t,n=j();return c.useMemo((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemIcon,{children:Object(u.jsx)("span",{className:n.listItemIcon,children:"\u6587"})}),Object(u.jsx)(r.TextField,{style:{width:"100%"},variant:"outlined",label:t("stations.edit.name.nameZH"),onChange:e.onUpdate(0),value:e.name[0],autoFocus:!0})]}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemIcon,{children:Object(u.jsx)("span",{className:n.listItemIcon,children:"A"})}),Object(u.jsx)(r.TextField,{style:{width:"100%"},variant:"outlined",label:t("stations.edit.name.nameEN"),onChange:e.onUpdate(1),value:e.name[1],helperText:t("stations.edit.name.nameENHelper")})]})]})}),[e.name.toString()])},m=n(10),p=n(2),b=(t.default=function(e){var t=Object(s.useTranslation)().t,n=Object(m.useSelector)((function(e){return e.app.rmgStyle})),d=Object(c.useContext)(l.a),j=d.param,h=d.dispatch,b=j.stn_list[e.stnId].transfer,f=o.a.useState(!1),I=Object(a.a)(f,2),v=I[0],y=I[1],C=function(t){var n=[].concat(Object(i.a)(j.theme),["\u8f49\u7dab","Line"]);h({type:"ADD_STATION_INTERCHANGE_INFO",stnId:e.stnId,setIdx:t,info:n})},T=function(t,n){h({type:"REMOVE_STATION_INTERCHANGE_INFO",stnId:e.stnId,setIdx:t,intIdx:n})};return Object(u.jsxs)(r.List,{children:[Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemText,{children:Object(u.jsx)("h3",{style:{margin:0},children:t("stations.edit.interchange.within")})}),Object(u.jsx)(r.ListItemSecondaryAction,{children:Object(u.jsx)(r.Tooltip,{title:t("stations.edit.interchange.add"),"aria-label":"add",children:Object(u.jsx)(r.IconButton,{onClick:function(){return C(0)},children:Object(u.jsx)(r.Icon,{children:"add_circle"})})})})]}),Object(u.jsx)(r.ListItem,{children:Object(u.jsx)(O,{stnId:e.stnId,setIndex:0,onDelete:function(e){return T(0,e)}})}),[p.j.MTR,p.j.SHMetro].includes(n||"")&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.Divider,{}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemText,{children:Object(u.jsx)("h3",{style:{margin:0},children:t("stations.edit.interchange.osi")})}),Object(u.jsxs)(r.ListItemSecondaryAction,{children:[Object(u.jsx)(r.Button,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return y(!0)},children:b.osi_names[0]?b.osi_names[0].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),Object(u.jsx)(g,{open:v,osiName:b.osi_names[0]||["",""],stnId:e.stnId,onClose:function(){return y(!1)}}),Object(u.jsx)(r.Tooltip,{title:t("stations.edit.interchange.add"),"aria-label":"add",children:Object(u.jsx)(r.IconButton,{onClick:function(){return C(1)},children:Object(u.jsx)(r.Icon,{children:"add_circle"})})})]})]}),Object(u.jsx)(r.ListItem,{children:Object(u.jsx)(O,{stnId:e.stnId,setIndex:1,onDelete:function(e){return T(1,e)}})}),Object(u.jsx)(r.ListItem,{children:Object(u.jsx)("span",{children:t("stations.edit.interchange.note")})})]}),n===p.j.MTR&&Object(u.jsx)(x,{stnId:e.stnId})]})},Object(r.makeStyles)((function(){return Object(r.createStyles)({intChip:{borderRadius:4.5,height:40,lineHeight:"1rem",margin:2},intChipText:{display:"block",textAlign:"center"},intChipTextZH:{fontSize:18,lineHeight:"1.2rem"},intChipTextEN:{fontSize:".75rem",lineHeight:".9rem",whiteSpace:"pre-wrap"},intChipLabel:{paddingLeft:6,paddingRight:6},intChipDeleteIcon:{marginLeft:-3}})}))),O=function(e){var t=b(),n=o.a.useContext(l.a),i=n.param,c=n.dispatch,s=i.stn_list[e.stnId].transfer.info[e.setIndex],j=o.a.useState(-1),h=Object(a.a)(j,2),m=h[0],p=h[1],O=o.a.useState(!1),g=Object(a.a)(O,2),x=g[0],f=g[1],I=null===s||void 0===s?void 0:s.map((function(n,i){var a=Object(u.jsxs)("span",{style:{color:n[3]},children:[Object(u.jsx)("span",{className:"".concat(t.intChipText," ").concat(t.intChipTextZH),children:n[4]}),Object(u.jsx)("span",{className:"".concat(t.intChipText," ").concat(t.intChipTextEN),children:n[5]})]});return Object(u.jsx)(r.Chip,{label:a,className:t.intChip,classes:{label:t.intChipLabel,deleteIcon:t.intChipDeleteIcon},style:{backgroundColor:n[2]},onDelete:function(){return e.onDelete(i)},onClick:function(){return p(i),void f(!0)}},i)}));return Object(u.jsxs)("div",{children:[I,Object(u.jsx)(d.a,{open:x,theme:void 0===(null===s||void 0===s?void 0:s[m])?[]:[s[m][0],s[m][1],s[m][2],s[m][3]],lineName:void 0===(null===s||void 0===s?void 0:s[m])?["",""]:[s[m][4],s[m][5]],onUpdate:function(t,n){"theme"===t&&c({type:"UPDATE_STATION_INTERCHANGE_INFO",stnId:e.stnId,setIdx:e.setIndex,intIdx:m,info:n.concat(Array(2))}),"name"===t&&c({type:"UPDATE_STATION_INTERCHANGE_INFO",stnId:e.stnId,setIdx:e.setIndex,intIdx:m,info:Array(4).concat(n)})},onClose:function(){return f(!1)}})]})},g=o.a.memo((function(e){var t=Object(s.useTranslation)().t,n=Object(c.useContext)(l.a).dispatch;return Object(u.jsxs)(r.Dialog,{open:e.open,onClose:e.onClose,children:[Object(u.jsx)(r.DialogTitle,{children:t("stations.edit.interchange.osiName")}),Object(u.jsx)(r.DialogContent,{dividers:!0,children:Object(u.jsx)(r.List,{children:Object(u.jsx)(h,{onUpdate:function(t){return function(i){var a=e.osiName.map((function(e,n){return n===t?i.target.value:e}));n({type:"UPDATE_STATION_OSI_NAME",stnId:e.stnId,name:a})}},name:e.osiName})})}),Object(u.jsx)(r.DialogActions,{children:Object(u.jsx)(r.Button,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.done")})})]})}),(function(e,t){return e.open===t.open&&e.osiName.toString()===t.osiName.toString()})),x=function(e){var t=Object(s.useTranslation)().t,n=o.a.useContext(l.a),i=n.param,a=n.dispatch,c=i.stn_list[e.stnId].transfer,d=function(t){var n=t.target.value;"l"!==n&&"r"!==n||a({type:"UPDATE_STATION_TICK_DIREC",stnId:e.stnId,direction:n})};return o.a.useMemo((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.Divider,{}),Object(u.jsx)(r.ListItem,{children:Object(u.jsx)(r.ListItemText,{children:Object(u.jsx)("h3",{style:{margin:0},children:t("stations.edit.interchange.settings")})})}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemIcon,{children:Object(u.jsx)(r.Icon,{children:"format_textdirection_l_to_r"})}),Object(u.jsx)(r.ListItemText,{primary:t("stations.edit.interchange.tickDirec.label")}),Object(u.jsx)(r.ListItemSecondaryAction,{children:Object(u.jsx)(r.Select,{native:!0,value:c.tick_direc,onChange:d,children:["l","r"].map((function(e){return Object(u.jsx)("option",{value:e,children:t("stations.edit.interchange.tickDirec."+e)},e)}))})})]}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemIcon,{children:Object(u.jsx)(r.Icon,{children:"attach_money"})}),Object(u.jsx)(r.ListItemText,{primary:t("stations.edit.interchange.paidArea")}),Object(u.jsx)(r.ListItemSecondaryAction,{children:Object(u.jsx)(r.Switch,{color:"primary",edge:"end",onChange:function(t,n){return a({type:"UPDATE_STATION_PAID_AREA",stnId:e.stnId,isPaid:n})},checked:c.paid_area})})]})]})}),[e.stnId,c.tick_direc,c.paid_area])}},76:function(e,t,n){var i={"./README.md":[80,68],"./barcelona":[37,1],"./barcelona.ts":[37,1],"./beijing":[38,12],"./beijing.ts":[38,12],"./changsha":[39,23],"./changsha.ts":[39,23],"./chengdu":[40,34],"./chengdu.ts":[40,34],"./chongqing":[41,36],"./chongqing.ts":[41,36],"./dongguan":[42,2],"./dongguan.ts":[42,2],"./edinburgh":[43,3],"./edinburgh.ts":[43,3],"./foshan":[44,4],"./foshan.ts":[44,4],"./glasgow":[45,5],"./glasgow.ts":[45,5],"./guangzhou":[46,6],"./guangzhou.ts":[46,6],"./hangzhou":[47,7],"./hangzhou.ts":[47,7],"./hongkong":[48,8],"./hongkong.ts":[48,8],"./kansai":[49,9],"./kansai.ts":[49,9],"./kaohsiung":[50,10],"./kaohsiung.ts":[50,10],"./london":[51,11],"./london.ts":[51,11],"./macao":[52,13],"./macao.ts":[52,13],"./madrid":[53,14],"./madrid.ts":[53,14],"./nanjing":[54,15],"./nanjing.ts":[54,15],"./newtaipei":[55,16],"./newtaipei.ts":[55,16],"./osaka":[56,17],"./osaka.ts":[56,17],"./oslo":[57,18],"./oslo.ts":[57,18],"./other":[58,19],"./other.ts":[58,19],"./paris":[59,20],"./paris.ts":[59,20],"./qingdao":[60,21],"./qingdao.ts":[60,21],"./sanfrancisco":[61,22],"./sanfrancisco.ts":[61,22],"./seoul":[62,24],"./seoul.ts":[62,24],"./shanghai":[63,25],"./shanghai.ts":[63,25],"./shenzhen":[64,26],"./shenzhen.ts":[64,26],"./singapore":[65,27],"./singapore.ts":[65,27],"./stockholm":[66,28],"./stockholm.ts":[66,28],"./taipei":[67,29],"./taipei.ts":[67,29],"./tianjin":[68,30],"./tianjin.ts":[68,30],"./tokyo":[69,31],"./tokyo.ts":[69,31],"./toronto":[70,32],"./toronto.ts":[70,32],"./tyneandwear":[71,33],"./tyneandwear.ts":[71,33],"./xian":[72,35],"./xian.ts":[72,35]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(i)},a.id=76,e.exports=a},78:function(e,t,n){"use strict";var i=n(0),a=n(8),c=n(12),o=n(3),s=n(4),r=n.n(s),l=n(11),d=n(5),u=n(6),j=n.n(u),h=n(9),m=n(21),p=n(24),b=n(2),O=n(1),g=Object(d.makeStyles)((function(){return Object(d.createStyles)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),x=function(e){var t=Object(l.useTranslation)(),o=t.t,u=t.i18n,x=g(),f=function(e){var t=r.a.useState([]),c=Object(a.a)(t,2),o=c[0],l=c[1],d=e[0]?n(76)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(s.useEffect)((function(){"undefined"!==typeof e[0]&&Object(h.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d;case 2:n=t.sent,l(e[0]===p.a.Other?[Object(i.a)(Object(i.a)({},n[0]),{},{colour:e[2],fg:e[3]||b.g.white})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),o}(e.theme);Object(s.useEffect)((function(){if(0!==f.length&&!f.filter((function(t){return t.id===e.theme[1]})).length){var t=f[0],n=t.id,i=t.colour,a=t.fg,c=[e.theme[0],n,i,a||b.g.white];e.onUpdate("theme",c)}}),[f]);return Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,children:[Object(O.jsx)(I,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(c.a)(e.theme.slice(1))))}}),Object(O.jsx)(d.Divider,{variant:"middle"}),Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:o("colour.line")}),Object(O.jsx)(d.TextField,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,i=f.filter((function(e){return e.id===n}))[0],a=i.colour,c=i.fg,o=[e.theme[0],n,a,c||b.g.white];e.onUpdate("theme",o)},value:e.theme[1],disabled:"other"===e.theme[0],children:f.map((function(e){return Object(O.jsx)(d.MenuItem,{value:e.id,children:Object(O.jsx)("span",{className:x.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||b.g.white},children:Object(m.b)(e.name,u.languages)})},e.id)}))})]})]})},f=function(e){var t=Object(l.useTranslation)().t,n=g(),i=Object(s.useState)(e.theme[2]),o=Object(a.a)(i,2),r=o[0],u=o[1];Object(s.useEffect)((function(){return u(e.theme[2])}),[e.theme[2]]);return Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,children:[Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:t("colour.colour")}),Object(O.jsxs)("div",{className:n.buttonContainer,children:[Object(O.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",[p.a.Other,"other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(O.jsx)("label",{htmlFor:"input-color",children:Object(O.jsx)(d.Tooltip,{title:t("colour.tooltip"),"aria-label":"colour picker",children:Object(O.jsx)(d.Button,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||b.g.white},variant:"contained",component:"span",children:" "})})})]}),Object(O.jsx)(d.TextField,{error:!(null===r||void 0===r?void 0:r.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(u(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var i=[p.a.Other,"other",n,e.theme[3]];e.onUpdate("theme",i)}else{var a=[p.a.Other,"other"].concat(Object(c.a)(e.theme.slice(2)));e.onUpdate("theme",a)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var o=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",o)}},value:null===r||void 0===r?void 0:r.toUpperCase()})]}),Object(O.jsx)(d.Divider,{variant:"middle"}),Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:t("colour.fg")}),Object(O.jsxs)(d.Select,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=[p.a.Other,"other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||b.g.white,children:[Object(O.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(O.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},I=function(e){var t=Object(l.useTranslation)(),n=t.t,i=t.i18n,a=g(),c=Object(s.useMemo)((function(){return p.b.map((function(e){return Object(O.jsx)(d.MenuItem,{value:e.id,children:Object(O.jsxs)("span",{className:a.cityItem,children:[Object(O.jsx)(y,{code:e.country}),Object(O.jsx)("span",{children:Object(m.b)(e.name,i.languages)})]})},e.id)}))}),[]);return Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:n("colour.city")}),Object(O.jsx)(d.TextField,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:c})]})},v=Object(d.makeStyles)((function(){return Object(d.createStyles)({img:{height:20,marginRight:"0.2rem"}})}));function y(e){var t=Object(l.useTranslation)().i18n,n=v(),i=[];return i=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[b.e.ChineseCN,b.e.ChineseSimp].includes(t.language)&&"TW"===e.code&&(i=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(O.jsx)("img",{src:"/RailMapGenerator"+"/images/flags/".concat(i.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(O.jsx)("span",{children:String.fromCodePoint.apply(String,Object(c.a)(i.map((function(e){return parseInt(e,16)}))))})}var C=n(15),T=Object(d.makeStyles)((function(e){return Object(d.createStyles)({contentWrapper:Object(o.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),N=function(e){var t=Object(l.useTranslation)().t,n=T();return Object(O.jsxs)(d.Dialog,{open:e.open,onClose:e.onClose,children:[Object(O.jsx)(d.DialogTitle,{children:t("colour.title")}),Object(O.jsxs)(d.DialogContent,{className:n.contentWrapper,children:[Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(O.jsx)(S,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(O.jsx)(d.Divider,{}),Object(O.jsx)(L,{onUpdate:e.onUpdate})]}),Object(O.jsx)("div",{className:n.contentControl,children:Object(O.jsx)(k,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(O.jsx)(d.DialogActions,{children:Object(O.jsx)(d.Button,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},S=function(e){var t=T(),n=function(t,n){var i=e.lineName.map((function(e,i){return i===n?t:e}));e.onUpdate("name",i)};return Object(O.jsx)(d.ListItem,{style:{justifyContent:"center"},children:Object(O.jsxs)(d.Paper,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(O.jsx)(d.Icon,{className:t.iconRoot,children:"edit"}),Object(O.jsx)(d.InputBase,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||b.g.white},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(O.jsx)(d.InputBase,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||b.g.white},onChange:function(e){return n(e.target.value,1)}})]})})},L=function(e){var t=Object(l.useTranslation)().t,n=T(),i=Object(s.useContext)(C.a).param,a=Object(s.useMemo)((function(){return new Set(Object.values(i.stn_list).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(c.a)(n))}),[[].concat(Object(c.a)(i.theme),Object(c.a)(i.line_name))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),o=Object(s.useMemo)((function(){return Object(c.a)(a).map((function(t,i){var a=JSON.parse(t),c=a.slice(4).map((function(e,t){return Object(O.jsx)("span",{style:{color:a[3]},children:e},t)}));return Object(O.jsx)(d.Chip,{onClick:function(){e.onUpdate("theme",a.slice(0,4)),e.onUpdate("name",a.slice(4))},style:{backgroundColor:a[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:c},i)}))}),[]);return Object(O.jsx)(d.ListItem,{children:Object(O.jsx)(d.ListItemText,{primary:t("colour.recent"),secondary:o,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},k=function(e){var t=Object(l.useTranslation)().t,n=Object(s.useState)("other"===e.theme[0]?1:0),c=Object(a.a)(n,2),o=c[0],r=c[1],u=Object(O.jsxs)(d.Tabs,{value:o,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return r(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(O.jsx)(d.Tab,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(O.jsx)(d.Tab,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),j=function(t){switch(t){case 0:return Object(O.jsx)(x,Object(i.a)({},e));case 1:return Object(O.jsx)(f,Object(i.a)({},e));default:return Object(O.jsx)(O.Fragment,{})}}(o);return Object(O.jsxs)(O.Fragment,{children:[u,j]})};t.a=N}}]);
//# sourceMappingURL=panelStationsInterchange.8e745cff.chunk.js.map