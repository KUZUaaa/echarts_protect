// 监控区
(function() {
    $('.monitor .tabs').on('click', 'a', function() {
        $(this).addClass('active').siblings().removeClass('active')
        $('.content').eq($(this).index()).show().siblings('.content').hide()
            // index（）获取点击的a的序号再给content搜索eq序号
    })
    $('.marquee').each(function() {
        let rows = $(this).children().clone()
        $(this).append(rows)
    })
})();
// 左下可视化
(function() {
    var mychart = echarts.init(document.querySelector('.pie'))
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // 颜色
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [{
            name: 'Area Mode',
            type: 'pie',
            radius: [10, 70],
            // 圆的内半径和外半径
            center: ['50%', '50%'],
            // 位置x ，y
            roseType: 'radiu',
            // 显示模式：'area'面积显示/'radiu'半径显示
            itemStyle: {
                borderRadius: 0
            },
            // 圆弧
            label: {
                fontSize: 10
            },
            // 字体大小
            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ],
            labelLine: {
                length: 6,
                length2: 8,
            }
        }]
    };
    mychart.setOption(option)
        // 图表缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 中上可视化
// (function() {
//     var mychart = echart.init(document.querySelector('.geo'))
//     var

// })();
// 中下可视化
(function() {
    var myChart = echarts.init(document.querySelector(".bar"));
    // 中间省略的数据  准备三项
    var item = {
        name: '1',
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
        },
    }

    var option = {
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'item',
            // 轴触发提示才有效
            axisPointer: {
                // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
                type: 'line'
            }
        },
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            top: '3%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            // 是否包含文本
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            // 网格边框颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            // 刻度设置
            axisTick: {
                // true意思：图形在刻度中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                show: false
            },
            // x坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        }],
        // 控制y轴
        yAxis: [{
            // 使用数据的值设为刻度文字
            type: 'value',
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
                    // 使用深浅的间隔色
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            },
        }],


        series: [{
            // 图表数据名称
            name: '用户统计',
            // 图表类型
            type: 'bar',
            // 柱子宽度
            barWidth: '60%',
            // 数据
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],


        }],


    };
    myChart.setOption(option)
        // 图表缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();