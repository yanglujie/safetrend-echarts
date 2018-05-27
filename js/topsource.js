        // 基于准备好的dom，初始化echarts实例
var topsourcechart = echarts.init(document.getElementById('topsource'));

// app.title = '坐标轴刻度与标签对齐';

sourceoption = {
    // color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '2%',
        bottom: '2%',
        top:'5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLine:{//是否显示X轴
                show:true,
                lineStyle:{
                    color:'white'
                }
            },
            name:'IP',
    //         data : [
    // {['192.168.8.201', '192.168.8.201', '192.168.8.201', '192.168.8.201', '192.168.8.201', '192.168.8.201', '192.168.8.201','192.168.8.201','192.168.8.201','192.168.8.201','192.168.8.201','192.168.8.201']
    //         textStyle:{
    //                 color:'red',
    //                 align:'center'
    //             }}],
       data:['192.168.8.201', '192.168.8.221', '192.168.8.201', '192.168.8.201', '192.168.8.201', '192.168.8.201', '192.168.8.201','192.168.8.201','192.168.8.201','192.168.8.201','192.168.8.201','192.168.8.201'],
            axisTick: {
                // show:false,
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            name:'攻击次数（千次）',
             axisLine:{//是否显示X轴
                show:true,
                lineStyle:{
                    color:'white'
                }
            },
            // type : 'category',
            // data : ['10','20','30','40'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    series : [
        {
            name:'攻击目标次数',
            type:'bar',
            barWidth: '60%',
            // barCategoryGap:'10%',
            // barGap:'-100%',
            data:[90, 320, 220, 300, 400, 200, 100,300,300,200,300,200]
        },
        
    ],
    label: {
            normal: {
                show: false,
                position: 'top',
                // formatter: '{b}:{c}'
                formatter: '{c}'

            }
        },
    itemStyle: {
                // cursor:'pointer',
                // barWidth:'20%',
                // barGap:'10%',
                normal: {
                    // borderColor:'red',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3294db'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 0, 0, 0.5)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
};

// 使用刚指定的配置项和数据显示图表。
topsourcechart.setOption(sourceoption);
