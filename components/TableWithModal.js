import { useState, useEffect } from 'react'
import { Table, Space, Button, message, Form } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
import CreateForm from '../components/CreateForm'
import styles from '../styles/Home.module.css'
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export const TableWithModal = (props) => {
  const [form] = Form.useForm()
  const { columns, eventKey, getKey } = props
  const [visible, setVisible] = useState(false)
  const [defaultFormValues, setDefaultFormValues] = useState()
  const [dataSource, setDataSource] = useState()
  const isEditForm = typeof defaultFormValues === 'object'
  const getData = async () => {
    axios
      .get(`http://${process.env.NEXT_PUBLIC_API_URL}:8000/list_${getKey}`)
      .then((response) => {
        setDataSource(response.data)
        return response
      })
      .catch((error) => error)
  }
  const onCreate = async (data) => {
    axios
      .post(
        `http://${process.env.NEXT_PUBLIC_API_URL}:8000/${
          isEditForm ? 'update' : 'add'
        }_${eventKey}`,
        data
      )
      .then(async (response) => {
        setVisible(false)
        await getData()
        form.resetFields()
        message.success(
          `${capitalizeFirstLetter(eventKey)} ${
            isEditForm ? 'edited' : 'added'
          } successful`
        )
        return response
      })
      .catch((error) =>
        message.error(`${isEditForm ? 'Update' : 'Add'} unsuccessful`)
      )
  }
  const handleDelete = async (e, id) => {
    e.preventDefault()
    axios
      .delete(
        `http://${process.env.NEXT_PUBLIC_API_URL}:8000/delete_${eventKey}/${id}`
      )
      .then((response) => {
        message.success('Delete successful')
        getData()
        return response
      })
      .catch((error) => message.error(`delete unsuccessful`))
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
    <>
      <Button
        onClick={() => setVisible(true)}
        type='primary'
        // shape='circle'
        icon={<PlusOutlined />}
      >{`Add ${eventKey}`}</Button>
      <main className={styles.main}>
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
          form={form}
        />
      </main>
    </>
  )
}
export default TableWithModal
