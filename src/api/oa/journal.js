import request from '@/utils/request'

/**
 * 日志列表
 * @param {*} data
 */
export function journalListAPI(data) {
  return request({
    url: 'oa/log/index',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  })
}

/**
 * 新建日志
 * @param {*} data
 */
export function journalAddAPI(data) {
  return request({
    url: 'oa/log/save',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data
  })
}

/**
 * 日志编辑
 * @param {*} data
 */
export function journalEditAPI(data) {
  return request({
    url: `oa/log/${data.log_id ? 'update' : 'save'}`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data
  })
}

/**
 * 日志删除
 * @param {*} data
 */
export function journalDeleteAPI(data) {
  return request({
    url: 'oa/log/delete',
    method: 'post',
    data
  })
}

/**
 * 日志标记已读
 * @param {*} data
 */
export function journalSetReadAPI(data) {
  return request({
    url: 'oaLog/readLog',
    method: 'post',
    data
  })
}

/**
 * 日志详情
 * @param {*} data
 */
export function journalQueryByIdAPI(data) {
  return request({
    url: 'oa/log/queryLog',
    method: 'post',
    data
  })
}

/**
 * 日志概要
 * @param {*} data
 */
export function journalQueryBulletinAPI(data) {
  return request({
    url: 'oa/log/logBulletin',
    method: 'post',
    data
  })
}

/**
 * 日志简报预览
 * @param {*} data
 */
export function journalQueryBulletinByTypeAPI(data) {
  return request({
    url: 'oa/log/newBulletin',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 日志简报跟进记录预览
 * @param {*} data
 */
export function journalQueryRecordCountAPI(data) {
  return request({
    url: 'oa/log/activityList',
    method: 'post',
    data
  })
}

/**
 * 随机返回一条
 * @param {*} data
 */
export function journalGetLogWelcomeAPI(data) {
  return request({
    url: 'oa/log/LogWelcomeSpeech',
    method: 'post',
    data
  })
}

/**
 * 日志导出
 * @param {*} data
 */
export function oaLogExportAPI(data) {
  return request({
    url: 'oa/log/excelExport',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    responseType: 'blob'
  })
}

/**
 * 查询日志完成概要
 * @param {*} data
 */
export function oaLogCompleteStatsAPI(data) {
  return request({
    url: 'oa/log/completeStats',
    method: 'post',
    data
  })
}

/**
 * 查询日志完成情况
 * @param {*} data
 */
export function oaLogCompleteListAPI(data) {
  return request({
    url: 'oa/log/completeLog',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 查询日志未完成情况
 * @param {*} data
 */
export function oaLogUnCompleteListAPI(data) {
  return request({
    url: 'oa/log/inCompleteLog',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// journalQueryActivityCountAPI
export function journalQueryActivityCountAPI(data) {
  return request({
    url: 'oa/log/activityCount',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 日志点赞
 * @param {*} data
 */
export function oaLogFavourOrCancelAPI(data) {
  return request({
    url: 'oa/log/favourUpdate',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
