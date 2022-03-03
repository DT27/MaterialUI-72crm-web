import request from '@/utils/request'

/**
 * 产品分类销量分析
 */
export function biProductCategoryAPI(data) {
  return request({
    url: 'bi/product/productCategory',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
