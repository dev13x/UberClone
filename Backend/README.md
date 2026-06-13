# Backend API Documentation

## `POST /users/register`

Registers a new user account.

### Description

Creates a new user record with the provided full name, email, and password. The password is hashed before it is saved.

### Request

- Method: `POST`
- URL: `/users/register`
- Content-Type: `application/json`

### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Field requirements

- `fullname.firstname` (string) - required, minimum 3 characters
- `fullname.lastname` (string) - optional, minimum 3 characters if provided
- `email` (string) - required, must be a valid email address
- `password` (string) - required, minimum 6 characters

### Responses

- `201 Created`
  - Description: User successfully registered.
  - Body: JSON object containing a JWT token and the created user data.
- `400 Bad Request`
  - Description: Validation failed for one or more fields.
  - Body: JSON object containing validation error details.
- `500 Internal Server Error`
  - Description: Unexpected server error while creating the user.

### Example Success Response

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "643f5f76a4d1c20012a34b56",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Notes

- Ensure `JWT_SECRET` is set in the environment before using this endpoint.
- The password is returned only in hashed form and is not included in the response body.

## `POST /captains/register`

Registers a new captain account with vehicle information.

### Description

Creates a new captain record with personal information, authentication credentials, and vehicle details. The password is hashed before it is saved.

### Request

- Method: `POST`
- URL: `/captains/register`
- Content-Type: `application/json`

### Request Body

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "secure456",
  "vehicle": {
    "color": "blue",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Field requirements

- `fullname.firstname` (string) - required, minimum 3 characters
- `fullname.lastname` (string) - optional, minimum 3 characters if provided
- `email` (string) - required, must be a valid email address
- `password` (string) - required, minimum 6 characters
- `vehicle.color` (string) - required, minimum 3 characters
- `vehicle.plate` (string) - required, minimum 3 characters
- `vehicle.capacity` (integer) - required, minimum 1
- `vehicle.vehicleType` (string) - required, must be one of: `car`, `bike`, `auto`

### Responses

- `201 Created`
  - Description: Captain successfully registered.
  - Body: JSON object containing a JWT token and the created captain data.
- `400 Bad Request`
  - Description: Validation failed for one or more fields.
  - Body: JSON object containing validation error details.
- `500 Internal Server Error`
  - Description: Unexpected server error while creating the captain account.

### Example Success Response

```json
{
  "token": "<jwt-token>",
  "captain": {
    "_id": "643f5f76a4d1c20012a34b57",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Example Error Response

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email"
    },
    {
      "msg": "Vehicle type must be car, bike or auto",
      "param": "vehicle.vehicleType"
    }
  ]
}
```

### Notes

- Ensure `JWT_SECRET` is set in the environment before using this endpoint.
- The password is returned only in hashed form and is not included in the response body.
- Valid vehicle types are: `car`, `bike`, or `auto`.
- Vehicle capacity must be a positive integer.

## `POST /users/login`

Authenticates a user and returns a JWT token.

### Description

Verifies the user's email and password. If credentials are valid, the endpoint returns an authentication token and the user record.

### Request

- Method: `POST`
- URL: `/users/login`
- Content-Type: `application/json`

### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Field requirements

- `email` (string) - required, must be a valid email address
- `password` (string) - required, minimum 6 characters

### Responses

- `200 OK`
  - Description: Login successful.
  - Body: JSON object containing a JWT token and the authenticated user data.
- `400 Bad Request`
  - Description: Validation failed for one or more fields.
  - Body: JSON object containing validation error details.
- `401 Unauthorized`
  - Description: Invalid email or password.
  - Body: JSON object containing an authentication error message.
- `500 Internal Server Error`
  - Description: Unexpected server error while authenticating.

### Example Success Response

```json
{
  "token": "<jwt-token>",
  "user": {
    "_id": "643f5f76a4d1c20012a34b56",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
