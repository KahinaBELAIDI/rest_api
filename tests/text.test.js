/* global  */
import request from "supertest";
import mongoose from "mongoose";

import app from "../app";
import config from "./fixtures/config";

const {
  textOne,
  textTwo,
  setupDatabase
} = require("./fixtures/db/dataForTest");

const BASE_URL = "/api/v1";

// connect to test database
beforeAll(async () => {
  const url = config.BD_TEST_URL;
  await mongoose.connect(url, { useNewUrlParser: true });
});

beforeEach(setupDatabase);

//Test Add new Text
test.skip("Should create a new text", async () => {
  await request(app)
    .post(`${BASE_URL}/text`)
    .send({ content: textOne.content })
    .expect(201)
    .expect(response => {
      expect(response.body.message).toEqual("Created Successfully");
    });
});

//Test Get Text By Id
test.skip("Should fetch a Text by id", async () => {
  await request(app)
    .get(`${BASE_URL}/text/${textOne.text_id}`)
    .send()
    .expect(200)
    .expect(response => {
      expect(response.body.message).toEqual("Fetched successfully");
      expect(response.body.data).not.toBeNull();
    });
});

//get paginated texts
test.skip("Should fetch paginated texts", async () => {
  await request(app)
    .get(`${BASE_URL}/text`)
    .send()
    .expect(200)
    .expect(response => {
      expect(response.body.message).toEqual("Fetched with success ");
      expect(response.body.data).not.toBeNull();
    });
});

//update text by text id
test.skip("Should update a text ", async () => {
  await request(app)
    .put(`${BASE_URL}/text/${textOne.text_id}`)
    .send({ lang: textTwo.content[0].lang, text: textTwo.content[0].text })
    .expect(200)
    .expect(response => {
      expect(response.body.message).toEqual("Updated with success");
      expect(response.body.data).not.toBeNull();
    });
});

test.skip("Should calculate words number of a text", async () => {
  await request(app)
    .get(`${BASE_URL}/text/${textOne.text_id}/count`)
    .send()
    .expect(200)
    .expect(response => {
      expect(response.body.message).toEqual("Success");
      // expect(response.body.data).toEqual(29);
    });
});

test.skip("Should calculate words number of a text", async () => {
  await request(app)
    .get(`${BASE_URL}/text/${textOne.text_id}/count/en`)
    .send()
    .expect(200)
    .expect(response => {
      expect(response.body.message).toEqual("Success");
      // expect(response.body.data).toEqual(20);
    });
});

test.only("Should Search in text", async () => {
  await request(app)
    .get(`${BASE_URL}/text/search/famille`)
    .send()
    .expect(200)
    .expect(response => {
      expect(response.body.message).toEqual("Success");
      // expect(response.body.data).toEqual(20);
    });
});
