<template>
<div class="price-box">
  <div class="tool-bar" ref="toolBar">
    <a href="#" class="item" @click="modelnew = true"><Icon class="icon" size=16 type="md-add" />New</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="md-trash"/>Delete</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="ios-copy" />Copy</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="ios-download" />Export</a>
    <!-- <Divider type="vertical" />
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
    <a href="#" class="item"><Icon class="icon" size=16 type="md-stats" />Summary Report</a> -->
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
    title="Create New PE"
    ok-text="Ok"
    @on-ok="ok"
    cancel-text="Cancel">
    <Form :model="FormNewpE" :label-width="120" :rules="ruleValidate">
      <Row>
        <Col span=24>
          <h3 class="marginBottom">Base Information</h3>
        </Col>
      </Row>
      <Row>
        <Col span=8>
          <FormItem label="ID">
            <Input v-model="FormItem.id" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Created Date">
            <Input v-model="FormItem.CreatedDate" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Last Modified">
            <Input v-model="FormItem.LastModified" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=8>
          <FormItem label="Original Rmap ID">
            <Input v-model="FormItem.OriginalRmapID" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Created By">
            <Input v-model="FormItem.CreatedBy" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Last Modified by">
            <Input v-model="FormItem.LastModifiedby" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=24>
          <FormItem label="Description" prop="Description">
            <Input v-model="FormItem.Description" type="textarea" placeholder="Enter something..."></Input>
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
            <Input v-model="FormItem.DMUName" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=12>
          <FormItem label="Channel" prop="Channel">
            <Input v-model="FormItem.Channel" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <FormItem label="Business Group">
            <Input v-model="FormItem.BusinessGroup" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=12>
          <FormItem label="Pricing Group" prop="PricingGroup">
            <Input v-model="FormItem.PricingGroup" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <FormItem label="Country">
            <Input v-model="FormItem.Country" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=12>
          <FormItem label="Validity Period">
            <Input v-model="FormItem.ValidityPeriod" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <FormItem label="Sub Region">
            <Input v-model="FormItem.SubRegion" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="Region">
            <Input v-model="FormItem.Region" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem label="Geo">
            <Input v-model="FormItem.Geo" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=12>
          <FormItem label="Comments">
            <Input v-model="FormItem.Comments" type="textarea" :rows="4" placeholder="Enter something..."></Input>
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
      FormNewpE: {
        id: '',
        CreatedDate: '2018/8/8 11:05:51',
        LastModified: '2018/8/8 11:05:51',
        OriginalRmapID: '',
        CreatedBy: 'sumer',
        LastModifiedby: 'sumer',
        Description: '',
        DMUName: '',
        Channel: '',
        Comments: '',
        SubRegion: '',
        Country: '',
        ValidityPeriod: '',
        PricingGroup: '',
        BusinessGroup: '',
        Geo: '',
        Region: ''
      },
      FormItem: {
        id: '',
        CreatedDate: '2018/8/8 11:05:51',
        LastModified: '2018/8/8 11:05:51',
        OriginalRmapID: '',
        CreatedBy: 'sumer',
        LastModifiedby: 'sumer',
        Description: '',
        DMUName: '',
        Channel: '',
        Comments: '',
        SubRegion: '',
        Country: '',
        ValidityPeriod: '',
        PricingGroup: '',
        BusinessGroup: '',
        Geo: '',
        Region: ''
      },
      ruleValidate: {
        Description: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        DMUName: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ],
        Channel: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ],
        PricingGroup: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
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
          headerName: 'PE Number',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => { return '<a href="#/excel/excel_PEsale">' + params.value + '</a>'},
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
          peNum: 'PE-20176807001',
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
          peNum: 'PE-20180807002',
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
        },
        {
          peNum: 'PE-20180807003',
          dmuNum: '1213431990',
          dmuName: 'Evonik MC DMU',
          desc: 'DXC - UHH',
          country: 'France',
          region: 'EMEA',
          channel: 'Direct',
          status: 'Approved',
          createdBy: 'jbruesse',
          createdTime: '2018/08/06',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07',
          pricer: 'zhanghq3',
          grRev: '35,283,244',
          margi: '-9.6',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807004',
          dmuNum: '1213445570',
          dmuName: 'CRH MC DMU',
          desc: 'GA Evonik - P52 (incl. Services)',
          country: 'France',
          region: 'EMEA',
          channel: 'Indirect',
          status: 'Rejected',
          createdBy: 'arijn',
          createdTime: '2018/08/06',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07',
          pricer: 'jbruesse',
          grRev: '0',
          margi: '-21.3',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807005',
          dmuNum: '1214029598',
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
          grRev: '17,468,07',
          margi: '-35.4',
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
<style lang="less">
.price-box{
  width: 100%;
  height: 100%;
  overflow:hidden;
  padding-bottom:10px;
  background: #fff
}
.ivu-FormItem{
  margin-bottom: 5px!important;
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
.ivu-btn{
  background: #ccc;
  border-radius: 4px solid #ccc;
}
.ivu-btn:hover{
  background: #ccc;
  color:#515a6e;
}
.ivu-btn.ivu-btn-primary{
  background: #2d8cf0;
  border-radius: 4px solid #2d8cf0;
}
</style>
