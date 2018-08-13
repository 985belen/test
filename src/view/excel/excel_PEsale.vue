<template>
<div class="newpage">
  <Form :model="FormItem" :label-width="120" :rules="ruleValidate">
    <Row>
      <Col span=3 >
        <h3>PE Information</h3>
      </Col>
      <Col span=12 offset="3">
        <img src="./pic1.png"/>
      </Col>
    </Row>
    <Row>
      <Col span=5 offset="1">
        <strong>System Volume: </strong><span>450</span>
      </Col>
      <Col span=5>
        <strong>Gross Revenue: </strong><span>347100</span>
      </Col>
      <Col span=5>
        <strong>Net Revenue: </strong><span>347100</span>
      </Col>
      <Col span=5>
        <strong>TMC Margin: </strong><span>35524</span>
      </Col>
    </Row>
    <Row>
      <Col span=5 offset="1">
        <strong>Currency: </strong><span>USD</span>
      </Col>
      <Col span=5>
        <strong>Pricing Group: </strong><span>B1</span>
      </Col>
      <Col span=5>
        <strong>Created By: </strong><span>sumer</span>
      </Col>
      <Col span=5>
        <strong>Description: </strong><span>RFP Coop August 2018</span>
      </Col>
    </Row>
    <Row>
      <Col span=3 >
        <h3>Summary Information</h3>
      </Col>
    </Row>
    <Row></Row>
    <Row>
      <Col span=3>
        <strong>System Volume: </strong><span>440</span>
      </Col>
      <Col span=3>
        <strong>Gross Revenue: </strong><span>337100</span>
      </Col>
      <Col span=3>
        <strong>Net Revenue: </strong><span>337100</span>
      </Col>
      <Col span=3>
        <strong>TMC Margin: </strong><span>33323</span>
      </Col>
      <Col span=3>
        <strong>TMC Margin %: </strong><span>10.2</span>
      </Col>
      <Col span=9>
        <Button type="primary" size="small" @click="modeldetail = true">Summary Detail</Button>
        <Button type="primary" size="small" @click="modelProduct = true">Summary By Product</Button>
        <Button type="primary" size="small" @click="modelBrand = true">Summary By Brand</Button>
        <Button type="primary" size="small" @click="importTransaction">Import Transaction</Button>
      </Col>
    </Row>
  </Form>
  <Table style="margin:10px auto" height='500' width="100%" border :columns="columns" :data="data"></Table>
   <Modal
      v-model="modeldetail"
      :styles="{width:'800px'}"
      title="Financial Summary"
      ok-text="OK"
      cancel-text="Cancel">
      <Table border height="380" :columns="detailcolumns1" :data="detaildata1"></Table>
      <Divider />
      <Table border :columns="detailcolumns2" :data="detaildata2"></Table>
      <Divider />
      <Table border :columns="detailcolumns3" :data="detaildata3"></Table>
    </Modal>
   <Modal
      v-model="modelProduct"
      title="Summary by Product"
      :styles="{width:'1250px'}"
      ok-text="OK"
      cancel-text="Cancel">
      <Table border :columns="productcolumns1" :data="productdata1"></Table>
    </Modal>
   <Modal
      v-model="modelBrand"
      title="Summary by Brand"
      :styles="{width:'800px'}"
      ok-text="OK"
      cancel-text="Cancel">
      <div style="width:100%;height:auto;overflow:hidden;">
        <ul>
          <li>
            <strong>Total Gross Revenue</strong>
            <span>555,480</span>
          </li>
          <li>
            <strong>Total Net Revenue</strong>
            <span>555,480</span>
          </li>
          <li>
            <strong>Total TMC Profit</strong>
            <span>-2,954,341</span>
          </li>
          <li>
            <strong>TMC Profit %</strong>
            <span>-531.9%</span>
          </li>
        </ul>
        <ul>
          <li>
          <strong>Notebook Option Attach Rate</strong>
            <span>40.3%</span>
          </li>
          <li>
            <strong>Desktop Option Attach Rate</strong>
            <span>0.0%</span>
          </li>
          <li>
            <strong>Services Pen Rate</strong>
            <span>0.0%</span>
          </li>
          <li>
            <strong>Mobile Mix</strong>
            <span>98.6%</span>
          </li>
        </ul>
      </div>
      <Table style="margin:10px auto" height='300' width="100%" :columns="Brandcolumns" :data="Branddata"></Table>
    </Modal>
</div>
</template>
<script>
export default {
  data () {
    return {
      FormItem: {
        id: '',
        CreatedDate: '2018/8/8 11:05:51',
        LastModified: '2018/8/8 11:05:51',
        OriginalRmapID: '',
        CreatedBy: 'sumer',
        LastModifiedby: 'sumer',
        Description: '',
        DMUName: '',
        Channel: '',
        Comments: '',
        SubRegion: '',
        Country: '',
        ValidityPeriod: '',
        PricingGroup: '',
        BusinessGroup: '',
        Geo: '',
        Region: ''
      },
      ruleValidate: {
        Description: [
          { required: true, message: 'The Description cannot be empty', trigger: 'blur' }
        ],
        DMUName: [
          { required: true, message: 'DMUName cannot be empty', trigger: 'blur' }
        ],
        Channel: [
          { required: true, message: 'Channel cannot be empty', trigger: 'blur' }
        ],
        PricingGroup: [
          { required: true, message: 'PricingGroup cannot be empty', trigger: 'blur' }
        ]
      },
      modeldetail: false,
      modelProduct: false,
      modelBrand: false,
      columns: [
        {
          title: 'ID',
          width: 80,
          key: 'id',
          fixed: 'left',
          align: 'center'
        }, {
          title: 'Quarter',
          fixed: 'left',
          key: 'quarter',
          width: 100,
          align: 'center'
        },
        {
          title: 'Brand',
          key: 'brand',
          align: 'center',
          width: 100
        },
        {
          title: 'Brand Summary',
          width: 100,
          key: 'brsum',
          align: 'center'
        },
        {
          title: 'Sub-Series',
          width: 100,
          key: 'subser',
          align: 'center'
        },
        {
          title: 'Product No.',
          width: 120,
          key: 'prono',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.$router.push('/excel/excel_listpage')
                  }
                }
              }, params.row.prono)
            ])
          }
        },
        {
          title: 'Product Desc',
          width: 120,
          key: 'prodesc',
          align: 'center'
        },
        {
          title: 'Vol',
          key: 'vol',
          width: 100,
          align: 'center'
        },
        {
          title: 'List Price',
          width: 100,
          key: 'listpri',
          align: 'center'
        },
        {
          title: 'Stnd Price',
          width: 100,
          key: 'stndpri',
          align: 'center'
        },
        {
          title: 'Request price',
          width: 120,
          key: 'respri',
          align: 'center'
        },
        {
          title: 'Estimation Price',
          width: 135,
          key: 'estpri',
          align: 'center'
        },
        {
          title: 'Final Price',
          width: 100,
          key: 'finalpri',
          align: 'center'
        },
        {
          title: 'Discount %',
          width: 100,
          key: 'disc',
          align: 'center'
        },
        {
          title: 'BMC',
          width: 100,
          key: 'bmc',
          align: 'center'
        },
        {
          title: 'TMC',
          width: 100,
          key: 'tmc',
          align: 'center'
        },
        {
          title: 'BMC Margin',
          width: 110,
          key: 'bmcmar',
          align: 'center'
        },
        {
          title: 'TMC Margin',
          width: 110,
          key: 'tmcmar',
          align: 'center'
        },
        {
          title: 'BMC %',
          width: 100,
          key: 'bmcb',
          align: 'center'
        },
        {
          title: 'TMC %',
          width: 100,
          key: 'tmcb',
          align: 'center'
        },
        {
          title: 'GR',
          width: 100,
          key: 'gr',
          align: 'center'
        },
        {
          title: 'GR Reduce %',
          width: 110,
          key: 'grre',
          align: 'center'
        },
        {
          title: 'Net Revenue',
          width: 100,
          key: 'netre',
          align: 'center'
        },
        {
          title: 'PTI',
          width: 100,
          key: 'pti',
          align: 'center'
        },
        {
          title: 'PTI Profit',
          width: 100,
          key: 'ptipro',
          align: 'center'
        },
        {
          title: 'PTI Margin',
          width: 100,
          key: 'ptimar',
          align: 'center'
        }
      ],
      data: [
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        },
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        },
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        },
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        },
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        },
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        },
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        },
        {
          id: 1,
          quarter: 'F1Q 18/19',
          brand: 'ThinkPad Classic',
          brsum: 'Notebook',
          subser: 'X280',
          prono: '20KECTO1WW config',
          prodesc: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          vol: '300',
          listpri: '10641.64',
          stndpri: '10641.64',
          respri: '817',
          estpri: '850',
          finalpri: '0',
          disc: '1',
          bmc: '786.03',
          tmc: '801.7',
          bmcmar: '19.69',
          tmcmar: '19.69',
          bmcb: '2.00',
          tmcb: '2.00',
          gr: '4875',
          grre: '0',
          netre: '4875',
          pti: '1075.23',
          ptipro: '-100.23',
          ptimar: '-10.30%'
        }
      ],
      detailcolumns1: [
        {
          title: ' ',
          key: 'f0q',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'F1Q 18/19',
          key: 'f1q',
          align: 'center'
        },
        {
          title: 'F2Q 18/19',
          key: 'f2q',
          align: 'center'
        },
        {
          title: 'F3Q 18/19',
          key: 'f3q',
          align: 'center'
        },
        {
          title: 'F4Q 18/19',
          key: 'f4q',
          align: 'center'
        },
        {
          title: 'Total',
          key: 'total',
          align: 'center',
          className: 'pxt'
        }
      ],
      detaildata1: [
        {
          f0q: 'System Volume',
          f1q: 1110,
          f2q: 1110,
          f3q: 1110,
          f4q: 1110,
          total: 4440
        },
        {
          f0q: 'Gross Revenue',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Net Revenue',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'BMC GP',
          f1q: -696028,
          f2q: -696457,
          f3q: -697436,
          f4q: -698551,
          total: -2788472
        },
        {
          f0q: '%',
          f1q: '-501.2%',
          f2q: '-501.5%',
          f3q: '-502.2%',
          f4q: '-503.0%',
          total: '-502.0%'
        },
        {
          f0q: 'TMC GP',
          f1q: -736835,
          f2q: -738145,
          f3q: -739124,
          f4q: -740237,
          total: -2954341
        },
        {
          f0q: '%',
          f1q: '-501.2%',
          f2q: '-501.5%',
          f3q: '-502.2%',
          f4q: '-503.0%',
          total: '-502.0%'
        },
        {
          f0q: 'PTI',
          f1q: -736835,
          f2q: -738145,
          f3q: -739124,
          f4q: -740237,
          total: -2954341
        },
        {
          f0q: '%',
          f1q: '-501.2%',
          f2q: '-501.5%',
          f3q: '-502.2%',
          f4q: '-503.0%',
          total: '-502.0%'
        }
      ],
      detailcolumns2: [
        {
          title: 'Total System Volumes',
          key: 'tsv',
          align: 'center'
        },
        {
          title: ' ',
          key: 'tsvv',
          align: 'center'
        }
      ],
      detaildata2: [
        {
          tsv: 'Desktop',
          tsvv: 0
        },
        {
          tsv: 'Notebook',
          tsvv: 4380
        },
        {
          tsv: 'Workstation',
          tsvv: 60
        },
        {
          tsv: 'Server',
          tsvv: 0
        }
      ],
      detailcolumns3: [
        {
          title: 'Roadmap Metrics',
          key: 'tsv',
          align: 'center'
        },
        {
          title: ' ',
          key: 'tsvv',
          align: 'center'
        }
      ],
      detaildata3: [
        {
          tsv: 'Notebook Option Attach',
          tsvv: '40.3%'
        },
        {
          tsv: 'Desktop Option Attach',
          tsvv: '0.0%'
        },
        {
          tsv: 'Services Pen Rate',
          tsvv: '0.0%'
        },
        {
          tsv: 'Mobile Mix',
          tsvv: '98.6%'
        }
      ],
      productcolumns1: [
        {
          title: 'Part#',
          key: 'part',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'Product Brand',
          key: 'pb',
          align: 'center'
        },
        {
          title: 'Product Desc',
          key: 'pd',
          align: 'center'
        },
        {
          title: 'Total Volume',
          key: 'tv',
          align: 'center'
        },
        {
          title: 'Wtd Average List',
          key: 'wal',
          align: 'center'
        },
        {
          title: 'Wtd Average Price',
          key: 'wap',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'Wtd Average TMC Cost',
          key: 'watc',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'TMC GP',
          key: 'tg',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'TMC GP%',
          key: 'tgb',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'Total Gross Revenue',
          key: 'tgr',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'Total Net Revenue',
          key: 'tnr',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'Total TMC GP',
          key: 'ttg',
          align: 'center',
          className: 'pxt'
        }
      ],
      productdata1: [
        {
          part: '20KECTO1WW',
          pb: 'ThinkPad Classic',
          pd: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          tv: 1200,
          wal: 10642,
          wap: 0,
          watc: 805,
          tg: -805,
          tgb: 0,
          tgr: 0,
          tnr: 0,
          ttg: -965940
        },
        {
          part: '20KECTO1WW',
          pb: 'ThinkPad Classic',
          pd: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          tv: 1200,
          wal: 10642,
          wap: 0,
          watc: 805,
          tg: -805,
          tgb: 0,
          tgr: 0,
          tnr: 0,
          ttg: -965940
        },
        {
          part: '20KECTO1WW',
          pb: 'ThinkPad Classic',
          pd: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          tv: 1200,
          wal: 10642,
          wap: 0,
          watc: 805,
          tg: -805,
          tgb: 0,
          tgr: 0,
          tnr: 0,
          ttg: -965940
        },
        {
          part: '20KECTO1WW',
          pb: 'ThinkPad Classic',
          pd: 'Notebook ThinkPad X280 20KECTO1WW Rx',
          tv: 1200,
          wal: 10642,
          wap: 0,
          watc: 805,
          tg: -805,
          tgb: 0,
          tgr: 0,
          tnr: 0,
          ttg: -965940
        }
      ],
      Brandcolumns: [
        {
          title: ' ',
          key: 'f0q',
          align: 'center',
          className: 'pxt'
        },
        {
          title: 'F1Q 18/19',
          key: 'f1q',
          align: 'center'
        },
        {
          title: 'F2Q 18/19',
          key: 'f2q',
          align: 'center'
        },
        {
          title: 'F3Q 18/19',
          key: 'f3q',
          align: 'center'
        },
        {
          title: 'F4Q 18/19',
          key: 'f4q',
          align: 'center'
        },
        {
          title: 'Total',
          key: 'total',
          align: 'center',
          className: 'pxt'
        }
      ],
      Branddata: [
        {
          f0q: 'Roadmap Total',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Desktop Systems',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Desktop Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Desktop',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Notebook Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Notebook',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Workstation',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Workstation Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Workstation',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Server',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Server Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Server',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Visuals',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Volume',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Visual Options',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Visuals',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Services',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Software',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Other',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Services/Other',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Total Branded',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        },
        {
          f0q: 'Non Branded',
          f1q: '',
          f2q: '',
          f3q: '',
          f4q: '',
          total: ''
        },
        {
          f0q: 'Revenue',
          f1q: 0,
          f2q: 0,
          f3q: 0,
          f4q: 0,
          total: 0
        },
        {
          f0q: 'Margin',
          f1q: 138870,
          f2q: 138870,
          f3q: 138870,
          f4q: 138870,
          total: 555480
        },
        {
          f0q: 'Margin %',
          f1q: '100%',
          f2q: '100%',
          f3q: '100%',
          f4q: '100%',
          total: '100%'
        }
      ]
    }
  },
  methods: {
    importTransaction () {
      this.$router.push('/excel/excel_importTransaction')
    }
  }
}
</script>
<style lang="less">
.newpage
{
  width:100%;
  height:100%;
  padding: 10px;
  background:#fff;
}
ul{
  width: 48%;
  float: left;
  padding: 0 20px;
  &:nth-child(1) {
    border-right:1px solid blue;
  }
  li{
    list-style: none;
    height:30px;
    line-height: 30px;
    strong{
      margin-right:5px
    }
    span{
      float: right;
    }
  }
}

</style>
