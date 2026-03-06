# EMX Sports — Development Workflow

## 🏗️ Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** (styling)
- **GitHub Actions** (CI/CD)
- **GitHub Pages** (preview/staging)
- **Production**: emxsports.com (FastPanel VPS)

## 🔄 Branch Strategy

```
main          → production (emxsports.com)
staging       → auto-preview on GitHub Pages
feature/*     → your work branches
```

## 🚀 Daily Workflow

### Start new feature:
```bash
git checkout staging
git pull
git checkout -b feature/fighter-page
```

### Make changes, then:
```bash
npm run build          # check it builds
git add -A
git commit -m "feat: add fighter detail page"
git push origin feature/fighter-page
```

### Open Pull Request:
→ GitHub → New PR → base: `staging`
→ GitHub Actions builds preview automatically
→ Preview URL posted in PR comments

### Review & merge to staging:
→ Check preview on GitHub Pages
→ Merge PR to `staging`

### Deploy to production:
→ When staging looks good → PR from `staging` to `main`
→ Merge → auto-deploys to emxsports.com

## 🤖 AI Tools Usage

| Task | Tool | Why |
|------|------|-----|
| New component | **Cursor** | Fast, included in subscription |
| Complex refactor | **Claude Code** | Deep reasoning |
| Quick edit | **VS Code** | No AI needed |
| Architecture decision | **OpenClaw** | Orchestration |

## 💰 API Cost Rules
- Simple edits → VS Code / Cursor only
- Don't start Claude Code for < 20 lines changes
- Cursor CMD+K for inline changes
- OpenClaw main session only for planning

## 🧪 Testing Preview
After push to `staging` branch:
1. GitHub Actions runs (1-2 min)
2. Preview URL: `https://YOUR_USERNAME.github.io/emxsports/preview/COMMIT_SHA/`
3. Also available on your GitHub repo → Deployments tab

## 📁 Project Structure
```
src/
  app/           → Next.js pages
  components/    → Reusable components
public/
  images/        → Real EMX photos (logo, fighters)
.github/
  workflows/     → CI/CD pipelines
```
