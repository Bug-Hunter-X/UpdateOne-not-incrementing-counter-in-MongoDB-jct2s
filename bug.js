```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const collection = client.db("mydb").collection("mycollection");
    // some operation
    const result = await collection.updateOne({"_id":1},{"$inc":{"count":1}});
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```