import { Generate, type TokenResult } from '@app/application/Authentication'
import {
  ResourceMessageCode,
  type ResourceMethodProps,
} from '@app/common/Resource'
import { Language } from '@app/application/Language'
import { Post } from '@app/common/Server'

export class RefreshToken {
  @Post('/authenticate/refresh')
  public async generateNewToken({ request, response }: ResourceMethodProps) {
    try {
      response.send<TokenResult>({
        code: ResourceMessageCode.C_201_0201,
        message: Language.translate(
          `resource:${ResourceMessageCode.C_201_0201}`,
        ),
        data: await new Generate().generateTokenByRefrashToken(request.body()),
      })
    } catch {
      response.send<string>({
        code: ResourceMessageCode.C_401_0401,
        message: Language.translate('account:invalid.refreshToken'),
      })
    }
  }
}
