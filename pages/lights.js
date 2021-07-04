import React from 'react'
import axios from 'axios'
import { Switch, message } from 'antd'
import TableWithModal from '../components/TableWithModal'
const columns = [
  {
    title: 'Light Name',
    dataIndex: 'lightName',
    key: 'lightName',
  },
  {
    title: 'Light Status',
    dataIndex: 'lightState',
    key: 'lightState',
    render: (lightState, record) => (
      <Switch
        key={lightState}
        defaultChecked={lightState}
        checkedChildren='on'
        unCheckedChildren='off'
        onChange={(_lightState) =>
          axios
            .post(
              `http://${process.env.NEXT_PUBLIC_API_URL}:8000/update_light`,
              {
                light_state: _lightState,
                id: record.id,
              }
            )
            .then(async (response) => {
              message.success(response.data.message)
              return response
            })
            .catch((error) => error)
        }
      />
    ),
  },
  {
    title: 'Light Color',
    dataIndex: 'lightColor',
    key: 'lightColor',
  },
]
const Lights = () => (
  <TableWithModal
    columns={columns}
    eventKey={'light'}
    getKey={'lights'}
    key={'light'}
  />
)
export default Lights
