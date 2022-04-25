import { MongoClient } from "mongodb";

let uri = 'mongodb+srv://maher:maher9326@cluster0.nf63j.mongodb.net/yotube-clone?retryWrites=true&w=majority'
// process.env.MONGODB_URL;
let dbName = 'yotube-clone';
// process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
   // useNewUrlParser: true,
   // useUnifiedTopology: true,
  });


  console.log("Connected to MongoDB",client);

  const db = await client.db(dbName);
  console.log("Connected to database--->>", db);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}