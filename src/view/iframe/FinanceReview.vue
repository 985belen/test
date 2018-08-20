<template>

  <div class="target" >
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
