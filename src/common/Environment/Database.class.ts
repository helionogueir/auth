import { type DotenvPopulateInput, populate } from 'dotenv'
import type { AppConfigDatabaseProps } from '@app/common/Environment'

export class Database {
  public static setDatabaseUrl({
    driver,
    username,
    password,
    host,
    port,
    schema,
  }: AppConfigDatabaseProps): void {
    populate(process.env as DotenvPopulateInput, {
      DATABASE_URL: `${driver}://${username}:${password}@${host}:${port}/${schema}`,
    })
  }
}
