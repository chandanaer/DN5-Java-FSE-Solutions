# Exercise 3 - Git Branching and Merging

## Objective

To understand Git branching and merging by creating a new branch, making changes in the branch, comparing it with the main branch, and merging the changes back into main.

## Steps Performed

1. Initialized a Git repository.
2. Created an initial commit.
3. Created a new branch named `GitNewBranch`.
4. Listed the available branches using `git branch`.
5. Switched to `GitNewBranch`.
6. Created `branch.txt` and added content.
7. Added and committed the changes.
8. Checked the branch status using `git status`.
9. Switched back to the `main` branch.
10. Compared `main` and `GitNewBranch` using `git diff`.
11. Configured and used P4Merge to visually compare the differences.
12. Merged `GitNewBranch` into `main`.
13. Verified the Git history using `git log --oneline --graph --all --decorate`.
14. Deleted `GitNewBranch` after merging.
15. Verified the final repository using `git status`.

## Files

- `main.txt`
- `branch.txt`

## Result

`GitNewBranch` was successfully created, changes were committed, differences were compared using Git and P4Merge, and the branch was successfully merged into `main`.

After merging, `GitNewBranch` was deleted and the working tree was clean.
