<template>
<div class="listpage">
  <Form :model="FormItem" ref="FormItem" >
    <Row type="flex" justify="center">
      <Col span=6>
        <Form-item label="DMU Number" :label-width="100">
          <Input v-model="FormItem.DMUNumber" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=6>
        <Form-item label="Pricing Estimation Number" :label-width="176">
          <Input v-model="FormItem.PricingEstimationNumber" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=6>
        <Form-item label="Country" :label-width="100">
          <Input v-model="FormItem.Country" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=6>
        <Form-item>
          <Button type="primary">Search</Button>
          <Button style="margin-left: 8px">Export</Button>
        </Form-item>
      </col>
    </row>
    <Row type="flex" justify="center">
      <Col span=6>
        <Form-item label="DMU Name" :label-width="100">
          <Input v-model="FormItem.DMUName" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=6>
        <Form-item label="Pricing Estimation Description" :label-width="176">
          <Input v-model="FormItem.PricingEstimationDescription" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=6>
        <Form-item label="Created By" :label-width="100">
          <Input v-model="FormItem.CreatedBy" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=6>
        <Form-item>
          <Button type="primary" @click="gonewpage">Create new PE</Button>
          <Button style="margin-left: 8px">Copy</Button>
          <Button type="primary" style="margin-left: 8px" @click="gopricer">Price</Button>
        </Form-item>
      </Col>
    </Row>
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
      :defaultColDef='{editable: true}'
      :singleClickEdit="true"
      :suppressSizeToFit="true"
      :suppressResize="true"
      :enableColResize="true"
      rowSelection="multiple">
    </ag-grid-vue>
    <!-- <Table height="500" border stripe :columns="Columns" :data="data"></Table> -->
  </div>
</div>
</template>
<script>
import {AgGridVue} from 'ag-grid-vue'
export default {
  data () {
    return {
      FormItem: {
        DMUNumber: '',
        DMUName: '',
        PricingEstimationNumber: '',
        CreatedBy: '',
        Country: ''
      },
      Columns: [
        {
          type: 'selection',
          cellStyle: {'text-align': 'center'},
          width: 60
        },
        {
          headerName: 'PE Number',
          cellStyle: {'text-align': 'center'},
          field: 'peNum',
          width: 135
        },
        {
          headerName: 'DMU Number',
          cellStyle: {'text-align': 'center'},
          field: 'dmuNum',
          width: 120
        },
        {
          headerName: 'DMU Name',
          cellStyle: {'text-align': 'center'},
          field: 'dmuName',
          width: 120
        },
        {
          headerName: 'Description',
          cellStyle: {'text-align': 'center'},
          field: 'desc',
          width: 120
        },
        {
          headerName: 'Country',
          cellStyle: {'text-align': 'center'},
          field: 'country',
          width: 120
        },
        {
          headerName: 'Region',
          cellStyle: {'text-align': 'center'},
          field: 'region',
          width: 120
        },
        {
          headerName: 'Channel',
          cellStyle: {'text-align': 'center'},
          field: 'channel',
          width: 120
        },
        {
          headerName: 'Status',
          cellStyle: {'text-align': 'center'},
          field: 'status',
          width: 120
        },
        {
          headerName: 'Created By',
          cellStyle: {'text-align': 'center'},
          field: 'createdBy',
          width: 120
        },
        {
          headerName: 'Created Time',
          cellStyle: {'text-align': 'center'},
          field: 'createdTime',
          width: 120
        },
        {
          headerName: 'Modified By',
          cellStyle: {'text-align': 'center'},
          field: 'modifiedBy',
          width: 120
        },
        {
          headerName: 'Modyfied Time',
          cellStyle: {'text-align': 'center'},
          field: 'modyfiedTime',
          width: 120
        },
        {
          headerName: 'Pricer',
          cellStyle: {'text-align': 'center'},
          field: 'pricer',
          width: 120
        },
        {
          headerName: 'Gr Rev',
          cellStyle: {'text-align': 'center'},
          field: 'grRev',
          width: 120
        },
        {
          headerName: 'Margin %',
          cellStyle: {'text-align': 'center'},
          field: 'margi',
          width: 120
        },
        {
          headerName: 'Currency',
          cellStyle: {'text-align': 'center'},
          field: 'currency',
          width: 120
        }
      ],
      data: [
        {
          peNum: 'PE-20176807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20176807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        },
        {
          peNum: 'PE-20180807001',
          dmuNum: '1212263935',
          dmuName: 'IPSOS HQ',
          desc: 'RX-DCG-NIMS PRNS',
          country: 'Germany',
          region: 'WE',
          channel: 'Direct',
          status: 'Draft',
          createdBy: 'arijn',
          createdTime: '2018/08/06 10:00:00',
          modifiedBy: 'jofeytout',
          modyfiedTime: '2018/08/07 10:00:00',
          pricer: 'jmose',
          grRev: '347100',
          margi: '18.7',
          currency: 'USD'
        }
      ]
    }
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
