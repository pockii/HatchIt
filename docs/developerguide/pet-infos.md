# PetInfos

- Table of Contents
  - [Add PetInfo](#add-petinfo)
  - [Add Pet](#add-pet)
  - [Update Pet](#update-pet)

## Add PetInfo

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/petinfos
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
  "name": "name", // string, required
  "pets": [
    // pet arr, required
    {
      "pet": "p" // string, required
    },
    {
      "pet": "p1", // string, required
      "happiness": 20, // integer < 0, optional
      "unlocked": false // boolean, optional
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
  "_id": "5f1bb376725fcc3948867bc1",
  "name": "name",
  "pets": [
    {
      "happiness": 49,
      "unlocked": true,
      "_id": "5f1bb376725fcc3948867bc2",
      "pet": "Rabbit"
    },
    {
      "happiness": 50,
      "unlocked": false,
      "_id": "5f1bb376725fcc3948867bc3",
      "pet": "Cat"
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
    "pets": [
      {
        "pet": ""
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
    "pets": [{ "pet": "Name of pet is required" }]
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
    "pets": "Pets is required"
  }
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

## Add Pet

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/petinfos/pet
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
  // pet object, required
  "pet": {
    "pet": "p2", // string, required
    "happiness": 20, // integer > 0, optional
    "unlocked": true // boolean, optional
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
  "happiness": 20,
  "unlocked": true,
  "_id": "5f1c01fb1803b73314ded54b",
  "pet": "p2"
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
    "pet": {
      "pet": ""
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
    "pet": {
      "pet": "Name of pet is required"
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
    "pet": "Pet is required"
  }
  ```

  </td>
  </tr>
  </table>

- User does not exist, pet info not found

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "namefad",
    "pet": {
      "pet": "p3"
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
    "message": "Cannot add pet of user with username namefawf. Maybe petInfo was not found!"
  }
  ```

  </td>
  </tr>
  </table>

- Pet already exists

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "name",
    "pet": {
      "pet": "p"
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
    "message": "Cannot add pet of user with username name. Pet already exists!"
  }
  ```

  </td>
  </tr>
  </table>

</td>
</tr>
</table>

## Update Pet

<table>
<tr>
<td>
URL STRUCTURE
</td>
<td>
http://localhost:5000/api/petinfos/pet
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
  // pet object, required
  "pet": {
    "pet": "p2", // string, required
    "happiness": 23, // integer > 0, required
    "unlocked": true, // boolean, required
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
  "happiness": 23,
  "unlocked": true,
  "_id": "5f1c01fb1803b73314ded54b",
  "pet": "p2"
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
    "pet": {
      "pet": ""
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
    "pet": {
      "pet": "Name of pet is required"
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
    "pet": "Pet is required"
  }
  ```

  </td>
  </tr>
  </table>

- User does not exist, pet info not found

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "namefad",
    "pet": {
      "pet": "p3"
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
    "message": "Cannot add pet of user with username namefawf. Maybe petInfo was not found!"
  }
  ```

  </td>
  </tr>
  </table>

- Pet does not exists

  <table>
  <tr>
  <td>
  REQUEST
  </td>
  <td>

  ```json
  {
    "name": "name",
    "pet": {
      "pet": "p"
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
    "message": "Cannot add pet of user with username name. Pet was not found."
  }
  ```

  </td>
  </tr>
  </table>
</td>
</tr>
</table>