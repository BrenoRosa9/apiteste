FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma
COPY src ./src
RUN npx prisma generate

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src
COPY package*.json ./

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
