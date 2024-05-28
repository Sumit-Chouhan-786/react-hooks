What is Git?

Git is a distributed version control system designed to handle everything from small to very          large projects with speed and efficiency.  GitHub is a web-based platform that uses Git for version control and offers features for collaboration, such as issue tracking, project management, and more.

 Setting Up Git
1. Installing Git
    Provide installation instructions for various operating systems (Windows, macOS, Linux).
    `git --version` to verify the installation.

2. Configuring Git
    `git config --global user.name "Your Name"`
    `git config --global user.email "your.email@example.com"`
    Explain how to set the default text editor: `git config --global core.editor "code --wait"`

 Basic Git Commands

1. Creating a Repository
    `git init`: Initializes a new Git repository.
     ` git init `
    Explanation: Creates a new subdirectory named `.git` that contains all of your necessary          repository files.

2. Cloning a Repository
    `git clone <repository_url>`: Clones an existing repository.
     ` git clone https://github.com/user/repository.git`
    Explanation: Copies the repository from GitHub to your local machine.

3. Checking Repository Status
    `git status`: Shows the working directory status.
     ` git status`
 Explanation: Displays which changes have been staged, which haven't, and which files aren't   being tracked by Git.

4. Adding Changes
   `git add <file>`: Adds a file to the staging area.
     `git add file.txt`
   `git add .`: Adds all changes in the current directory to the staging area.
     `git add .`
    Explanation: Prepares the changes to be committed by adding them to the staging area.

5. Committing Changes
    `git commit -m "commit message"`: Records changes to the repository.
     `git commit -m "Add initial project files"`
    Explanation: Saves the staged changes with a descriptive message of what was done.

6. Viewing Commit History
    `git log`: Shows the commit history.
     ` git log`
    Explanation: Displays a list of all the commits in the current branch.

Branching and Merging

1. Creating a Branch
   `git branch <branch_name>`: Creates a new branch.
     `git branch feature-branch`
    Explanation: Creates a parallel version of the repository to work on a specific feature or task.

2. Switching Branches
    `git checkout <branch_name>`: Switches to the specified branch.
     ` git checkout feature-branch`
    Explanation: Moves the HEAD pointer to the specified branch, updating the working directory              to match.

3. Merging Branches
    `git merge <branch_name>`: Merges the specified branch into the current branch.
     ` git merge feature-branch `
    Explanation: Combines the changes from the specified branch into the current branch.

4. Deleting a Branch
    `git branch -d <branch_name>`: Deletes the specified branch.
     `git branch -d feature-branch`
   Explanation: Removes the specified branch from the repository.

 Remote Repositories

1. Adding a Remote
    `git remote add <name> <url>`: Adds a remote repository.
     ` git remote add origin https://github.com/user/repository.git`
    Explanation: Links your local repository to a remote one hosted on GitHub.

2. Fetching Changes
    `git fetch <remote>`: Downloads objects and refs from another repository.
     `git fetch origin`
    Explanation: Retrieves changes from the remote repository without merging them into your working branch.

3. Pulling Changes
   `git pull <remote> <branch>`: Fetches and merges changes from the remote branch to your current branch.
     ` git pull origin main`
    Explanation: Updates your current branch with the latest changes from the remote repository.

4. Pushing Changes
    `git push <remote> <branch>`: Pushes your changes to the remote repository.
     ` git push origin main`
    Explanation: Uploads your local changes to the specified branch on the remote repository.

 Advanced Git Commands

1. Stashing Changes
   `git stash`: Temporarily saves changes that you don't want to commit yet.
     `git stash`
    `git stash pop`: Applies the stashed changes.
     `git stash pop`
    Explanation: Stash is useful for saving changes that you’re not ready to commit.

2. Rebasing
   `git rebase <branch>`: Applies commits of the current branch on top of another branch.
     `git rebase main`
    Explanation: Reapplies commits on top of another base tip.

3. Tagging
   `git tag <tag_name>`: Creates a tag.
     `git tag v1.0`

    `git push origin <tag_name>`: Pushes the tag to the remote repository.
     `git push origin v1.0`
    Explanation: Tags are useful for marking release points (e.g., v1.0, v2.0).




