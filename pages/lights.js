import React from 'react'
import { Switch } from 'antd'
import TableWithModal from '../components/TableWithModal'
const columns = [
  {
    title: 'Light Name',
    dataIndex: 'lightName',
    key: 'lightName',
  },
  {
    title: 'Light Status',
    dataIndex: 'lightState',
    key: 'lightState',
    render: (lightState) => (
      <Switch
        key={lightState}
        defaultChecked={lightState}
        checkedChildren='on'
        unCheckedChildren='off'
      />
    ),
  },
  {
    title: 'Light Color',
    dataIndex: 'lightColor',
    key: 'lightColor',
  },
]
const Lights = () => (
  <TableWithModal
    columns={columns}
    eventKey={'light'}
    getKey={'lights'}
    key={'light'}
  />
)
export default Lights
