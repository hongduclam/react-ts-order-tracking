import React, {FC} from 'react';
import {Button, Col, Form, Input, Row, Select, Checkbox} from 'antd';
import {CUSTOMER_STATUS} from "../../../constants";

interface OrderFilterProps {
  onFinish: (values: any) => void
}

const {Option} = Select;

const OrderFilter: FC<OrderFilterProps> = ({onFinish}) => {
  const [form] = Form.useForm();

  return (<>
    <Form
      form={form}
      onFinish={onFinish}
    >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            name={`id`}
            label={`ID`}
          >
            <Input placeholder="ID"/>
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name={`riderName`}
            label={`Rider Name`}
          >
            <Input placeholder="Rider name"/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`merchantName`}
            label={`Merchant Name`}
          >
            <Input placeholder="Merchant name"/>
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name={`customerName`}
            label={`Customer Name`}
          >
            <Input placeholder="Customer Name"/>
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name={`customerStatus`}
            label={`Customer Status`}
          >
            <Select allowClear>
              {
                Object.values(CUSTOMER_STATUS).map(status => {
                  return <Option value={status} key={status}>{status}</Option>
                })
              }
            </Select>
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item
            name={`updatedTime`}
            label={`Updated Time`}
          >
            <Select allowClear>
              <Option value={5}>Last 5 minutes</Option>
              <Option value={10}>Last 10 minutes</Option>
              <Option value={15}>Last 15 minutes</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label={`Order late status`}
            name={`lateOrder`}
          >
            <Select allowClear>
              <Option value={'normal'}>Normal</Option>
              <Option value={'warn'}>Warn</Option>
              <Option value={'late'}>Late</Option>
            </Select>
          </Form.Item>
        </Col>

      </Row>
      <Row>
        <Col span={24} style={{textAlign: 'right'}}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{margin: '0 8px'}}
            onClick={() => {
              form.resetFields();
              onFinish({})
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  </>);
};

export default OrderFilter;
