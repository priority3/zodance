import type { BaseResponse } from '../modal/baseModel'
import type { smsRequest } from '../modal/smsModal'
import PRIRequest from '@/utils/http'

enum API {
  getUrlLinkApi = '/api/third_party/url_link/generate',
}

export const fetchUrlLink = (appId: string, data: smsRequest) => {
  return PRIRequest<smsRequest, BaseResponse>({
    url: `${API.getUrlLinkApi}?appId=${appId}`,
    isUploadFile: true,
    data,
    method: 'POST',
    interceptors: {
      requestInterceptors(res) {
        return res
      },
      responseInterceptors(result) {
        return result
      },
    },
  })
}
