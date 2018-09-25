<template>
<div class="box">
  <Tabs>
    <TabPane label="PCG" icon="md-bookmarks">
      <Form :model="formLeft" label-position="left">
        <Row type="flex" :gutter="10">
         <Col span=6>
            <FormItem label="MTM_NO">
              <Input v-model="formLeft.MTM_NO"></Input>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="COUNTRY">
              <Input v-model="formLeft.COUNTRY"></Input>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem>
              <Button type="" style="margin-right: 15px;" @click='searchAjax'>Search</Button>
              <Button type="">Export</Button>
            </FormItem>
         </Col>
        </Row>
      </Form>
      <ag-grid-vue
        style="width: 100%; height:600px;overflow:hidden;"
        class="ag-theme-balham"
        v-if="pcgcolumn"
        :columnDefs="pcgcolumn"
        :rowData="pcgdata"
        :gridAutoHeight="true"
        :enableSorting="true"
        :enableFilter="true"
        :showToolPanel="true"
        :sizeColumnsToFit="true"
        :floatingFilter="true"
        :singleClickEdit="true"
        :suppressSizeToFit="true"
        :suppressResize="true"
        :enableColResize="true"
        rowSelection="multiple">
      </ag-grid-vue>
    </TabPane>
    <TabPane label="MBG" icon="logo-codepen">
      <Form :model="formRight" label-position="left">
        <Row type="flex" :gutter="10">
         <Col span=6>
            <FormItem label="MTM_NO">
              <Input v-model="formRight.MTM_NO"></Input>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="SALES_ORG">
              <Input v-model="formRight.SALES_ORG"></Input>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem label="SALES_OFFICE">
              <Input v-model="formRight.SALES_OFFICE"></Input>
            </FormItem>
          </Col>
          <Col span=6>
            <FormItem>
              <Button type="primary" style="margin-right: 15px;">Search</Button>
              <Button type="primary">Export</Button>
            </FormItem>
         </Col>
        </Row>
      </Form>
      <div style="width: 100%; height:600px;overflow:hidden;">
        <ag-grid-vue
          style="width: 100%; height:600px"
          class="ag-theme-balham"
          v-if="mbgcolumn"
          :columnDefs="mbgcolumn"
          :rowData="mbgdata"
          :gridAutoHeight="true"
          :enableSorting="true"
          :enableFilter="true"
          :showToolPanel="true"
          :sizeColumnsToFit="true"
          :floatingFilter="true"
          :singleClickEdit="true"
          :suppressSizeToFit="true"
          :suppressResize="true"
          :enableColResize="true"
          rowSelection="multiple">
        </ag-grid-vue>
      </div>
    </TabPane>
  </Tabs>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
import axios from 'axios'
export default {
  data () {
    return {
      formLeft: {
        MTM_NO: '',
        COUNTRY: ''
      },
      formRight: {
        MTM_NO: '',
        SALES_ORG: '',
        SALES_OFFICE: ''
      },
      pcgcolumn: [
        {
          headerName: 'ID',
          width: 100,
          field: 'id',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'MTM_NO',
          width: 120,
          field: 'mtm_NO',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'PRODUCT_GROUP',
          width: 120,
          field: 'product_GROUP',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'PLANT',
          width: 120,
          field: 'plant',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'SUBGEO',
          width: 120,
          field: 'subgeo',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'COUNTRY',
          width: 120,
          field: 'country',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'Pre_M3',
          width: 120,
          field: 'pre_M3',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'Pre_M2',
          width: 120,
          field: 'pre_M2',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'Pre_M1',
          width: 120,
          field: 'pre_M1',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M1',
          width: 120,
          field: 'm1',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M2',
          width: 120,
          field: 'm2',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M3',
          width: 120,
          field: 'm3',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M4',
          width: 120,
          field: 'm4',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M5',
          width: 120,
          field: 'm5',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M6',
          width: 120,
          field: 'm6',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M7',
          width: 120,
          field: 'm7',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M8',
          width: 120,
          field: 'm8',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M9',
          width: 120,
          field: 'm9',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M10',
          width: 120,
          field: 'm10',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M11',
          width: 120,
          field: 'm11',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M12',
          width: 120,
          field: 'm12',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'ChangeAt',
          width: 120,
          field: 'ChangeAt',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'PN_EH',
          width: 120,
          field: 'PN_EH',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }
      ],
      pcgdata: [],
      mbgcolumn: [
        {
          headerName: 'ID',
          width: 100,
          field: 'id',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'MTM_NO',
          width: 120,
          field: 'MTM_NO',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'SALES_ORG',
          width: 120,
          field: 'SALES_ORG',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'SALES_OFFICE',
          width: 120,
          field: 'SALES_OFFICE',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'COST_TYPE',
          width: 120,
          field: 'COST_TYPE',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'CURRENCY_NAME',
          width: 120,
          field: 'CURRENCY_NAME',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'PRICE_UNIT',
          width: 120,
          field: 'PRICE_UNIT',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'Pre_M3',
          width: 120,
          field: 'Pre_M3',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'Pre_M2',
          width: 120,
          field: 'Pre_M2',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'Pre_M1',
          width: 120,
          field: 'Pre_M1',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M1',
          width: 120,
          field: 'M1',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M2',
          width: 120,
          field: 'M2',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M3',
          width: 120,
          field: 'M3',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M4',
          width: 120,
          field: 'M4',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M5',
          width: 120,
          field: 'M5',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M6',
          width: 120,
          field: 'M6',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M7',
          width: 120,
          field: 'M7',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M8',
          width: 120,
          field: 'M8',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M9',
          width: 120,
          field: 'M9',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M10',
          width: 120,
          field: 'M10',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M11',
          width: 120,
          field: 'M11',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'M12',
          width: 120,
          field: 'M12',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'PRODUCT_GROUP',
          width: 120,
          field: 'PRODUCT_GROUP',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'SYS_CREATED_DATE',
          width: 120,
          field: 'SYS_CREATED_DATE',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'CYCLE_PRODUCTGROUP',
          width: 120,
          field: 'CYCLE_PRODUCTGROUP',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }, {
          headerName: 'ChangeAt',
          width: 120,
          field: 'ChangeAt',
          fixed: 'left',
          cellStyle: {'text-align': 'center'}
        }
      ],
      mbgdata: []
    }
  },
  components: {
    AgGridVue
  },
  methods: {
    searchAjax () {
      var _url = 'http://10.120.116.169:8082/api/cfebmcbymtmnoandcountry'
      var _params = {
        'changeAt': '2018-08-22T09:09:25.559Z',
        'country': this.formLeft.COUNTRY || 'ES',
        'mtm_NO': this.formLeft.MTM_NO || '10GQS0VU0C',
        'plant': 'string',
        'product_GROUP': 'string',
        'subgeo': 'string',
        'tableName': 'CFE_MTM_BMC_20180821035509'
      }
      axios.post(_url,_params).then((res)=>{
        this.pcgdata = res.data.data
      })
    }

  }
}
</script>
<style lang="less">
.box{
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
}
.ivu-form-label-left .ivu-FormItem-label,
.ivu-FormItem-content{
  float: left;
}
</style>
