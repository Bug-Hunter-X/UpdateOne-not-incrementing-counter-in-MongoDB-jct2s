```javascript
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "<your_mongodb_connection_string>";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const collection = client.db("mydb").collection("mycollection");
    // Using findOneAndUpdate for atomic operation and result verification
    const result = await collection.findOneAndUpdate(
      { _id: 1 },
      { $inc: { count: 1 } },
      { returnDocument: 'after' } // Return updated document
    );
    console.log(result.value); 
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```