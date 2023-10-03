# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install project dependencies using yarn (yarn is generally faster and more reliable for Node.js projects)
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the application (if needed)
RUN yarn build

# Expose the port your application will run on (in this case, 3000)
EXPOSE 3000

# Start the application with npm or yarn
CMD ["npm", "start"]
