# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN apt-get update
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs onS
EXPOSE 3001

# Start the application
CMD npm run migrate && npm run dev