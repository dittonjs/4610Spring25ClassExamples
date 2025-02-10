FROM node:22.13.1-alpine
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .

EXPOSE 3000

# the program we want to run!
CMD ["npm", "run", "dev"]
