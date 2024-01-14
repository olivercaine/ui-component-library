FROM node:20-alpine

# Add any other required dev tools here

# Update .nvm when changing this file:
# docker run --rm -it -w /app -v ${PWD}:/app $(docker build . -q) sh -c 'node -v > .nvmrc'