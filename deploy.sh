#i/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "Deploying Dist Folder"
git push -f https://github.com/Salem-Tarek/emotion-task.git master:gh-pages

cd -