<template>
    <div class="ag-header-group-cell-label">
      <a href="#" class="customHeaderLabel" @click="onclick">{{params.displayName}}</a>
      <Modal
        v-model="modelCostAdjustment"
        title="Cost Adjustment"
        :styles="{width:'800px'}"
        ok-text="Apply"
        cancel-text="Cancel">
        <Table border :columns="CostAdjustmentColumn" :data="CostAdjustmentData"></Table>
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
      // this.params.hideModal()
      this.modelCostAdjustment = true
      // alert(23)
    }
  }
})
</script>
<style scoped>
 
</style>
