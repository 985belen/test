<template>
<div class="listpage">
  <Form :model="FormItem" ref="FormItem" >
    <Row>
      <Col span=7>
        <Form-item label="Business Partner">
          <Input size="small" v-model="FormItem.BusinessPartner" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=7>
        <Form-item label="select">
          <Select size="small" v-model="select" style="width:200px">
            <Option v-for="(item, index) in FormItem.selects" :value="item" :key="index">{{item}}</Option>
        </Select>
        </Form-item>
      </Col>
      <Col span=7>
        <Form-item label="Transaction ID">
          <Input size="small" v-model="FormItem.TransactionID" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=3>
        <Form-item>
          <Button size="small" type="primary">Search</Button>
          <Button size="small" type="primary">Attach</Button>
        </Form-item>
      </Col>
    </row>
  </Form>
  <div class="table-box">
    <ag-grid-vue
      style="width: 100%; height:100%;"
      class="ag-theme-balham"
      :columnDefs="Columns"
      :rowData="data"
      :gridAutoHeight="true"
      :enableSorting="true"
      :enableFilter="true"
      :showToolPanel="true"
      :defaultColDef='{editable: true}'
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
      FormItem: {
        BusinessPartner: '',
        DMUName: '',
        PricingEstimationNumber: '',
        CreatedBy: '',
        Country: '',
        select: '',
        selects: ['opportunity', 'quotation', 'contract']
      },
      Columns: [
        {
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: false,
          editable: false,
          checkboxSelection: true,
          width: 60
        },
        {
          headerName: 'Transaction ID',
          field: 'TransactionID',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Description',
          field: 'Description',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Product ID',
          field: 'ProductID',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Product Desc',
          field: 'ProductDesc',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Start Date',
          field: 'StartDate',
          cellStyle: {'text-align': 'center'}
        },
        {
          headerName: 'Currency',
          field: 'Currency',
          cellStyle: {'text-align': 'center'}
        }
      ],
      data: [
        {
          TransactionID: '0002223182',
          Description: 'RX - KPMG - Norway - M910q',
          ProductID: 'Desktop TC M910q_Intel Q270_TINY_ES_R',
          ProductDesc: '10MUCTO1WW',
          StartDate: 'Thu Jan 25 00:00:00 CST 2018',
          Currency: 'USD'
        },
        {
          TransactionID: '0002102225',
          Description: 'CAT:KPMG - KBY NB Turkey T470 v1.0',
          ProductID: 'Notebook ThinkPad T470 20HECTO1WW Rx',
          ProductDesc: '20HECTO1WW',
          StartDate: 'Mon Aug 21 00:00:00 CST 2017',
          Currency: 'USD'
        },
        {
          TransactionID: '0002175497',
          Description: 'NonCAT:KPMG - Forensic NB',
          ProductID: 'Notebook ThinkPad X1 Yoga 2G 20JECTO1WW	20JECTO1WW',
          ProductDesc: '20JECTO1WW',
          StartDate: 'Wed Nov 08 00:00:00 CST 2017',
          Currency: 'USD'
        },
        {
          TransactionID: '0002260500',
          Description: 'CAT:KPMG-KBY-R T480s Yoga380 Canada',
          ProductID: 'Notebook ThinkPad X380 Yoga 20LJCTO1WW R',
          ProductDesc: '20LJCTO1WW',
          StartDate: 'Thu Apr 05 00:00:00 CST 2018',
          Currency: 'USD'
        },
        {
          TransactionID: '0002297646',
          Description: 'CAT:KPMG _ RFP Turkey',
          ProductID: 'Notebook ThinkPad T480 20L6CTO1WW Rx',
          ProductDesc: '20L6CTO1WW',
          StartDate: 'Mon Jul 23 00:00:00 CST 2018',
          Currency: 'USD'
        },
        {
          TransactionID: '0002223182',
          Description: 'RX - KPMG - Norway - M910q',
          ProductID: 'Desktop TC M910q_Intel Q270_TINY_ES_R',
          ProductDesc: '10MUCTO1WW',
          StartDate: 'Thu Jan 25 00:00:00 CST 2018',
          Currency: 'USD'
        },
        {
          TransactionID: '0002102225',
          Description: 'CAT:KPMG - KBY NB Turkey T470 v1.0',
          ProductID: 'Notebook ThinkPad T470 20HECTO1WW Rx',
          ProductDesc: '20HECTO1WW',
          StartDate: 'Mon Aug 21 00:00:00 CST 2017',
          Currency: 'USD'
        },
        {
          TransactionID: '0002175497',
          Description: 'NonCAT:KPMG - Forensic NB',
          ProductID: 'Notebook ThinkPad X1 Yoga 2G 20JECTO1WW	20JECTO1WW',
          ProductDesc: '20JECTO1WW',
          StartDate: 'Wed Nov 08 00:00:00 CST 2017',
          Currency: 'USD'
        },
        {
          TransactionID: '0002260500',
          Description: 'CAT:KPMG-KBY-R T480s Yoga380 Canada',
          ProductID: 'Notebook ThinkPad X380 Yoga 20LJCTO1WW R',
          ProductDesc: '20LJCTO1WW',
          StartDate: 'Thu Apr 05 00:00:00 CST 2018',
          Currency: 'USD'
        },
        {
          TransactionID: '0002297646',
          Description: 'CAT:KPMG _ RFP Turkey',
          ProductID: 'Notebook ThinkPad T480 20L6CTO1WW Rx',
          ProductDesc: '20L6CTO1WW',
          StartDate: 'Mon Jul 23 00:00:00 CST 2018',
          Currency: 'USD'
        }
      ]
    }
  },
  components: {
    AgGridVue
  },
  methods: {
    gonewpage () {
      this.$router.push('/excel/excel_newpe')
    },
    gopricer () {
      this.$router.push('/excel/excel_PEpricer')
    }
  }
}
</script>
<style lang="less">
.listpage{
  width:100%;
  height: 100%;
  overflow:hidden;
  padding: 10px 0;
  background: #fff;
}
.table-box{
  width:100%;
  height: 100%;
  padding: 10px;
}
.ivu-form-item-label{
  float: left;
}
.ivu-form-item-content{
  float: left;
  margin-left: -8px !important;
}
.ivu-form-item{
  margin-bottom:5px;
}
</style>
