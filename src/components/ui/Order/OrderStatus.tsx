import React, { FC } from 'react';
import { Tag, Divider } from 'antd';
import {STATUS_COLORS} from "../../../constants";

interface OrderStatusProps {
  status: string
}

const OrderStatus: FC<OrderStatusProps> = ({status}) => {
  return (<>
    <Tag color={STATUS_COLORS[status]}>{status}</Tag>
  </>);
};

export default OrderStatus;
