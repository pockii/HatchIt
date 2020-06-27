# General Pet Interactions

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
       "dateGuessed": "2020-06-24T05:34:37.850Z"
     }
     ```

     Expected Result:

     ```json
     {
       "date": "2020-06-27T02:34:37.850Z",
       "dateGuessed": 40,
       "happiness": 23,
       "totalHappinessGained": 635,
       "tasks": 0,
       "subTasks": 0,
       "dateGuessed": "2020-06-24T05:34:37.850Z",
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
       "dateGuessed": "2020-43-24T05:34:37.850Z"
     }
     ```

     Expected Result:

     ```json
     {
       "dateGuessed": "dateGuessed is invalid"
     }
     ```

     Actual Result: _same_ as Expected Result

  4. Test Case: PUT - <http://localhost:5000/api/users/userdata>
     Body:

     ```json
     {
       "name": "namefsrfdzf",
       "dateGuessed": "2020-06-24T05:34:37.850Z"
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

| Test Case | Steps Taken | Expected Result | Actual Result |
| --------- | ----------- | --------------- | ------------- |

## Integrated Testing

| Test Case | Steps Taken | Expected Result | Actual Result |
| --------- | ----------- | --------------- | ------------- |

## User Testing

| Test Case | Steps Taken | Expected Result | Actual Result |
| --------- | ----------- | --------------- | ------------- |
