<template>
    <div class="ag-header-group-cell-label">
      <a href="#" class="customHeaderLabel" @click="onclick">{{params.displayName}}</a>
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
          key: 'AdderType',
          render: function (h, params) {
            // console.log(params.row.AdderType)
            if (!params.row._index) {
              return h('div', params.row.AdderType)
            } else {
              return h('div', [
                h('Checkbox', {
                  props: {
                    size: 'large'
                  },
                  style: {
                    marginRight: '5px'
                  }
              }, params.row.AdderType)
            ])
            }
          }
        },
        {
          title: 'Description',
          key: 'Description'
        },
        {
          title: 'Cost',
          key: 'Cost',
          render: function (h, params) {
            // console.log(params.row.Cost)
            if (!params.row._index) {
              return h('div', params.row.Cost)
            } else {
              return h('Input', {
                props: {
                  size: 'small'
                }
              })
            }
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
          AdderType: 'BMC of missing Key part',
          Description: '',
          Cost: null
        }
      ]
    }
  },
  methods: {
    onclick () {
      this.modelBMC = true
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
