<template>
<div class="price-box">
  <div class="tool-bar">
    <a href="#" class="item" @click="modelnew = true"><Icon class="icon" size=16 type="md-add" />New</a>
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


    <Modal
    v-model="modelnew"
    :styles="{width:'800px'}"
    title="create New PE"
    ok-text="Ok"
    @on-ok="ok"
    cancel-text="Cancel">
    <Form :model="FormNewpE" :label-width="120" :rules="ruleValidate">
      <Row>
        <Col span=24>
          <h3 class="marginBottom">Base Information</h3>
        </Col>
      </Row>
      <Row>
        <Col span=8>
          <Form-item label="ID">
            <Input v-model="FormItem.id" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=8>
          <Form-item label="Created Date">
            <Input v-model="FormItem.CreatedDate" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=8>
          <Form-item label="Last Modified">
            <Input v-model="FormItem.LastModified" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=8>
          <Form-item label="Original Rmap ID">
            <Input v-model="FormItem.OriginalRmapID" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=8>
          <Form-item label="Created By">
            <Input v-model="FormItem.CreatedBy" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=8>
          <Form-item label="Last Modified by">
            <Input v-model="FormItem.LastModifiedby" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=24>
          <Form-item label="Description" prop="Description">
            <Input v-model="FormItem.Description" type="textarea" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=12 >
          <h3 class="marginBottom">DMU Information</h3>
        </Col>
        <Col span=12>
          <h3 class="marginBottom">Sales Information</h3>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <Form-item label="DMU Name"  prop="DMUName">
            <Input v-model="FormItem.DMUName" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=12>
          <Form-item label="Channel" prop="Channel">
            <Input v-model="FormItem.Channel" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <Form-item label="Business Group">
            <Input v-model="FormItem.BusinessGroup" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=12>
          <Form-item label="Pricing Group" prop="PricingGroup">
            <Input v-model="FormItem.PricingGroup" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <Form-item label="Country">
            <Input v-model="FormItem.Country" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=12>
          <Form-item label="Validity Period">
            <Input v-model="FormItem.ValidityPeriod" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=12>
          <Form-item label="Sub Region">
            <Input v-model="FormItem.SubRegion" placeholder="Enter something..."></Input>
          </Form-item>
          <Form-item label="Region">
            <Input v-model="FormItem.Region" placeholder="Enter something..."></Input>
          </Form-item>
          <Form-item label="Geo">
            <Input v-model="FormItem.Geo" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=12>
          <Form-item label="Comments">
            <Input v-model="FormItem.Comments" type="textarea" :rows="6" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
    </Form>
  </Modal>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
export default {
  data () {
    return {
       FormNewpE: {
        id: '',
        CreatedDate: '2018/8/8 11:05:51',
        LastModified: '2018/8/8 11:05:51',
        OriginalRmapID: '',
        CreatedBy: 'sumer',
        LastModifiedby: 'sumer',
        Description: '',
        DMUName: '',
        Channel: '',
        Comments: '',
        SubRegion: '',
        Country: '',
        ValidityPeriod: '',
        PricingGroup: '',
        BusinessGroup: '',
        Geo: '',
        Region: ''
      },
      FormItem: {
        id: '',
        CreatedDate: '2018/8/8 11:05:51',
        LastModified: '2018/8/8 11:05:51',
        OriginalRmapID: '',
        CreatedBy: 'sumer',
        LastModifiedby: 'sumer',
        Description: '',
        DMUName: '',
        Channel: '',
        Comments: '',
        SubRegion: '',
        Country: '',
        ValidityPeriod: '',
        PricingGroup: '',
        BusinessGroup: '',
        Geo: '',
        Region: ''
      },
      ruleValidate: {
        Description: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        DMUName: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ],
        Channel: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ],
        PricingGroup: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ]
      },
      modelnew:false,
      columnDefs: [
        {headerName: ' ',
          children: [
            {checkboxSelection: true, width: 60, cellStyle: {'text-align': 'center'}},
            {headerName: 'Flag', field: 'Flag', editable: false, width: 100, cellStyle: {'text-align': 'center'},cellRenderer:()=>{ return '<a href="#/excel/excel_PEsale">PE-20176807001</a>'}},
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
    ok(){
     this.$router.push({
      name:'excel_empty'
     })
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
</style>
