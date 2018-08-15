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
  <h3 class="marginBottom" style="margin-bottom: 10px;"><a href="javascript:;" style="display:block;color: #333;" @click="toggleList1"><Icon type="ios-podium" /> CQ</a></h3>
  <div  class="table-CQ">
    <ag-grid-vue
      style="width: 100%; height:100%;"
      class="ag-theme-balham"
      :columnDefs="formcolumns"
      :rowData="formdata"
      :gridAutoHeight="true"
      :enableSorting="true"
      :enableFilter="true"
      :singleClickEdit="true"
      :suppressSizeToFit="false"
      :suppressResize="true"
      :enableColResize="true"
      rowSelection="multiple">
    </ag-grid-vue>
    <!-- <Table border :columns="formcolumns" :data="formdata"></Table> -->
  </div>
  <div class="split-pane-page-wrapper">
    <split-pane v-model="offset" @on-moving="handleMoving">
      <div slot="left" class="pane left-pane">
        <div slot="top" class="pane top-pane">
          <ag-grid-vue
            style="width: 100%; height:500px;"
            class="ag-theme-balham"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :floatingFilter="true"
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
        <h3 @click="pullFnc" style="cursor: pointer;">
          <div v-if="!pullFlag">
          <Icon type="ios-arrow-forward" /><Icon style="margin-left: -10px;" type="ios-arrow-forward" />
            <Icon @click="one" style="margin-left: 20px;" size=20 type="ios-stats" />
            <Icon @click="two" style="margin-left: 10px;" size=20 type="md-reorder" />
          </div>
          <div v-else>
            <Icon  type="ios-arrow-back" /><Icon style="margin-left: -10px;" type="ios-arrow-back" />
            <Icon style="margin-left: 10px; margin-top: 20px;" size=20 type="ios-stats" />
            <Icon style="margin-left: 10px;" size=20 type="md-reorder" />
          </div>
        </h3>
        <div v-if="tab1" style="width: 100%; padding:10px; border-collapse: collapse; height: 500px;">
          <Card shadow>
            <chart-pie style="height: 300px;" :value="pieData" text="Customer Revenue"></chart-pie>
          </Card>
          <h3><a href="javascript:;" style="display:block;color: #333;" @click="toggleList"><Icon type="md-pricetags" />Summary </a> </h3>
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columnDefs1"
            :rowData="rowData1"
            :gridAutoHeight="true"
            :floatingFilter="true"
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
            <chart-pie style="height: 300px;" :value="pieData" text="Customer Revenue"></chart-pie>
          </Card>
          <h3><a href="javascript:;" style="display:block;color: #333;" @click="toggleList"><Icon type="md-pricetags" />Summary by product series level </a> </h3>
          <ag-grid-vue
            style="width: 100%; height:100%;"
            class="ag-theme-balham"
            :columnDefs="columnDefs1"
            :rowData="rowData1"
            :gridAutoHeight="true"
            :floatingFilter="true"
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
      pullFlag: true,
      tab1: false,
      tab2: false,
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
          headerName: ' ',
          field: 'hedgerife',
          editable: true
        },
        {
          headerName: 'CQ',
          field: 'CQ',
          editable: true
        },
        {
          headerName: 'CQ+1',
          field: 'CQ1',
          editable: true
        },
        {
          headerName: 'CQ+2',
          field: 'CQ2',
          editable: true
        },
        {
          headerName: 'CQ+3',
          field: 'CQ3',
          editable: true
        }
      ],
      formdata: [
        {
          hedgerife: 'hedgerife',
          CQ: '1000',
          CQ1: '1000',
          CQ2: '1000',
          CQ3: '10000'
        },
        {
          hedgerife: 'hedge',
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
            {headerName: 'Item NO', field: 'Item NO', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Flag', field: 'Flag', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Part Number', field: 'Part Number', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Description', field: 'Description', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Category', field: 'Category', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Standard Price', field: 'Standard Price', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'List Price', field: 'List Price', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Requested Price', field: 'Requested Price',  editable: true, cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
            {headerName: 'Entitled Price', field: 'Entitled Price', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Total Quantity', field: 'Total Quantity', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'MOT', field: 'MOT', editable: true, cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
            {headerName: 'BMC w/ freight cost adjustment', field: 'BMC w/ freight cost adjustment', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Special Funding', field: 'Special Funding', editable: true, cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100}
          ]
        },
        {headerName: 'Qty', cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', editable: true, field: 'QtyCQ', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
            {headerName: 'CQ+1', editable: true,  field: 'QtyCQ+1', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
            {headerName: 'CQ+2', editable: true,  field: 'QtyCQ+2', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100}
          ]
        },
        {headerName: 'BMC',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'BMCCQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'BMCCQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'BMCCQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'BMCCQ+3', cellStyle: {'text-align': 'center'}, width: 100}
          ]
        },
        
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
            {headerName: 'CQ', field: 'TotalCQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'TotalCQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'TotalCQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'TotalCQ+3', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        },
        {headerName: 'BMC Margin',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'MarginCQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'MarginCQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'MarginCQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'MarginCQ+3', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        },
        {headerName: 'TMC Margin',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'TMCCQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'TMCCQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'TMCCQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'TMCCQ+3', cellStyle: {'text-align': 'center'}, width: 100},
          ]
        },
        {headerName: 'Revenue',cellStyle: {'text-align': 'center'},
          children: [
            {headerName: 'CQ', field: 'RevenueCQ', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+1', field: 'RevenueCQ+1', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+2', field: 'RevenueCQ+2', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'CQ+3', field: 'RevenueCQ+2', cellStyle: {'text-align': 'center'}, width: 100},
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
          editable: false
        },
        {
          headerName: 'CQ',
          field: 'CQ',
          editable: false
        },
        {
          headerName: 'CQ+1',
          field: 'CQ+1',
          editable: false
        },
        {
          headerName: 'CQ+2',
          field: 'CQ+2',
          editable: false
        },
        {
          headerName: 'CQ+3',
          field: 'CQ+3',
          editable: false
        },
        {
          headerName: 'Total',
          field: 'Total',
          editable: false
        }
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
    one () {
      this.tab1 = true
      this.tab2 = false
      return false
    },
    two () {
      this.tab1 = false
      this.tab2 = true
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
        this.offset = 0.96
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
  padding: 0 10px;
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
  height: 500px;
  .pane{
    width: 100%;
    height: 100%;
    &.left-pane{
      background: sandybrown;
      height: 500px;
      overflow-y: scroll;
    }
    &.right-pane{
      background: #fff;
      height: 500px;
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
