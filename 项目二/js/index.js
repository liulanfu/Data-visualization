$(function () {
    (function () {
        $('.monitor .tabs').on('click', 'a', function () {
            $(this).addClass('active').siblings('').removeClass('active');
            $('.content').eq($(this).index()).show().siblings('.content').hide();
        });
    })();

    (function () {
        $('.marquee-view .marquee').each(function () {
            let row = $(this).children().clone();
            $(this).append(row);
        });
    })();

    // 点位分布统计模块
    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".pie"));
        // 2. 指定配置项和数据
        var option = {
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // 注意颜色写的位置
            color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
            ],
            series: [
                {
                    name: "点位统计",
                    type: "pie",
                    // 如果radius是百分比则必须加引号
                    radius: ["10%", "70%"],
                    center: ["50%", "50%"],
                    roseType: "radius",
                    data: [
                        { value: 20, name: "云南" },
                        { value: 26, name: "北京" },
                        { value: 24, name: "山东" },
                        { value: 25, name: "河北" },
                        { value: 20, name: "江苏" },
                        { value: 25, name: "浙江" },
                        { value: 30, name: "四川" },
                        { value: 32, name: "江西" },
                        { value: 42, name: "湖北" }
                    ],
                    // 修饰饼形图文字相关的样式 label对象
                    label: {
                        fontSize: 10
                    },
                    // 修饰引导线样式
                    labelLine: {
                        // 连接到图形的线长度
                        length: 6,
                        // 连接到文字的线长度
                        length2: 8
                    }
                }
            ]
        };

        // 3. 配置项和数据给我们的实例化对象
        myChart.setOption(option);
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });
    })();

    (function () {
        const myChart = echarts.init(document.querySelector('.bar'));
        let item = {
            name: '',
            value: 1200,
            // 柱子颜色
            itemStyle: {
                color: '#254065'
            },
            // 鼠标经过柱子颜色
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            // 工具提示隐藏
            tooltip: {
                extraCssText: 'opacity:0'
                //或者使用
                // show: false
            },
        }
        const option = {
            // 修改线性渐变色方式 1
            color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' }  // 1 结束颜色
                ]
            ),
            tooltip: {
                trigger: 'item',
                // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                //     type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                // }
            },
            // 直角坐标系内绘图网格（区域）
            grid: {
                top: '3%',
                right: '3%',
                bottom: '3%',
                left: '0%',
                //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
                containLabel: true,
                // 是否显示直角坐标系网格
                show: true,
                //grid 四条边框的颜色
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },

            xAxis: [
                {
                    type: 'category',
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    axisTick: {
                        // true意思：图形和刻度居中中间
                        // false意思：图形在刻度之间
                        alignWithLabel: false,
                        // 不显示刻度
                        show: false
                    },
                    // x坐标轴文字标签样式设置
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    // x坐标轴颜色设置
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                            // width:8,  x轴线的粗细
                            // opcity: 0,   如果不想显示x轴线 则改为 0
                        }
                    }

                }
            ],
            yAxis: [
                {
                    // 使用类目，必须有data属性
                    type: 'value',
                    // 使用 data 中的数据设为刻度文字
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    // 刻度设置
                    axisTick: {
                        // 不显示刻度
                        show: false
                    },
                    // y坐标轴文字标签样式设置
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    // y坐标轴颜色设置
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                            // width:8,  x轴线的粗细
                            // opcity: 0,   如果不想显示x轴线 则改为 0
                        }
                    },
                    // y轴 分割线的样式 
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
                }
            ]
        };

        myChart.setOption(option);
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener('resize', function () {
            myChart.resize();
        })
    })();

    (function () {
        const data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        const myChart = echarts.init(document.querySelector('.line'));
        const option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            // 图例组件
            legend: {
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色
                },
                right: '10%' // 距离右边10%
            },
            // 设置网格样式
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,// 显示边框
                borderColor: '#012f4a',// 边框颜色
                containLabel: true // 包含刻度文字在内
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    show: false // 去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd' // 文本颜色
                },
                axisLine: {
                    show: false // 去除轴线
                },
                boundaryGap: false  // 去除轴内间距
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false  // 去除刻度
                },
                axisLabel: {
                    color: '#4c9bfd' // 文字颜色
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a' // 分割线颜色
                    }
                }
            },
            // 图标数据
            series: [{
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                smooth: true
            }, {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                smooth: true
            }
            ]
        };

        myChart.setOption(option);
        // 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });



        $('.sales .caption').on('click', 'a', function () {
            index = $(this).index() - 1;
            $(this).addClass('active').siblings('a').removeClass('active');
            // console.log($(this).data('type'));  //获取当前自定义属性值
            const type = $(this).data('type');
            const arr = data[type];
            // console.log(currentData);
            option.series[0].data = arr[0];
            option.series[1].data = arr[1];
            //获取数据后重新渲染图表
            myChart.setOption(option);

        });

        let index = 0;
        let a = $('.sales .caption a');

        let timer = setInterval(function () {
            index++;
            if (index >= 4) index = 0;
            $(a).eq(index).click();


        }, 1000);

        $('.sales').hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 4) index = 0;
                $(a).eq(index).click();
            }, 1000);
        });

    })();

    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".radar"));
        // 2.指定配置
        var option = {
            tooltip: {
                show: true,
                // 控制提示框组件的显示位置
                position: ["60%", "10%"]
            },
            radar: {
                indicator: [
                    { name: "机场", max: 100 },
                    { name: "商场", max: 100 },
                    { name: "火车站", max: 100 },
                    { name: "汽车站", max: 100 },
                    { name: "地铁", max: 100 }
                ],
                // 修改雷达图的大小
                radius: "65%",
                shape: "circle",
                // 分割的圆圈个数
                splitNumber: 4,
                name: {
                    // 修饰雷达图文字的颜色
                    textStyle: {
                        color: "#4c9bfd"
                    }
                },
                // 分割的圆圈线条的样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255, 0.5)"
                    }
                },
                splitArea: {
                    show: false
                },
                // 坐标轴的线修改为白色半透明
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.5)"
                    }
                }
            },
            series: [
                {
                    name: "北京",
                    type: "radar",
                    // 填充区域的线条颜色
                    lineStyle: {
                        normal: {
                            color: "#fff",
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: [[90, 19, 56, 11, 34]],
                    // 设置图形标记 （拐点）
                    symbol: "circle",
                    // 这个是设置小圆点大小
                    symbolSize: 5,
                    // 设置小圆点颜色
                    itemStyle: {
                        color: "#fff"
                    },
                    // 让小圆点显示数据
                    label: {
                        show: true,
                        fontSize: 10
                    },
                    // 修饰我们区域填充的背景颜色
                    areaStyle: {
                        color: "rgba(238, 197, 102, 0.6)"
                    }
                }
            ]
        };
        // 3.把配置和数据给对象
        myChart.setOption(option);
        // 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });
    })();

    (function () {
        const hotData = [
            {
                city: '北京',  // 城市
                sales: '25, 179',  // 销售额
                flag: true, //  上升还是下降
                brands: [   //  品牌种类数据
                    { name: '可爱多', num: '9,086', flag: true },
                    { name: '娃哈哈', num: '8,341', flag: true },
                    { name: '喜之郎', num: '7,407', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '6,724', flag: false },
                    { name: '好多鱼', num: '2,170', flag: true },
                ]
            },
            {
                city: '河北',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '3,457', flag: false },
                    { name: '娃哈哈', num: '2,124', flag: true },
                    { name: '喜之郎', num: '8,907', flag: false },
                    { name: '八喜', num: '6,080', flag: true },
                    { name: '小洋人', num: '1,724', flag: false },
                    { name: '好多鱼', num: '1,170', flag: false },
                ]
            },
            {
                city: '上海',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '2,345', flag: true },
                    { name: '娃哈哈', num: '7,109', flag: true },
                    { name: '喜之郎', num: '3,701', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '2,724', flag: false },
                    { name: '好多鱼', num: '2,998', flag: true },
                ]
            },
            {
                city: '江苏',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '2,156', flag: false },
                    { name: '娃哈哈', num: '2,456', flag: true },
                    { name: '喜之郎', num: '9,737', flag: true },
                    { name: '八喜', num: '2,080', flag: true },
                    { name: '小洋人', num: '8,724', flag: true },
                    { name: '好多鱼', num: '1,770', flag: false },
                ]
            },
            {
                city: '山东',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '9,567', flag: true },
                    { name: '娃哈哈', num: '2,345', flag: false },
                    { name: '喜之郎', num: '9,037', flag: false },
                    { name: '八喜', num: '1,080', flag: true },
                    { name: '小洋人', num: '4,724', flag: false },
                    { name: '好多鱼', num: '9,999', flag: true },
                ]
            }
        ];
        let supli = '';
        $.each(hotData, function (i, item) {
            // console.log(item);
            supli += `<li><span>${item.city}</span><span>${item.sales} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
        });
        $('.sup').html(supli);

        let index = 0;

        $('.province ul').on("mouseenter", 'li', function () {
            index = $(this).index();

            render($(this));
        });
        //单独设置一个函数
        function render(_this) {
            _this.addClass('active').siblings('li').removeClass('active');

            const i = _this.index();

            const brandsData = hotData[i].brands;
            // console.log(brandsData);
            let subli = '';
            $.each(brandsData, function (i, item) {
                subli += `<li><span>${item.name}</span><span>${item.num}<s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`
            });
            $('.sub').html(subli);
        }
        // 所有的LI
        var $lis = $('.province .sup li')
        // 第一个默认激活
        $lis.eq(0).mouseenter()

        let timer = setInterval(function () {
            index++;
            if (index >= $lis.length) index = 0;
            render($lis.eq(index));
        }, 1000);

        $('.province .sup').hover(function () {

            clearInterval(timer);

        }, function () {

            clearInterval(timer);

            timer = setInterval(function () {
                index++;
                if (index >= $lis.length) index = 0;
                render($lis.eq(index));
            }, 1000);

        });

    })();

    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".gauge"));
        // 2. 指定数据和配置
        var option = {
            series: [
                {
                    type: 'pie',
                    // 放大图形
                    radius: ['130%', '150%'],
                    // 移动下位置  套住50%文字
                    center: ['48%', '80%'],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    // 起始角度，支持范围[0, 360]
                    // startAngle: 180,
                    // 鼠标经过不变大
                    hoverOffset: 0,
                    data: [
                        { value: 100, itemStyle: { color: '#12274d' } }, // 颜色#12274d
                        { value: 200, itemStyle: { color: 'transparent' } },// 透明隐藏第三块区域
                        {
                            value: 100,
                            itemStyle: {
                                // 颜色渐变#00c9e0->#005fc1
                                color: new echarts.graphic.LinearGradient(
                                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#005fc1" }, // 1 结束颜色
                                        { offset: 1, color: "#00c9e0" } // 0 起始颜色
                                    ]
                                )
                            }
                        },

                    ]
                }
            ]
        }
        // 3. 把数据和配置给实例对象
        myChart.setOption(option);
        // 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });

    })();
})