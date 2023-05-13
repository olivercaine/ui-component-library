FROM node:14-alpine

# Update .nvm when changing this file:
# docker run --rm -it -w /app -v ${PWD}:/app $(docker build . -q) sh -c 'node -v > .nvmrc'