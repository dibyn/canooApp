import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { Table, Space, Button, message } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
import CreateForm from '../components/CreateForm'

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

export default function Thermostats() {
  const [visible, setVisible] = useState(false)
  const [defaultFormValues, setDefaultFormValues] = useState()
  const [dataSource, setDataSource] = useState(data)
  const isEditForm = typeof defaultFormValues === 'object'
  const getTableData = async () => {
    const response = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API_URL}:8000/list_thermostat`
    )
    response
      .then((response) => {
        setDataSource(response)
        return response
      })
      .catch((error) => error)
  }
  const onCreate = async (data) => {
    const response = await axios.post(
      `http://${process.env.NEXT_PUBLIC_API_URL}:8000/add_thermostat`,
      data
    )
    response
      .then(async (response) => {
        setVisible(false)
        await getTableData()
        message.success('Edit Successful')
        return response
      })
      .catch((error) => error)
  }
  const handleDelete = async (e, id) => {
    e.preventDefault()
    const response = await axios.delete(
      `http://${process.env.NEXT_PUBLIC_API_URL}:8000/delete_thermostat/${id}`
    )
    response
      .then((response) => {
        message.success('Delete Successful')
        getTableData()
        return response
      })
      .catch((error) => error)
  }
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
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => {
        return (
          <Space key={record.key} size='middle'>
            <a
              onClick={(e) => {
                e.preventDefault()
                console.log({ record })
                setVisible(true)
                setDefaultFormValues(record)
              }}
            >
              <EditOutlined />
            </a>
            <a onClick={(e) => handleDelete(e, record.id)}>
              <DeleteOutlined />
            </a>
          </Space>
        )
      },
    },
  ]
  useEffect(() => {
    getTableData()
  }, [])
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
        dataSource={dataSource}
        pagination={false}
      />
      <CreateForm
        key={Math.random()}
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
          setDefaultFormValues()
        }}
        isEditForm={isEditForm}
        defaultFormValues={defaultFormValues}
      />
    </main>
  )
}
