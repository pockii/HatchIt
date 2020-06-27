# Todo List

- Table of Contents
  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)
  
## Automated Testing

(with Postman)

- Backend (with Postman)

  1.  Test Case: PUT - <http://localhost:5000/api/users/userdata>
      Body:

      ```json
      {
        "name": "name",
        "tasks": 4,
        "subTasks": 3
      }
      ```

      Expected Result:

      ```json
      {
        "date": "2020-06-27T02:34:37.850Z",
        "coins": 40,
        "happiness": 23,
        "totalHappinessGained": 635,
        "tasks": 4,
        "subTasks": 3,
        "dateGuessed": "1970-01-01T00:00:00.000Z",
        "_id": "5ef6c04c4b2b6000cfbf319f",
        "name": "name",
        "password": "$2a$10$.eOW7FxcKZhpPoz0sfxiceMxsGvJHK2hmSWSiW1yNG5yIn4TIpuVK",
        "__v": 0
      }
      ```

      Actual Result: _same_ as Expected Result

  2.  Test Case: PUT - <http://localhost:5000/api/users/userdata>
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

  3.  Test Case: PUT - <http://localhost:5000/api/users/userdata>
      Body:

      ```json
      {
        "name": "name",
        "tasks": -3,
        "subTasks": -53
      }
      ```

      Expected Result:

      ```json
      {
        "tasks": "Tasks is invalid",
        "subTasks": "subTasks is invalid"
      }
      ```

      Actual Result: _same_ as Expected Result

  4.  Test Case: PUT - <http://localhost:5000/api/users/userdata>
      Body:

      ```json
      {
        "name": "namefsfased",
        "tasks": 42,
        "subTasks": 54
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot update data of user with username namefsfased. Maybe User was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  5.  Test Case: POST - <http://localhost:5000/api/todos/>
      Body:

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

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  6.  Test Case: POST - <http://localhost:5000/api/todos/>
      Body:

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

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  7.  Test Case: POST - <http://localhost:5000/api/todos/>
      Body:

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

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  8.  Test Case: PUT - <http://localhost:5000/api/todos/>
      Body:

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

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  9.  Test Case: PUT - <http://localhost:5000/api/todos/>
      Body:

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

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  10. Test Case: PUT - <http://localhost:5000/api/todos/>
      Body:

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

      Expected Result:

      ```json
      {
        "message": "Cannot update Todo of user with username user. Maybe Todo was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  11. Test Case: POST - <http://localhost:5000/api/todos/task>
      Body:

      ```json
      {
        "name": "username",
        "task": {
          "description": "d3"
        }
      }
      ```

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  12. Test Case: POST - <http://localhost:5000/api/todos/task>
      Body:

      ```json
      {
        "name": "",
        "task": {
          "description": ""
        }
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Name is required",
        "task": { "description": "Description for task is required" }
      }
      ```

      Actual Result: _same_ as Expected Result

  13. Test Case: POST - <http://localhost:5000/api/todos/task>
      Body:

      ```json
      {
        "name": "username"
      }
      ```

      Expected Result:

      ```json
      { "task": "Task is required" }
      ```

      Actual Result: _same_ as Expected Result

  14. Test Case: POST - <http://localhost:5000/api/todos/task>
      Body:

      ```json
      {
        "name": "user",
        "task": {
          "description": "d3"
        }
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot add task of user with username user. Maybe Todo was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  15. Test Case: PUT - <http://localhost:5000/api/todos/task>
      (directly after test 11)
      Body:

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

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  16. Test Case: PUT - <http://localhost:5000/api/todos/task>
      Body:

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

      Expected Result:

      ```json
      {
        "task": {
          "id": "Id for task is invalid",
          "description": "Description for task is required",
          "_id": "Task id is required"
        }
      }
      ```

      Actual Result: _same_ as Expected Result

  17. Test Case: PUT - <http://localhost:5000/api/todos/task>
      Body:

      ```json
      {
        "name": "username"
      }
      ```

      Expected Result:

      ```json
      { "task": "Task is required" }
      ```

      Actual Result: _same_ as Expected Result

  18. Test Case: PUT - <http://localhost:5000/api/todos/task>
      Body:

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

      Expected Result:

      ```json
      {
        "message": "Cannot update task of user with username user. Maybe Todo was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  19. Test Case: PUT - <http://localhost:5000/api/todos/task>
      Body:

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

      Expected Result:

      ```json
      {
        "message": "Cannot update task of user with username username. Task was not found."
      }
      ```

      Actual Result: _same_ as Expected Result

  20. Test Case: DELETE - <http://localhost:5000/api/todos/task>
      (directly after test 8)
      Body:

      ```json
      {
        "name": "username",
        "task_id": "5ef714b828fc33012ea6347a"
      }
      ```

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  21. Test Case: DELETE - <http://localhost:5000/api/todos/task>
      Body:

      ```json
      {
        "name": "",
        "task_id": ""
      }
      ```

      Expected Result:

      ```json
      { "name": "Name is required", "task_id": "Task id is required" }
      ```

      Actual Result: _same_ as Expected Result

  22. Test Case: DELETE - <http://localhost:5000/api/todos/task>
      Body:

      ```json
      {
        "name": "user",
        "task_id": "5ef7137f28fc33012ea63479"
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot delete task of user with username user. Maybe Todo was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  23. Test Case: DELETE - <http://localhost:5000/api/todos/task>
      Body:

      ```json
      {
        "name": "user",
        "task_id": "5ef7137f28fc330"
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot delete task of user with username username. Task was not found."
      }
      ```

      Actual Result: _same_ as Expected Result

  24. Test Case: POST - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "username",
        "subTask": {
          "description": "sd2"
        }
      }
      ```

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  25. Test Case: POST - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "",
        "task": {
          "description": ""
        }
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Name is required",
        "subTask": { "description": "Description for subTask is required" }
      }
      ```

      Actual Result: _same_ as Expected Result

  26. Test Case: POST - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "username"
      }
      ```

      Expected Result:

      ```json
      { "task": "SubTask is required" }
      ```

      Actual Result: _same_ as Expected Result

  27. Test Case: POST - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "user",
        "subTask": {
          "description": "sd2"
        }
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot add subTask of user with username user. Maybe Todo was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  28. Test Case: POST - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "user",
        "task_id": "5ef7137f28fc33012ea63479",
        "subTask": {
          "description": "sd2"
        }
      }
      ```

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  29. Test Case: POST - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "user",
        "task_id": "3123",
        "subTask": {
          "description": "sd2"
        }
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot add subTask of user with username user. Task was not found."
      }
      ```

      Actual Result: _same_ as Expected Result

  30. Test Case: PUT - <http://localhost:5000/api/todos/subtask>
      Body:

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

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  31. Test Case: PUT - <http://localhost:5000/api/todos/subtask>
      Body:

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

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  32. Test Case: PUT - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "username"
      }
      ```

      Expected Result:

      ```json
      { "task_id": "Task id is required", "subTask": "SubTask is required" }
      ```

      Actual Result: _same_ as Expected Result

  33. Test Case: PUT - <http://localhost:5000/api/todos/subtask>
      Body:

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

      Expected Result:

      ```json
      {
        "message": "Cannot update subTask of user with username user. Maybe Todo was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  34. Test Case: PUT - <http://localhost:5000/api/todos/subtask>
      Body:

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

      Expected Result:

      ```json
      {
        "message": "Cannot update subTask of user with username user. SubTask was not found."
      }
      ```

      Actual Result: _same_ as Expected Result

  35. Test Case: PUT - <http://localhost:5000/api/todos/subtask>
      Body:

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

      Expected Result:

      ```json
      {
        "message": "Cannot update subTask of user with username user. Task was not found."
      }
      ```

      Actual Result: _same_ as Expected Result

  36. Test Case: DELETE - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "username",
        "task_id": "5eec9bec89bca61d07109a02",
        "subTask_id": "5ef718b128fc33012ea6347c"
      }
      ```

      Expected Result:

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

      Actual Result: _same_ as Expected Result

  37. Test Case: DELETE - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "",
        "task_id": "",
        "subTask_id": ""
      }
      ```

      Expected Result:

      ```json
      {
        "name": "Name is required",
        "task_id": "Task id is required",
        "subTask_id": "SubTask id is required"
      }
      ```

      Actual Result: _same_ as Expected Result

  38. Test Case: DELETE - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "user",
        "task_id": "5eec9bec89bca61d07109a02",
        "subTask_id": "5ef718b128fc33012ea6347c"
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot delete subTask of user with username user. Maybe Todo was not found!"
      }
      ```

      Actual Result: _same_ as Expected Result

  39. Test Case: DELETE - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "username",
        "task_id": "geargefg",
        "subTask_id": "5ef718b128fc33012ea6347c"
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot delete subTask of user with username username. Task was not found."
      }
      ```

      Actual Result: _same_ as Expected Result

  40. Test Case: DELETE - <http://localhost:5000/api/todos/subtask>
      Body:

      ```json
      {
        "name": "username",
        "task_id": "5eec9bec89bca61d07109a02",
        "subTask_id": "wefweyeyht"
      }
      ```

      Expected Result:

      ```json
      {
        "message": "Cannot delete subTask of user with username username. SubTask was not found."
      }
      ```

      Actual Result: _same_ as Expected Result

## Unit Testing

1. Test Case: click add Todo button once

   Expected Result: 

   Actual Result: _same_ as Expected Result

2. Test Case: click add Sub Todo button once

   Expected Result: 

   Actual Result: _same_ as Expected Result

3. Test Case:

   Expected Result: 

   Actual Result: _same_ as Expected Result

## Integrated Testing

| Test Case | Steps Taken | Expected Result | Actual Result |
| --------- | ----------- | --------------- | ------------- |
