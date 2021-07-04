import React from 'react'
import TableWithModal from '../components/TableWithModal'
const data = [
  {
    key: '1',
    thermostat_name: 'Kitchen',
    temperature: '67 F',
  },
  {
    key: '2',
    thermostat_name: 'Living Room',
    temperature: '75 F',
  },
  {
    key: '3',
    thermostat_name: 'Bathroom',
    temperature: '55 F',
  },
]
const columns = [
  {
    title: 'Thermostats Name',
    dataIndex: 'thermostat_name',
    key: 'thermostat_name',
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
    data={data}
    columns={columns}
    eventKey={'thermostat'}
    key={'thermostat'}
  />
)
export default Thermostats
