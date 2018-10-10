<template>
<div class="price-list">
  <div class="tool-bar" ref="toolBar">
    <a href="#" class="item" @click="modelnew = true"><Icon class="icon" size=16 type="md-add" />New</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="md-trash"/>Delete</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="ios-copy" />Copy</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="ios-download" />Export</a>
  </div>
  <div class="agcontainer" style="width: 100%;height:100%;overflow:hidden;">
    <ag-grid-vue
      style="width: 100%;height:100%;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :floatingFilter="true"
      :gridAutoHeight="false"
      :enableSorting="true"
      :enableFilter="true"
      :singleClickEdit="true"
      :suppressSizeToFit="true"
      :suppressResize="true"
      :enableColResize="true"
      rowSelection="multiple">
    </ag-grid-vue>
  </div>
  <Modal
    v-model="modelnew"
    :styles="{width:'1000px'}"
    title="Create New PS"
    ok-text="Ok"
    @on-ok="ok"
    cancel-text="Cancel">
    <Form :model="FormItem" :label-width="120" :rules="ruleValidate">
      <Row>
        <Col span=24>
          <h3 class="marginBottom">Base Information</h3>
        </Col>
      </Row>
      <Row>
        <Col span=8>
          <FormItem label="ID">
            <Input v-model="FormItem.id" placeholder="Enter something..."/>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Created Date">
            <Input v-model="FormItem.CreatedDate" placeholder="Enter something..."/>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Last Modified">
            <Input v-model="FormItem.LastModified" placeholder="Enter something..."/>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=8>
          <FormItem label="Original Rmap ID">
            <Input v-model="FormItem.OriginalRmapID" placeholder="Enter something..."/>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Created By">
            <Input v-model="FormItem.CreatedBy" placeholder="Enter something..."/>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Last Modified by">
            <Input v-model="FormItem.LastModifiedby" placeholder="Enter something..."/>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=24>
          <FormItem label="Description" prop="Description">
            <Input v-model="FormItem.Description" type="textarea" placeholder="Enter something..."/>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=12 >
          <h3 class="marginBottom">DMU Information</h3>
        </Col>
        <Col span=12>
          <h3 class="marginBottom">Sales Information</h3>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <FormItem label="DMU Name"  prop="DMUName">
            <Select v-model="FormItem.DMUName" placeholder="Please select something...">
              <Option v-for="(item, index) in FormItem.DMUNames" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span=12>
          <FormItem label="Channel" prop="Channel">
            <Select v-model="FormItem.Channel" placeholder="Please select something...">
              <Option v-for="(item, index) in FormItem.Channels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <FormItem label="Business Group">
            <Input v-model="FormItem.BusinessGroup" placeholder="Enter something..."/>
          </FormItem>
        </Col>
        <Col span=12>
          <FormItem label="Pricing Group" prop="PricingGroup">
            <Select v-model="FormItem.PricingGroup" placeholder="Please select something...">
              <Option v-for="(item, index) in FormItem.PricingGroups" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <FormItem label="Country">
            <Input v-model="FormItem.Country" placeholder="Enter something..."/>
          </FormItem>
        </Col>
        <Col span=12>
          <FormItem label="Validity Period">
            <Input v-model="FormItem.ValidityPeriod" placeholder="Enter something..."/>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <FormItem label="Sub Region">
            <Input v-model="FormItem.SubRegion" placeholder="Enter something..."/>
          </FormItem>
          <FormItem label="Region">
            <Input v-model="FormItem.Region" placeholder="Enter something..."/>
          </FormItem>
          <FormItem label="Geo">
            <Input v-model="FormItem.Geo" placeholder="Enter something..."/>
          </FormItem>
        </Col>
        <Col span=12>
          <FormItem label="Comments">
            <Input v-model="FormItem.Comments" type="textarea" :rows="4" placeholder="Enter something..."/>
          </FormItem>
        </Col>
      </Row>
    </Form>
  </Modal>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
export default {
  data () {
    return {
      FormItem: {
        id: '',
        CreatedDate: '2018/8/8 11:05:51',
        LastModified: '2018/8/8 11:05:51',
        OriginalRmapID: '',
        CreatedBy: 'sumer',
        LastModifiedby: 'sumer',
        Description: '',
        DMUName: '',
        DMUNames: ['1212434289', '1212456739', '1212462265', '1212467218', '1212467369', '1212468300', '1212468330', '1212472338', '1212474535', '1212474590'],
        Channel: '',
        Channels: [11, 15, 21, 31, 41, 71, 81, 99],
        Comments: '',
        SubRegion: '',
        Country: '',
        ValidityPeriod: '',
        PricingGroup: '',
        PricingGroups: ['B1', 'B2', 'ZM'],
        BusinessGroup: '',
        Geo: '',
        Region: ''
      },
      ruleValidate: {
        Description: [
          { required: true, message: 'The box cannot be empty', trigger: 'blur' }
        ],
        DMUName: [
          { required: true}
        ],
        Channel: [
          { required: true}
        ],
        PricingGroup: [
          { required: true}
        ]
      },
      modelnew:false,
      columnDefs: [
        {
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
          width: 60,
          suppressFilter: true
        },
        {
          headerName: 'PS Number',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => { 
            // console.log(params.rowIndex)
             if (params.rowIndex === 1) {
              return '<a href="#/excel/excel_PEsale">' + params.value + '</a>'
            } else if (params.rowIndex === 0) {
              return '<a href="#/excel/excel_empty1">' + params.value + '</a>'
            }
          },
          field: 'peNum',
          width: 120
        },
        {
          headerName: 'DMU Number',
          cellStyle: {'text-align': 'left'},
          field: 'dmuNum',
          width: 120
        },
        {
          headerName: 'DMU Name',
          cellStyle: {'text-align': 'left'},
          field: 'dmuName',
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          },
          width: 120
        },
        {
          headerName: 'Description',
          cellStyle: {'text-align': 'left'},
          field: 'desc',
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          },
          width: 120
        },
        {
          headerName: 'Country',
          cellStyle: {'text-align': 'left'},
          field: 'country',
          width: 120
        },
        {
          headerName: 'Region',
          cellStyle: {'text-align': 'left'},
          field: 'region',
          width: 120
        },
        {
          headerName: 'Channel',
          cellStyle: {'text-align': 'left'},
          field: 'channel',
          width: 120
        },
        {
          headerName: 'Status',
          cellStyle: {'text-align': 'left'},
          field: 'status',
          width: 120
        },
        {
          headerName: 'Created By',
          cellStyle: {'text-align': 'left'},
          field: 'createdBy',
          width: 120
        },
        {
          headerName: 'Created Time',
          cellStyle: {'text-align': 'left'},
          field: 'createdTime',
          width: 120
        },
        {
          headerName: 'Modified By',
          cellStyle: {'text-align': 'left'},
          field: 'modifiedBy',
          width: 120
        },
        {
          headerName: 'Modyfied Time',
          cellStyle: {'text-align': 'left'},
          field: 'modyfiedTime',
          width: 130
        },
        {
          headerName: 'Pricer',
          cellStyle: {'text-align': 'left'},
          field: 'pricer',
          width: 120
        },
        {
          headerName: 'Gr Rev',
          cellStyle: {'text-align': 'left'},
          field: 'grRev',
          width: 120
        },
        {
          headerName: 'Margin %',
          cellStyle: {'text-align': 'left'},
          field: 'margi',
          width: 120
        },
        {
          headerName: 'Currency',
          cellStyle: {'text-align': 'left'},
          field: 'currency',
          width: 120
        }
      ],
      rowData: [
        {
          peNum: 'PS-20176807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PS-20180807002',
          dmuNum: '1213420209',
          dmuName: 'CSC WE RMC DMU',
          desc: 'RX_Tchibo',
          country: 'Italy',
          region: 'EMEA',
          channel: 'Indirect',
          status: 'Submitted',
          createdBy: 'skeskin',
          createdTime: '2018/08/06',
          modifiedBy: 'skeskin',
          modyfiedTime: '2018-08-07',
          pricer: 'yanm2',
          grRev: '2,102,080',
          margi: '4.2',
          currency: 'USD'
        }
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
      var topHeight = document.getElementsByClassName('tool-bar')[0]
      // console.log('topHeight:' + topHeight)
      var ag = document.getElementsByClassName('ag-theme-balham')[0]
      var acontainer = document.getElementsByClassName('agcontainer')[0]
      ag.style.height = screenHeight - topHeight.style.height - 64 - 65 + 'px' // 64是头部的高度，10是padding
      acontainer.style.height = screenHeight - topHeight.style.height - 64 - 65 + 'px'
    },
    ok () {
     this.$router.push({
      name: 'excel_empty'
     })
    }
  }
}
</script>
<style lang="less" scoped>
.price-list{
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 10px;
  background: #fff
}
.ivu-FormItem{
  margin-bottom: 5px !important;
}
.ivu-form-item{
  margin-bottom:5px;
}
.tool-bar{
  width: 100%;
  height: 32px;
  box-shadow: 0 0 5px #ccc;
  margin-bottom: 10px;
  padding: 0 10px;
  .item{
    color:#666;
    height: 32px;
    line-height: 32px;
    &:hover{
      color: rgb(40, 122, 245);
    }
    .icon{
      padding: 0 2px;
      height:32px;
      line-height: 32px;
    }
  }
}
.ivu-btn{
  background: #ccc;
  border-radius: 4px solid #ccc;
}
.ivu-btn:hover{
  background: #ccc;
  color: #515a6e;
}
.ivu-btn.ivu-btn-primary{
  background: #2d8cf0;
  border-radius: 4px solid #2d8cf0;
}
</style>
