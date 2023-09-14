import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create User
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Hamza',
  //     email: 'hamza@gmail.com',
  //   },
  // })
  // Get all users
  // const users = await prisma.user.findMany({
  //   include: {
  //     article: true,
  //   },
  // })
  // users.forEach((user) => {
  //   console.log(`User: ${user.name}, Email: ${user.email}`)
  //   console.log(`Articles:`)
  //   user.article.forEach((article) => {
  //     console.log(`- Title: ${article.title}, Body: ${article.body}`)
  //   })
  //   console.log(`\n`)
  // })
  // Create article and associate it with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Sample article',
  //     body: 'this is sample article',
  //     author: {
  //       connect: { id: 2 },
  //     },
  //   },
  // })
  // console.log(article, 'article')
  // Get all articles
  // const articles = await prisma.article.findMany()
  // console.log(articles, 'articles')
  // Create User and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Mughal',
  //     email: 'mughal2@gmail.com',
  //     article: {
  //       create: {
  //         title: 'Mughal second article',
  //         body: 'some content',
  //       },
  //     },
  //   },
  // })
  // console.log(user, 'user>>>>>>>')

  // Update user
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: 'Hamza Updated',
  //   },
  // })

  // Delete article
  const article = await prisma.article.delete({
    where: {
      id: 4,
    },
  })

  console.log(article, 'article>>>>>>>')
}

main()
  .then(async () => {
    console.log('success')
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
