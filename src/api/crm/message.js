import request from '@/utils/request'

/**
 * 待审核合同
 * @param {*} data
 */
export function crmMessageCheckContractAPI(data) {
  return request({
    url: 'crm/message/checkContract',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 待审核回款
 * @param {*} data
 */
export function crmMessageCheckReceivablesAPI(data) {
  return request({
    url: 'crm/message/checkReceivables',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 今日需联系客户
 * @param {*} data
 */
export function crmMessageTodayCustomerAPI(data) {
  return request({
    url: 'crm/message/todayCustomer',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 今日需联系线索
 * @param {*} data
 */
export function crmMessageTodayLeadsAPI(data) {
  return request({
    url: 'crm/message/todayLeads',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 今日需联系商机
 * @param {*} data
 */
export function crmMessageTodayBusinessAPI(data) {
  return request({
    url: 'crm/message/todayBusiness',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}


/**
 * 待跟进线索
 * @param {*} data
 */
export function crmMessageFollowLeadsAPI(data) {
  return request({
    url: 'crm/message/followLeads',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}


/**
 * 待跟进客户
 * @param {*} data
 */
export function crmMessageFollowCustomerAPI(data) {
  return request({
    url: 'crm/message/followCustomer',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 即将到期合同
 * @param {*} data
 */
export function crmMessagEndContractAPI(data) {
  return request({
    url: 'crm/message/endContract',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 待回款合同
 * @param {*} data
 */
export function crmMessagRemindreceivablesplanAPI(data) {
  return request({
    url: 'crm/message/remindreceivablesplan',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 待办消息数
 * @param {*} data
 */
export function crmMessagNumAPI(data) {
  return request({
    url: 'crm/message/num',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 待进入客户池
 * @param {*} data
 */
export function crmMessagRemindCustomerAPI(data) {
  return request({
    url: 'crm/message/remindCustomer',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 待回访合同
 * @param {*} data
 */
export function crmMessagVisitRemindAPI(data) {
  return request({
    url: 'crm/message/visitContract',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 待审核发票
 * @param {*} data
 */
export function crmMessageCheckInvoiceAPI(data) {
  return request({
    url: 'crm/message/checkInvoice',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 全部标为已处理接口
 * @param {*} data
 */
export function crmMessagAllDealAPI(data) {
  return request({
    url: 'crm/message/allDeal',
    method: 'post',
    data: data
  })
}

/**
 * 标为已处理接口
 * @param {*} data
 */
export function crmMessagzealByIdAPI(data) {
  return request({
    url: 'crm/message/allDeal',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
