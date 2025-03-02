import { Server, ServerMethod } from '@app/common/Server'
import { Debug } from '@app/common/Debug'

const register = (method: ServerMethod, endpoint: string) => {
  return (
    target: object,
    propertyKey: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor: TypedPropertyDescriptor<any>,
  ) => {
    Server.router[method]({
      endpoint,
      callback: (props) => descriptor.value(props),
    })

    Debug.info({
      message: `"${method}:${endpoint}" has been routing successfully`,
    })
  }
}

export const Get = (endpoint: string) => register(ServerMethod.GET, endpoint)

export const Post = (endpoint: string) => register(ServerMethod.POST, endpoint)

export const Put = (endpoint: string) => register(ServerMethod.PUT, endpoint)

export const Patch = (endpoint: string) =>
  register(ServerMethod.PATCH, endpoint)

export const Delete = (endpoint: string) =>
  register(ServerMethod.DELETE, endpoint)
