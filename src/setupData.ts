import orderData from './mock/order-data.json';
import {CUSTOMER_STATUS} from "./constants";
import {OrderModel} from "./types";
import moment from 'moment';

export const store = {
  save: (data: any) => {
    window.localStorage.setItem('orders', JSON.stringify(data))
  },
  getOrders: () => {
    return JSON.parse(window.localStorage.getItem('orders') || '[]')
  }
}

function initData() {
  if (!store.getOrders() || !store.getOrders().length) {
    store.save(orderData.map((orderData, index) => {
      return {
        ...orderData,
        customerName: `Customer Name ${index}`
      }
    }))
  }
}

function runUpdateOrderJob() {
  setInterval(() => {
    console.log("runUpdateOrderJob()")
    const orders: OrderModel[] = store.getOrders() as OrderModel[];
    store.save(orders.map(order => {
      return {
        ...order,
        customerStatus: Object.values(CUSTOMER_STATUS)[Math.floor(Math.random() * Object.values(CUSTOMER_STATUS).length)],
        updatedTime: moment().add(5, 'minutes')
      }
    }))
  }, 2000)
}

export default function setupData() {
  initData();
  runUpdateOrderJob();
}
