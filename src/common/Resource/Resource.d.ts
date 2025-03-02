import type { ResourceMessageCode } from '@app/common/Resource'

type ResourceRequestHeaders = {
  authorization?: string
}

export type ResourceRequest = {
  body: <B = unknown>() => B
  headers: () => ResourceRequestHeaders
  params: <P = unknown>() => P
  query: <Q = unknown>() => Q
}

export type ResourceResponseSendProps<T = unknown> = {
  code: ResourceMessageCode
  message: string
  data?: T | null
}

export type ResourceResponse = {
  send: <T>(props: ResourceResponseSendProps<T>) => void
}

export type ResourceMethodProps = {
  request: ResourceRequest
  response: ResourceResponse
}
