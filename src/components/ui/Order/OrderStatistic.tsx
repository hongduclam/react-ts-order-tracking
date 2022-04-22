import React, {FC} from 'react';
import {Col, Row, Statistic} from "antd";

interface OrderStatisticProps {
  total: number,
  totalLate: number,
  totalWarn: number
}

const OrderStatistic: FC<OrderStatisticProps> = ({total, totalLate, totalWarn}) => {
  return (<>
    <Row gutter={16}>
      <Col span={8}>
        <Statistic title="Total" value={total}/>
      </Col>
      <Col span={8}>
        <Statistic title="Total Warn" value={totalWarn}/>
      </Col>
      <Col span={8}>
        <Statistic title="Total Late" value={totalLate}/>
      </Col>
    </Row>
  </>);
};

export default OrderStatistic;
