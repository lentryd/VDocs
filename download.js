require("dotenv").config();

require("vdocs-vue").default({
  owner: process.env.VUE_APP_GH_OWNER,
  branch: process.env.VUE_APP_GH_BRANCH ?? "main",
  repository: process.env.VUE_APP_GH_REPO,
  folder: "./src/pages",
});
