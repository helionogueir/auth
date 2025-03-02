import { Debug } from '@app/common/Debug'
import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  await prisma.account.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'test',
      password: hashSync('test-123-123', 10),
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    Debug.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
