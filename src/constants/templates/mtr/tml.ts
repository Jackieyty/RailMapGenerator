const params = {
    style: 'mtr',
    svg_height: 300,
    padding: 12.65,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['hongkong', 'mol', '#9A3820', '#fff'],
    direction: 'l',
    current_stn_idx: '5ttb',
    platform_num: '1',
    stn_list: {
        linestart: {
            parents: [],
            children: ['ueyj'],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        lineend: {
            parents: ['0r8d'],
            children: [],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        l1mz: {
            parents: ['iwf6'],
            children: ['eld7'],
            name: ['鑽石山', 'Diamond Hill'],
            branch: { left: [], right: [] },
            num: '17',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'ktl', '#00AF41', '#fff', '觀塘綫', 'Kwun Tong Line']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['l1mz'],
            parents: ['5ttb'],
            name: ['啟德', 'Kai Tak'],
            branch: { left: [], right: [] },
            num: '16',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        eld7: {
            parents: ['l1mz'],
            children: ['7pvi'],
            branch: { left: [], right: [] },
            name: ['顯徑', 'Hin Keng'],
            num: '18',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '7pvi': {
            parents: ['eld7'],
            children: ['mmp9'],
            branch: { left: [], right: [] },
            name: ['大圍', 'Tai Wai'],
            num: '19',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'eal', '#61B4E4', '#fff', '東鐵綫', 'East Rail Line']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        mmp9: {
            parents: ['7pvi'],
            children: ['iw40'],
            branch: { left: [], right: [] },
            name: ['車公廟', 'Che Kong Temple'],
            num: '20',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iw40: {
            parents: ['mmp9'],
            children: ['g0x3'],
            branch: { left: [], right: [] },
            name: ['沙田圍', 'Sha Tin Wai'],
            num: '21',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        g0x3: {
            parents: ['iw40'],
            children: ['leif'],
            branch: { left: [], right: [] },
            name: ['第一城', 'City One'],
            num: '22',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        leif: {
            parents: ['g0x3'],
            children: ['61ez'],
            branch: { left: [], right: [] },
            name: ['石門', 'Shek Mun'],
            num: '23',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '61ez': {
            parents: ['leif'],
            children: ['xo3t'],
            branch: { left: [], right: [] },
            name: ['大水坑', 'Tai Shui Hang'],
            num: '24',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        xo3t: {
            parents: ['61ez'],
            children: ['f8ws'],
            branch: { left: [], right: [] },
            name: ['恆安', 'Heng On'],
            num: '25',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        f8ws: {
            parents: ['xo3t'],
            children: ['0r8d'],
            branch: { left: [], right: [] },
            name: ['馬鞍山', 'Ma On Shan'],
            num: '26',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '0r8d': {
            parents: ['f8ws'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            name: ['烏溪沙', 'Wu Kai Sha'],
            num: '27',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '5ttb': {
            name: ['宋皇臺', 'Sung Wong Toi'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['9hlo'],
            children: ['iwf6'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '9hlo': {
            name: ['土瓜灣', 'To Kwa Wan'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['a108'],
            children: ['5ttb'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        a108: {
            name: ['何文田', 'Ho Man Tin'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['imab'],
            children: ['9hlo'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['hongkong', 'ktl', '#00AF41', '#fff', '觀塘綫', 'Kwun Tong Line']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        imab: {
            name: ['紅磡', 'Hung Hom'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['zul4'],
            children: ['a108'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['hongkong', 'eal', '#61B4E4', '#fff', '東鐵綫', 'East Rail Line']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        zul4: {
            name: ['尖東', 'Tsim Sha Tsui East'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['4pue'],
            children: ['imab'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[], [['hongkong', 'twl', '#E2231A', '#fff', '荃灣綫', 'Tsuen Wan Line']]],
                tick_direc: 'l',
                paid_area: true,
                osi_names: [['尖沙咀', 'Tsim Sha Tsui']],
            },
            facility: '',
        },
        '4pue': {
            name: ['柯士甸', 'Austin'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['66mt'],
            children: ['zul4'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[], [['hongkong', 'hsr', '#9D968D', '#fff', '高速鐵路', 'High Speed Rail']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [['香港西九龍', 'Hong Kong West Kowloon']],
            },
            facility: '',
        },
        '66mt': {
            name: ['南昌', 'Nam Cheong'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['fdj2'],
            children: ['4pue'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['hongkong', 'tcl', '#F38B00', '#fff', '東涌綫', 'Tung Chung Line']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        fdj2: {
            name: ['美孚', 'Mei Foo'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['crle'],
            children: ['66mt'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['hongkong', 'twl', '#E2231A', '#fff', '荃灣綫', 'Tsuen Wan Line']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        crle: {
            name: ['荃灣西', 'Tsuen Wan West'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['1zsv'],
            children: ['fdj2'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '1zsv': {
            name: ['錦上路', 'Kam Sheung Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['v1qy'],
            children: ['crle'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        v1qy: {
            name: ['元朗', 'Yuen Long'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['35nm'],
            children: ['1zsv'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['hongkong', 'lrl', '#CD9700', '#fff', '輕鐵', 'Light Rail']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '35nm': {
            name: ['朗屏', 'Long Ping'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['yv1o'],
            children: ['v1qy'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        yv1o: {
            name: ['天水圍', 'Tin Shui Wai'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['1hop'],
            children: ['35nm'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['hongkong', 'lrl', '#CD9700', '#fff', '輕鐵', 'Light Rail']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '1hop': {
            name: ['兆康', 'Siu Hong'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['ueyj'],
            children: ['yv1o'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['hongkong', 'lrl', '#CD9700', '#fff', '輕鐵', 'Light Rail']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        ueyj: {
            name: ['屯門', 'Tuen Mun'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['linestart'],
            children: ['1hop'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['hongkong', 'lrl', '#CD9700', '#fff', '輕鐵', 'Light Rail']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['屯馬綫', 'Tuen Ma Line'],
    psd_num: '1',
    line_num: 'TM',
    info_panel_type: 'gzgf',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 800, runin: 800, railmap: 2400 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: true },
};

export default params;
