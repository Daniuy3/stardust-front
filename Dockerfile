

ARG NODE_VERSION=24.13.0-slim

FROM node:${NODE_VERSION} AS dependencies
WORKDIR /app

RUN corepack enable
COPY package.json pnpm-workspace.yaml* pnpm-lock.yaml*  ./


RUN pnpm install


FROM node:${NODE_VERSION} AS builder
WORKDIR /app

ARG API_URL
ARG PUBLIC_REDIRECT_URL
ENV API_URL=${API_URL}
ENV PUBLIC_REDIRECT_URL=${PUBLIC_REDIRECT_URL}

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN corepack enable
RUN pnpm build


FROM node:${NODE_VERSION} AS runner

WORKDIR /app

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next
RUN chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 3000

CMD ["node", "server.js"]
