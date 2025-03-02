import type { Request, Response } from 'express'
import type {
  ResourceRequest,
  ResourceResponse,
  ResourceResponseSendProps,
} from '@app/common/Resource'

export const prepareRequest = (request: Request): ResourceRequest => ({
  body: <B = unknown>() => request.body as B,
  headers: <H = unknown>() => request.headers as H,
  params: <P = unknown>() => request.params as P,
  query: <Q = unknown>() => request.query as Q,
})

export const prepareResponse = (response: Response): ResourceResponse => ({
  send: <T>({ code, message, data }: ResourceResponseSendProps<T>) => {
    return response.status(Number(code.split('_')[1])).json({
      code,
      message,
      data: data || null,
    })
  },
})
