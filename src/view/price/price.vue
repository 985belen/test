<template>
<div class="price-box" ref="priceBox">
  <div ref="topMain" class="topMain">
    <div class="tool-bar" ref="toolBar">
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
    <h3 ref=""><a href="javascript:;" style="display:block;color: #333;" @click="toggleList"><Icon type="md-pricetags" /> Quotation Infomation <span style="float: right; font-weight: normal; font-size: 12px;">More</span></a></h3>
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
    <h3 class="marginBottom" style="margin-bottom: 10px;"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList1"><Icon type="ios-podium" /> CQ</a></h3>
    <div class="table-CQ">
      <Table border :columns="formcolumns" :data="formdata"></Table>
    </div>
  </div>
  <div class="split-pane-page-wrapper">
    <split-pane v-model="offset" @on-moving="handleMoving">
      <div slot="left" class="pane left-pane">
        <div slot="top" class="pane top-pane agcontainer">
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :floatingFilter="true"
            :enableSorting="true"
            :enableFilter="true"
            :toolPanelSuppressGroups="true"
            :toolPanelSuppressValues="true"
            :toolPanelSuppressSideButtons="false"
            :singleClickEdit="true"
            :suppressSizeToFit="true"
            :suppressResize="true"
            :enableColResize="true"
            rowSelection="multiple">
          </ag-grid-vue>
        </div>
      </div>
      <div slot="right" class="pane right-pane">
        <h3 style="cursor: pointer;">
          <div v-if="!pullFlag">
            <Icon  @click="pullFnc" type="md-swap" />
            <Icon @click="one" style="margin-left: 10px; margin-top:0; line-height:30px" size=20 type="ios-stats" />
            <Icon @click="two" style="margin-left: 10px;" size=20 type="md-reorder" />
            <Icon @click="three" style="margin-left: 10px;" size=20 type="md-star" />
          </div>
          <div v-else>
            <Icon  @click="pullFnc" type="md-swap" />
            <Icon @click="pullFnc" style="margin-left: 10px; margin-top: 0;" size=20 type="ios-stats" />
            <Icon @click="pullFnc" style="margin-left: 10px;" size=20 type="md-reorder" />
            <Icon @click="pullFnc" style="margin-left: 10px;" size=20 type="md-star" />
          </div>
        </h3>
        <div v-if="tab1" style="width: 100%; padding:10px; border-collapse: collapse; min-height: 300px;">
          <Card shadow>
            <chart-pie style="height: 300px;" :value="pieData" text="Customer Revenue"></chart-pie>
          </Card>
          <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;"><Icon type="md-pricetags" />Summary </a> </h3>
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columnDefs1"
            :rowData="rowData1"
            :gridAutoHeight="true"
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
        <div v-if="tab2" style="width: 100%;padding:10px; border-collapse: collapse;min-height: 300px; ">
          <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" ><Icon type="md-pricetags" />Summary by product series level </a> </h3>
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columnDefs2"
            :rowData="rowData3"
            :gridAutoHeight="true"
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
        <div v-if="tab3" style="width: 100%;padding:10px; border-collapse: collapse;min-height: 300px; ">
          <h3 class="marginBottom"><a href="javascript:;" style="display:block;color: #333;" ><Icon type="md-pricetags" />Summary by product Group</a> </h3>
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columnDefs3"
            :rowData="rowData3"
            :gridAutoHeight="true"
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
      windowHeight:null,
      dom: null,
      offset: 0.97,
      pullFlag: true,
      tab1: false,
      tab2: false,
      tab3: false,
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
        {value: 335, name: 'BP1'},
        {value: 310, name: 'BP2'},
        {value: 234, name: 'BP3'},
        {value: 135, name: 'BP4'},
        {value: 1548, name: 'BP5'}
      ],
      formcolumns: [
        {
          title: ' ',
          key: 'hedgerife'
        },
        {
          title: 'CQ',
          key: 'CQ'
        },
        {
          title: 'CQ+1',
          key: 'CQ1'
        },
        {
          title: 'CQ+2',
          key: 'CQ2'
        },
        {
          title: 'CQ+3',
          key: 'CQ3'
        }
      ],
      formdata: [
        {
          hedgerife: 'hedgerife',
          CQ: '1000',
          CQ1: '1000',
          CQ2: '1000',
          CQ3: '10000'
        }
      ],
      columnDefs: [
        {
          headerName: 'Group',
          children: [
            {headerName: 'Item NO',  width: 80, field: 'Item NO', cellStyle: {'text-align': 'left'}},
            {headerName: 'Flag',  width: 90, field: 'Flag', cellStyle: {'text-align': 'left'}},
            {headerName: 'Part Number',  width: 120, field: 'Part Number', cellStyle: {'text-align': 'left'}},
            {headerName: 'Description',  width: 120, field: 'Description', cellStyle: {'text-align': 'left'},
              cellRenderer: (params) => {
                return '<div role="gridcell" title="' + params.value +'">' + params.value + '</div>'
              }
            },
            {headerName: 'Category',  width: 120, field: 'Category', cellStyle: {'text-align': 'left'}},
            {headerName: 'Standard Price',  width: 120, field: 'Standard Price', cellStyle: {'text-align': 'left'}},
            {headerName: 'List Price',  width: 120, field: 'List Price', cellStyle: {'text-align': 'left'}},
            {headerName: 'Requested Price',  width: 130, field: 'Requested Price', editable: true, cellStyle: {'text-align': 'left', color: '#fff', backgroundColor: 'green'}},
            {headerName: 'Entitled Price',  width: 120, field: 'Entitled Price', cellStyle: {'text-align': 'left'}},
            {headerName: 'Total Quantity',  width: 120, field: 'Total Quantity', cellStyle: {'text-align': 'left'}},
            {headerName: 'MOT', field: 'MOT',  width: 120, editable: true, cellStyle: {'text-align': 'left', color: '#fff', backgroundColor: 'green'}},
            {headerName: 'BMC w/ freight cost adjustment',  width: 220, field: 'BMC w/ freight cost adjustment', cellStyle: {'text-align': 'left'}},
            {headerName: 'Special Funding',  width: 130, field: 'Special Funding', editable: true, cellStyle: {'text-align': 'left', color: '#fff', backgroundColor: 'green'}}
          ]
        },
        {headerName: 'Qty', cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'CQ', width: 120, editable: true, field: 'QtyCQ', cellStyle: {'text-align': 'left', color: '#fff', backgroundColor: 'green'}},
            {headerName: 'CQ+1', width: 120, editable: true,  field: 'QtyCQ+1', cellStyle: {'text-align': 'left', color: '#fff', backgroundColor: 'green'}},
            {headerName: 'CQ+2', width: 120, editable: true,  field: 'QtyCQ+2', cellStyle: {'text-align': 'left', color: '#fff', backgroundColor: 'green'}}
          ]
        },
        {headerName: 'BMC',cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'CQ', width: 120, field: 'BMCCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+1', width: 120, field: 'BMCCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+2', width: 120, field: 'BMCCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+3', width: 120, field: 'BMCCQ+3', cellStyle: {'text-align': 'left'}}
          ]
        },
        {headerName: 'Net BMC Cost Details',
          children: [
            {headerName: 'CPU Funding', width: 120, cellStyle: {'text-align': 'left'}, field: 'CPU Funding'},
            {headerName: 'HDD/SSHD/SSD Funding', width: 180, field: 'HDD/SSHD/SSD Funding', cellStyle: {'text-align': 'left'}},
            {headerName: 'Out tape funding for other components', width: 180, field: 'Out tape funding for other components', cellStyle: {'text-align': 'left'}},
            {headerName: 'Region Funding', width: 130, field: 'Region Funding', cellStyle: {'text-align': 'left'}},
            {headerName: 'Customer Funding(TBD)', width: 180, field: 'Customer Funding(TBD)', cellStyle: {'text-align': 'left'}}
          ]
        },
        {headerName: 'Net Gross BMC Cost Details',
          children: [
            {headerName: 'Custom Duty', width: 120, field: 'Custom Duty', cellStyle: {'text-align': 'left'}},
            {headerName: 'Other Local Fee', width: 150, field: 'Other Local Fee', cellStyle: {'text-align': 'left'}},
          ]
        },
        {headerName: 'Non-BMC Cost Details',
          children: [
            {headerName: 'warranty cost', width: 130, field: 'warranty cost', cellStyle: {'text-align': 'left'}},
            {headerName: 'Non-BMC uplift', width: 130, field: 'Non-BMC uplift', cellStyle: {'text-align': 'left'}},
            {headerName: 'Other cost adder', width: 150, field: 'Other cost adder', cellStyle: {'text-align': 'left'}}
          ]
        },
        {headerName: 'Total Cost',cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'CQ', width: 120, field: 'TotalCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+1', width: 120, field: 'TotalCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+2', width: 120, field: 'TotalCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+3', width: 120, field: 'TotalCQ+3', cellStyle: {'text-align': 'left'}},
          ]
        },
        {headerName: 'BMC Margin',cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'CQ', width: 120, field: 'MarginCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+1', width: 120, field: 'MarginCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+2', width: 120, field: 'MarginCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+3', width: 120, field: 'MarginCQ+3', cellStyle: {'text-align': 'left'}},
          ]
        },
        {headerName: 'TMC Margin',cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'CQ', width: 120, field: 'TMCCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+1', width: 120, field: 'TMCCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+2', width: 120, field: 'TMCCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+3', width: 120, field: 'TMCCQ+3', cellStyle: {'text-align': 'left'}},
          ]
        },
        {headerName: 'Revenue',cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'CQ', width: 120, field: 'RevenueCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+1', width: 120, field: 'RevenueCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+2', width: 120, field: 'RevenueCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'CQ+3', width: 120, field: 'RevenueCQ+2', cellStyle: {'text-align': 'left'}},
          ]
        }
      ],
      rowData: [
        {
          Flag: 'NP ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '2000',
          'Entitled Price': '2200',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '1',
          'Part Number': '5PS0D80996 ',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '2480',
          'List Price': '2480',
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
          RevenueCQ: '14',
          'RevenueCQ+1': '14',
          'RevenueCQ+2': '14',
          'RevenueCQ+3': '14',
          TMCCQ: '13',
          'TMCCQ+1': '13',
          'TMCCQ+2': '13',
          'TMCCQ+3': '13',
          MarginCQ: '12',
          'MarginCQ+1': '12',
          'MarginCQ+2': '12',
          'MarginCQ+3': '12',
          TotalCQ: '880',
          'TotalCQ+1': '880',
          'TotalCQ+2': '880',
          'TotalCQ+3': '880',
          BMCCQ: '',
          'BMCCQ+1': '756',
          'BMCCQ+2': '756',
          'BMCCQ+3': '756',
          QtyCQ: '1000',
          'QtyCQ+1': '1000',
          'QtyCQ+2': '1000'
        },
        {
          Flag: 'CM',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Category': 'ThinkPad Classic',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '1300',
          'Entitled Price': '1400',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '2',
          'Part Number': '20HQA06LTW',
          Description: 'NoteBook TP X1 C5 16G 512 W10P',
          'Standard Price': '1500',
          'List Price': '1500',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
        },
        {
          Flag: 'ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '3200',
          'Entitled Price': '3250',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '3',
          'Part Number': '20HQA06LTW',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '3300',
          'List Price': '3300',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
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
          'Item NO': '4',
          'Part Number': '20HQA06LTW',
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
          RevenueCQ: '16',
          'RevenueCQ+1': '16',
          'RevenueCQ+2': '16',
          'RevenueCQ+3': '16',
          TMCCQ: '23',
          'TMCCQ+1': '23',
          'TMCCQ+2': '23',
          'TMCCQ+3': '23',
          MarginCQ: '14',
          'MarginCQ+1': '14',
          'MarginCQ+2': '14',
          'MarginCQ+3': '14',
          TotalCQ: '2388',
          'TotalCQ+1': '2388',
          'TotalCQ+2': '2388',
          'TotalCQ+3': '2388',
          BMCCQ: '2200',
          'BMCCQ+1': '2200',
          'BMCCQ+2': '2200',
          'BMCCQ+3': '2200',
          QtyCQ: '5000',
          'QtyCQ+1': '5000',
          'QtyCQ+2': '5000'
        },
        {
          Flag: 'ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '3200',
          'Entitled Price': '3250',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '3',
          'Part Number': '20HQA06LTW',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '3300',
          'List Price': '3300',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
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
          'Item NO': '4',
          'Part Number': '20HQA06LTW',
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
          RevenueCQ: '16',
          'RevenueCQ+1': '16',
          'RevenueCQ+2': '16',
          'RevenueCQ+3': '16',
          TMCCQ: '23',
          'TMCCQ+1': '23',
          'TMCCQ+2': '23',
          'TMCCQ+3': '23',
          MarginCQ: '14',
          'MarginCQ+1': '14',
          'MarginCQ+2': '14',
          'MarginCQ+3': '14',
          TotalCQ: '2388',
          'TotalCQ+1': '2388',
          'TotalCQ+2': '2388',
          'TotalCQ+3': '2388',
          BMCCQ: '2200',
          'BMCCQ+1': '2200',
          'BMCCQ+2': '2200',
          'BMCCQ+3': '2200',
          QtyCQ: '5000',
          'QtyCQ+1': '5000',
          'QtyCQ+2': '5000'
        },
        {
          Flag: 'ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '3200',
          'Entitled Price': '3250',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '3',
          'Part Number': '20HQA06LTW',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '3300',
          'List Price': '3300',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
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
          'Item NO': '4',
          'Part Number': '20HQA06LTW',
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
          RevenueCQ: '16',
          'RevenueCQ+1': '16',
          'RevenueCQ+2': '16',
          'RevenueCQ+3': '16',
          TMCCQ: '23',
          'TMCCQ+1': '23',
          'TMCCQ+2': '23',
          'TMCCQ+3': '23',
          MarginCQ: '14',
          'MarginCQ+1': '14',
          'MarginCQ+2': '14',
          'MarginCQ+3': '14',
          TotalCQ: '2388',
          'TotalCQ+1': '2388',
          'TotalCQ+2': '2388',
          'TotalCQ+3': '2388',
          BMCCQ: '2200',
          'BMCCQ+1': '2200',
          'BMCCQ+2': '2200',
          'BMCCQ+3': '2200',
          QtyCQ: '5000',
          'QtyCQ+1': '5000',
          'QtyCQ+2': '5000'
        },
        {
          Flag: 'ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '3200',
          'Entitled Price': '3250',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '3',
          'Part Number': '20HQA06LTW',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '3300',
          'List Price': '3300',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
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
          'Item NO': '4',
          'Part Number': '20HQA06LTW',
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
          RevenueCQ: '16',
          'RevenueCQ+1': '16',
          'RevenueCQ+2': '16',
          'RevenueCQ+3': '16',
          TMCCQ: '23',
          'TMCCQ+1': '23',
          'TMCCQ+2': '23',
          'TMCCQ+3': '23',
          MarginCQ: '14',
          'MarginCQ+1': '14',
          'MarginCQ+2': '14',
          'MarginCQ+3': '14',
          TotalCQ: '2388',
          'TotalCQ+1': '2388',
          'TotalCQ+2': '2388',
          'TotalCQ+3': '2388',
          BMCCQ: '2200',
          'BMCCQ+1': '2200',
          'BMCCQ+2': '2200',
          'BMCCQ+3': '2200',
          QtyCQ: '5000',
          'QtyCQ+1': '5000',
          'QtyCQ+2': '5000'
        },
        {
          Flag: 'NP ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '2000',
          'Entitled Price': '2200',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '1',
          'Part Number': '5PS0D80996 ',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '2480',
          'List Price': '2480',
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
          RevenueCQ: '14',
          'RevenueCQ+1': '14',
          'RevenueCQ+2': '14',
          'RevenueCQ+3': '14',
          TMCCQ: '13',
          'TMCCQ+1': '13',
          'TMCCQ+2': '13',
          'TMCCQ+3': '13',
          MarginCQ: '12',
          'MarginCQ+1': '12',
          'MarginCQ+2': '12',
          'MarginCQ+3': '12',
          TotalCQ: '880',
          'TotalCQ+1': '880',
          'TotalCQ+2': '880',
          'TotalCQ+3': '880',
          BMCCQ: '',
          'BMCCQ+1': '756',
          'BMCCQ+2': '756',
          'BMCCQ+3': '756',
          QtyCQ: '1000',
          'QtyCQ+1': '1000',
          'QtyCQ+2': '1000'
        },
        {
          Flag: 'CM',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Category': 'ThinkPad Classic',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '1300',
          'Entitled Price': '1400',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '2',
          'Part Number': '20HQA06LTW',
          Description: 'NoteBook TP X1 C5 16G 512 W10P',
          'Standard Price': '1500',
          'List Price': '1500',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
        },
        {
          Flag: 'ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '3200',
          'Entitled Price': '3250',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '3',
          'Part Number': '20HQA06LTW',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '3300',
          'List Price': '3300',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
        },
        {
          Flag: 'NP ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '2000',
          'Entitled Price': '2200',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '1',
          'Part Number': '5PS0D80996 ',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '2480',
          'List Price': '2480',
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
          RevenueCQ: '14',
          'RevenueCQ+1': '14',
          'RevenueCQ+2': '14',
          'RevenueCQ+3': '14',
          TMCCQ: '13',
          'TMCCQ+1': '13',
          'TMCCQ+2': '13',
          'TMCCQ+3': '13',
          MarginCQ: '12',
          'MarginCQ+1': '12',
          'MarginCQ+2': '12',
          'MarginCQ+3': '12',
          TotalCQ: '880',
          'TotalCQ+1': '880',
          'TotalCQ+2': '880',
          'TotalCQ+3': '880',
          BMCCQ: '',
          'BMCCQ+1': '756',
          'BMCCQ+2': '756',
          'BMCCQ+3': '756',
          QtyCQ: '1000',
          'QtyCQ+1': '1000',
          'QtyCQ+2': '1000'
        },
        {
          Flag: 'CM',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Category': 'ThinkPad Classic',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '1300',
          'Entitled Price': '1400',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '2',
          'Part Number': '20HQA06LTW',
          Description: 'NoteBook TP X1 C5 16G 512 W10P',
          'Standard Price': '1500',
          'List Price': '1500',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
        },
        {
          Flag: 'ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '3200',
          'Entitled Price': '3250',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '3',
          'Part Number': '20HQA06LTW',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '3300',
          'List Price': '3300',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
        },
        {
          Flag: 'ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '3200',
          'Entitled Price': '3250',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '3',
          'Part Number': '20HQA06LTW',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '3300',
          'List Price': '3300',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
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
          'Item NO': '4',
          'Part Number': '20HQA06LTW',
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
          RevenueCQ: '16',
          'RevenueCQ+1': '16',
          'RevenueCQ+2': '16',
          'RevenueCQ+3': '16',
          TMCCQ: '23',
          'TMCCQ+1': '23',
          'TMCCQ+2': '23',
          'TMCCQ+3': '23',
          MarginCQ: '14',
          'MarginCQ+1': '14',
          'MarginCQ+2': '14',
          'MarginCQ+3': '14',
          TotalCQ: '2388',
          'TotalCQ+1': '2388',
          'TotalCQ+2': '2388',
          'TotalCQ+3': '2388',
          BMCCQ: '2200',
          'BMCCQ+1': '2200',
          'BMCCQ+2': '2200',
          'BMCCQ+3': '2200',
          QtyCQ: '5000',
          'QtyCQ+1': '5000',
          'QtyCQ+2': '5000'
        },
        {
          Flag: 'NP ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '2000',
          'Entitled Price': '2200',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '1',
          'Part Number': '5PS0D80996 ',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '2480',
          'List Price': '2480',
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
          RevenueCQ: '14',
          'RevenueCQ+1': '14',
          'RevenueCQ+2': '14',
          'RevenueCQ+3': '14',
          TMCCQ: '13',
          'TMCCQ+1': '13',
          'TMCCQ+2': '13',
          'TMCCQ+3': '13',
          MarginCQ: '12',
          'MarginCQ+1': '12',
          'MarginCQ+2': '12',
          'MarginCQ+3': '12',
          TotalCQ: '880',
          'TotalCQ+1': '880',
          'TotalCQ+2': '880',
          'TotalCQ+3': '880',
          BMCCQ: '',
          'BMCCQ+1': '756',
          'BMCCQ+2': '756',
          'BMCCQ+3': '756',
          QtyCQ: '1000',
          'QtyCQ+1': '1000',
          'QtyCQ+2': '1000'
        },
        {
          Flag: 'CM',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Non-BMC uplift':  ' 40',
          'Category': 'ThinkPad Classic',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '1300',
          'Entitled Price': '1400',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '2',
          'Part Number': '20HQA06LTW',
          Description: 'NoteBook TP X1 C5 16G 512 W10P',
          'Standard Price': '1500',
          'List Price': '1500',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
        },
        {
          Flag: 'ESS',
          'Custom Duty':  ' Ocean',
          'Other Local Fee':  ' 40',
          'warranty costMOT':  ' 40',
          'Category': 'ThinkPad Classic',
          'Non-BMC uplift':  ' 40',
          'Other cost adder':  ' 40',
          'MOT':  ' 40',
          'Requested Price': '3200',
          'Entitled Price': '3250',
          'CPU Funding': '20',
          'HDD/SSHD/SSD Funding': '20',
          'Out tape funding for other components': '20',
          'Region Funding': '20',
          'Customer Funding(TBD)': '20',
          'Special Funding': '10',
          'Special Funding': '18',
          'BMC w/ freight cost adjustment': '13',
          'HL Mem': 'Part Number',
          'Item NO': '3',
          'Part Number': '20HQA06LTW',
          Description: 'Protection 3YR Onsite + KYD ',
          'Standard Price': '3300',
          'List Price': '3300',
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
          RevenueCQ: '23',
          'RevenueCQ+1': '23',
          'RevenueCQ+2': '23',
          'RevenueCQ+3': '23',
          TMCCQ: '20',
          'TMCCQ+1': '20',
          'TMCCQ+2': '20',
          'TMCCQ+3': '20',
          MarginCQ: '13',
          'MarginCQ+1': '13',
          'MarginCQ+2': '13',
          'MarginCQ+3': '13',
          TotalCQ: '752',
          'TotalCQ+1': '752',
          'TotalCQ+2': '752',
          'TotalCQ+3': '752',
          BMCCQ: '625',
          'BMCCQ+1': '625',
          'BMCCQ+2': '625',
          'BMCCQ+3': '625',
          QtyCQ: '800',
          'QtyCQ+1': '800',
          'QtyCQ+2': '800'
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
          'Item NO': '4',
          'Part Number': '20HQA06LTW',
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
          RevenueCQ: '16',
          'RevenueCQ+1': '16',
          'RevenueCQ+2': '16',
          'RevenueCQ+3': '16',
          TMCCQ: '23',
          'TMCCQ+1': '23',
          'TMCCQ+2': '23',
          'TMCCQ+3': '23',
          MarginCQ: '14',
          'MarginCQ+1': '14',
          'MarginCQ+2': '14',
          'MarginCQ+3': '14',
          TotalCQ: '2388',
          'TotalCQ+1': '2388',
          'TotalCQ+2': '2388',
          'TotalCQ+3': '2388',
          BMCCQ: '2200',
          'BMCCQ+1': '2200',
          'BMCCQ+2': '2200',
          'BMCCQ+3': '2200',
          QtyCQ: '5000',
          'QtyCQ+1': '5000',
          'QtyCQ+2': '5000'
        }
      ],
      columnDefs1: [
        {
          headerName: '',
          field: 'first',
          width: 120,
          cellRenderer: (params) => {
            return '<div role="gridcell" title="' + params.value +'">' + params.value + '</div>'
          }
        },
        {
          headerName: 'CQ',
          field: 'CQ',
          width: 120
        },
        {
          headerName: 'CQ+1',
          field: 'CQ+1',
          width: 120
        },
        {
          headerName: 'CQ+2',
          field: 'CQ+2',
          width: 120
        },
        {
          headerName: 'CQ+3',
          field: 'CQ+3',
          width: 120
        },
        {
          headerName: 'Total',
          field: 'Total',
          width: 120
        }
      ],
      rowData1: [
        {
          first: 'Quantity',
          CQ: '100',
          'CQ+1': '90',
          'CQ+2': '220',
          'CQ+3': '90',
          Total: '500'
        },
        {
          first: 'Revenue',
          CQ: '29699.00',
          'CQ+1': '26999.10',
          'CQ+2': '65997.8',
          'CQ+3': '26999.10',
          Total: '56,698'
        },
        {
          first: 'TMC %',
          CQ: '32.08%',
          'CQ+1': '32.09%',
          'CQ+2': '32.33%',
          'CQ+3': '32.33%',
          Total: '31.4%'
        },
        {
          first: 'TMC %',
          CQ: '9325.28',
          'CQ+1': '8460.58',
          'CQ+2': '21134.80',
          'CQ+3': '8526.10',
          Total: '17,786'
        },
        {
          first: 'BMC %',
          CQ: '33.76%',
          'CQ+1': '33.76%',
          'CQ+2': '34.00%',
          'CQ+3': '34.00%',
          Total: '33.0%'
        },
        {
          first: 'BMC',
          CQ: '9825.28',
          'CQ+1': '8910.58',
          'CQ+2': '22234.80',
          'CQ+3': '8976.10',
          Total: '18,736'
        }
      ],
      columnDefs2: [
        {
          headerName: '',
          field: 'first',
          width: 120,
          cellRenderer: (params) => {
            return '<div role="gridcell" title="' + params.value +'">' + params.value + '</div>'
          },
        },
        {
          headerName: 'CQ',
          field: 'CQ',
          width: 120
        },
        {
          headerName: 'CQ+1',
          field: 'CQ+1',
          width: 120
        },
        {
          headerName: 'CQ+2',
          field: 'CQ+2',
          width: 120
        },
        {
          headerName: 'CQ+3',
          field: 'CQ+3',
          width: 120
        },
        {
          headerName: 'Total',
          field: 'Total',
          width: 120
        }
      ],
      rowData2: [
        {
          first: 'Quantity',
          CQ: '100',
          'CQ+1': '90',
          'CQ+2': '220',
          'CQ+3': '90',
          Total: '500'
        },
        {
          first: 'Request Price',
          CQ: '296.99',
          'CQ+1': '299.99',
          'CQ+2': '299.99',
          'CQ+3': '299.99',
          Total: '1,197'
        },
        {
          first: 'BMC Cost',
          CQ: '196.72',
          'CQ+1': '198.72',
          'CQ+2': '198.00',
          'CQ+3': '198.00',
          Total: '791'
        },
        {
          first: 'Cost Adjustment:  FUNDING',
          CQ: '4',
          'CQ+1': '4',
          'CQ+2': '4',
          'CQ+3': '4',
          Total: '16'
        },
        {
          first: 'Cost Adjustment:  MOT',
          CQ: '1',
          'CQ+1': '1',
          'CQ+2': '1',
          'CQ+3': '1',
          Total: '4'
        },
        {
          first: 'Comm Cost Adjustment',
          CQ: '0',
          'CQ+1': '0',
          'CQ+2': '0',
          'CQ+3': '0',
          Total: '0'
        },
        {
          first: 'Cost Adjustment: OTHER',
          CQ: '0',
          'CQ+1': '0',
          'CQ+2': '0',
          'CQ+3': '0',
          Total: '0'
        },
        {
          first: 'TOTAL COST ADJUSTMENTS',
          CQ: '5',
          'CQ+1': '5',
          'CQ+2': '5',
          'CQ+3': '5',
          Total: '25'
        },
        {
          first: 'Final TMC cost',
          CQ: '201.72',
          'CQ+1': '203.72',
          'CQ+2': '203.00',
          'CQ+3': '203.00',
          Total: '811'
        },
        {
          first: 'Revenue',
          CQ: '29699.00',
          'CQ+1': '26999.10',
          'CQ+2': '65997.80',
          'CQ+3': '26999.10',
          Total: '56,698'
        },
        {
          first: 'TMC %',
          CQ: '32.08%',
          'CQ+1': '32.09%',
          'CQ+2': '32.33%',
          'CQ+3': '32.33%',
          Total: '31.4%'
        },
        {
          first: 'TMC',
          CQ: '9325.28',
          'CQ+1': '8460.58',
          'CQ+2': '21134.80',
          'CQ+3': '8526.10',
          Total: '17,786'
        },
        {
          first: 'BMC %',
          CQ: '33.76%',
          'CQ+1': '33.76%',
          'CQ+2': '34.00%',
          'CQ+3': '34.00%',
          Total: '33.0%'
        },
        {
          first: 'BMC',
          CQ: '9825.28',
          'CQ+1': '8910.58',
          'CQ+2': '22234.80',
          'CQ+3': '8976.10',
          Total: '18,736'
        }
      ],
      columnDefs3: [
        {
          headerName: '',
          field: 'first',
          cellRenderer: (params) => {
            return '<div role="gridcell" title="' + params.value +'">' + params.value + '</div>'
          },
          width: 120
        },
        {
          headerName: 'CQ',
          field: 'CQ',
          width: 120
        },
        {
          headerName: 'CQ+1',
          field: 'CQ+1',
          width: 120
        },
        {
          headerName: 'CQ+2',
          field: 'CQ+2',
          width: 120
        },
        {
          headerName: 'CQ+3',
          field: 'CQ+3',
          width: 120
        },
        {
          headerName: 'Total',
          field: 'Total',
          width: 120
        }
      ],
      rowData3: [
        {
          first: 'Quantity',
          CQ: '100',
          'CQ+1': '90',
          'CQ+2': '220',
          'CQ+3': '90',
          Total: '500'
        },
        {
          first: 'Request Price',
          CQ: '296.99',
          'CQ+1': '299.99',
          'CQ+2': '299.99',
          'CQ+3': '299.99',
          Total: '1,197'
        },
        {
          first: 'BMC Cost',
          CQ: '196.72',
          'CQ+1': '198.72',
          'CQ+2': '198.00',
          'CQ+3': '198.00',
          Total: '791'
        },
        {
          first: 'Cost Adjustment:  FUNDING',
          CQ: '4',
          'CQ+1': '4',
          'CQ+2': '4',
          'CQ+3': '4',
          Total: '16'
        },
        {
          first: 'Cost Adjustment:  MOT',
          CQ: '1',
          'CQ+1': '1',
          'CQ+2': '1',
          'CQ+3': '1',
          Total: '4'
        },
        {
          first: 'Comm Cost Adjustment',
          CQ: '0',
          'CQ+1': '0',
          'CQ+2': '0',
          'CQ+3': '0',
          Total: '0'
        },
        {
          first: 'Cost Adjustment: OTHER',
          CQ: '0',
          'CQ+1': '0',
          'CQ+2': '0',
          'CQ+3': '0',
          Total: '0'
        },
        {
          first: 'TOTAL COST ADJUSTMENTS',
          CQ: '5',
          'CQ+1': '5',
          'CQ+2': '5',
          'CQ+3': '5',
          Total: '25'
        },
        {
          first: 'Final TMC cost',
          CQ: '201.72',
          'CQ+1': '203.72',
          'CQ+2': '203.00',
          'CQ+3': '203.00',
          Total: '811'
        },
        {
          first: 'Revenue',
          CQ: '29699.00',
          'CQ+1': '26999.10',
          'CQ+2': '65997.80',
          'CQ+3': '26999.10',
          Total: '56,698'
        },
        {
          first: 'TMC %',
          CQ: '32.08%',
          'CQ+1': '32.09%',
          'CQ+2': '32.33%',
          'CQ+3': '32.33%',
          Total: '31.4%'
        },
        {
          first: 'TMC',
          CQ: '9325.28',
          'CQ+1': '8460.58',
          'CQ+2': '21134.80',
          'CQ+3': '8526.10',
          Total: '17,786'
        },
        {
          first: 'BMC %',
          CQ: '33.76%',
          'CQ+1': '33.76%',
          'CQ+2': '34.00%',
          'CQ+3': '34.00%',
          Total: '33.0%'
        },
        {
          first: 'BMC',
          CQ: '9825.28',
          'CQ+1': '8910.58',
          'CQ+2': '22234.80',
          'CQ+3': '8976.10',
          Total: '18,736'
        }
      ]
    }
  },
  watch: {
  },
  components: {
    AgGridVue,
    SplitPane,
    ChartPie,
    ChartBar
  },
  created () {
    // this.windowHeight = window.innerHeight -330+'px'
    // console.log(window.innerHeight)
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
      // var topHeight = this.$refs.topMain.offsetHeight
      var topHeight = document.getElementsByClassName('topMain')[0].offsetHeight
      // console.log('topHeight:' + topHeight)
      var t1 = document.getElementsByClassName('split-pane-page-wrapper')[0]
      var ag = document.getElementsByClassName('ag-theme-balham')[0]
      var acontainer = document.getElementsByClassName('agcontainer')[0]
      ag.style.height = screenHeight - topHeight - 64 - 10 - 10+ 'px' // 64是头部的高度，10是padding
      t1.style.height = screenHeight - topHeight - 64 - 10 - 10 + 'px'
      acontainer.style.height = screenHeight - topHeight - 64 -10 -10 + 'px'
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
      if (this.pullFlag) {
        this.pullFlag = false
        this.offset = 0.4
        this.tab1 = true
        this.tab2 = false
      } else {
        this.pullFlag = true
        this.offset = 0.97
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
  overflow: hidden;
  padding-bottom: 10px;
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
  overflow: hidden;
  margin-bottom: 10px;
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
  .pane{
    width: 100%;
    height: 100%;
    &.left-pane{
      background: sandybrown;
    }
    &.right-pane{
      background: #fff;
      // height: 500px;
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
</style>
