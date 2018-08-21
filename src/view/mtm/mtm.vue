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
      <div style="float: right;">
          <Button size='small' @click='searchAjax' type="defalut" style="margin-right:15px;">Call</Button>
          <Button  size='small' type="defalut">Import</Button>
      </div>
    </h3>
    <div class="middle-box" style="display: block;">
      <Form :model="form" label-position="left" ref="form" >
        <Row type="flex" justify="start" :gutter="10">
          <Col span=6 offset=1>
            <Form-item label="systemType">
              <Select v-model="form.systemType">
                <Option v-for="(item, index) in form.selects" :value="item" :key="index">{{item}}</Option>
            </Select>
            </Form-item>
          </Col>
          <Col span=6>
            <Form-item label="lineUpGeo">
              <Input v-model="form.lineUpGeo" placeholder="Enter something..."></Input>
            </Form-item>
          </Col>
          <Col span=6>
            
          </Col>
        </Row>
      </Form>
      <div class="ag1" style="padding-bottom:10px">
        <Table border stripe :columns="columns" :data="rowData" height="250"></Table>
      </div>
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
import axios from '@/libs/api.request'
export default {
  data () {
    return {
      form: {
        systemType: '',
        selects: ['consumer', 'SMB'],
        lineUpGeo: ''
      },
      toggle: true,
      columns: [
        {title: 'key', key: 'key'},
        {title: 'mtmNo', key: 'mtmNo'},
        {title: 'plant', key: 'plant'},
        {title: 'country', key: 'country'}
      ],
      rowData: [],
      rowData1: [
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
        {headerName: 'KEY',  width: 120, field: 'KEY', cellStyle: {'text-align': 'left'}},
        {headerName: 'MTM_NO',  width: 120, field: 'MTM_NO', cellStyle: {'text-align': 'left'}},
        {headerName: 'PLANT',  width: 120, field: 'PLANT', cellStyle: {'text-align': 'left'}},
        {headerName: 'COUNTRY',  width: 120, field: 'COUNTRY', cellStyle: {'text-align': 'left'}
          // cellRenderer: (params) => {
          //   return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          // }
        },
        {headerName: 'CFECOUNTRY', width: 120, field: 'CFECOUNTRY', cellStyle: {'text-align': 'left'}},
        {headerName: 'Pre_M3', width: 120, field: 'Pre_M3', cellStyle: {'text-align': 'left'}},
        {headerName: 'Pre_M2', width: 120, field: 'Pre_M2', cellStyle: {'text-align': 'left'}},
        {headerName: 'Pre_M1', width: 120, field: 'Pre_M1', cellStyle: {'text-align': 'left'}},
        {headerName: 'M1', width: 120, field: 'M1', cellStyle: {'text-align': 'left'}},
        {headerName: 'M2', width: 120, field: 'M2', cellStyle: {'text-align': 'left'}},
        {headerName: 'M3', width: 120, field: 'M3', cellStyle: {'text-align': 'left'}},
        {headerName: 'M4', width: 120, field: 'M4', cellStyle: {'text-align': 'left'}},
        {headerName: 'M5', width: 120, field: 'M5', cellStyle: {'text-align': 'left'}},
        {headerName: 'M6', width: 120, field: 'M6', cellStyle: {'text-align': 'left'}},
        {headerName: 'M7', width: 120, field: 'M7', cellStyle: {'text-align': 'left'}},
        {headerName: 'M8', width: 120, field: 'M8', cellStyle: {'text-align': 'left'}},
        {headerName: 'M9', width: 120, field: 'M9', cellStyle: {'text-align': 'left'}},
        {headerName: 'M10', width: 120, field: 'M10', cellStyle: {'text-align': 'left'}},
        {headerName: 'M11', width: 120, field: 'M11', cellStyle: {'text-align': 'left'}},
        {headerName: 'M12', width: 120, field: 'M12', cellStyle: {'text-align': 'left'}}
      ],
      rowDataDefs: [],
      rowDataDefs1: [
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
        {
          KEY: 'NP ESS',
          MTM_NO: '',
          PLANT: '',
          'COUNTRY': 'Ocean',
          CFECOUNTRY: 'Ocean',
          Pre_M3: '',
          Pre_M2: '',
          Pre_M1: '',
          M1: '',
          M2: '',
          M3: '',
          M4: '',
          M5: '',
          M6: '',
          M7: '',
          M8: '',
          M9: '',
          M10: '',
          M11: '',
          M12: '',
        },
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
    toggleList () {
      let itembox = document.getElementsByClassName('middle-box')[0]
      if (this.toggle) {
        itembox.style.display = 'none'
      } else {
        itembox.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    searchAjax () {
        var _url = 'http://10.120.116.171:8082/api/cfebmc'
        axios.request({
          url: 'http://10.120.116.171:8082/api/cfebmc',
          params: {    
                "inputBmcEntityList": [    
                  {    
                    "brand": "string",    
                    "ccKey": "string",    
                    "cfecountry": "string",    
                    "country": "string",    
                    "family": "string",    
                    "key": "string",    
                    "machinetype": "string",    
                    "mtmNo": "string",    
                    "office": "string",    
                    "org": "string",    
                    "ph": "string",    
                    "plant": "string",    
                    "productgroup": "string",    
                    "subgeo": "string"    
                  }    
                ],    
                "lineUpGeo": "string",
                "systemType": "string"
              },
          method: 'post'
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
</style>
