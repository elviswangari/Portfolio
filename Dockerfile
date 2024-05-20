FROM node:16-alpine

# Install pnpm globally
RUN npm install -g pnpm@8

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN pnpm install --silent
RUN pnpm install 
#react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
