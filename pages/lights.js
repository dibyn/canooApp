import React from 'react'
import { Switch } from 'antd'
import TableWithModal from '../components/TableWithModal'
const columns = [
  {
    title: 'Light Name',
    dataIndex: 'light_name',
    key: 'light_name',
  },
  {
    title: 'Light Status',
    dataIndex: 'light_state',
    key: 'light_state',
    render: (light_state) => (
      <Switch
        key={light_state}
        defaultChecked={light_state}
        checkedChildren='on'
        unCheckedChildren='off'
      />
    ),
  },
  {
    title: 'Light Color',
    dataIndex: 'light_color',
    key: 'light_color',
  },
]
const data = [
  {
    key: '1',
    light_name: 'Kitchen Light',
    light_state: true, //boolean
    light_color: 'red',
  },
  {
    key: '2',
    light_name: 'Living Room Light',
    light_state: false, //boolean
    light_color: 'blue',
  },
  {
    key: '3',
    light_name: 'Bathroom Light',
    light_state: true, //boolean
    light_color: 'yellow',
  },
]
const Lights = () => (
  <TableWithModal
    data={data}
    columns={columns}
    eventKey={'light'}
    key={'light'}
  />
)
export default Lights
