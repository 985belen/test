<template>
    <div class="ag-header-group-cell-label">
      <div class="customHeaderLabel" @click="onclick">{{params.displayName}}</div>
      <Modal
        v-model="modelNetBMC"
        title="BMC"
        :styles="{width:'800px'}"
        ok-text="Apply"
        cancel-text="Cancel">
        <Table border :columns="netbmcColumn" :data="netbmcData"></Table>
      </Modal>
    </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      modelNetBMC: false,
      netbmcColumn: [
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
      netbmcData: [
        {
          AdderType: 'Backend Funding',
          Description: 'Intel Core i5-7500T 2.7G 4C',
          Cost: 2
        },
        {
          AdderType: 'Segment Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'Customer Funding',
          Description: '',
          Cost: 10
        },
        {
          AdderType: 'Special Funding(manually input)',
          Description: '',
          Cost: null
        }
      ]
    }
  },
  methods: {
    onclick () {
      // this.params.hideModal()
      this.modelNetBMC = true
      // alert(23)
    }
  }
})
</script>
<style scoped>
 
</style>
