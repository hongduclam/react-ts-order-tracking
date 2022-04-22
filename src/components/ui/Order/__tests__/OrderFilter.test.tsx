import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import OrderFilter from "../OrderFilter";

test('<OrderFilter />', async () => {
  const handleFinish = jest.fn()
  const {getByText, queryAllByText, container} = render(<OrderFilter onFinish={handleFinish} />)

  fireEvent.submit(getByText('Search'))

  expect(queryAllByText('Search')).toHaveLength(1)
  expect(queryAllByText('Clear')).toHaveLength(1)
  expect(queryAllByText('ID')).toHaveLength(1)
  expect(queryAllByText('Rider Name')).toHaveLength(1)
  expect(queryAllByText('Merchant Name')).toHaveLength(1)
  expect(queryAllByText('Customer Name')).toHaveLength(1)
  expect(queryAllByText('Customer Status')).toHaveLength(1)
  expect(queryAllByText('Updated Time')).toHaveLength(1)
  expect(queryAllByText('Order late status')).toHaveLength(1)

  await waitFor(() => {
    expect(handleFinish).toBeCalled()
  })
})
