export enum ResourceExpiresIn {
  TOKEN = '10m',
  REFRESH_TOKEN = '7d',
}

export enum ResourceCrypto {
  ALGORITHM = 'RS256',
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
export enum ResourceMessageCode {
  C_200_0200 = 'C_200_0200',
  C_201_0201 = 'C_201_0201',
  C_204_0204 = 'C_204_0204',
  C_400_0400 = 'C_400_0400',
  C_401_0401 = 'C_401_0401',
  C_404_0404 = 'C_404_0404',
  C_500_0500 = 'C_500_0500',
}
