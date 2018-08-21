<template>
  <div class="target" >
    <div class="tool-bar" ref="toolBar">
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
    <Tabs>
      <TabPane label="Product Series Report" icon="md-bookmarks">
        <iframe src='http://localhost:4848/single?appid=D:\Qlik\Pricing Profit Margin 4.qvf&sheet=50f1b6e8-652c-4173-9f5c-90b5f113afb9&opt=currsel&select=clearall' style='border:none;width:1500px;height:800px'>
          <p>你的浏览器不支持iframe标签</p>
        </iframe>
      </TabPane>
      <TabPane label="Product Summary Report" icon="logo-codepen">
        <iframe src='http://localhost:4848/single?appid=D:\Qlik\Pricing Profit Margin 4.qvf&sheet=4a3e5efa-8d62-47f2-ae6f-3be33279bae7&opt=currsel&select=clearall' style='border:none;width:1500px;height:800px'>
          <p>你的浏览器不支持iframe标签</p>
        </iframe>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.target{
  width:100%;
  height:100%;
  overflow:hidden;
  padding: 10px;
  background: #fff;
}
.tool-bar{
  width:100%;
  height:32px;
  box-shadow: 0 0 5px #ccc;
  margin-bottom:10px;
  padding: 0 10px;
  .item{
    color:#666;
    height:32px;
    line-height: 32px;
    &:hover{
      color:rgb(40, 122, 245);
    }
    .icon{
      padding: 0 2px;
      height:32px;
      line-height: 32px;
    }
  }
}
</style>
