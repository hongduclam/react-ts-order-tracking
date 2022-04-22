import React, {FC} from 'react';
import OrderList from "../../ui/Order/OrderList";
import OrderFilter from "../../ui/Order/OrderFilter";
import {Button, Card, Divider} from 'antd';
import OrderStatistic from "../../ui/Order/OrderStatistic";
import useOrderPage from "./useOrderPage";

interface HomePageProps {
}

const OrderPage: FC<HomePageProps> = () => {
  const {isLoading, handleApplyFilter, filterParams, total, orders, handleReload, handleTableChange, totalLate, totalWarn} = useOrderPage();

  return (<Card
    title={<OrderStatistic
      total={total}
      totalLate={totalLate}
      totalWarn={totalWarn}
    />}
    extra={
      <Button
        type="primary" loading={isLoading}
        onClick={handleReload}> {isLoading ? 'Loading' : 'Reload'}</Button>}
  >
    <OrderFilter onFinish={handleApplyFilter}/>
    <Divider/>
    <OrderList
      orders={orders || []}
      loading={!orders}
      onChange={handleTableChange}
      pagination={{
        current: filterParams.pageIndex,
        pageSize: filterParams.pageSize,
        total
      }}
    />
  </Card>);
};

export default OrderPage;
