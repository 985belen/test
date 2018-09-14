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
            // console.log(params.row.AdderType)
            // if (!params.row._index) {
            //   return h('div', params.row.AdderType)
            // } else {
              var self = this
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
            // }
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
            if (params.row._index !==7) {
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
          AdderType: 'Backend CPU Funding',
          Description: 'Intel Core i5',
          Cost: 2
        },
        {
          AdderType: 'Backend HDD Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'Backend Other Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'Customer Funding',
          Description: '',
          Cost: 10
        },
        {
          AdderType: 'Geo Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'Region Funding',
          Description: '',
          Cost: null
        },
        {
          AdderType: 'WW Funding',
          Description: '',
          Cost: null
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
      this.modelNetBMC = true
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
