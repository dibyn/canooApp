import React, { useEffect } from 'react'
import { Modal, Form, Input, Switch, Select } from 'antd'
const CreateForm = ({
  eventKey,
  visible,
  onCreate,
  onCancel,
  defaultFormValues,
  isEditForm,
}) => {
  const [form] = Form.useForm()
  useEffect(() => {
    form.resetFields()
    if (isEditForm) {
      form.setFieldsValue(defaultFormValues)
    }
    return () => form.resetFields()
  }, [defaultFormValues])
  const formProps = {
    thermostat: [
      {
        name: 'thermostat_name',
        label: 'Thermostat name',
        rules: [
          {
            required: true,
            message: 'Please input the name of thermostat!',
          },
        ],
        renderComponent: <Input placeholder={'ex. Kitchen'} />,
      },
      {
        name: 'temperature',
        label: 'Temperature',
        rules: [
          {
            required: true,
            message: 'Please input the name of thermostat!',
          },
        ],
        renderComponent: <Input placeholder={'ex. Kitchen'} />,
      },
    ],
    light: [
      {
        name: 'light_name',
        label: 'Light name',
        rules: [
          {
            required: true,
            message: 'Please input the name of light!',
          },
        ],
        renderComponent: <Input placeholder={'ex. Kitchen Light'} />,
      },
      {
        name: 'light_state',
        label: 'Light state',
        rules: [
          {
            required: true,
          },
        ],
        renderComponent: (
          <Switch checkedChildren='on' unCheckedChildren='off' />
        ),
      },
      {
        name: 'light_color',
        label: 'Light color',
        rules: [
          {
            required: true,
            message: 'Please select the light color!',
          },
        ],
        renderComponent: (
          <Select placeholder={'select the light color'}>
            {['Red', 'Orange', 'Yellow', 'Green', 'Blue'].map((v) => (
              <Select.Option>{v}</Select.Option>
            ))}
          </Select>
        ),
      },
    ],
  }
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
      <Form form={form} layout='vertical' name='form_in_modal'>
        {formProps[eventKey].map(({ label, name, rules, renderComponent }) => (
          <Form.Item label={label} name={name} rules={rules}>
            {renderComponent}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  )
}
export default CreateForm
