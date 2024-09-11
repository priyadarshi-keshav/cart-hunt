# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production (if you want to build it)
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to start the app
CMD ["npm", "start"]
