import { useState, useEffect } from 'react'
import { Table, Space, Button, message } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
import CreateForm from '../components/CreateForm'
import styles from '../styles/Home.module.css'
export const TableWithModal = (props) => {
  const { columns, eventKey, data } = props
  const [visible, setVisible] = useState(false)
  const [defaultFormValues, setDefaultFormValues] = useState()
  const [dataSource, setDataSource] = useState(data)
  const isEditForm = typeof defaultFormValues === 'object'
  const getData = async () => {
    const response = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API_URL}:8000/list_${eventKey}`
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
      `http://${process.env.NEXT_PUBLIC_API_URL}:8000/add_${eventKey}`,
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
      `http://${process.env.NEXT_PUBLIC_API_URL}:8000/delete_${eventKey}/${id}`
    )
    response
      .then((response) => {
        message.success('Delete Successful')
        getTableData()
        return response
      })
      .catch((error) => error)
  }

  const actions = [
    {
      title: '',
      key: 'action',
      render: (_, record) => {
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
  let __columns = [...columns, ...actions]
  useEffect(() => {
    getData()
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
        columns={__columns}
        dataSource={dataSource}
        pagination={false}
      />
      <CreateForm
        key={eventKey}
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
          setDefaultFormValues()
        }}
        isEditForm={isEditForm}
        defaultFormValues={defaultFormValues}
        eventKey={eventKey}
      />
    </main>
  )
}
export default TableWithModal