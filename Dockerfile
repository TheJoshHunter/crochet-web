### Stage 1 Build ###
FROM node:14.16-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2 RUN ###
FROM nginx:1.19.10-alpine 
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/cookbook-app /usr/share/nginx/html
