
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

#### `Account`
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


besides using account use bearer token

#### `Project`

POST [http://localhost:1337/api/project](http://localhost:1337/api/project)
form-data
```javascript
{"title": "api-tracker", "description": "api for tracking issue"}
```
result
```javascript
{ "create": {
    "createdAt": 1558883038778,
    "updatedAt": 1558883038778,
    "id": "5ceaaadefa06310f5c7f80d2",
    "title": "api-tracker",
    "description": "api for tracking issue"
} }
```

GET [http://localhost:1337/api/project](http://localhost:1337/api/project)

result
```javascript
{ 
    "createdAt": 1558883038778,
    "updatedAt": 1558883038778,
    "id": "5ceaaadefa06310f5c7f80d2",
    "title": "api-tracker",
    "description": "api for tracking issue"
}
```

GET with ID [http://localhost:1337/api/project/5ceaaadefa06310f5c7f80d2](http://localhost:1337/api/project/5ceaaadefa06310f5c7f80d2)

result
```javascript
{ 
    "createdAt": 1558883038778,
    "updatedAt": 1558883038778,
    "id": "5ceaaadefa06310f5c7f80d2",
    "title": "api-tracker",
    "description": "api for tracking issue"
}
```


UPDATE [http://localhost:1337/api/project/5ceaaadefa06310f5c7f80d2](http://localhost:1337/api/project/5ceaaadefa06310f5c7f80d2)
form-data
```javascript
{"title": "tes-api v1", "description": "testing api v1"}
```
result
```javascript
{ "updateProject": [
    {
        "createdAt": 1558883038778,
        "updatedAt": 1558883264544,
        "id": "5ceaaadefa06310f5c7f80d2",
        "title": "tes-api v1",
        "description": "testing api v1"
    }
] }
```

DELETE [http://localhost:1337/api/project/5ceaa3a62ef4ef0e8fce2137](http://localhost:1337/api/project/5ceaa3a62ef4ef0e8fce2137)

result
```javascript
{ 
    "delete": "ID = 5ceaa3a62ef4ef0e8fce2137"
}
```


#### `Tracking Issue`

POST [http://localhost:1337/api/project/issues](http://localhost:1337/api/project/issues)
form-data
```javascript
{"summary": "get Api problem", "description": "after get API 404","assign": "5cea93ab54f6730d73ba0240", "priority":"hight", "project":"5ceaaadefa06310f5c7f80d2"}
```
result
```javascript
{ "create": {
        "createdAt": 1558883580049,
        "updatedAt": 1558883580049,
        "id": "5ceaacfcfa06310f5c7f80d3",
        "summary": "get Api problem",
        "description": "after get API 404",
        "state": "open",
        "priority": "high",
        "issueBug": "",
        "assign": "5cea93ab54f6730d73ba0240",
        "project": "5ceaaadefa06310f5c7f80d2",
        "handler": null
    } }
```

GET [http://localhost:1337/api/project/issues/](http://localhost:1337/api/project/issues/)

result
```javascript
{ 
        "createdAt": 1558883580049,
        "updatedAt": 1558883580049,
        "id": "5ceaacfcfa06310f5c7f80d3",
        "summary": "get Api problem",
        "description": "after get API 404",
        "state": "open",
        "priority": "high",
        "issueBug": "",
        "assign": {
            "createdAt": 1558877099405,
            "updatedAt": 1558877099405,
            "id": "5cea93ab54f6730d73ba0240",
            "email": "amrilsyaifa@gmail.com",
            "username": "amrilsyaifa",
            "password": "$2b$10$a1Jh6caGXYaXdzZJ25JTDOSQGBZQT68/ijXkmggFuV4a6kpcddgUG"
        },
        "project": {
            "createdAt": 1558883038778,
            "updatedAt": 1558883264544,
            "id": "5ceaaadefa06310f5c7f80d2",
            "title": "tes-api v1",
            "description": "testing api v1"
        },
        "handler": null
}
```

GET with ID [http://localhost:1337/api/project/issues/5ceaacfcfa06310f5c7f80d3](http://localhost:1337/api/project/issues/5ceaacfcfa06310f5c7f80d3)

GET issue OPEN [http://localhost:1337/api/project/issues/open](http://localhost:1337/api/project/issues/open)

GET issue CLOSE [http://localhost:1337/api/project/issues/close](http://localhost:1337/api/project/issues/close)


UPDATE [http://localhost:1337/api/project/issues/5ceaacfcfa06310f5c7f80d3](http://localhost:1337/api/project/issues/5ceaacfcfa06310f5c7f80d3)

form-data
```javascript
{"handler": "5cea93ab54f6730d73ba0240", "issueBug": "close after install package","state": "close"}
```

result
```javascript
{ 
"createdAt": 1558883580049,
    "updatedAt": 1558883831316,
    "id": "5ceaacfcfa06310f5c7f80d3",
    "summary": "get Api problem",
    "description": "after get API 404",
    "state": "close",
    "priority": "high",
    "issueBug": "close after install package",
    "assign": "5cea93ab54f6730d73ba0240",
    "project": "5ceaaadefa06310f5c7f80d2",
    "handler": "5cea93ab54f6730d73ba0240"
}
```



DELETE [http://localhost:1337/api/project/issues/5ceaacfcfa06310f5c7f80d3](http://localhost:1337/api/project/issues/5ceaacfcfa06310f5c7f80d3)

result
```javascript
{ 
    "delete": "ID = 5ceaacfcfa06310f5c7f80d3"
}
```