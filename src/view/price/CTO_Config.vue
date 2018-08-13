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
    <Divider type="vertical" />
    <a href="#/price/Pricing_Simulation" class="item"><Icon class="icon" size=16 type="md-stats" />Pricing Simulation</a>
  </div>
  <ag-grid-vue
    style="width: 100%"
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
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
export default {
  data () {
    return {
      columnDefs: [
        {checkboxSelection: true, width: 60, cellStyle: {'text-align': 'center'}},
        {headerName: 'Quotation ID', field: 'QuotationID', editable: false, width: 150, cellStyle: {'text-align': 'center'},
          cellRenderer:()=>{ return '<a href="/price/price_index">PE-20176807001</a>'}
        },
        {headerName: 'Opportunity', field: 'Opportunity', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Account', field: 'Account', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Country', field: 'country', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'End Customer DMU', field: 'EndCustomerDMU', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Sold to Party', field: 'SoldtoParty', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Sales Org', field: 'SalesOrg', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Sales Office', field: 'SalesOffice', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'MOT', field: 'MOT', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Fulfillment Route', field: 'FulfillmentRoute', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Distribution Channel', field: 'DistributionChannel', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Expected Start Date', field: 'ExpectedStartDate', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Expected End Date', field: 'ExpectedEndDate', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'CreateDate', field: 'CreateDate', cellStyle: {'text-align': 'center'}, width: 100},
        {headerName: 'Status', field: 'Status', cellStyle: {'text-align': 'center'}, width: 100},
      ],
      rowData: [
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },

        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },

        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },

        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        },
        {
          QuotationID: 'PE-20176807001',
          Opportunity: '1212263935',
          Account: 'IPSOS HQ',
          EndCustomerDMU: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          SoldtoParty: 'WE',
          SalesOrg: 'Direct',
          SalesOffice: 'Draft',
          MOT: 'arijn',
          FulfillmentRoute: '2018/08/06 10:00:00',
          DistributionChannel: 'jofeytout',
          ExpectedStartDate: '2018/08/07 10:00:00',
          ExpectedEndDate: 'jmose',
          CreateDate: '347100',
          Status: '18.7'
        }
      ]
    }
  },
  components: {
    AgGridVue
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
    }, 3000)
  },
  methods: {
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
</style>
