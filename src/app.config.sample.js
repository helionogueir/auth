import { dirname, resolve } from 'path'

const _pathRoot = resolve(dirname('..'))

export default {
  pathRoot: _pathRoot,
  server: {
    hostname: 'localhost',
    port: 8080,
    charset: 'UTF-8',
    language: 'pt',
  },
  database: {
    driver: 'mysql',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: '3306',
    schema: 'account',
  },
  security: {
    privateKey: resolve(_pathRoot, '.credentials/private_key.pem'),
    publicKey: resolve(_pathRoot, '.credentials/public_key.pem'),
  },
  resource: {
    public: ['/authenticate', '/authenticate/refresh'],
  },
}
