# Stage 1: install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm install

# Stage 2: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# # Stage 3: run
# FROM node:18-alpine
# WORKDIR /app
# COPY --from=builder /app/package.json ./
# COPY --from=builder /app/package-lock.json ./
# COPY --from=builder /app/next.config.mjs ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/.next/standalone ./
# CMD ["npm", "run", "start"]
CMD [ "node", "server.js" ]
