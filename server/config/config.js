module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'aa1w8dfmj4nv4hc',
    user: process.env.RDS_USERNAME || 'lpei',
    password: process.env.RDS_PASSWORD || 'peilei920613',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.RDS_HOSTNAME || 'localhost',
      port: process.env.RDS_PORT || 3306
    }
  }
}
