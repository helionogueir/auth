import {
  ServerMethod,
  type ServerRouterMethodProps,
  type ServerRouterMethods,
} from '@app/common/Server'
import {
  authenticate,
  constomCors,
  prepareRequest,
  prepareResponse,
} from '@app/common/Resource'
import { Debug } from '@app/common/Debug'
import configs from 'app.config'

import express from 'express'
import { readdir } from 'fs'
import { resolve } from 'path'

export class Server {
  private static readonly serverApp: express.Express = express()
  private static readonly serverRouter: express.Router = express.Router()

  static get router(): ServerRouterMethods {
    return Object.values(ServerMethod).reduce(
      (result: ServerRouterMethods, method) => ({
        ...result,
        [method]: ({ endpoint, callback }: ServerRouterMethodProps) =>
          Server.serverRouter[method](
            endpoint,
            (request: express.Request, response: express.Response) =>
              callback({
                request: prepareRequest(request),
                response: prepareResponse(response),
              }),
          ),
      }),
      {} as ServerRouterMethods,
    )
  }

  public static start(): void {
    Debug.info({ message: 'Press CTRL+C to stop the server' })

    Server.searchResources(resolve(configs.pathRoot, './src/resources'))

    Server.serverApp.use([
      express.json(),
      constomCors(),
      authenticate,
      Server.serverRouter,
    ])

    Server.serverApp.disable('x-powered-by')
    Server.serverApp.listen(configs.server.port, (error: Error | undefined) => {
      if (error) {
        Debug.error({ message: error.message })
      } else {
        Debug.info({
          message: `The server is running on http://${configs.server.hostname}:${configs.server.port}`,
        })
      }
    })
  }

  private static searchResources(pathname: string): void {
    readdir(pathname, { withFileTypes: true }, (error, files) => {
      if (error) {
        Debug.error({ message: error.message })
      } else {
        files.forEach((file) => {
          if (file.isDirectory()) {
            Server.searchResources(resolve(pathname, file.name))
          } else if (file.isFile() && file.name.endsWith('.resource.ts')) {
            import(resolve(pathname, file.name)).catch((error) => {
              Debug.error({ message: error.message })
            })
          }
        })
      }
    })
  }
}
