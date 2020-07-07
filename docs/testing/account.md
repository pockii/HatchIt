# Account

- Table of Contents

  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)

## Automated Testing

- Backend (with Postman)

  1.  Test Case: POST - <http://localhost:5000/api/users/register>

      Body:

      ```json
      {
        "name": "name",
        "password": "password",
        "password2": "password"
      }
      ```

      Expected Result:

      ```json
      {
        "date": "2020-06-27T02:34:37.850Z",
        "coins": 0,
        "happiness": 50,
        "totalHappinessGained": 0,
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

  2.  Test Case: POST - <http://localhost:5000/api/users/register>

      Body:

      ```json
      {
        "name": "",
        "password": "",
        "password2": ""
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Username field is required",
        "password": "Password must have at least 1 character and at most 20 characters",
        "password2": "Please confirm your password"
      }
      ```

      Actual Result: _same_ as Expected Result

  3.  Test Case: POST - <http://localhost:5000/api/users/register>

      Body:

      ```json
      {
        "name": "name",
        "password": "password",
        "password2": "pass"
      }
      ```

      Expected Result:

      ```json
      {
        "password2": "Passwords must match"
      }
      ```

      Actual Result: _same_ as Expected Result

  4.  Test Case: POST - <http://localhost:5000/api/users/register>
      (directly after test 1)

      Body:

      ```json
      {
        "name": "name",
        "password": "password",
        "password2": "password"
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Username already exists"
      }
      ```

      Actual Result: _same_ as Expected Result

  5.  Test Case: POST - <http://localhost:5000/api/users/login>
      (directly after test 1)

      Body:

      ```json
      {
        "name": "name",
        "password": "password"
      }
      ```

      Expected Result:

      ```json
      {
        "success": true,
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjZjMDRjNGIyYjYwMDBjZmJmMzE5ZiIsIm5hbWUiOiJuYW1lIiwiY29pbnMiOjAsImhhcHBpbmVzcyI6NTAsInRvdGFsSGFwcGluZXNzR2FpbmVkIjowLCJ0YXNrcyI6MCwic3ViVGFza3MiOjAsImRhdGVHdWVzc2VkIjoiMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaIiwiaWF0IjoxNTkzMjMwNTc3LCJleHAiOjE2MjQ3ODc1MDN9.HBpu3nTKZAQMGokGPJlwkuJWpxEmSENIc0rUV6sNnDw"
      }
      ```

      Actual Result: _same_ as Expected Result

  6.  Test Case: POST - <http://localhost:5000/api/users/login>

      Body:

      ```json
      {
        "name": "",
        "password": ""
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Username field is required",
        "password": "Password field is required"
      }
      ```

      Actual Result: _same_ as Expected Result

  7.  Test Case: POST - <http://localhost:5000/api/users/login>
      (directly after test 1)

      Body:

      ```json
      {
        "name": "username",
        "password": "pass"
      }
      ```

      Expected Result:

      ```json
      {
        "passwordincorrect": "Password incorrect"
      }
      ```

      Actual Result: _same_ as Expected Result

  8.  Test Case: POST - <http://localhost:5000/api/users/login>

      Body:

      ```json
      {
        "name": "user",
        "password": "password"
      }
      ```

      Expected Result:

      ```json
      {
        "namenotfound": "Username not found"
      }
      ```

      Actual Result: _same_ as Expected Result
      Body:

      ```json
      {
        "name": "user",
        "password": "password"
      }
      ```

      Expected Result:

      ```json
      {
        "namenotfound": "Username not found"
      }
      ```

      Actual Result: _same_ as Expected Result

  9.  Test Case: POST - <http://localhost:5000/api/happinessbreakdown/>

      Body:

      ```json
      {
        "name": "name",
        "events": [
          {
            "event": "Play Guess",
            "totalHappinessGained": 23
          },
          {
            "event": "Play Rescue"
          }
        ]
      }
      ```

      Expected Result:

      ```json
      {
        "_id": "5f004d0927d3eb25c3b9140c",
        "name": "name",
        "events": [
          {
            "totalHappinessGained": 23,
            "_id": "5f004d0927d3eb25c3b9140d",
            "event": "Play Guess"
          },
          {
            "totalHappinessGained": 0,
            "_id": "5f004d0927d3eb25c3b9140e",
            "event": "Play Rescue"
          }
        ],
        "__v": 0
      }
      ```

      Actual Result: _same_ as Expected Result

  10. Test Case: POST - <http://localhost:5000/api/happinessbreakdown/>

      Body:

      ```json
      {
        "name": "",
        "events": [
          {
            "event": "",
            "totalHappinessGained": -2
          },
          {
            "event": ""
          }
        ]
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Name is required",
        "events": [
          {
            "event": "Description for event is required",
            "totalHappinessGained": "Total Happiness gained for event is invalid"
          },
          {
            "event": "Description for event is required"
          }
        ]
      }
      ```

      Actual Result: _same_ as Expected Result

  11. Test Case: POST - <http://localhost:5000/api/happinessbreakdown/>

      Body:

      ```json
      {
        "name": ""
      }
      ```

      Expected Result:

      ```json
      { "name": "Name is required", "events": "Events is required" }
      ```

      Actual Result: _same_ as Expected Result

  12. Test Case: POST - <http://localhost:5000/api/happinessbreakdown/event>

      Body:

      ```json
      {
        "name": "name",
        "event": {
          "event": "Complete Todo",
          "totalHappinessGained": 23
        }
      }
      ```

      Expected Result:

      ```json
      {
        "totalHappinessGained": 23,
        "_id": "5f004e3a27d3eb25c3b91412",
        "event": "Complete Todo"
      }
      ```

      Actual Result: _same_ as Expected Result

  13. Test Case: POST - <http://localhost:5000/api/happinessbreakdown/event>

      Body:

      ```json
      {
        "name": "name",
        "event": {
          "event": "Complete Sub Todo"
        }
      }
      ```

      Expected Result:

      ```json
      {
        "totalHappinessGained": 0,
        "_id": "5f004e4f27d3eb25c3b91413",
        "event": "Complete Todo"
      }
      ```

      Actual Result: _same_ as Expected Result

  14. Test Case: POST - <http://localhost:5000/api/happinessbreakdown/event>

      Body:

      ```json
      {
        "name": "",
        "event": {
          "event": "",
          "totalHappinessGained": -23
        }
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Name is required",
        "event": {
          "event": "Description for event is required",
          "totalHappinessGained": "Total Happiness gained for event is invalid"
        }
      }
      ```

      Actual Result: _same_ as Expected Result

  15. Test Case: POST - <http://localhost:5000/api/happinessbreakdown/event>

      Body:

      ```json
      {
        "name": ""
      }
      ```

      Expected Result:

      ```json
      { "name": "Name is required", "event": "Event is required" }
      ```

      Actual Result: _same_ as Expected Result

  16. Test Case: POST - <http://localhost:5000/api/happinessbreakdown/event>

      Body:

      ```json
      {
        "name": "namefad",
        "event": {
          "event": "Complete sub Todo"
        }
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot add event of user with username namefawf. Maybe happinessBreakdown was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  17. Test Case: POST - <http://localhost:5000/api/happinessbreakdown/event>
      (directly after test 13)

      Body:

      ```json
      {
        "name": "name",
        "event": {
          "event": "Complete Sub Todo"
        }
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot add event of user with username name. Event already exists!"
      }
      ```

      Actual Result: _same_ as Expected Result

  18. Test Case: PUT - <http://localhost:5000/api/h6appinessbreakdown/event>
      (directly after test 9)

      Body:

      ```json
      {
        "name": "name",
        "event": {
          "event": "Play Guess",
          "totalHappinessGained": 20
        }
      }
      ```

      Expected Result:

      ```json
      {
        "totalHappinessGained": 43,
        "_id": "5f003ee72eed010058b5ab0c",
        "event": "Play Guess"
      }
      ```

      Actual Result: _same_ as Expected Result

  19. Test Case: PUT - <http://localhost:5000/api/happinessbreakdown/event>

      Body:

      ```json
      {
        "name": "",
        "event": {
          "event": "",
          "totalHappinessGained": -23
        }
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Name is required",
        "event": {
          "event": "Description for event is required",
          "totalHappinessGained": "Total Happiness gained for event is invalid"
        }
      }
      ```

      Actual Result: _same_ as Expected Result

  20. Test Case: PUT - <http://localhost:5000/api/happinessbreakdown/event>

      Body:

      ```json
      {
        "name": ""
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Name is required",
        "event": "Event is required"
      }
      ```

      Actual Result: _same_ as Expected Result

  21. Test Case: PUT - <http://localhost:5000/api/h6appinessbreakdown/event>

      Body:

      ```json
      {
        "name": "namefawf",
        "event": {
          "event": "Play Guess",
          "totalHappinessGained": 20
        }
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot update event of user with username namefawf. Maybe happinessBreakdown was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  22. Test Case: PUT - <http://localhost:5000/api/h6appinessbreakdown/event>

      Body:

      ```json
      {
        "name": "name",
        "event": {
          "event": "Play Guessing",
          "totalHappinessGained": 20
        }
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot update event of user with username namefawf. Event was not found."
      }
      ```

      Actual Result: _same_ as Expected Result

## Unit Testing

(with Redux DevTools and dummy postHappinessBreakdown button)

1. Test Case: enter data in sign up page and click Sign Up button
   | field | value |
   | ---------------- | -------- |
   | Username | username |
   | Password | password |
   | Confirm Password | password |

   Expected Result: redirected to sign in page

   Actual Result: _same_ as Expected Result

2. Test Case: click Sign Up button in sign up page

   Expected Redux State:

   ```javascript
   {
    auth: {
      isAuthenticated: false,
      user: {},
      loading: false,
      updated: true
    },
    errors: {
      name: 'Username field is required',
      password: 'Password must have at least 1 character and at most 20 characters',
      password2: 'Please confirm your password'
    },
    todo: {
      tasks: {},
      subTasks: {},
      todo: {},
      postedTodo: false,
      postedTask: false,
      postedSubTask: false,
      updatedTodo: false,
      updatedTask: false,
      updatedSubTask: false,
      deletedTask: false,
      deletedSubTask: false
    },
    _persist: {
      version: -1,
      rehydrated: true
    }
   }
   ```

   Actual Result: _same_ as Expected Result

3. Test Case: enter data in sign up page and click Sign Up button
   | field | value |
   | ---------------- | -------- |
   | Username | username |
   | Password | password |
   | Confirm Password | pass |

   Expected Redux State:

   ````javascript
   {
    auth: {
      isAuthenticated: false,
      user: {},
      loading: false,
      updated: true
    },
    errors: {
      password2: 'Passwords must match'
    },
    todo: {
      tasks: {},
      subTasks: {},
      todo: {},
      postedTodo: false,
      postedTask: false,
      postedSubTask: false,
      updatedTodo: false,
      updatedTask: false,
      updatedSubTask: false,
      deletedTask: false,
      deletedSubTask: false
    },
    _persist: {
      version: -1,
      rehydrated: true
    }
   }
   ```

   Actual Result: _same_ as Expected Result

   ````

4. Test Case: enter data in sign up page and click Sign Up button
   | field | value |
   | ---------------- | -------- |
   | Username | username |
   | Password | password |
   | Confirm Password | password |

   Expected Redux State:

   ```javascript
   {
    auth: {
      isAuthenticated: false,
      user: {},
      loading: false,
      updated: true
    },
    errors: {
      name: 'Username already exists'
    },
    todo: {
      tasks: {},
      subTasks: {},
      todo: {},
      postedTodo: false,
      postedTask: false,
      postedSubTask: false,
      updatedTodo: false,
      updatedTask: false,
      updatedSubTask: false,
      deletedTask: false,
      deletedSubTask: false
    },
    _persist: {
      version: -1,
      rehydrated: true
    }
   }
   ```

   Actual Result: _same_ as Expected Result

5. Test Case: enter data in sign in page and click Sign In button

   (directly after test 1)
   | field | value |
   | ---------------- | -------- |
   | Username | username |
   | Password | password |

   Expected Redux State:

   ```javascript
    {
      auth: {
        isAuthenticated: true,
        user: {
          id: '5ef7223428fc33012ea63480',
          name: 'username',
          coins: 0,
          happiness: 50,
          totalHappinessGained: 0,
          tasks: 0,
          subTasks: 0,
          dateGuessed: '1970-01-01T00:00:00.000Z',
          iat: 1593255130,
          exp: 1624812056
        },
        loading: false,
        updated: true
      },
      errors: {},
      todo: {
        tasks: {},
        subTasks: {},
        todo: {},
        postedTodo: false,
        postedTask: false,
        postedSubTask: false,
        updatedTodo: false,
        updatedTask: false,
        updatedSubTask: false,
        deletedTask: false,
        deletedSubTask: false
      },
      _persist: {
        version: -1,
        rehydrated: true
      }
    }
   ```

   Actual Result: _same_ as Expected Result

6. Test Case: click Sign In button in sign in page

   Expected Redux State:

   ```javascript
    {
      auth: {
      isAuthenticated: false,
      user: {},
      loading: false,
      updated: true
      },
      errors: {
        name: 'Username field is required',
        password: 'Password field is required'
      },
      todo: {
        tasks: {},
        subTasks: {},
        todo: {},
        postedTodo: false,
        postedTask: false,
        postedSubTask: false,
        updatedTodo: false,
        updatedTask: false,
        updatedSubTask: false,
        deletedTask: false,
        deletedSubTask: false
      },
      _persist: {
        version: -1,
        rehydrated: true
      }
    }
   ```

   Actual Result: _same_ as Expected Result

7. Test Case: enter data in sign in page and click Sign In button

   (directly after test 1)
   | field | value |
   | ---------------- | -------- |
   | Username | username |
   | Password | pass |

   Expected Redux State:

   ```javascript
    {
      auth: {
        isAuthenticated: false,
        user: {},
        loading: false,
        updated: true
      },
      errors: {
        passwordincorrect: 'Password incorrect'
      },
      todo: {
        tasks: {},
        subTasks: {},
        todo: {},
        postedTodo: false,
        postedTask: false,
        postedSubTask: false,
        updatedTodo: false,
        updatedTask: false,
        updatedSubTask: false,
        deletedTask: false,
        deletedSubTask: false
      },
      _persist: {
        version: -1,
        rehydrated: true
      }
    }
   ```

   Actual Result: _same_ as Expected Result

8. Test Case: enter data in sign in page and click Sign In button

   (directly after test 1)
   | field | value |
   | ---------------- | -------- |
   | Username | user |
   | Password | password |

   Expected Redux State:

   ```javascript
    {
      auth: {
        isAuthenticated: false,
        user: {},
        loading: false,
        updated: true
      },
      errors: {
        namenotfound: 'Username not found'
      },
      todo: {
        tasks: {},
        subTasks: {},
        todo: {},
        postedTodo: false,
        postedTask: false,
        postedSubTask: false,
        updatedTodo: false,
        updatedTask: false,
        updatedSubTask: false,
        deletedTask: false,
        deletedSubTask: false
      },
      _persist: {
        version: -1,
        rehydrated: true
      }
    }
   ```

   Actual Result: _same_ as Expected Result

9. Test Case: click on postHappinessBreakdown button

   Expected Redux State:

   ```javascript
    {
      auth: {
        isAuthenticated: true,
        user: {
          date: '2020-07-04T10:33:09.759Z',
          coins: 0,
          happiness: 49,
          totalHappinessGained: 0,
          tasks: 0,
          subTasks: 0,
          dateGuessed: '1970-01-01T00:00:00.000Z',
          _id: '5f005b6eeedd2a3a1ccbbb48',
          name: 'name',
          password: '$2a$10$fZ7dHWchQdRm7Szw70TnC.3bTOU6Be9bxt5Cq3YZCqDl8D6TBtedG',
          __v: 0
        },
        loading: false,
        updated: true,
      },
      errors: {},
      todo: {
        tasks: {
          '0': {
            deadline: '2020-07-07T10:33:09.805Z',
            level: '2',
            _id: '5f005b71eedd2a3a1ccbbb4a',
            id: '0',
            description: 'My first todo!',
            subTasks: []
          }
        },
        todo: {
          _id: '5f005b71eedd2a3a1ccbbb49',
          name: 'name',
          tasks: [
            '0'
          ],
          __v: 0
        },
        postedTodo: true,
        postedTask: false,
        postedSubTask: false,
        updatedTodo: false,
        updatedTask: false,
        updatedSubTask: false,
        deletedTask: false,
        deletedSubTask: false
      },
      happinessBreakdown: {
        eventIdArr: [
          '5f005b71eedd2a3a1ccbbb4c',
          '5f005b71eedd2a3a1ccbbb4d',
          '5f005b71eedd2a3a1ccbbb4e',
          '5f005b71eedd2a3a1ccbbb4f',
          '5f005b71eedd2a3a1ccbbb50'
        ],
        events: {
          '5f005b71eedd2a3a1ccbbb4c': {
            totalHappinessGained: 0,
            _id: '5f005b71eedd2a3a1ccbbb4c',
            event: 'Devour Food'
          },
          '5f005b71eedd2a3a1ccbbb4d': {
            totalHappinessGained: 0,
            _id: '5f005b71eedd2a3a1ccbbb4d',
            event: 'Complete Todo'
          },
          '5f005b71eedd2a3a1ccbbb4e': {
            totalHappinessGained: 0,
            _id: '5f005b71eedd2a3a1ccbbb4e',
            event: 'Complete Sub Todo'
          },
          '5f005b71eedd2a3a1ccbbb4f': {
            totalHappinessGained: 0,
            _id: '5f005b71eedd2a3a1ccbbb4f',
            event: 'Play Guess'
          },
          '5f005b71eedd2a3a1ccbbb50': {
            totalHappinessGained: 0,
            _id: '5f005b71eedd2a3a1ccbbb50',
            event: 'Play Rescue'
          }
        },
        postedHappinessBreakdown: true,
        postedHappinessEvent: false,
        updatedHappinessEvent: false,
      },
      _persist: {
        version: -1,
        rehydrated: true
      }
    }
   ```

   Actual Result: _same_ as Expected Result

## Integrated Testing

1. Test Case: click Account button in home

   Expected Result: Username, Coins, Happiness Level, Total Happiness Gained, Total Todos Completed, Total Sub Todos Completed and Date Guessed is shown

   Actual Result: _same_ as Expected Result

2. Test Case: click Account button while Account modal is open

   Expected Result: Account modal closes

   Actual Result: _same_ as Expected Result

3. Test Case: click exit button in Account modal

   Expected Result: Account modal closes

   Actual Result: _same_ as Expected Result

4. Test Case: click esc in Account modal

   Expected Result: Account modal closes

   Actual Result: _same_ as Expected Result

5. Test Case: click outside the Account modal with Account modal open

   Expected Result: Account modal closes

   Actual Result: _same_ as Expected Result

6. Test Case: scroll in Account modal

   Expected Result: Account modal scrolls

   Actual Result: _same_ as Expected Result

7. Test Case: click Logout button in home

   Expected Result: redirected to Sign In page

   Actual Result: _same_ as Expected Result
