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
        {headerName: ' ',
          children: [
            {checkboxSelection: true, width: 60, cellStyle: {'text-align': 'center'}},
            {headerName: 'Flag', field: 'Flag', editable: false, width: 100, cellStyle: {'text-align': 'center'}},
            // {headerName: 'Make', field: 'make', width: 100, cellEditor: 'agSelectCellEditor', cellEditorParams: {values: ['AAA', 'BBB', 'CCC']}},
            {headerName: 'HL Mem', field: 'HL Mem', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Item NO', field: 'Item NO', cellStyle: {'text-align': 'center'}, width: 100},
            {headerName: 'Part Number', field: 'Part Number', cellStyle: {'text-align': 'center', color: '#fff', backgroundColor: 'green'}, width: 100},
            {headerName: 'Description', field: 'Description', cellStyle: {'text-align': 'center'}, width: 100},
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
      rowData: [
        {
          Flag: '343',
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 'sdv',
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          'Requested DisCount': 100,
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          'Requested DisCount': 100,
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          'Requested DisCount': 100,
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          'Requested DisCount': 100,
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          'Requested DisCount': 100,
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          'Requested DisCount': 100,
          Description: 'test data',
          'Standard Price': '1000',
          'List Price': '343',
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
          'HL Mem': 'test data',
          'Item NO': 'test data',
          'Part Number': 'test data',
          Description: 'test data',
          'Requested DisCount': 100,
          'Standard Price': '1000',
          PRICE: 12,
          'CQ Margin%': 12,
          'weighted Margin%': 23,
          'List Price': '343',
          id: '324',
          makes: 'prices',
          pricenum: 2445,
          'Sales Price': 78,
          Margin: 'parts data',
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
