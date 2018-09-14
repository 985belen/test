<template>
    <div class="ag-header-group-cell-label">
      <a href="#" class="customHeaderLabel" @click="onclick">{{params.displayName}}</a>
      <Modal v-model="modelCostAdjustment" width="800">
        <p slot="header">
          <span>Cost Adjustment</span>
        </p>
        <div style="text-align:center">
          <Table border :columns="CostAdjustmentColumn" :data="CostAdjustmentData"></Table>
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
      modelCostAdjustment: false,
      CostAdjustmentColumn: [
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
      CostAdjustmentData: [
        {
          AdderType: 'MOT',
          Description: 'Ocean',
          Cost: 3.04
        },
        {
          AdderType: 'Customer Funding',
          Description: '',
          Cost: 10
        }
      ]
    }
  },
  methods: {
    onclick () {
      this.modelCostAdjustment = true
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
