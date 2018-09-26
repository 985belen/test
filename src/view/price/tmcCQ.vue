<template>
    <div class="ag-header-group-cell-label">
      <a href="#" class="customHeaderLabel" @click="onclick">{{params.displayName}}</a>
      <Modal v-model="modelTMC" width="800">
      <p slot="header">
        <span>Total Cost</span>
      </p>
      <div style="text-align:center">
        <Table border :columns="tmcColumn" :data="tmcData"></Table>
      </div>
      <div slot="footer">
        <!-- <Button type="error" size="large" @click="del">Delete</Button> -->
      </div>
    </Modal>
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      modelTMC: false,
      tmcColumn: [
        {
          title: 'Adder Type',
          key: 'AdderType'
        },
        {
          title: 'Description',
          key: 'Description'
        },
        {
          title: 'Cost',
          key: 'Cost'
        }
      ],
      tmcData: [
        {
          AdderType: 'Warranty Cost',
          Description: '3 year',
          Cost: 67.1
        },
        {
          AdderType: 'Non-BMC Uplift',
          Description: '',
          Cost: 0
        },
        {
          AdderType: 'E&O',
          Description: '',
          Cost: 3.29
        },
        {
          AdderType: 'GSC Real Cost Group',
          Description: '',
          Cost: 0
        },
        {
          AdderType: 'Country Adjustment',
          Description: '',
          Cost: 0
        }
      ]
    }
  },
  methods: {
    onclick () {
      this.modelTMC = true
    }
  }
})
</script>
<style scoped>
 .customHeaderLabel{
   display: block;
   width: 100%;
   height: 100%
 }
</style>
