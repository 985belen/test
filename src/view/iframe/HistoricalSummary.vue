<template>

  <div class="target" >
    <!-- <iframe src='http://localhost:4848/single?appid=D:\Qlik\Pricing Profit Margin 2.qvf&sheet=512b74d1-d88f-46c2-ac4e-a051d8d9e417&opt=currsel&select=clearall' style='border:none;width:1500px;height:800px'>
      <p>你的浏览器不支持iframe标签</p>
    </iframe> -->
    <Tabs>
      <TabPane label="Historical Data" icon="md-bookmarks">
        <iframe src='http://localhost:4848/single?appid=D:\Qlik\Pricing Profit Margin 2.qvf&sheet=512b74d1-d88f-46c2-ac4e-a051d8d9e417&opt=currsel&select=clearall' style='border:none;width:1500px;height:800px'>
          <p>你的浏览器不支持iframe标签</p>
        </iframe>
      </TabPane>
      <TabPane label=" Historical Data Analysis" icon="logo-codepen">
        <iframe src='http://localhost:4848/single?appid=D:\QlikPricing Profit Margin 2.qvf&sheet=dccedc74-f12a-47bd-8d80-a9d2bc66ef67&opt=currsel&select=clearall' style='border:none;width:1500px;height:800px'>
          <p>你的浏览器不支持iframe标签</p>
        </iframe>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
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
</style>
