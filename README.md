
This project was with react js and sails js

## Available Scripts

1. install mongodb.
2.  install node js.
3.  install Sails js.

#### `npm install sails -g`

4.  install nodemon
#### `npm install nodemon -g`

5. clone repository on github [amrilsyaifa](https://github.com/amrilsyaifa/api_tracker.git)

#### `git clone https://github.com/amrilsyaifa/api_tracker.git`
or download zip

6. enter the folder :
#### `cd api_tracker`
#### `npm install`


7. run app 
#### `nodemon`
#### `sails lift`


open postman or insomnia [https://localhost:1337](https://localhost:1337)

9. Detail Api

POST [http://localhost:1337/api/register](http://localhost:1337/api/register)
form-data
```javascript
{"email": "amril@gmail.com", "username": "amril", "password": "12345"}
```
result
```javascript
{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiNWNlYWE4NTlkNWE3OTgwZWU0OGFmYmUyIiwiZW1haWwiOiJhbXJpbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcmlsIiwiaWF0IjoxNTU4ODgyMzkzLCJleHAiOjE1NTg5Njg3OTN9.VLcFo5FhjIZxQuOU9YgIcx1E1wEi9e6ZJ84r6M8mXGY",
"info": "user create",
"username": "amril",
"email": "amril@gmail.com" }
```

POST [http://localhost:1337/api/login](http://localhost:1337/api/login)
form-data
```javascript
{ "username": "amril", "password": "12345"}
```
or
```javascript
{ "username": "amril@gmail.com", "password": "12345"}
```
result
```javascript
{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiNWNlYWE4NTlkNWE3OTgwZWU0OGFmYmUyIiwiZW1haWwiOiJhbXJpbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFtcmlsIiwiaWF0IjoxNTU4ODgyNjIwLCJleHAiOjE1NTg5NjkwMjB9.6KvtK3Tnp_wRa-mplTbHUaVLPKBgakGaa_w0DfjhB1Q",
"username": "amril",
"email": "amril@gmail.com" }
```

GET [http://localhost:1337/api/account](http://localhost:1337/api/account)

result
```javascript
{ "account": [
        {
            "createdAt": 1558882393843,
            "updatedAt": 1558882393843,
            "id": "5ceaa859d5a7980ee48afbe2",
            "email": "amril@gmail.com",
            "username": "amril",
            "password": "$2b$10$Q5FR8rlwxyjZK2PAAsi9J.fs3jTZOyf4vPsDHbxXuLORZ6oApskHW"
        }  
    ] }
```