#!/bin/bash
# EMX Sports — GitHub Setup Script
# Run this once to connect local repo to GitHub
# Usage: bash setup-github.sh YOUR_GITHUB_USERNAME

set -e

USERNAME=${1:-""}

if [ -z "$USERNAME" ]; then
  echo "❌ Usage: bash setup-github.sh YOUR_GITHUB_USERNAME"
  exit 1
fi

REPO_NAME="emxsports-website"
DIR="/Users/oleg/.openclaw/workspace/emxsports"

echo "🚀 Setting up GitHub repo for $USERNAME..."

cd "$DIR"

# Step 1: Auth via gh CLI
echo ""
echo "📌 Step 1: Login to GitHub (browser will open)"
gh auth login --hostname github.com --git-protocol https --web

# Step 2: Create repo
echo ""
echo "📌 Step 2: Creating repo $USERNAME/$REPO_NAME"
gh repo create "$REPO_NAME" \
  --public \
  --description "EMX Sports - Professional Boxing Promotion Website" \
  --source="$DIR" \
  --remote=origin \
  --push

# Step 3: Create staging branch
echo ""
echo "📌 Step 3: Setting up branches"
git checkout -b staging
git push origin staging
git checkout main

# Step 4: Enable GitHub Pages
echo ""
echo "📌 Step 4: Enabling GitHub Pages"
gh api repos/$USERNAME/$REPO_NAME/pages \
  --method POST \
  --field source[branch]=gh-pages \
  --field source[path]=/ 2>/dev/null || true

# Step 5: Add SSH secret for production deploy
echo ""
echo "📌 Step 5: Adding SSH key secret for production deploy"
SSH_KEY=$(cat /Users/oleg/.ssh/github_actions_emxsports)
gh secret set SSH_PRIVATE_KEY --body "$SSH_KEY" --repo "$USERNAME/$REPO_NAME"

# Done!
echo ""
echo "✅ All done!"
echo ""
echo "📦 Repo: https://github.com/$USERNAME/$REPO_NAME"
echo "🌐 Preview (after first push to staging): https://$USERNAME.github.io/$REPO_NAME/"
echo ""
echo "⚠️  ВАЖНО: Добавь публичный SSH ключ на сервер!"
echo "   Ключ: $(cat /Users/oleg/.ssh/github_actions_emxsports.pub)"
echo ""
echo "   Зайди в FastPanel → Файловый менеджер"
echo "   Создай: /var/www/emxsports_co_usr67/.ssh/authorized_keys"
echo "   Вставь туда этот ключ"
