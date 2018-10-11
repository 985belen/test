<template>
  <div class="custom-bread-crumb">
      <!-- <Label><Icon type="ios-stats" />Pricing Portal</Label> -->
    <Dropdown style="margin-left: 20px">
      <Button type="primary" style="background: transparent;border: 1px solid transparent; font-size: 18px;">
          Pricing Suite
        <Icon type="ios-arrow-down"></Icon>
      </Button>
      <DropdownMenu slot="list" >
        <Row>
          <Col style="padding-left: 30px;" class="hover" span=6>
            <DropdownItem style="font-size: 20px!important;">Pricing Portal</DropdownItem>
            <Icon style=" margin-left: 30px;"  size="64" type="ios-cog" />
            <ul class="submenu">
              <li><router-link style="color: #515a6e" to="/price/list">Price Simulation</router-link></li>
              <!-- <li><router-link style="color: #515a6e" to="/price/price_list1">Multiple Deal Simulation</router-link></li> -->
            </ul>
          </Col>
          <Col class="hover" span=6>
            <DropdownItem style="font-size:20px!important;">Profit Margin Analysis</DropdownItem>
            <Icon style="margin-left: 30px;"  size="64" type="ios-contacts" />
            <ul class="submenu">
              <li><router-link to="/price/CTO_ListPrice" style="color: #515a6e">Finance Review</router-link></li>
              <li><router-link to="/iframe/historicalSummary" style="color: #515a6e">Historical Summary Report</router-link></li>
              <li><router-link to="/iframe/clv" style="color: #515a6e">CLV Report</router-link></li>
              <li><router-link to="/iframe/dealTracking" style="color: #515a6e">Deal Tracking Report</router-link></li>
              <li><router-link style="color: #515a6e" to="">Price Recommendation</router-link></li>
            </ul>
          </Col>
          <Col class="hover" span=6>
            <DropdownItem style="font-size: 20px!important;">Financial Dashboard</DropdownItem>
            <Icon style=" margin-left: 30px;"  size="64" type="md-grid" />
            <ul class="submenu">
              <li><router-link style="color: #515a6e" to="/dashboard/finDashboard">Financial Dashboard</router-link></li>
            </ul>
          </Col>
          <Col class="hover" span=6>
            <DropdownItem style="font-size: 20px!important;">Price Engine</DropdownItem>
            <Icon style=" margin-left: 30px;"  size="64" type="md-settings" />
            <ul class="submenu">
              <li><router-link style="color: #515a6e" to="/price/calculation">Price Auto Calculation</router-link></li>
              <li><router-link style="color: #515a6e" to="/price/publish">Price Auto Publish</router-link></li>
              <li><router-link style="color: #515a6e" to="/price/maintenance">Channel Price Maintenance</router-link></li>
            </ul>
          </Col>
        </Row>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {
  name: 'dashBoad',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 14
    }
  },
  methods: {

  }
}
</script>
<style lang="less">
.submenu{
  margin-left: 10px;
}
  .ivu-select-dropdown{
    width: 100%!important;
    height: 300px!important;
    background: #fff;
    left: 0!important;
  }
  .ivu-dropdown-menu .submenu{
    margin-top: 20px;
   }
  .ivu-dropdown-menu .submenu li{
    margin-left: 20px;
    list-style: disc;
    line-height: 28px;
  }
  .hover:hover{
    background: #f5f7f9;
    height: 296px;
    .ivu-dropdown-item{
      font-weight: bold;
    }
    .ivu-dropdown-item:hover{
      background: transparent;
      color:#333;
    }
  }

</style>
