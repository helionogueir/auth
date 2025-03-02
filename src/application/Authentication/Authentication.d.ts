export type GenerateTokenProps = {
  username: string
  password: string
}

export type TokenResult = {
  token: string
}

export type RefreshProps = {
  refreshToken: string
}

export type TokenAndRefreshResult = TokenResult & RefreshProps
