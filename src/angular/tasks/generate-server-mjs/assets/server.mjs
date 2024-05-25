import { app as appEn } from "./en/server.mjs";
import { app as appPt } from "./pt/server.mjs";

const express = require("express");

const host = process.env.DATAPOINT_EXPRESS_HOST || "127.0.0.1";
const port = process.env.DATAPOINT_EXPRESS_PORT || 12080;
const server = express();

server.use('/en', appEn());
server.use('/pt', appPt());

server.get('/', (req, res) => {
  const lang = req.acceptsLanguages([ "en", "pt" ]) || "en";
  res.redirect(301, `/${lang}`);
});

server.listen(port, host, () => {
  console.log(`Express is listening on http://${host}:${port}/.`);
});
