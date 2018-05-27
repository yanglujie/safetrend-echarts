
var timeattackchart = echarts.init(document.getElementById('timeattack'));

// 指定图表的配置项和数据
timeattackoption = {
    //backgroundColor: '#394056',
    // title: {
    //     text: '请求数',
    //     textStyle: {
    //         fontWeight: 'normal',
    //         fontSize: 16,
    //         color: '#F1F1F3'
    //     },
    //     left: '6%'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
     legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['攻击数量(万次)'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        top:'5%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        splitLine: {
            show:true,
            lineStyle: {
                // color: ['red', 'blue'],
                color: '#57617B',
                type:'dashed'
            }
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
    }],
    yAxis: [{
        type: 'value',
        name: '次数（万次）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B',
                

            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            // show:false,
            lineStyle: {
                color: '#57617B',
                type:'dashed'
            }
        }
    }],
    series: [
    //{
    //     name: '移动',
    //     type: 'line',
    //     smooth: true,
    //     symbol: 'circle',
    //     symbolSize: 5,
    //     showSymbol: false,
    //     lineStyle: {
    //         normal: {
    //             width: 1
    //         }
    //     },
    //     areaStyle: {
    //         normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                 offset: 0,
    //                 color: 'rgba(137, 189, 27, 0.3)'
    //             }, {
    //                 offset: 0.8,
    //                 color: 'rgba(137, 189, 27, 0)'
    //             }], false),
    //             shadowColor: 'rgba(0, 0, 0, 0.1)',
    //             shadowBlur: 10
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: 'rgb(137,189,27)',
    //             borderColor: 'rgba(137,189,2,0.27)',
    //             borderWidth: 12

    //         }
    //     },
    //     data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
    // }, 
    {
        name: '攻击数量(万次)',
        type: 'line',
        // smooth: false,
        smooth:true,//曲线是否平滑显示
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1,
                // color:'red'
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        <!-- data: [5000, 10000, 23000, 14500, 32200, 26500, 42200, 22000, 28000, 35000, 25000, 16000] -->
         data: [0.5, 1, 2.3000, 1.4500, 3.2200, 2.6500, 4.2200, 2.2000, 2.8000, 3.5000, 2.5000, 1.6000]
    }, ]
    //{
    //     name: '联通',
    //     type: 'line',
    //     smooth: true,
    //     symbol: 'circle',
    //     symbolSize: 5,
    //     showSymbol: false,
    //     lineStyle: {
    //         normal: {
    //             width: 1
    //         }
    //     },
    //     areaStyle: {
    //         normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                 offset: 0,
    //                 color: 'rgba(219, 50, 51, 0.3)'
    //             }, {
    //                 offset: 0.8,
    //                 color: 'rgba(219, 50, 51, 0)'
    //             }], false),
    //             shadowColor: 'rgba(0, 0, 0, 0.1)',
    //             shadowBlur: 10
    //         }
    //     },
    //     itemStyle: {
    //         normal: {

    //             color: 'rgb(219,50,51)',
    //             borderColor: 'rgba(219,50,51,0.2)',
    //             borderWidth: 12
    //         }
    //     },
    //     data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    // }, ]
};

// 使用刚指定的配置项和数据显示图表。
timeattackchart.setOption(timeattackoption);