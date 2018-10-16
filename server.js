const express = require("express");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

mongoose.connect('mongodb://insight_user:k5O^4#Lv@ds031847.mlab.com:31847/insight_db', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.get('/', (req, res) => res.send("hello world!"));
app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));