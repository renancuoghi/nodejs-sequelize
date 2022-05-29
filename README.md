# Nodejs + Sequelize

This project was created just to know sequelize orm lib

## Installation

Use docker-compose, docker-compose has a MySQL container and application container. The application is in rest-api path.

```bash
sudo docker-compose up -d --build
```
## Default database access
```bash
Database appdb
User: user
Password: user
Phpmyadmin: localhost:8099
```

## Application

## Frontend react

Just access on http://localhost:3000, if you want to run without docker just npm start. But didn't forget to stop frontend container. 

## Backend Nodejs

Application container is running with nodemon, so all changes will update into container.
```bash
URL: http://localhost:5000
# Root path will try to connect to database and sync database.
```
## Role routes
```bash
# create role
POST localhost:5000/role
{
    "name" : "Admin"
}
```
## User routes
```bash
# paginate users
POST localhost:5000/user/list
{
    "limit": 10,
    "offset": 0
}
# create user
POST localhost:5000/user
{
    "name": "Another user2",
    "email": "another@test2.com",
    "roleId" : 1
}
```

```
## License
[MIT](https://choosealicense.com/licenses/mit/)
