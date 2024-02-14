FROM node
ENV NODE_ENV production
ENV DATABASE_URL=postgres://postgres:postgres@31.129.49.45/posttweet
WORKDIR /application 
COPY ./client/dist ./dist
COPY ./server/package.json .  
COPY ./server/package-lock.json .
RUN npm ci
COPY ./server .
EXPOSE 3000
CMD ["npm", "start"]