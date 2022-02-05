import { MongoClient, Db } from "mongodb";


const client = new MongoClient(process.env.DATABASE_URL);

export default async function connect () {
  await client.connect()
  const db = client.db("Leads")
  return {db, client}
}