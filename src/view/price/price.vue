<template>
<div class="price-box">
  <h2>LPA-Lenovo Price Analysis</h2>
  <h3>Quotation Infomation
    <a href="javascript:;" class="fold" @click="toggleList1" v-text="toggle1 ? '收起' : '展开'"></a>
    <a href="javascript:;" class="fold" @click="toggleList" v-text="toggle ? '收起' : '展开'"></a>
  </h3>
  <ul class="item-box">
    <li><span>Quotation ID:</span><i>{{form.QuotationID}}</i></li>
    <li><span>Description:</span><i>{{form.Description}}</i></li>
    <li><span>Status:</span><i>{{form.Status}}</i></li>
    <li><span>Country(S):</span><i>{{form.Country}}</i></li>
    <li><span>Currency:</span><i>{{form.Currency}}</i></li>
    <li><span>Customer:</span><i>{{form.Customer}}</i></li>
    <li><span>Valid From Date:</span><i>{{form.FromDate}}</i></li>
    <li><span>End Customer(DMU):</span><i>{{form.EndCustomer}}</i></li>
    <li><span>Sales Representative:</span><i>{{form.SalesRepresentative}}</i></li>
    <li><span>Bid Approver:</span><i>{{form.BidApprover}}</i></li>
    <li><span>BU:</span><i>{{form.BU}}</i></li>
    <li><span>Current Date:</span><i>{{form.CurrentDate}}</i></li>
    <li><span>Valid To Date:</span><i>{{form.toDate}}</i></li>
    <li><span>Opportunity ID:</span><i>{{form.OpportunityID}}</i></li>
    <li><span>Deal Reg Indicator:</span><i>{{form.DealRegIndicator}}</i></li>
    <li><span>MOT:</span><i>{{form.MOT}}</i></li>
    <li><span>Bid Funding:</span><i>{{form.BidFunding}}</i></li>
    <li><span>RTM:</span><i>{{form.RTM}}</i></li>
    <li><span>Sub Type:</span><i>{{form.SubType}}</i></li>
  </ul>
  <Table width="600" class="table" border :columns="formcolumns" style="margin: 10px" :data="formdata"></Table>
  <!-- <Form ref="form" :model="form" style="margin:20px;">
    <row type="flex" justify="space-between" :gutter="15">
      <col span="4">
        <FormItem label="Quotation ID" prop="QuotationID">
          <Input readonly placeholder="请输入Quotation ID..." v-model="form.QuotationID"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Description" prop="Description">
          <Input readonly placeholder="请输入Description..." v-model="form.Description"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Status" prop="Status">
          <Input readonly placeholder="请输入Status..." v-model="form.Status"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Country(S)" prop="Country">
          <Input readonly placeholder="请输入Country(S)..." v-model="form.Country"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Currency" prop="Currency">
          <Input readonly placeholder="请输入Currency..." v-model="form.Currency"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Valid From Date" prop="FromDate">
          <Input readonly placeholder="请输入Valid From Date..." v-model="form.FromDate"/>
        </FormItem>
      </col>
    </row>
    <row type="flex" justify="space-between" :gutter="15">
      <col span="4">
        <FormItem label="End Customer(DMU)" prop="EndCustomer">
          <Input readonly placeholder="请输入End Customer(DMU)..." v-model="form.Customer"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Sales Representative" prop="SalesRepresentative">
          <Input readonly placeholder="请输入Sales Representative..." v-model="form.SalesRepresentative"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Bid Approver" prop="BidApprover">
          <Input readonly placeholder="请输入Requested Bid Approver..." v-model="form.Approver"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="BU" prop="BU">
          <Input readonly placeholder="请输入BU..." v-model="form.BU"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Current Date" prop="CurrentDate">
          <Input readonly placeholder="请输入Current Date..." v-model="form.CurrentDate"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Valid To Date" prop="toDate">
          <Input readonly placeholder="请输入Valid To Date..." v-model="form.toDate"/>
        </FormItem>
      </col>
    </row>
    <row type="flex" justify="space-between" :gutter="15">
      <col span="4">
        <FormItem label="Opportunity ID" prop="OpportunityID">
          <Input readonly placeholder="请输入End Opportunity ID..." v-model="form.OpportunityID"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Deal Reg Indicator" prop="DealRegIndicator">
          <Input readonly placeholder="请输入Deal Reg Indicator..." v-model="form.DealRegIndicator"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="MOT" prop="MOT">
          <Input readonly placeholder="请输入MOT..." v-model="form.MOT"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Bid Funding" prop="BidFunding">
          <Input readonly placeholder="请输入Bid Funding..." v-model="form.BidFunding"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="RTM" prop="RTM">
          <Input readonly placeholder="请输入RTM..." v-model="form.RTM"/>
        </FormItem>
      </col>
      <col span="4">
        <FormItem label="Sub Type" prop="SubType">
          <Input readonly placeholder="请输入Sub Type..." v-model="form.SubType"/>
        </FormItem>
      </col>
    </row> -->
    <!-- <row type="flex" justify="space-between">
      <col span="6">
        <FormItem label="Sales Comments" prop="SalesComments">
          <Input readonly type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入Sales Comments..." v-model="form.SalesComments"/>
        </FormItem>
      </col>
      <col span="6">
        <FormItem label="Price Notes" prop="PriceNotes">
          <Input readonly type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入Price Notes..." v-model="form.PriceNotes"/>
        </FormItem>
      </col>
      <col span="6">
        <FormItem label="Special Ts & Cs" prop="SpecialTSCs">
          <Input readonly  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入Special Ts & Cs..." v-model="form.SpecialTSCs"/>
        </FormItem>
      </col>
      <col span="6">
        <FormItem label="Approval Comments" prop="ApprovalComments">
          <Input readonly type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入Approval Comments..." v-model="form.ApprovalComments"/>
        </FormItem>
      </col>
    </row>
    <row type="flex" justify="start" style="margin:10px 0">
      <col span="4" >
        <FormItem>
          <Button @click="handleReset('form')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </col>
      <col span="4">
        <FormItem>
          <Button @click="''" style="margin-left: 8px">Round Up</Button>
          <Button @click="''" style="margin-left: 8px">Setting</Button>
          <Button @click="''" style="margin-left: 8px">Excel</Button>
        </FormItem>
      </col>
    </row>
  </Form> -->
  <!-- <Divider></Divider> -->
    <Tabs type="card" style="margin:20px" :animated="false">
      <TabPane label="Data">
        <Table border :columns="tablecolumns1" style="margin:10px" :data="tabledata1"></Table>
        <Page :total="tableDatalen1" show-sizer show-total class="pull-right" />
      </TabPane>
      <TabPane label="CTO Config">
        <Table border :columns="tablecolumns2" style="margin: 10px" :data="tabledata2"></Table>
        <Page :total="tableDatalen2" show-sizer show-total class="pull-right" />
      </TabPane>
      <TabPane label="CTO LIST Price">
        <Table border :columns="tablecolumns3" style="margin: 10px" :data="tabledata3"></Table>
        <Page :total="tableDatalen3" show-sizer show-total class="pull-right" />
      </TabPane>
      <TabPane label="grouping Conditions">
          <div class="check-box">
          <CheckboxGroup v-model="groupConSelect">
            <Checkbox style="width:200px;" v-for="(item, index) in groupingConditions" :key="index" :label="item">{{item}}</Checkbox>
            <Button size="small">Group</Button>
          </CheckboxGroup>
        </div>
      </TabPane>
      <TabPane label="FX Rate">
        <Table border :columns="tablecolumns51" style="margin: 10px" :data="tabledata51"></Table>
        <Table border :columns="tablecolumns5" style="margin: 10px" :data="tabledata5"></Table>
      </TabPane>
      <TabPane label="Exec Summary">
        <Button size="small" style="margin:20px">Execute Summary</Button>
      </TabPane>
    </Tabs>
  <div>
    <ag-grid-vue
      style="width: 100%"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :gridAutoHeight="true"
      :enableSorting="true"
      :enableFilter="true"
      :defaultColDef='{editable: true}'
      :suppressSizeToFit="true"
      :suppressResize="true"
      rowSelection="multiple">
    </ag-grid-vue>
  </div>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
export default {
  data () {
    return {
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
      toggle1: true,
      formcolumns: [
        {
          title: ' ',
          key: 'hedgerife'
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
        {checkboxSelection: true, width: 60},
        {headerName: 'Flag', field: 'Flag', width: 100},
        {headerName: 'HL Mem', field: 'HL Mem', width: 100},
        {headerName: 'Item NO', field: 'Item NO', width: 100},
        {headerName: 'Part Number', field: 'Part Number', width: 100},
        {headerName: 'Description', field: 'Description', width: 100},
        {headerName: 'Standard Price', field: 'Standard Price', width: 100},
        {headerName: 'List Price', field: 'List Price', width: 100},
        {headerName: 'Discount', field: 'Discount', width: 100},
        {headerName: 'Requested DisCount', field: 'Requested DisCount', width: 100},
        {headerName: 'Margin', field: 'Margin', width: 100},
        {headerName: 'Sales Price', field: 'Sales Price', width: 100},
        {headerName: 'Discount', field: 'Discount', width: 100},
        {headerName: 'Price', field: 'Price'},
        {headerName: 'Margin%', field: 'Margin%'}
      ],
      rowData: [
        {
          Flag: '343',
          'HL Mem': 'sdfv',
          'Item NO': 'sdfv',
          'Part Number': 'sdfv',
          Description: 'sdfv',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': '324',
          'Sales Price': 78,
          Margin: 'dfv',
          Discount: 89,
          Price: 90,
          'Margin%': 'huh'
        },
        {
          Flag: '34',
          'HL Mem': 'sdfv',
          'Item NO': 'sdfv',
          'Part Number': 'sdfv',
          Description: 'sdfv',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': '324',
          'Sales Price': 78,
          Margin: 'dfv',
          Discount: 89,
          Price: 90,
          'Margin%': 'huh'
        },
        {
          Flag: '34',
          'HL Mem': 'sdfv',
          'Item NO': 'sdfv',
          'Part Number': 'sdfv',
          Description: 'sdfv',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': '324',
          'Sales Price': 78,
          Margin: 'dfv',
          Discount: 89,
          Price: 90,
          'Margin%': 'huh'
        },
        {
          Flag: '34',
          'HL Mem': 'sdfv',
          'Item NO': 'sdfv',
          'Part Number': 'sdfv',
          Description: 'sdfv',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': '324',
          'Sales Price': 78,
          Margin: 'dfv',
          Discount: 89,
          Price: 90,
          'Margin%': 'huh'
        }
      ]
    }
  },
  components: {
    AgGridVue
  },
  created () {
    this.Datalength1()
    this.Datalength2()
    this.Datalength3()
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleList()
      this.toggleList1()
    }, 3000)
  },
  methods: {
    toggleList () {
      let itembox = document.getElementsByClassName('item-box')[0]
      if (this.toggle) {
        itembox.style.display = 'none'
      } else {
        itembox.style.display = 'block'
      }
      this.toggle = !this.toggle
    },
    toggleList1 () {
      let table = document.getElementsByClassName('table')[0]
      if (this.toggle1) {
        table.style.display = 'none'
      } else {
        table.style.display = 'block'
      }
      this.toggle1 = !this.toggle1
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    Datalength1 () {
      this.tableDatalen1 = this.tabledata1.length
    },
    Datalength2 () {
      this.tableDatalen2 = this.tabledata2.length
    },
    Datalength3 () {
      this.tableDatalen3 = this.tabledata3.length
    },
    changeTableNumShow (n) {
      this.tableNumShow = n
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
.pull-right {
  float: right;
}
.ivu-form-item {
  margin-bottom: 0px;
}
.ivu-table th, .ivu-table td{
  height:30px
}
.ivu-tabs-content{
  height:auto;
  padding-bottom:20px
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
  margin-bottom: 10px;
  background: #eee;
  padding: 0 20px;
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
    background: #ff9933;
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
  margin:10px auto;
  overflow: hidden;
  li {
    float: left;
    width: 25%;
    height: 28px;
    font-size: 13px;
    list-style: none;
    margin-bottom: 10px;
    span{
      width: 135px;
      height:28px;
      line-height: 28px;
      color:#000;
      float: left;
      display: inline-block;
      text-align: right;
    }
    i{
      font-style: normal;
      height:28px;
      line-height: 28px;
      margin-left:10px;
      color: #666;
      float: left;
      display: inline-block;
      text-align: left;
    }
  }
}
.demo-tabs-style > .ivu-tabs-card > .ivu-tabs-content {
    height: 120px;
    margin-top: -16px;
}

.demo-tabs-style > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
    background: #fff;
    padding: 16px;
}

.demo-tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
}

.demo-tabs-style > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    border-color: #fff;
}

</style>
