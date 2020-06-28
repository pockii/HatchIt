# Happiness Level

- Table of Contents
  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)

## Automated Testing

- Backend (with Postman)

  1. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": "name",
       "happiness": 23,
       "totalHappinessGained": 635
     }
     ```

     Expected Result:

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
       "happiness": -5,
       "totalHappinessGained": -42
     }
     ```

     Expected Result:

     ```json
     {
       "happiness": "Happiness is invalid",
       "totalHappinessGained": "Total Happpiness gained is invalid"
     }
     ```

     Actual Result: _same_ as Expected Result

  4. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": "nameibbikj",
       "happiness": 5,
       "totalHappinessGained": 42
     }
     ```

     Expected Result:

     ```json
     {
       "message": "Cannot update data of user with username nameibbikj. Maybe User was not found!"
     }
     ```

     Actual Result: _same_ as Expected Result

## Unit Testing

(with dummy incrementHappiness and decrementHappiness buttons that increase and decrease happiness by 10 respectively)

1. Test Case: click incrementHappiness button once

   Expected Result: happiness level increases by 10, total happiness gained increases by 10

   Actual Result(before fix): ECONNREFUSED error, `this.props.auth.user.name` is undefined in `componentDidMount` lifecycle method in child component and `req.body` is undefined when calling PUT <http://localhost:5000/api/users/userdata>

   Fix: Error is due to rendering of children components before parent components, retrieve userdata directly after login instead of in `componentDidMount` when child component is rendered

   Actual Result: _same_ as Expected Result

2. Test Case: click decrementHappiness button once

   Expected Result: happiness level decreases by 10

   Actual Result: _same_ as Expected Result

3. Test Case: click decrementHappiness button repeatedly until happiness decreases to 0

   Expected Result: happiness level decreases to 0, coins decrease to 0

   Actual Result: _same_ as Expected Result

4. Test Case: click decrementHappiness button repeatedly as happiness increases to 100

   Expected Result: happiness level increases to 100, total happiness gained increases, coins increase by 100, pet transits into maximum happiness state

   Actual Result(before fix): coins increase by 100 repeatedly after happiness level reaches 100

   Fix: Compare `prevProps` and `this.props`, only increase coins when happiness level is not previously 100

   Current Actual Result: _same_ as Expected Result

## Integrated Testing

1. Test Case: Refresh page after change in happiness

   Expected Result: happiness level remains the same

   Actual Result(before fix): previous changes are lost

   Fix: Add redux-persist to persist auth of redux state

   Current Acutal Result: _same_ as Expected Result

2. Test Case: In Food modal, feed pet multiple times until happiness level increases to 100

   Expected Result: happiness level increases to 100, total happiness gained increases, coins increase by 100, pet transits into maximum happiness state

   Actual Result: _same_ as Expected Result
