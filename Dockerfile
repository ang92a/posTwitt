FROM node
ENV NODE_ENV production
WORKDIR /application 
COPY ./client/dist ./dist
COPY ./server/package.json .  
COPY ./server/package-lock.json .
ENV DATABASE_URL=postgres://postgres:postgres@31.129.49.45:5432/posttweet
RUN npm ci
COPY ./server .
EXPOSE 3000
CMD ["npm", "start"]