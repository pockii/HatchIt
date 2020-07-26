# Shop

- Table of Contents
  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)
  - [User Testing](#user-testing)

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
    PUT - http://localhost:5000/api/users/userdata
    </td>
    <td>

  ```json
  {
    "name": "name",
    "coins": 40
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
    "tasks": 0,
    "subTasks": 0,
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
    "coins": -23
  }
  ```

    </td>
    <td>

  ```json
  {
    "coins": "Coins is invalid"
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
    "name": "namefsrfdzf",
    "coins": 2432
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot update data of user with username namefsrfdzf. Maybe User was not found!"
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
    PUT - http://localhost:5000/api/petinfos/pet
    </td>
    <td>

  ```json
  {
    "name": "name",
    "pet": {
      "pet": "Rabbit",
      "happiness": 50,
      "unlocked": true
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "happiness": 50,
    "unlocked": true,
    "_id": "5f1d780b0553ad1a9b8cf3bc",
    "pet": "Rabbit"
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
    PUT - http://localhost:5000/api/petinfos/pet
    </td>
    <td>

  ```json
  {
    "name": "name",
    "pet": {
      "pet": "Rabbit",
      "happiness": 50
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "pet": {
        "unlocked": "Unlocked for pet is required"
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
    PUT - http://localhost:5000/api/petinfos/pet
    </td>
    <td>

  ```json
  {
    "name": "namesda",
    "pet": {
      "pet": "Rabbit",
      "happiness": 50,
      "unlocked": true
    }
  }
  ```

    </td>
    <td>

  ```json
  {
    "message": "Cannot update pet of user with username namesda. Maybe petInfo was not found!"
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

(with dummy incrementCoins and decrementCoins buttons that increase and decrease coins by 7 respectively)

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
click incrementCoins button once
</td>
<td>
coins increases by 7
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
click decrementCoins button once
</td>
<td>
coins decreases by 7
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>
</table>

(with dummy unlockCat and lockCat buttons that unlock and lock the pet cat respectively)

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
click unlockCat button once
</td>
<td>
cat's button in shop is no longer greyed out
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
click lockCat button once
</td>
<td>
cat's button in shop is greyed out
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
click Shop button in home
</td>
<td>
Premium Food modal is shown
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
click Shop button in home while Food modal is open
</td>
<td>
Food modal closes and Premium Food modal is shown
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
click exit button in Premium Food modal
</td>
<td>
Premium Food modal closes
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
click outside the Premium Food modal with Premium Food modal open
</td>
<td>
Premium Food modal remains open
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
scroll in Premium Food modal
</td>
<td>
Premium Food modal scrolls
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
Drag normal food out of modal and drop on pet with at least 20 coins
</td>
<td>
Pet transits into eating state, coins decrease by 20, happiness increases by 25, total happiness gained increases by 25 under Devour Food category
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
Drag favourite food out of modal and drop on pet with at least 20 coins
</td>
<td>
Pet transits into eating state, coins decrease by 20, happiness increases by 35, total happiness gained increases by 35 under Devour Food category
</td>
<td>
<i>same</i> as Expected Result
</td>
<td></td>
</tr>
</table>

## User Testing

(_coming soon_)
