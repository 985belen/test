<template>
<div class="price-box">
  <div ref="topMain" class="topMain">
    <h3 class="marginBottom">
      <a href="javascript:;" style="display:inline-block;color: #333;"><Icon type="md-pricetags" />Price Log</a>
      <div style="float: right; margin-top: -1px;">
        <Button size='small' >Search</Button>
        <Button  size='small' @click="PriceModal=true">Upload</Button>
      </div>
    </h3>
    <Form :model="form" label-position="left">
      <Row type="flex" justify="start" :gutter="5">
        <Col span=6 offset=1>
          <FormItem label="Condition Type">
            <Select v-model="form.ConditionType" placeholder="Please select" style="width:160px" @on-change="conditionTypeshow">
              <Option v-for="(item, index) in form.ConditionTypes" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span=8>
          <FormItem label="Combination">
            <Select v-model="form.Combination" placeholder="Please select" style="width:300px">
              <Option v-for="(item, index) in form.Combinations" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
  <h3 class="marginBottom"><Icon type="ios-podium" />Pricing Upload Record</h3>
  <div class="agContainer">
    <ag-grid-vue
      style="width: 100%; height:100%;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :gridAutoHeight="false"
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
  <Modal v-model="PriceModal" width="800">
    <p slot="header">
      <span>Price Upload</span>
    </p>
    <div style="text-align:center;">
      <Upload
          :before-upload="handleUpload"
          action="//jsonplaceholder.typicode.com/posts/">
          <Button icon="ios-cloud-upload-outline">File Upload</Button>
      </Upload>
      <div v-if="file !== null">Upload file: {{ file.name }} 
        <!-- <Button type="default" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button> -->
      </div>
    </div>
    <div slot="footer" style="text-align:center;">
      <Button type="primary" @click="Download">Download Template</Button>
      <Button type="primary"  @click="upload" :loading="loadingStatus">Upload</Button>
    </div>
  </Modal>
  <Modal v-model="tableModal" width="1100">
    <p slot="header">
      <span>Price Upload Item</span>
    </p>
    <div style="text-align:center;">
      <Table border height='400' :columns="tableColumn" :data="tableData"></Table>
      <!-- <Page :total="totalNum" prev-text="Previous" next-text="Next" /> -->
    </div>
    <div slot="footer" style="text-align:center;">
    </div>
  </Modal>
</div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue"
export default {
  data () {
    return {
      form: {
        ConditionType: '',
        ConditionTypes: ['YBP0', 'YBDA'],
        Combination: '',
        Combinations: '',
        conditionArr: {
          YBP0: ['Sales Org/Sales Office/Dist. Channel/Customer/Material', 'Sales Org/Sales Office/Dist. Channel/Customer Price Group/Material', 'Sales Org/Sales Office/Customer/Material', 'Sales Org/Sales Office/Customer Price Group/Material', 'Sales Org/Customer/Material', 'Sales Org/Sales Office/Customer/Material', 'Sales Org/Dist. Channel/Material', 'Sales Org/Customer Price Group/Material', 'Sales Org/Sales Office/Customer Price Group/Material'
            ],
          YBDA: [
            'Sales Org/Customer/Material', 'Sales Org/Sales Office/Customer/Material', 'Sales Org/Customer Price Group/Material', 'Sales Org/Sales Office/Customer Price Group/Material'
          ]
        }
      },
      file: null,
      loadingStatus: false,
      PriceModal: false,
      columnDefs: [
        {
          headerName: 'Condition Type',
          field: 'ConditionType',
          width: 140
        },
        {
          headerName: 'Combination',
          field: 'Combination',
          width: 120
        },
        {
          headerName: 'File Source Name',
          field: 'FileSourceName',
          width: 120,
          onCellClicked: (params) => {
            if (params.rowIndex === 2) {
              this.calcuTotalNum()
            } else {
              return false
            }
          },
          cellRenderer: (params) => { 
            // console.log(params.rowIndex)
            if (params.rowIndex === 2) {
              return '<a href="#">' + params.value + '</a>'
            } else {
              return params.value
            }
          }
        },
        {
          headerName: 'Create By',
          field: 'CreateBy',
          width: 120
        },
        {
          headerName: 'Create Date',
          field: 'CreateDate',
          width: 120
        },
        {
          headerName: 'Status',
          field: 'Status',
          width: 120
        }
      ],
      rowData: [
        {
          ConditionType: 'YBP0',
          Combination: 647,
          FileSourceName: 'YBP0_647_Templates DT - AIO 1 as on 26th Junexlsx.xlsx',
          CreateBy: 'rpandya',
          CreateDate: '10/5/2018 3:27:07 PM',
          Status: 'Success'
        },
        {
          ConditionType: 'YBP0',
          Combination: 647,
          FileSourceName: 'YBP0_647_Template.xlsx',
          CreateBy: 'gowtnava',
          CreateDate: '10/1/2018 7:05:24 PM',
          Status: 'Success'
        },
        {
          ConditionType: 'YBDA',
          Combination: 549,
          FileSourceName: '2018 PAO Template_Price Upload.xlsx',
          CreateBy: 'rosliza',
          CreateDate: '10/7/2018 8:21:47 PM',
          Status: 'Success'
        },
        {
          ConditionType: 'YBDA',
          Combination: 549,
          FileSourceName: '10US005PEU- YBDA.xlsx',
          CreateBy: 'dkopecky',
          CreateDate: '10/5/2018 4:03:03 PM ',
          Status: 'Success'
        }
      ],
      tableModal: false,
      totalNum: 100,
      tableColumn: [
        {
          title: 'Sales Org',
          key: 'SalesOrg'
        },
        {
          title: 'Customer Price Group',
          key: 'CustomerPriceGroup'
        },
        {
          title: 'PN',
          key: 'PN'
        },
        {
          title: 'Amount',
          key: 'Amount'
        },
        {
          title: 'Currency',
          key: 'Currency'
        },
        {
          title: 'Valid From',
          key: 'ValidFrom'
        },
        {
          title: 'Valid To',
          key: 'ValidTo'
        },
        {
          title: 'Search term',
          key: 'Searchterm'
        }
      ],
      tableData: [
        {
          SalesOrg: 'FR10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PEU',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'FR10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PFR',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'FR10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PUK',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'DE10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PEU',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'DE10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PFR',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'DE10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PGE',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'DE10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PIL',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'DE10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PIV',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'DE10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PIU',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
        },
        {
          SalesOrg: 'DE10',
          CustomerPriceGroup: 'B1',
          PN: '10US005PIX',
          Amount: '-216',
          Currency: 'EUR',
          ValidFrom: '2018/10/10',
          ValidTo: '999/12/31',
          Searchterm: ''
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
    conditionTypeshow () {
      this.form.Combinations = []
      this.form.Combination = ''
      this.form.Combinations = this.form.conditionArr[this.form.ConditionType]
    },
    calcGridHeight () {
      var screenHeight = window.innerHeight
      var topHeight = this.$refs.topMain.offsetHeight
      var ag = document.getElementsByClassName('ag-theme-balham')[0]
      var ag1 = document.getElementsByClassName('agContainer')[0]
      ag.style.height = screenHeight - topHeight - 64 - 50 + 'px'
      ag1.style.height = screenHeight - topHeight - 64 - 50 + 'px'
    },
    handleUpload (file) {
      this.file = file
      return false
    },
    Download () {},
    upload () {
      this.loadingStatus = true
      setTimeout(() => {
        this.file = null
        this.loadingStatus = false
        this.$Message.success('Success')
      }, 1500)
    },
    calcuTotalNum () {
      this.tableModal = true
      this.totalNum = this.tableData.length
    }
  }
}
</script>
<style lang="less">
.price-box {
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  background: #fff;
  overflow: hidden;
  .ivu-form-label-left .ivu-form-item-label,
    .ivu-form-item-content{
      float: left;
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
.ivu-table-border td{
  height: 38px;
}
</style>
