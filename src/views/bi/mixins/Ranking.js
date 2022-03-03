import BaseMixin from './Base'

export default {
  data() {
    return {
      loading: false,
      axisOption: {
        color: ['#6ca2ff'],
        toolbox: {
          showTitle: false,
          feature: {
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b} : {c}元',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '40px',
          left: '30px',
          right: '50px',
          bottom: '40px',
          containLabel: true,
          borderColor: '#fff'
        },
        xAxis: [{
          name: '（元）',
          type: 'value',
          data: [],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              width: 0
            }
          },
          axisLabel: {
            color: '#333',
            formatter: '{value}'
          },
          /** 坐标轴轴线相关设置 */
          axisLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              width: 0
            }
          },
          axisLabel: {
            color: '#333'
          },
          /** 坐标轴轴线相关设置 */
          axisLine: {
            lineStyle: {
              color: '#333'
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'right',
              color: '#333'
            }
          },
          barMaxWidth: 20,
          data: []
        }]
      },

      postParams: {}, // 筛选参数

      list: [],
      fieldList: []
    }
  },

  mixins: [BaseMixin],

  components: {},

  props: {},

  computed: {},

  watch: {},

  mounted() {},

  methods: {},

  deactivated: function() {}

}
