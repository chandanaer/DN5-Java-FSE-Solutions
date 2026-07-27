# Exercise 2 - Git Ignore

## Objective
To understand and implement `.gitignore` to ignore unwanted files and folders in a Git repository.

## Steps Performed
1. Created a new Git repository.
2. Created a sample `.log` file.
3. Created a `log` folder.
4. Created a `.gitignore` file.
5. Added the following rules to `.gitignore`:
   - `*.log`
   - `log/`
6. Added and committed the `.gitignore` file.
7. Verified the repository using `git status`.
8. Confirmed that the `.log` file and `log` folder were ignored successfully.

## .gitignore Rules

```text
*.log
log/
