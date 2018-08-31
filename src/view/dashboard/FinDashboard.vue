<template>
<div class="dashboard-box">
  <Form :model="FormItem" class="form-box" :label-position="left">
    <Row>
      <Col span=6 >
        <FormItem label="Created by" :label-width="120">
          <Input v-model="FormItem.Createdby" placeholder="Enter something..."/>
        </FormItem>
      </Col>
      <Col span=6>
        <FormItem label="Key words" :label-width="120">
          <Input v-model="FormItem.Keywords" placeholder="Enter something..."/>
        </FormItem>
      </Col>
      <Col span=2 offset=1>
        <FormItem>
          <Button type="primary" @click="CreateNewDashboard">New Dashboard</Button>
        </FormItem>
      </Col>
      <Col span=2 offset=1>
        <FormItem>
          <Button type="primary">Search</Button>
        </FormItem>
      </Col>
    </Row>
  </Form>
  <!-- <divider></divider> -->
  <div class="agcontainer" style="width: 100%;height:100%;">
    <ag-grid-vue
      style="width: 100%;height:600px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :floatingFilter="true"
      :gridAutoHeight="false"
      :showToolPanel="true"
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
import { AgGridVue } from 'ag-grid-vue'
export default {
  data () {
    return {
      FormItem: {
        Createdby: '',
        Keywords: ''
      },
      columnDefs: [
        // {
        //   headerCheckboxSelection: true,
        //   headerCheckboxSelectionFilteredOnly: false,
        //   checkboxSelection: true, width: 60,
        //   suppressFilter: true
        // },
        {
          headerName: 'Dashboard ID',
          cellStyle: {'text-align': 'left'},
          cellRenderer: (params) => { return '<a href="#/dashboard/CreateDashboard">' + params.value + '</a>'},
          field: 'DashboardID'
        },
        {
          headerName: 'Description',
          cellStyle: {'text-align': 'left'},
          field: 'Description',
          cellRenderer: (params) => {
            return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          }
        },
        {
          headerName: 'Created Date',
          cellStyle: {'text-align': 'left'},
          field: 'CreatedDate'
        },
        {
          headerName: 'Created by',
          cellStyle: {'text-align': 'left'},
          field: 'Createdby'
        }
      ],
      rowData: [
        {
          DashboardID: '20180613001',
          Description: 'Country level deal consolidation',
          CreatedDate: '2018/6/13',
          Createdby: 'xingshuo1'
        },
        {
          DashboardID: '20180613001',
          Description: 'Country level deal consolidation',
          CreatedDate: '2018/6/13',
          Createdby: 'xingshuo1'
        },
        {
          DashboardID: '20180613001',
          Description: 'Country level deal consolidation',
          CreatedDate: '2018/6/13',
          Createdby: 'xingshuo1'
        },
        {
          DashboardID: '20180613001',
          Description: 'Country level deal consolidation',
          CreatedDate: '2018/6/13',
          Createdby: 'xingshuo1'
        }
      ]
    }
  },
  components: {
    AgGridVue
  },
  mounted () {
  },
  methods: {
    CreateNewDashboard () {
      this.$router.push({name: 'CreateNewDashboard'})
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.dashboard-box{
  width:100%;
  height:100%;
  padding: 10px 0;
  background: #fff;
}
</style>
