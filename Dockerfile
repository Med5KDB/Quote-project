FROM node:14.21.2
WORKDIR /app
COPY package*.json .
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Immutability Images are read-only; if you change an image, you create a new image.

# A container is a unit of software that encapsulates everything needed to build, ship, and run applications.  

# Docker containers are not a good fit for applications based on monolithic architecture or applications that require high performance or security.
# Docker architecture consists of the Docker client, the Docker host, and the container registry.

# The Docker host contains objects such as the Dockerfiles, images, containers, networks, storage volumes, and other objects, such as plugins and add-ons.
# Docker uses networks to isolate container communications.
# Docker uses volumes and binds mounts to persist data even after a container stops running.
# Plugins, such as storage plugins, provide the ability to connect to external storage platforms.