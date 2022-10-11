# Build site and deploy it to Github Pages 🚀
This Action will Build a site based on your repository and deploy it on Github Pages.

## Getting Started 🎉
1. Create a Github Actions Workflow file and add this to it
```yml
name: Build Github Pages
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Build-Vue
      uses: lentryd/VDocs@1
      with:
        username: ${{ github.repository_owner }}
        reponame: ${{ github.event.repository.name }}
        branch: ${{ github.ref_name }}
        token: ${{ secrets.GITHUB_TOKEN }} # Leave this line unchanged
```
2. Go to Settings -> Scroll down to GitHub Pages -> Select `gh-pages` as branch and `/` as directory 

## Options 🔧
|   Name   |            Description           |     Default    | Required |
|:--------:|:--------------------------------:|:--------------:|:--------:|
| username |           Your username          |        -       |     ✅    |
| reponame |       Your repository name       |        -       |     ✅    |
|  branch  |      Your repository branch      |        -       |     ✅    |
|   gtag   |     Your google analytic tag     |        -       |     ❎    |
|  token   | Please leave this line unchanged |        -       |     ✅    |
