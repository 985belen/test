<template>
<div class="mtm-box" ref="mtmBox">
  <div ref="topMain" class="topMain">
    <h3 class="marginBottom"><a href="javascript:;" style="display:inline-block;color: #333;"><Icon type="md-pricetags" />Formula For</a>
      <div style="float: right; margin-top: -3px;">
        <Button size='small' type="default" style="margin-right:15px;">Search</Button>
        <Button size='small' type="default">Download</Button>
        <Button size='small' type="default">upload</Button>
        <Button size='small' type="default">DownloadTemplate</Button>
      </div>
    </h3>
    <div class="middle-box" style="display: block;">
      <Form :model="form" label-position="left" ref="form" >
        <Row type="flex" justify="start" :gutter="10">
          <Col span=6>
            <FormItem label="Application Name" style="padding-left: 20px;">
              <Select v-model="form.ApplicationName" placeholder="Please select">
                <Option v-for="(item, index) in form.ApplicationNames" :value="item" :key="index">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span=5>
            <FormItem label="Segment" style="padding-left: 20px;">
              <Select v-model="form.Segment" placeholder="Please select">
                <Option v-for="(item, index) in form.Segments" :value="item" :key="index">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span=5>
            <FormItem label="Sales Mode" style="padding-left: 20px;">
              <Select v-model="form.SalesMode" placeholder="Please select">
                <Option v-for="(item, index) in form.SalesModes" :value="item" :key="index">{{item}}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span=5>
            <FormItem label="Tree" style="padding-left: 20px;">
              <Select v-model="form.Tree" placeholder="Please select">
                <Option
                  <Tree :data="form.Treedata" show-checkbox></Tree>
                >
                </Option>
              </Select>
            </FormItem>
          </Col>
          <Col span=3>
            <FormItem>
              <Button type="primary">Search</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
  <h3 class="marginBottom" style="margin-bottom: 10px;"><Icon type="ios-podium" />Formula Setup</h3>
  <div class="ag2">
    <Form :model="formula" :label-width="120" ref="formula" >
      <Row>
       <h4>CFE：</h4>
        <Col span=6>
          <FormItem label="BMC w/ freight Cost" >
            <Input v-model="formula.bmc" disabled placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="BMCCOST" >
            <Input v-model="formula.BMCCOST" disabled placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Freight Cost" >
            <Input v-model="formula.FreightCost" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <h4>Policy：<Button type="primary" @click="policyhandleAdd" icon="md-add" size="small" style="float:right;margin-top:3px;">Add</Button></h4>
      <Row>
        <Col span=6>
          <FormItem label="Funding1(CPU)" >
            <Input v-model="formula.Funding1" placeholder="Enter something..."></Input>
            <Select v-model="formula.Funding1sel" placeholder="Please select">
              <Option v-for="(item, index) in formula.Funding1sels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Funding2(HDD/SSD)" >
            <Input v-model="formula.Funding2" placeholder="Enter something..."></Input>
            <Select v-model="formula.Funding2sel" placeholder="Please select">
              <Option v-for="(item, index) in formula.Funding2sels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Funding3(others)" >
            <Input v-model="formula.Funding3" placeholder="Enter something..."></Input>
            <Select v-model="formula.Funding3sel" placeholder="Please select">
              <Option v-for="(item, index) in formula.Funding3sels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="GEO Funding(MOU) ($)" >
            <Input v-model="formula.GEOFunding" placeholder="Enter something..."></Input>
            <Select v-model="formula.GEOFundingsel" placeholder="Please select">
              <Option v-for="(item, index) in formula.GEOFundingsels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=6>
          <FormItem label="Region/Country Funding ($)" >
            <Input v-model="formula.RegionFunding" placeholder="Enter something..."></Input>
            <Select v-model="formula.RegionFundingsel" placeholder="Please select">
              <Option v-for="(item, index) in formula.RegionFundingsels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="WW Funding ($)" >
            <Input v-model="formula.WWFunding" placeholder="Enter something..."></Input>
            <Select v-model="formula.WWFundingsel" placeholder="Please select">
              <Option v-for="(item, index) in formula.WWFundingsels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="GEO Funding(Others) ($)" >
            <Input v-model="formula.GEOFundingother" placeholder="Enter something..."></Input>
            <Select v-model="formula.GEOFundingothersel" placeholder="Please select">
              <Option v-for="(item, index) in formula.GEOFundingothersels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Other local logistic cost" >
            <Input v-model="formula.Otherlocal" placeholder="Enter something..."></Input>
            <Select v-model="formula.Otherlocalsel" placeholder="Please select">
              <Option v-for="(item, index) in formula.Otherlocalsels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=6>
          <FormItem label="Custom Duty" >
            <Input v-model="formula.CustomDuty" placeholder="Enter something..."></Input>
            <Select v-model="formula.CustomDutysel" placeholder="Please select">
              <Option v-for="(item, index) in formula.CustomDutysels" :value="item" :key="index">{{item}}</Option>
            </Select>
          </FormItem>
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
        <Col span=6>
          <FormItem label="Net BMC Cost" >
            <Input v-model="formula.NetBMCCost" placeholder="Enter something..."></Input>
            <Input v-model="formula.NetBMCCost" placeholder="公式..."></Input>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Gross BMC Cost" >
            <Input v-model="formula.GrossBMCCost" placeholder="Enter something..."></Input>
            <Input v-model="formula.NetBMCCost" placeholder="公式..."></Input>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Net Gross BMC Cost" >
            <Input v-model="formula.NetGrossBMCCost" placeholder="Enter something..."></Input>
            <Input v-model="formula.NetBMCCost" placeholder="公式..."></Input>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Non-BMC uplift" >
            <Input v-model="formula.NonBMCuplift" placeholder="Enter something..."></Input>
            <Input v-model="formula.NetBMCCost" placeholder="公式..."></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span=6>
          <FormItem label="Other Cost Adder" >
            <Input v-model="formula.OtherCostAdder" placeholder="Enter something..."></Input>
            <Input v-model="formula.OtherCostAddergs" placeholder="公式..."></Input>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Net Total Cost" >
            <Input v-model="formula.NetTotalCost" placeholder="Enter something..."></Input>
            <Input v-model="formula.NetTotalCostgs" placeholder="公式..."></Input>
          </FormItem>
        </Col>
        <Col span=6>
          <FormItem label="Total Cost" >
            <Input v-model="formula.TotalCost" placeholder="Enter something..."></Input>
            <Input v-model="formula.TotalCostgs" placeholder="公式..."></Input>
          </FormItem>
        </Col>
        <Col span=6 v-if="item.status" :key="i" v-for="(item, i) in formula.calcuitems">
          <FormItem
            :label="'Item ' + item.index"
            :prop="'items.' + i + '.value'">
              <Input placeholder="Enter something..."></Input>
              <Input placeholder="公式..."></Input>
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
        Funding1sels: '',
        Funding2: '',
        Funding2sel: '',
        Funding2sels: '',
        Funding3: '',
        Funding3sel: '',
        Funding3sels: '',
        GEOFunding: '',
        GEOFundingsel: '',
        GEOFundingsels: '',
        RegionFunding: '',
        RegionFundingsel: '',
        RegionFundingsels: '',
        WWFunding: '',
        WWFundingsel: '',
        WWFundingsels: '',
        GEOFundingother: '',
        GEOFundingothersel: '',
        GEOFundingothersels: '',
        Otherlocal: '',
        Otherlocalsel: '',
        Otherlocalsels: '',
        CustomDuty: '',
        CustomDutysel: '',
        CustomDutysels: '',
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
.ivu-form-label-left .ivu-FormItem-label,
.ivu-FormItem-content {
  // float: left;
}
.ivu-select {
  width: 162px;
}
.ivu-FormItem {
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
