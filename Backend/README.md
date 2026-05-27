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
