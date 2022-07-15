import type { MockMethod } from 'vite-plugin-mock'

import { resultError, resultSuccess } from '../helper'

// test
enum ResultEnum {
  SUCCESS = 0,
  ERROR = 1,
  TIMEOUT = 401,
  TYPE = 'success',
}

const userInfo = {
  'name': 'ptodo',
  'userid': '000001',
  'signature': '海纳百川，有容乃大',
  'introduction': '微笑着，努力着，欣赏着',
  'title': '交互专家',
  'group': '某某某事业群－某某平台部－某某技术部－UED',
  'list|1-10': [{
    'id|+1': 1,
  }],
  'notifyCount': 12,
  'unreadCount': 11,
  'country': 'China',
  'address': 'Xiamen City 77',
  'phone': '0592-268888888',
}

export default [
  {
    url: '/basic-api/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo)
    },
  },
  {
    url: '/basic-api/user/sessionTimeout',
    method: 'post',
    statusCode: 401,
    response: () => {
      return resultError()
    },
  },
  {
    url: '/basic-api/user/tokenExpired',
    method: 'post',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number })
    },
  },
] as MockMethod[]
