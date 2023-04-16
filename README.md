# ui-component-library

[![Node.js CI](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml) [![Deploy Static Storybook](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml)

## Tools & Frameworks

1. [React Storybook](https://storybook.js.org/) for UI components

2. [TypeScript](https://www.typescriptlang.org/) for code type safety

3. [Rollup](https://rollupjs.org/) for building the package

4. [Husky](https://typicode.github.io/husky) for performing pre-push checks

5. [Concurrently](https://www.npmjs.com/package/concurrently) for running pre-push checks in parallel

## Features

1. Auto-lint using EsLint
2. [Storybook Story snippet](.vscode/snippets.code-snippets)
3. [Story interaction test example](src/ui/basics/Button.stories.tsx)
4. Auto deploy Storybook to GitHub pages ([demo](https://olivercaine.github.io/ui-component-library)
   1. Enable "Read and write permissions" in [GitHub Repo] > Settings > Actions > General to allow this