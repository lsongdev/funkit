const http = require('http');
const kelp = require('kelp');
const body = require('kelp-body');
const send = require('kelp-send');
const Router = require('kelp-router');
const logger = require('kelp-logger');
const { MongoClient, ObjectId } = require('mongodb');


(async () => {
  const client = new MongoClient('mongodb://localhost:27017');
  console.log('mongodb is connecting ...');
  await client.connect();
  console.log('mongodb is connected.');

  const database = client.db('funkit');
  const routes = database.collection('routes');
  const Worker = database.collection('workers');

  const router = new Router();

  const app = kelp();
  app.use(body);
  app.use(send);
  app.use(logger);
  app.use(router);
  // list
  router.get('/workers', async (req, res) => {
    const workers = await Worker.find().toArray();
    res.send({ workers });
  });
  router.options('/workers', (req, res) => {
    res.writeHead(200, {
      // 'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    });
    res.end();
  });
  // create or update
  router.post('/workers', async (req, res) => {
    const { id, name, code } = req.body;
    if (id) {
      console.log('update');
      const update = { $set: { name, code } };
      const _id = ObjectId(id);
      const result = await Worker.updateOne({ _id }, update);
      res.send({ id, success: result.acknowledged });
    } else {
      const result = await Worker.insertOne({ name, code });
      res.send({ id: result.insertedId, success: result.acknowledged });
    }
  });
  // get
  router.get('/workers/:id', async (req, res) => {
    const { id } = req.params;
    const _id = ObjectId(id);
    const worker = await Worker.findOne({ _id });
    res.send({ worker });
  });

  app.use((req, res) => res.send(404));
  const server = http.createServer(app);
  server.listen(3005, () => {
    console.log('funkit api server is running at 3000');
  });

})();