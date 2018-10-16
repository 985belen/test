<template>
<div class="dashboard-box">
  <Form :model="FormItem" class="form-box">
    <Row>
      <Col span=6>
        <FormItem label="DashboardType" :label-width="120">
          <!-- {{FormItem.checkGraph}} -->
          <CheckboxGroup v-model="FormItem.checkGraph">
            <Checkbox label="pie" ><Icon type="md-pie" style="font-size:24px;color: orange"/></Checkbox>
            <Checkbox label="bar" checked><Icon type="ios-stats-outline" style="font-size:24px;color: purple"/></Checkbox>
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
      <Col span=10>
        <FormItem label="DataSource" :label-width="130">
          <CheckboxGroup v-model="FormItem.checkData">
            <Checkbox label="Country"></Checkbox>
            <Checkbox label="Quarter"></Checkbox>
            <Checkbox label="Customer"></Checkbox>
            <Checkbox label="CA(Units)"></Checkbox>
            <Checkbox label="BMC Margin"></Checkbox>
            <Checkbox label="Total Cost Margin"></Checkbox>
            <Checkbox label="Revenue"></Checkbox>
            <Checkbox label="Product"></Checkbox>
            <Checkbox label="Product Series"></Checkbox>
            <Checkbox label="Product Family"></Checkbox>
            <Checkbox label="List Price"></Checkbox>
            <Checkbox label="Request Price"></Checkbox>
            <Checkbox label="BMC Cost"></Checkbox>
            <Checkbox label="Total Cost"></Checkbox>
          </CheckboxGroup>
        </FormItem>
      </Col>
      <Col span=2 offset=1>
        <FormItem>
          <Button size="small" type="primary">Add</Button>
          <Dropdown style="width: 100%">
            <Button size="small" type="primary">Add More
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <span class="spanstyle">Sample2</span>
              <span class="spanstyle">Sample3</span>
            </DropdownMenu>
          </Dropdown>
          <Button size="small" type="primary">Update Report</Button>
          <Button size="small" type="primary">Save Report</Button>
        </FormItem>
      </Col>
      <Col span=2 offset=1>
        <FormItem>
          <Button size="small" type="primary" @click="publicModal= true">Publish</Button>
          <Button size="small" type="primary">Download</Button>
        </FormItem>
      </Col>
    </Row>
  </Form>
  <Modal
    v-model="publicModal"
    title="Publish"
    :styles="{width:'800px'}"
    ok-text="Publish"
    cancel-text="Cancel">
    <Form :model="publicForm" label-position="left" ref="publicForm" >
      <Row type="flex" justify="center">
        <Col span=12>
          <Form-item label="Title" :label-width="60">
            <Input v-model="publicForm.title" placeholder="Enter something..."/>
          </Form-item>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span=12>
          <Form-item label="To" :label-width="60">
            <Input v-model="publicForm.to" placeholder="Enter something..."/>
          </Form-item>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span=12>
          <Form-item label="CC" :label-width="60">
            <Input v-model="publicForm.cc" placeholder="Enter something..."/>
          </Form-item>
        </Col>
      </Row>
    </Form>
  </Modal>
  <div ref="lineGraph" style="width: 70%;height:300px;margin:15px auto;background:#fafaf0"></div>
  <div ref="barchart" style="width: 70%;height:300px;margin:15px auto;background:#fafefa"></div>
  <div ref="barstack" style="width: 70%;height:300px;margin:15px auto;background:#f0fefa"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import { AgGridVue } from 'ag-grid-vue'
export default {
  data () {
    return {
      lineshow: false,
      barshow: false,
      barstackshow: false,
      publicModal: false,
      FormItem: {
        Createdby: '',
        Keywords: '',
        checkGraph: ['bar'],
        checkData: ['Country', 'Product', 'Revenue']
      },
      publicForm: {
        title: '',
        to: '',
        cc: ''
      }
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
    line () {
      var option = {
        title: {
          text: 'SO PSD Accuracy',
          left: '10%',
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '8%',
          top: '15%',
          containLabel: true
        },
        calculable: true,
        xAxis: [
          {
            name: 'Margin',
            type: 'category',
            boundaryGap: false,
            data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JLY', 'AUG', 'SEP', 'OTC', 'NOV', 'DEC']
          }
        ],
        yAxis: {
          type: 'value',
          name: 'Quarter'
        },
        series: [
          {
            name: 'Total Cost Margin',
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
          left: '10%',
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
          right: '8%',
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
          data: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
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
          left: '10%',
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
          right: '8%',
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
          data: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
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
<style lang="less" rel="stylesheet/less">
.dashboard-box{
  width:100%;
  height:100%;
  padding: 10px 0;
  background: #fff;
  .ivu-form-label-left .ivu-form-item-label,
  .ivu-form-item-content{
    float: left;
  }
  .ivu-col-span-10{
    .ivu-checkbox-group-item{
      width: 30%;
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
    &:hover{
      background: #eee;
    }
  }
}
</style>
