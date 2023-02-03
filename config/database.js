const path = require('path');

const sqlite = (env) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

const postgres = (env) => ({
  connection: {
    client: 'postgres',
    connectionString: env("DATABASE_URL", "")
  }
});

module.exports = ({ env }) => {
  const database_url = env("DATABASE_URL", "");

  if (database_url) {
    return postgres(env);
  } else {
    return sqlite(env);
  }
};
