import pkg from 'pg';
const {Client}= pkg;
   const  database = new Client({
    user: "postgres",
    host : "localhost",
    database:"mern_ecommerce_store",
    password:"2002yassine",
    port : 5432,
}) 

try {
    await database.connect();
    console.log('connected to the database ')
} catch (error) {
 
    console.log('Database connection failed:',error);
    process.exit(1);
    


}
export default database;
