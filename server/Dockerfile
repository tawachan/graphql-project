FROM node:alpine
# COPY React Project file to container
ENV APP_DIR /prisma
RUN mkdir $APP_DIR
WORKDIR $APP_DIR

# Install dependencies
COPY package.json $APP_DIR/package.json
COPY yarn.lock $APP_DIR/yarn.lock
RUN yarn

# Build react app
COPY . $APP_DIR
CMD yarn start

