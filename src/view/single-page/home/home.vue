<template>
  <div>
    <Row :gutter="20">
      <i-col span="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;">
    <Col span="6">
    <Card>
      <p slot="title">
          <Icon type="md-attach" />
            Fast Link
      </p>
      <a class="setting" href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="md-settings" />
          <Icon type="md-remove" />
          <Icon type="ios-close-circle" />
      </a>
      <ul class="fast_link">
          <li v-for="(item, index) in randomMovieList" :key="index">
            <router-link style="color: #515a6e" :to="item.url">{{ item.name }}</router-link>
          </li>
      </ul>
    </Card>
    </Col>
    <Col span="6">
      <Card>
      <p slot="title">
              <Icon type="ios-book" />
              To Do
          </p>
          <a class="setting" href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="md-settings" />
              <Icon type="md-remove" />
              <Icon type="ios-close-circle" />
          </a>
          <ul class="fast_link">
            <li v-for="(item, index) in todos" :key="index">
            <router-link style="color: #515a6e" :to="item.url">{{ item.name }}</router-link>
          </li>
          </ul>
    </Card>
    </Col>
    <Col span="6">
    <Card>
      <p slot="title">
          <Icon type="md-attach" />
              My Active
      </p>
      <a class="setting" href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="md-settings" />
          <Icon type="md-remove" />
          <Icon type="ios-close-circle" />
      </a>
      <ul class="fast_link">
        <li v-for="(item, index) in MyActives" :key="index">
          <router-link style="color: #515a6e" :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
    </Card>
    </Col>
    <Col span="6">
      <Card>
      <p slot="title">
              <Icon type="ios-book" />
              Notices
          </p>
          <a class="setting" href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="md-settings" />
              <Icon type="md-remove" />
              <Icon type="ios-close-circle" />
          </a>
          <ul class="fast_link">
            <li v-for="(item, index) in NoticesArr" :key="index">
              <router-link style="color: #515a6e" :to="item.url">{{ item.name }}</router-link>
            </li>
          </ul>
    </Card>
    </Col>
  </Row>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col span="8">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="pieData" text="Customer Revenue"></chart-pie>
        </Card>
      </i-col>
      <i-col span="16">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="barData" text="Weekly roadmap revenue"/>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data() {
    return {
      randomMovieList: [
        {
          name: 'Pricing Simulation',
          url: '/price/CTO_Config'
        },
        {
          name: 'Quotation need to be priced',
          url: '/price/price_index'
        },
        {
          name: 'Pricing Evaluation',
          url: '/excel/excel_PEsale'
        },
        {
          name: 'CLV report',
          url: '/iframe/iframe_clv'
        },
        {
          name: 'Historical report',
          url: '/iframe/iframe_HistoricalSummary'
        },
      ],
      todos: [
        {
          name: 'Quotation review',
          url: '/price/price_index'
        },
        {
          name: 'Profit margin review',
          url: '/iframe/iframe_ProductSummary'
        }
      ],
      MyActives: [
        {
          name: 'Quotation review',
          url: '/price/price_index'
        },
        {
          name: 'Evaluation review',
          url: '/excel/excel_PEsale'
        },
        {
          name: 'Profit margin review',
          url: '/iframe/iframe_ProductSummary'
        }
      ],
      NoticesArr: [
        {
          name: 'Historical data is updated',
          url: ''
        },
        {
          name: 'CLV new data is updated',
          url: ''
        },
        {
          name: 'Tracking report is updated',
          url: ''
        }
      ],
      movieList: [],
      inforCardData: [
        {
          title: 'New Quotations',
          icon: 'md-person-add',
          count: 803,
          color: '#2d8cf0'
        },
        {
          title: 'Total Volume',
          icon: 'md-locate',
          count: 23432,
          color: '#19be6b'
        },
        {
          title: 'Pending approval',
          icon: 'md-help-circle',
          count: 142,
          color: '#ff9900'
        },
        { title: 'Customer', icon: 'md-share', count: 657, color: '#ed3f14' },
        {
          title: 'New report',
          icon: 'md-chatbubbles',
          count: 12,
          color: '#E46CBB'
        },
        { title: 'New Dashboard', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        { value: 335, name: 'BP1' },
        { value: 310, name: 'BP2' },
        { value: 234, name: 'BP3' },
        { value: 135, name: 'BP4' },
        { value: 1548, name: 'BP5' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  mounted() {
    //
  }
};
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
.setting .ivu-icon {
  margin-left: 10px;
}
.fast_link,
.fast_link li {
  list-style: none;
}
.fast_link li {
  line-height: 22px;
  a {
    color: #333;
  }
}
</style>
