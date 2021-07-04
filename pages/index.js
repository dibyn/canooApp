import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Table, Space, Button } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
import CreateForm from '../components/CreateForm'
const columns = [
  {
    title: 'Thermostats Name',
    dataIndex: 'thermostatsName',
    key: 'thermostatsName',
  },
  {
    title: 'Temperature',
    dataIndex: 'temperature',
    key: 'temperature',
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => {
      return (
        <Space key={record.key} size='middle'>
          <a href='#!'>
            <EditOutlined />
          </a>
          <a href='#!'>
            <DeleteOutlined />
          </a>
        </Space>
      )
    },
  },
]
const data = [
  {
    key: '1',
    thermostatsName: 'Kitchen',
    temperature: '67 F',
  },
  {
    key: '2',
    thermostatsName: 'Living Room',
    temperature: '75 F',
  },
  {
    key: '3',
    thermostatsName: 'Bathroom',
    temperature: '55 F',
  },
]

export default function Thermostats() {
  const [visible, setVisible] = useState(false)
  const onCreate = async (data) => {
    const response = await axios.post(
      `http://${process.env.NEXT_PUBLIC_API_URL}:8000/add_thermostat`,
      data
    )
    response
      .then((response) => {
        console.log(response)
        setVisible(false)
      })
      .catch((error) => console.log(error))
  }
  return (
    <main className={styles.main}>
      <Button
        onClick={() => setVisible(true)}
        type='primary'
        shape='circle'
        icon={<PlusOutlined />}
      />
      <Table
        className='no-border-last'
        scroll={{ x: 500, y: 'calc(100vh - 500px)' }}
        pagination={{
          defaultPageSize: 50,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <CreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </main>
  )
}
