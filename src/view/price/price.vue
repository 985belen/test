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
          <!-- <split-pane v-model="offsetVertical" mode="vertical" @on-moving="handleMoving"> -->
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
            <!-- <split-pane v-model="offsetVertical" mode="vertical" @on-moving="handleMoving">
              <div slot="top" class="pane top-pane"></div>
              <div slot="bottom" class="pane bottom-pane"></div>
              <div slot="trigger" class="custom-trigger">
                <icons class="trigger-icon" :size="22" type="resize-vertical" color="#fff"/>
              </div>
            </split-pane> -->
          </div>
          <!-- </split-pane> -->
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
              <div v-if="tab2" style="width: 500px;height: 500px;">
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
      <div slot="right" class="pane right-pane">
          <h3 @click="pullFnc" style="cursor: pointer;"><Icon type="ios-arrow-back" /><Icon style="margin-left: -10px;" type="ios-arrow-back" /></h3>
          <div style="width: 500px;height: 500px">
              <Card shadow>
                <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>
              </Card>
          </div>
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
      // Data
      tableDatalen1: 0,
      tablecolumns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
          fixed: 'left'
        },
        {
          title: 'Flag',
          key: 'Flag',
          align: 'center',
          width: 110,
          fixed: 'left'
        },
        {
          title: 'HL Mem',
          width: 110,
          align: 'center',
          key: 'HLMem'
        },
        {
          title: 'Item NO',
          width: 110,
          align: 'center',
          key: 'ItemNO'
        },
        {
          title: 'Part Number',
          width: 110,
          align: 'center',
          key: 'PartNumber'
        },
        {
          title: 'Description',
          width: 110,
          align: 'center',
          key: 'Description'
        },
        {
          title: 'Standard Price',
          width: 110,
          align: 'center',
          key: 'StandardPrice'
        },
        {
          title: 'List Price',
          width: 110,
          align: 'center',
          key: 'ListPrice'
        },
        {
          title: 'Requested',
          align: 'center',
          children: [
            {
              title: 'Requested DisCount',
              key: 'RequestedDisCount',
              width: 110,
              align: 'center'
            },
            {
              title: 'Sales Price',
              key: 'SalesPrice',
              width: 110,
              align: 'center'
            },
            {
              title: 'Margin',
              key: 'Margin',
              width: 110,
              align: 'center'
            }
          ]
        },
        {
          title: 'Active Price',
          align: 'center',
          children: [
            {
              title: 'Discount',
              key: 'Discount',
              width: 100,
              align: 'center'
            },
            {
              title: 'Price',
              key: 'Price',
              width: 100,
              align: 'center'
            },
            {
              title: 'Margin%',
              key: 'Margin%',
              width: 100,
              align: 'center'
            }
          ]
        },
        {
          title: 'Entitied',
          align: 'center',
          children: [
            {
              title: 'Discount From List',
              key: 'DiscountFromList',
              width: 110,
              align: 'center'
            },
            {
              title: 'PRICE',
              key: 'PRICE',
              width: 100,
              align: 'center'
            },
            {
              title: 'CQ Margin%',
              key: 'CQMargin%',
              width: 100,
              align: 'center'
            },
            {
              title: 'weighted Margin%',
              key: 'weightedMargin%',
              width: 110,
              align: 'center'
            }
          ]
        },
        {
          title: 'Adjustied CQ Cost',
          key: 'AdjustiedCQCost',
          align: 'center',
          width: 110
        },
        {
          title: 'Unit Profit',
          key: 'UnitProfit',
          align: 'center',
          width: 110
        },
        {
          title: 'Quantity',
          align: 'center',
          children: [
            {
              title: 'CQ',
              key: 'CQ',
              width: 110,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Input', {
                    props: {
                      size: 'small',
                      value: '233'
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
              key: 'CQ+1',
              width: 100,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Input', {
                    props: {
                      size: 'small',
                      value: '3'
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
              key: 'CQ+2',
              width: 100,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Input', {
                    props: {
                      size: 'small',
                      value: '23'
                    },
                    style: {
                      marginRight: '5px'
                    }
                  })
                ])
              }
            }
          ]
        }
      ],
      tabledata1: [
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        }
      ],
      // CTO Config
      tableDatalen2: 0,
      tablecolumns2: [
        {
          title: 'Item No',
          key: 'ItemNo',
          width: 100,
          align: 'center',
          fixed: 'left'
        },
        {
          title: 'Product No',
          key: 'ProductNo',
          width: 110,
          align: 'center',
          fixed: 'left'
        },
        {
          title: 'MTM/OFF No./P No./SB',
          width: 170,
          align: 'center',
          key: 'MTMOF'
        },
        {
          title: 'Description',
          width: 100,
          align: 'center',
          key: 'Description'
        },
        {
          title: 'Unit',
          width: 100,
          align: 'center',
          key: 'Unit'
        },
        {
          title: 'CQ',
          width: 100,
          align: 'center',
          key: 'CQ'
        },
        {
          title: 'CQ+1',
          width: 100,
          align: 'center',
          key: 'CQ1'
        },
        {
          title: 'CQ+2',
          width: 100,
          align: 'center',
          key: 'CQ2'
        },
        {
          title: 'CQ+3',
          width: 100,
          align: 'center',
          key: 'CQ3'
        },
        {
          title: 'Adjusted CQ | US',
          width: 160,
          align: 'center',
          key: 'AdjustedCQ'
        },
        {
          title: 'Adjusted CQ+1 | US',
          width: 160,
          key: 'AdjustedCQ1'
        },
        {
          title: 'Adjusted CQ+2 | US',
          width: 160,
          align: 'center',
          key: 'AdjustedCQ2'
        },
        {
          title: 'Adjusted CQ+3 | US',
          width: 160,
          align: 'center',
          key: 'AdjustedCQ3'
        },
        {
          title: 'CQ Adjusted Note',
          width: 160,
          align: 'center',
          key: 'CQAdjusted'
        }
      ],
      tabledata2: [
        {
          ItemNo: '23',
          ProductNo: '123',
          MTMOF: '',
          Description: 'sdc',
          Unit: '12',
          CQ: '1111',
          CQ1: 348,
          CQ2: '223',
          CQ3: '12',
          AdjustedCQ: 'dsvfdsv',
          AdjustedCQ1: '34',
          AdjustedCQ2: '23',
          AdjustedCQ3: '12%',
          CQAdjusted: '345'
        },
        {
          ItemNo: '23',
          ProductNo: '123',
          MTMOF: '',
          Description: 'sdc',
          Unit: '12',
          CQ: '1111',
          CQ1: 348,
          CQ2: '223',
          CQ3: '12',
          AdjustedCQ: 'dsvfdsv',
          AdjustedCQ1: '34',
          AdjustedCQ2: '23',
          AdjustedCQ3: '12%',
          CQAdjusted: '345'
        },
        {
          ItemNo: '23',
          ProductNo: '123',
          MTMOF: '',
          Description: 'sdc',
          Unit: '12',
          CQ: '1111',
          CQ1: 348,
          CQ2: '223',
          CQ3: '12',
          AdjustedCQ: 'dsvfdsv',
          AdjustedCQ1: '34',
          AdjustedCQ2: '23',
          AdjustedCQ3: '12%',
          CQAdjusted: '345'
        }
      ],
      tableDatalen3: 0,
      tablecolumns3: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
          fixed: 'left'
        },
        {
          title: 'Flag',
          key: 'Flag',
          width: 110,
          align: 'center',
          fixed: 'left'
        },
        {
          title: 'HL Mem',
          width: 110,
          align: 'center',
          key: 'HLMem'
        },
        {
          title: 'Item NO',
          width: 110,
          align: 'center',
          key: 'ItemNO'
        },
        {
          title: 'Part Number',
          width: 110,
          align: 'center',
          key: 'PartNumber'
        },
        {
          title: 'Description',
          width: 110,
          align: 'center',
          key: 'Description'
        },
        {
          title: 'Standard Price',
          width: 110,
          align: 'center',
          key: 'StandardPrice'
        },
        {
          title: 'List Price',
          width: 110,
          align: 'center',
          key: 'ListPrice'
        },
        {
          title: 'Requested',
          align: 'center',
          children: [
            {
              title: 'Requested DisCount',
              key: 'RequestedDisCount',
              width: 110,
              align: 'center'
            },
            {
              title: 'Sales Price',
              key: 'SalesPrice',
              width: 110,
              align: 'center'
            },
            {
              title: 'Margin',
              key: 'Margin',
              width: 110,
              align: 'center'
            }
          ]
        },
        {
          title: 'Active Price',
          align: 'center',
          children: [
            {
              title: 'Discount',
              key: 'Discount',
              width: 100,
              align: 'center'
            },
            {
              title: 'Price',
              key: 'Price',
              width: 100,
              align: 'center'
            },
            {
              title: 'Margin%',
              key: 'Margin%',
              width: 100,
              align: 'center'
            }
          ]
        },
        {
          title: 'Entitied',
          align: 'center',
          children: [
            {
              title: 'Discount From List',
              key: 'DiscountFromList',
              width: 110,
              align: 'center'
            },
            {
              title: 'PRICE',
              key: 'PRICE',
              width: 100,
              align: 'center'
            },
            {
              title: 'CQ Margin%',
              key: 'CQMargin%',
              width: 100,
              align: 'center'
            },
            {
              title: 'weighted Margin%',
              key: 'weightedMargin%',
              width: 110,
              align: 'center'
            }
          ]
        },
        {
          title: 'Adjustied CQ Cost',
          key: 'AdjustiedCQCost',
          align: 'center',
          width: 110
        },
        {
          title: 'Unit Profit',
          key: 'UnitProfit',
          align: 'center',
          width: 110
        },
        {
          title: 'Quantity',
          align: 'center',
          children: [
            {
              title: 'CQ',
              key: 'CQ',
              width: 110,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Input', {
                    props: {
                      size: 'small',
                      value: '233'
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
              key: 'CQ+1',
              width: 100,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Input', {
                    props: {
                      size: 'small',
                      value: '3'
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
              key: 'CQ+2',
              width: 100,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Input', {
                    props: {
                      size: 'small',
                      value: '23'
                    },
                    style: {
                      marginRight: '5px'
                    }
                  })
                ])
              }
            }
          ]
        }
      ],
      tabledata3: [
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        },
        {
          Flag: 'asas',
          HLMem: 18,
          ItemNO: '223',
          PartNumber: '12',
          Description: 'dsvfdsv',
          StandardPrice: '34',
          ListPrice: '23',
          RequestedDisCount: '12%',
          SalesPrice: '345',
          Margin: '23',
          Discount: '45',
          Price: '22',
          'Margin%': '21',
          DiscountFromList: '23',
          PRICE: '23',
          'CQMargin%': '23',
          'weightedMargin%': '23',
          AdjustiedCQCost: '23',
          UnitProfit: '23',
          CQ: '',
          'CQ+1': '',
          'CQ+2': ''
        }
      ],
      groupConSelect: [],
      groupingConditions: ['HardWare', 'Service', 'ESS', 'T Series', 'X Series', 'ThinkPad P Series', 'Others'],
      tablecolumns51: [
        {
          title: ' ',
          key: 'cc',
          align: 'center'
        },
        {
          title: 'CQ ',
          key: 'CQ',
          align: 'center'
        },
        {
          title: 'CQ+1',
          key: 'CQ1',
          align: 'center'
        },
        {
          title: 'CQ+2',
          key: 'CQ2',
          align: 'center'
        },
        {
          title: 'CQ+3',
          key: 'CQ3',
          align: 'center'
        }
      ],
      tabledata51: [
        {
          cc: 'Hedge OverRide',
          CQ: 18,
          CQ1: '10000',
          CQ2: '1000',
          CQ3: '1000'
        },
        {
          cc: 'Inverse',
          CQ: 18,
          CQ1: '10000',
          CQ2: '1000',
          CQ3: '1000'
        }
      ],
      tablecolumns5: [
        {
          title: 'M1 Rate',
          key: 'M1Rate',
          align: 'center'
        },
        {
          title: 'M2 Rate',
          key: 'M2Rate',
          align: 'center'
        },
        {
          title: 'M3 Rate',
          key: 'M3Rate',
          align: 'center'
        },
        {
          title: 'M4 Rate',
          key: 'M4Rate',
          align: 'center'
        },
        {
          title: 'M5 Rate',
          key: 'M5Rate',
          align: 'center'
        },
        {
          title: 'M6 Rate',
          key: 'M6Rate',
          align: 'center'
        },
        {
          title: 'M7 Rate',
          key: 'M7Rate',
          align: 'center'
        },
        {
          title: 'M8 Rate',
          key: 'M8Rate',
          align: 'center'
        },
        {
          title: 'M9 Rate',
          key: 'M9Rate',
          align: 'center'
        },
        {
          title: 'M10 Rate',
          key: 'M10Rate',
          align: 'center'
        },
        {
          title: 'M11 Rate',
          key: 'M11Rate',
          align: 'center'
        },
        {
          title: 'M12 Rate',
          key: 'M12Rate',
          align: 'center'
        }
      ],
      tabledata5: [
        {
          M1Rate: '1000',
          M2Rate: 18,
          M3Rate: '223',
          M4Rate: '12',
          M5Rate: 'dsvfdsv',
          M6Rate: '34',
          M7Rate: '23',
          M8Rate: '12%',
          M9Rate: '345',
          M10Rate: '23',
          M11Rate: '45',
          M12Rate: '22'
        },
        {
          M1Rate: '1000',
          M2Rate: 18,
          M3Rate: '223',
          M4Rate: '12',
          M5Rate: 'dsvfdsv',
          M6Rate: '34',
          M7Rate: '23',
          M8Rate: '12%',
          M9Rate: '345',
          M10Rate: '23',
          M11Rate: '45',
          M12Rate: '22'
        }
      ],
      tableNumShow: 1,
      columnDefs: [
        {headerName: ' ',
          children: [
            {checkboxSelection: true, width: 60, cellStyle: {'text-align': 'center'}},
            {headerName: 'Flag', field: 'Flag', editable: false, width: 100, cellStyle: {'text-align': 'center'}},
            // {headerName: 'Make', field: 'make', width: 100, cellEditor: 'agSelectCellEditor', cellEditorParams: {values: ['AAA', 'BBB', 'CCC']}},
            {headerName: 'HL Mem', field: 'HL Mem', editable: false, cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Item NO', field: 'Item NO', editable: false, cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Part Number', field: 'Part Number', editable: false, cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
            {headerName: 'Description', field: 'Description', editable: false, cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Standard Price', field: 'Standard Price', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'List Price', field: 'List Price', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        },
        {headerName: 'Discount',
          children: [
            {headerName: 'Requested DisCount', cellStyle: {'text-align': 'center'}, field: 'Requested DisCount', width: 100},
            {headerName: 'Margin', field: 'Margin', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'red'}, width: 100},
            {headerName: 'Sales Price', field: 'Sales Price', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        },
        {headerName: 'Active Price',
          children: [
            {headerName: 'Discount', field: 'Discount', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Price', field: 'Price', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Margin%', field: 'Margin%', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        },
        {headerName: 'Entitied',
          children: [
            {headerName: 'PRICE', field: 'PRICE', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ Margin%', field: 'CQ Margin%', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'weighted Margin%', field: 'weighted Margin%', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        },
        {headerName: 'Quantity',
          children: [
            {headerName: 'CQ', field: 'CQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'CQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        }
      ],
      columnDefs1: [
        {headerName: '',
          field:'first',
          editable: false},
        {headerName: 'CQ',
          field:'CQ',
          editable: false},
        {headerName: 'CQ+1',
          field:'CQ+1',
          editable: false},
        {headerName: 'CQ+2',
          field:'CQ+2',
          editable: false},
        {headerName: 'CQ+3',
          field:'CQ+3',
          editable: false},
        {headerName: 'Total',
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
