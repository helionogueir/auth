import type { NextFunction, Request, Response } from 'express'
import configs from 'app.config'
import cors from 'cors'

export const constomCors = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const corsOptions = {
    origin: configs.server.accessControlAllowOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  }

  return cors(corsOptions)
}
