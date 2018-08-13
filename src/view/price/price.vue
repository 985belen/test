<template>
<div class="price-box">
  <div class="tool-bar">
    <a href="#" class="item"><Icon class="icon" size=16 type="md-add" />New</a>
    <Divider type="vertical" />
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
    <a href="#" class="item"><Icon class="icon" size=16 type="md-stats" />Summary Report</a>
  </div>
  <h3><a href="javascript:;" style="display:block;color: #333;" @click="toggleList"><Icon type="md-pricetags" /> Quotation Infomation <span style="float: right; font-weight: normal; font-size: 12px;">More</span></a></h3>
  <ul class="item-box" v-if="isStatus">
    <li style="padding-left: 20px; width: 120px;">{{form.QuotationID}}</li>
    <li style="width: 120px;">{{form.Description}}</li>
    <li style="width: 120px;">{{form.Status}}</li>
    <li style="width: 120px;">{{form.Country}}</li>
  </ul>
  <ul class="item-box" v-else>
    <li><span>Quotation ID:</span><i class="blue" :title="form.QuotationID">{{form.QuotationID}}</i></li>
    <li><span>Description:</span><i class="blue" :title="form.Description">{{form.Description}}</i></li>
    <li><span>Status:</span><i class="blue" :title="form.Status">{{form.Status}}</i></li>
    <li><span>Country(S):</span><i class="blue" :title="form.Country">{{form.Country}}</i></li>
    <li><span>Currency:</span><i class="blue" :title="form.Currency">{{form.Currency}}</i></li>
    <li><span>Customer:</span><i :title="form.Customer">{{form.Customer}}</i></li>
    <li><span>Valid From Date:</span><i :title="form.FromDate">{{form.FromDate}}</i></li>
    <li><span>End Customer(DMU):</span><i :title="form.EndCustomer">{{form.EndCustomer}}</i></li>
    <li><span>Sales Representative:</span><i :title="form.SalesRepresentative">{{form.SalesRepresentative}}</i></li>
    <li><span>Bid Approver:</span><i :title="form.BidApprover">{{form.BidApprover}}</i></li>
    <li><span>BU:</span><i :title="form.BU">{{form.BU}}</i></li>
    <li><span>Current Date:</span><i :title="form.CurrentDate">{{form.CurrentDate}}</i></li>
    <li><span>Valid To Date:</span><i :title="form.toDate">{{form.toDate}}</i></li>
    <li><span>Opportunity ID:</span><i :title="form.OpportunityID">{{form.OpportunityID}}</i></li>
    <li><span>Deal Reg Indicator:</span><i :title="form.DealRegIndicator">{{form.DealRegIndicator}}</i></li>
    <li><span>MOT:</span><i :title="form.MOT">{{form.MOT}}</i></li>
    <li><span>Bid Funding:</span><i :title="form.BidFunding">{{form.BidFunding}}</i></li>
    <li><span>RTM:</span><i :title="form.RTM">{{form.RTM}}</i></li>
    <li><span>Sub Type:</span><i :title="form.SubType">{{form.SubType}}</i></li>
  </ul>
  <h3 class="marginBottom" style="margin-bottom: 0;"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList1"><Icon type="ios-podium" /> CQ</a></h3>
  <div  class="table-CQ">
    <Table border :columns="formcolumns" :data="formdata"></Table>
  </div>
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
                :singleClickEdit="true"
                :suppressSizeToFit="true"
                :suppressResize="true"
                :enableColResize="true"
                rowSelection="multiple">
              </ag-grid-vue>
            </div>
          </div>
          <div slot="right" class="pane right-pane">
              <h3 @click="pullFnc()" style="cursor: pointer;">
                <div v-if="!pullFlag">
                <Icon type="ios-arrow-forward" /><Icon style="margin-left: -10px;" type="ios-arrow-forward" />
                  <Icon @click="one()" style="margin-left: 20px;" size=20 type="ios-stats" />
                  <Icon @click="two()" style="margin-left: 10px;" size=20 type="md-reorder" />
                </div>
                <div v-else>
                    <Icon  type="ios-arrow-back" /><Icon style="margin-left: -10px;" type="ios-arrow-back" />
                    <Icon style="margin-left: 10px; margin-top: 20px;" size=20 type="ios-stats" />
                    <Icon style="margin-left: 10px;" size=20 type="md-reorder" />
                </div>
              </h3>
              <div v-if="tab1" style="width: 100%; padding:10px; border-collapse: collapse; height: 500px;">
                  <Card shadow>
                    <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>
                  </Card> 
                  <h3><a href="javascript:;" style="display:block;color: #333;" @click="toggleList"><Icon type="md-pricetags" />Summary </a> </h3>
                  <ag-grid-vue
                  style="width: 100%; height:100%;"
                  class="ag-theme-balham"
                  :columnDefs="columnDefs1"
                  :rowData="rowData1"
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
              <div v-if="tab2" style="width: 500px;height: 500px; display: none;">
                  <Card shadow>
                    <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>
                  </Card> 
                  <h3><a href="javascript:;" style="display:block;color: #333;" @click="toggleList"><Icon type="md-pricetags" />Summary by product series level </a> </h3>
                  <ag-grid-vue
                  style="width: 100%; height:100%;"
                  class="ag-theme-balham"
                  :columnDefs="columnDefs1"
                  :rowData="rowData1"
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
        </split-pane>
      </div>
    </split-pane>
  </div>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
import SplitPane from '_c/split-pane'
import { ChartPie, ChartBar } from '_c/charts'
export default {
  data () {
    return {
      dom: null,
      offset: 0.96,
      pullFlag:true,
      tab1:false,
      tab2:false,
      offsetVertical: '250px',
      isStatus: true,
      form: {
        QuotationID: 'Q-00105395',
        Status: 'Approved',
        Description: 'Arris Prices new',
        FromDate: '2018/05/17',
        Currency: 'USD',
        Country: 'IN',
        Customer: 'SDDSV',
        EndCustomer: 'ARRIS India Pvt Ltd',
        SalesRepresentative: 'Sudheer Ugargol',
        BidApprover: 'JingKun Li',
        BU: 'PCG',
        toDate: '2018/06/16',
        CurrentDate: '2018-08-03',
        OpportunityID: '00697y78778872BzWWAA0',
        DealRegIndicator: 'asd',
        BidFunding: 'asc',
        RTM: 'Indirect',
        SubType: 'asasas',
        MOT: 'asas',
        PriceNotes: 'asas',
        SalesComments: 'asa',
        SpecialTSCs: 'asas',
        ApprovalComments: 'asas',
        CQ: '122',
        CQ1: '343',
        CQ2: '341',
        CQ3: '1223'
      },
      toggle: true,
      toggle1: false,
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      formcolumns: [
        {
          title: ' ',
          key: 'hedgerife',
          width: 120
        },
        {
          title: 'CQ',
          key: 'CQ',
          render: (h, params) => {
            return h('div', [
              h('Input', {
                props: {
                  size: 'small',
                  value: '1.0000'
                },
                style: {
                  marginRight: '5px'
                }
              })
            ])
          }
        },
        {
          title: 'CQ+1',
          key: 'CQ1',
          render: (h, params) => {
            return h('div', [
              h('Input', {
                props: {
                  size: 'small',
                  value: '1.0000'
                },
                style: {
                  marginRight: '5px'
                }
              })
            ])
          }
        },
        {
          title: 'CQ+2',
          key: 'CQ2',
          render: (h, params) => {
            return h('div', [
              h('Input', {
                props: {
                  size: 'small',
                  value: '1.0000'
                },
                style: {
                  marginRight: '5px'
                }
              })
            ])
          }
        },
        {
          title: 'CQ+3',
          key: 'CQ3',
          render: (h, params) => {
            return h('div', [
              h('Input', {
                props: {
                  size: 'small',
                  value: '1.0000'
                },
                style: {
                  marginRight: '5px'
                }
              })
            ])
          }
        }
      ],
      formdata: [
        {
          hedgerife: 'hedgerife',
          CQ: '',
          CQ1: '',
          CQ2: '',
          CQ3: ''
        }
      ],
      columnDefs: [
        {
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: false,
          editable: false,
          checkboxSelection: true, width: 60
        },
        {
          headerName: 'PE Number',
          cellStyle: {'text-align': 'center'},
          cellRenderer: (params)=>{ return '<a href="#/excel/excel_PEsale">'+params.value+'</a>'},
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
          peNum: 'PE-20180807002',
          dmuNum: '1213420209',
          dmuName: 'CSC WE RMC DMU',
          desc: 'RX_Tchibo',
          country: 'Italy',
          region: 'EMEA',
          channel: 'Indirect',
          status: 'Submitted',
          createdBy: 'skeskin',
          createdTime: '2018-08-06 0:00',
          modifiedBy: 'skeskin',
          modyfiedTime: '2018-08-07 0:00',
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
          createdTime: '2018/08/06 0:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 0:00:00',
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
          createdTime: '2018/08/06 0:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 0:00:00',
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
          createdTime: '2018/08/06 0:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 0:00:00',
          pricer: 'jmose',
          grRev: '17,468,07',
          margi: '-35.4',
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
      ],
      columnDefs1: [
        {
          headerName: '',
          field:'first',
          editable: false},
        {
          headerName: 'CQ',
          field:'CQ',
          editable: false},
        {
          headerName: 'CQ+1',
          field:'CQ+1',
          editable: false},
        {
          headerName: 'CQ+2',
          field:'CQ+2',
          editable: false},
        {
          headerName: 'CQ+3',
          field:'CQ+3',
          editable: false},
        {
          headerName: 'Total',
          field:'Total',
          editable: false}
      ],
      rowData1: [
        {
          first: 'Part Number',
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000',
          'CQ+3': '100',
          Total: '1000'
         },
         {
          first: 'Part Number',
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000',
          'CQ+3': '100',
          Total: '1000'
         }
       
      ],
      rowData: [
        {
          Flag: '343',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 'sdv',
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 'sdc',
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          'Requested DisCount': 100,
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          'Requested DisCount': 100,
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          'Requested DisCount': 100,
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          'Requested DisCount': 100,
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          'Requested DisCount': 100,
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        },
        {
          Flag: '34',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Requested DisCount': 100,
          'Standard Price': '1000',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          'List Price': '343',
          id: '324',
          makes: 'sdvcd',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'Sales Price',
          Discount: 89,
          Price: 90,
          'Margin%': '1200',
          CQ: '1000',
          'CQ+1': '100',
          'CQ+2': '1000'
        }
      ]
    }
  },
  components: {
    AgGridVue,
    SplitPane,
    ChartPie,
    ChartBar
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      // this.toggleList()
      this.toggleList1()
    }, 3000)
  },
  beforeDestroy () {
    off(window, 'resize', this.resize())
  },
  methods: {
    one(){
      this.tab1 = true
      this.tab2 = false
      return false
    },
    two(){
      this.tab1 = false
      this.tab2 = true
      return false
    },
    resize () {
      this.dom.resize()
    },
    pullFnc(){
      if(this.pullFlag){
        this.pullFlag = false;
        this.offset = .4
        this.tab1 = true
        this.tab2 = false
      }else{
        this.pullFlag = true;
        this.offset = .96
        this.tab1 = false
        this.tab2 = false
      }
    },
    handleMoving (e) {
      console.log(e.atMin, e.atMax)
    },
    toggleList () {
      let itembox = document.getElementsByClassName('item-box')[0]
      if (this.toggle) {
        this.isStatus = false
        // itembox.style.height = '24px'
        itembox.style.border = '0'
      } else {
        this.isStatus = true
        itembox.style.height = 'auto'
        itembox.style.border = '1px solid #ccc'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let tableCQ = document.getElementsByClassName('table-CQ')[0]
      if (this.toggle1) {
        tableCQ.style.display = 'none'
      } else {
        tableCQ.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    handleReset (name) {
      this.$refs[name].resetFields()
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
// .ag-row{
//   height:27px !important;
// }
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
  .fold{
    width: 60px;
    height: 22px;
    line-height: 22px;
    margin-top: 4px;
    margin-right: 10px;
    border-radius: 6px;
    text-align: center;
    float: right;
    color: #fff;
    border-radius: 6px;
    background: #2d8cf0;
    font-size: 12px;
    box-sizing:border-box;
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
.item-box{
  width:100%;
  height:auto;
  margin-bottom:5px;
  overflow: hidden;
  border:1px solid #ccc;
  padding-top: 3px;
  li {
    float: left;
    width: 20%;
    height: 24px;
    line-height: 24px;
    font-size: 13px;
    list-style: none;
    span{
      width: 135px;
      height:24px;
      line-height: 24px;
      color:#000;
      float: left;
      display: block;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    i{
      font-style: normal;
      width: 100px;
      height:24px;
      line-height: 24px;
      margin-left:5px;
      color: #666;
      float: left;
      display: block;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
.table-CQ{
  width: 100%;
  height:auto;
  // padding: 0 10px;
}
.ivu-tabs-bar{
  margin-bottom: 2px;
}
.item-box .blue{
  color:#cc0000;
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