# Complete Setup Checklist for Personal Computer

## Phase 1: Basic Software Installation

### 1. Install VSCode
- [ ] Go to https://code.visualstudio.com/
- [ ] Download VSCode for your operating system (Mac/Windows/Linux)
- [ ] Install the application
- [ ] Open VSCode to confirm it works

### 2. Install Git
- [ ] **Mac**: Open Terminal and run `git --version` (macOS will prompt to install if needed)
- [ ] **Windows**: Download from https://git-scm.com/download/win and install
- [ ] **Linux**: Run `sudo apt-get install git` (Ubuntu/Debian) or `sudo yum install git` (Fedora)
- [ ] Verify installation: Open Terminal/Command Prompt and run `git --version`

### 3. Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.personal.email@gmail.com"
```
- [ ] Set your name: `git config --global user.name "Your Name"`
- [ ] Set your email: `git config --global user.email "your.personal.email@gmail.com"`
- [ ] Verify: `git config --list`

## Phase 2: Claude Setup

### 4. Create Claude Account
- [ ] Go to https://claude.ai
- [ ] Sign up with your **personal email**
- [ ] Verify your email address
- [ ] Complete account setup

### 5. Subscribe to Claude Pro (Optional but Recommended)
- [ ] Log into https://claude.ai
- [ ] Click on your profile/settings
- [ ] Choose "Upgrade to Pro" ($20/month)
- [ ] Enter payment information using personal card
- [ ] Confirm subscription

### 6. Get Claude API Key
- [ ] Go to https://console.anthropic.com/
- [ ] Log in with your Claude account
- [ ] Navigate to "API Keys" section
- [ ] Click "Create Key"
- [ ] Copy the API key (SAVE THIS - you won't see it again!)
- [ ] Store it somewhere safe temporarily (you'll need it soon)

## Phase 3: Install Claude Code CLI

### 7. Install Node.js (Required for Claude Code)
- [ ] Go to https://nodejs.org/
- [ ] Download the LTS (Long Term Support) version
- [ ] Install Node.js
- [ ] Verify installation: Open Terminal and run `node --version`
- [ ] Verify npm: Run `npm --version`

### 8. Install Claude Code CLI
```bash
npm install -g @anthropic-ai/claude-code
```
- [ ] Open Terminal
- [ ] Run: `npm install -g @anthropic-ai/claude-code`
- [ ] Wait for installation to complete
- [ ] Verify: Run `claude-code --version`

### 9. Configure Claude Code with API Key
```bash
claude-code auth
```
- [ ] Run: `claude-code auth`
- [ ] When prompted, paste your API key from step 6
- [ ] Press Enter to confirm
- [ ] You should see "Authentication successful"

## Phase 4: Install VSCode Extensions

### 10. Install Claude Code VSCode Extension
- [ ] Open VSCode
- [ ] Click Extensions icon (left sidebar) or press `Cmd+Shift+X` (Mac) / `Ctrl+Shift+X` (Windows)
- [ ] Search for "Claude Code"
- [ ] Click "Install" on the official Anthropic extension
- [ ] Restart VSCode if prompted

### 11. Other Useful Extensions (Optional)
- [ ] "Prettier - Code formatter" (for formatting code)
- [ ] "Live Server" (for testing HTML files)
- [ ] "GitLens" (enhanced Git features)

## Phase 5: Transfer Your Project

### 12. Copy Project from Work Computer

**Option A: Using Git (Recommended)**
- [ ] On work computer: Navigate to project folder in Terminal
- [ ] Run: `git init` (if not already a git repo)
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit"`
- [ ] Create GitHub repo (see step 13)
- [ ] Push to GitHub (see step 14)
- [ ] On personal computer: Clone the repo (see step 15)

**Option B: Manual Transfer**
- [ ] Copy the entire `fix_the_world` folder to a USB drive
- [ ] Or email yourself a ZIP file of the folder
- [ ] Or use cloud storage (Dropbox, Google Drive, iCloud)
- [ ] Transfer to personal computer
- [ ] Extract/copy to a projects folder

### 13. Create GitHub Account & Repository (If using Git)
- [ ] Go to https://github.com
- [ ] Sign up with your **personal email** (or log in if you have an account)
- [ ] Click the "+" icon → "New repository"
- [ ] Name it "fix_the_world"
- [ ] Choose "Public" or "Private"
- [ ] Do NOT initialize with README (since you already have code)
- [ ] Click "Create repository"
- [ ] Copy the repository URL (will look like: `https://github.com/yourusername/fix_the_world.git`)

### 14. Push Code to GitHub (From Work Computer)
```bash
git remote add origin https://github.com/yourusername/fix_the_world.git
git branch -M main
git push -u origin main
```
- [ ] In Terminal, navigate to your project folder
- [ ] Run: `git remote add origin https://github.com/yourusername/fix_the_world.git`
- [ ] Run: `git branch -M main`
- [ ] Run: `git push -u origin main`
- [ ] Enter GitHub credentials if prompted

### 15. Clone Repository on Personal Computer
```bash
cd ~/Documents
mkdir projects
cd projects
git clone https://github.com/yourusername/fix_the_world.git
```
- [ ] Open Terminal on personal computer
- [ ] Navigate to where you want your projects: `cd ~/Documents`
- [ ] Create projects folder: `mkdir projects` (if doesn't exist)
- [ ] Navigate into it: `cd projects`
- [ ] Clone: `git clone https://github.com/yourusername/fix_the_world.git`
- [ ] Navigate into project: `cd fix_the_world`

## Phase 6: Verify Everything Works

### 16. Open Project in VSCode
- [ ] Open VSCode
- [ ] File → Open Folder
- [ ] Select your `fix_the_world` folder
- [ ] Confirm all files are there (index.html, app.js, data.js, styles.css, etc.)

### 17. Test the Website
- [ ] Right-click on `index.html` in VSCode
- [ ] Select "Open with Live Server" (if you installed Live Server extension)
- [ ] OR: Double-click `index.html` in Finder/File Explorer to open in browser
- [ ] Confirm the website loads and works correctly

### 18. Test Claude Code
- [ ] In VSCode, open the Command Palette: `Cmd+Shift+P` (Mac) / `Ctrl+Shift+P` (Windows)
- [ ] Type "Claude Code" and select "Claude Code: Open Chat"
- [ ] Or look for the Claude icon in the left sidebar
- [ ] Try sending a message to Claude
- [ ] Confirm Claude responds

### 19. Test Claude Code in Terminal
```bash
claude-code chat
```
- [ ] Open Terminal in VSCode (Terminal → New Terminal)
- [ ] Navigate to your project: `cd ~/Documents/projects/fix_the_world`
- [ ] Run: `claude-code chat`
- [ ] Type a message and press Enter
- [ ] Confirm Claude responds
- [ ] Type `exit` to quit

## Phase 7: AdSense Setup (After Site is Live)

### 20. Deploy Website (Choose One Option)

**Option A: GitHub Pages (Free)**
- [ ] Go to your GitHub repository settings
- [ ] Scroll to "GitHub Pages" section
- [ ] Select branch: `main`, folder: `/ (root)`
- [ ] Click Save
- [ ] Your site will be live at: `https://yourusername.github.io/fix_the_world`

**Option B: Netlify (Free)**
- [ ] Go to https://netlify.com
- [ ] Sign up with GitHub
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Connect to GitHub and select your repository
- [ ] Click Deploy
- [ ] Your site will be live at a Netlify URL

**Option C: Vercel (Free)**
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub
- [ ] Click "Add New Project"
- [ ] Import your GitHub repository
- [ ] Click Deploy
- [ ] Your site will be live at a Vercel URL

### 21. Sign Up for Google AdSense
- [ ] Go to https://www.google.com/adsense
- [ ] Click "Get Started"
- [ ] Enter your live website URL (from step 20)
- [ ] Enter your **personal email**
- [ ] Select your country
- [ ] Accept terms and conditions
- [ ] Click "Start using AdSense"

### 22. Add AdSense Verification Code
- [ ] Copy the AdSense verification code provided
- [ ] Open `index.html` in VSCode
- [ ] Paste the code in the `<head>` section (after line 11, before `</head>`)
- [ ] Save the file
- [ ] Commit and push to GitHub (if using Git):
  ```bash
  git add index.html
  git commit -m "Add AdSense verification code"
  git push
  ```
- [ ] Wait for deployment to update (usually 1-5 minutes)
- [ ] Return to AdSense and click "Verify"

### 23. Wait for AdSense Approval
- [ ] Google will review your site (typically 1-7 days, sometimes longer)
- [ ] Check your email for approval notification
- [ ] Once approved, you can place ad codes in your site

## Phase 8: Optional But Recommended

### 24. Set Up Git Properly
- [ ] Create a `.gitignore` file in your project root
- [ ] Add common ignores:
  ```
  .DS_Store
  node_modules/
  .env
  .vscode/
  *.log
  ```

### 25. Back Up Your API Keys
- [ ] Store your Claude API key in a password manager (1Password, LastPass, etc.)
- [ ] Or in a secure note on your personal email
- [ ] **Never** commit API keys to Git/GitHub

### 26. Bookmark Important Links
- [ ] https://claude.ai (Claude web interface)
- [ ] https://console.anthropic.com/ (API dashboard)
- [ ] https://github.com/yourusername/fix_the_world (your repository)
- [ ] Your live site URL
- [ ] https://www.google.com/adsense (AdSense dashboard)

## Troubleshooting

### If Claude Code doesn't work:
- [ ] Check API key is correct: `claude-code auth` and re-enter
- [ ] Check Node.js is installed: `node --version`
- [ ] Reinstall Claude Code: `npm uninstall -g @anthropic-ai/claude-code` then reinstall

### If Git push fails:
- [ ] Check you're logged into GitHub
- [ ] Try using Personal Access Token instead of password
- [ ] Go to GitHub Settings → Developer Settings → Personal Access Tokens → Generate new token

### If website doesn't load locally:
- [ ] Check all files are in the same folder
- [ ] Try opening in a different browser
- [ ] Check browser console for errors (F12 or right-click → Inspect)

---

## Summary Checklist
- [ ] VSCode installed
- [ ] Git installed and configured
- [ ] Claude account created (personal email)
- [ ] Claude API key obtained
- [ ] Node.js installed
- [ ] Claude Code CLI installed and authenticated
- [ ] VSCode extensions installed
- [ ] Project transferred to personal computer
- [ ] Project pushed to GitHub
- [ ] Website tested locally
- [ ] Claude Code tested and working
- [ ] Website deployed (optional)
- [ ] AdSense signed up (optional)

---

**Estimated Time: 2-3 hours**

**Questions?** You can ask Claude (once set up) for help with any of these steps!
