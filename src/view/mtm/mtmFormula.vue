<template>
<div class="price-box" ref="priceBox">
  <div ref="topMain" class="topMain">
    <div class="tool-bar" ref="toolBar" style="display: none;">
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
      <a href="#" class="item"><Icon class="icon" size=16 type="md-add" />Accepted</a>
    </div>
    <h3 class="marginBottom"><a href="javascript:;" style="display:inline-block;color: #333;"><Icon type="md-pricetags" />Formula For</a>
      <div style="float: right; margin-top: -3px;">
        <Button size='small' type="defalut" style="margin-right:15px;">Search</Button>
        <Button  size='small' type="defalut">Download</Button>
        <Button  size='small' type="defalut">upload</Button>
        <Button  size='small' type="defalut">DownloadTemplate</Button>
      </div>
    </h3>
    <div class="middle-box" style="display: block;">
      <Form :model="form" label-position="left" ref="form" >
        <Row type="flex" justify="start" :gutter="15">
          <Col span=4>
            <Form-item label="Application Name" style="padding-left: 20px;">
              <Select v-model="form.ApplicationName" placeholder="Please select">
                <Option v-for="(item, index) in form.ApplicationNames" :value="item" :key="index">{{item}}</Option>
            </Select>
            </Form-item>
          </Col>
          <Col span=4>
            <Form-item label="Segment" style="padding-left: 20px;">
              <Select v-model="form.Segment" placeholder="Please select">
                <Option v-for="(item, index) in form.Segments" :value="item" :key="index">{{item}}</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span=4>
            <Form-item label="Tree" style="padding-left: 20px;">
              <Select v-model="form.Tree" placeholder="Please select">
                <Option
                  <Tree :data="form.Treedata" show-checkbox></Tree>
                >
                </Option>
              </Select>
            </Form-item>
          </Col>
          <Col span=4>
            <Form-item>
              <Button type="primary">Search</Button>
            </Form-item>
          </Col>
        </Row>
      </Form>
      <Modal
        v-model="model"
        title="Components"
        :styles="{width:'655px'}"
        ok-text="Search"
        @on-ok='searchAjax()'
        cancel-text="Cancel">
        <ag-grid-vue
          style="width: 100%; height:250px"
          class="ag-theme-balham"
          v-if="model"
          :columnDefs="columns"
          :rowData="rowData"
          :enableSorting="true"
          :showToolPanel="false"
          :enableFilter="true"
          :singleClickEdit="true"
          :suppressResize="true"
          :enableColResize="true"
          rowSelection="multiple">
        </ag-grid-vue>
      </Modal>
    </div>
  </div>
  <h3 class="marginBottom" style="margin-bottom: 10px;"><Icon type="ios-podium" />Formula Setup</h3>
  <div class="ag2">
    <Form :model="formula" label-position="left" ref="formula" >
      <h4>手工：</h4>
      <Row>
        <Col span=4>
          <Form-item label="Label1" style="padding-left: 20px;">
            <Input v-model="formula.Label1" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Label2" style="padding-left: 20px;">
            <Input v-model="formula.Label2" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Label3" style="padding-left: 20px;">
            <Input v-model="formula.Label3" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
       <h4>CFE：</h4>
        <Col span=4>
          <Form-item label="BMC w/ freight Cost" style="padding-left: 20px;">
            <Input v-model="formula.bmc" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="BMCCOST" style="padding-left: 20px;">
            <Input v-model="formula.BMCCOST" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Freight Cost" style="padding-left: 20px;">
            <Input v-model="formula.FreightCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <h4>Policy：</h4>
      <Row>
        <Col span=4>
          <Form-item label="Funding1(CPU)" style="padding-left: 20px;">
            <Input v-model="formula.Funding1" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Funding2(HDD/SSD)" style="padding-left: 20px;">
            <Input v-model="formula.Funding2" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Funding3(others)" style="padding-left: 20px;">
            <Input v-model="formula.Funding3" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="GEO Funding(MOU) ($)" style="padding-left: 20px;">
            <Input v-model="formula.GEOFunding" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Region/Country Funding ($)" style="padding-left: 20px;">
            <Input v-model="formula.RegionFunding" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="WW Funding ($)" style="padding-left: 20px;">
            <Input v-model="formula.WWFunding" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=4>
          <Form-item label="GEO Funding(Others) ($)" style="padding-left: 20px;">
            <Input v-model="formula.GEOFundingother" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Other local logistic cost" style="padding-left: 20px;">
            <Input v-model="formula.Otherlocal" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Custom Duty" style="padding-left: 20px;">
            <Input v-model="formula.CustomDuty" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <h4>计算：</h4>
      <Row>
        <Col span=4>
          <Form-item label="Net BMC Cost" style="padding-left: 20px;">
            <Input v-model="formula.NetBMCCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Gross BMC Cost" style="padding-left: 20px;">
            <Input v-model="formula.GrossBMCCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Net Gross BMC Cost" style="padding-left: 20px;">
            <Input v-model="formula.NetGrossBMCCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Non-BMC uplift" style="padding-left: 20px;">
            <Input v-model="formula.NonBMCuplift" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Other Cost Adder" style="padding-left: 20px;">
            <Input v-model="formula.OtherCostAdder" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item label="Net Total Cost" style="padding-left: 20px;">
            <Input v-model="formula.NetTotalCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=4>
          <Form-item label="Total Cost" style="padding-left: 20px;">
            <Input v-model="formula.TotalCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
    </Form>
  </div>
</div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
// import axios from '@/libs/api.request'
import axios from "axios";

export default {
  data() {
    return {
      model: false,
      form: {
        ApplicationName: "",
        ApplicationNames: [],
        Segment: "",
        Segments: ["Beijing", "Tianjin"],
        Tree: "",
        Treedata: [
          {
            title: "GEO",
            expand: false,
            children: [
              {
                title: "WW",
                expand: false,
                children: [
                  {
                    title: "Region",
                    children: [
                      {
                        title: "Country",
                        children: [
                          {
                            title: "AU",
                            children: [
                              {
                                title: "Product Group",
                                children: [
                                  {
                                    title: "PCSD"
                                  },
                                  {
                                    title: "NB/DT"
                                  },
                                  {
                                    title: "Tablet"
                                  },
                                  {
                                    title: "Smart Device"
                                  },
                                  {
                                    title: "Option"
                                  },
                                  {
                                    title: "Visual"
                                  },
                                  {
                                    title: "DCG"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: "EMEA",
                expand: false,
                children: [
                  {
                    title: "Country",
                    children: [
                      {
                        title: "Product Group"
                      }
                    ]
                  }
                ]
              },
              {
                title: "NA",
                expand: false,
                children: [
                  {
                    title: "Country",
                    children: [
                      {
                        title: "Product Group"
                      }
                    ]
                  }
                ]
              },
              {
                title: "LA",
                expand: false,
                children: [
                  {
                    title: "Country",
                    children: [
                      {
                        title: "Product Group"
                      }
                    ]
                  }
                ]
              },
              {
                title: "AP",
                expand: false,
                children: [
                  {
                    title: "Country",
                    children: [
                      {
                        title: "Product Group"
                      }
                    ]
                  }
                ]
              },
              {
                title: "PRC",
                expand: false,
                children: [
                  {
                    title: "Country",
                    children: [
                      {
                        title: "Product Group"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      formula: {
        // 手工
        Label1: '',
        Label2: '',
        Label3: '',
        // cfe
        bmc: '',
        FreightCost: '',
        BMCCOST: '',
        // POLICY
        Funding1: '',
        Funding2: '',
        Funding3: '',
        GEOFunding: '',
        RegionFunding: '',
        WWFunding: '',
        GEOFundingother: '',
        Otherlocal: '',
        CustomDuty: '',
        // 计算
        NetBMCCost: '',
        GrossBMCCost:'',
        NetGrossBMCCost: '',
        NonBMCuplift: '',
        NetTotalCost: '',
        OtherCostAdder:'',
        TotalCost: ''
      },
      columns: [
        { headerName: "key", field: "key", width: 150, editable: true },
        { headerName: "mtmNo", field: "mtmNo", width: 150, editable: true },
        { headerName: "plant", field: "plant", width: 150, editable: true },
        { headerName: "country", field: "country", width: 150, editable: true }
      ],
      rowData: [
        {
          key: "",
          mtmNo: "",
          plant: "",
          country: ""
        },
        {
          key: "",
          mtmNo: "",
          plant: "",
          country: ""
        },
        {
          key: "",
          mtmNo: "",
          plant: "",
          country: ""
        },
        {
          key: "",
          mtmNo: "",
          plant: "",
          country: ""
        },
        {
          key: "",
          mtmNo: "",
          plant: "",
          country: ""
        }
      ],
      columnDefs: [
        {
          headerName: "KEY",
          width: 120,
          field: "key",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "MTM_NO",
          width: 120,
          field: "mtm_NO",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "PLANT",
          width: 120,
          field: "plant",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "COUNTRY",
          width: 120,
          field: "country",
          cellStyle: { "text-align": "left" }
          // cellRenderer: (params) => {
          //   return '<div class="longData" title="' + params.value +'">' + params.value + '</div>'
          // }
        },
        {
          headerName: "CFECOUNTRY",
          width: 120,
          field: "cfecountry",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "Pre_M3",
          width: 120,
          field: "pre_M3",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "Pre_M2",
          width: 120,
          field: "pre_M2",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "Pre_M1",
          width: 120,
          field: "pre_M1",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M1",
          width: 120,
          field: "m1",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M2",
          width: 120,
          field: "m2",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M3",
          width: 120,
          field: "m3",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M4",
          width: 120,
          field: "m4",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M5",
          width: 120,
          field: "m5",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M6",
          width: 120,
          field: "m6",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M7",
          width: 120,
          field: "m7",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M8",
          width: 120,
          field: "m8",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M9",
          width: 120,
          field: "m9",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M10",
          width: 120,
          field: "m10",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M11",
          width: 120,
          field: "m11",
          cellStyle: { "text-align": "left" }
        },
        {
          headerName: "M12",
          width: 120,
          field: "m12",
          cellStyle: { "text-align": "left" }
        }
      ],
      rowDataDefs: []
    }
  },
  components: {
    AgGridVue
  },
  created() {},
  mounted() {
  },
  methods: {
    searchAjax() {
      var _url = "http://10.120.116.171:8082/api/cfebmc";
      var _tpl = [
        { country: "TM", key: "1", mtmNo: "80M100ELRU", plant: "BITLAND_NB" },
        { country: "LI", key: "2", mtmNo: "80VR00GJFR", plant: "LCFC_NB" },
        { country: "LI", key: "3", mtmNo: "80VR00GJFR", plant: "1" },
        { country: "AT", key: "4", mtmNo: "90B6009MUK", plant: "S111" },
        { country: "AT", key: "5", mtmNo: "90FB007LGE", plant: "1" },
        { country: "LI", key: "6", mtmNo: "90AV001NFR", plant: "S111" },
        { country: "DE", key: "7", mtmNo: "30BK001YFR", plant: "FLEX_HGY" },
        { country: "DE", key: "8", mtmNo: "30BK001YFR", plant: "1" },
        { country: "LI", key: "9", mtmNo: "30BK001YFR", plant: "FLEX_HGY" },
        { country: "LI", key: "10", mtmNo: "30BK001YFR", plant: "1" },
        { country: "MY", key: "11", mtmNo: "GX20G46698", plant: "S120" },
        { country: "AE", key: "12", mtmNo: "G0A10170AR", plant: "1" },
        { country: "CA", key: "13", mtmNo: "65ACGCC1US", plant: "S111" },
        { country: "CN", key: "14", mtmNo: "60C7MCR1CB", plant: "1" },
        { country: "AT", key: "16", mtmNo: "5MS0M38429", plant: "N/A" },
        { country: "DE", key: "17", mtmNo: "5MS0M38429", plant: "N/A" },
        { country: "AT", key: "19", mtmNo: "5MS0M38429", plant: "1" },
        { country: "BE", key: "20", mtmNo: "ZA090000SE", plant: "1" },
        { country: "LI", key: "21", mtmNo: "ZA200050FR", plant: "1" },
        { country: "TH", key: "22", mtmNo: "ZG38C00964", plant: "1" }
      ];
      var obj = {
        inputBmcEntityList: _tpl,
        lineUpTree: this.form.lineUpTree || "",
        systemType: this.form.systemType || "consumer"
      };
      axios.post(_url, obj).then(res => {
        this.rowDataDefs = res.data.data;
      });
    }
  }
};
</script>
<style lang="less">
.price-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
.ivu-table th,
.ivu-table td {
  height: 30px;
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
h4 {
  height: 30px;
  line-height: 30px;
  background: #f9f9fa;
  padding: 0 20px;
  font-style: normal;
}
.item-box {
  width: 100%;
  height: auto;
  margin-bottom: 5px;
  overflow: hidden;
  padding-top: 3px;
}
.ag2 {
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.ivu-tabs-bar {
  margin-bottom: 2px;
}
.ivu-form-label-left .ivu-form-item-label,
.ivu-form-item-content {
  float: left;
}
.ivu-select {
  width: 162px;
}
.ivu-form-item {
  margin-bottom: 10px;
}
.marginBottom {
  .ivu-btn,
  .ivu-btn:hover {
    background: #fff;
    outline: none;
  }
}
.ivu-btn.ivu-btn-info {
  background-color: #2db7f5;
}
</style>
