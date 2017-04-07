
# Contributing to FilmFinder

Hello! Please read the following before contributing to the app!

# Git Workflow

## Getting started
Make sure that you have properly forked the repo before cloning the repo into your local workstation.

1) Clone repository onto your local workstation
2) Upon cloning make sure to add the remote for your upstream repository.
```
$ git clone https://github.com/[insert_username]/filmfinder.git
$ git remote add upstream https://github.com/bbtran/filmfinder.git
```

### Pulling from upstream
1) Before pulling down from upstream, make sure that your edits have been staged by using ```git add``` or ```git stash``` (you can always return to your stashed changes).

2) Pull down using rebase
```
$ git pull upstream dev --rebase
```

### Pushing Code

1) Push your work upto your local repository
```
$ git add . or [file name]
$ git commit -m "[ INSERT COMMIT MESSAGE ]"
$ git push origin master
```

## Git Commit Messages

### Git Commit Messages
* Use the present tense ("Add feature..." not "Added feature...")
* Use the imperative mood ("...move cursor to..." not "...moves cursor to...")
* Limit the first line to 72 characters or less
* Delimit your key chages using "|" ("Edit feature | Add route | etc...")
* Consider starting the commit message with the following:
    * [ REFACTOR ] - when improving the format/structure of the code
    * [ MEMO ] - when writing docs
    * [ BUGFIX ] - when fixing a bug
    * [ FIRE ] - when removing code or files
    * [ DEV ] - when changing dependencies or configuring Webpack
    * [ FEAT ] - when changing/adding features
* Commit frequently to avoid chaining together commits (Try not to do this: ```[ REFACTOR | BUGFIX | DEV ]``` )

### Multiline Commits
When implementing complex features make sure to provide a thorough descriptions of the feature within your commit message. Provide 2-3 sentences describing the feature, how to use it, and any outstanding issues on your feature.

```
$ git add .
$ git commit
i
[commit messages]
esc
$ :wq
```
