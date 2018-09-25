<template>
<div class="price-box" ref="priceBox">
  <div ref="topMain" class="topMain" >
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
    <h3 class="marginBottom">
      <Icon type="md-pricetags" />Input Information
      <div style="float: right; margin-top: -3px;">
        <Button size='small' @click='searchAjax' type="defalut" style="margin-right:15px;">Call</Button>
        <Button size='small' type="defalut">Import</Button>
      </div>
    </h3>
    <div class="middle-box"  style="display: block;">
      <Form :model="form" label-position="left" ref="form" >
        <Row type="flex" justify="start" :gutter="10">
          <Col style="padding-left: 20px">
            <FormItem label="pns">
              <Input style="width:400px" v-model="form.pns" placeholder="Enter something..."/>
              *以逗号分隔
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
  <h3 class="marginBottom" style="margin-bottom: 10px;">
    <Icon type="ios-podium" />Output Information</h3>
  <div class="ag2">
    <ag-grid-vue
      style="width:1200px; height:100%;"
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
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        pns: ''
      },
      toggle: true,
      columnDefs: [
        {headerName: 'pn',  width: 400, field: 'pn', cellStyle: {'text-align': 'left'}},
        {headerName: 'character',  width: 400, field: 'character', cellStyle: {'text-align': 'left'}},
        {headerName: 'characterValue',  width: 400, field: 'characterValue', cellStyle: {'text-align': 'left'}},
      ],
      rowDataDefs: []
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
    searchAjax () {

      var _url = 'http://10.120.116.171:8081/api/mtmcvinfo'
      var _params = this.form.pns||'10FC0000CG,10FC0000IG'
      _url+='/'+_params
        axios.get(_url).then((res)=>{
          var  _res = res.data.data;
          var _arr =[]
          var obj = {
            pn:'',
            character:'',
            characterValue:''
          }
          for(var i = 0 ; i < _res.length; i++){
            for(var n = 0 ; n < _res[i]['cvList'].length; n++){
              var _cvList = _res[i]['cvList'][n]
              obj={
                pn:_res[i]['pn'],
                character:_cvList.character,
                characterValue:_cvList.characterValue
              }
              _arr.push(obj)
            }
          }
            this.rowDataDefs = _arr
        })

    },
    calcGridHeight () {
      var screenHeight = window.innerHeight
      var topHeight = document.getElementsByClassName('topMain')[0].offsetHeight
      var t1 = document.getElementsByClassName('split-pane-page-wrapper')[1]
      var ag = document.getElementsByClassName('agContainer')[0]
      ag.style.height = screenHeight - topHeight - 64 - 10 - 10+ 'px' // 64是头部的高度，10是padding
      t1.style.height = screenHeight - topHeight - 64 - 10 - 10 + 'px'
      acontainer.style.height = screenHeight - topHeight - 64 -10 -10 + 'px'
      this.$nextTick(() => {
        this.toggleList1()
      }, 3000)
    },
    toggleList () {
      let itembox = document.getElementsByClassName('middle-box')[0]
      if (this.toggle) {
        itembox.style.display = 'none'
      } else {
        itembox.style.display = 'block'
      }
      this.toggle = !this.toggle
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
.ivu-form-label-left .ivu-FormItem-label,
.ivu-FormItem-content{
  float:left;
}
.ivu-FormItem{
  margin-bottom:10px;
}
</style>
