<template>
<div class="mtm-box" ref="mtmBox">
  <div ref="topMain" class="topMain">
    <h3 class="marginBottom"><a href="javascript:;" style="display:inline-block;color: #333;"><Icon type="md-pricetags" />Formula For</a>
      <div style="float: right; margin-top: -3px;">
        <Button size='small' type="default" style="margin-right:15px;">Search</Button>
        <Button  size='small' type="default">Download</Button>
        <Button  size='small' type="default">upload</Button>
        <Button  size='small' type="default">DownloadTemplate</Button>
      </div>
    </h3>
    <div class="middle-box" style="display: block;">
      <Form :model="form" label-position="left" ref="form" >
        <Row type="flex" justify="start" :gutter="8">
          <Col span=6>
            <Form-item label="Application Name" >
              <Select v-model="form.ApplicationName" placeholder="Please select" style="width:180px">
                <Option v-for="(item, index) in form.ApplicationNames" :value="item" :key="index">{{item}}</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span=5>
            <Form-item label="Segment">
              <Select v-model="form.Segment" placeholder="Please select" style="width:180px">
                <Option v-for="(item, index) in form.Segments" :value="item" :key="index">{{item}}</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span=5>
            <Form-item label="Sales Mode">
              <Select v-model="form.SalesMode" placeholder="Please select" style="width:180px">
                <Option v-for="(item, index) in form.SalesModes" :value="item" :key="index">{{item}}</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span=6>
            <Form-item label="Tree">
              <Select v-model="form.Tree" placeholder="Please select" style="width:200px">
                <Option
                  <Tree :data="form.Treedata" show-checkbox></Tree>
                >
                </Option>
              </Select>
            </Form-item>
          </Col>
          <Col span=2>
            <Form-item>
              <Button type="primary">Search</Button>
            </Form-item>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
  <h3 class="marginBottom" style="margin-bottom: 10px;"><Icon type="ios-podium" />Formula Setup</h3>
  <div class="ag2">
    <Form :model="formula" :label-width="180" ref="formula" >
      <Row>
       <h4>CFE：</h4>
        <Col span=6>
          <Form-item label="BMC w/ freight Cost" :label-width="150">
            <Input v-model="formula.bmc" disabled placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=6>
          <Form-item label="BMCCOST" :label-width="150">
            <Input v-model="formula.BMCCOST" disabled placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=6>
          <Form-item label="Freight Cost" :label-width="150">
            <Input v-model="formula.FreightCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
      </Row>
      <h4>Policy：<Button type="primary" @click="policyhandleAdd" icon="md-add" size="small" style="float:right;margin-top:3px;">Add</Button></h4>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Funding1(CPU)" >
            <Input clearable v-model="formula.Funding1" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4 >
          <Form-item :label-width="15">
            <Select clearable v-model="formula.Funding1sel" placeholder="Please select">
              <Option v-for="(item, index) in formula.Funding1sels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Funding2(HDD/SSD)" >
            <Input clearable v-model="formula.Funding2" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15" >
            <Select clearable v-model="formula.Funding2sel" placeholder="Please select">
              <Option v-for="(item, index) in formula.Funding2sels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Funding3(others)" >
            <Input clearable v-model="formula.Funding3" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Select clearable v-model="formula.Funding3sel" placeholder="Please select">
              <Option v-for="(item, index) in formula.Funding3sels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="GEO Funding(MOU) ($)" >
            <Input clearable v-model="formula.GEOFunding" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15" >
            <Select v-model="formula.GEOFundingsel" placeholder="Please select">
              <Option v-for="(item, index) in formula.GEOFundingsels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Region/Country Funding ($)" >
            <Input clearable v-model="formula.RegionFunding" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Select clearable v-model="formula.RegionFundingsel" placeholder="Please select">
              <Option v-for="(item, index) in formula.RegionFundingsels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="WW Funding ($)" >
            <Input v-model="formula.WWFunding" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Select clearable v-model="formula.WWFundingsel" placeholder="Please select">
              <Option v-for="(item, index) in formula.WWFundingsels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="GEO Funding(Others) ($)" >
            <Input clearable v-model="formula.GEOFundingother" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Select clearable v-model="formula.GEOFundingothersel" placeholder="Please select">
              <Option v-for="(item, index) in formula.GEOFundingothersels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Other local logistic cost" >
            <Input clearable v-model="formula.Otherlocal" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Select clearable v-model="formula.Otherlocalsel" placeholder="Please select">
              <Option v-for="(item, index) in formula.Otherlocalsels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Custom Duty" >
            <Input clearable v-model="formula.CustomDuty" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Select clearable v-model="formula.CustomDutysel" placeholder="Please select">
              <Option v-for="(item, index) in formula.CustomDutysels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
        <!--<Col span=6 v-if="item.status" :key="i" v-for="(item, i) in formula.policyitems">
          <FormItem
            :label="'Item ' + item.num">
            <Input v-model="" placeholder="Enter something..."></Input>
            <Select v-model="" placeholder="Please select">
              <Option ></Option>
            </Select>
          </FormItem>
        </Col>-->
      </Row>
      <h4>计算：<Button type="primary" @click="calcuhandleAdd" icon="md-add" size="small" style="float:right;margin-top:3px;">Add</Button></h4>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Net BMC Cost" >
            <Input clearable v-model="formula.NetBMCCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Input clearable v-model="formula.NetBMCCostgs" placeholder="Please enter formula..."></Input>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Gross BMC Cost" >
            <Input clearable v-model="formula.GrossBMCCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Input clearable v-model="formula.GrossBMCCostgs" placeholder="Please enter formula..."></Input>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Net Gross BMC Cost" >
            <Input clearable v-model="formula.NetGrossBMCCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Input clearable v-model="formula.NetGrossBMCCostgs" placeholder="Please enter formula..."></Input>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Non-BMC uplift" >
            <Input clearable v-model="formula.NonBMCuplift" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Input clearable v-model="formula.NonBMCupliftgs" placeholder="Please enter formula..."></Input>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Other Cost Adder" >
            <Input clearable v-model="formula.OtherCostAdder" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Input clearable v-model="formula.OtherCostAddergs" placeholder="Please enter formula..."></Input>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Net Total Cost" >
            <Input clearable v-model="formula.NetTotalCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Input clearable v-model="formula.NetTotalCostgs" placeholder="Please enter formula..."></Input>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1>
          <Form-item label="Total Cost" >
            <Input clearable v-model="formula.TotalCost" placeholder="Enter something..."></Input>
          </Form-item>
        </Col>
        <Col span=4>
          <Form-item :label-width="15">
            <Input clearable v-model="formula.TotalCostgs" placeholder="Please enter formula..."></Input>
          </Form-item>
        </Col>
        <Col span=2 >
          <Form-item :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span=7 offset=1 v-if="item.status" :key="i" v-for="(item, i) in formula.calcuitems">
          <FormItem
            :label="'Item ' + item.index">
              <Input clearable placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=4 v-if="item.status" :key="i" v-for="(item, i) in formula.calcuitems">
          <FormItem
            :label-width="15">
              <Input clearable placeholder="Please enter formula..."></Input>
          </FormItem>
        </Col>
        <Col span=2 v-if="item.status" :key="i" v-for="(item, i) in formula.calcuitems">
          <FormItem
            :label-width="20">
            <Icon type="md-close-circle" size="20" />
          </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
</div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue"
// import axios from '@/libs/api.request'
import axios from "axios"

export default {
  data() {
    return {
      form: {
        ApplicationName: "",
        ApplicationNames: [],
        Segment: "",
        Segments: ["Beijing", "Tianjin"],
        SalesMode: '',
        SalesModes: ["ALL", "Onshore", "Offshore"],
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
        calcuitems: [
        ],
        policyitems: [],
        // cfe
        bmc: '',
        FreightCost: '',
        BMCCOST: '',
        // POLICY
        Funding1: '',
        Funding1sel: '',
        Funding1sels: [1, 2, 3, 4, 5],
        Funding2: '',
        Funding2sel: '',
        Funding2sels: [],
        Funding3: '',
        Funding3sel: '',
        Funding3sels: [],
        GEOFunding: '',
        GEOFundingsel: '',
        GEOFundingsels: [],
        RegionFunding: '',
        RegionFundingsel: '',
        RegionFundingsels: [],
        WWFunding: '',
        WWFundingsel: '',
        WWFundingsels: [],
        GEOFundingother: '',
        GEOFundingothersel: '',
        GEOFundingothersels: [],
        Otherlocal: '',
        Otherlocalsel: '',
        Otherlocalsels: [],
        CustomDuty: '',
        CustomDutysel: '',
        CustomDutysels: [],
        // 计算
        NetBMCCost: '',
        NetBMCCostgs: '',
        GrossBMCCost:'',
        GrossBMCCostgs:'',
        NetGrossBMCCost: '',
        NetGrossBMCCostgs: '',
        NonBMCuplift: '',
        NonBMCupliftgs: '',
        NetTotalCost: '',
        NetTotalCostgs: '',
        OtherCostAdder: '',
        OtherCostAddergs: '',
        TotalCost: '',
        TotalCostgs: ''
      }
    }
  },
  components: {
  },
  created() {},
  mounted() {
  },
  methods: {
    calcuhandleAdd () {
      this.index++
      this.formula.calcuitems.push({
        value: '',
        index: this.index,
        status: 1
      })
    },
    policyhandleAdd () {
      this.num++
      this.formula.policyitems.push({
        value: '',
        num: this.num,
        status: 1
      })
    }
  }
}
</script>
<style lang="less">
.mtm-box {
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  background: #fff;
  overflow: hidden;
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
  h4{
    margin-bottom:  10px;
  }
}
.ivu-tabs-bar {
  margin-bottom: 2px;
}
.ivu-form-label-left .ivu-form-item-label,
.ivu-form-item-content {
  // float: left;
}
// .ivu-select {
//   width: 162px;
// }
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
