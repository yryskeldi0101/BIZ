# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Specify the command to run your application
CMD ["node", "app.js"]
