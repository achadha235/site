module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 54320,
  username: 'root',
  password: 'password',
  database: 'app',
  synchronize: true,
  logging: false,
  entities: ['dist/server/entity/**/*.js'],
  migrations: ['dist/server/migration/**/*.js'],
  subscribers: ['server/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'server/entity',
    migrationsDir: 'server/migration',
    subscribersDir: 'server/subscriber',
  },
}
