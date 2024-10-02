require 'octokit'

client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])

# Replace with your repository and branch names
repo = 'k-tmg/GitHub-Examples'
base_branch = 'main' # or 'master', depending on your repo
new_branch = 'sdks'

# Get the latest commit SHA of the base branch
sha_latest_commit = client.commits(repo, base_branch).first.sha

# Create the new branch
client.create_ref(
    "k-tmg/GitHub-Examples", 
    "refs/heads/sdks", 
    "1e6535c6f5d0abd7d2e89c0591b7b1fb6c471f5e"
    )