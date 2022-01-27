const params = {
    style: 'mtr',
    svg_height: 450,
    padding: 7,
    y_pc: 40,
    branch_spacing: 39,
    theme: ['other', 'other', '#EE7C30', '#fff'],
    direction: 'l',
    current_stn_idx: 'h518',
    platform_num: '2',
    stn_list: {
        linestart: {
            parents: [],
            children: ['iwf6'],
            name: ['路綫右端', 'RIGHT END'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            num: '30',
            secondaryName: false,
        },
        lineend: {
            parents: ['l1mz'],
            children: [],
            name: ['路綫左端', 'LEFT END'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        l1mz: {
            parents: ['juer'],
            children: ['lineend'],
            name: ['金川路', 'Jinchuan Rd'],
            branch: {
                left: [],
                right: [],
            },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['x7sx'],
            parents: ['linestart'],
            name: ['昆明南火车站', 'Kunming South Railway Station'],
            branch: {
                left: [],
                right: [],
            },
            num: '29',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['other', 'other', '#BF3334', '#fff', '1号线', 'Line 1']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        juer: {
            name: ['大河埂', 'Dahegeng'],
            secondaryName: false,
            num: '02',
            services: ['local'],
            parents: ['5izc'],
            children: ['l1mz'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '5izc': {
            name: ['海屯路', 'Haitun Rd'],
            secondaryName: false,
            num: '03',
            services: ['local'],
            parents: ['n82v'],
            children: ['juer'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        n82v: {
            name: ['小屯', 'Xiaotun'],
            secondaryName: false,
            num: '04',
            services: ['local'],
            parents: ['x5md'],
            children: ['5izc'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        x5md: {
            name: ['金鼎山北路', 'Jindingshan North Rd'],
            secondaryName: false,
            num: '05',
            services: ['local'],
            parents: ['3ne8'],
            children: ['n82v'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '3ne8': {
            name: ['苏家塘', 'Shujiatang'],
            secondaryName: false,
            num: '06',
            services: ['local'],
            parents: ['55ch'],
            children: ['x5md'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '55ch': {
            name: ['小菜园', 'Xiaocaiyuan'],
            secondaryName: false,
            num: '07',
            services: ['local'],
            parents: ['8x9e'],
            children: ['3ne8'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '8x9e': {
            name: ['火车北站', 'North Railway Station'],
            secondaryName: false,
            num: '08',
            services: ['local'],
            parents: ['a3bs'],
            children: ['55ch'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [
                    [
                        ['other', 'other', '#235A99', '#fff', '2号线', 'Line 2'],
                        ['other', 'other', '#2AA844', '#fff', '5号线', 'Line 5'],
                    ],
                ],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        a3bs: {
            name: ['白龙路', 'Bailong Rd'],
            secondaryName: false,
            num: '09',
            services: ['local'],
            parents: ['2yys'],
            children: ['8x9e'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '2yys': {
            name: ['大树营', 'Dashuying'],
            secondaryName: false,
            num: '10',
            services: ['local'],
            parents: ['oviq'],
            children: ['a3bs'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['other', 'other', '#D02E81', '#fff', '3号线', 'Line 3']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        oviq: {
            name: ['菊花村', 'Juhuacun'],
            secondaryName: false,
            num: '11',
            services: ['local'],
            parents: ['dzlw'],
            children: ['2yys'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        dzlw: {
            name: ['菊华', 'Juhua'],
            secondaryName: false,
            num: '12',
            services: ['local'],
            parents: ['z6m6'],
            children: ['oviq'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['other', 'other', '#3D89A8', '#fff', '6号线', 'Line 6']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        z6m6: {
            name: ['和甸营', 'Hedianying'],
            secondaryName: false,
            num: '13',
            services: ['local'],
            parents: ['2w9g'],
            children: ['dzlw'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '2w9g': {
            name: ['牛街庄', 'Niujiezhuang'],
            secondaryName: false,
            num: '14',
            services: ['local'],
            parents: ['h518'],
            children: ['z6m6'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        h518: {
            name: ['朱家村', 'Zhujiacun'],
            secondaryName: false,
            num: '15',
            services: ['local'],
            parents: ['6yrs'],
            children: ['2w9g'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '6yrs': {
            name: ['羊甫头', 'Yangfutou'],
            secondaryName: false,
            num: '16',
            services: ['local'],
            parents: ['74d7'],
            children: ['h518'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '74d7': {
            name: ['玉缘路', 'Yuyuan Rd'],
            secondaryName: false,
            num: '17',
            services: ['local'],
            parents: ['xvjd'],
            children: ['6yrs'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        xvjd: {
            name: ['广卫', 'Guangwei'],
            secondaryName: false,
            num: '18',
            services: ['local'],
            parents: ['wztm'],
            children: ['74d7'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        wztm: {
            name: ['塔密', 'Tami'],
            secondaryName: false,
            num: '19',
            services: ['local'],
            parents: ['uqqx'],
            children: ['xvjd'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        uqqx: {
            name: ['斗南', 'Dounan'],
            secondaryName: false,
            num: '20',
            services: ['local'],
            parents: ['exqr'],
            children: ['wztm'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['other', 'other', '#BF3334', '#fff', '1号线', 'Line 1']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        exqr: {
            name: ['金桂街', 'Jingui St'],
            secondaryName: false,
            num: '21',
            services: ['local'],
            parents: ['7zib'],
            children: ['uqqx'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '7zib': {
            name: ['梅子村', 'Meizicun'],
            secondaryName: false,
            num: '22',
            services: ['local'],
            parents: ['zlje'],
            children: ['exqr'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        zlje: {
            name: ['古城', 'Gucheng'],
            secondaryName: false,
            num: '23',
            services: ['local'],
            parents: ['ohze'],
            children: ['7zib'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        ohze: {
            name: ['可乐村', 'Kelecun'],
            secondaryName: false,
            num: '24',
            services: ['local'],
            parents: ['izz5'],
            children: ['zlje'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        izz5: {
            name: ['祥丰街', 'Xiangfeng St'],
            secondaryName: false,
            num: '25',
            services: ['local'],
            parents: ['obrf'],
            children: ['ohze'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        obrf: {
            name: ['牛头山', 'Niutoushan'],
            secondaryName: false,
            num: '26',
            services: ['local'],
            parents: ['4bak'],
            children: ['izz5'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '4bak': {
            name: ['联大街', 'Lianda St'],
            secondaryName: false,
            num: '27',
            services: ['local'],
            parents: ['x7sx'],
            children: ['obrf'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['other', 'other', '#BF3334', '#fff', '1号线', 'Line 1']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        x7sx: {
            name: ['吴家营', 'Wujiaying'],
            secondaryName: false,
            num: '28',
            services: ['local'],
            parents: ['iwf6'],
            children: ['4bak'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['4号线', 'Line 4'],
    psd_num: '12',
    line_num: '4',
    info_panel_type: 'gzgf',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: {
        isLegacy: false,
        terminal: false,
    },
    svgWidth: {
        destination: 2000,
        runin: 2000,
        railmap: 2500,
        indoor: 2500,
    },
    notesGZMTR: [],
    namePosMTR: {
        isStagger: true,
        isFlip: false,
    },
};

export default params;
