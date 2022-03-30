# Case-Study

A RESTful API that creates, deletes, updates and gets data about cars. The database used is Mongo DB. 


## Run project

Clone the project

```bash
  git clone https://github.com/tawfeeqm/case-study-typescript.git
```

Go to the project directory

```bash
  cd case-study
```

Run this command

```bash
  docker compose up
```

After the server has started, use the API references below to make API calls to the server.


## API Reference
### Default Error object
| Response Payload | Type     | Description                |
| :-------- | :------- | :------------------------- | 
| `code` | `int` | `HTTP error code` |
| `msg` | `str` |  `Error message` |

### 1- Create a new car

```http
POST http://localhost:5000/v1/api/cars
```
#### Request
| Request Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `brand` | `str` | `string` |**Required** |
| `model` | `str` |  `string` |**Required** |
| `manufactureYear` | `string` |  |**Required** 
| `engineSize` | `int` |  |**Required** |
| `color` | `string` |  |**Required** 
| `price` | `int` |  |**Required** |

##### Successful Response
| Response Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `code` | `num` | `201` |Created, no data returned

#### Failed Response
Error object

### 2- Get list of all cars

```http
GET http://localhost:5000/v1/api/cars
```
##### Request
| Request Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| - |- | - | -|

##### Successful Response
_Array of objects_:
| Response Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `brand` | `str` | `string` |**Required** |
| `model` | `str` |  `string` |**Required** |
| `manufactureYear` | `str` | `date` |**Required** 
| `engineSize` | `int` | `any` |**Required** |
| `color` | `string` | `any` |**Required** 
| `price` | `int` | `any` |**Required** |

###### Failed Response
Error object

### 3- Get individual car data

```http
 GET http://localhost:5000/v1/api/cars/:id
```
##### Request
| Request Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| - |- | - | -|

##### Successful Response
| Response Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `brand` | `str` | `string` |**Required** |
| `model` | `str` |  `string` |**Required** |
| `manufactureYear` | `str` | `date` |**Required** 
| `engineSize` | `int` | `any` |**Required** |
| `color` | `string` | `any` |**Required** 
| `price` | `int` | `any` |**Required** |

###### Failed Response
Error object

### 4- Update price of an individual car

```http
PUT http://localhost:5000/v1/api/cars/:id/price
```
##### Request
| Request Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `price` | `int` | `any` | **Required**|

##### Successful Response
| Response Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `code` | `num` | `204` |Updated, no data returned

###### Failed Response
Error object

### 5- Delete a car

```http
DELETE http://localhost:5000/v1/api/cars/:id
```
##### Request
| Request Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| - | - | - | -|

##### Successful Response
| Response Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `code` | `num` | `204` | Updated, no data returned

###### Failed Response
Error object