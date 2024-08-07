# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Install TailwindCSS, PostCSS, and Autoprefixer
RUN npm install -D tailwindcss postcss autoprefixer

# Initialize TailwindCSS configuration
RUN npx tailwindcss init

# Expose the port that the Vite dev server runs on
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]
