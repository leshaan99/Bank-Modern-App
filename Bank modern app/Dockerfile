# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies using npm ci for a cleaner install
RUN npm ci

# Copy the rest of the application code to the container
COPY ./ ./

# Install TailwindCSS, PostCSS, and Autoprefixer
RUN npm install -D tailwindcss postcss autoprefixer

# Initialize TailwindCSS configuration
RUN npx tailwindcss init

# Expose the port that the development server runs on (e.g., 3000)
EXPOSE 3000

# Command to run the development server
CMD ["npm", "run", "dev"]
