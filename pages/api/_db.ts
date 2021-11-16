const username = process.env.DATABASE_USER || "";
const password = process.env.DATABASE_PASSWORD || "";
const dbname = "Jubilee";

//export const url = `mongodb://0.0.0.0:27018/${dbname}?retryWrites=true&w=majority`;
export const url = `mongodb+srv://${username}:${password}@cluster0.5ddom.mongodb.net/${dbname}?retryWrites=true&w=majority`;
