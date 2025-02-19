FROM node:22.13.1-alpine
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .

# the program we want to run!
CMD ["npm", "run", "dev"]
