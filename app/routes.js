// import routes
import textRouter from "./api/v1/controllers/text/router";

//import { verifyToken } from "./middleware";

const BASE_URL = "/api/v1";

export default function(app) {
  // define routes
  app.use(`${BASE_URL}/text`, textRouter);

  // for testing that the router works properly
  app.use(`${BASE_URL}/test-router`, (req, res, next) => {
    res.status(200).json({
      test: "the api router is working properly"
    });
  });
}
