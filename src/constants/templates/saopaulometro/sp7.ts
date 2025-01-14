const params = {
    style: 'gzmtr',
    svg_height: 343,
    padding: 5.353925353925354,
    y_pc: 43.06,
    branch_spacing: 47.82,
    theme: ['saopaulo', 'sp7', '#9E1766', '#fff'],
    direction: 'l',
    current_stn_idx: 'm2ot',
    platform_num: '7',
    stn_list: {
        linestart: {
            parents: [],
            children: ['nuzu'],
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
            num: '20',
            facility: '',
            secondaryName: false,
        },
        lineend: {
            parents: ['m2ot'],
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
            num: '00',
            facility: '',
            secondaryName: false,
        },
        l1mz: {
            parents: ['iwf6'],
            children: ['q027'],
            name: [' 极光镇', 'Vila Aurora'],
            branch: {
                left: [],
                right: [],
            },
            num: '10',
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
            children: ['l1mz'],
            parents: ['cs6b'],
            name: ['佩鲁斯', 'Perus'],
            branch: {
                left: [],
                right: [],
            },
            num: '11',
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
        q027: {
            parents: ['l1mz'],
            children: ['6r9r'],
            branch: {
                left: [],
                right: [],
            },
            name: ['雅拉瓜', 'Jaraguá '],
            num: '09',
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
        '6r9r': {
            parents: ['q027'],
            children: ['u8xj'],
            branch: {
                left: [],
                right: [],
            },
            name: ['克拉丽丝镇', 'Vila Clarice '],
            num: '08',
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
        u8xj: {
            parents: ['6r9r'],
            children: ['7gy7'],
            branch: {
                left: [],
                right: [],
            },
            name: ['皮里图巴', 'Pirituba '],
            num: '07',
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
        '7gy7': {
            parents: ['u8xj'],
            children: ['nnvd'],
            branch: {
                left: [],
                right: [],
            },
            name: ['皮奎里', 'Piqueri '],
            num: '06',
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
        rr8a: {
            parents: ['nnvd'],
            children: ['fwhz'],
            branch: {
                left: [],
                right: [],
            },
            name: ['阿瓜布兰卡', 'Água Branca '],
            num: '04',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['saopaulo', 'sp6', '#F27C00', '#fff', '6号线', 'Line 6']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        fwhz: {
            parents: ['rr8a'],
            children: ['l116'],
            branch: {
                left: [],
                right: [],
            },
            name: ['彭美拉斯·巴拉丰达', 'Palmeiras·Barra Funda '],
            num: '03',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['saopaulo', 'sp13', '#00AB5B', '#fff', '13号线', 'Line 13']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        l116: {
            parents: ['fwhz'],
            children: ['m2ot'],
            branch: {
                left: [],
                right: [],
            },
            name: ['卢兹', 'Luz '],
            num: '02',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['saopaulo', 'sp1', '#0153A0', '#fff', '1号线', 'Line 1'],
                        ['saopaulo', 'sp4', '#FED304', '#000', '4号线', 'Line 4'],
                        ['saopaulo', 'sp11', '#F04D22', '#fff', '11号线', 'Line 11'],
                        ['saopaulo', 'sp13', '#00AB5B', '#fff', '13号线', 'Line 13'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        m2ot: {
            parents: ['l116'],
            children: ['lineend'],
            branch: {
                left: [],
                right: [],
            },
            name: ['圣布拉什', 'Brás '],
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: false,
                osi_names: [['罗湖', 'Luohu']],
                info: [
                    [
                        ['saopaulo', 'sp3', '#EE3E34', '#fff', '3号线', 'Line 3'],
                        ['saopaulo', 'sp10', '#007C8F', '#fff', '10号线', 'Line 10'],
                        ['saopaulo', 'sp11', '#F04D22', '#fff', '11号线', 'Line 11'],
                        ['saopaulo', 'sp12', '#083E89', '#fff', '12号线', 'Line 12'],
                        ['saopaulo', 'sp13', '#00AB5B', '#fff', '13号线', 'Line 13'],
                    ],
                    [],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        nnvd: {
            name: ['拉帕', 'Lapa '],
            secondaryName: ['出站换乘', 'Exit station before transfer'],
            num: '05',
            services: ['local'],
            parents: ['7gy7'],
            children: ['rr8a'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['saopaulo', 'sp8', '#9E9E93', '#fff', '8号线', 'Line 8']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        okim: {
            name: ['福兰科·达·罗查', 'Franco da Rocha '],
            secondaryName: false,
            num: '13',
            services: ['local'],
            parents: ['k7wr'],
            children: ['cs6b'],
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
        cs6b: {
            name: ['凯埃拉斯', 'Caieiras '],
            secondaryName: false,
            num: '12',
            services: ['local'],
            parents: ['okim'],
            children: ['iwf6'],
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
        k7wr: {
            name: ['巴尔塔扎·菲德利斯', 'Baltazar Fidélis '],
            secondaryName: false,
            num: '14',
            services: ['local'],
            parents: ['kplv'],
            children: ['okim'],
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
        nuzu: {
            name: ['容迪亚伊', 'Jundiaí'],
            secondaryName: false,
            num: '19',
            services: ['local'],
            parents: ['linestart'],
            children: ['gp62'],
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
        gp62: {
            name: ['瓦尔泽亚·保利斯塔', 'Várzea Paulista '],
            secondaryName: false,
            num: '18',
            services: ['local'],
            parents: ['nuzu'],
            children: ['18u6'],
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
        '18u6': {
            name: [' 坎波林波保利斯塔', 'Campo Limpo Paulista'],
            secondaryName: false,
            num: '17',
            services: ['local'],
            parents: ['gp62'],
            children: ['17md'],
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
        '17md': {
            name: ['博图朱鲁', 'Botujuru '],
            secondaryName: false,
            num: '16',
            services: ['local'],
            parents: ['18u6'],
            children: ['kplv'],
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
        kplv: {
            name: ['弗朗西斯科·莫拉托', 'Francisco Morato '],
            secondaryName: false,
            num: '15',
            services: ['local'],
            parents: ['17md'],
            children: ['k7wr'],
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
    line_name: ['7号线', 'Line 7'],
    psd_num: '13',
    line_num: '7',
    info_panel_type: 'gz1421',
    direction_gz_x: 51.28,
    direction_gz_y: 70,
    customiseMTRDest: {
        isLegacy: false,
        terminal: false,
    },
    svgWidth: {
        destination: 1050,
        runin: 1143,
        railmap: 1544,
        indoor: 1000,
    },
    notesGZMTR: [
        [
            '十三号线彭美拉斯·巴拉丰达站暂未开通',
            'Palmeiras·Barra Funda  Station of Line 13 is under construction.',
            2.5,
            72.5,
            true,
        ],
        [
            '在圣布拉什站和卢兹站换乘十三号线，仅能乘坐十三号线的机场直达车',
            'For transferring to Line 13 at Brás Station and Luz station is currently only Linha 13 Aeroporto Expresso available.',
            2.5,
            84.5,
            true,
        ],
        ['六号线暂未开通', 'Line 6 is under construction.', 2.5, 60.5, true],
    ],
    namePosMTR: {
        isStagger: true,
        isFlip: true,
    },
};

export default params;
