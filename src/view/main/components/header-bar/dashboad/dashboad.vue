<template>
  <div class="custom-bread-crumb">
      <!-- <Label><Icon type="ios-stats" />Pricing Portal</Label> -->
    <Dropdown style="margin-left: 20px">
      <Button type="primary" style="background: transparent;border: 1px solid transparent; font-size: 18px;">
          Pricing Suite
        <Icon type="ios-arrow-down"></Icon>
      </Button>
      <DropdownMenu slot="list" style="margin-left: 30px;">
        <Row>
          <Col span=6>
            <DropdownItem style="font-size: 20px!important;">Pricing Portal</DropdownItem>
            <Icon style=" margin-left: 30px;"  size="64" type="ios-cog" />
            <ul class="submenu">
              <li><router-link style="color: #515a6e" to="/price/CTO_Config">Price Simulation</router-link></li>
              <li ><router-link style="color: #515a6e" to="/price_lists/price_list">Price Evaluation</router-link></li>
              <li><router-link style="color: #515a6e" to="/">Price recommendation</router-link></li>
            </ul>
          </Col>
          <Col span=6>
            <DropdownItem style="font-size:20px!important;">Profit Margin  Analysis</DropdownItem>
            <Icon style=" margin-left: 30px;"  size="64" type="ios-contacts" />
            <ul class="submenu">
              <li><router-link to="/iframe/iframe_clv" style="color: #515a6e">Profit Margin Analysis</router-link></li>
              <li><router-link to="/iframe/iframe_HistoricalSummary" style="color: #515a6e">Product report</router-link></li>
              <li><router-link to="/iframe/iframe_HistoricalSummary" style="color: #515a6e">Historical summary report</router-link></li>
              <li><router-link to="/iframe/iframe_clv" style="color: #515a6e">CLV report</router-link></li>
              <li><router-link to="/iframe/iframe_DealTracking" style="color: #515a6e">Deal tracking report</router-link></li>
            </ul>
          </Col>
          <Col span=6>
            <DropdownItem style="font-size: 20px!important;">Financial Dashboard</DropdownItem>
            <Icon style=" margin-left: 30px;"  size="64" type="md-grid" />
            <ul class="submenu">
              <li>Financial dashboard</li>
            </ul>
            </Col>
          <Col span=6>
            <DropdownItem style="font-size: 20px!important;">Price Engine</DropdownItem>
            <Icon style=" margin-left: 30px;"  size="64" type="md-settings" />
            <ul class="submenu">
              <li>Price auto calculation</li>
              <li>Price auto publish</li>
            </ul>
          </Col>
        </Row>
          <!-- <DropdownItem divided>北京烤鸭</DropdownItem> -->
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
<style>
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
</style>
