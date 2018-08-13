<template>
<div class="listpage">
  <Form :model="FormItem" ref="FormItem" >
    <Row>
      <Col span=8>
        <Form-item label="Business Partner">
          <Input v-model="FormItem.BusinessPartner" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
      <Col span=8>
        <Form-item label="select">
          <Select v-model="select" style="width:200px">
            <Option v-for="(item, index) in selects" :value="item.value" :key="index">{{item}}</Option>
        </Select>
        </Form-item>
      </Col>
      <Col span=8>
        <Form-item label="Transaction ID">
          <Input v-model="FormItem.TransactionID" placeholder="Enter something..."></Input>
        </Form-item>
      </Col>
    </row>
  </Form>
  <div class="table-box">
    <Table height="500" border stripe :columns="Columns" :data="data"></Table>
  </div>
</div>
</template>
<script>
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
          type: 'selection',
          align: 'center',
          width: 60
        },
        {
          title: 'PE Number',
          key: 'peNum',
          align: 'center',
          width: 135
        },
        {
          title: 'DMU Number',
          key: 'dmuNum',
          align: 'center',
          width: 120
        },
        {
          title: 'DMU Name',
          key: 'dmuName',
          align: 'center',
          width: 120
        },
        {
          title: 'Description',
          key: 'desc',
          align: 'center',
          width: 120
        },
        {
          title: 'Country',
          key: 'country',
          align: 'center',
          width: 120
        },
        {
          title: 'Region',
          key: 'region',
          align: 'center',
          width: 120
        },
        {
          title: 'Channel',
          key: 'channel',
          align: 'center',
          width: 120
        },
        {
          title: 'Status',
          key: 'status',
          align: 'center',
          width: 120
        },
        {
          title: 'Created By',
          key: 'createdBy',
          align: 'center',
          width: 120
        },
        {
          title: 'Created Time',
          key: 'createdTime',
          align: 'center',
          width: 120
        },
        {
          title: 'Modified By',
          key: 'modifiedBy',
          align: 'center',
          width: 120
        },
        {
          title: 'Modyfied Time',
          key: 'modyfiedTime',
          align: 'center',
          width: 120
        },
        {
          title: 'Pricer',
          key: 'pricer',
          align: 'center',
          width: 120
        },
        {
          title: 'Gr Rev',
          key: 'grRev',
          align: 'center',
          width: 120
        },
        {
          title: 'Margin %',
          key: 'margi',
          align: 'center',
          width: 120
        },
        {
          title: 'Currency',
          key: 'currency',
          align: 'center',
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
