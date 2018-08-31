<template>
<div class="newpage">
  <Form :model="FormItem" :label-width="120" :rules="ruleValidate">
    <Row>
      <Col span=21 offset="3">
        <h3>Base Information</h3>
      </Col>
    </Row>
    <Row>
      <Col span=6 offset="3">
        <FormItem label="ID">
          <Input v-model="FormItem.id" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      <Col span=6>
        <FormItem label="Created Date">
          <Input v-model="FormItem.CreatedDate" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      <Col span=6>
        <FormItem label="Last Modified">
          <Input v-model="FormItem.LastModified" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span=6 offset="3">
        <FormItem label="Original Rmap ID">
          <Input v-model="FormItem.OriginalRmapID" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      <Col span=6>
        <FormItem label="Created By">
          <Input v-model="FormItem.CreatedBy" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      <Col span=6>
        <FormItem label="Last Modified by">
          <Input v-model="FormItem.LastModifiedby" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span=15 offset="3">
        <FormItem label="Description" prop="Description">
          <Input v-model="FormItem.Description" type="textarea" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span=9 offset="3">
        <h3>DMU Information</h3>
      </Col>
      <Col span=9 pull=2>
        <h3>Sales Information</h3>
      </Col>
    </Row>
    <Row>
      <Col span=6 offset="3">
        <FormItem label="DMU Name"  prop="DMUName">
          <Input v-model="FormItem.DMUName" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      <Col span=6 offset="1">
        <FormItem label="Channel" prop="Channel">
          <Input v-model="FormItem.Channel" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span=6 offset="3">
        <FormItem label="Business Group">
          <Input v-model="FormItem.BusinessGroup" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      <Col span=6 offset="1">
        <FormItem label="Pricing Group" prop="PricingGroup">
          <Input v-model="FormItem.PricingGroup" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      </Col>
    </Row>
    <Row>
      <Col span=6 offset="3">
        <FormItem label="Country">
          <Input v-model="FormItem.Country" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      <Col span=6 offset="1">
        <FormItem label="Validity Period">
          <Input v-model="FormItem.ValidityPeriod" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span=6 offset="3">
        <FormItem label="Sub Region">
          <Input v-model="FormItem.SubRegion" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Region">
          <Input v-model="FormItem.Region" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Geo">
          <Input v-model="FormItem.Geo" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
      <Col span=6 offset="1">
        <FormItem label="Comments">
          <Input v-model="FormItem.Comments" type="textarea" :rows="6" placeholder="Enter something..."></Input>
        </FormItem>
      </Col>
    </Row>
  </Form>
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
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        DMUName: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ],
        Channel: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ],
        PricingGroup: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ]
      }
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
</style>
