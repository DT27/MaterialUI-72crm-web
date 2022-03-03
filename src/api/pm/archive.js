import request from '@/utils/request'

/**
 * 归档项目列表
 * @param {*} data
 */
export function workWorkArchiveListAPI(data) {
  return request({
    url: 'work/work/archiveList',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
