import React from 'react'
import TableWithModal from '../components/TableWithModal'
const columns = [
  {
    title: 'Thermostats Name',
    dataIndex: 'thermostatName',
    key: 'thermostatName',
  },
  {
    title: 'Temperature',
    dataIndex: 'temperature',
    key: 'temperature',
    render: (temperature) => <span key={temperature}>{temperature} F</span>,
  },
]
const Thermostats = () => (
  <TableWithModal
    columns={columns}
    eventKey={'thermostat'}
    key={'thermostat'}
    getKey={'thermostat'}
  />
)
export default Thermostats
