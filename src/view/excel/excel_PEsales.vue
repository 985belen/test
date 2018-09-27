<template>
<div class="newpage" style="overflow: hidden;">
  <div class="topBox">
    <div class="tool-bar">
      <a href="#" class="item" @click="modeltransction = true"><Icon class="icon" size=16 type="md-add" />Import MTM</a>
      <Divider type="vertical" />
      <a href="#" class="item" ><Icon class="icon" size=16 type="md-stats" />Import CTO</a>
      <Divider type="vertical" />
      <a href="#" class="item" ><Icon class="icon" size=16 type="md-add" />Submit Button</a>
      <Divider type="vertical" />
      <a href="#" class="item" ><Icon class="icon" size=16 type="md-add" />Add Dummy Item</a>
      <Divider type="vertical" />
      <a href="#" class="item" ><Icon class="icon" size=16 type="md-stats" />Accepted</a>
      <Divider type="vertical" />
      <a href="#" class="item" ><Icon class="icon" size=16 type="md-stats" />Recommendation Price</a>
      <Divider type="vertical" />
      <router-link to="/iframe/iframe_HistoricalSummary" style="color: #515a6e">Historical Report</router-link>
      <Divider type="vertical" />
      <router-link to="/iframe/iframe_clv" style="color: #515a6e">CLV Report</router-link>
      <Divider type="vertical" />
      <router-link to="/iframe/iframe_DealTracking" style="color: #515a6e">Tracking Report</router-link>
    </div>
    <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList1"><Icon type="ios-podium" />PE Information</a></h3>
    <div class="peinformation">
      <Row>
        <Col span=12 offset="6">
          <img src="./pic2.png"/>
        </Col>
      </Row>
      <div class="boxitem">
        <Form :model="FormItem" :label-width="120" :rules="ruleValidate">
          <Row>
            <Col span=5 offset="1">
              <strong>PE ID: </strong><span>PE-20188081041-357</span>
            </Col>
            <Col span=5>
              <strong>DMU Name: </strong><span>State Administration</span>
            </Col>
            <Col span=5>
              <strong>Country: </strong><span>Bulgaria</span>
            </Col>
            <Col span=5>
              <strong>Channel: </strong><span>Direct</span>
            </Col>
          </Row>
          <Row>
            <Col span=5 offset="1">
              <strong>Currency: </strong><span>USD</span>
            </Col>
            <Col span=5>
              <strong>Pricing Group: </strong><span>B1</span>
            </Col>
            <Col span=5>
              <strong>Created By: </strong><span>sumer</span>
            </Col>
            <Col span=5>
              <strong>Description: </strong><span>RFP Coop August 2018</span>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList2"><Icon type="ios-podium" />Summary Information</a></h3>
    <div class="SummaryInformation">
      <Row type="flex" justify="center">
        <Col span=5>
          <strong>System Volume: </strong><span style="font-size: 14px; font-weight: bold;"></span>
        </Col>
        <Col span=5>
          <strong>Gross Revenue: </strong><span style="font-size: 14px; font-weight: bold;"></span>
        </Col>
        <Col span=5>
          <strong>Net Revenue: </strong><span style="font-size: 14px; font-weight: bold;"></span>
        </Col>
        <Col span=5>
          <strong>Total Cost Margin: </strong><span style="font-size: 14px; font-weight: bold;"></span>
        </Col>
        <Col span=4>
          <strong>Total Cost Margin %: </strong><span style="font-size: 14px; font-weight: bold;"></span>
        </Col>
      </Row>
    </div>
  </div>
  <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" ><Icon type="ios-podium" />Product Information</a></h3>
  <div class="split-pane-page-wrapper">
    <split-pane v-model="offset" @on-moving="handleMoving">
      <div slot="left" class="pane left-pane">
        <div slot="top" class="pane top-pane agcontainer">
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columns"
            :rowData="rowData"
            :frameworkComponents="frameworkComponents"
            :floatingFilter="true"
            :enableSorting="false"
            :enableFilter="true"
            :singleClickEdit="true"
            :suppressResize="true"
            :enableColResize="true"
            rowSelection="multiple">
          </ag-grid-vue>
        </div>
      </div>
      <div slot="right" class="pane right-pane">
        <h3  style="cursor: pointer;">
          <div v-if="!pullFlag">
            <Icon @click="pullFnc" type="md-swap" />
            <Icon @click="one" style="margin-left: 10px; margin-top:0;line-height:30px" size=20 type="ios-stats" />
            <Icon @click="two" style="margin-left: 10px;" size=20 type="md-reorder" />
             <Icon @click="three" style="margin-left: 10px;" size=20 type="md-grid" />
          </div>
          <div v-else>
              <Icon @click="pullFnc" type="md-swap" />
              <Icon  @click="one" style="margin-left: -5px; margin-top: 10px;" size=20 type="ios-stats" />
              <Icon @click="two" style="margin-left: -5px;" size=20 type="md-reorder" />
             <Icon @click="three" style="margin-left: -5px;" size=20 type="md-grid" />
          </div>
        </h3>
        <div v-if="tab1" style="width: 100%; padding:10px; border-collapse: collapse; min-height: 300px;">
          <Card shadow>
            <ag-grid-vue
              style="width: 100%; height:100%;"
              class="ag-theme-balham"
              :columnDefs="detailcolumns1"
              :rowData="detaildata1"
              :gridAutoHeight="true"
              :enableSorting="true"
              :enableFilter="true"
              :floatingFilter="true"
              :singleClickEdit="true"
              :suppressSizeToFit="true"
              :suppressResize="true"
              :enableColResize="true"
              rowSelection="multiple">
            </ag-grid-vue>
          </Card>
        </div>
          <div v-if="tab2" style="width: 100%; padding:10px; border-collapse: collapse; min-height: 300px;">
            <ag-grid-vue
              style="width: 100%; height:100%;"
              class="ag-theme-balham"
              :columnDefs="detailcolumns2"
              :rowData="detaildata2"
              :gridAutoHeight="true"
              :enableSorting="true"
              :floatingFilter="true"
              :enableFilter="true"
              :singleClickEdit="true"
              :suppressSizeToFit="true"
              :suppressResize="true"
              :enableColResize="true"
              rowSelection="multiple">
            </ag-grid-vue>
          </div>
          <div v-if="tab3" style="width: 100%; padding:10px; border-collapse: collapse; min-height: 300px;">
            <ag-grid-vue
              style="width: 100%; height:100%;"
              class="ag-theme-balham"
              :columnDefs="detailcolumns3"
              :rowData="detaildata3"
              :gridAutoHeight="true"
              :enableSorting="true"
              :floatingFilter="true"
              :enableFilter="true"
              :singleClickEdit="true"
              :suppressSizeToFit="true"
              :suppressResize="true"
              :enableColResize="true"
              rowSelection="multiple">
            </ag-grid-vue>
        </div>
      </div>
    </split-pane>
  </div>
  <Modal
    v-model="modeltransction"
    title="Transaction"
    :styles="{width:'1000px'}"
    ok-text="OK"
    @on-ok="ok"
    cancel-text="Cancel">
    <Form :model="transFormItem" label-position="left" :label-width="110" ref="transFormItem" >
      <Row type="flex" justify="start" :gutter="8">
        <Col span=7>
          <Form-item label="Business Partner" :label-width="110">
            <Input v-model="transFormItem.BusinessPartner" placeholder="Enter something..."/>
          </Form-item>
        </Col>
        <Col span=6>
          <Form-item label="Select" :label-width="60">
            <Select v-model="transFormItem.select" placeholder="Please select..">
              <Option v-for="(item, index) in transFormItem.selects" :value="item" :key="index">{{item}}</Option>
          </Select>
          </Form-item>
        </Col>
        <Col span=7>
          <Form-item label="Transaction ID" :label-width="100">
            <Input v-model="transFormItem.TransactionID" placeholder="Enter something..."/>
          </Form-item>
        </Col>
        <Col span=4>
          <Button type="primary" style="margin-right:5px;float:left">Search</Button>
          <Button type="primary" style="float:left">Attach</Button>
        </Col>
      </Row>
    </Form>
    <div class="table-box">
      <ag-grid-vue
        style="width: 100%; height:100%;"
        class="ag-theme-balham"
        v-if="modeltransction"
        :columnDefs="transColumns"
        :rowData="transData"
        :gridAutoHeight="true"
        :enableSorting="true"
        :floatingFilter="true"
        :enableFilter="true"
        :showToolPanel="false"
        :singleClickEdit="true"
        :suppressSizeToFit="true"
        :suppressResize="true"
        :enableColResize="true"
        :gridReady="onGridReady"
        rowSelection="multiple">
      </ag-grid-vue>
    </div>
  </Modal>
  <Modal
    v-model="modelComponentsList"
    title="Components List-->20KECTO1WW"
    :styles="{width:'800px'}"
    ok-text="OK"
    cancel-text="Cancel">
    <div class="table-box">
      <ag-grid-vue
        style="width: 100%; height:100%;"
        class="ag-theme-balham"
        v-if="modelComponentsList"
        :columnDefs="ComponentsListcolumn"
        :rowData="ComponentsListData"
        :gridAutoHeight="true"
        :enableSorting="true"
        :enableFilter="true"
        :showToolPanel="false"
        :sizeColumnsToFit="true"
        :floatingFilter="true"
        :singleClickEdit="true"
        :suppressSizeToFit="true"
        :suppressResize="true"
        :enableColResize="true"
        :gridReady="onGridReady"
        rowSelection="multiple">
      </ag-grid-vue>
    </div>
  </Modal>
  <Modal v-model="modelTMC" width="800">
    <p slot="header">
      <span>Total Cost</span>
    </p>
    <div style="text-align:center">
      <Table border :columns="tmcColumn" :data="tmcData"></Table>
    </div>
    <div slot="footer">
      <!-- <Button type="error" size="large" @click="del">Delete</Button> -->
    </div>
  </Modal>
  <Modal v-model="modelCostAdjustment" width="800">
    <p slot="header">
      <span>Cost Adjustment</span>
    </p>
    <div style="text-align:center">
      <Table border :columns="CostAdjustmentColumn" :data="CostAdjustmentData"></Table>
    </div>
    <div slot="footer">
      <!-- <Button type="error" size="large" @click="del">Delete</Button> -->
    </div>
  </Modal>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
import SplitPane from '_c/split-pane'
import bmcCQ from './bmcCQ.vue'
import tmcCQ from './tmcCQ.vue'
import netbmcCQ from './netbmcCQ.vue'
import costCQ from './costCQ.vue'
export default {
  data () {
    return {
      modelTMC: false,
      modelCostAdjustment: false,
      toggle: true,
      toggle1: false,
      toggle2: true,
      tab1: false,
      tab2: false,
      tab3: false,
      pullFlag: true,
      dom: null,
      offset: 0.97,
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
          { required: true, message: 'The Description cannot be empty', trigger: 'blur' }
        ],
        DMUName: [
          { required: true, message: 'DMUName cannot be empty', trigger: 'blur' }
        ],
        Channel: [
          { required: true, message: 'Channel cannot be empty', trigger: 'blur' }
        ],
        PricingGroup: [
          { required: true, message: 'PricingGroup cannot be empty', trigger: 'blur' }
        ]
      },
      modeldetail: false,
      modelProduct: false,
      modelBrand: false,
      modeltransction: false,
      modelComponentsList: false,
      transColumns: [
        {
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: false,
          editable: false,
          suppressFilter: true,
          checkboxSelection: true,
          width: 60
        },
        {
          headerName: 'Transaction ID',
          field: 'TransactionID',
          width: 120,
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Description',
          field: 'Description',
          width: 200,
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          }
        },
        {
          headerName: 'Product ID',
          field: 'ProductID',
          width: 200,
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          }
        },
        {
          headerName: 'Product Desc',
          field: 'ProductDesc',
          width: 160,
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          }
        },
        {
          headerName: 'Start Date',
          field: 'StartDate',
          width: 120,
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Currency',
          field: 'Currency',
          width: 120,
          cellStyle: {'text-align': 'left'}
        }
      ],
      transData: [
        {
          TransactionID: '0002223182',
          Description: 'RX - KPMG - Norway - M910q',
          ProductID: 'Desktop TC M910q_Intel Q270_TINY_ES_R',
          ProductDesc: '10MUCTO1WW',
          StartDate: '2018/01/25',
          Currency: 'USD'
        },
        {
          TransactionID: '0002102225',
          Description: 'CAT:KPMG - KBY NB Turkey T470 v1.0',
          ProductID: 'Notebook ThinkPad T470 20HECTO1WW Rx',
          ProductDesc: '20HECTO1WW',
          StartDate: '2018/08/21',
          Currency: 'USD'
        },
        {
          TransactionID: '0002175497',
          Description: 'NonCAT:KPMG - Forensic NB',
          ProductID: 'Notebook ThinkPad X1 Yoga 2G 20JECTO1WW 20JECTO1WW',
          ProductDesc: '20JECTO1WW',
          StartDate: '2018/11/08',
          Currency: 'USD'
        },
        {
          TransactionID: '0002260500',
          Description: 'CAT:KPMG-KBY-R T480s Yoga380 Canada',
          ProductID: 'Notebook ThinkPad X380 Yoga 20LJCTO1WW R',
          ProductDesc: '20LJCTO1WW',
          StartDate: '2018/04/05',
          Currency: 'USD'
        },
        {
          TransactionID: '0002214846',
          Description: 'CAT:KPMG _ RFP Turkey',
          ProductID: 'Notebook ThinkPad T480 20L6CTO1WW Rx',
          ProductDesc: '20L6CTO1WW',
          StartDate: '2018/07/23',
          Currency: 'USD'
        },
        {
          TransactionID: '0002297646',
          Description: 'CAT:KPMG _ RFP Turkey',
          ProductID: 'Notebook ThinkPad T480 20L6CTO1WW Rx',
          ProductDesc: '20L6CTO1WW',
          StartDate: '2018/07/23',
          Currency: 'USD'
        }
      ],
      transFormItem: {
        BusinessPartner: '',
        DMUName: '',
        PricingEstimationNumber: '',
        CreatedBy: '',
        Country: '',
        select: '',
        selects: ['opportunity', 'quotation', 'contract']
      },
      ComponentsListcolumn: [
        {
          headerName: 'Category ID',
          field: 'CategoryID',
          width: 200,
          cellStyle: {'text-align': 'left'}
        }, {
          headerName: 'Description',
          field: 'Description',
          width: 250,
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          }
        }, {
          headerName: 'QTY',
          field: 'QTY',
          width: 155,
          cellStyle: {'text-align': 'left'}
        }, {
          headerName: 'Total Cost',
          field: 'Total Cost',
          width: 160,
          cellStyle: {'text-align': 'left'}
        }
      ],
      ComponentsListData: [
        {
          CategoryID: 'SBB0M45830',
          Description: ' Intel Core i5-6550T 2.7G 4C',
          QTY: '1',
          'Total Cost': ' 183.07'
        },
        {
          CategoryID: 'SBB0J05441',
          Description: ' W10 Pro',
          QTY: '1',
          'Total Cost': '112.00'
        },
        {
          CategoryID: 'SBB0L54434',
          Description: 'Tiny B250 WW',
          QTY: '1',
          'Total Cost': '88.87'
        },
        {
          CategoryID: 'VK00028880',
          Description: '8GB DDR4 2400 SoDIMM',
          QTY: '1',
          'Total Cost': '72.44'
        },
        {
          CategoryID: 'VK00008845',
          Description: '3 Year On-site',
          QTY: '1',
          'Total Cost': '7.70'
        },
        {
          CategoryID: 'SBB0J04751',
          Description: 'Intel 3165+BT 1x1ac Tiny',
          QTY: '1',
          'Total Cost': '6.89'
        },
        {
          CategoryID: 'SBB0L53089',
          Description: 'USB Calliope KB BK 189 FRA',
          QTY: '1',
          'Total Cost': '6.80'
        },
        {
          CategoryID: 'SBB0J02811',
          Description: 'Optional VGA Port',
          QTY: '1',
          'Total Cost': '6.03'
        },
        {
          CategoryID: 'SBB0J03380',
          Description: 'Thermal Kit 35W Tiny',
          QTY: '1',
          'Total Cost': '4.87'
        },
        {
          CategoryID: 'SBB0J04752',
          Description: 'Tiny 65W adapter',
          QTY: '1',
          'Total Cost': '4.80'
        },
        {
          CategoryID: 'VK00041036',
          Description: 'Win10 Ready to Provision',
          QTY: '1',
          'Total Cost': '3.18'
        },
        {
          CategoryID: 'SBB0L52928',
          Description: 'USB Calliope Mouse BK',
          QTY: '1',
          'Total Cost': '2.14'
        }
      ],
      columns: [
        {
          headerName: 'ID',
          width: 80,
          field: 'id',
          fixed: 'left',
          cellStyle: {'text-align': 'left'}
        }, {
          headerName: 'Quarter',
          fixed: 'left',
          field: 'quarter',
          width: 100,
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Brand',
          field: 'brand',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          },
          width: 100
        },
        {
          headerName: 'Brand Summary',
          width: 130,
          field: 'brsum',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Sub-Series',
          width: 100,
          field: 'subser',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          }
        },
        {
          headerName: 'Product No.',
          width: 120,
          field: 'prono',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<a title="' + params.value +'"href="#">' + params.value + '</a>'
          },
          onCellClicked: () => {
            this.modelComponentsList = true
          }
        },
        {
          headerName: 'Product Desc',
          width: 120,
          field: 'prodesc',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          }
        },
        {
          headerName: 'Vol',
          field: 'vol',
          width: 100,
          editable: true,
          sortable: false,
          headerClass:'headerColor',
          cellStyle: {'text-align': 'left',}
        },
        {
          headerName: 'List Price',
          width: 100,
          field: 'listpri',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Stnd Price',
          width: 100,
          field: 'stndpri',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Recommendation Discount',
          width: 190,
          field: 'RecommendationDiscount',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Walkaway Discount',
          width: 150,
          field: 'WalkawayDiscount',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Req`st price',
          width: 120,
          field: 'respri',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Estimation Price',
          width: 135,
          field: 'estpri',
          editable: true,
          headerClass:'headerColor',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Final Price',
          width: 100,
          field: 'finalpri',
          editable: true,
          headerClass:'headerColor',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Discount %',
          width: 110,
          field: 'disc',
          editable: true,
          headerClass:'headerColor',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Total Cost',
          width: 100,
          field: 'tmc',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<a title="' + params.value +'"href="#">' + params.value + '</a>'
          },
          headerComponent: "tmcCQComponent",
          onCellClicked: () => {
            this.modelTMC = true
          }
        },
        {
          headerName: 'Cost Adjustment',
          width: 140,
          field: 'CostAdjustment',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => {
            return '<a title="' + params.value +'"href="#">' + params.value + '</a>'
          },
          headerComponent: "costCQComponent",
          onCellClicked: () => {
            this.modelCostAdjustment = true
          }
        },
        {
          headerName: 'Final Total Cost',
          width: 120,
          field: 'FinalTMC',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Total Cost Margin',
          width: 110,
          field: 'tmcmar',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Total Cost %',
          width: 100,
          field: 'tmcb',
          cellStyle: {'text-align': 'left'},
          cellClassRules: {
            lessThan0IsRed: function (params) {
              return parseInt(params.value) < 0
            }
          }
        },
        {
          headerName: 'GR',
          width: 100,
          field: 'gr',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'GR Reduce %',
          width: 120,
          field: 'grre',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Net Revenue',
          width: 110,
          field: 'netre',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'PTI',
          width: 100,
          field: 'pti',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'PTI Profit',
          width: 100,
          field: 'ptipro',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'PTI Margin',
          width: 100,
          field: 'ptimar',
          cellStyle: {'text-align': 'left'}
        }
      ],
      rowData: [],
      tmcColumn: [
        {
          title: 'Adder Type',
          key: 'AdderType'
        },
        {
          title: 'Description',
          key: 'Description'
        },
        {
          title: 'Cost',
          key: 'Cost'
        }
      ],
      tmcData: [
        {
          AdderType: 'Warranty Cost',
          Description: '3 year',
          Cost: 67.1
        },
        {
          AdderType: 'Non-BMC Uplift',
          Description: '',
          Cost: 0
        },
        {
          AdderType: 'E&O',
          Description: '',
          Cost: 3.29
        },
        {
          AdderType: 'GSC Real Cost Group',
          Description: '',
          Cost: 0
        },
        {
          AdderType: 'Country Adjustment',
          Description: '',
          Cost: 0
        }
      ],
      CostAdjustmentColumn: [
        {
          title: 'Adder Type',
          key: 'AdderType'
        },
        {
          title: 'Description',
          key: 'Description'
        },
        {
          title: 'Cost',
          key: 'Cost'
        }
      ],
      CostAdjustmentData: [
        {
          AdderType: 'MOT',
          Description: 'Ocean',
          Cost: 3.04
        },
        {
          AdderType: 'Customer Funding',
          Description: '',
          Cost: 10
        }
      ],
      detailcolumns1: [
        {
          headerName: ' ',
          field: 'f0q',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'F1Q 18/19',
          field: 'f1q',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'F2Q 18/19',
          field: 'f2q',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'F3Q 18/19',
          field: 'f3q',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'F4Q 18/19',
          field: 'f4q',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Total',
          field: 'total',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        }
      ],
      detaildata1: [
        {
          f0q: 'System Volume',
          f1q: 1110,
          f2q: 1110,
          f3q: 1110,
          f4q: 1110,
          total: 4440
        },
        {
          f0q: 'Gross Revenue',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Net Revenue',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'BMC GP',
          f1q: -696028,
          f2q: -696457,
          f3q: -697436,
          f4q: -698551,
          total: -2788472
        },
        {
          f0q: '%',
          f1q: '-501.2%',
          f2q: '-501.5%',
          f3q: '-502.2%',
          f4q: '-503.0%',
          total: '-502.0%'
        },
        {
          f0q: 'Total Cost GP',
          f1q: -736835,
          f2q: -738145,
          f3q: -739124,
          f4q: -740237,
          total: -2954341
        },
        {
          f0q: '%',
          f1q: '-501.2%',
          f2q: '-501.5%',
          f3q: '-502.2%',
          f4q: '-503.0%',
          total: '-502.0%'
        },
        {
          f0q: 'PTI',
          f1q: -736835,
          f2q: -738145,
          f3q: -739124,
          f4q: -740237,
          total: -2954341
        },
        {
          f0q: '%',
          f1q: '-501.2%',
          f2q: '-501.5%',
          f3q: '-502.2%',
          f4q: '-503.0%',
          total: '-502.0%'
        }
      ],
      detailcolumns2: [
        {
          headerName: 'Total System Volumes',
          field: 'tsv',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: ' ',
          field: 'tsvv',
          cellStyle: {'text-align': 'left'}
        }
      ],
      detaildata2: [
        {
          tsv: 'Desktop',
          tsvv: 0
        },
        {
          tsv: 'Notebook',
          tsvv: 4380
        },
        {
          tsv: 'Workstation',
          tsvv: 60
        },
        {
          tsv: 'Server',
          tsvv: 0
        }
      ],
      detailcolumns3: [
        {
          headerName: 'Roadmap Metrics',
          field: 'roadmap',
          width: 180,
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: '',
          field: 'roadmapv',
          width: 180,
          cellStyle: {'text-align': 'left'}
        }
      ],
      detaildata3: [
        {
          roadmap: 'Notebook Option Attach',
          roadmapv: '40.3%'
        },
        {
          roadmap: 'Desktop Option Attach',
          roadmapv: '0.0%'
        },
        {
          roadmap: 'Services Pen Rate',
          roadmapv: '0.0%'
        },
        {
          roadmap: 'Mobile Mix',
          roadmapv: '98.6%'
        }
      ],
      productcolumns1: [
        {
          headerName: 'Part#',
          field: 'part',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'Product Brand',
          field: 'pb',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Product Desc',
          field: 'pd',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Total Volume',
          field: 'tv',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Wtd Average List',
          field: 'wal',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Wtd Average Price',
          field: 'wap',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'Wtd Average Total Cost Cost',
          field: 'watc',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'Total Cost GP',
          field: 'tg',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'Total Cost GP%',
          field: 'tgb',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'Total Gross Revenue',
          field: 'tgr',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'Total Net Revenue',
          field: 'tnr',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'Total Total Cost GP',
          field: 'ttg',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        }
      ],
      productdata1: [
        {
          part: '20KECTO1WW',
          pb: 'ThinkPad Classic',
          pd: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          tv: 1200,
          wal: 10642,
          wap: 0,
          watc: 805,
          tg: -805,
          tgb: 0,
          tgr: 0,
          tnr: 0,
          ttg: -965940
        },
        {
          part: '20KECTO1WW',
          pb: 'ThinkPad Classic',
          pd: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          tv: 1200,
          wal: 10642,
          wap: 0,
          watc: 805,
          tg: -805,
          tgb: 0,
          tgr: 0,
          tnr: 0,
          ttg: -965940
        },
        {
          part: '20KECTO1WW',
          pb: 'ThinkPad Classic',
          pd: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          tv: 1200,
          wal: 10642,
          wap: 0,
          watc: 805,
          tg: -805,
          tgb: 0,
          tgr: 0,
          tnr: 0,
          ttg: -965940
        },
        {
          part: '20KECTO1WW',
          pb: 'ThinkPad Classic',
          pd: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          tv: 1200,
          wal: 10642,
          wap: 0,
          watc: 805,
          tg: -805,
          tgb: 0,
          tgr: 0,
          tnr: 0,
          ttg: -965940
        }
      ],
      Brandcolumns: [
        {
          headerName: ' ',
          field: 'f0q',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        },
        {
          headerName: 'F1Q 18/19',
          field: 'f1q',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'F2Q 18/19',
          field: 'f2q',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'F3Q 18/19',
          field: 'f3q',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'F4Q 18/19',
          field: 'f4q',
          cellStyle: {'text-align': 'left'}
        },
        {
          headerName: 'Total',
          field: 'total',
          cellStyle: {'text-align': 'left'},
          className: 'pxt'
        }
      ],
      Branddata: [
        {
          f0q: 'Roadmap Total',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Desktop Systems',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Desktop Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Desktop',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Notebook Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Notebook',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Workstation',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Workstation Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Workstation',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Server',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Server Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Server',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Visuals',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Visual Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Visuals',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Services',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Software',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Other',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Services/Other',
          f1q: 'sd',
          f2q: 'sdsd',
          f3q: 'sd',
          f4q: 'sd',
          total: 'sdvc'
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Branded',
          f1q: 'sds',
          f2q: '213',
          f3q: '12',
          f4q: '1111',
          total: '12332'
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Non Branded',
          f1q: '34',
          f2q: '23',
          f3q: '232',
          f4q: '23',
          total: '2323'
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        }
      ]
    }
  },
  created () {
    this.toggleList()
    this.toggleList1()
    this.toggleList2()
  },
  beforeMount () {
    this.frameworkComponents = {
      bmcCQComponent: bmcCQ,
      tmcCQComponent: tmcCQ,
      netbmcCQComponent: netbmcCQ,
      costCQComponent: costCQ
    }
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
    onGridReady (params) {
      params.api.sizeColumnsToFit()
    },
    ok () {
      var obj = [
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: 1,
          listpri: 1905.72,
          stndpri: 1905.72,
          RecommendationDiscount: '51%',
          WalkawayDiscount: '59%',
          respri: 600,
          estpri: 655,
          finalpri: 0,
          disc: 65.6,
          tmc: 1079,
          CostAdjustment: 21.7,
          FinalTMC: 1057.3,
          tmcmar: -402.5,
          tmcb: '-61.4%',
          gr: 4875,
          grre: 0,
          netre: 655,
          pti: 1149.86,
          ptipro: -494.86,
          ptimar: '-75.6%'
        },
        {
          id: '',
          quarter: 'F2Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: 1,
          listpri: 1905.72,
          stndpri: 1905.72,
          RecommendationDiscount: '51%',
          WalkawayDiscount: '59%',
          respri: 600,
          estpri: 655,
          finalpri: 0,
          disc: 65.6,
          tmc: 1039.21,
          CostAdjustment: 21.7,
          FinalTMC: 1017.51,
          tmcmar: -362.71,
          tmcb: '-55.4%',
          gr: 4875,
          grre: 0,
          netre: 655,
          pti: 1110.07,
          ptipro: -455.06,
          ptimar: '-69.5%'
        },
        {
          id: '',
          quarter: 'F3Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: 1,
          listpri: 1905.72,
          stndpri: 1905.72,
          RecommendationDiscount: '51%',
          WalkawayDiscount: '59%',
          respri: 600,
          estpri: 655,
          finalpri: 0,
          disc: 65.6,
          tmc: 1014.65,
          CostAdjustment: 21.7,
          FinalTMC: 992.95,
          tmcmar: -338.15,
          tmcb: '-51.6%',
          gr: '4875',
          grre: '0',
          netre: '655',
          pti: '1085.51',
          ptipro: '-430.5',
          ptimar: '-65.7%'
        },
        {
          id: '',
          quarter: 'F4Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '1',
          listpri: '1905.72',
          stndpri: '1905.72',
          RecommendationDiscount: '51%',
          WalkawayDiscount: '59%',
          respri: '600',
          estpri: '655',
          finalpri: '0',
          disc: '65.6',
          tmc: '1014.65',
          CostAdjustment: 21.7,
          FinalTMC: 992.95,
          tmcmar: '-333.76',
          tmcb: '-51%',
          gr: 4875,
          grre: 0,
          netre: 655,
          pti: 1081.12,
          ptipro: -426.12,
          ptimar: '-65.1%'
        },
        {
          id: 2,
          quarter: 'F1Q 18/19',
          brand: 'Notebook',
          brsum: 'Server Options',
          subser: 'TP Hybrid USB-C Dock',
          prono: '40AF0135CH',
          prodesc: 'TP Hybrid USB-C Dock - CH',
          vol: 5,
          listpri: 277.47,
          stndpri: 277.47,
          RecommendationDiscount: '35%',
          WalkawayDiscount: '45%',
          respri: 149,
          estpri: 1200,
          finalpri: 149,
          disc: 46.3,
          tmc: 10276,
          CostAdjustment: 4.68,
          FinalTMC: 98.08,
          tmcmar: 43.74,
          tmcb: '30.3%',
          gr: 29525,
          grre: '-3%',
          netre: 1445,
          pti: 121.35,
          ptipro: 23.18,
          ptimar: '-16%'
        },
        {
          id: '',
          quarter: 'F2Q 18/19',
          brand: 'Notebook',
          brsum: 'Server Options',
          subser: 'TP Hybrid USB-C Dock',
          prono: '40AF0135CH',
          prodesc: 'TP Hybrid USB-C Dock - CH',
          vol: 5,
          listpri: 277.47,
          stndpri: 277.47,
          RecommendationDiscount: '35%',
          WalkawayDiscount: '45%',
          respri: 149,
          estpri: 1200,
          finalpri: 149,
          disc: 46.3,
          bmc: 10276,
          tmc: 10276,
          CostAdjustment: 4.68,
          FinalTMC: 98.08,
          tmcmar: 43.74,
          tmcb: '30.3%',
          gr: 29525,
          grre: '-3%',
          netre: 1445,
          pti: 121.35,
          ptipro: 23.18,
          ptimar: '-16%'
        },
        {
          id: '',
          quarter: 'F3Q 18/19',
          brand: 'Notebook',
          brsum: 'Server Options',
          subser: 'TP Hybrid USB-C Dock',
          prono: '40AF0135CH',
          prodesc: 'TP Hybrid USB-C Dock - CH',
          vol: 5,
          listpri: 277.47,
          stndpri: 277.47,
          RecommendationDiscount: '35%',
          WalkawayDiscount: '45%',
          respri: 149,
          estpri: 1200,
          finalpri: 149,
          disc: 46.3,
          tmc: 102.76,
          CostAdjustment: 4.68,
          FinalTMC: 98.08,
          tmcmar: 43.74,
          tmcb: '30.3%',
          gr: 29525,
          grre: '-3%',
          netre: 1445,
          pti: 121.35,
          ptipro: 23.18,
          ptimar: '-16%'
        },
        {
          id: '',
          quarter: 'F4Q 18/19',
          brand: 'Notebook',
          brsum: 'Server Options',
          subser: 'TP Hybrid USB-C Dock',
          prono: '40AF0135CH',
          prodesc: 'TP Hybrid USB-C Dock - CH',
          vol: 5,
          listpri: 277.47,
          stndpri: 277.47,
          RecommendationDiscount: '35%',
          WalkawayDiscount: '45%',
          respri: 149,
          estpri: 1200,
          finalpri: 149,
          disc: 46.3,
          tmc: 102.76,
          CostAdjustment: 4.68,
          FinalTMC: 98.08,
          tmcmar: 43.74,
          tmcb: '30.3%',
          gr: 29525,
          grre: '-3%',
          netre: 1445,
          pti: 121.35,
          ptipro: 23.18,
          ptimar: '-16%'
        }
      ]
      this.rowData = obj
    },
    calcGridHeight () {
      var screenHeight = window.innerHeight
      var t1 = document.getElementsByClassName('split-pane-page-wrapper')[0]
      var topBox = document.getElementsByClassName('topBox')[0]
      var ag = document.getElementsByClassName('ag-theme-balham')[0]
      var acontainer = document.getElementsByClassName('ag-body-container')[0]
      // ag-body-container
      ag.style.height = screenHeight - 64 - 320 + 'px'
      t1.style.height = screenHeight - 64 - 320 + 'px'
      acontainer.style.height = screenHeight - 64 - 320 + 'px'
      this.$nextTick(() => {
        this.toggleList1()
      }, 3000)
    },
    one () {
      this.tab1 = true
      this.tab2 = false
      this.tab3 = false
      return false
    },
    two () {
      this.tab1 = false
      this.tab2 = true
      this.tab3 = false
      return false
    },
    three () {
      this.tab1 = false
      this.tab2 = false
      this.tab3 = true
      return false
    },
    resize () {
      this.dom.resize()
    },
    pullFnc () {
      if(this.pullFlag){
        this.pullFlag = false
        this.offset = 0.4
        this.tab1 = true
        this.tab2 = false
      }else{
        this.pullFlag = true
        this.offset = 0.96
        this.tab1 = false
        this.tab2 = false
      }
    },
    handleMoving (e) {
      console.log(e.atMin, e.atMax)
    },
    toggleList () {
      let boxitem = document.getElementsByClassName('boxitem')[0]
      if (this.toggle) {
        boxitem.style.display = 'none'
      } else {
        boxitem.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let peinformation = document.getElementsByClassName('peinformation')[0]
      if (this.toggle1) {
        peinformation.style.display = 'none'
      } else {
        peinformation.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    toggleList2 () {
      let SummaryInformation = document.getElementsByClassName('SummaryInformation')[0]
      if (this.toggle2) {
        SummaryInformation.style.display = 'none'
      } else {
        SummaryInformation.style.display = 'block'
      }
      this.toggle2 = !this.toggle2
    }
  },
  components: {
    AgGridVue,
    SplitPane
  }
}
</script>
<style lang="less">
.newpage
{
  width:100%;
  height:100%;
  padding: 10px;
  background:#fff;

ul{
  width: 48%;
  float: left;
  padding: 0 20px;
  margin: 10px 0;
  &:nth-child(1) {
    border-right:1px solid #ccc;
  }
  li{
    list-style: none;
    height:30px;
    line-height: 30px;
    strong{
      margin-right:5px
    }
    span{
      float: right;
    }
  }
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
.center-middle{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.split-pane-page-wrapper{
  .pane{
    width: 100%;
    height: 100%;
    &.left-pane{
      background: sandybrown;
    }
    &.right-pane{
      background: #fff;
      overflow-y: scroll;
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
}
.boxitem,.SummaryInformation{
  padding-bottom: 5px;
  span{
    color:#999;
  }
}
.headerColor{
  background: #B4C6E7
}
.ivu-table td, .ivu-table th{
  height:35px;
}
</style>
