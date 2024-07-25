// const { MongoClient, ServerApiVersion } = require("mongodb");
import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ a: 34 });
}

const uri =
  "mongodb+srv://21pa1a0531:21pa1a0531@inventory.jk8xr97.mongodb.net/?appName=Inventory";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
