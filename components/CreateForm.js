import React, { useEffect } from 'react'
import { Modal, Form, Input, Switch, Radio } from 'antd'
const CreateForm = ({
  eventKey,
  visible,
  onCreate,
  onCancel,
  defaultFormValues,
  isEditForm,
}) => {
  const [form] = Form.useForm()
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
        renderComponent: <Input placeholder={'ex. 105'} />,
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
          <Switch
            defaultChecked={defaultFormValues?.light_state}
            checkedChildren='on'
            unCheckedChildren='off'
          />
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
          <Radio.Group>
            {['red', 'orange', 'yellow', 'green', 'blue'].map((value) => (
              <Radio.Button value={value}>{value.toUpperCase()}</Radio.Button>
            ))}
          </Radio.Group>
        ),
      },
    ],
  }
  useEffect(() => {
    form.resetFields()
    if (defaultFormValues) {
      form.setFieldsValue(defaultFormValues)
    }
    return () => form.resetFields()
  }, [defaultFormValues])
  return (
    <Modal
      visible={visible}
      title={`${
        isEditForm ? `Update ${eventKey}` : `Create a new ${eventKey}`
      } `}
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
            const response = onCreate(values)
            response.then((v) => {
              v && form.resetFields()
            })
          })
          .catch((info) => info)
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
