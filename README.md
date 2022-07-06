<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://acis.org.co/portal/sites/default/files/logo%20tyba.png" width="320"/></a>
</p>

## Technical results

## Insomnia client
<img width="934" alt="Screen Shot 2021-10-15 at 5 42 14 PM" src="https://user-images.githubusercontent.com/13957703/137561777-0ed84770-d071-4513-b0c7-aabbc3492771.png">

Project url:
`http://3.128.79.253:3000/`

## Authentication endpoints 

I used JWT (Json web token, package) to authenticate endpoints.

#### login

Get `http://3.23.95.238:3000/v1/auth`

<img width="1143" alt="login" src="https://user-images.githubusercontent.com/13957703/177443827-c1bec9f1-b11f-4572-ac5d-e329002bd873.png">

###### request
```json
{
  "username": "tyba_user",
  "password": "Tyba1234"
}
```

###### response:
```json
{  
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR5YmFfdXNlciIsInN1YiI6NywiaWF0IjoxNjU3MDY4NTg1LCJleHAiOjE2NTcwNjg2NDV9.KYip699hmKiML0E0y_TcaqPtvkjQK3IZJveYAhZoiPg",
    "user": {
      "id": 7,
      "name": "julian molina",
      "email": "julian@tyba.com",
      "phone": "3012735668",
      "address": "calle fake 123",
      "username": "tyba_user",
      "password": "hidden",
      "status": null,
      "createdAt": "2022-07-05T23:03:18.000Z",
      "updatedAt": "2022-07-05T23:03:18.000Z"
    }
  },
  "statusCode": 201,
  "message": "OK",
  "timestamp": "2022-07-06T00:49:45.204Z",
  "path": "/v1/auth"
}
```

## Register a new user

Post `http://3.128.79.253:3000/v1/auth/save`

<img width="1137" alt="register_succes" src="https://user-images.githubusercontent.com/13957703/177445731-4796220d-4459-496e-94f3-fdd9f743c70d.png">

#### Request

```json
{
  "name": "julian molina",
  "email": "julia#2n@tyba.com",
  "phone": "3012735668",
  "address": "calle fake 123",
  "username": "tyba_user_2",
  "password": "Tyba1234"
}
```

##### Response

```json
{  
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR5YmFfdXNlciIsInN1YiI6NywiaWF0IjoxNjU3MDY4NTg1LCJleHAiOjE2NTcwNjg2NDV9.KYip699hmKiML0E0y_TcaqPtvkjQK3IZJveYAhZoiPg",
    "user": {
      "id": 7,
      "name": "julian molina",
      "email": "julia#2n@tyba.com",
      "phone": "3012735668",
      "address": "calle fake 123",
      "username": "tyba_user_2",
      "password": "hidden",
      "status": null,
      "createdAt": "2022-07-05T23:05:18.000Z",
      "updatedAt": "2022-07-05T23:05:18.000Z"
    }
  },
  "statusCode": 201,
  "message": "OK",
  "timestamp": "2022-07-06T00:49:45.204Z",
  "path": "/v1/auth"
}
```

##### IF user exist

<img width="1145" alt="register_exist" src="https://user-images.githubusercontent.com/13957703/177446474-a5ea6748-7ec4-4d75-8b24-5d6c9e48d8d3.png">

## Unauthorized by token expired

If the JWT token is missing the service will return an unauthorized 401 status:

<img width="1144" alt="unauthorized" src="https://user-images.githubusercontent.com/13957703/177444345-2dd69c75-7ef8-41a0-ab6e-186f49a6cf6c.png">

To fix this the JWT header must be included:

<img width="1140" alt="Screen Shot 2022-07-05 at 8 27 23 PM" src="https://user-images.githubusercontent.com/13957703/177447707-327fe12e-debc-4c59-8b28-aa2b0a02a127.png">

```json
{
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbGkiLCJzdWIiOjIsImlhdCI6MTYzNDMzNTQwMiwiZXhwIjoxNjM0MzM1NDYyfQ.Vu8eoSiYdsVe9SlXAC3rRp2_NwJIpYI1jCwen424cqc"
}
```

## Places endpoint

POST: `http://3.128.79.253:3000/v1/places`

<img width="1143" alt="places" src="https://user-images.githubusercontent.com/13957703/177445403-e25bdf4d-f60e-4bbe-adc4-714aa3f21b9d.png">

##### request 

```json
{
  "keyword": "bogota",
  "lat": "4.624335",
  "lng": "-74.063644"
}
```

##### response

```json
{
   "data": {
      "html_attributions": [],
      "results": [
         {
            "business_status": "OPERATIONAL",
            "geometry": {
               "location": {
                  "lat": 4.627510900000001,
                  "lng": -74.0745419
               },
               "viewport": {
                  "northeast": {
                     "lat": 4.628918079892722,
                     "lng": -74.07318367010727
                  },
                  "southwest": {
                     "lat": 4.626218420107278,
                     "lng": -74.07588332989272
                  }
               }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
            "icon_background_color": "#FF9E67",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
            "name": "elbarrio Restaurante",
            "opening_hours": {
               "open_now": true
            },
            "photos": [
               {
                  "height": 3594,
                  "html_attributions": [
                     "<a href=\"https://maps.google.com/maps/contrib/113041926879556307798\">A Google User<\/a>"
                  ],
                  "photo_reference": "Aap_uEANowYA_6qtIPrSlO27w5S7SR4gqTOZjSZje6po1CSKcrHxauK9Y-DLCCDqeYePLC5eWqVM3dNNHeiClRO53ubTAU84pGWDXQrGj-BzQO0QlHmzarX8oA44H1XyWKc-jp9nd8zNx5Q_9TqvRsdCOXNARv98ueqalu_BPKBjkvy2DBf3",
                  "width": 5395
               }
            ],
            "place_id": "ChIJeaIbjyqaP44Rme3Zer1VQ_I",
            "price_level": 2,
            "rating": 4.3,
            "reference": "ChIJeaIbjyqaP44Rme3Zer1VQ_I",
            "scope": "GOOGLE",
            "types": [
               "restaurant",
               "food",
               "point_of_interest",
               "establishment"
            ],
            "user_ratings_total": 969,
            "vicinity": "Cl. 39 ##21-11"
         }
      ],
      "status": "OK"
   },
   "statusCode": 201,
   "message": "OK",
   "timestamp": "2022-07-06T00:55:46.121Z",
   "path": "/v1/places"
}
```

## DATABASE mysql

<img width="1066" alt="Screen Shot 2022-07-05 at 8 30 20 PM" src="https://user-images.githubusercontent.com/13957703/177447970-bd28f214-607b-4f5b-a16e-cfedeb5bf04d.png">

## Project Description

The project was created using NestJs framework (which is based on ExpressJs and Fastify),a clean architecture, JWT and MySQL database connections.

## Project Struct

<img width="374" alt="Screen Shot 2022-07-05 at 8 31 49 PM" src="https://user-images.githubusercontent.com/13957703/177448106-ac8d1198-ea49-4b8a-b69a-e2bae76c568b.png">

#### Components

<img width="464" alt="Screen Shot 2022-07-05 at 8 34 45 PM" src="https://user-images.githubusercontent.com/13957703/177448475-d7a6371e-bb27-4199-8137-1a5efb06bf0c.png">

I organized the different modules in components. These follow one of the S.O.L.I.D principles, the single responsability, each one addresses a specific and unique task, for instance: auth, users, dna, etc.

#### Controllers Folder

Controllers in NestJS work as bridge to manage incoming data, they're just interfaces to receive and send data to the clients.

`places.controllers.ts`

#### Manager File (Interface to bind components)

The component's manager is used as a facade to interact with internal classes and being used by other components without exposing the internal functionality of each component. This ensures that all component functionalities are used only by through this facade component.

The manager is in charge of calling providers of functionalities with dependency injection, i mean, the services files.

`places.manager.ts`

#### Models Folder (DATA LAYER)

The models folders contain entities and providers. Entities describe the data model
and the providers repositories allows to list them externally.

#### Services Folder (DOMAIN LAYER)

This folder contains all business logic, all behaviour and functionalities for the component, services are usuallycalled by manager or themselves.

`places.service.ts`

## Debug in console

<img width="960" alt="Screen Shot 2022-07-05 at 8 32 41 PM" src="https://user-images.githubusercontent.com/13957703/177448189-22130cc1-99f5-42fd-bb5a-52abe9150c81.png">

## Stay in touch

- Author - Julian Arturo Molina Castiblanco
- Email  - phalcondroid@gmail.com
