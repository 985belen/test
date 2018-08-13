<template>
<div class="price-box">
  <div class="tool-bar">
    <a href="#" class="item" @click="modelnew = true" ><Icon class="icon" size=16 type="md-add" />Create new PE</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="md-stats" />copy</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="md-search" />Search</a>
    <Divider type="vertical" />
    <a href="#" class="item"><Icon class="icon" size=16 type="md-search" />Export</a>
  </div>
  <!-- <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList"><Icon type="ios-podium" /> CQ</a></h3>
  <div class="table-CQ">
    <Form :model="FormItem" ref="FormItem" >
      <Row type="flex" justify="start" :gutter="10">
        <Col span=6>
          <Form-item label="DMU Number" :label-width="100">
            <Input v-model="FormItem.DMUNumber" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=6>
          <Form-item label="Pricing Estimation Number" :label-width="176">
            <Input v-model="FormItem.PricingEstimationNumber" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=6>
          <Form-item label="Country" :label-width="100">
            <Input v-model="FormItem.Country" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </row>
      <Row type="flex" justify="start" :gutter="10">
        <Col span=6>
          <Form-item label="DMU Name" :label-width="100">
            <Input v-model="FormItem.DMUName" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=6>
          <Form-item label="Pricing Estimation Description" :label-width="176">
            <Input v-model="FormItem.PricingEstimationDescription" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=6>
          <Form-item label="Created By" :label-width="100">
            <Input v-model="FormItem.CreatedBy" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
    </Form>
  </div> -->
  <div class="split-pane-page-wrapper">
    <split-pane v-model="offset" @on-moving="handleMoving">
      <div slot="left" class="pane left-pane">
        <div slot="top" class="pane top-pane">
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :gridAutoHeight="true"
            :enableSorting="true"
            :enableFilter="true"
            :defaultColDef='{editable: true}'
            :singleClickEdit="true"
            :suppressSizeToFit="true"
            :suppressResize="true"
            :enableColResize="true"
            rowSelection="multiple">
          </ag-grid-vue>
        </div>
      </div>
      <div slot="right" class="pane right-pane">
        <h3 @click="pullFnc()" style="cursor: pointer;"><Icon type="ios-arrow-back" /><Icon style="margin-left: -10px;" type="ios-arrow-back" /></h3>
        <div style="width: 500px;height: 500px">
          <Card shadow>
          </Card>
        </div>
      </div>
    </split-pane>
  </div>
  <Modal
    v-model="modelnew"
    :styles="{width:'800px'}"
    title="create New PE"
    ok-text="OK"
    cancel-text="Cancel">
    <Form :model="FormNewpE" :label-width="120" :rules="ruleValidate">
      <Row>
        <Col span=24>
          <h3 class="marginBottom">Base Information</h3>
        </Col>
      </Row>
      <Row>
        <Col span=8>
          <Form-item label="ID">
            <Input v-model="FormItem.id" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=8>
          <Form-item label="Created Date">
            <Input v-model="FormItem.CreatedDate" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=8>
          <Form-item label="Last Modified">
            <Input v-model="FormItem.LastModified" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=8>
          <Form-item label="Original Rmap ID">
            <Input v-model="FormItem.OriginalRmapID" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=8>
          <Form-item label="Created By">
            <Input v-model="FormItem.CreatedBy" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=8>
          <Form-item label="Last Modified by">
            <Input v-model="FormItem.LastModifiedby" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=24>
          <Form-item label="Description" prop="Description">
            <Input v-model="FormItem.Description" type="textarea" placeholder="Enter something..."></Input>
          </Form-item>
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
          <Form-item label="DMU Name"  prop="DMUName">
            <Input v-model="FormItem.DMUName" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=12>
          <Form-item label="Channel" prop="Channel">
            <Input v-model="FormItem.Channel" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <Form-item label="Business Group">
            <Input v-model="FormItem.BusinessGroup" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=12>
          <Form-item label="Pricing Group" prop="PricingGroup">
            <Input v-model="FormItem.PricingGroup" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <Form-item label="Country">
            <Input v-model="FormItem.Country" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=12>
          <Form-item label="Validity Period">
            <Input v-model="FormItem.ValidityPeriod" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <Form-item label="Sub Region">
            <Input v-model="FormItem.SubRegion" placeholder="Enter something..."></Input>
          </Form-item>
          <Form-item label="Region">
            <Input v-model="FormItem.Region" placeholder="Enter something..."></Input>
          </Form-item>
          <Form-item label="Geo">
            <Input v-model="FormItem.Geo" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=12>
          <Form-item label="Comments">
            <Input v-model="FormItem.Comments" type="textarea" :rows="6" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
    </Form>
  </Modal>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
import SplitPane from '_c/split-pane'
export default {
  data () {
    return {
      FormItem: {
        DMUNumber: '',
        DMUName: '',
        PricingEstimationNumber: '',
        CreatedBy: '',
        Country: ''
      },
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
      modelnew: false,
      dom: null,
      offset: 0.95,
      isStatus:true,
      toggle: false,
      columnDefs: [
        {
          checkboxSelection: true, width: 60, cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'PE Number',
          cellStyle: {'text-align': 'center'},
          field: 'peNum',
          width: 135
        },
        {
          headerName: 'DMU Number',
          cellStyle: {'text-align': 'center'},
          field: 'dmuNum',
          width: 120
        },
        {
          headerName: 'DMU Name',
          cellStyle: {'text-align': 'center'},
          field: 'dmuName',
          width: 120
        },
        {
          headerName: 'Description',
          cellStyle: {'text-align': 'center'},
          field: 'desc',
          width: 120
        },
        {
          headerName: 'Country',
          cellStyle: {'text-align': 'center'},
          field: 'country',
          width: 120
        },
        {
          headerName: 'Region',
          cellStyle: {'text-align': 'center'},
          field: 'region',
          width: 120
        },
        {
          headerName: 'Channel',
          cellStyle: {'text-align': 'center'},
          field: 'channel',
          width: 120
        },
        {
          headerName: 'Status',
          cellStyle: {'text-align': 'center'},
          field: 'status',
          width: 120
        },
        {
          headerName: 'Created By',
          cellStyle: {'text-align': 'center'},
          field: 'createdBy',
          width: 120
        },
        {
          headerName: 'Created Time',
          cellStyle: {'text-align': 'center'},
          field: 'createdTime',
          width: 120
        },
        {
          headerName: 'Modified By',
          cellStyle: {'text-align': 'center'},
          field: 'modifiedBy',
          width: 120
        },
        {
          headerName: 'Modyfied Time',
          cellStyle: {'text-align': 'center'},
          field: 'modyfiedTime',
          width: 120
        },
        {
          headerName: 'Pricer',
          cellStyle: {'text-align': 'center'},
          field: 'pricer',
          width: 120
        },
        {
          headerName: 'Gr Rev',
          cellStyle: {'text-align': 'center'},
          field: 'grRev',
          width: 120
        },
        {
          headerName: 'Margin %',
          cellStyle: {'text-align': 'center'},
          field: 'margi',
          width: 120
        },
        {
          headerName: 'Currency',
          cellStyle: {'text-align': 'center'},
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
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
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
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        }
      ]
    }
  },
  components: {
    AgGridVue,
    SplitPane
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
    }, 3000)
  },
  beforeDestroy () {
    off(window, 'resize', this.resize())
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    pullFnc () {
      this.offset = 0.4
    },
    handleMoving (e) {
      console.log(e.atMin, e.atMax)
    },
    toggleList () {
      let tableCQ = document.getElementsByClassName('table-CQ')[0]
      if (this.toggle) {
        tableCQ.style.display = 'none'
      } else {
        tableCQ.style.display = 'block'
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
  overflow:auto;
  padding-bottom:20px;
  background: #fff
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
.ivu-form-item{
  margin-bottom: 5px
}
.ivu-table th, .ivu-table td{
  height:30px
}
h2{
  height:30px;
  line-height: 30px;
  margin-bottom: 10px;
  padding: 0 10px
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
.box{
  width:100%;
  height:auto;
  overflow: hidden;
}
.check-box{
  width:200px;
  margin:20px
}
.center-middle{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.split-pane-page-wrapper{
  height: 630px;
  .pane{
    width: 100%;
    height: 100%;
    &.left-pane{
      background: sandybrown;
    }
    &.right-pane{
      background: #fff;
    }
    &.top-pane{
      background: sandybrown;
    }
    &.bottom-pane{
      background: #fff;
    }
  }
  .custom-trigger{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000000;
    position: absolute;
    .center-middle;
    box-shadow: 0 0 6px 0 rgba(28, 36, 56, 0.4);
    i.trigger-icon{
      .center-middle;
    }
  }
}
</style>
