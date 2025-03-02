import type {
  GenerateTokenProps,
  RefreshProps,
  TokenAndRefreshResult,
  TokenResult,
} from '@app/application/Authentication'
import { Account } from '@app/domain/database/Account'
import { Security } from '@app/common/Resource'

export class Generate {
  public async generateTokenByUsernameAndPassword({
    username,
    password,
  }: GenerateTokenProps): Promise<TokenAndRefreshResult> {
    const model = new Account()

    const { id } = await model.findByCredentials({
      username,
      password,
    })

    const token = Security.generateToken(id)
    const refreshToken = Security.generateRefreshToken(id)

    return { token, refreshToken }
  }

  public async generateTokenByRefrashToken({
    refreshToken,
  }: RefreshProps): Promise<TokenResult> {
    const { ref } = Security.decodeRefreshToken(refreshToken)
    const userId = ref as string

    return { token: Security.generateToken(userId) }
  }
}
