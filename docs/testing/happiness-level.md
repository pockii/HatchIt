# Happiness Level

- Table of Contents
  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)

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
    "happiness": 23,
    "totalHappinessGained": 635
  }
  ```

  </td>
  <td>

  ```json
  {
    "date": "2020-06-27T02:34:37.850Z",
    "coins": 0,
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
    "happiness": -5,
    "totalHappinessGained": -42
  }
  ```

  </td>
  <td>

  ```json
  {
    "happiness": "Happiness is invalid",
    "totalHappinessGained": "Total Happpiness gained is invalid"
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
    "name": "nameibbikj",
    "happiness": 5,
    "totalHappinessGained": 42
  }
  ```

  </td>
  <td>

  ```json
  {
    "message": "Cannot update data of user with username nameibbikj. Maybe User was not found!"
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

(with dummy incrementHappiness and decrementHappiness buttons that increase and decrease happiness by 10 respectively)

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
click incrementHappiness button once
</td>
<td>
happiness level increases by 10, total happiness gained increases by 10
</td>
<td>
<i>same</i> as Expected Result
</td>
<td>
Actual Result(before fix): ECONNREFUSED error, <code>this.props.auth.user.name</code> is undefined in <code>componentDidMount</code> lifecycle method in child component and <code>req.body</code> is undefined when calling PUT http://localhost:5000/api/users/userdata
Fix: Error is due to rendering of children components before parent components, retrieve userdata directly after login instead of in <code>componentDidMount</code> when child component is rendered
</td>
</tr>

<tr>
<td>
2
</td>
<td>
click decrementHappiness button once

</td>
<td>
happiness level decreases by 10
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
click decrementHappiness button repeatedly until happiness decreases to 0
</td>
<td>
happiness level decreases to 0, coins decrease to 0
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
click decrementHappiness button repeatedly as happiness increases to 100
</td>
<td>
happiness level increases to 100, total happiness gained increases, coins increase by 100, pet transits into maximum happiness state
</td>
<td>
<i>same</i> as Expected Result
</td>
<td>
Actual Result(before fix): coins increase by 100 repeatedly after happiness level reaches 100
Fix: Compare <code>prevProps</code> and <code>this.props</code>, only increase coins when happiness level is not previously 100
</td>
</tr>
</table>

## Integrated Testing

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
happiness level remains the same
</td>
<td>
Refresh page after change in happiness
</td>
<td>
<i>same</i> as Expected Result
</td>
<td>
Actual Result(before fix): previous changes are lost
Fix: Add redux-persist to persist auth of redux state
</td>
</tr>

<tr>
<td>
2
</td>
<td>
In Food modal, feed pet multiple times until happiness level increases to 100
</td>
<td>
happiness level increases to 100, total happiness gained increases, coins increase by 100, pet transits into maximum happiness state
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>
</table>
