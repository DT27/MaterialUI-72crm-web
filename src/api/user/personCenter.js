import request from '@/utils/request'

/**
 * 修改头像
 * @param {*} data
 */
export function adminUsersUpdateImgAPI(data) {
  return request({
    url: 'admin/users/updateImg',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * 个人详情
 * @param {*} data
 */
export function adminUsersReadAPI(data) {
  return request({
    url: 'admin/users/read',
    method: 'post',
    data: data
  })
}

/**
 * 修改个人信息
 * @param {*} data
 */
export function adminUsersUpdateAPI(data) {
  return request({
    url: 'admin/users/update',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 修改密码
 * @param {*} data
 */
export function adminUsersResetPasswordAPI(data) {
  return request({
    url: 'admin/users/resetPassword',
    method: 'post',
    data: data
  })
}
