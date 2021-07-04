import React from 'react'
import { Modal, Form, Input } from 'antd'
const CreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title='Create a new thermostat'
      okText='Create'
      cancelText='Cancel'
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form form={form} layout='vertical' name='form_in_modal'>
        <Form.Item
          name='thermostat_name'
          label='Thermostat Name'
          rules={[
            {
              required: true,
              message: 'Please input the name of thermostat!',
            },
          ]}
        >
          <Input placeholder={'Name of the thermostat'} />
        </Form.Item>
        <Form.Item
          name='temperature'
          label='Temperature'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder={'temperature'} type={'number'} suffix='F' />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default CreateForm
