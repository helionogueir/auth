import type { CredentialsProps } from '@app/domain/database/Account'
import { PrismaClient } from '@prisma/client'
import { compare } from 'bcryptjs'
import i18next from '@app/domain/locales/i18n/i18next'

export class Account {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  public async findByCredentials({ username, password }: CredentialsProps) {
    const account = await this.prisma.account.findFirst({
      where: { username, deleted: false },
    })

    if (!account) {
      throw new ReferenceError(
        i18next.t('database:notFound', { fieldname: 'username' }),
      )
    }

    if (!(await compare(password, account.password))) {
      throw new ReferenceError(
        i18next.t('database:invalid', { fieldname: 'password' }),
      )
    }

    return account
  }
}
