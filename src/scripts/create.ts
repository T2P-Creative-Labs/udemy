import { Client } from 'pg';

const createDatabase = async () => {
  const client = new Client({
    user: 'postgres',
    host: '192.168.1.234',
    password: 'postgres',
    port: 5432,
  });

  try {
    await client.connect();
    await client.query('CREATE DATABASE udemydb');
    console.log('Database created successfully');
  } catch (err) {
    console.error('Error creating database:', err);
  } finally {
    await client.end();
  }
};

createDatabase();
