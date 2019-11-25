FROM node:12

WORKDIR /app/frontend/

COPY ./package.json ./package.json
RUN npm install
RUN npm install react-scripts -g

COPY ./public/ ./public/
COPY ./src/ ./src/

CMD npm start
