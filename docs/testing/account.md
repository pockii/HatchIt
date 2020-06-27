# Account

- Table of Contents

  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)

## Automated Testing

- Backend (with Postman)

  1. Test Case: POST - <http://localhost:5000/api/users/register>

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

  2. Test Case: POST - <http://localhost:5000/api/users/register>

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

  3. Test Case: POST - <http://localhost:5000/api/users/register>

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

  4. Test Case: POST - <http://localhost:5000/api/users/register>
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

  5. Test Case: POST - <http://localhost:5000/api/users/login>
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

  6. Test Case: POST - <http://localhost:5000/api/users/login>

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

  7. Test Case: POST - <http://localhost:5000/api/users/login>
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

  8. Test Case: POST - <http://localhost:5000/api/users/login>

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

## Unit Testing

(with Redux DevTools)

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

## Integrated Testing

| Test Case | Steps Taken | Expected Result | Actual Result |
| --------- | ----------- | --------------- | ------------- |

