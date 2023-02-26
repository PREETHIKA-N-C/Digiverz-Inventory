# Fetching the latest node image on apline linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /Digiverz-Inventory

# Installing dependencies
COPY ./package.json /Digiverz-Inventory
RUN npm install --force

# Copying all the files in our project
COPY . .

# Expose The port

EXPOSE 3300

# Starting our application
CMD npm start