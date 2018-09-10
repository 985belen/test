<template>
    <div class="ag-header-group-cell-label">
      <div class="customHeaderLabel" @click="onclick">{{params.displayName}}</div>
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
          key: 'Cost',
          render: function (h, params) {
            var self = this
            return h('input', {
              domProps: {
                value: params.row.Cost
              },
              on: {
                input: function (event) {
                  self.$emit('input', event.target.value)
                }
              }
            })
          }
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
