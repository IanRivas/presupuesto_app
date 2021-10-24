export default {
    DB: {
        user: process.env.POSTGRES_USER || 'root',
        host: process.env.POSTGRES_HOST||'postgres',
        password: process.env.POSTGRES_PASSWORD ||'password',
        database: process.env.POSTGRES_DB ||'presupuestos',
        port: Number(process.env.POSTGRES_PORT) || 5432
    }
}