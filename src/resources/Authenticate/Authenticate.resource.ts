import {
  Generate,
  type TokenAndRefreshResult,
} from '@app/application/Authentication'
import {
  ResourceMessageCode,
  type ResourceMethodProps,
} from '@app/common/Resource'
import { Language } from '@app/application/Language'
import { Post } from '@app/common/Server'

export class Authenticate {
  @Post('/authenticate')
  public async signIn({ request, response }: ResourceMethodProps) {
    try {
      response.send<TokenAndRefreshResult>({
        code: ResourceMessageCode.C_201_0201,
        message: Language.translate(
          `resource:${ResourceMessageCode.C_201_0201}`,
        ),
        data: await new Generate().generateTokenByUsernameAndPassword(
          request.body(),
        ),
      })
    } catch (error) {
      if (error instanceof ReferenceError) {
        response.send<string>({
          code: ResourceMessageCode.C_400_0400,
          message: Language.translate('account:invalid.signIn'),
        })
      } else if (error instanceof Error) {
        response.send<string>({
          code: ResourceMessageCode.C_500_0500,
          message: Language.translate(
            `resource:${ResourceMessageCode.C_500_0500}`,
          ),
        })
      }
    }
  }
}
