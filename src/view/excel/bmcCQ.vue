<template>
    <div class="ag-header-group-cell-label">
      <div class="customHeaderLabel" @click="onclick">{{params.displayName}}</div>
      <Modal
        v-model="modelBMC"
        title="BMC"
        :styles="{width:'800px'}"
        ok-text="Apply"
        cancel-text="Cancel">
        <Table border :columns="bmcColumn" :data="bmcData"></Table>
      </Modal>
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      modelBMC: false,
      bmcColumn: [
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
        },
      ],
      bmcData: [
        {
          AdderType: 'MOT',
          Description: 'MIX',
          Cost: 14.73
        },
        {
          AdderType: 'BMC of missing Key part（manually input)',
          Description: '',
          Cost: null
        }
      ]
    }
  },
  methods: {
    onclick () {
      // this.params.hideModal()
      this.modelBMC = true
      // alert(23)
    }
  }
})
</script>
<style scoped>
 
</style>
