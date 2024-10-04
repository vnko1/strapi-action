# Instructions For Working On This Project
## Branch rules
 - Every branch must be created from the ```Main``` branch.
 - Branch name should start with one of the following prefixes:
   - ```feature/```
   - ```bugfix/```
   - ```hotfix/```
 - After the branch prefix, include the task ID and a brief description ```feature/#12-simple-name```
 - Spaces in the branch name should be replaced with ```-```
## Commit rules
 - Commit messages should start with one of the following prefixes:
   - ```added:```
   - ```refactored:```
   - ```changed:```
   - ```fixed:```
   - ```deleted:```
 - After the commit prefix, include a brief description ```added: custom button```
## Pull Request rules
 - The template should be filled out with all required information.
 - The person who created the PR should be assigned.
 - Reviewers should be added.
 - After creation, the label ```For approve``` should be added.
 - At least ```one approval``` is required to merge the PR into the main branch.

   
# Project scripts

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```
