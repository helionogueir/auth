import { ResourceCrypto, ResourceExpiresIn } from '@app/common/Resource'
import configs from 'app.config'
import jwt from 'jsonwebtoken'
import { readFileSync } from 'fs'

export class Security {
  private static readonly privateKey = readFileSync(
    configs.security.privateKey,
    'utf8',
  )
  private static readonly publicKey = readFileSync(
    configs.security.publicKey,
    'utf8',
  )

  public static generateToken(id: string): string {
    return jwt.sign({}, Security.privateKey, {
      algorithm: ResourceCrypto.ALGORITHM,
      expiresIn: ResourceExpiresIn.TOKEN,
      subject: id,
    })
  }

  public static decodeToken(token: string): jwt.JwtPayload {
    const decode = jwt.verify(token, Security.publicKey, {
      algorithms: [ResourceCrypto.ALGORITHM],
    })

    if (
      typeof decode !== 'string' &&
      decode?.ref !== undefined &&
      (!decode?.sub?.length || !decode?.exp?.toString().length)
    ) {
      throw new ReferenceError('Invalid token')
    }

    return decode as jwt.JwtPayload
  }

  public static verifyToken(bearerToken: string): boolean {
    try {
      const [, token] = bearerToken.split(' ')

      Security.decodeToken(token)

      return true
    } catch {
      return false
    }
  }

  public static generateRefreshToken(id: string): string {
    return jwt.sign({ ref: id }, Security.privateKey, {
      algorithm: ResourceCrypto.ALGORITHM,
      expiresIn: ResourceExpiresIn.REFRESH_TOKEN,
      subject: id,
    })
  }

  public static decodeRefreshToken(refreshToken: string): jwt.JwtPayload {
    const decode = jwt.verify(refreshToken, Security.publicKey, {
      algorithms: [ResourceCrypto.ALGORITHM],
    })

    if (
      typeof decode !== 'string' &&
      decode?.ref === undefined &&
      (!decode?.sub?.length || !decode?.exp?.toString().length)
    ) {
      throw new ReferenceError('Invalid token')
    }

    return decode as jwt.JwtPayload
  }

  public static verifyRefreshToken(refreshToken: string): boolean {
    try {
      Security.decodeToken(refreshToken)

      return true
    } catch {
      return false
    }
  }
}
