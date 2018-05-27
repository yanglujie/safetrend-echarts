var juhechart = echarts.init(document.getElementById('juhe'));

// 指定图表的配置项和数据
option = {
    // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    //     offset: 0,
    //     color: '#f7f8fa'
    // }, {
    //     offset: 1,
    //     color: '#cdd0d5'
    // }]),
    // backgroundColor:'rgba(50,50,50,0)',
   // backgroundColor:'black',
    // 
    // title: {
    //     text: "攻击中人名出现次数排名",
    //     subtext: "ZBH",
    //     top: "top",
    //     left: "center"
    // },
    tooltip: {},
    // legend: [{
    //     formatter: function(name) {
    //         // return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
    //         return  name;
    //     },
    //     // tooltip: {
    //     //     show: true
    //     // },
    //     selectedMode: 'false',
    //     bottom: '10%',
    //     data: ['DDOS', '恶意代码', 'web攻击', '病毒', '其它', '信息收集型']
    //     // data: ['DDOS', '恶意代码', 'web攻击', '信息收集', '病毒', '其他']
    // }],
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataView: {
    //             show: true,
    //             readOnly: true
    //         },
    //         restore: {
    //             show: true
    //         },
    //         saveAsImage: {
    //             show: true
    //         }
    //     }
    // },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '攻击',
        type: 'graph',
        layout: 'force',
        draggable:false,
        force: {
            initLayout:'circular',
            gravity:0.5,
            repulsion: 120
        },
        data: [{
            name: "攻击",
            // "x": 0,
            // y: 0,
            symbolSize: 35,
            draggable: "false",
            "value": 27,
            "depth":0
            
        }, {
            "name": "DDOS",
            "value": 15,
            "symbolSize": 18,
            "category": "DDOS",
            "draggable": "false",
            "depth":1

        }, {
            "name": "IP",
            "symbolSize": 7,
            "category": "DDOS",
            "draggable": "false",
            "value": 1,
            "depth":0

        }, {
            "name": "ICMP",
            "symbolSize": 10,
            "category": "DDOS",
            "draggable": "false",
            "value": 1,
            "depth":0
            

        }, {
            "name": "TCP",
            "symbolSize": 15,
            "category": "DDOS",
            "draggable": "false",
            "value": 1
        }, {
            "name": "恶意代码",
            "value": 60,
            "symbolSize": 28,
            "category": "恶意代码",
            "draggable": "false"
        }, {
            "name": "恶意程序",
            "symbolSize": 25,
            "category": "恶意代码",
            "draggable": "false",
            "value": 1
        }, {
            "name": "蠕虫病毒",
            "symbolSize": 8,
            "category": "恶意代码",
            "draggable": "false",
            "value": 1
        }, {
            "name": "web攻击",
            "value": 5,
            "symbolSize": 22,
            "category": "web攻击",
            "draggable": "false"
        }, {
            "name": "SQL注入",
            "symbolSize": 8,
            "category": "web攻击",
            "draggable": "false",
            "value": 1
        }, {
            "name": "CC攻击",
            "symbolSize": 14,
            "category": "web攻击",
            "draggable": "false",
            "value": 1
        }, {
            "name": "病毒",
            "value": 40,
            "symbolSize": 25,
            "category": "病毒",
            "draggable": "false"
        }, {
            "name": "宏病毒",
            "symbolSize": 18,
            "category": "病毒",
            "draggable": "false",
            "value": 1
        }, {
            "name": "蠕虫",
            "symbolSize": 15,
            "category": "病毒",
            "draggable": "false",
            "value": 1
        }, {
            "name": "其它",
            "value": 8,
            "symbolSize": 20,
            "category": "其它",
            "draggable": "false"
        }, {
            "name": "缓冲区溢出",
            "symbolSize": 15,
            "category": "其它",
            "draggable": "false",
            "value": 1
        }, {
            "name": "信息收集型",
            "value": 5,
            "symbolSize": 18,
            "category": "信息收集型",
            "draggable": "false"
        }, {
            "name": "地址扫描",
            "symbolSize": 13,
            "category": "信息收集型",
            "draggable": "false",
            "value": 1
        }],
        links: [{
            "source": "攻击",
            "target": "DDOS"
        }, {
            "source": "DDOS",
            "target": "IP"
        }, {
            "source": "DDOS",
            "target": "ICMP"
        }, {
            "source": "DDOS",
            "target": "TCP"
        }, {
            "source": "攻击",
            "target": "恶意代码"
        }, {
            "source": "恶意代码",
            "target": "恶意程序"
        }, {
            "source": "恶意代码",
            "target": "蠕虫病毒"
        }, {
            "source": "攻击",
            "target": "web攻击"
        }, {
            "source": "web攻击",
            "target": "SQL注入"
        }, {
            "source": "web攻击",
            "target": "CC攻击"
        }, {
            "source": "攻击",
            "target": "病毒"
        }, {
            "source": "病毒",
            "target": "宏病毒"
        }, {
            "source": "病毒",
            "target": "蠕虫"
        }, {
            "source": "攻击",
            "target": "其它"
        }, {
            "source": "其它",
            "target": "缓冲区溢出"
        }, {
            "source": "攻击",
            "target": "信息收集型"
        }, {
            "source": "信息收集型",
            "target": "地址扫描"
        }],
        categories: [{
            'name': 'DDOS'
        }, {
            'name': '恶意代码'
        }, {
            'name': 'web攻击'
        }, {
            'name': '病毒'
        }, {
            'name': '其它'
        }, {
            'name': '信息收集型'
        }],
        focusNodeAdjacency: true,
        roam: false,
        label: {
            normal: {
                //是否显示图表上的文字
                show:false,
                // position: 'top',

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid",
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            }
        }
    }]
};
// console.log(option.series[0].label.normal.show);
console.log(option.series[0].force. repulsion);

// 使用刚指定的配置项和数据显示图表。
juhechart.setOption(option);