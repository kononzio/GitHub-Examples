import { Octokit, App } from "octokit";
console.log(`TOKEN: ${process.env.GH_TOKEN}`)
const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'k-tmg',
    repo: 'GitHub-Examples',
    ref: 'refs/heads/sdksjs',
    sha: '1e6535c6f5d0abd7d2e89c0591b7b1fb6c471f5e',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
})