const fs = require("fs");

fs.copyFileSync(
  "tasks/generate-server-mjs/assets/server.mjs",
  "dist/datapoint/server/server.mjs");
