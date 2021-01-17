require('dotenv/config');

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_DB } = process.env;

module.exports =
[{
    name: 'default',
    type: 'postgres',
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    username: POSTGRES_USER,
    password: POSTGRES_PASS,
    synchromize: false,
    entities: 
    [
        'src/user/entity/user.entity'
    ]
}];