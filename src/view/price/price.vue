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
      <Divider type="vertical" />
      <router-link to="/iframe/iframe_HistoricalSummary" style="color: #515a6e"><Icon class="icon" size=16 type="md-add" />Historical Report</router-link>
      <Divider type="vertical" />
      <router-link to="/iframe/iframe_clv" style="color: #515a6e"><Icon class="icon" size=16 type="md-add" />CLV Report</router-link>
      <Divider type="vertical" />
      <router-link to="/iframe/iframe_DealTracking" style="color: #515a6e"><Icon class="icon" size=16 type="md-add" />Tracking Report</router-link>
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
      <li><span>MOT:</span><select v-model="form.MOT" style="margin-left:5px;float:left;display:inline;width:80px;">
        <option v-for="item in form.MOTs" :value="item" :key="item">{{item}}</Option>
        </select>
      </li>
      <li><span>Bid Funding:</span><i :title="form.BidFunding">{{form.BidFunding}}</i></li>
      <li><span>RTM:</span><i :title="form.RTM">{{form.RTM}}</i></li>
      <li><span>Sub Type:</span><i :title="form.SubType">{{form.SubType}}</i></li>
    </ul>
    <h3 class="marginBottom" style="margin-bottom: 10px;">
      <a href="javascript:;" style="display:block;color: #333;" @click="toggleList1"><Icon type="ios-podium" />Quarter</a>
    </h3>
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
            :frameworkComponents="frameworkComponents"
            :enableSorting="false"
            :enableFilter="true"
            :singleClickEdit="true"
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
  <Modal
    v-model="modelBMC"
    title="BMC"
    :styles="{width:'800px'}"
    ok-text="Apply"
    cancel-text="Cancel">
    <Table border :columns="bmcColumn" :data="bmcData"></Table>
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
  <Modal
    v-model="modelNetBMC"
    title="Net BMC"
    :styles="{width:'800px'}"
    ok-text="Apply"
    cancel-text="Cancel">
    <Table border :columns="netbmcColumn" :data="netbmcData"></Table>
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
import { ChartPie, ChartBar } from '_c/charts'
import bmcCQ from './bmcCQ.vue'
import tmcCQ from './tmcCQ.vue'
import netbmcCQ from './netbmcCQ.vue'
import costCQ from './costCQ.vue'
export default {
  data () {
    return {
      modelBMC: false,
      modelTMC: false,
      modelNetBMC: false,
      modelCostAdjustment: false,
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
        MOTs: ['Mix', 'Air', 'Ocean', 'Rail', 'Truck'],
        MOT: 'Air',
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
          title: 'FYQ1 18/19',
          key: 'CQ'
        },
        {
          title: 'FYQ2 18/19',
          key: 'CQ1'
        },
        {
          title: 'FYQ3 18/19',
          key: 'CQ2'
        },
        {
          title: 'FYQ4 18/19',
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
            {headerName: 'Item NO', width: 90, field: 'Item NO', cellStyle: {'text-align': 'left'}},
            {headerName: 'Flag', width: 90, field: 'Flag', cellStyle: {'text-align': 'left'}},
            {headerName: 'Part Number', width: 120, field: 'Part Number', cellStyle: {'text-align': 'left'}},
            {headerName: 'Description', width: 120, field: 'Description', cellStyle: {'text-align': 'left'},
            cellRenderer: (params) => {
              return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
            }
            },
            {headerName: 'Category', width: 120, field: 'Category', cellStyle: {'text-align': 'left'},
            cellRenderer: (params) => {
              return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
            }
            },
            {headerName: 'Standard Price', width: 120, field: 'Standard Price', cellStyle: {'text-align': 'left'}},
            {headerName: 'List Price', width: 120, field: 'List Price', cellStyle: {'text-align': 'left'}},
            {headerName: 'Requested Price', width: 130, field: 'Requested Price', editable: true, 
            headerClass:'headerColor',
            cellStyle: {'text-align': 'left'}},
            {headerName: 'Entitled Price', width: 120, field: 'Entitled Price', cellStyle: {'text-align': 'left'}},
          ],
        },
        {
          headerName: 'Qty', cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'FYQ1 18/19', width: 120, editable: true, field: 'QtyCQ',
            headerClass: 'headerColor', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ2 18/19', width: 120, editable: true, field: 'QtyCQ+1',
            headerClass: 'headerColor', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ3 18/19', width: 120, editable: true, field: 'QtyCQ+2', headerClass: 'headerColor', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ4 18/19', width: 120, editable: true, field: 'QtyCQ+3', headerClass: 'headerColor', cellStyle: {'text-align': 'left'}}
          ]
        },
        {
          headerName: 'Group',
          children: [
            {headerName: 'Total Quantity', width: 120, field: 'Total Quantity', cellStyle: {'text-align': 'left'}},
            {headerName: 'D Price', field: 'D Price', width: 120},
            {headerName: 'C Price', field: 'C Price', width: 120},
            {headerName: 'B Price', field: 'B Price', width: 120},
            {headerName: 'A Price', field: 'A Price', width: 120},
            {headerName: 'YBMD', field: 'YBMD', width: 120},
            {headerName: 'YBMC', field: 'YBMC', width: 120},
            {headerName: 'YBMB', field: 'YBMB', width: 120},
            {headerName: 'YBMA', field: 'YBMA', width: 120}
            // {headerName: 'MOT', field: 'MOT', width: 120, editable: true,
            //   headerClass:'headerColor',
            //   cellStyle: {'text-align': 'left'},
            //   cellRenderer: (params) => {return params.value},
            //   cellEditor: 'agRichSelectCellEditor',
            //   cellEditorParams: {
            //     cellRenderer: (params) => {return params.value},
            //     values: ['Mix', 'Air', 'Ocean', 'Rail', 'Truck']
            //   }
            // }
          ]
        },
        {headerName: 'BMC', field: 'BMC', cellStyle: {'text-align': 'left'}, headerGroupComponent: 'bmcCQComponent',
        children: [
          {headerName: 'FYQ1 18/19', width: 120, field: 'BMCCQ', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
            return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
          },
          onCellClicked: () => {
            this.modelBMC = true
          }},
            {headerName: 'FYQ2 18/19', width: 120, field: 'BMCCQ+1', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
            return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
          },
          onCellClicked: () => {
            this.modelBMC = true
          }},
            {headerName: 'FYQ3 18/19', width: 120, field: 'BMCCQ+2', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
            return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
          },
          onCellClicked: () => {
            this.modelBMC = true
          }},
            {headerName: 'FYQ4 18/19', width: 120, field: 'BMCCQ+3', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
            return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
          },
          onCellClicked: () => {
            this.modelBMC = true
          }}
          ]
        },
        {headerName: 'Net BMC', cellStyle: {'text-align': 'left'}, headerGroupComponent: 'netbmcCQComponent',
          children: [
            {headerName: 'FYQ1 18/19', width: 120, field: 'NetBMCCQ', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
            return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
          },
          onCellClicked: () => {
            this.modelNetBMC = true
          }},
          {headerName: 'FYQ2 18/19', width: 120, field: 'NetBMCCQ+1', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
            return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelNetBMC = true
            }},
          {headerName: 'FYQ3 18/19', width: 120, field: 'NetBMCCQ+2', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
            return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelNetBMC = true
            }},
          {headerName: 'FYQ4 18/19', width: 120, field: 'NetBMCCQ+3', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
            return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelNetBMC = true
            }}
          ]
        },
        {headerName: 'Total Cost', cellStyle: {'text-align': 'left'}, headerGroupComponent: 'tmcCQComponent',
          children: [
            {headerName: 'FYQ1 18/19', width: 120, field: 'TMCCQ', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
              return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelTMC = true
            }},
            {headerName: 'FYQ2 18/19', width: 120, field: 'TMCCQ+1', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
              return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelTMC = true
            }},
            {headerName: 'FYQ3 18/19', width: 120, field: 'TMCCQ+2', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
              return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelTMC = true
            }},
            {headerName: 'FYQ4 18/19', width: 120, field: 'TMCCQ+3', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
              return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelTMC = true
            }}
          ]
        },
        {headerName: 'Cost Adjustment', cellStyle: {'text-align': 'left'}, headerGroupComponent: 'costCQComponent',
          children: [
            {headerName: 'FYQ1 18/19', width: 120, field: 'CostAdjustmentCQ', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
              return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelCostAdjustment = true
            }},
            {headerName: 'FYQ2 18/19', width: 120, field: 'CostAdjustmentCQ+1', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
              return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelCostAdjustment = true
            }},
            {headerName: 'FYQ3 18/19', width: 120, field: 'CostAdjustmentCQ+2', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
              return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelCostAdjustment = true
            }},
              {headerName: 'FYQ4 18/19', width: 120, field: 'CostAdjustmentCQ+3', cellStyle: {'text-align': 'left'}, cellRenderer: (params) => {
              return '<a title="' + params.value + '"href="#">' + params.value + '</a>'
            },
            onCellClicked: () => {
              this.modelCostAdjustment = true
            }}
          ]
        },
        {headerName: 'Final Total Cost', cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'FYQ1 18/19', width: 120, field: 'FinalTMCCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ2 18/19', width: 120, field: 'FinalTMCCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ3 18/19', width: 120, field: 'FinalTMCCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ4 18/19', width: 120, field: 'FinalTMCCQ+3', cellStyle: {'text-align': 'left'}}
          ]
        },
        {headerName: '',
          children: [
            {headerName: 'Revenue Reduction %', width: 180, editable: true,
              cellStyle: {'text-align': 'left'}, field: 'Revenue Reduction %', headerClass: 'headerColor'},
            {headerName: 'Revenue Reduction % simulation', width: 250, field: 'Revenue Reduction % simulation',
              cellStyle: {'text-align': 'left'}, headerClass: 'headerColor', editable: true}
          ]
        },
        {headerName: 'BMC Margin', cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'FYQ1 18/19', width: 120, field: 'BMCMarginCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ2 18/19', width: 120, field: 'BMCMarginCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ3 18/19', width: 120, field: 'BMCMarginCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ4 18/19', width: 120, field: 'BMCMarginCQ+3', cellStyle: {'text-align': 'left'}}
          ]
        },
        {headerName: 'Total Cost Margin', cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'FYQ1 18/19', width: 120, field: 'TMCMarginCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ2 18/19', width: 120, field: 'TMCMarginCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ3 18/19', width: 120, field: 'TMCMarginCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ4 18/19', width: 120, field: 'TMCMarginCQ+3', cellStyle: {'text-align': 'left'}}
          ]
        },
        {headerName: 'TOTAL GROSS REVENUE', cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'FYQ1 18/19', width: 120, field: 'TotalGROSSCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ2 18/19', width: 120, field: 'TotalGROSSCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ3 18/19', width: 120, field: 'TotalGROSSCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ4 18/19', width: 120, field: 'TotalGROSSCQ+3', cellStyle: {'text-align': 'left'}}
          ]
        },
        {headerName: 'TOTAL NET REVENUE', cellStyle: {'text-align': 'left'},
          children: [
            {headerName: 'FYQ1 18/19', width: 120, field: 'TotalNETCQ', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ2 18/19', width: 120, field: 'TotalNETCQ+1', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ3 18/19', width: 120, field: 'TotalNETCQ+2', cellStyle: {'text-align': 'left'}},
            {headerName: 'FYQ4 18/19CQ+3', width: 120, field: 'TotalNETCQ+3', cellStyle: {'text-align': 'left'}}
          ]
        }
      ],
      rowData: [
        {
          'Item NO': 1,
          Flag: 'CM',
          'Part Number': '20KECTO1WW',
          Description: 'ThinkVision T24i-10 23.8 inch Wide FHD IPS type Monitor',
          'Category': 'Notebook ThinkPad X280 20KECTO1WW Rx',
          'Standard Price': 1905.72,
          'List Price': 1905.72,
          'Requested Price': 600,
          'Entitled Price': 750,
          QtyCQ: 750,
          'QtyCQ+1': 0,
          'QtyCQ+2': 0,
          'QtyCQ+3': 0,
          'Total Quantity': 750,
          'D Price': 180.49,
          'C Price': 144.39,
          'B Price': 140.18,
          'A Price': 144.39,
          'YBMD': '20%',
          'YBMC': '0%',
          'YBMB': '-3%',
          'YBMA': '0%',
          BMCCQ: 1050.7,
          'BMCCQ+1': 1009.85,
          'BMCCQ+2': 985.33,
          'BMCCQ+3': 980.95,
          NetBMCCQ: 1040.7,
          'NetBMCCQ+1': 999.85,
          'NetBMCCQ+2': 975.33,
          'NetBMCCQ+3': 970.95,
          TMCCQ: 1079,
          'TMCCQ+1': 1039.21,
          'TMCCQ+2': 1014.65,
          'TMCCQ+3': 1014.65,
          CostAdjustmentCQ: 21.7,
          'CostAdjustmentCQ+1': 21.7,
          'CostAdjustmentCQ+2': 21.7,
          'CostAdjustmentCQ+3': 21.7,
          FinalTMCCQ: 1057.3,
          'FinalTMCCQ+1': 1017.51,
          'FinalTMCCQ+2': 992.95,
          'FinalTMCCQ+3': 992.95,
          'Revenue Reduction %': '0%',
          'Revenue Reduction % simulation': '0%',
          BMCMarginCQ: '-57.10%',
          'BMCMarginCQ+1': '-50.90%',
          'BMCMarginCQ+2': '-47.20%',
          'BMCMarginCQ+3': '-46.50%',
          TMCMarginCQ: '-61.40%',
          'TMCMarginCQ+1': '-55.40%',
          'TMCMarginCQ+2': '-51.60%',
          'TMCMarginCQ+3': '-51.00%',
          TotalGROSSCQ: 40000,
          'TotalGROSSCQ+1': 0,
          'TotalGROSSCQ+2': 0,
          'TotalGROSSCQ+3': 0,
          TotalNETCQ: 40000,
          'TotalNETCQ+1': 0,
          'TotalNETCQ+2': 0,
          'TotalNETCQ+3': 0
        },
        {
          'Item NO': 2,
          Flag: 'NP ESS',
          'Part Number': '40AF0135CH',
          Description: 'ThinkVision T23i-10 23 inch Wide FHD IPS type Monitor',
          'Category': 'TP Hybrid USB-C Dock - CH',
          'Standard Price': 277.47,
          'List Price': 277.47,
          'Requested Price': 148,
          'Entitled Price': 149,
          QtyCQ: 150,
          'QtyCQ+1': 0,
          'QtyCQ+2': 0,
          'QtyCQ+3': 0,
          'Total Quantity': 150,
          'D Price': 176.86,
          'C Price': 141.49,
          'B Price': 137.37,
          'A Price': 141.49,
          'YBMD': '20%',
          'YBMC': '0%',
          'YBMB': '-3%',
          'YBMA': '0%',
          BMCCQ: 10276,
          'BMCCQ+1': 10276,
          'BMCCQ+2': 10276,
          'BMCCQ+3': 10276,
          NetBMCCQ: 10276,
          'NetBMCCQ+1': 10277,
          'NetBMCCQ+2': 10278,
          'NetBMCCQ+3': 10279,
          TMCCQ: 10276,
          'TMCCQ+1': 10276,
          'TMCCQ+2': 10276,
          'TMCCQ+3': 10276,
          CostAdjustmentCQ: 4.68,
          'CostAdjustmentCQ+1': 4.68,
          'CostAdjustmentCQ+2': 4.68,
          'CostAdjustmentCQ+3': 4.68,
          FinalTMCCQ: 98.08,
          'FinalTMCCQ+1': 98.08,
          'FinalTMCCQ+2': 98.08,
          'FinalTMCCQ+3': 98.08,
          'Revenue Reduction %': '0%',
          'Revenue Reduction % simulation': '0%',
          BMCMarginCQ: '30.3%',
          'BMCMarginCQ+1': '30.3%',
          'BMCMarginCQ+2': '30.3%',
          'BMCMarginCQ+3': '30.3%',
          'TMCMarginCQ+1': '30.3%',
          'TMCMarginCQ+2': '30.3%',
          'TMCMarginCQ+3': '30.3%',
          TotalGROSSCQ: 5000,
          'TotalGROSSCQ+1': 0,
          'TotalGROSSCQ+2': 0,
          'TotalGROSSCQ+3': 0,
          TotalNETCQ: 5000,
          'TotalNETCQ+1': 0,
          'TotalNETCQ+2': 0,
          'TotalNETCQ+3': 0
        }
      ],
      netbmcColumn: [
        {
          title: 'Adder Type',
          key: 'AdderType',
          render: function (h, params) {
            return h('div', [
              h('Checkbox', {
                props: {
                  size: 'large'
                },
                style: {
                  marginRight: '5px'
                }
              }, params.row.AdderType)
            ])
          }
        },
        {
          title: 'Description',
          key: 'Description'
        },
        {
          title: 'Cost',
          key: 'Cost',
          render: function (h, params) {
            // console.log(params.row.Cost)
            if (params.row._index !== 7) {
              return h('div', params.row.Cost)
            } else {
              return h('Input', {
                props: {
                  size: 'small'
                }
              })
            }
          }
        }
      ],
      netbmcData: [
        {
          AdderType: 'Backend CPU Funding',
          Description: 'Intel Core i5',
          Cost: 2
        },
        {
          AdderType: 'Backend HDD Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'Backend Other Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'Customer Funding',
          Description: '',
          Cost: 10
        },
        {
          AdderType: 'Geo Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'Region Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'WW Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'Special Funding',
          Description: '',
          Cost: null
        }
      ],
      bmcColumn: [
        {
          title: 'Adder Type',
          key: 'AdderType',
          render: function (h, params) {
            // console.log(params.row.AdderType)
            if (!params.row._index) {
              return h('div', params.row.AdderType)
            } else {
              return h('div', [
                h('Checkbox', {
                  props: {
                    size: 'large'
                  },
                  style: {
                    marginRight: '5px'
                  }
                }, params.row.AdderType)
              ])
            }
          }
        },
        {
          title: 'Description',
          key: 'Description'
        },
        {
          title: 'Cost',
          key: 'Cost',
          render: function (h, params) {
            if (!params.row._index) {
              return h('div', params.row.Cost)
            } else {
              return h('Input', {
                props: {
                  size: 'small'
                }
              })
            }
          }
        }
      ],
      bmcData: [
        {
          AdderType: 'MOT',
          Description: 'MIX',
          Cost: 14.73
        },
        {
          AdderType: 'BMC of missing Key part',
          Description: '',
          Cost: null
        }
      ],
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
      columnDefs1: [
        {
          headerName: '',
          field: 'first',
          width: 120,
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value + '">' + params.value + '</div>'
          }
        },
        {
          headerName: 'FYQ1 18/19',
          field: 'CQ',
          width: 120
        },
        {
          headerName: 'FYQ2 18/19',
          field: 'CQ+1',
          width: 120
        },
        {
          headerName: 'FYQ3 18/19',
          field: 'CQ+2',
          width: 120
        },
        {
          headerName: 'FYQ4 18/19',
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
          first: 'Total Cost %',
          CQ: '32.08%',
          'CQ+1': '32.09%',
          'CQ+2': '32.33%',
          'CQ+3': '32.33%',
          Total: '31.4%'
        },
        {
          first: 'Total Cost %',
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
            return '<div class="longData" title="' + params.value + '">' + params.value + '</div>'
          }
        },
        {
          headerName: 'FYQ1 18/19',
          field: 'CQ',
          width: 120
        },
        {
          headerName: 'FYQ2 18/19',
          field: 'CQ+1',
          width: 120
        },
        {
          headerName: 'FYQ3 18/19',
          field: 'CQ+2',
          width: 120
        },
        {
          headerName: 'FYQ4 18/19',
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
          first: 'Final Total Cost cost',
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
          first: 'Total Cost %',
          CQ: '32.08%',
          'CQ+1': '32.09%',
          'CQ+2': '32.33%',
          'CQ+3': '32.33%',
          Total: '31.4%'
        },
        {
          first: 'Total Cost',
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
            return '<div class="longData" title="' + params.value + '">' + params.value + '</div>'
          },
          width: 120
        },
        {
          headerName: 'FYQ1 18/19',
          field: 'CQ',
          width: 120
        },
        {
          headerName: 'FYQ2 18/19',
          field: 'CQ+1',
          width: 120
        },
        {
          headerName: 'FYQ3 18/19',
          field: 'CQ+2',
          width: 120
        },
        {
          headerName: 'FYQ4 18/19',
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
          first: 'Final Total Cost cost',
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
          first: 'Total Cost %',
          CQ: '32.08%',
          'CQ+1': '32.09%',
          'CQ+2': '32.33%',
          'CQ+3': '32.33%',
          Total: '31.4%'
        },
        {
          first: 'Total Cost',
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
  beforeMount () {
    this.frameworkComponents = {
      bmcCQComponent: bmcCQ,
      tmcCQComponent: tmcCQ,
      netbmcCQComponent: netbmcCQ,
      costCQComponent: costCQ
    }
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
      ag.style.height = screenHeight - topHeight - 64 - 10 - 20 + 'px' // 64是头部的高度，10是padding
      t1.style.height = screenHeight - topHeight - 64 - 10 - 20 + 'px'
      acontainer.style.height = screenHeight - topHeight - 64 - 20 - 10 + 'px'
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
      // console.log(e.atMin, e.atMax)
    },
    toggleList () {
      let itembox = document.getElementsByClassName('item-box')[0]
      if (this.toggle) {
        this.isStatus = false
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
    }
  }
}
</script>
<style lang="less" scoped>
.price-box{
  width: 100%;
  height: 100%;
  // overflow: hidden;
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
.headerColor{
  background: #B4C6E7;
}
</style>
