## Git Hidden Folder
There is a hidden folder called `.git ` which tells your project is a git repo.

If we want to create a git repo in a new project we create the folder and then initiakize that repo using `git init`
```
mkdir /workspace/tmp/new-project
cd /workspace/tmp/new-project
git init
touch Readme.md
code Readme.md
git status
git add Readme.md
# makes changes to readme.md
git commit -m "add readme file"
```

## Cloning

We can clone three ways: HTTPS, SSH, GitHub CLI

Since we are using GitHub codespaces, we'll create temporary directory in our workspace.

```sh
mkdir /workspace/tmp
cd /workspace/tmp
```

### HTTPS

```sh
git clone https://github.com/kononzio/GitHub-Examples.git
cd GitHub-Examples
```

> You'll need to generate a Parsonal Access Token (PAT)
https://github.com/settings/token

You will use a PAT as a password wwhen you login
- Give it access to Contents for Commits

### SSH
```
git clone git@github.com:kononzio/GitHub-Examples.git
cd GitHub-Examples
```

We will need to create our own SSH rsa ket pair
```
ssh-keygen -t ed25519 -C "ax.k.onoda@gmail.com"
```


For WSL users and if you create a non default key you might need to add it

```
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

We can test our connection here: 
```
ssh -T git@github.com
```

### GitHub CLI

Install the CLI

eg. macOS

```
brew update
brew install gh
```


```
gh login
gh repo clone kononzio/GitHub-Examples
```

## Commits
When we want to commit code we can write git commit which will open up the commit edit messages in the editor of choice.

```sh
git commit
```

set the global editor 
```
git config --global core.editor emacs
```

Make a commit and commit message without opening editor
```sh
git commit -m "add another exclamation"
```

## Branches

List of Branches

```
git branch
```

Create a new branch

```
git branch dev
```

Checkout the branch

```
git checkout dev
```

## Remotes
We can add remote but often you will just add remote via upstream when adding a branche

```
git remote add ...
git branch -u origin new-feature
```

## Stashing

```
git stash list
git stash
git stash save my-name
git stash apply
git stash pop
```

## Marging
```
git checkout dev
git merge main
```

## Add
When we want to stage changes that will be included in commit
We cann use . to add all possible files.

```
git add Readme.md
git add .
```

## git reset
Reset allows you to move staged changes to unchanged. This is useful when you to revert all files not to be commited

```
git add .
git reset
```

> git reset revert a git add.

## git status
git status shows you what file will or will not be commited.

```
git status
```

## gitconfig file
The gitconfig file is what stores your global configurations for git such as email, name, editor or more.

Showing the content of r .gitconfig file.
```
git config --list
```

When you first install Git on your machine you are surposed to set up
your name and email

```
git config --global user.name "Joe Doe"
git config --global user.email "joeDoe@example.com"
```

## Log

git log shows recent git commits to the git tree

## Git push
When we want to push a repo to our remote orrigin

```
git push
```