# Todos

- Table of Contents
  - [Add Todo](#add-todo)
  - [Update Todo](#update-todo)
  - [Add Task](#add-task)
  - [Update Task](#update-task)
  - [Delete Task](#delete-task)
  - [Add SubTask](#add-subtask)
  - [Update SubTask](#update-subtask)
  - [Delete SubTask](#delete-subtask)

## Add Todo

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/todos/
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
  "tasks": [
    // task arr, required
    {
      "id": "0", // integer > 0 stored as string, required
      "description": "d1", // string, required
      "subTasks": [
        // subTask arr, optional
        {
          "id": "0", // integer > 0 stored as string, required
          "taskId": "0", // integer > 0 stored as string, required
          "description": "ds1" // string, required
        },
        {
          "id": "0", // integer > 0 stored as string, required
          "taskId": "0", // integer > 0 stored as string, required
          "description": "ds1", // string, required
          "deadline": "2020-06-24T05:34:37.850Z", // ISO8601 string, optional
          "level": "1" // 1 <= integer <=5 stored as string, optional
        }
      ]
    },
    {
      "id": "1", // integer > 0 stored as string, required
      "description": "d2", // string, required
      "deadline": "2020-06-29T05:34:37.850Z", // ISO8601 string, optional
      "level": "5" // 1 <= integer <=5 stored as string, optional
    }
  ]
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
  "_id": "5f1c1d91796d4931dc6d8807",
  "name": "username",
  "tasks": [
    {
      "deadline": "2020-07-28T10:18:52.812Z",
      "level": "2",
      "_id": "5f1c1d91796d4931dc6d8808",
      "id": "0",
      "description": "d1",
      "subTasks": [
        {
          "deadline": "2020-07-28T10:18:52.811Z",
          "level": "2",
          "_id": "5f1c1d91796d4931dc6d8809",
          "id": "0",
          "taskId": "0",
          "description": "ds1"
        },
        {
          "deadline": "2020-06-24T05:34:37.850Z",
          "level": "1",
          "_id": "5f1c1d91796d4931dc6d880a",
          "id": "0",
          "taskId": "0",
          "description": "ds1"
        }
      ]
    },
    {
      "deadline": "2020-06-29T05:34:37.850Z",
      "level": "5",
      "_id": "5f1c1d91796d4931dc6d880b",
      "id": "1",
      "description": "d2",
      "subTasks": []
    }
  ],
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

- Empty fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "tasks": [
      {
        "id": "",
        "description": "",
        "subTasks": [
          {
            "id": "",
            "taskId": "",
            "description": ""
          }
        ]
      }
    ]
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
    "name": "Name is required",
    "tasks": [
      {
        "id": "Id for task is invalid",
        "description": "Description for task is required",
        "subTasks": [
          {
            "taskId": "TaskId for subTask is invalid",
            "id": "Id for subTask is invalid",
            "description": "Description for subTask is required"
          }
        ]
      }
    ]
  }
  ```

  </td>
  </tr>
  </table>

- Invalid fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username",
    "tasks": [
      {
        "id": "-2",
        "description": "d1",
        "subTasks": [
          {
            "id": "-35",
            "taskId": "-32.3",
            "description": "ds1"
          }
        ]
      },
      {
        "id": "34.5",
        "description": "d2"
      }
    ]
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
    "tasks": [
      {
        "id": "Id for task is invalid",
        "subTasks": [
          {
            "taskId": "TaskId for subTask is invalid",
            "id": "Id for subTask is invalid"
          }
        ]
      },
      { "id": "Id for task is invalid" }
    ]
  }
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

## Update Todo

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/todos/
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
  "tasks": [
    // task arr, required
    {
      "deadline": "2020-06-20", // ISO8601 string, optional
      "level": "2", // 1 <= integer <=5 stored as string, optional
      "subTasks": [
        // subTask arr, optional
        {
          "deadline": "2020-06-22T11:03:57.196Z", // ISO8601 string, optional
          "level": "2", // 1 <= integer <=5 stored as string, optional
          "_id": "5eec9bec89bca61d07109a03", // string, required
          "id": "0", // integer > 0 stored as string, required
          "taskId": "0", // integer > 0 stored as string, required
          "description": "ds1" // string, required
        }
      ],
      "_id": "5eec9bec89bca61d07109a02", // string, required
      "id": "0", // integer > 0 stored as string, required
      "description": "d1" // string, required
    },
    {
      "deadline": "2020-06-22T11:03:57.199Z", // ISO8601 string, optional
      "level": "2", // 1 <= integer <=5 stored as string, optional
      "subTasks": [
        // subTask arr, optional
        {
          "deadline": "2020-06-22T11:03:57.196Z", // ISO8601 string, optional
          "level": "2", // 1 <= integer <=5 stored as string, optional
          "_id": "5eec9bfb89bca61d07109a06", // string, required
          "description": "sd2", // string, required
          "taskId": "1", // integer > 0 stored as string, required
          "id": "0" // integer > 0 stored as string, required
        }
      ],
      "_id": "5eec9bec89bca61d07109a04", // string, required
      "id": "1", // integer > 0 stored as string, required
      "description": "d2" // string, required
    },
    {
      "deadline": "2020-06-22T11:03:57.199Z", // ISO8601 string, optional
      "level": "2", // 1 <= integer <=5 stored as string, optional
      "_id": "5eec9bec89bca61d07109a05", // string, required
      "id": "2", // integer > 0 stored as string, required
      "description": "d3" // string, required
    }
  ]
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
  "_id": "5f1c1d91796d4931dc6d8807",
  "name": "username",
  "tasks": [
    {
      "deadline": "2020-06-20T00:00:00.000Z",
      "level": "2",
      "subTasks": [
        {
          "deadline": "2020-06-22T11:03:57.196Z",
          "level": "2",
          "_id": "5eec9bec89bca61d07109a03",
          "id": "0",
          "taskId": "0",
          "description": "ds1"
        }
      ],
      "_id": "5eec9bec89bca61d07109a02",
      "id": "0",
      "description": "d1"
    },
    {
      "deadline": "2020-06-22T11:03:57.199Z",
      "level": "2",
      "subTasks": [
        {
          "deadline": "2020-06-22T11:03:57.196Z",
          "level": "2",
          "_id": "5eec9bfb89bca61d07109a06",
          "description": "sd2",
          "taskId": "1",
          "id": "0"
        }
      ],
      "_id": "5eec9bec89bca61d07109a04",
      "id": "1",
      "description": "d2"
    },
    {
      "deadline": "2020-06-22T11:03:57.199Z",
      "level": "2",
      "subTasks": [],
      "_id": "5eec9bec89bca61d07109a05",
      "id": "2",
      "description": "d3"
    }
  ],
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

- Empty fields and invalid fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "tasks": [
      {
        "deadline": "",
        "level": "",
        "subTasks": [
          {
            "deadline": "",
            "level": "",
            "id": "",
            "taskId": "",
            "description": ""
          }
        ],
        "id": "",
        "description": ""
      }
    ]
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
    "name": "Name is required",
    "tasks": [
      {
        "id": "Id for task is invalid",
        "description": "Description for task is required",
        "deadline": "Deadline for task is invalid",
        "level": "Level for task is invalid",
        "subTasks": [
          {
            "taskId": "TaskId for subTask is invalid",
            "id": "Id for subTask is invalid",
            "description": "Description for subTask is required",
            "deadline": "Deadline for subTask is invalid",
            "level": "Level for subTask is invalid"
          }
        ]
      }
    ]
  }
  ```

  </td>
  </tr>
  </table>

- Invalid fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username",
    "tasks": [
      {
        "id": "-2",
        "description": "d1",
        "subTasks": [
          {
            "id": "-35",
            "taskId": "-32.3",
            "description": "ds1"
          }
        ]
      },
      {
        "id": "34.5",
        "description": "d2"
      }
    ]
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
    "tasks": [
      {
        "id": "Id for task is invalid",
        "subTasks": [
          {
            "taskId": "TaskId for subTask is invalid",
            "id": "Id for subTask is invalid"
          }
        ]
      },
      { "id": "Id for task is invalid" }
    ]
  }
  ```

  </td>
  </tr>
  </table>

- Todo does not exist

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "user",
    "tasks": [
      {
        "deadline": "2020-06-20",
        "level": "2",
        "subTasks": [
          {
            "deadline": "2020-06-22T11:03:57.196Z",
            "level": "2",
            "_id": "5eec9bec89bca61d07109a03",
            "id": "0",
            "taskId": "0",
            "description": "ds1"
          }
        ],
        "_id": "5eec9bec89bca61d07109a02",
        "id": "0",
        "description": "d1"
      }
    ]
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
    "message": "Cannot update Todo of user with username user. Maybe Todo was not found!"
  }
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

- Replaces the entire todo object.

## Add Task

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/todos/task
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
  // task object, required
  "task": {
    "id": "0", // integer > 0 stored as string, optional
    "description": "d4", // string, required
    "subTasks": [
      // subTask arr, optional
      {
        "id": "0", // integer > 0 stored as string, required
        "taskId": "0", // integer > 0 stored as string, optional
        "description": "ds1" // string, required
      },
      {
        "id": "0", // integer > 0 stored as string, required
        "taskId": "0", // integer > 0 stored as string, optional
        "description": "ds1", // string, required
        "deadline": "2020-06-24T05:34:37.850Z", // ISO8601 string, optional
        "level": "1" // 1 <= integer <=5 stored as string, optional
      }
    ]
  }
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
  "deadline": "2020-07-28T10:18:52.812Z",
  "level": "2",
  "_id": "5f1c217f796d4931dc6d8811",
  "id": "3",
  "description": "d4",
  "subTasks": [
    {
      "deadline": "2020-07-28T10:18:52.811Z",
      "level": "2",
      "_id": "5f1c217f796d4931dc6d8812",
      "id": "0",
      "taskId": "0",
      "description": "ds1"
    },
    {
      "deadline": "2020-06-24T05:34:37.850Z",
      "level": "1",
      "_id": "5f1c217f796d4931dc6d8813",
      "id": "0",
      "taskId": "0",
      "description": "ds1"
    }
  ]
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Empty fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "task": {
      "description": ""
    }
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
    "name": "Name is required",
    "task": { "description": "Description for task is required" }
  }
  ```

  </td>
  </tr>
  </table>

- Empty field

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username"
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
  { "task": "Task is required" }
  ```

  </td>
  </tr>
  </table>

- Todo does not exist

   <table>
   <tr>
   <td>
   REQUEST
   </td>
   <td>

  ```json
  {
    "name": "user",
    "task": {
      "description": "d3"
    }
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
    "message": "Cannot add task of user with username user. Maybe Todo was not found!"
  }
  ```

   </td>
   </tr>
   </table>

</td>
</tr>
</table>

- Add task to the end of tasks array.

## Update Task

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/todos/task
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
  // task object, required
  "task": {
    "deadline": "2020-06-20", // ISO8601 string, optional
    "level": "2", // 1 <= integer <=5 stored as string, optional
    "subTasks": [
      // subTask arr, optional
      {
        "deadline": "2020-06-22T11:03:57.196Z", // ISO8601 string, optional
        "level": "2", // 1 <= integer <=5 stored as string, optional
        "_id": "5eec9bec89bca61d07109a03", // string, required
        "id": "1", // integer > 0 stored as string, required
        "taskId": "0", // integer > 0 stored as string, required
        "description": "ds1" // string, required
      }
    ],
    "_id": "5eec9bec89bca61d07109a04", // string, required
    "id": "1", // integer > 0 stored as string, required
    "description": "d1" // string, required
  }
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
  "deadline": "2020-06-20T00:00:00.000Z",
  "level": "2",
  "_id": "5eec9bec89bca61d07109a04",
  "subTasks": [
    {
      "deadline": "2020-06-22T11:03:57.196Z",
      "level": "2",
      "_id": "5eec9bec89bca61d07109a03",
      "id": "1",
      "taskId": "0",
      "description": "ds1"
    }
  ],
  "id": "1",
  "description": "d1"
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Empty fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username",
    "task": {
      "id": "",
      "_id": "",
      "description": ""
    }
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
    "task": {
      "id": "Id for task is invalid",
      "description": "Description for task is required",
      "_id": "Task id is required"
    }
  }
  ```

  </td>
  </tr>
  </table>

- Empty field

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username"
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
  { "task": "Task is required" }
  ```

  </td>
  </tr>
  </table>

- Todo does not exist

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "user",
    "task": {
      "id": "3",
      "_id": "5ef714b828fc33012ea6347a",
      "description": "di"
    }
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
    "message": "Cannot update task of user with username user. Maybe Todo was not found!"
  }
  ```

  </td>
  </tr>
  </table>

- Task does not exist

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username",
    "task": {
      "id": "3",
      "_id": "5e012ea6347a",
      "description": "di"
    }
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
  "message": "Cannot update task of user with username username. Task was not found."
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

- Replaces the entire task object.

## Delete Task

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/todos/task
</td>
</tr>

<tr>
<td>
METHOD
</td>
<td>
DELETE
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
  "task_id": "5eec9bec89bca61d07109a04" // string, required
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
  "_id": "5f1c1d91796d4931dc6d8807",
  "name": "username",
  "tasks": [
    {
      "deadline": "2020-06-20T00:00:00.000Z",
      "level": "2",
      "subTasks": [
        {
          "deadline": "2020-06-22T11:03:57.196Z",
          "level": "2",
          "_id": "5eec9bec89bca61d07109a03",
          "id": "0",
          "taskId": "0",
          "description": "ds1"
        }
      ],
      "_id": "5eec9bec89bca61d07109a02",
      "id": "0",
      "description": "d1"
    },
    {
      "deadline": "2020-06-22T11:03:57.199Z",
      "level": "2",
      "subTasks": [],
      "_id": "5eec9bec89bca61d07109a05",
      "id": "1",
      "description": "d3"
    },
    {
      "deadline": "2020-07-28T10:18:52.812Z",
      "level": "2",
      "subTasks": [
        {
          "deadline": "2020-07-28T10:18:52.811Z",
          "level": "2",
          "_id": "5f1c217f796d4931dc6d8812",
          "id": "0",
          "taskId": "0",
          "description": "ds1"
        },
        {
          "deadline": "2020-06-24T05:34:37.850Z",
          "level": "1",
          "_id": "5f1c217f796d4931dc6d8813",
          "id": "0",
          "taskId": "0",
          "description": "ds1"
        }
      ],
      "_id": "5f1c217f796d4931dc6d8811",
      "id": "2",
      "description": "d4"
    }
  ],
  "__v": 3
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Empty fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "task_id": ""
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
  { "name": "Name is required", "task_id": "Task id is required" }
  ```

  </td>
  </tr>
  </table>

- Todo does not exist

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "user",
    "task_id": "5ef7137f28fc33012ea63479"
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
    "message": "Cannot delete task of user with username user. Maybe Todo was not found!"
  }
  ```

  </td>
  </tr>
  </table>

- Task does not exist

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "user",
    "task_id": "hdrtybwge"
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
    "message": "Cannot delete task of user with username username. Task was not found."
  }
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

- Task ids are updated accordingly after deletion.

## Add SubTask

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/todos/subtask
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
  "task_id": "5ef7137f28fc33012ea63479", // string, optional
  "subTask": {
    // subTask object, required
    "id": "0", // integer > 0 stored as string, optional
    "taskId": "0", // integer > 0 stored as string, optional
    "description": "ds1", // string, required
    "deadline": "2020-06-24T05:34:37.850Z", // ISO8601 string, optional
    "level": "1" // 1 <= integer <=5 stored as string, optional
  }
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
  "deadline": "2020-06-30T08:41:35.631Z",
  "level": "2",
  "_id": "5ef7137f28fc33012ea63479",
  "description": "sd2",
  "taskId": "0",
  "id": "1"
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Empty fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "subTask": {
      "description": ""
    }
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
    "name": "Name is required",
    "subTask": { "description": "Description for subTask is required" }
  }
  ```

  </td>
  </tr>
  </table>

- Empty field

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username"
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
  { "task": "Task is required" }
  ```

  </td>
  </tr>
  </table>

- Todo does not exist

   <table>
   <tr>
   <td>
   REQUEST
   </td>
   <td>

  ```json
  {
    "name": "user",
    "subTask": {
      "description": "d3"
    }
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
    "message": "Cannot add subTask of user with username user. Maybe Todo was not found!"
  }
  ```

   </td>
   </tr>
   </table>

- Task does not exist

   <table>
   <tr>
   <td>
   REQUEST
   </td>
   <td>

  ```json
  {
    "name": "username",
    "task_id": "3123",
    "subTask": {
      "description": "sd2"
    }
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
    "message": "Cannot add subTask of user with username username. Task was not found."
  }
  ```

   </td>
   </tr>
   </table>

</td>
</tr>
</table>

- SubTask is added at the end of the subTasks array of the first task if task_id is not specificed, else it is added to the end of the specificed task.

## Update SubTask

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/todos/subtask
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
  "task_id": "5eec9bec89bca61d07109a02", // string, required
  "subTask": {
    // subTask object, required
    "deadline": "2020-06-18T11:32:29.745Z", // ISO8601 string, optional
    "level": "5", // 1 <= integer <=5 stored as string, optional
    "_id": "5eec9bec89bca61d07109a03", // string, required
    "id": "0", // integer > 0 stored as string, required
    "taskId": "2", // integer > 0 stored as string, required
    "description": "new" // string, required
  }
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
  "deadline": "2020-06-18T11:32:29.745Z",
  "level": "5",
  "_id": "5eec9bec89bca61d07109a03",
  "id": "0",
  "taskId": "2",
  "description": "new"
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Empty fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "task_id": "",
    "subTask": {
      "id": "",
      "_id": "",
      "taskId": "",
      "description": ""
    }
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
    "name": "Name is required",
    "task_id": "Task id is required",
    "subTask": {
      "taskId": "TaskId for subTask is invalid",
      "id": "Id for subTask is invalid",
      "description": "Description for subTask is required",
      "_id": "SubTask id is required"
    }
  }
  ```

  </td>
  </tr>
  </table>

- Empty field

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "username"
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
  { "task": "Task is required" }
  ```

  </td>
  </tr>
  </table>

- Todo does not exist

   <table>
   <tr>
   <td>
   REQUEST
   </td>
   <td>

  ```json
  {
    "name": "user",
    "task_id": "5eec9bec89bca61d07109a02",
    "task": {
      "_id": "5eec9bec89bca61d07109a03",
      "id": "0",
      "taskId": "2",
      "level": "5",
      "deadline": "2020-06-18T11:32:29.745Z",
      "description": "new"
    }
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
    "message": "Cannot update subTask of user with username user. Maybe Todo was not found!"
  }
  ```

   </td>
   </tr>
   </table>

- Task does not exist

   <table>
   <tr>
   <td>
   REQUEST
   </td>
   <td>

  ```json
  {
    "name": "username",
    "task_id": "fwraGf",
    "task": {
      "_id": "5eec9bec89bca61d07109a03",
      "id": "0",
      "taskId": "2",
      "level": "5",
      "deadline": "2020-06-18T11:32:29.745Z",
      "description": "new"
    }
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
    "message": "Cannot update subTask of user with username username. Task was not found."
  }
  ```

   </td>
   </tr>
   </table>

</td>
</tr>
</table>

- Replaces the entire subTask object.

## Delete SubTask

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/todos/task
</td>
</tr>

<tr>
<td>
METHOD
</td>
<td>
DELETE
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
  "task_id": "5eec9bec89bca61d07109a02", // string, required
  "subTask_id": "5ef718b128fc33012ea6347c" // string, required
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
  "_id": "5f1c1d91796d4931dc6d8807",
  "deadline": "2020-06-20T00:00:00.000Z",
  "level": "2",
  "subTasks": [
    {
      "deadline": "2020-06-18T11:32:29.745Z",
      "level": "5",
      "_id": "5eec9bec89bca61d07109a03",
      "id": "0",
      "taskId": "2",
      "description": "new"
    }
  ],
  "_id": "5eec9bec89bca61d07109a02",
  "id": "0",
  "description": "d1"
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Empty fields

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "task_id": "",
    "subTask_id": ""
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
    "name": "Name is required",
    "task_id": "Task id is required",
    "subTask_id": "SubTask id is required"
  }
  ```

  </td>
  </tr>
  </table>

- Todo does not exist

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "user",
    "task_id": "5ef7137f28fc33012ea63479",
    "subTask_id": "5ef718b128fc33012ea6347c"
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
    "message": "Cannot delete subTask of user with username user. Maybe Todo was not found!"
  }
  ```

  </td>
  </tr>
  </table>

- Task does not exist

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "user",
    "task_id": "hdrtybwge",
    "subTask_id": "5ef718b128fc33012ea6347c"
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
    "message": "Cannot delete subTask of user with username username. Task was not found."
  }
  ```

  </td>
  </tr>
  </table>

- SubTask does not exist

   <table>
   <tr>
   <td>
   REQUEST
   </td>
   <td>

  ```json
  {
    "name": "username",
    "task_id": "5eec9bec89bca61d07109a02",
    "subTask_id": "wefweyeyht"
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
    "message": "Cannot delete subTask of user with username username. SubTask was not found."
  }
  ```

   </td>
   </tr>
   </table>

</td>
</tr>
</table>

- subTask ids are updated accordingly after deletion
