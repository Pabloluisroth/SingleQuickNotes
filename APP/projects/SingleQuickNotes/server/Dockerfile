FROM node:14.21.1
WORKDIR /SingleQuickNotes
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD ["npm", "start"]
