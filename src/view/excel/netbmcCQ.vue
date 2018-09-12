<template>
    <div class="ag-header-group-cell-label">
      <a href="#" class="customHeaderLabel" @click="onclick">{{params.displayName}}</a>
      <Modal
        v-model="modelNetBMC"
        title="Net BMC"
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
          key: 'AdderType',
          render: function (h, params) {
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
            if (params.row._index !==2) {
              return h('div', params.row.Cost)
            } else {
              return h('Input', {
                props: {
                  size: 'small'
                }
              })
            }
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
          AdderType: 'Customer Funding',
          Description: '',
          Cost: 10
        },
        {
          AdderType: 'Special Funding',
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
