<template>
<div class="pricePublish" ref="pricePublish">
  <div ref="topMain" class="topMain">
    <h3 class="marginBottom">
      <a href="javascript:;" style="display:inline-block;color: #333;"><Icon type="md-pricetags" />Price Log</a>
      <div style="float: right; margin-top: -3px;">
        <Button size='small' type="default">Search</Button>
        <Button  size='small' type="default">Resend</Button>
      </div>
    </h3>
    <div class="middle-box" style="display: block;">
      <Form :model="form" label-position="right" ref="form">
        <Row type="flex" justify="start" :gutter="5">
          <Col span=6>
            <FormItem label="Sales org">
              <Input v-model="form.Salesorg" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="Sales Office" >
              <Input v-model="form.SalesOffice" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="DistributionChannel">
              <Input v-model="form.DistributionChannel" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="Customer">
              <Input v-model="form.Customer" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="Customer Pricing Group">
              <Input v-model="form.CustomerPricingGroup" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="Material">
              <Input v-model="form.Material" placeholder="Enter something..."/>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="Price Type">
              <Select v-model="form.PriceType" placeholder="Please select" style="">
                <Option v-for="(item, index) in form.PriceTypes" :value="item" :key="index">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
  <div class="agcontainer">
    <h3 class="marginBottom"><Icon type="ios-podium" />Pricing Publish</h3>
    <ag-grid-vue
      style="width: 100%;height:100%;"
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
      rowSelection="multiple">
    </ag-grid-vue>
  </div>
</div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue"
// import axios from "axios"

export default {
  data () {
    return {
      form: {
        Salesorg: '',
        SalesOffice: '',
        ProductGroup: '',
        DistributionChannel: '',
        Customer: '',
        CustomerPricingGroup: '',
        Material: '',
        PriceType: '',
        PriceTypes: ['List price', 'Channel price']
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
          headerName: 'ConditionType',
          field: 'ConditionType',
          width: 120
        },
        {
          headerName: 'Combination',
          field: 'Combination',
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
          headerName: 'Dist. Channel',
          field: 'DistChannel',
          width: 120
        },
        {
          headerName: 'Customer',
          field: 'Customer',
          width: 120
        },
        {
          headerName: 'Customer Price Group',
          field: 'CustomerPriceGroup',
          width: 120
        },
        {
          headerName: 'Material',
          field: 'Material',
          width: 120
        },
        {
          headerName: 'Amount',
          field: 'Amount',
          width: 120
        },
        {
          headerName: 'Currency',
          field: 'Currency',
          width: 120
        },
        {
          headerName: 'Valid From',
          field: 'ValidFrom',
          width: 120
        },
        {
          headerName: 'Valid To',
          field: 'ValidTo',
          width: 120
        },
        {
          headerName: 'CreateBy',
          field: 'CreateBy',
          width: 120
        },
        {
          headerName: 'ReleaseDate',
          field: 'ReleaseDate',
          width: 120
        }
      ],
      rowData: [
        {
          ConditionType: 'YBP0',
          Combination: 'A998',
          SalesOrg: 'IN10',
          SalesOffice: 'IN00',
          DistChannel: '', 
          Customer: '',
          CustomerPriceGroup: '',
          Material: '5PS0E97116',
          Amount: '20842',
          Currency: 'INR',
          ValidFrom: '2018/9/21',
          ValidTo: '9999/12/31',
          CreateBy: 'zhangxm29',
          ReleaseDate: '2018/9/21 15:30'
        },
        {
          ConditionType: 'YBP0',
          Combination: 'A998',
          SalesOrg: 'NZ10',
          SalesOffice: 'NZ20',
          DistChannel: '', 
          Customer: '',
          CustomerPriceGroup: '',
          Material: '20KE0007AU',
          Amount: '99999',
          Currency: 'NZD',
          ValidFrom: '2018/9/24',
          ValidTo: '9999/12/31',
          CreateBy: 'rosliza',
          ReleaseDate: '2018/9/24 11:30'
        },
        {
          ConditionType: 'YBP0',
          Combination: 'A998',
          SalesOrg: 'US10',
          SalesOffice: 'US20',
          DistChannel: '', 
          Customer: '',
          CustomerPriceGroup: '',
          Material: '81FK00ECUS',
          Amount: '799.99',
          Currency: 'USD',
          ValidFrom: '2018/9/24',
          ValidTo: '9999/12/31',
          CreateBy: 'kdecke',
          ReleaseDate: '2018/9/24 21:00'
        },
        {
          ConditionType: 'YBP0',
          Combination: 'A649',
          SalesOrg: 'HK61',
          SalesOffice: 'PL10',
          DistChannel: 81, 
          Customer: '',
          CustomerPriceGroup: 'ZM',
          Material: '20KF001GPB',
          Amount: '1450',
          Currency: 'EUR',
          ValidFrom: '2018/9/21',
          ValidTo: '9999/12/31',
          CreateBy: 'Auto',
          ReleaseDate: '2018/9/21 20:00'
        },
        {
          ConditionType: 'YBP0',
          Combination: 'A649',
          SalesOrg: 'HK65',
          SalesOffice: 'OM10',
          DistChannel: 11, 
          Customer: '',
          CustomerPriceGroup: 'ZM',
          Material: 'F0DJ0054AX',
          Amount: '730',
          Currency: 'USD',
          ValidFrom: '2018/9/23',
          ValidTo: '2018/9/30',
          CreateBy: 'wuch4',
          ReleaseDate: '2018/9/23 20:00'
        },
        {
          ConditionType: 'YBDA',
          Combination: 'A929',
          SalesOrg: 'DE10',
          SalesOffice: '',
          DistChannel: '', 
          Customer: '',
          CustomerPriceGroup: 'B1',
          Material: '5MS0R34488',
          Amount: '-37.5',
          Currency: 'EUR',
          ValidFrom: '2018/9/24',
          ValidTo: '9999/12/31',
          CreateBy: 'mgasparovic',
          ReleaseDate: '2018/9/24 20:00'
        },
        {
          ConditionType: 'YBD0',
          Combination: 'A549',
          SalesOrg: 'US10',
          SalesOffice: 'US20',
          DistChannel: '', 
          Customer: '',
          CustomerPriceGroup: 'B1',
          Material: '65D1KCC1US',
          Amount: '-14',
          Currency: '%',
          ValidFrom: '2018/9/24',
          ValidTo: '9999/12/31',
          CreateBy: 'jhaller1',
          ReleaseDate: '2018/9/24 21:00'
        }
      ]
    }
  },
  components: {
    AgGridVue
  },
  created () {},
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
    onGridReady (params) {
      params.api.sizeColumnsToFit()
    },
    calcGridHeight () {
      var screenHeight = window.innerHeight
      var topMain = document.getElementsByClassName('topMain')[0].offsetHeight
      var agcontainer = document.getElementsByClassName('agcontainer')[0]
      var agBody = document.getElementsByClassName('ag-theme-balham')[0]
      agcontainer.style.height = screenHeight - 64 - topMain - 10 + 'px'
      agBody.style.height = screenHeight - 64 - topMain - 10 - 30 + 'px'
    }
  }
}
</script>
<style lang="less" scoped>
.pricePublish {
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  background: #fff;
}
.tool-bar {
  width: 100%;
  height: 32px;
  box-shadow: 0 0 5px #ccc;
  margin-bottom: 10px;
  padding: 0 10px;
  .item {
    color: #666;
    height: 32px;
    line-height: 32px;
    &:hover {
      color: rgb(40, 122, 245);
    }
    .icon {
      padding: 0 2px;
      height: 32px;
      line-height: 32px;
    }
  }
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
}
</style>
