# Account

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
  POST - http://localhost:5000/api/users/register
  </td>
  <td width=15%>

  ```json
  {
    "name": "name",
    "password": "password",
    "password2": "password"
  }
  ```

  </td>
  <td width=10%>

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
  POST - http://localhost:5000/api/users/register
  </td>
  <td>

  ```json
  {
    "name": "name",
    "password": "password",
    "password2": "password"
  }
  ```

  </td>
  <td>

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
  POST - http://localhost:5000/api/users/register
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
  <td>

  ```json
  {
    "password2": "Passwords must match"
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
  POST - http://localhost:5000/api/users/register
  (directly after test 1)
  </td>
  <td>

  ```json
  {
    "name": "name",
    "password": "password",
    "password2": "password"
  }
  ```

  </td>
  <td>

  ```json
  {
    "name": "Username already exists"
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
  5
  </td>
  <td>
  Test Case: POST - http://localhost:5000/api/users/login
  (directly after test 1)
  </td>
  <td>

  ```json
  {
    "name": "name",
    "password": "password"
  }
  ```

  </td>
  <td>

  ```json
  {
    "success": true,
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjZjMDRjNGIyYjYwMDBjZmJmMzE5ZiIsIm5hbWUiOiJuYW1lIiwiY29pbnMiOjAsImhhcHBpbmVzcyI6NTAsInRvdGFsSGFwcGluZXNzR2FpbmVkIjowLCJ0YXNrcyI6MCwic3ViVGFza3MiOjAsImRhdGVHdWVzc2VkIjoiMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaIiwiaWF0IjoxNTkzMjMwNTc3LCJleHAiOjE2MjQ3ODc1MDN9.HBpu3nTKZAQMGokGPJlwkuJWpxEmSENIc0rUV6sNnDw"
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
  6
  </td>
  <td>
  POST - http://localhost:5000/api/users/login
  </td>
  <td>

  ```json
  {
    "name": "",
    "password": ""
  }
  ```

  </td>
  <td>

  ```json
  {
    "name": "Username field is required",
    "password": "Password field is required"
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
  7
  </td>
  <td>
  POST - http://localhost:5000/api/users/login
  (directly after test 1)
  </td>
  <td>

  ```json
  {
    "name": "username",
    "password": "pass"
  }
  ```

  </td>
  <td>

  ```json
  {
    "passwordincorrect": "Password incorrect"
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
  8
  </td>
  <td>
  POST - http://localhost:5000/api/users/login
  </td>
  <td>

  ```json
  {
    "name": "user",
    "password": "password"
  }
  ```

  </td>
  <td>

  ```json
  {
    "namenotfound": "Username not found"
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
  9
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/
  </td>
  <td>

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

  </td>
  <td>

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

  </td>
  <td>
  <i>same</i> as Expected Result
  </td>
  <td></td>
  </tr>

  <tr>
  <td>
  10
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/
  </td>
  <td>

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

  </td>
  <td>

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

  </td>
  <td>
  <i>same</i> as Expected Result
  </td>
  <td></td>
  </tr>

  <tr>
  <td>
  11
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/
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
  { "name": "Name is required", "events": "Events is required" }
  ```

  </td>
  <td>
  <i>same</i> as Expected Result
  </td>
  <td></td>
  </tr>

  <tr>
  <td>
  12
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/event
  </td>
  <td>

  ```json
  {
    "name": "name",
    "event": {
      "event": "Complete Todo",
      "totalHappinessGained": 23
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "totalHappinessGained": 23,
    "_id": "5f004e3a27d3eb25c3b91412",
    "event": "Complete Todo"
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
  13
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/event
  </td>
  <td>

  ```json
  {
    "name": "name",
    "event": {
      "event": "Complete Sub Todo"
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "totalHappinessGained": 0,
    "_id": "5f004e4f27d3eb25c3b91413",
    "event": "Complete Todo"
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
  14
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/event
  </td>
  <td>

  ```json
  {
    "name": "",
    "event": {
      "event": "",
      "totalHappinessGained": -23
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "name": "Name is required",
    "event": {
      "event": "Description for event is required",
      "totalHappinessGained": "Total Happiness gained for event is invalid"
    }
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
  15
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/event
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
    "name": "Name is required",
    "event": "Event is required"
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
  16
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/event
  </td>
  <td>

  ```json
  {
    "name": "namefad",
    "event": {
      "event": "Complete sub Todo"
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "message": "Cannot add event of user withusername namefawf. Maybe happinessBreakdown was not found!"
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
  17
  </td>
  <td>
  POST - http://localhost:5000/api/happinessbreakdown/event
  (directly after test 13)
  </td>
  <td>

  ```json
  {
    "name": "name",
    "event": {
      "event": "Complete Sub Todo"
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "message": "Cannot add event of user withusername name. Event already exists!"
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
  18
  </td>
  <td>
  PUT - http://localhost:5000/api/h6appinessbreakdown/event
  (directly after test 9)
  </td>
  <td>

  ```json
  {
    "name": "name",
    "event": {
      "event": "Play Guess",
      "totalHappinessGained": 20
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "totalHappinessGained": 43,
    "_id": "5f003ee72eed010058b5ab0c",
    "event": "Play Guess"
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
  19
  </td>
  <td>
  PUT - http://localhost:5000/api/happinessbreakdown/event
  </td>
  <td>

  ```json
  {
    "name": "",
    "event": {
      "event": "",
      "totalHappinessGained": -23
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "name": "Name is required",
    "event": {
      "event": "Description for event is required",
      "totalHappinessGained": "Total Happiness gained for event is invalid"
    }
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
  20
  </td>
  <td>
  PUT - http://localhost:5000/api/happinessbreakdown/event
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
    "name": "Name is required",
    "event": "Event is required"
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
  21
  </td>
  <td>
  PUT - http://localhost:5000/api/h6appinessbreakdown/event
  </td>
  <td>

  ```json
  {
    "name": "namefawf",
    "event": {
      "event": "Play Guess",
      "totalHappinessGained": 20
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "message": "Cannot update event of user withusername namefawf. Maybe happinessBreakdown was not found!"
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
  22
  </td>
  <td>
  PUT - http://localhost:5000/api/h6appinessbreakdown/event
  </td>
  <td>

```json
{
  "name": "name",
  "event": {
    "event": "Play Guessing",
    "totalHappinessGained": 20
  }
}
```

</td>
<td>

```json
{
  "message": "Cannot update event of user withusername namefawf. Event was not found."
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

(with Redux DevTools and dummy postHappinessBreakdown button)

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
enter data in sign up page and click Sign Up button

| field            | value    |
| ---------------- | -------- |
| Username         | username |
| Password         | password |
| Confirm Password | password |

</td>
<td>
redirected to sign in page
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
click Sign Up button in sign up page
</td>
<td>
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
enter data in sign up page and click Sign Up button

| field            | value    |
| ---------------- | -------- |
| Username         | username |
| Password         | password |
| Confirm Password | pass     |

</td>
<td>
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
enter data in sign up page and click Sign Up button

| field            | value    |
| ---------------- | -------- |
| Username         | username |
| Password         | password |
| Confirm Password | password |

</td>
<td>
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

</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
5
</td>
<td>
enter data in sign in page and click Sign In button
(directly after test 1)

| field    | value    |
| -------- | -------- |
| Username | username |
| Password | password |

</td>
<td>
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

</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
6
</td>
<td>
click Sign In button in sign in page
</td>
<td>
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

</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
7
</td>
<td>
enter data in sign in page and click Sign In button
(directly after test 1)

| field    | value    |
| -------- | -------- |
| Username | username |
| Password | pass     |

</td>
<td>
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

</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
8
</td>
<td>
enter data in sign in page and click Sign In button
(directly after test 1)

| field    | value    |
| -------- | -------- |
| Username | user     |
| Password | password |

</td>
<td>
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

</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
9
</td>
<td>
click on postHappinessBreakdown button
</td>
<td>
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

</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
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
click Account button in home
</td>
<td>
Username, Coins, Happiness Level, Total Happiness Gained, Total Todos Completed, Total Sub Todos Completed and Date Guessed is shown
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
click Account button while Account modal is open
</td>
<td>
Account modal closes
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
click exit button in Account modal
</td>
<td>
Account modal closes
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
click esc in Account modal
</td>
<td>
Account modal closes
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
5
</td>
<td>
click outside the Account modal with Account modal open
</td>
<td>
Account modal closes
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
6
</td>
<td>
scroll in Account modal
</td>
<td>
Account modal scrolls
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
7
</td>
<td>
click Logout button in home
</td>
<td>
redirected to Sign In page
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

</table>
