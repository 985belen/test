<template>
  <div class="custom-bread-crumb">
      <!-- <Label><Icon type="ios-stats" />Pricing Portal</Label> -->
    <Dropdown style="margin-left: 20px">
        <Button type="primary">
            Pricing Portal
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <Row>
                <Col span=6>
                  <DropdownItem style="font-size: 20px!important;">Pricing Portal</DropdownItem>
                  <Icon style=" margin-left: 30px;"  size="64" type="ios-cog" />
                  <ul class="submenu">
                    <li>Price Simulation</li>
                    <li>Price Estimation</li>
                  </ul>
                </Col>
                <Col span=6>
                <DropdownItem style="font-size:20px!important;">实打实的</DropdownItem>
                  <Icon style=" margin-left: 30px;"  size="64" type="ios-contacts" />
                  <ul class="submenu">
                    <li>Profit Margin Analysis by Account, Regions, Products etc</li>
                    <li>Price recommendation</li>
                    <li>Product series report</li>
                  </ul>
                </Col>
                <Col span=6>
                  <DropdownItem style="font-size: 20px!important;">Financial Dashboard</DropdownItem>
                  <Icon style=" margin-left: 30px;"  size="64" type="md-grid" />
                  <ul class="submenu">
                    <li>Use of Qliksense</li>
                    <li>Financial overview by Account, Regions, Product family, series, etc </li>
                    <li>Dashboard publish</li>
                  </ul>
                  </Col>
                <Col span=6>
                  <DropdownItem style="font-size: 20px!important;">Price Engine</DropdownItem>
                  <Icon style=" margin-left: 30px;"  size="64" type="md-settings" />
                  <ul class="submenu">
                    <li>Price auto calculation</li>
                    <li>Price auto publish to downstream system e.g. LESC, DCSC, LC</li>
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
  .ivu-dropdown-item{
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
