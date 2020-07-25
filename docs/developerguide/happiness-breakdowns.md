# Happiness Breakdowns

- Table of Contents
  - [Add Happiness Breakdown](#add-happiness-breakdown)
  - [Add Happiness Event](#add-happiness-event)
  - [Update Happiness Event](#update-happiness-event)

## Add Happiness Breakdown

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/happinessbreakdown
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
  "events": [
    // event arr, required
    {
      "event": "Play Guess", // string, required
      "totalHappinessGained": 23 // integer > 0, optional
    },
    {
      "event": "Play Rescue" // string, required
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
  "_id": "5f1bf6c194d38c355848b0e8",
  "name": "username",
  "events": [
    {
      "totalHappinessGained": 23,
      "_id": "5f1bf6c194d38c355848b0e9",
      "event": "Play Guess"
    },
    {
      "totalHappinessGained": 0,
      "_id": "5f1bf6c194d38c355848b0ea",
      "event": "Play Rescue"
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

- Empty fields and Invalid field
  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "",
    "events": [
      {
        "event": "",
        "totalHappinessGained": -23
      },
      {
        "event": ""
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
    "events": [
      {
        "event": "Description for event is required",
        "totalHappinessGained": "Total Happpiness gained is invalid"
      },
      { "event": "Description for event is required" }
    ]
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
    "name": ""
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
    "events": "Events is required"
  }
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

## Add Happiness Event

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/happinessbreakdown/event
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
  // event object, required
  "event": {
    "event": "Complete Todo", // string, required
    "totalHappinessGained": 23 // integer > 0, optional
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
  "totalHappinessGained": 23,
  "_id": "5f1bf8ec94d38c355848b0eb",
  "event": "Complete Todo"
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Empty fields and Invalid field
  <table>
  <tr>
  <td>
  REQUEST
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
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "name": "Name is required",
    "event": {
      "event": "Description for event is required",
      "totalHappinessGained": "Total Happpiness gained is invalid"
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
    "name": ""
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
    "event": "Event is required"
  }
  ```

  </td>
  </tr>
  </table>

- User does not exist, happiness breakdown not found

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "namefad",
    "event": {
      "event": "Complete Todo",
      "totalHappinessGained": 23
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
    "message": "Cannot add event of user with username namefawf. Maybe happinessBreakdown was not found!"
  }
  ```

  </td>
  </tr>
  </table>

- Happiness Breakdown event already exists

  <table>
  <tr>
  <td>
  REQUEST
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
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "message": "Cannot add event of user with username name. Event already exists!"
  }
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

## Update Happiness Event

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/happinessbreakdown/event
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
  // event object, required
  "event": {
    "event": "Complete Todo", // string, required
    "totalHappinessGained": 23 // integer > 0, required
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
  "totalHappinessGained": 56,
  "_id": "5f1bf8ec94d38c355848b0eb",
  "event": "Complete Todo"
}
```

</td>
</tr>

<tr>
<td>
ERRORS
</td>
<td>

- Empty fields and Invalid field
  <table>
  <tr>
  <td>
  REQUEST
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
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "name": "Name is required",
    "event": {
      "event": "Description for event is required",
      "totalHappinessGained": "Total Happpiness gained is invalid"
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
    "name": ""
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
    "event": "Event is required"
  }
  ```

  </td>
  </tr>
  </table>

- User does not exist, happiness breakdown not found

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "namefad",
    "event": {
      "event": "Complete Todo",
      "totalHappinessGained": 23
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
    "message": "Cannot update event of user with username namefawf. Maybe happinessBreakdown was not found!"
  }
  ```

  </td>
  </tr>
  </table>

- Happiness Breakdown event does not exist

  <table>
  <tr>
  <td>
  REQUEST
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
  </tr>

  <tr>
  <td>
  RESPONSE
  </td>
  <td>

  ```json
  {
    "message": "Cannot add event of user with username name. Event was not found."
  }
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

- Increment totalHappinessGained
