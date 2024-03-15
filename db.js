const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://subashchandraboseravi:VVDsSmqdrAuheLsF@atlascluster.xdk2zzh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";


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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
