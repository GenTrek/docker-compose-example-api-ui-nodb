'use strict';
//Zum Ausprobieren ob der Server läuft im Terminal --> node app.js

//Node Module einbinden (Referenzen)
const cors=require('cors');
const express=require('express');
const { flaschenpost } =require('flaschenpost');
//Node hat es on Board
const http= require('http');

//Flaschenpost Logger
const logger=flaschenpost.getLogger();

//API
const api=express();
//Cors aktivieren damit der Cross Domain funktioniert
api.use(cors());
//Route festlegen und da kommt ein request und wir antworten mit einem Response json mit Datum
api.get('/',(req,res)=>{
res.json({
    now:Date.now()
});
})

//Http-Server mit Listener auf den Port 3000
const server=http.createServer(api);
const port=3000;
server.listen(port,()=>{
    logger.info('Server ist gestartet auf dem Port: ',{port});
})

//