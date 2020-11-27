# Course Node.js (API)

## Create a project
```
npm init -y
```
## Depedencies
#### Routes and Views
```
npm install express
```
#### Auto refresh Nodemon
```
npm install -D nodemon
```
- In Package.json add script
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  }
```
#### Install Mongo DB with Docker (container)
```
docker pull mongo
```
```
docker run --name mongodb -p 27017:27017 -d mongo
```
##### OR
- Install Docker extension on VScode
- Create a folder Docker
- Create a file "docker-compose.yaml" in folder "Docker"
- Click with mouse rigth button in "compose up"

#### Pagination
```
npm install mongoose-paginate
```
#### Adding CORS (Acces by others domains)
```
npm install cors
```
#### Database connection with ORM mongoose 
```
npm install mongoose
```
#### Models Require
```
npm install require_dir
```
### Test Database mongo with ROBO 3T

```
docker ps
```
```
docker ps -a
```
```
docker start mongodb
```
