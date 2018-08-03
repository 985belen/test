import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'

export const getTableData = req => {
  let tableData = []
  doCustomTimes(15, () => {
    tableData.push(Mock.mock({
      name: '@name',
      email: '@email',
      createTime: '@date'
    }))
  })
  return {
    code: 200,
    data: tableData,
    msg: ''
  }
}
