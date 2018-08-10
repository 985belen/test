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
    <Row :gutter="20" style="margin-top: 20px;">
	  <Col span="12">
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
        		<li v-for="item in randomMovieList">
	                <a :href="item.url" target="_blank">{{ item.name }}</a>
	            </li>
        	</ul>
		</Card>
	  </Col>
	  <Col span="12">
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
        		<li v-for="item in randomMovieList">
	                <a :href="item.url" target="_blank">{{ item.name }}</a>
	            </li>
        	</ul>
		</Card>
	  </Col>
  </Row>
    <Row :gutter="20" style="margin-top: 20px;">
      <i-col span="8">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>
        </Card>
      </i-col>
      <i-col span="16">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量"/>
        </Card>
      </i-col>
    </Row>
  <!--   <Row style="margin-top: 20px;">
      <Card shadow>
        <example style="height: 310px;"/>
      </Card>
    </Row> -->
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
  data () {
    return {
    	  randomMovieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                    },
                    {
                        name: 'Schindler`s List',
                        url: 'https://movie.douban.com/subject/1295124/',
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                    }
                ],
                movieList: [],
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 23432, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
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
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
.setting .ivu-icon{
	margin-left: 10px;
}
.fast_link,
.fast_link li{
	list-style: none;
}
.fast_link li{
	line-height: 22px;
	a{
		color:#333;
	}
}


</style>
