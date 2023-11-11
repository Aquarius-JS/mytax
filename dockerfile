FROM node:18.15.0
WORKDIR /app
COPY . /app
ENTRYPOINT [ "npm","i" ]
RUN npm run serve