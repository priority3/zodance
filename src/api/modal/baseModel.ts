export interface BasicPageParams {
  page: number
  pageSize: number
}

export interface BasicFetchResult<T> {
  items: T[]
  total: number
}

export interface BasePageResponse<T> {
  totalCount: number
  pageSize: number
  totalPage: number
  currPage: number
  list: T[]
}

export interface BasePageResponseNew<T> {
  size: number
  total: number
  current: number
  records: T[]
}

export interface BasePageRequest {
  page: number
  limit: number
}

export interface BaseResponse {
  msg: string
  code: number
  data: any
}
