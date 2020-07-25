# Todo List

- Table of Contents

  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)

## Automated Testing

(with Postman)

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
    "tasks": 4,
    "subTasks": 3
  }
  ```

    </td>
    <td>

  ```json
  {
    "date": "2020-07-25T04:19:44.112Z",
    "coins": 40,
    "petId": 0,
    "totalHappinessGained": 635,
    "happinessGained": 23,
    "tasks": 4,
    "subTasks": 3,
    "dateGuessed": "2020-06-24T05:34:37.850Z",
    "dateRescued": "2020-07-25T00:00:00.000Z",
    "bestTimeRescued": 7,
    "_id": "5f1bb371725fcc3948867bc0",
    "name": "name",
    "password": "$2a$10$hvT9gftR5cDWa0rXf/p/7OQp6kV89Ywaz5JXXdtLvOonTdE/TyCM2",
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
    "tasks": -3,
    "subTasks": -53
  }
  ```

    </td>
    <td>

  ```json
  {
    "tasks": "Tasks is invalid",
    "subTasks": "subTasks is invalid"
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
    "name": "namefsfased",
    "tasks": 42,
    "subTasks": 54
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot update data of user with username namefsfased. Maybe User was not found!"
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
    POST - http://localhost:5000/api/todos/
    </td>
    <td>

  ```json
  {
    "name": "username",
    "tasks": [
      {
        "id": "0",
        "description": "d1",
        "subTasks": [
          {
            "id": "0",
            "taskId": "0",
            "description": "ds1"
          }
        ]
      },
      {
        "id": "1",
        "description": "d2"
      }
    ]
  }
  ```

    </td>
    <td>

  ```json
  {
    "_id": "5ef7069a28fc33012ea6346b",
    "name": "username",
    "tasks": [
      {
        "deadline": "2020-06-30T08:41:35.633Z",
        "level": "2",
        "_id": "5ef7069a28fc33012ea6346c",
        "id": "0",
        "description": "d1",
        "subTasks": [
          {
            "deadline": "2020-06-30T08:41:35.631Z",
            "level": "2",
            "_id": "5ef7069a28fc33012ea6346d",
            "id": "0",
            "taskId": "0",
            "description": "ds1"
          }
        ]
      },
      {
        "deadline": "2020-06-30T08:41:35.633Z",
        "level": "2",
        "_id": "5ef7069a28fc33012ea6346e",
        "id": "1",
        "description": "d2",
        "subTasks": []
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
    6
    </td>
    <td>
    POST - http://localhost:5000/api/todos/
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
    POST - http://localhost:5000/api/todos/
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
    PUT - http://localhost:5000/api/todos/
    </td>
    <td>

  ```json
  {
    "name": "username",
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
    "__v": 69
  }
  ```

    </td>
    <td>

  ```json
  {
    "_id": "5ef7069a28fc33012ea6346b",
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
    "__v": 69
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
    PUT - http://localhost:5000/api/todos/
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
    PUT - http://localhost:5000/api/todos/
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
    "__v": 69
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot update Todo of user with username user. Maybe Todo was not found!"
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
    POST - http://localhost:5000/api/todos/task
    </td>
    <td>

  ```json
  {
    "name": "username",
    "task": {
      "description": "d3"
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "deadline": "2020-06-30T08:41:35.633Z",
    "level": "2",
    "_id": "5ef7137f28fc33012ea63479",
    "description": "d4",
    "subTasks": [],
    "id": "3"
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
    12
    </td>
    <td>
    POST - http://localhost:5000/api/todos/task
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
    <td>

  ```json
  {
    "name": "Name is required",
    "task": { "description": "Description for task is required" }
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
    POST - http://localhost:5000/api/todos/task
    </td>
    <td>

  ```json
  {
    "name": "username"
  }
  ```

    </td>
    <td>

  ```json
  { "task": "Task is required" }
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
    POST - http://localhost:5000/api/todos/task
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
    <td>

  ```json
  {
    "message": "Cannot add task of user with username user. Maybe Todo was not found!"
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
    PUT - http://localhost:5000/api/todos/task
    (directly after test 11)
    </td>
    <td>

  ```json
  {
    "name": "username",
    "task": {
      "id": "3",
      "_id": "5ef714b828fc33012ea6347a",
      "description": "di"
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "deadline": "2020-06-30T08:41:35.633Z",
    "level": "2",
    "_id": "5ef714b828fc33012ea6347a",
    "id": "3",
    "description": "di",
    "subTasks": []
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
    Test Case: PUT - http://localhost:5000/api/todos/task
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
    PUT - http://localhost:5000/api/todos/task
    </td>
    <td>

  ```json
  {
    "name": "username"
  }
  ```

    </td>
    <td>

  ```json
  { "task": "Task is required" }
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
    PUT - http://localhost:5000/api/todos/task
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
    <td>

  ```json
  {
    "message": "Cannot update task of user with username user. Maybe Todo was not found!"
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
    PUT - http://localhost:5000/api/todos/task
    </td>
    <td>

  ```json
  {
    "name": "user",
    "task": {
      "id": "3",
      "_id": "5ef714b828f",
      "description": "di"
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot update task of user with username username. Task was not found."
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
    DELETE - http://localhost:5000/api/todos/task
    (directly after test 8)
    </td>
    <td>

  ```json
  {
    "name": "username",
    "task_id": "5ef714b828fc33012ea6347a"
  }
  ```

    </td>
    <td>

  ```json
  {
    "_id": "5ef7069a28fc33012ea6346b",
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
      },
      {
        "deadline": "2020-06-30T08:41:35.633Z",
        "level": "2",
        "subTasks": [],
        "_id": "5ef7137f28fc33012ea63479",
        "description": "d4",
        "id": "3"
      }
    ],
    "__v": 73
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
    DELETE - http://localhost:5000/api/todos/task
    </td>
    <td>

  ```json
  {
    "name": "",
    "task_id": ""
  }
  ```

    </td>
    <td>

  ```json
  { "name": "Name is required", "task_id": "Task id is required" }
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
    DELETE - http://localhost:5000/api/todos/task
    </td>
    <td>

  ```json
  {
    "name": "user",
    "task_id": "5ef7137f28fc33012ea63479"
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot delete task of user with username user. Maybe Todo was not found!"
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
    23
    </td>
    <td>
    DELETE - http://localhost:5000/api/todos/task
    </td>
    <td>

  ```json
  {
    "name": "user",
    "task_id": "5ef7137f28fc330"
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot delete task of user with username username. Task was not found."
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
    24
    </td>
    <td>
    POST - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "username",
    "subTask": {
      "description": "sd2"
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "deadline": "2020-06-30T08:41:35.631Z",
    "level": "2",
    "_id": "5ef718b128fc33012ea6347c",
    "description": "sd2",
    "taskId": "0",
    "id": "1"
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
    25
    </td>
    <td>
    POST - http://localhost:5000/api/todos/subtask
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
    <td>

  ```json
  {
    "name": "Name is required",
    "subTask": { "description": "Description for subTask is required" }
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
    26
    </td>
    <td>
    POST - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "username"
  }
  ```

    </td>
    <td>

  ```json
  { "subTask": "SubTask is required" }
  ```

    </td>
    <td>
    <i>same</i> as Expected Result
    </td>
    <td></td>
    </tr>

    <tr>
    <td>
    27
    </td>
    <td>
    POST - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "user",
    "subTask": {
      "description": "sd2"
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot add subTask of user with username user. Maybe Todo was not found!"
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
    28
    </td>
    <td>
    POST - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "user",
    "task_id": "5ef7137f28fc33012ea63479",
    "subTask": {
      "description": "sd2"
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "deadline": "2020-06-30T08:41:35.631Z",
    "level": "2",
    "_id": "5ef71a1628fc33012ea6347d",
    "description": "sd2",
    "taskId": "3",
    "id": "0"
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
    29
    </td>
    <td>
    POST - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "user",
    "task_id": "3123",
    "subTask": {
      "description": "sd2"
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot add subTask of user with username user. Task was not found."
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
    30
    </td>
    <td>
    PUT - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "username",
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
    <td>
    <i>same</i> as Expected Result
    </td>
    <td></td>
    </tr>

    <tr>
    <td>
    31
    </td>
    <td>
    PUT - http://localhost:5000/api/todos/subtask
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
    <td>
    <i>same</i> as Expected Result
    </td>
    <td></td>
    </tr>

    <tr>
    <td>
    32
    </td>
    <td>
    PUT - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "username"
  }
  ```

    </td>
    <td>

  ```json
  { "task_id": "Task id is required", "subTask": "SubTask is required" }
  ```

    </td>
    <td>
    <i>same</i> as Expected Result
    </td>
    <td></td>
    </tr>

    <tr>
    <td>
    33
    </td>
    <td>
    PUT - http://localhost:5000/api/todos/subtask
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
    <td>

  ```json
  {
    "message": "Cannot update subTask of user with username user. Maybe Todo was not found!"
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
    34
    </td>
    <td>
    PUT - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "user",
    "task_id": "5eec9bec89bca61d07109a02",
    "task": {
      "_id": "fewdfsa",
      "id": "0",
      "taskId": "2",
      "level": "5",
      "deadline": "2020-06-18T11:32:29.745Z",
      "description": "new"
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot update subTask of user with username user. SubTask was not found."
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
    35
    </td>
    <td>
    PUT - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "user",
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
    <td>

  ```json
  {
    "message": "Cannot update subTask of user with username user. Task was not found."
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
    36
    </td>
    <td>
    DELETE - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "username",
    "task_id": "5eec9bec89bca61d07109a02",
    "subTask_id": "5ef718b128fc33012ea6347c"
  }
  ```

    </td>
    <td>

  ```json
  {
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
    <td>
    <i>same</i> as Expected Result
    </td>
    <td></td>
    </tr>

    <tr>
    <td>
    37
    </td>
    <td>
    DELETE - http://localhost:5000/api/todos/subtask
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
    <td>

  ```json
  {
    "name": "Name is required",
    "task_id": "Task id is required",
    "subTask_id": "SubTask id is required"
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
    38
    </td>
    <td>
    DELETE - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "user",
    "task_id": "5eec9bec89bca61d07109a02",
    "subTask_id": "5ef718b128fc33012ea6347c"
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot delete subTask of user with username user. Maybe Todo was not found!"
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
    39
    </td>
    <td>
    DELETE - http://localhost:5000/api/todos/subtask
    </td>
    <td>

  ```json
  {
    "name": "username",
    "task_id": "geargefg",
    "subTask_id": "5ef718b128fc33012ea6347c"
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot delete subTask of user with username username. Task was not found."
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
    40
    </td>
    <td>
    DELETE - http://localhost:5000/api/todos/subtask
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
    <td>

  ```json
  {
    "message": "Cannot delete subTask of user with username username. SubTask was not found."
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
click New Todo button once in Todo modal
</td>
<td>
New Task is created with deadline 3 days after today's date, difficulty level Effortless and description 'New Todo'
</td>
<td>
<i>same</i> as Expected Result
</td>
<td>
Actual Result(before fix): <code>this.props.todo.tasks</code> is undefined
Fix: Error arises from redux's inability to work with arrays containing objects, use normalizr to normalise todo data
</td>
</tr>

<tr>
<td>
2
</td>
<td>
click New Sub Todo button once in Todo modal
</td>
<td>
New Sub Task is created with deadline 3 days after today's date, difficulty level Effortless and description 'New Sub Todo'
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
click on deadline of a task and choose a day 4 days after today's date
</td>
<td>
Colour of task turns light pink
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
click on deadline of a task and choose a day 3 days after today's date
</td>
<td>
Colour of task turns pink
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
click on deadline of a task and choose a day 1 day before today's date
</td>
<td>
Colour of task turns dark pink
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
click on difficulty level of a task and select Effortless
</td>
<td>
Difficulty level of task changes to Effortless
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
click on difficulty level of a task and select Simple
</td>
<td>
Difficulty level of task changes to Simple
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
click on difficulty level of a task and select Medium
</td>
<td>
Difficulty level of task changes to Medium
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
click on difficulty level of a task and select Troublesome
</td>
<td>
Difficulty level of task changes to Troublesome
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
click on difficulty level of a task and select Difficult
</td>
<td>
Difficulty level of task changes to Difficult
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
click on description of a task and edit description
</td>
<td>
Description of task changes and is saved
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
Click on tick icon of a task
</td>
<td>
Todo modal closes, pet transits into productive state, coins increases and happiness level increases
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
Click on delete icon of a task
</td>
<td>
Task is removed
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
click on deadline of a subTask and choose a day 4 days after today's date (after test 2)
</td>
<td>
Colour of subTask turns light pink
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
click on deadline of a subTask and choose a day 3 days after today's date
(after test 2)
</td>
<td>
Colour of subTask turns pink
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
click on deadline of a subTask and choose a day 1 day before today's date
(after test 2)
</td>
<td>
Colour of subTask turns dark pink
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
click on difficulty level of a subTask and select Effortless
(after test 2)
</td>
<td>
Difficulty level of subTask changes to Effortless
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
click on difficulty level of a subTask and select Simple
(after test 2)
</td>
<td>
Difficulty level of subTask changes to Simple
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
click on difficulty level of a subTask and select Medium
(after test 2)
</td>
<td>
Difficulty level of subTask changes to Medium
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
click on difficulty level of a subTask and select Troublesome
(after test 2)
</td>
<td>
Difficulty level of subTask changes to Troublesome
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
click on difficulty level of a subTask and select Difficult
(after test 2)
</td>
<td>
Difficulty level of subTask changes to Difficult
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
click on description of a subTask and edit description
(after test 2)
</td>
<td>
Description of subTask changes and is saved
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
23
</td>
<td>
Click on tick icon of a subTask
(after test 2)
</td>
<td>
Todo modal closes, pet transits into productive state, coins increases and happiness level increases
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>

<tr>
<td>
24
</td>
<td>
Click on delete icon of a subTask
(after test 2)
</td>
<td>
SubTask is removed
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
click Todo button in home
</td>
<td>
Todo modal opens
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
click Todo button while Todo modal is open
</td>
<td>
Todo modal closes
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
click exit button in Todo modal
</td>
<td>
Todo modal closes
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
click esc in Todo modal
</td>
<td>
Todo modal closes
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
click outside the Todo modal with Todo modal open
</td>
<td>
Todo modal closes
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
scroll in Todo modal
</td>
<td>
Todo modal scrolls
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
click on a task and drag it to the top in Todo modal
</td>
<td>
Colour of task turns light purple and background of droppable in Todo modal changes to light indigo during drag, task is moved to the top after drop
</td>
<td>
<i>same</i> as Expected Result
</td>
<td>
Actual Result(before fix): Animation of drag is unnatural, cursor is on the left of the task instead of in the middle of the task during drag
Fix: Use a clone without functional components to display during drag
</td>
</tr>

<tr>
<td>
8
</td>
<td>
click on a task and drag it to the bottom in Todo modal
</td>
<td>
Colour of task turns light purple and background of droppable in Todo modal changes to light indigo during drag, task is moved to the bottom after drop
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
click on a task and drag it outside the droppable in Todo modal
</td>
<td>
Task position remains unchanged
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
click on a subTask and drag it to the top within a task
</td>
<td>
Colour of subTask turns light purple and background of droppable in task changes to light indigo during drag, subTask is moved to the top after drop
</td>
<td>
<i>same</i> as Expected Result
</td>
<td>
Actual Result(before fix): subTask returns to original postion after drop
Fix: Error arises due to insufficent space on top of the first task, there is no droppable area detected, increase the space of droppable to span an area on the top of the first task
</td>
</tr>
<tr>
<td>
11
</td>
<td>
click on a subTask and drag it to the bottom within a task
</td>
<td>
Colour of subTask turns light purple and background of droppable in task changes to light indigo during drag, subTask is moved to the bottom after drop
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
click on a subTask and drag it outside the droppable in Todo modal
</td>
<td>
subTask position remains unchanged
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
click on a subTask and drag it to another task with at least 1 subTask
</td>
<td>
Colour of subTask turns light purple and background of droppable in the other task changes to light indigo during drag, subTask is moved to the bottom of the other task after drop
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
click on a subTask and drag it to another task without any subTasks
</td>
<td>
Colour of subTask turns light purple and background of droppable in the other task changes to light indigo during drag, subTask is moved to the other task after drop
</td>
<td>
<i>same</i> as Expected Result
</td>
<td>
Actual Result(before fix): subTask returns to original postion after drop
Fix: Error arises due to insufficent space in the task, there is no droppable area detected, set a minimum height in task as droppable area for subTasks
</td>
</tr>
</table>
