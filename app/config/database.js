import mongoose from "mongoose";
import config from "./config";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const database = mongoose
  .connect(
    `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`,
    options
  )
  .then(() => {
    console.log(`** connected to database ${config.database.name} **`);
  })
  .catch(err => console.error("Error connecting to database:", err.message));

export default database;
