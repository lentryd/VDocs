import { Plugin } from "vue";
import marked from "marked";
import hljs from "highlight.js";
import hljsWithLines from "./hljsWithLines";

marked.use({
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

interface ProjectConfig {
  repo: string;
  owner: string;
  branch: string;
  startPoint: string;
}

interface RepoInfo {
  name: string;
  description: string;
  stars: number;
  license: string;
  language: string;
}

const config = {
  owner: process.env.VUE_APP_GH_OWNER,
  repo: process.env.VUE_APP_GH_REPO,
  branch: process.env.VUE_APP_GH_BRANCH ?? "main",
  startPoint: process.env.VUE_APP_STARTPOINT ?? "README.md",
};

function getRepoInfo(): Promise<RepoInfo> {
  const { owner, repo } = config;

  return fetch(`https://api.github.com/repos/${owner}/${repo}`)
    .then((res) => {
      if (!res.ok)
        throw new Error(
          "Не удалось получить информацию о репозитории. Код: " + res.status
        );
      else return res.json();
    })
    .then(({ name, description, stargazers_count, license, language }) => ({
      name,
      description,
      stars: stargazers_count,
      license: license.spdx_id,
      language,
    }));
}

function getRepoPage(path: string): Promise<string> {
  const { owner, repo, branch } = config;
  path = path.replace(/^\//, "");

  return fetch(
    `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`
  )
    .then((res) => {
      if (!res.ok)
        throw new Error(
          "Не удалось получить файл из репозитория. Код: " + res.status
        );
      else return res.text();
    })
    .then((src) => {
      const extension = path.match(/^.*\.(.+)$/)?.[1] ?? "";

      return extension == "md" ? marked(src) : hljsWithLines(src, extension);
    });
}

const plugin: Plugin = {
  install(app) {
    app.config.globalProperties.$projectConfig = config;

    app.config.globalProperties.$projectInfo = getRepoInfo;

    app.config.globalProperties.$projectPage = getRepoPage;
  },
};

export default plugin;

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    /** Настройки проекта */
    $projectConfig: ProjectConfig;

    /** Информация о репозитории */
    $projectInfo: () => Promise<RepoInfo>;

    /** Файл в репозитории */
    $projectPage: (path: string) => Promise<string>;
  }
}
