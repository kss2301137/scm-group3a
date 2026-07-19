# Web Project - SCM Group 3A

A collaborative web project built with HTML, CSS, and JS. 

## Files

- `index.html`: The landing page / homepage.
- `about.html`: About page (to be built out).
- `academics.html`: Academics page (to be built out).
- `campus-life.html`: Campus Life page (to be built out).
- `facilities.html`: Facilities page (to be built out).
- `contact.html`: Contact page (to be built out).
- `style.css`: The central stylesheet for the project.
- `images/`: Directory to hold image assets.

---

## Team Collaboration Workflow

Please follow this step-by-step guide to collaborate on our project:

### Step 1: Repository Owner (kss2301137)
1. **Invite collaborators** by opening the repository on GitHub.
2. Click **Settings**.
3. Click **Collaborators**.
4. Click **Add people**.
5. Enter each group member's GitHub username.
6. Click **Add**.

*Note: Each member must check their email or GitHub notifications and accept the invitation.*

### Step 2: Each Group Member
**Clone the repository:**
Copy the repository URL and run:
```bash
git clone https://github.com/kss2301137/scm-group3a.git
```

**Go into the project folder:**
```bash
cd scm-group3a
```

**Check the files:**
```bash
ls
```
*(You should see `index.html`, `style.css`, etc.)*

**Check the current branch:**
```bash
git branch
```
*Output:* `* main`

### Step 3: Create Your Own Branch
Each member should create a branch using their own name.
*Example:*
```bash
git checkout -b your-name
```
Verify:
```bash
git branch
```

### Step 4: Edit Your Assigned File
Open the project in VS Code:
```bash
code .
```
Each person should edit only their assigned page (`about.html`, `academics.html`, `campus-life.html`, `facilities.html`, or `contact.html`).

> **IMPORTANT:** 
> Please only build out your content inside the `<main>` tags. The navigation `<header>` (and any global `<footer>` you copy over from `index.html`) are already designed. **Do not redo or modify the header and footer.**

### Step 5: Save the File
Press `Ctrl + S` (Windows) or `Command + S` (Mac).

### Step 6: Check the Changes
```bash
git status
```
*Output should show:* `modified: your-file.html`

### Step 7: Add the Changes
```bash
git add .
```

### Step 8: Commit
```bash
git commit -m "Added my personal details to my assigned page"
```

### Step 9: Push Your Branch
Push your local branch to GitHub:
```bash
git push origin your-name
```

### Step 10: Create a Pull Request
1. Open the repository on GitHub (`https://github.com/kss2301137/scm-group3a`).
2. You will see a prompt saying **Compare & pull request**. Click it.

### Step 11: Write the Pull Request
- **Title:** Added my details to [your page].
- **Description:** I added my information and code to my assigned section.
- Click **Create pull request**.

### Step 12: Repository Owner
Only the repository owner should perform these steps to merge code:
1. Open **Pull requests** on GitHub.
2. Click the specific request.
3. Review the changes.
4. Click **Merge pull request**.
5. Click **Confirm merge**.

*Repeat this process for every member's pull request.*

### Step 13: Everyone Updates Their Local Repository
After each merge, everyone should update their local computers by running:
```bash
git checkout main
git pull origin main
```
This downloads the latest version of the project containing everyone's combined work.

---

### Commands Summary
```bash
git clone https://github.com/kss2301137/scm-group3a.git
cd scm-group3a
git checkout -b your-name

# Edit your assigned HTML file

git status
git add .
git commit -m "Added my details"
git push origin your-name

# Then create a Pull Request on GitHub.
```
