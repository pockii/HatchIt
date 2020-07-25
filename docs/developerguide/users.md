# Users

- Table of Contents
  - [Register](#register)
  - [Login](#login)
  - [Update Userdata](#update-userdata)

## Register

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/users/register
</td>
</tr>

<tr>
<td>
METHOD
</td>
<td>
POST
</td>
</tr>

<tr>
<td>
REQUEST
</td>
<td>

```json
{
  "name": "username", // string, required
  "password": "password", // string, required
  "password2": "password" // string, required
}
```

</td>
</tr>

<tr>
<td>
RESPONSE
</td>
<td>

```json
{
  "date": "2020-07-25T07:38:24.583Z",
  "coins": 0,
  "petId": 0,
  "totalHappinessGained": 0,
  "happinessGained": 0,
  "tasks": 0,
  "subTasks": 0,
  "dateGuessed": "1970-01-01T00:00:00.000Z",
  "dateRescued": "1970-01-01T00:00:00.000Z",
  "bestTimeRescued": 10,
  "_id": "5f1bebeb9b201b0528e5a032",
  "name": "username",
  "password": "$2a$10$wfqQO8/jNhBMLCbBz18RUeYoxZUEyvqHzAADkFXj8qE866gbLy016",
  "__v": 0
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- User Account already exists

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username",
    "password": "password",
    "password2": "password"
  }
  ```

  </td>
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "name": "Username already exists"
  }
  ```

  </td>
  </tr>
  </table>

- Passwords do no match

    <table>
    <tr>
    <td>
    REQUEST
    </td>
    <td>

  ```json
  {
    "name": "name",
    "password": "password",
    "password2": "pass"
  }
  ```

    </td>
    </tr>

    <tr>
    <td>
    RESPONSE
    </td>
    <td>

  ```json
  {
    "name": "Passwords must match"
  }
  ```

    </td>
    </tr>
    </table>
  </td>
  </tr>
  </table>

- Password is hashed using `bcrypt` before saving in database

## Login

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/users/login
</td>
</tr>

<tr>
<td>
METHOD
</td>
<td>
POST
</td>
</tr>

<tr>
<td>
REQUEST
</td>
<td>

```json
{
  "name": "username", // string, required
  "password": "password" // string, required
}
```

</td>
</tr>

<tr>
<td>
RESPONSE
</td>
<td>

```json
{
  "success": true,
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWJlYmViOWIyMDFiMDUyOGU1YTAzMiIsIm5hbWUiOiJ1c2VybmFtZSIsImNvaW5zIjowLCJwZXRJZCI6MCwidG90YWxIYXBwaW5lc3NHYWluZWQiOjAsImhhcHBpbmVzc0dhaW5lZCI6MCwidGFza3MiOjAsInN1YlRhc2tzIjowLCJkYXRlR3Vlc3NlZCI6IjE5NzAtMDEtMDFUMDA6MDA6MDAuMDAwWiIsImRhdGVSZXNjdWVkIjoiMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaIiwiYmVzdFRpbWVSZXNjdWVkIjoxMCwiaWF0IjoxNTk1NjY2NzcwLCJleHAiOjE2MjcyMjM2OTZ9.wF1cmpelcdW3kxqBm6IUssLRAPbw-KzPJi__TvfwQ3A"
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Fields are empty

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "password": ""
  }
  ```

  </td>
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "name": "Username field is required",
    "password": "Password field is required"
  }
  ```

  </td>
  </tr>
  </table>

- Incorrect Password

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "name",
    "password": "pass"
  }
  ```

  </td>
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "passwordincorrect": "Password incorrect"
  }
  ```

  </td>
  </tr>
  </table>

- User Account does not exist

    <table>
    <tr>
    <td>
    REQUEST
    </td>
    <td>

  ```json
  {
    "name": "user",
    "password": "password"
  }
  ```

    </td>
    </tr>

    <tr>
    <td>
    RESPONSE
    </td>
    <td>

  ```json
  {
    "namenotfound": "Username not found"
  }
  ```

    </td>
    </tr>
    </table>
  </td>
  </tr>
  </table>

- Password is decrypted using `bcrypt` before comparison.

- Jwt token is issued, token expires in 1 year.

## Update Userdata

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/users/userdata
</td>
</tr>

<tr>
<td>
METHOD
</td>
<td>
PUT
</td>
</tr>

<tr>
<td>
REQUEST
</td>
<td>

```json
{
  "name": "username", // string, required
  "coins": 40, // integer > 0, optional
  "petId": 0, // integer > 0, optional
  "totalHappinessGained": 35, // integer > 0, optional
  "happinessGained": 23, // integer > 0, optional
  "tasks": 0, // integer > 0, optional
  "subTasks": 0, // integer > 0, optional
  "dateGuessed": "2020-06-24T05:34:37.850Z", // ISO8601 string, optional
  "dateRescued": "2020-07-25T00:00:00.000Z", // ISO8601 string, optional
  "bestTimeRescued": 7.3 // 0 < float < 10, optional
}
```

</td>
</tr>

<tr>
<td>
RESPONSE
</td>
<td>

```json
{
  "success": true,
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWJlYmViOWIyMDFiMDUyOGU1YTAzMiIsIm5hbWUiOiJ1c2VybmFtZSIsImNvaW5zIjowLCJwZXRJZCI6MCwidG90YWxIYXBwaW5lc3NHYWluZWQiOjAsImhhcHBpbmVzc0dhaW5lZCI6MCwidGFza3MiOjAsInN1YlRhc2tzIjowLCJkYXRlR3Vlc3NlZCI6IjE5NzAtMDEtMDFUMDA6MDA6MDAuMDAwWiIsImRhdGVSZXNjdWVkIjoiMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaIiwiYmVzdFRpbWVSZXNjdWVkIjoxMCwiaWF0IjoxNTk1NjY2NzcwLCJleHAiOjE2MjcyMjM2OTZ9.wF1cmpelcdW3kxqBm6IUssLRAPbw-KzPJi__TvfwQ3A"
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Fields are empty

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "password": ""
  }
  ```

  </td>
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "name": "Username field is required",
    "password": "Password field is required"
  }
  ```

  </td>
  </tr>
  </table>

- Incorrect Password

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "name",
    "password": "pass"
  }
  ```

  </td>
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "passwordincorrect": "Password incorrect"
  }
  ```

  </td>
  </tr>
  </table>

- User Account does not exist

    <table>
    <tr>
    <td>
    REQUEST
    </td>
    <td>

  ```json
  {
    "name": "user",
    "password": "password"
  }
  ```

    </td>
    </tr>

    <tr>
    <td>
    RESPONSE
    </td>
    <td>

  ```json
  {
    "namenotfound": "Username not found"
  }
  ```

    </td>
    </tr>
    </table>
  </td>
  </tr>
  </table>
