var worldfightchart = echarts.init(document.getElementById('globefight'));

    var canvas = document.createElement('canvas');
            var mapChart = echarts.init(canvas, null, {
                width: 2048,
                height: 1024
            });

            mapChart.setOption({
                geo: {
                    type: 'map',
                    map: 'world',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    boundingCoords: [[-180, 90], [180, -90]],
                    silent: true,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(50, 50, 150)',
                            areaColor: 'transparent'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 40
                            }
                        }
                    }
                }
            });

       $.getJSON('js/data/flights.json', function (data) {
    var airports = data.airports.map(function (item) {
        return {
            coord: [item[3], item[4]]
        }
    });
    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }

    // Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
    var routesGroupByAirline = {};
    data.routes.forEach(function (route) {
        var airline = data.airlines[route[0]];
        var airlineName = airline[0];
        if (!routesGroupByAirline[airlineName]) {
            routesGroupByAirline[airlineName] = [];
        }
        routesGroupByAirline[airlineName].push(route);
    });

    var pointsData = [];
    data.routes.forEach(function (airline) {
        pointsData.push(getAirportCoord(airline[1]));
        pointsData.push(getAirportCoord(airline[2]));
    });

    var series = data.airlines.map(function (airline) {
        var airlineName = airline[0];
        var routes = routesGroupByAirline[airlineName];

        if (!routes) {
            return null;
        }
        return {
            type: 'lines3D',
            name: airlineName,

            effect: {
                show: true,
                trailWidth: 2,
                trailLength: 0.15,
                trailOpacity: 1,
                trailColor: 'rgb(30, 30, 60)'
            },

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                // color: 'rgb(118, 233, 241)',
                opacity: 0.1
            },
            blendMode: 'lighter',

            data: routes.map(function (item) {
                return [airports[item[1]].coord, airports[item[2]].coord];
            })
        };
    }).filter(function (series) {
        return !!series;
    });
    series.push({
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
            color: 'yellow',
            opacity: 0.2
        },
        data: pointsData
    });

    worldfightchart.setOption({
        // legend: {
        //     selectedMode: 'single',
        //     left: 'left',
        //     data: Object.keys(routesGroupByAirline),
        //     orient: 'vertical',
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        globe: {
            globeRadius:80,
           baseTexture: 'js/asset/earth.jpg',
            //environment: 'asset/world.topo.bathy.200401.jpg',

            heightTexture: 'js/asset/elev_bump_4k.jpg',
            environment: 'js/asset/background.jpg',
            displacementScale: 0.1,
            //displacementQuality: 'high',

            //baseColor: '#000',

            shading: 'realistic',
            realisticMaterial: {
                roughness: 0.2,
                metalness: 0
            },

            postEffect: {
                enable: true,
                depthOfField: {
                    enable: false,
                    focalDistance: 150
                }
            },
            temporalSuperSampling: {
                enable: true
            },
            light: {
                ambient: {
                    intensity: 0.1
                },
                main: {
                    intensity: 2.5,
                    shadow: true
                },
                ambientCubemap: {
                    texture: 'js/asset/pisa.hdr',
                    exposure: 2,
                    diffuseIntensity: 0.1,
                    specularIntensity: 1
                }
            },
            viewControl: {
                //autoRotate: false//控制是否自己旋转
            },
            layers: [{
                        type: 'blend',
                        blendTo: 'albedo',
                        texture: mapChart
                    },{
                        type: 'blend',
                        blendTo: 'emission',
                        texture: 'js/asset/night.jpg'
                    },{
                        type: 'overlay',
                        texture: 'js/asset/clouds.png',
                        shading: 'lambert',
                        distance: 10
                    }],
            //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件
            silent: true
        },
        series: series
    });
    window.addEventListener('keydown', function () {
        series.forEach(function (series, idx) {
            worldfightchart.dispatchAction({
                type: 'lines3DToggleEffect',
                seriesIndex: idx
            });
        })
    });
});