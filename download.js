require("dotenv").config();
const { default: parse, IGNORE_FILES } = require("vdocs-vue");
IGNORE_FILES.push(/package\-lock/);
parse({
  owner: process.env.VUE_APP_GH_OWNER,
  branch: process.env.VUE_APP_GH_BRANCH ?? "main",
  repository: process.env.VUE_APP_GH_REPO,
  folder: "./src/pages",
});
