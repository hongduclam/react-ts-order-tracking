import React from 'react'
import {cleanup, render} from '@testing-library/react'
import OrderPage from "../OrderPage";

jest.mock('../../../ui/Order/OrderList', () => {
  return () => <div>OrderList</div>
})
jest.mock('../../../ui/Order/OrderStatistic', () => {
  return () => <div>OrderStatistic</div>
})
jest.mock('../../../ui/Order/OrderFilter', () => {
  return () => <div>OrderFilter</div>
})

afterEach(cleanup);

test('<OrderPage />', async () => {
  const {queryAllByText} = render(<OrderPage />)
  expect(queryAllByText('Reload')).toHaveLength(1)
  expect(queryAllByText('OrderList')).toHaveLength(1)
  expect(queryAllByText('OrderStatistic')).toHaveLength(1)
  expect(queryAllByText('OrderFilter')).toHaveLength(1)
})
