npm run lint:fix

if [[ `git status --porcelain` ]]; then
  echo 'Changes'
  git config --global user.email "olliecaine@gmail.com"
  git config --global user.name "Oliver Caine"
  git add -A && git commit -m "Performing auto-lint fix"
  git push --no-verify
  echo "Stopping build due to lint fixes"
  exit 1
fi