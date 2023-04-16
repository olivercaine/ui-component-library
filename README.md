# ui-component-library

[![Node.js CI](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml) [![Deploy Static Storybook](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml)

Pre-configured React Storybook package for rapidly developing user interfaces

[Demo](https://olivercaine.github.io/ui-component-library)

## Tools & Frameworks

1. [React Storybook](https://storybook.js.org/) for UI components

2. [TypeScript](https://www.typescriptlang.org/) for type-safety on code

3. [Rollup](https://rollupjs.org/) for bundling the package

4. [Husky](https://typicode.github.io/husky) for performing pre-push checks

5. [Concurrently](https://www.npmjs.com/package/concurrently) for running pre-push checks in parallel

## Features

1. Automatic lint fixes using EsLint

2. [Storybook Story snippet](.vscode/snippets.code-snippets)

3. [Story interaction test example](src/ui/basics/Button.stories.tsx)

4. Auto-deploy Storybook to GitHub pages
   1. Enable "Read and write permissions" in [GitHub Repo] > Settings > Actions > General to allow this