<template>
<div class="priceCalculation" ref="priceCalculation">
  <div ref="topMain" class="topMain">
    <h3 class="marginBottom">
      <a href="javascript:;" style="display:inline-block;color: #333;"><Icon type="md-pricetags" />Price Log</a>
      <div style="float: right; margin-top: -3px;">
        <Button size='small' type="default">Search</Button>
        <Button  size='small' type="default" @click="NewFormula=true">Create New Formula</Button>
        <Button  size='small' type="default">View</Button>
        <Button  size='small' type="default">Copy</Button>
        <Button  size='small' type="default">Edit</Button>
        <Button  size='small' type="default">Delete</Button>
      </div>
    </h3>
    <div class="middle-box" style="display: block;">
      <Form :model="form" label-position="left" ref="form" class="formalignright">
        <Row type="flex" justify="start" :gutter="5">
          <Col span=6>
            <FormItem label="Sales org" >
              <Input v-model="form.Salesorg" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="Sales Office">
              <Input v-model="form.SalesOffice" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="Product Group">
              <Input v-model="form.ProductGroup" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="Price Type">
              <Select v-model="form.PriceType" placeholder="Please select" >
                <Option v-for="(item, index) in form.PriceTypes" :value="item" :key="index">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
  <h3 class="marginBottom" style="margin-bottom: 10px;"><Icon type="ios-podium" />Pricing Publish</h3>
  <div class="agcontainer">
    <ag-grid-vue
      style="width: 100%; height:100%;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :gridAutoHeight="true"
      :floatingFilter="true"
      :enableSorting="true"
      :enableFilter="true"
      :singleClickEdit="true"
      :suppressSizeToFit="true"
      :suppressResize="true"
      :enableColResize="true"
      :gridReady="onGridReady"
      rowSelection="multiple">
    </ag-grid-vue>
  </div>
  <Modal
    v-model="NewFormula"
    title="New Formula"
    :styles="{width:'900px'}"
    ok-text="Save"
    cancel-text="Back">
      <Form :model="formPricing" label-position="left" ref="formPricing">
        <Row type="flex" justify="start" :gutter="8">
          <Col span="8">
            <FormItem label="Sales org" >
              <Input v-model="formPricing.Salesorg" placeholder="Enter something..." style="width:160px"/>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="Sales Office">
              <Input v-model="formPricing.SalesOffice" placeholder="Enter something..." style="width:160px"/>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="Product Group">
              <Input v-model="formPricing.ProductGroup" placeholder="Enter something..." style="width:160px"/>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <h3 class="marginBottom">Pricing elements</h3>
      <Form :model="form" label-position="left" ref="form">
        <Row type="flex" justify="center" :gutter="15" >
          <Col>
            <FormItem>
              <Button type="primary" @click="addInput('BMC Cost')">BMC Cost</Button>
            </FormItem>
          </Col>
          <Col>
            <FormItem>
              <Button type="primary" @click="addInput('TMC Cost')">TMC Cost</Button>
            </FormItem>
          </Col>
          <Col>
            <FormItem>
              <Button type="primary" @click="addInput('Cost adjustment')">Cost adjustment</Button>
            </FormItem>
          </Col>
          <Col>
            <FormItem>
              <Button type="primary" @click="addInput('Price Uplift')">Price Uplift</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <h3 class="marginBottom">Calculated List Price</h3>
      <Form :model="formDynamic" label-position="left" ref="formDynamic">
        <Row>
          <Col offset="1" span="20">
            <FormItem label="Calculated List Price">
              <Input v-model="formDynamic.formula" placeholder="Enter something..." style="width:500px"/>
            </FormItem>
          </Col>
        </Row>
      </Form>
  </Modal>
</div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue"
export default {
  data() {
    return {
      form: {
        Salesorg: '',
        SalesOffice: '',
        ProductGroup: '',
        PriceType: '',
        PriceTypes: ['List price']
      },
      index: 0,
      formPricing: {
        Salesorg: '',
        SalesOffice: '',
        ProductGroup: ''
      },
      formDynamic: {
        formula: ''
      },
      columnDefs: [
        {
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: false,
          editable: false,
          suppressFilter: true,
          checkboxSelection: true,
          width: 60
        },
        {
          headerName: 'Price Type',
          field: 'PriceType',
          width: 120
        },
        {
          headerName: 'Sales Org',
          field: 'SalesOrg',
          width: 120
        },
        {
          headerName: 'Sales Office',
          field: 'SalesOffice',
          width: 120
        },
        {
          headerName: 'Product group',
          field: 'Productgroup',
          width: 120
        },
        {
          headerName: 'Createdby',
          field: 'Createdby',
          width: 120
        },
        {
          headerName: 'Updatedby',
          field: 'Updatedby',
          width: 120
        },
        {
          headerName: 'Created Date',
          field: 'CreatedDate',
          width: 120
        },
        {
          headerName: 'Updated date',
          field: 'Updateddate',
          width: 120
        }
      ],
      rowData: [
        {
          PriceType: 'List Price',
          SalesOrg: 'IN10',
          SalesOffice: 'IN00',
          Productgroup: '',
          Createdby: 'zhangxm29',
          Updatedby: 'zhangxm29 ',
          CreatedDate: '2018/9/21 12:30',
          Updateddate: '2018/9/22 10:30',
        },
        {
          PriceType: 'List Price',
          SalesOrg: 'HK65',
          SalesOffice: 'OM10',
          Productgroup: 'ZM',
          Createdby: 'wuch4',
          Updatedby: 'wuch4 ',
          CreatedDate: '2018/9/18 11:30',
          Updateddate: '2018/9/25 15:30',
        }
      ],
      NewFormula: false
    }
  },
  components: {
    AgGridVue
  },
  created () {},
  mounted () {
    // this.calcGridHeight()
    // window.addEventListener('resize', () => {
    //   window.clearTimeout(this.timer)
    //   this.timer = window.setTimeout(() => {
    //     this.calcGridHeight()
    //   }, 100)
    // })
  },
  methods: {
    onGridReady (params) {
      params.api.sizeColumnsToFit()
    },
    addInput (label) {
      this.formDynamic.formula +=  label + ' + '
    },
    calcGridHeight () {
      var screenHeight = window.innerHeight
      var topHeight = this.$refs.topMain.offsetHeight
      // console.log(topHeight)
      var ag = document.getElementsByClassName('ag-theme-balham')[0]
      var agcontainer = document.getElementsByClassName('agcontainer')[0]
      ag.style.height = screenHeight - topHeight - 64 - 40 + 'px'
      agcontainer.style.height = screenHeight - topHeight - 64 - 10 + 'px'
    }
  }
}
</script>
<style lang="less" scoped>
.priceCalculation {
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  background: #fff;
  overflow: hidden;
}
h3 {
  height: 30px;
  line-height: 30px;
  background: #eee;
  padding: 0 20px;
  &.marginBottom {
    margin-bottom: 10px;
  }
}
.agcontainer {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}
</style>
