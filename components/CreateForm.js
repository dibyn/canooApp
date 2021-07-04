import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'
const CreateForm = ({
  visible,
  onCreate,
  onCancel,
  defaultFormValues,
  isEditForm,
}) => {
  const [form] = Form.useForm()
  useEffect(() => {
    console.log({isEditForm})
    form.resetFields()
    if (isEditForm) {
      form.setFieldsValue(defaultFormValues)
    }
    return () => form.resetFields()
  }, [defaultFormValues])
  return (
    <Modal
      visible={visible}
      title={`${isEditForm ? 'Update thermostat' : 'Create a new thermostat'} `}
      okText={isEditForm ? 'Update' : 'Create'}
      cancelText='Cancel'
      onCancel={() => {
        form.resetFields()
        onCancel()
      }}
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
      <Form
        form={form}
        layout='vertical'
        name='form_in_modal'
        initialValues={defaultFormValues}
      >
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
          <Input placeholder={'ex. Kitchen'} />
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
          <Input placeholder={'ex. 55'} type={'number'} suffix='F' />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default CreateForm
