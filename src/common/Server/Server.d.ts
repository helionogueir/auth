import type { ResourceRequest, ResourceResponse } from '@app/common/Resource'

export type ServerRouterMethodProps = {
  endpoint: string
  callback: (props: {
    request: ResourceRequest
    response: ResourceResponse
  }) => void
}

export type ServerRouterMethods = {
  get: (props: ServerRouterMethodProps) => void
  post: (props: ServerRouterMethodProps) => void
  put: (props: ServerRouterMethodProps) => void
  patch: (props: ServerRouterMethodProps) => void
  delete: (props: ServerRouterMethodProps) => void
}
