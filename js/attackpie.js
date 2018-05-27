
        // 基于准备好的dom，初始化echarts实例
var attackpiechart = echarts.init(document.getElementById('attackpie'));

pieoption = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // visualMap: {
    //     show: false,
    //     min: 80,
    //     max: 600,
    //     inRange: {
    //         colorLightness: [0, 1]
    //     }
    // },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    series : [
        {
            name: '攻击次数',
            type: 'pie',
            radius : '65%',
            center: ['40%', '50%'],
            data:[
                {value:335, name:'亚洲'},
                {value:310, name:'欧洲'},
                {value:234, name:'北美洲'},
                {value:135, name:'南美洲'},
                {value:535, name:'非洲'},
                {value:1253, name:'大洋洲'},
                {value:777, name:'南极洲'},

            ],
              // roseType: 'radius',
            itemStyle: {
                 normal: {
                    color: '#1e9f99',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

currentIndex = -1;

setInterval(function () {
    var dataLen = pieoption.series[0].data.length;
    // 取消之前高亮的图形
    attackpiechart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    attackpiechart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    // 显示 tooltip
    attackpiechart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
}, 1000);

// 使用刚指定的配置项和数据显示图表。
attackpiechart.setOption(pieoption);
