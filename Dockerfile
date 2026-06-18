# Dev Dockerfile for the Next.js portfolio
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source
COPY . .

EXPOSE 3000

# Bind to 0.0.0.0 so the dev server is reachable from outside the container
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
