<template>
<div class="price-box">
  <div class="tool-bar" ref="toolBar">
    <a href="#" class="item"><Icon class="icon" size=16 type="md-download" />Download</a>
  </div>
  <div class="agcontainer" style="width: 100%;height:100%;overflow:hidden;">
    <ag-grid-vue
      style="width: 100%;height:100%;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :floatingFilter="true"
      :gridAutoHeight="false"
      :enableSorting="true"
      :showToolPanel="false"
      :toolPanelSuppressGroups="true"
      :toolPanelSuppressValues="true"
      :toolPanelSuppressSideButtons="false"
      :enableFilter="true"
      :singleClickEdit="true"
      :suppressSizeToFit="true"
      :suppressResize="true"
      :enableColResize="true"
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
      columnDefs: [
        { headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: false,
          editable: false,
          checkboxSelection: true, width: 60},
        {headerName: 'Quotation ID', field: 'QuotationID', width: 120, cellStyle: {'text-align': 'left'},
          cellRenderer:(params) => { return '<a href="#/price/price_index">' + params.value + '</a>' }
        },
        {headerName: 'Opportunity', field: 'Opportunity', width: 120, cellStyle: {'text-align': 'left'}},
        {headerName: 'Account', field: 'Account', width: 120, cellStyle: {'text-align': 'left'}},
        {headerName: 'Country', field: 'country',  width: 120,cellStyle: {'text-align': 'left'}},
        {headerName: 'End Customer DMU', width: 150, field: 'EndCustomerDMU', cellStyle: {'text-align': 'left'}},
        {headerName: 'Sold to Party', width: 120, field: 'SoldtoParty', cellStyle: {'text-align': 'left'}},
        {headerName: 'Sales Org', width: 120, field: 'SalesOrg', cellStyle: {'text-align': 'left'}},
        {headerName: 'Sales Office', width: 120, field: 'SalesOffice', cellStyle: {'text-align': 'left'}},
        {headerName: 'MOT', width: 120, field: 'MOT', cellStyle: {'text-align': 'left'}},
        {headerName: 'Fulfillment Route',  width: 140,field: 'FulfillmentRoute', cellStyle: {'text-align': 'left'}},
        {headerName: 'Distribution Channel', width: 160, field: 'DistributionChannel', cellStyle: {'text-align': 'left'}},
        {headerName: 'Valid Until Date', width: 140, field: 'ValidUntilDate', cellStyle: {'text-align': 'left'}},
        {headerName: 'Expected Start Date', width: 150, field: 'ExpectedStartDate', cellStyle: {'text-align': 'left'}},
        {headerName: 'Expected End Date',  width: 150,field: 'ExpectedEndDate', cellStyle: {'text-align': 'left'}},
        {headerName: 'CreateDate', width: 120, field: 'CreateDate', cellStyle: {'text-align': 'left'}},
        {headerName: 'Status', width: 120, field: 'Status', cellStyle: {'text-align': 'left'}},
      ],
      rowData: [
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
        },
        {
          QuotationID: 'Q-00105395',
          Opportunity: 'Arris Prices new',
          Account: 'ARRIS',
          EndCustomerDMU: '1214308296',
          country: 'IN',
          SoldtoParty: '1212528852',
          SalesOrg: 'SG66',
          SalesOffice: 'IN12',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '41',
          ExpectedStartDate: '2018/05/17',
          ValidUntilDate:'2018/06/16',
          ExpectedEndDate: '2018/06/16',
          CreateDate: '2018/05/17',
          Status: 'Draft'
        },
        {
          QuotationID: 'Q-00112086',
          Opportunity: 'Allight Sykes',
          Account: 'DATACOM AU WA',
          EndCustomerDMU: '1212320246',
          country: 'AU',
          SoldtoParty: '1212459374',
          SalesOrg: 'AU10',
          SalesOffice: 'AU20',
          MOT: 'Air(NON-HK/MO)',
          FulfillmentRoute: 'Indirect',
          DistributionChannel: '11',
          ExpectedStartDate: '2018/05/29',
          ValidUntilDate:'2018/08/27',
          ExpectedEndDate: '2018/08/27',
          CreateDate: '2018/05/29',
          Status: 'Approved'
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
      var topHeight = this.$refs.toolBar.offsetHeight
      // console.log('topHeight:' + topHeight)
      var ag = document.getElementsByClassName('ag-theme-balham')[0]
      var acontainer = document.getElementsByClassName('agcontainer')[0]
      ag.style.height = screenHeight - topHeight - 64 - 40 + 'px' // 64是头部的高度，10是padding
      acontainer.style.height = screenHeight - topHeight - 64 - 40 + 'px'
    }
  }
}
</script>
<style lang="less">
.price-box{
  width: 100%;
  height: 100%;
  overflow:hidden;
  padding-bottom:10px;
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
