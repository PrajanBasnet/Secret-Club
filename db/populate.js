require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const { Client } = require("pg");

console.log(process.env.DB_URL);    

const SQL = `
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        username VARCHAR(255) UNIQUE NOT NULL,
        password TEXT  NOT NULL,
        member_status BOOLEAN DEFAULT FALSE,
        is_admin BOOLEAN DEFAULT FALSE
    );
    
    CREATE TABLE IF NOT EXISTS message(
     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     user_id INTEGER NOT NULL,
     title VARCHAR(255) NOT NULL,
     description  TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    INSERT INTO users (
    firstname,
    lastname,
    username,
    password,
    member_status,
    is_admin
)
VALUES
(
    'Prajwal',
    'Basnet',
    'prajwal@example.com',
    '$2b$10$hashedpassword1',
    TRUE,
    TRUE
),
(
    'John',
    'Doe',
    'john@example.com',
    '$2b$10$hashedpassword2',
    TRUE,
    FALSE
),
(
    'Jane',
    'Smith',
    'jane@example.com',
    '$2b$10$hashedpassword3',
    FALSE,
    FALSE
);
`
async function seeding(){
   const client = new Client({
    connectionString: process.env.DB_URL
   });
   console.log("seeding...");
   await client.connect();
   await client.query(SQL);
   await client.end();
   console.log("done");
}

seeding();