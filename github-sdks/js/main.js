import { Octokit, App } from "octokit";
console.log(`TOKEN: ${process.env.GH_TOKEN}`)
const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
  await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'k-tmg',
    repo: 'GitHub-Examples',
    ref: 'refs/heads/sdkjs',
    sha: 'aa218f56b14c9653891f9e74264a383fa43fefbd',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })