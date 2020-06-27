# Happiness Level

- Table of Contents
  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)
  - [User Testing](#user-testing)

## Automated Testing

- Backend (with Postman)

  1. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": "name",
       "coins": 40
     }
     ```

     Expected Result:

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

     Actual Result: _same_ as Expected Result

  2. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": ""
     }
     ```

     Expected Result:

     ```json
     {
       "name": "Name is required"
     }
     ```

     Actual Result: _same_ as Expected Result

  3. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": "name",
       "coins": -23
     }
     ```

     Expected Result:

     ```json
     {
       "coins": "Coins is invalid"
     }
     ```

     Actual Result: _same_ as Expected Result

  4. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": "namefsrfdzf",
       "coins": 2432
     }
     ```

     Expected Result:

     ```json
     {
       "message": "Cannot update data of user with username namefsrfdzf. Maybe User was not found!"
     }
     ```

     Actual Result: _same_ as Expected Result

## Unit Testing

(with dummy incrementCoins and decrementCoins buttons that increase and decrease happiness by 7 respectively)

1. Test Case: click incrementCoins button once

   Expected Result: coins increases by 7

   Actual Result: _same_ as Expected Result

2. Test Case: click decrementCoins button once

   Expected Result: coins decreases by 7

   Actual Result: _same_ as Expected Result

## Integrated Testing

| Test Case | Steps Taken | Expected Result | Actual Result |
| --------- | ----------- | --------------- | ------------- |


## User Testing

| Test Case | Steps Taken | Expected Result | Actual Result |
| --------- | ----------- | --------------- | ------------- |

