import request from '@/utils/request'

/**
 * 我的任务列表
 * @param {*} data
 */
export function workTaskMyTaskAPI(data) {
  return request({
    url: 'work/task/myTask',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 参与项目的成员
 * @param {*} data
 */
export function workQueryMemberListAPI() {
  return request({
    url: 'work/task/taskUsers',
    method: 'post'
  })
}

/**
 * 拖拽改变分类
 * @param {*} data
 */
export function workTaskUpdateTopAPI(data) {
  return request({
    url: 'work/task/updateTop',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 项目列表
 * @param {*} data
 */
export function workIndexWorkListAPI(data) {
  return request({
    url: 'work/work/index',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 公共搜索任务
 * @param {*} data
 */
export function workQueryWorkTaskListAPI(data) {
  return request({
    url: 'work/task/search',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// /**
//  * 任务详情
//  * @param {*} data
//  */
// export function workTaskReadAPI(data) {
//   return request({
//     url: 'task/queryTaskById',
//     method: 'post',
//     data: data
//   })
// }

// /**
//  * 编辑任务名
//  * @param {*} data
//  */
// export function workTaskUpdateNameAPI(data) {
//   return request({
//     url: 'work/task/updateName',
//     method: 'post',
//     data: data
//   })
// }

/**
 * 任务归档
 * @param {*} data
 */
export function workTaskArchiveAPI(data) {
  return request({
    url: `work/task/archive`,
    method: 'post',
    data
  })
}

/**
 * 归档任务激活
 * @param {*} data
 */
export function workTaskRecoverAPI(data) {
  return request({
    url: `work/task/recover`,
    method: 'post',
    data
  })
}

// /**
//  * 编辑相关信息
//  * @param {*} data
//  */
// export function taskSvaeTaskRelationAPI(data) {
//   return request({
//     url: 'task/saveTaskRelation',
//     method: 'post',
//     data: data
//   })
// }

/**
 * 工作台任务导出
 * @param {*} data
 */
export function taskWorkbenchExportAPI(data) {
  return request({
    url: 'work/task/excelExport',
    method: 'post',
    data: data,
    responseType: 'blob'
  })
}
