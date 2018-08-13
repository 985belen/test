<template>
<div class="newpage">
  <div class="tool-bar">
    <a href="#" class="item" @click="resize, modeldetail = true" ><Icon class="icon" size=16 type="md-barcode" />Summary Detail</a>
    <Divider type="vertical" />
    <a href="#" class="item" @click="resize,modelProduct = true"><Icon class="icon" size=16 type="md-stats" />Summary By Product</a>
    <Divider type="vertical" />
    <a href="#" class="item" @click="resize,modelBrand = true"><Icon class="icon" size=16 type="md-search" />Summary By Brand</a>
    <Divider type="vertical" />
    <a href="#" class="item" @click="importTransaction"><Icon class="icon" size=16 type="md-add" />Import Transaction</a>
  </div>
  <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList1"><Icon type="ios-podium" />PE Information</a></h3>
  <div class="peinformation">
    <Row>
      <Col span=12 offset="6">
        <img src="./pic1.png"/>
      </Col>
    </Row>
  </div>
  <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList"><Icon type="ios-podium" />form</a></h3>
  <div class="boxitem">
    <Form :model="FormItem" :label-width="120" :rules="ruleValidate">
      <Row>
        <Col span=5 offset="1">
          <strong>System Volume: </strong><span>450</span>
        </Col>
        <Col span=5>
          <strong>Gross Revenue: </strong><span>347100</span>
        </Col>
        <Col span=5>
          <strong>Net Revenue: </strong><span>347100</span>
        </Col>
        <Col span=5>
          <strong>TMC Margin: </strong><span>35524</span>
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
  <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList2"><Icon type="ios-podium" />Summary Information</a></h3>
  <div class="SummaryInformation">
    <Row type="flex" justify="center">
      <Col span=5>
        <strong>System Volume: </strong><span>440</span>
      </Col>
      <Col span=5>
        <strong>Gross Revenue: </strong><span>337100</span>
      </Col>
      <Col span=5>
        <strong>Net Revenue: </strong><span>337100</span>
      </Col>
      <Col span=5>
        <strong>TMC Margin: </strong><span>33323</span>
      </Col>
      <Col span=4>
        <strong>TMC Margin %: </strong><span>10.2</span>
      </Col>
    </Row>
  </div>
  <div class="split-pane-page-wrapper">
    <split-pane v-model="offset" @on-moving="handleMoving">
      <div slot="left" class="pane left-pane">
        <div slot="top" class="pane top-pane">
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columns"
            :rowData="rowData"
            :gridAutoHeight="true"
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
      v-model="modeldetail"
      :styles="{width:'800px'}"
      title="Financial Summary"
      ok-text="OK"
      cancel-text="Cancel">
      <ag-grid-vue
        style="width: 100%; height:100%;"
        class="ag-theme-balham"
        :columnDefs="detailcolumns1"
        :rowData="detaildata1"
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
      <Divider />
      <ag-grid-vue
        style="width: 100%; height:100%;"
        class="ag-theme-balham"
        :columnDefs="detailcolumns2"
        :rowData="detaildata2"
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
      <Divider />
      <ag-grid-vue
        style="width: 100%; height:100%;"
        class="ag-theme-balham"
        :columnDefs="detailcolumns3"
        :rowData="detaildata3"
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
    </Modal>
   <Modal
      v-model="modelProduct"
      title="Summary by Product"
      :styles="{width:'1250px'}"
      ok-text="OK"
      cancel-text="Cancel">
      <ag-grid-vue
        style="width: 100%; height:100%;"
        class="ag-theme-balham"
        :columnDefs="productcolumns1"
        :rowData="productdata1"
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
    </Modal>
   <Modal
      v-model="modelBrand"
      title="Summary by Brand"
      :styles="{width:'800px'}"
      ok-text="OK"
      cancel-text="Cancel">
      <div style="width:100%;height:auto;overflow:hidden;">
        <ul>
          <li>
            <strong>Total Gross Revenue</strong>
            <span>555,480</span>
          </li>
          <li>
            <strong>Total Net Revenue</strong>
            <span>555,480</span>
          </li>
          <li>
            <strong>Total TMC Profit</strong>
            <span>-2,954,341</span>
          </li>
          <li>
            <strong>TMC Profit %</strong>
            <span>-531.9%</span>
          </li>
        </ul>
        <ul>
          <li>
          <strong>Notebook Option Attach Rate</strong>
            <span>40.3%</span>
          </li>
          <li>
            <strong>Desktop Option Attach Rate</strong>
            <span>0.0%</span>
          </li>
          <li>
            <strong>Services Pen Rate</strong>
            <span>0.0%</span>
          </li>
          <li>
            <strong>Mobile Mix</strong>
            <span>98.6%</span>
          </li>
        </ul>
      </div>
      <ag-grid-vue
        style="width: 100%; height:100%;"
        class="ag-theme-balham"
        :columnDefs="Brandcolumns"
        :rowData="Branddata"
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
    </Modal>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
import SplitPane from '_c/split-pane'
export default {
  data () {
    return {
      toggle: true,
      toggle1: true,
      toggle2: true,
      dom: null,
      offset: 0.95,
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
      columns: [
        {
          headerName: 'ID',
          width: 80,
          field: 'id',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'Quarter',
          fixed: 'left',
          field: 'quarter',
          width: 100,
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Brand',
          field: 'brand',
          cellStyle: {'text-align': 'center'},
          width: 100
        },
        {
          headerName: 'Brand Summary',
          width: 100,
          field: 'brsum',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Sub-Series',
          width: 100,
          field: 'subser',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Product No.',
          width: 120,
          field: 'prono',
          cellStyle: {'text-align': 'center'},
          cellRenderer: (params) => { return '<a href="#/excel/excel_listpage">'+params.value+'</a>'}
        },
        {
          headerName: 'Product Desc',
          width: 120,
          field: 'prodesc',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Vol',
          field: 'vol',
          width: 100,
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'List Price',
          width: 100,
          field: 'listpri',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Stnd Price',
          width: 100,
          field: 'stndpri',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Request price',
          width: 120,
          field: 'respri',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Estimation Price',
          width: 135,
          field: 'estpri',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Final Price',
          width: 100,
          field: 'finalpri',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Discount %',
          width: 100,
          field: 'disc',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'BMC',
          width: 100,
          field: 'bmc',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'TMC',
          width: 100,
          field: 'tmc',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'BMC Margin',
          width: 110,
          field: 'bmcmar',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'TMC Margin',
          width: 110,
          field: 'tmcmar',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'BMC %',
          width: 100,
          field: 'bmcb',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'TMC %',
          width: 100,
          field: 'tmcb',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'GR',
          width: 100,
          field: 'gr',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'GR Reduce %',
          width: 110,
          field: 'grre',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Net Revenue',
          width: 100,
          field: 'netre',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'PTI',
          width: 100,
          field: 'pti',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'PTI Profit',
          width: 100,
          field: 'ptipro',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'PTI Margin',
          width: 100,
          field: 'ptimar',
          cellStyle: {'text-align': 'center'}
        }
      ],
      rowData: [
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        },
        {
          id: '',
          quarter: 'F2Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '804.92',
          bmcmar: '19.69',
          tmcmar: '21.01',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1073.91',
          ptipro: '-98.92',
          ptimar: '-10.30%'
        },
        {
          id: '',
          quarter: 'F3Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '806.12',
          bmcmar: '19.69',
          tmcmar: '18.82',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1076.11',
          ptipro: '-101.11',
          ptimar: '-10.4%'
        },
        {
          id: '',
          quarter: 'F4Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '806.12',
          bmcmar: '19.69',
          tmcmar: '18.82',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1076.11',
          ptipro: '-101.11',
          ptimar: '-10.4%'
        },
        {
          id: 2,
          quarter: 'F1Q 18/19',
          brand: 'ThinkStation',
          brsum: 'Workstation',
          subser: 'ThinkStation P520',
          prono: '30BFCTO1WW',
          prodesc: 'Workstation TS P520_C442_ES_TW_R',
          vol: '5',
          listpri: '1197302.47',
          stndpri: '1197302.47',
          respri: '976',
          estpri: '1200',
          finalpri: '975',
          disc: '0.999',
          bmc: '786.03',
          tmc: '955.31',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '29525',
          grre: '0',
          netre: '29525',
          pti: '1391.72',
          ptipro: '-210.72',
          ptimar: '-17.8%'
        },
        {
          id: '',
          quarter: 'F2Q 18/19',
          brand: 'ThinkStation',
          brsum: 'Workstation',
          subser: 'ThinkStation P520',
          prono: '30BFCTO1WW',
          prodesc: 'Workstation TS P520_C442_ES_TW_R',
          vol: '5',
          listpri: '1197302.47',
          stndpri: '1197302.47',
          respri: '976',
          estpri: '1200',
          finalpri: '975',
          disc: '0.999',
          bmc: '786.03',
          tmc: '953.99',
          bmcmar: '19.69',
          tmcmar: '21.01',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '29525',
          grre: '0',
          netre: '29525',
          pti: '1387.21',
          ptipro: '-206.21',
          ptimar: '-17.5%'
        },
        {
          id: '',
          quarter: 'F3Q 18/19',
          brand: 'ThinkStation',
          brsum: 'Workstation',
          subser: 'ThinkStation P520',
          prono: '30BFCTO1WW',
          prodesc: 'Workstation TS P520_C442_ES_TW_R',
          vol: '5',
          listpri: '1197302.47',
          stndpri: '1197302.47',
          respri: '976',
          estpri: '1200',
          finalpri: '975',
          disc: '0.999',
          bmc: '786.03',
          tmc: '956.18',
          bmcmar: '19.69',
          tmcmar: '18.82',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '29525',
          grre: '0',
          netre: '29525',
          pti: '1386.51',
          ptipro: '-205.51',
          ptimar: '-17.4%'
        },
        {
          id: '',
          quarter: 'F4Q 18/19',
          brand: 'ThinkStation',
          brsum: 'Workstation',
          subser: 'ThinkStation P520',
          prono: '30BFCTO1WW',
          prodesc: 'Workstation TS P520_C442_ES_TW_R',
          vol: '5',
          listpri: '1197302.47',
          stndpri: '1197302.47',
          respri: '976',
          estpri: '1200',
          finalpri: '975',
          disc: '0.999',
          bmc: '786.03',
          tmc: '956.18',
          bmcmar: '19.69',
          tmcmar: '18.82',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '29525',
          grre: '0',
          netre: '29525',
          pti: '1386.51',
          ptipro: '-205.51',
          ptimar: '-17.4%'
        },
        {
          id: 3,
          quarter: 'F1Q 18/19',
          brand: 'ThinkStation',
          brsum: 'Workstation',
          subser: 'ThinkStation P520',
          prono: '30BFCTO1WW',
          prodesc: 'Workstation TS P520_C442_ES_TW_R',
          vol: '5',
          listpri: '1197302.47',
          stndpri: '1197302.47',
          respri: '976',
          estpri: '1200',
          finalpri: '975',
          disc: '0.999',
          bmc: '786.03',
          tmc: '955.31',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '29525',
          grre: '0',
          netre: '29525',
          pti: '1391.72',
          ptipro: '-210.72',
          ptimar: '-17.8%'
        },
        {
          id: '',
          quarter: 'F2Q 18/19',
          brand: 'ThinkStation',
          brsum: 'Workstation',
          subser: 'ThinkStation P520',
          prono: '30BFCTO1WW',
          prodesc: 'Workstation TS P520_C442_ES_TW_R',
          vol: '5',
          listpri: '1197302.47',
          stndpri: '1197302.47',
          respri: '976',
          estpri: '1200',
          finalpri: '975',
          disc: '0.999',
          bmc: '786.03',
          tmc: '953.99',
          bmcmar: '19.69',
          tmcmar: '21.01',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '29525',
          grre: '0',
          netre: '29525',
          pti: '1387.21',
          ptipro: '-206.21',
          ptimar: '-17.5%'
        },
        {
          id: '',
          quarter: 'F3Q 18/19',
          brand: 'ThinkStation',
          brsum: 'Workstation',
          subser: 'ThinkStation P520',
          prono: '30BFCTO1WW',
          prodesc: 'Workstation TS P520_C442_ES_TW_R',
          vol: '5',
          listpri: '1197302.47',
          stndpri: '1197302.47',
          respri: '976',
          estpri: '1200',
          finalpri: '975',
          disc: '0.999',
          bmc: '786.03',
          tmc: '956.18',
          bmcmar: '19.69',
          tmcmar: '18.82',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '29525',
          grre: '0',
          netre: '29525',
          pti: '1386.51',
          ptipro: '-205.51',
          ptimar: '-17.4%'
        },
        {
          id: '',
          quarter: 'F4Q 18/19',
          brand: 'ThinkStation',
          brsum: 'Workstation',
          subser: 'ThinkStation P520',
          prono: '30BFCTO1WW',
          prodesc: 'Workstation TS P520_C442_ES_TW_R',
          vol: '5',
          listpri: '1197302.47',
          stndpri: '1197302.47',
          respri: '976',
          estpri: '1200',
          finalpri: '975',
          disc: '0.999',
          bmc: '786.03',
          tmc: '956.18',
          bmcmar: '19.69',
          tmcmar: '18.82',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '29525',
          grre: '0',
          netre: '29525',
          pti: '1386.51',
          ptipro: '-205.51',
          ptimar: '-17.4%'
        }
      ],
      detailcolumns1: [
        {
          headerName: ' ',
          field: 'f0q',
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'F1Q 18/19',
          field: 'f1q',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'F2Q 18/19',
          field: 'f2q',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'F3Q 18/19',
          field: 'f3q',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'F4Q 18/19',
          field: 'f4q',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Total',
          field: 'total',
          cellStyle: {'text-align': 'center'},
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
          f0q: 'TMC GP',
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
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: ' ',
          field: 'tsvv',
          cellStyle: {'text-align': 'center'}
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
          field: 'tsv',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: ' ',
          field: 'tsvv',
          cellStyle: {'text-align': 'center'}
        }
      ],
      detaildata3: [
        {
          tsv: 'Notebook Option Attach',
          tsvv: '40.3%'
        },
        {
          tsv: 'Desktop Option Attach',
          tsvv: '0.0%'
        },
        {
          tsv: 'Services Pen Rate',
          tsvv: '0.0%'
        },
        {
          tsv: 'Mobile Mix',
          tsvv: '98.6%'
        }
      ],
      productcolumns1: [
        {
          headerName: 'Part#',
          field: 'part',
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'Product Brand',
          field: 'pb',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Product Desc',
          field: 'pd',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Total Volume',
          field: 'tv',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Wtd Average List',
          field: 'wal',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Wtd Average Price',
          field: 'wap',
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'Wtd Average TMC Cost',
          field: 'watc',
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'TMC GP',
          field: 'tg',
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'TMC GP%',
          field: 'tgb',
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'Total Gross Revenue',
          field: 'tgr',
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'Total Net Revenue',
          field: 'tnr',
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'Total TMC GP',
          field: 'ttg',
          cellStyle: {'text-align': 'center'},
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
          cellStyle: {'text-align': 'center'},
          className: 'pxt'
        },
        {
          headerName: 'F1Q 18/19',
          field: 'f1q',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'F2Q 18/19',
          field: 'f2q',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'F3Q 18/19',
          field: 'f3q',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'F4Q 18/19',
          field: 'f4q',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Total',
          field: 'total',
          cellStyle: {'text-align': 'center'},
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
  beforeDestroy () {
    off(window, 'resize', this.resize())
  },
  created () {
    this.toggleList()
    this.toggleList1()
    this.toggleList2()
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
    importTransaction () {
      this.$router.push('/excel/excel_importTransaction')
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
  height: 400px;
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
}

</style>
