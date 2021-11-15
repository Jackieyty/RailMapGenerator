const params = {
    style: 'mtr',
    svg_height: 300,
    svg_width: 1100,
    svg_dest_width: 1100,
    show_outer: true,
    padding: 13.261261261261263,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 45,
    theme: ['hongkong', 'ael', '#007078', '#fff'],
    direction: 'l',
    current_stn_idx: '7uan',
    platform_num: '1',
    txt_bg_gap: 15,
    txt_flip: false,
    stn_list: {
        linestart: {
            parents: [],
            children: ['0r9d'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
        },
        l1mz: {
            parents: ['m6b7'],
            children: ['iwf6'],
            name: ['九龍', 'Kowloon'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '02',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['香港', 'Hong Kong'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '01',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
        },
        m6b7: {
            parents: ['7uan'],
            children: ['l1mz'],
            branch: { left: [], right: [] },
            name: ['青衣', 'Tsing Yi'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            services: ['local'],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            usage: '',
        },
        '7uan': {
            parents: ['0r9d'],
            children: ['m6b7'],
            branch: { left: [], right: [] },
            name: ['機場', 'Airport'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            services: ['local'],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            usage: 'airport',
        },
        '0r9d': {
            parents: ['linestart'],
            children: ['7uan'],
            branch: { left: [], right: [] },
            name: ['博覽館', 'AsiaWorld-Expo'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            services: ['local'],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            usage: '',
        },
    },
    line_name: ['機場快綫', 'Airport Express'],
    dest_legacy: false,
    char_form: 'trad',
    psd_num: 1,
    line_num: 'TW',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
};

export default params;