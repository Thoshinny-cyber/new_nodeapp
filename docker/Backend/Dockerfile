FROM node
WORKDIR /app
COPY package.json ./
RUN npm install
#COPY . .
COPY ./ /app
EXPOSE 3001
CMD [ "npm","start" ]
