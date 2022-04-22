import {useCallback, useEffect, useState} from "react";
import {OrderFilterParams} from "../../../types";
import {DEFAULT_ORDER_FILTER_PARAMS} from "../../../constants";
import {useFilterOrders} from "../../../api/useOrderApis";
import moment from 'moment';

export default function useOrderPage() {
  const [filterParams, setFilterParams] = useState<OrderFilterParams>({...DEFAULT_ORDER_FILTER_PARAMS})
  const {
    total, data: orders, totalWarn,
    totalLate
  } = useFilterOrders(filterParams);
  const [isLoading, setIsLoading] = useState(false);

  const handleTableChange = useCallback((pagination: any) => {
    setFilterParams({
      ...filterParams,
      pageSize: pagination.pageSize,
      pageIndex: pagination.current,
    })
  }, [])

  const handleApplyFilter = useCallback((values: any) => {
    setFilterParams({
      ...filterParams,
      filterBy: values
    })
  }, [])

  const handleReload = useCallback(() => {
    setIsLoading(true)
    setFilterParams({
      ...filterParams,
      version: moment().millisecond().toString()
    })
    setIsLoading(false)
  }, [filterParams])
  useEffect(() => {
    setInterval(() => {
      handleReload();
    }, 3000)
  }, [])

  return {
    handleReload,
    handleTableChange,
    filterParams,
    isLoading,
    orders,
    total,
    handleApplyFilter,
    totalWarn,
    totalLate
  }

}
