import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import 'antd/lib/table/style/css'
import 'antd/lib/icon/style/css'
import {Table, Icon} from 'antd'
import _ from 'lodash'

const columns = [
  {id: 'fullName', fixed: true, width: 120},
  {id: 'ssn'},
  {id: 'firstName'},
  {id: 'lastName'},
  {id: 'dateOfBirth', label: 'birth date'},
  {id: 'phone'},
  {id: 'street'},
  {id: 'city'},
  {id: 'state'},
  {id: 'zip'},
  {
    fixed: 'right',
    render: (field, record) => <Icon type="link" />
  }
]

const _columns = _.transform(columns, (result, val) => {
  result.push({title: val.id, dataIndex: val.id, sorter: val.id, ...val})
})

const rowKey = record => record.id

const page = {
  data: [
    {
      fullName: 'John Doe',
      ssn: '000-00-0000',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '2016-12-31T20:32:31.742Z',
      phone: '000-000-0000',
      street: '10 Main St',
      city: 'Plainville',
      state: 'CA',
      zip: '01001'
    }
  ],
  total: 1,
  query: {limit: 5},
  active: false
}

storiesOf('Table', module).add('with fixed columns', () => {
  return (
    <Table
      columns={_columns}
      rowKey={rowKey}
      dataSource={page.data}
      pagination={{total: page.total, pageSize: page.query.limit}}
      loading={page.active}
      scroll={{x: 1200, y: 500}}
    />
  )
})
