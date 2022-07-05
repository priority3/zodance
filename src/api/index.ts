import type { testRequest, testResponse } from './modal/testModal'
import PRIRequest from '@/utils/http'
enum API {
  testApi = '/basic-api/account/getAccountInfo',
}

export const getTestApi = (data?: testRequest) => {
  return PRIRequest<testRequest, testResponse>({
    url: API.testApi,
    isUploadFile: true,
    data,
    method: 'GET',
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截')
        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      },
    },
  })
}
