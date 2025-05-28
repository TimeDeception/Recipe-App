FROM node:18-alpine
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 5173

# Use nodemon for development
CMD ["npx", "nodemon", "server.js"]