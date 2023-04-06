if  [[ ${GITHUB_REF_TYPE} != tag ]] ;
then
    echo this push is not a tag
    exit 1
fi

DRY_RUN_FLAG=""

if  [[ ${dryrun} == "true" ]] ;
then
    DRY_RUN_FLAG="--dry-run"
fi

VERSION=${GITHUB_REF_NAME:1}

mkdir -p $HOME/.ssh
ssh-keyscan github.com >> $HOME/.ssh/known_hosts
echo "$SSH_PRIVATE_KEY" > $HOME/.ssh/id_rsa
chmod 400 $HOME/.ssh/id_rsa

git config --global user.email "gitbot@learnn.com"
git config --global user.name "NNBot"

cd ./packages/designn
pnpm version --no-git-tag-version --new-version $VERSION

git add .
git commit -m "v$VERSION"
$(git push $DRY_RUN_FLAG origin HEAD:master)
 
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> $HOME/.npmrc
eval "pnpm publish $DRY_RUN_FLAG --access=public --git-checks false"
