import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)
await seed(db, schema).refine((fake) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: fake.companyName(),
        description: fake.loremIpsum(),
      },
      with: {
        questions: 20,
      },
    },
  }
})

await sql.end()

// biome-ignore lint/suspicious/noConsole: only used in development
console.log('Database seeded successfully.')
