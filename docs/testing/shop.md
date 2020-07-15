# Shop

- Table of Contents
  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)
  - [User Testing](#user-testing)

## Automated Testing

- Backend (with Postman)

  <table>
  <thead>
  <tr>
  <th></th>
  <th>
  Test Case
  </th>
  <th>
  Request Body
  </th>
  <th>
  Expected Result
  </th>
  <th>
  Actual Result
  </th>
  <th>
  Remarks
  </th>
  </tr>
  </thead>

  <tr>
  <td>
  1
  </td>
  <td>
  PUT - http://localhost:5000/api/users/userdata
  </td>
  <td>

  ```json
  {
    "name": "name",
    "coins": 40
  }
  ```

  </td>
  <td>

  ```json
  {
    "date": "2020-06-27T02:34:37.850Z",
    "coins": 40,
    "happiness": 23,
    "totalHappinessGained": 635,
    "tasks": 0,
    "subTasks": 0,
    "dateGuessed": "1970-01-01T00:00:00.000Z",
    "_id": "5ef6c04c4b2b6000cfbf319f",
    "name": "name",
    "password": "$2a$10$.eOW7FxcKZhpPoz0sfxiceMxsGvJHK2hmSWSiW1yNG5yIn4TIpuVK",
    "__v": 0
  }
  ```

  </td>
  <td>
  <i>same</i> as Expected Result
  </td>
  <td></td>
  </tr>

  <tr>
  <td>
  2
  </td>
  <td>
  PUT - http://localhost:5000/api/users/userdata
  </td>
  <td>

  ```json
  {
    "name": ""
  }
  ```

  </td>
  <td>

  ```json
  {
    "name": "Name is required"
  }
  ```

  </td>
  <td>
  <i>same</i> as Expected Result
  </td>
  <td></td>
  </tr>

  <tr>
  <td>
  3
  </td>
  <td>
  PUT - http://localhost:5000/api/users/userdata
  </td>
  <td>

  ```json
  {
    "name": "name",
    "coins": -23
  }
  ```

  </td>
  <td>

  ```json
  {
    "coins": "Coins is invalid"
  }
  ```

  </td>
  <td>
  <i>same</i> as Expected Result
  </td>
  <td></td>
  </tr>

  <tr>
  <td>
  4
  </td>
  <td>
  PUT - http://localhost:5000/api/users/userdata
  </td>
  <td>

  ```json
  {
    "name": "namefsrfdzf",
    "coins": 2432
  }
  ```

  </td>
  <td>

  ```json
  {
    "message": "Cannot update data of user with username namefsrfdzf. Maybe User was not found!"
  }
  ```

  </td>
  <td>
  <i>same</i> as Expected Result
  </td>
  <td></td>
  </tr>
  </table>

## Unit Testing

(with dummy incrementCoins and decrementCoins buttons that increase and decrease happiness by 7 respectively)

<table>
<thead>
<tr>
<th></th>
<th>
Test Case
</th>
<th>
Expected Result
</th>
<th>
Actual Result
</th>
<th>
Remarks
</th>
</tr>
</thead>

<tr>
<td>
1
</td>
<td>
click incrementCoins button once
</td>
<td>
coins increases by 7
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
2
</td>
<td>
click decrementCoins button once
</td>
<td>
coins decreases by 7
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>
</table>

## Integrated Testing

(_coming soon_)

## User Testing

(_coming soon_)
