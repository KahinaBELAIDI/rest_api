// the main file that is used as an entry point to run the api
import config from "dotenv";
import debug from "debug";
import http from "http";
import "./app/config/database";

import app from "./app";

// Read the config values from .env
config.config();
debug("fd:api");
// get the port from the environment and store it in express
const port = normalizePort(process.env.APP_PORT || 3000);
app.set("port", port);

// Create the HTTP server
const server = http.createServer(app);
// connect to the database

// Listen on the provided port
server.listen(port);
server.on("listening", onListening);
server.on("error", onError);

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind, " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind, " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  const addr = server.address();
  const bind =
    typeof addr === "string" ? `pipe " ${addr}` : `port " ${addr.port}`;
  debug(`Listening on ${bind}`);

  console.log(
    "The app : ",
    process.env.APP_NAME,
    " Server started on : ",
    process.env.APP_URL,
    ":",
    port
  );
  console.log(
    "The app : ",
    process.env.APP_NAME,
    " http Server started on : ",
    process.env.APP_URL,
    ":",
    3000
  );
}
// Normalize a port into a number , string or false
function normalizePort(val) {
  const port2 = parseInt(val, 10);
  if (Number.isNaN(port2)) {
    // named pipe
    return val;
  }
  if (port2 >= 0) {
    // port number
    return port2;
  }
  return false;
}
