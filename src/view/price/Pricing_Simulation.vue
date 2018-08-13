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
    <li><span>Country(S):</span><i :title="form.Country">{{form.Country}}</i></li>
    <li><span>Valid From Date:</span><i :title="form.FromDate">{{form.FromDate}}</i></li>
    <li><span>End Customer(DMU):</span><i :title="form.EndCustomer">{{form.EndCustomer}}</i></li>
    <li><span>Sales Representative:</span><i :title="form.SalesRepresentative">{{form.SalesRepresentative}}</i></li>
    <li><span>Requested Bid Approver:</span><i :title="form.RequestedBidApprover">{{form.RequestedBidApprover}}</i></li>
    <li><span>BU:</span><i :title="form.BU">{{form.BU}}</i></li>
    <li><span>Current Date:</span><i :title="form.CurrentDate">{{form.CurrentDate}}</i></li>
    <li><span>Valid To Date:</span><i :title="form.toDate">{{form.toDate}}</i></li>
    <li><span>Opportunity ID:</span><i :title="form.OpportunityID">{{form.OpportunityID}}</i></li>
    <li><span>MOT:</span><i :title="form.MOT">{{form.MOT}}</i></li>
    <li><span>RTM:</span><i :title="form.RTM">{{form.RTM}}</i></li>
    <li><span>Sales Org:</span><i :title="form.SalesOrg">{{form.SalesOrg}}</i></li>
    <li><span>Sales Office:</span><i :title="form.SalesOffice">{{form.SalesOffice}}</i></li>
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
      offset: 0.95,
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
        RequestedBidApprover: 'JingKun Li',
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
        RTM: 'Indirect',
        SalesOrg: 'AU10',
        SalesOffice: 'AU10'
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
        {headerName: 'Item NO', field: 'Item NO', editable: false, cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Part Number', field: 'Part Number', editable: false, cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Description', field: 'Description', editable: false, cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Standard Price', field: 'Standard Price', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'List Price', field: 'List Price', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Requested Price', field: 'Requested Price', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
        {headerName: 'Entitled Price', field: 'Entitled Price', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Qty',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'CQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'CQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        },
        {headerName: 'Total Quantity', field: 'Total Quantity', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'BMC',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'CQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'CQ+1', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100}
          ]
        },
        {headerName: 'MOT', field: 'MOT', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
        {headerName: 'BMC w/ freight cost adjustment', field: 'BMC w/ freight cost adjustment', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Special Funding', field: 'Special Funding', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
        {headerName: 'Net BMC Cost Details',
          children: [
            {headerName: 'CPU Funding', cellStyle: {'text-align': 'center'}, field: 'CPU Funding', width: 100},
            {headerName: 'HDD/SSHD/SSD Funding', field: 'HDD/SSHD/SSD Funding', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Out tape funding for other components', field: 'Out tape funding for other components', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Region Funding', field: 'Region Funding', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Customer Funding(TBD)', field: 'Customer Funding(TBD)', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        },
        {headerName: 'Net Gross BMC Cost Details',
          children: [
            {headerName: 'Custom Duty', field: 'Custom Duty', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Other Local Fee', field: 'Other Local Fee', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        },
        {headerName: 'Non-BMC Cost Details',
          children: [
            {headerName: 'warranty cost', field: 'warranty cost', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Non-BMC uplift', field: 'Non-BMC uplift', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Other cost adder', field: 'Other cost adder', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        },
        {headerName: 'Total Cost',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'CQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'CQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        },
        {headerName: 'BMC Margin',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'CQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'CQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        },
        {headerName: 'BMC Margin',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'CQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'CQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        },
        {headerName: 'TMC Margin',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'CQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'CQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        },
        {headerName: 'Revenue',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'CQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'CQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'CQ+2', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        }
      ],
      rowData: [
        {
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
          Flag: '343',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '20',
          'Entitled Price': '50',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': 'Part Number',
          'Part Number': 'Part Number',
          Description: 'Part Number',
          'Standard Price': '1000',
          'List Price': '343',
          'Total Quantity': 4000,
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
