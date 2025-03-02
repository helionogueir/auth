import type { NextFunction, Request, Response } from 'express'
import { ResourceMessageCode, Security } from '@app/common/Resource'
import configs from 'app.config'

export const authenticate = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  try {
    const {
      headers: { authorization },
      url,
    } = request

    if (configs.resource.public.includes(url)) return next()

    if (!authorization || !authorization.startsWith('Bearer'))
      throw new ReferenceError('Unauthorized! Authorization header is required')

    if (!Security.verifyToken(authorization))
      throw new ReferenceError('Unauthorized! Invalid token')

    return next()
  } catch (error) {
    response.send({
      code: ResourceMessageCode.C_401_0401,
      message: error instanceof Error ? error.message : 'Unauthorized',
      data: error,
    })

    return next(error)
  }
}
