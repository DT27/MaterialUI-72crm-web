import request from '@/utils/request'

/**
 * 新增日程
 *
 */
export function canlendarSaveAPI(data) {
  return request({
    url: 'oa/event/save',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 删除日程
 *
 */
export function canlendarDeleteAPI(data) {
  return request({
    url: 'oa/event/delete',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 查询日程
 *
 */
export function canlendarQueryListAPI(data) {
  return request({
    url: 'oa/event/index',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 编辑日程 oaEvent/queryById
 *
 */
export function canlendarUpdateAPI(data) {
  return request({
    url: 'oa/event/update',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 查询日程详情
 *
 */
export function canlendarQueryByIdAPI(data) {
  return request({
    url: 'oa/event/read',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 查询自定义列表
 */
export function canlendarQueryTypeListAPI(data) {
  return request({
    url: 'oa/event/schedule',
    method: 'post',
    data: data
  })
}

/**
 * 编辑自定义列表 oaCalendar/todayTask
 */
export function canlendarUpdateTypeAPI(data) {
  return request({
    url: 'oa/event/saveSchedule',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

// /**
//  * 今日需联系任务
//  */
// export function canlendarTodayTaskAPI(data) {
//   return request({
//     url: 'oaCalendar/todayTask',
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     data: data
//   })
// }

/**
 * 今日到期的合同（type: 1 当日到期合同 2 当日回款合同）
 */
export function canlendarTodayContractAPI(data) {
  return request({
    url: 'oa/event/eventContract',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 需联系客户
 */
export function canlendarTodayCustomerAPI(data) {
  return request({
    url: 'oa/event/eventCustomer',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}


/**
 * 需联系线索
 */
export function canlendarTodayLeadsAPI(data) {
  return request({
    url: 'oa/event/eventLeads',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}


/**
 * 需联系商机
 */
export function canlendarTodayBusinessAPI(data) {
  return request({
    url: 'oa/event/eventBusiness',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 预计成交商机
 */
export function canlendarTodayDealBusinessAPI(data) {
  return request({
    url: 'oa/event/eventDealBusiness',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 小日历标记
 */
export function canlendarQueryListStatusAPI(data) {
  return request({
    url: 'oa/event/listStatus',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 今日crm状态提醒
 */
export function canlendarEventCrmAPI(data) {
  return request({
    url: 'oa/event/eventCrm',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 即将到期的任务
 */
export function canlendarEventTaskAPI(data) {
  return request({
    url: 'oa/event/eventTask',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 *  日程员工列表
 */
export function systemUserQueryAuthUserList(data) {
  return request({
    url: 'admin/users/subordinate',
    method: 'post',
    data: data
  })
}
