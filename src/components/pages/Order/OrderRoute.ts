import {lazy} from 'react'
import {RouteParams} from "../../../types";

export const OrderRoute: RouteParams = {
  path: '/orders',
  pageTitle: 'Orders Tracking',
  exact: true,
  component: lazy(() => import('./OrderPage'))
}
