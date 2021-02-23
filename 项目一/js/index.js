window.addEventListener("load", function () {

  function reSize(obj) {
    window.addEventListener("resize", function () {
      obj.resize();
    });
  };
  // 柱状图1模块
  (function () {
    // 实例化对象
    let myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    let option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
          axisTick: {
            alignWithLabel: true
          },
          // 设置x轴标签文字样式
          // x轴的文字颜色和大小
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          },
          //  x轴样式不显示
          axisLine: {
            show: false
            // 如果想要设置单独的线条样式 
            // lineStyle: {
            //    color: "rgba(255,255,255,.1)",
            //    width: 1,
            //    type: "solid"
            // }
          }
        }
      ],

      yAxis: [
        {
          type: "value",
          // y 轴文字标签样式
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          },
          // y轴线条样式
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              // width: 1,
              // type: "solid"
            }
          },
          // y 轴分隔线样式
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "35%",
          data: [200, 300, 300, 900, 1500, 1200, 600],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          }
        }
      ]
    };

    // 把配置给实例对象
    myChart.setOption(option);

    reSize(myChart);

  })();

  

  (function () {
    var yearData = [
      {
        year: "2020", // 年份
        data: [
          // 两个数组是因为有两条线
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
      },
      {
        year: "2021", // 年份
        data: [
          // 两个数组是因为有两条线
          [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
          [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
      }
    ];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    // 2.指定配置
    var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "新增粉丝",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "新增游客",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      }
    ]
  };
    // 把配置给实例对象
    myChart.setOption(option);
    reSize(myChart);
  })();
})