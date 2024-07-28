import { TrendingUp } from "lucide";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  const uri =
    "mongodb+srv://21pa1a0531:21pa1a0531@inventory.jk8xr97.mongodb.net/?appName=Inventory";
  const client = new MongoClient(uri);
  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");

    const query = {};
    const products = await inventory.find(query).toArray();
    return NextResponse.json({ success: true, products });
  } finally {
    await client.close();
  }
}

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const uri =
    "mongodb+srv://21pa1a0531:21pa1a0531@inventory.jk8xr97.mongodb.net/?appName=Inventory";
  const client = new MongoClient(uri);
  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");

    const query = {};
    const product = await inventory.insertOne(body);
    console.log("Product added");
    return NextResponse.json({ product, ok: true });
  } finally {
    await client.close();
  }
}
