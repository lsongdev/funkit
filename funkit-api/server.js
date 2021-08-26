const http = require('http');
const kelp = require('kelp');
const body = require('kelp-body');
const send = require('kelp-send');
const Router = require('kelp-router');
const { MongoClient } = require('mongodb');


(async () => {
  const client = new MongoClient('mongodb://lsong.me:27017');
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
  app.use(router);
  // list
  router.get('/workers', async (req, res) => {
    const workers = await Worker.find();
    res.send({ workers });
  });
  // get
  router.get('/worker/:id', async (req, res) => {
    const { id } = req.params;
    const worker = await Worker.findOne({ id });
    res.send({ worker });
  });
  
  // create or update
  router.post('/worker', async (req, res) => {
    const { id, name, code } = req.body;
    const query = { id };
    const update = { $set: { name, code } };
    const options = { upsert: true };
    const worker = await Worker.updateOne(query, update, options);
    res.send({ worker });
  });

  app.use((req, res) => res.send(404));
  const server = http.createServer(app);
  server.listen(3000, () => {
    console.log('funkit api server is running at 3000');
  });

})();