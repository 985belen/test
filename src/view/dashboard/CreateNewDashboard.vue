<template>
<div class="dashboard-box">
  <Form :model="FormItem" class="form-box">
    <Row>
      <Col span=6>
        <FormItem label="DashboardType" :label-width="120">
          <CheckboxGroup v-model="FormItem.checkGraph">
            <Checkbox label="pie"><Icon type="md-pie" style="font-size:24px;color: orange"/></Checkbox>
            <Checkbox label="bar"><Icon type="ios-stats-outline" style="font-size:24px;color: purple"/></Checkbox>
            <Checkbox label="line"><Icon type="md-pulse" style="font-size:24px;color: blue"/></Checkbox>
            <Checkbox label="bar2"><Icon type="md-stats" style="font-size:24px;color: lightblue"/></Checkbox>
            <Checkbox label="bar3"><Icon type="ios-podium" style="font-size:24px;color: purple"/></Checkbox>
            <Checkbox label="line1"><Icon type="md-trending-down" style="font-size:24px;color: cyan"/></Checkbox>
            <Checkbox label="line2"><Icon type="md-pulse" style="font-size:24px;color: red"/></Checkbox>
            <Checkbox label="line3"><Icon type="md-trending-up" style="font-size:24px;color: green"/></Checkbox>
            <Checkbox label="line4"><Icon type="md-pulse" style="font-size:24px;color: blue"/></Checkbox>
            <Checkbox label="bar1"><Icon type="ios-podium" style="font-size:24px;color: lightblue"/></Checkbox>
            <Checkbox label="line5"><Icon type="md-trending-up" style="font-size:24px;color: purple"/></Checkbox>
            <Checkbox label="pie1"><Icon type="md-pie" style="font-size:24px;color: gray"/></Checkbox>
          </CheckboxGroup>
        </FormItem>
      </Col>
      <Col span=8>
        <FormItem label="DataSource" :label-width="130">
          <CheckboxGroup v-model="FormItem.checkData">
            <Checkbox label="Country"></Checkbox>
            <Checkbox label="Quarter"></Checkbox>
            <Checkbox label="Customer"></Checkbox>
            <Checkbox label="CA(Units)"></Checkbox>
            <Checkbox label="BMC Margin"></Checkbox>
            <Checkbox label="TMC Margin"></Checkbox>
            <Checkbox label="Revenue"></Checkbox>
            <Checkbox label="Product"></Checkbox>
            <Checkbox label="Product Series"></Checkbox>
            <Checkbox label="Product Family"></Checkbox>
            <Checkbox label="List Price"></Checkbox>
            <Checkbox label="Request Price"></Checkbox>
            <Checkbox label="BMC Cost"></Checkbox>
            <Checkbox label="TMC Cost"></Checkbox>
          </CheckboxGroup>
        </FormItem>
      </Col>
      <Col span=2 offset=1>
        <FormItem>
          <Button size="small" type="primary" @click="lineshow=true">Add</Button>
          <Dropdown style="width: 100%">
            <Button size="small" type="primary">Add More
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <span class="spanstyle" @click="barshow=true">sample2</span>
              <span class="spanstyle" @click="barstackshow=true">sample3</span>
            </DropdownMenu>
          </Dropdown>
          <Button size="small" type="primary">Update Report</Button>
          <Button size="small" type="primary">Save Report</Button>
        </FormItem>
      </Col>
      <Col span=2 offset=1>
        <FormItem>
          <Button size="small" type="primary">Publish</Button>
          <Button size="small" type="primary">Download</Button>
        </FormItem>
      </Col>
    </Row>
  </Form>
  <!-- <div class="pieGraph" ref="pieGraph" style="width: 1100px;height:400px;margin: 0 auto;background:#eee"></div> -->
  <div v-show="lineshow" ref="lineGraph" style="width: 1100px;height:400px;margin: 10px auto;background:#fafaf0"></div>
  <div v-show="barshow" ref="barchart" style="width: 1100px;height:400px;margin: 10px auto;background:#fafefa"></div>
  <div v-show="barstackshow" ref="barstack" style="width: 1100px;height:400px;margin: 10px auto;background:#f0fefa"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import { AgGridVue } from 'ag-grid-vue'
export default {
  data () {
    return {
      pieshow: false,
      lineshow: false,
      barshow: false,
      barstackshow: false,
      FormItem: {
        Createdby: '',
        Keywords: ''
      },
      checkGraph: [],
      checkData: []
    }
  },
  components: {
    AgGridVue
  },
  mounted () {
    this.$nextTick(() => {
      // this.pie()
      this.line()
      this.bar()
      this.barstack()
    }, 3000)
  },
  methods: {
    pie () {
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#559DF2', '#36F050', '#F0C136', '#F00FBC', '#F00F39'],
        legend: {
          // orient: 'vertical',
          right: '0',
          top: '10%',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '40%',
            center: ['45%', '60%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      let pieGraph = echarts.init(this.$refs.pieGraph)
      pieGraph.setOption(option)
    },
    line () {
      var option = {
        title: {
          text: 'SO PSD Accuracy',
          left: '6%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '6%',
          top: '15%',
          containLabel: true
        },
        calculable: true,
        xAxis: [
          {
            name: 'Margin',
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }
        ],
        yAxis: {
          type: 'value',
          name: 'Quarter'
        },
        series: [
          {
            name: 'TMC Margin',
            type: 'line',
            areaStyle: {
              normal: {
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(199, 37, 50, 0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(199, 37, 50, 0.6)'
                }], false)
              }
            },
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default'
                }
              }
            },
            data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 121, 391]
          },
          {
            name: 'BMC Margin',
            type: 'line',
            areaStyle: {
              normal: {
                type: 'default',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(129, 37, 50, 0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(129, 37, 50, 0.6)'
                }], false)
              }
            },
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default'
                }
              }
            },
            data: [122, 275, 320, 349, 414, 167, 242, 418, 457, 393, 221, 291]
          }
        ]
      }
      let lineGraph = echarts.init(this.$refs.lineGraph)
      lineGraph.setOption(option)
    },
    bar () {
      var option = {
        title: {
          text: '虚拟订单有效期情况统计',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['NB', 'DT', 'Think']
        },
        grid: {
          left: '3%',
          right: '4%',
          containLabel: true
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            start: 0,
            end: 100
          }
        ],
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: 'NB',
            type: 'bar',
            barGap: 1,
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [123, 69, 34, 12, 44, 65, 40]
          },
          {
            name: 'DT',
            type: 'bar',
            barGap: 1,
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [15, 24, 54, 89, 26, 90, 58]
          },
          {
            name: 'Think',
            type: 'bar',
            barGap: 1,
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [45, 64, 24, 46, 20, 80, 45]
          }
        ]
      }
      let barchart = echarts.init(this.$refs.barchart)
      barchart.setOption(option)
    },
    barstack () {
      var option = {
        title: {
          text: 'CA(Units)',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Italy', 'Germany', 'United Kingdom']
        },
        color: ['pink', 'cyan', 'orange'],
        grid: {
          left: '3%',
          right: '6%',
          containLabel: true
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            start: 0,
            end: 100
          }
        ],
        xAxis: {
          name: 'Quarter',
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: 'Italy',
            type: 'bar',
            barGap: 1,
            stack: 'ca',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [123, 69, 34, 12, 44, 65, 40]
          },
          {
            name: 'Germany',
            type: 'bar',
            barGap: 1,
            stack: 'ca',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [15, 24, 54, 89, 26, 90, 58]
          },
          {
            name: 'United Kingdom',
            type: 'bar',
            barGap: 1,
            stack: 'ca',
            barWidth: '25px',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'insideRight'
            //   }
            // },
            data: [45, 64, 24, 46, 20, 80, 45]
          }
        ]
      }
      let barchart = echarts.init(this.$refs.barstack)
      barchart.setOption(option)
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.dashboard-box{
  width:100%;
  height:100%;
  min-height: 500px;
  padding: 10px 0;
  background: #fff;
  .ivu-col-span-8{
    .ivu-checkbox-group-item{
      width:45%;
    }
  }
  .ivu-col-span-6{
    .ivu-checkbox-group-item{
      width:28%;
    }
  }
  .ivu-col-span-2{
    .ivu-btn{
      width:100%;
    }
  }
  .spanstyle{
    display: block;
    width: 100%;
    height:100%;
    text-align:center;
    cursor:pointer;
  }
}
</style>
