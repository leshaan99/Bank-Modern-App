FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm install -D tailwindcss postcss autoprefixer

RUN npx tailwindcss init

CMD ["npm", "run", "dev"]
