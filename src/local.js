const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const toDoRouter = require('./routes/toDoes');
app.use('/toDoes', toDoRouter)

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log(`Server listening on ${port}. Ctrl-C to stop`);
})