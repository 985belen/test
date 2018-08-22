<template>
<div class="price-box" ref="priceBox">
  <div ref="topMain" class="topMain">
    <div class="tool-bar" ref="toolBar" style="display: none;">
      <a href="#" class="item"><Icon class="icon" size=16 type="md-trash"/>Delete</a>
      <Divider type="vertical" />
      <a href="#" class="item"><Icon class="icon" size=16 type="md-link" />Email</a>
      <Divider type="vertical" />
      <a href="#" class="item"><Icon class="icon" size=16 type="md-appstore" />Generate Report</a>
      <Divider type="vertical" />
      <a href="#" class="item"><Icon class="icon" size=16 type="md-list-box" />Export Template</a>
      <Divider type="vertical" />
      <a href="#" class="item"><Icon class="icon" size=16 type="md-notifications" />Import Template</a>
      <Divider type="vertical" />
      <a href="#" class="item"><Icon class="icon" size=16 type="md-exit" />Upload Data</a>
      <Divider type="vertical" /> 
      <a href="#" class="item"><Icon class="icon" size=16 type="md-add" />Accepted</a>
    </div>
    <h3 class="marginBottom"><a href="javascript:;" style="display:inline-block;color: #333;"><Icon type="md-pricetags" />Input Information</a>
      <div style="float: right; margin-top: -3px;">
          <Button size='small' @click='searchAjax' type="defalut" style="margin-right:15px;">Call</Button>
          <Button  size='small' type="defalut">Import</Button>
      </div>
    </h3>
    <div class="middle-box" style="display: block;">
      <Form :model="form" label-position="left" ref="form" >
        <Row type="flex" justify="start" :gutter="10">
          <Col span=4 >
            <Form-item label="systemType" style="padding-left: 20px">
              <Select v-model="form.systemType" placeholder="Please select">
                <Option v-for="(item, index) in form.selects" :value="item" :key="index">{{item}}</Option>
            </Select>
            </Form-item>
          </Col>
          <Col span=4>
            <Form-item label="lineUpGeo">
              <Input v-model="form.lineUpGeo" placeholder="Enter something..."></Input>
            </Form-item>
          </Col>
          <Col span=3>
            <Form-item label="key">
              <Input v-model="form.key" placeholder="Enter something..."></Input>
            </Form-item>
          </Col>
          <Col span=3>
            <Form-item label="mtmNo">
              <Input v-model="form.mtmNo" placeholder="Enter something..."></Input>
            </Form-item>
          </Col>
          <Col span=3>
            <Form-item label="plant">
              <Input v-model="form.plant" placeholder="Enter something..."></Input>
            </Form-item>
          </Col>
          <Col span=3>
            <Form-item label="country">
              <Input v-model="form.country" placeholder="Enter something..."></Input>
            </Form-item>
          </Col>
          <Col span=3>
            <Form-item>
              <br/>
              <Button type="info" @click="model=true">More Filters</Button>
            </Form-item>
          </Col>
        </Row>
      </Form>
      <Modal
        v-model="model"
        title="Components"
        :styles="{width:'800px'}"
        ok-text="OK"
        cancel-text="Cancel">
        <ag-grid-vue
          style="width: 100%; height:250px"
          class="ag-theme-balham"
          v-if="model"
          :columnDefs="columns"
          :rowData="rowData"
          :enableSorting="true"
          :enableFilter="true"
          :floatingFilter="true"
          :singleClickEdit="true"
          :suppressResize="true"
          :enableColResize="true"
          rowSelection="multiple">
        </ag-grid-vue>
      </Modal>
    </div>
  </div>
  <h3 class="marginBottom" style="margin-bottom: 10px;"><Icon type="ios-podium" />Output Information</h3>
  <div class="ag2">
    <ag-grid-vue
      style="width: 100%; height:100%;"
      class="ag-theme-balham agContainer"
      :columnDefs="columnDefs"
      :rowData="rowDataDefs"
      :floatingFilter="true"
      :enableSorting="true"
      :enableFilter="true"
      :singleClickEdit="true"
      :suppressSizeToFit="true"
      :suppressResize="true"
      :enableColResize="true"
      rowSelection="multiple">
    </ag-grid-vue>
  </div>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
// import axios from '@/libs/api.request'
import axios from 'axios'

export default {
  data () {
    return {
      model: false,
      form: {
        systemType: '',
        selects: ['consumer', 'SMB'],
        lineUpGeo: ''
      },
      columns: [
        {headerName: 'key', field: 'key'},
        {headerName: 'mtmNo', field: 'mtmNo'},
        {headerName: 'plant', field: 'plant'},
        {headerName: 'country', field: 'country'}
      ],
      rowData: [
        {
          key: '12',
          mtmNo: '221',
          plant:'asd',
          country: 'asdsa'
        },
        {
          key: '23',
          mtmNo: '23e',
          plant:'rewf',
          country: 'wefd'
        },
        {
          key: 'wef',
          mtmNo: '23efd',
          plant:'23',
          country: '23'
        },
        {
          key: '12',
          mtmNo: '221',
          plant:'asd',
          country: 'asdsa'
        },
        {
          key: '23',
          mtmNo: '23e',
          plant:'rewf',
          country: 'wefd'
        },
        {
          key: '23',
          mtmNo: '23e',
          plant:'rewf',
          country: 'wefd'
        },
        {
          key: '23',
          mtmNo: '23e',
          plant:'rewf',
          country: 'wefd'
        },
        {
          key: '23',
          mtmNo: '23e',
          plant:'rewf',
          country: 'wefd'
        },
        {
          key: 'wef',
          mtmNo: '23efd',
          plant:'23',
          country: '23'
        },
        {
          key: '23d',
          mtmNo: '2d',
          plant:'d23',
          country: '3de2'
        },
        {
          key: '23rd',
          mtmNo: '34',
          plant:'dsf',
          country: 'er'
        }
      ],
      columnDefs: [
        {headerName: 'KEY',  width: 120, field: 'key', cellStyle: {'text-align': 'left'}},
        {headerName: 'MTM_NO',  width: 120, field: 'mtm_NO', cellStyle: {'text-align': 'left'}},
        {headerName: 'PLANT',  width: 120, field: 'plant', cellStyle: {'text-align': 'left'}},
        {headerName: 'COUNTRY',  width: 120, field: 'country', cellStyle: {'text-align': 'left'}
          // cellRenderer: (params) => {
          //   return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          // }
        },
        {headerName: 'CFECOUNTRY', width: 120, field: 'cfecountry', cellStyle: {'text-align': 'left'}},
        {headerName: 'Pre_M3', width: 120, field: 'pre_M3', cellStyle: {'text-align': 'left'}},
        {headerName: 'Pre_M2', width: 120, field: 'pre_M2', cellStyle: {'text-align': 'left'}},
        {headerName: 'Pre_M1', width: 120, field: 'pre_M1', cellStyle: {'text-align': 'left'}},
        {headerName: 'M1', width: 120, field: 'm1', cellStyle: {'text-align': 'left'}},
        {headerName: 'M2', width: 120, field: 'm2', cellStyle: {'text-align': 'left'}},
        {headerName: 'M3', width: 120, field: 'm3', cellStyle: {'text-align': 'left'}},
        {headerName: 'M4', width: 120, field: 'm4', cellStyle: {'text-align': 'left'}},
        {headerName: 'M5', width: 120, field: 'm5', cellStyle: {'text-align': 'left'}},
        {headerName: 'M6', width: 120, field: 'm6', cellStyle: {'text-align': 'left'}},
        {headerName: 'M7', width: 120, field: 'm7', cellStyle: {'text-align': 'left'}},
        {headerName: 'M8', width: 120, field: 'm8', cellStyle: {'text-align': 'left'}},
        {headerName: 'M9', width: 120, field: 'm9', cellStyle: {'text-align': 'left'}},
        {headerName: 'M10', width: 120, field: 'm10', cellStyle: {'text-align': 'left'}},
        {headerName: 'M11', width: 120, field: 'm11', cellStyle: {'text-align': 'left'}},
        {headerName: 'M12', width: 120, field: 'm12', cellStyle: {'text-align': 'left'}}
      ],
      rowDataDefs: [
      ]
    }
  },
  components: {
    AgGridVue
  },
  created () {

  },
  mounted () {
    this.calcGridHeight()
    window.addEventListener('resize', () => {
      window.clearTimeout(this.timer)
      this.timer = window.setTimeout(() => {
        this.calcGridHeight()
      }, 100)
    })
  },
  methods: {
    calcGridHeight () {
      var screenHeight = window.innerHeight
      var topHeight = document.getElementsByClassName('topMain')[0].offsetHeight
      var t1 = document.getElementsByClassName('split-pane-page-wrapper')[1]
      var ag = document.getElementsByClassName('agContainer')[0]
      ag.style.height = screenHeight - topHeight - 64 - 10 - 10+ 'px' // 64是头部的高度，10是padding
      t1.style.height = screenHeight - topHeight - 64 - 10 - 10 + 'px'
      acontainer.style.height = screenHeight - topHeight - 64 -10 -10 + 'px'
    },
    searchAjax () {
        var _url = 'http://10.120.116.171:8082/api/cfebmc'
        var obj = {
            "inputBmcEntityList":[{"country":"TM","key":"1","mtmNo":"80M100ELRU","plant":"BITLAND_NB"},{"country":"LI","key":"2","mtmNo":"80VR00GJFR","plant":"LCFC_NB"},{"country":"LI","key":"3","mtmNo":"80VR00GJFR","plant":"1"},{"country":"AT","key":"4","mtmNo":"90B6009MUK","plant":"S111"},{"country":"AT","key":"5","mtmNo":"90FB007LGE","plant":"1"},{"country":"LI","key":"6","mtmNo":"90AV001NFR","plant":"S111"},{"country":"DE","key":"7","mtmNo":"30BK001YFR","plant":"FLEX_HGY"},{"country":"DE","key":"8","mtmNo":"30BK001YFR","plant":"1"},{"country":"LI","key":"9","mtmNo":"30BK001YFR","plant":"FLEX_HGY"},{"country":"LI","key":"10","mtmNo":"30BK001YFR","plant":"1"},{"country":"MY","key":"11","mtmNo":"GX20G46698","plant":"S120"},{"country":"AE","key":"12","mtmNo":"G0A10170AR","plant":"1"},{"country":"CA","key":"13","mtmNo":"65ACGCC1US","plant":"S111"},{"country":"CN","key":"14","mtmNo":"60C7MCR1CB","plant":"1"},{"country":"AT","key":"16","mtmNo":"5MS0M38429","plant":"N/A"},{"country":"DE","key":"17","mtmNo":"5MS0M38429","plant":"N/A"},{"country":"AT","key":"19","mtmNo":"5MS0M38429","plant":"1"},{"country":"BE","key":"20","mtmNo":"ZA090000SE","plant":"1"},{"country":"LI","key":"21","mtmNo":"ZA200050FR","plant":"1"},{"country":"TH","key":"22","mtmNo":"ZG38C00964","plant":"1"}],"lineUpGeo":"","systemType":"consumer"
              }
        axios.post(_url,obj).then((res)=>{

          this.rowDataDefs = res.data.data
        })

    }
  }
}
</script>
<style lang="less">
.price-box{
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 10px;
  background: #fff;
}
.tool-bar{
  width:100%;
  height:32px;
  box-shadow: 0 0 5px #ccc;
  margin-bottom:10px;
  padding: 0 10px;
  .item{
    color:#666;
    height:32px;
    line-height: 32px;
    &:hover{
      color:rgb(40, 122, 245);
    }
    .icon{
      padding: 0 2px;
      height:32px;
      line-height: 32px;
    }
  }
}
.ivu-table th, .ivu-table td{
  height:30px
}
h3{
  height:30px;
  line-height: 30px;
  background: #eee;
  padding: 0 20px;
  &.marginBottom{
    margin-bottom: 10px;
  }
}
.item-box{
  width:100%;
  height:auto;
  margin-bottom:5px;
  overflow: hidden;
  padding-top: 3px;
}
.ag2{
  width: 100%;
  height:auto;
  overflow: hidden;
  margin-bottom: 10px;
}
.ivu-tabs-bar{
  margin-bottom: 2px;
}
.ivu-form-label-left .ivu-form-item-label,
.ivu-form-item-content{
  float:left;
}
.ivu-select{
  width:162px;
}
.ivu-form-item{
  margin-bottom:10px;
}
.marginBottom{
.ivu-btn,
.ivu-btn:hover{
  background: #fff;
  outline:none;
}
}

.ivu-btn.ivu-btn-info{
  background-color: #2db7f5;
}


</style>
