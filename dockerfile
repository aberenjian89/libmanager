FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
CMD ng build --prod
COPY . /app
RUN npm run
EXPOSE 3001
