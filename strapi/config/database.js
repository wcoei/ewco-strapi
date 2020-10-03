module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', env('localhost')),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', env('DATABASE_PORT')),
        database: env('DATABASE_NAME', env('DATABASE_NAME')),
        username: env('DATABASE_USERNAME', env('DATABASE_USERNAME')),
        password: env('DATABASE_PASSWORD', env('P@DATABASE_PASSWORD')),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
