# General Pet Interactions

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
PUT - http://localhost:5000/api/users/userdata
</td>
<td>

```json
{
  "name": "name",
  "dateGuessed": "2020-06-24T05:34:37.850Z"
}
```

</td>
<td>

```json
{
  "date": "2020-06-27T02:34:37.850Z",
  "dateGuessed": 40,
  "happiness": 23,
  "totalHappinessGained": 635,
  "tasks": 0,
  "subTasks": 0,
  "dateGuessed": "2020-06-24T05:34:37.850Z",
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
  "dateGuessed": "2020-43-24T05:34:37.850Z"
}
```

</td>
<td>

```json
{
  "dateGuessed": "dateGuessed is invalid"
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
  "dateGuessed": "2020-06-24T05:34:37.850Z"
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
</table>

## Unit Testing

| Test Case                                                                                                                                         | Expected Result                                                                          | Actual Result                                        | Fixes (if any)                                                                                                      | Current Result            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Click on pet                                                                                                                                      | Pet's state changes to reaction state for a few seconds before changing back             | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Click on Food                                                                                                                                     | Food modal appears                                                                       | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Drag food icons out of Food modal                                                                                                                 | Food icons can be dragged out                                                            | Food modal closes                                    | Changed from react-modal to plain javascript                                                                        | _same_ as Expected Result |
| Click exit button of Food modal                                                                                                                   | Food modal closes                                                                        | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Click anywhere outside of Food modal                                                                                                              | Food modal remains open                                                                  | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Click on Guess                                                                                                                                    | Guess modal appears                                                                      | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Click exit button of Guess modal                                                                                                                  | Guess modal closes                                                                       | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Click anywhere outside of Guess modal                                                                                                             | Guess modal closes                                                                       | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Pick a gift in Guess                                                                                                                              | Guess modal changes to only display a message revealing what rewards the player obtained | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Repeatedly pick the same gift option                                                                                                              | Rewards are randomised, may lose happiness, gain happiness or coins                      | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| Close Guess modal after choosing                                                                                                                  | Guess button greys out and Guess modal does not appear when clicked                      | Guess modal appears                                  | Added dateGuessed to user Schema to keep track of when user last played and checked availability in Guess component | _same_ as Expected Result |
| Close Guess modal without choosing                                                                                                                | Guess button does not change colour and Guess modal appears when clicked                 | _same_ as Expected Result                            | -                                                                                                                   | -                         |
| _[For testing purposes, the minigame can be played once every minute rather than everyday.]_ <br>Wait for a minute for Guess minigame to be reset | Guess button gains colour and be clicked                                                 | Guess button only changes colour after being clicked | Used timeOut in Guess component to set state after 1 minute                                                         | _same_ as Expected Result |  | _same_ as Expected Result |

## Integrated Testing

| Test Case                                                                         | Expected Result                                                                                                        | Actual Result                                                    | Fixes (if any)                                                                         | Current Result            |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------- |
| Click on pet and refresh the page                                                 | Pet starts to react and changes back to normal after page is refreshed                                                 | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Food modal and drag food to pet once                                         | Pet's state changes to eating state for a few seconds before changing back                                             | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Click on pet while it's eating                                                    | Pet's state changes to reaction state for a few seconds before changing back                                           | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Keep dragging food to pet while it's eating                                       | Pet's state remains as eating state until no more food has been dragged to it                                          | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Food modal, drag food to pet and close modal                                 | Pet's state changes to eating state for a few seconds before changing back                                             | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Feed the pet until it reaches max happiness                                       | Pet's state changes to max happiness state after eating animation ends                                                 | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Close the Food modal after it reaches max happiness                               | Pet remains in max happiness state                                                                                     | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Click on pet when it's in max happiness state                                     | Pet reacts and changes back to max happiness state                                                                     | Pet reacted but changed back to normal state                     | Changed the base state to max happiness state whenever max happiness is reached        | _same_ as Expected Result |
| Open Guess modal                                                                  | Pet's state changes to guessing state and does not change back                                                         | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Guess modal and click on pet                                                 | No change to pet's state                                                                                               | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Guess modal and close it                                                     | Pet's state changes to guessing state, and changes back when Guess modal is closed                                     | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Guess modal, pick the wrong option while in max happiness state and close it | Pet's state changes from max happiness state to guessing state, and changes to normal state when Guess modal is closed | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Guess modal, pick a choice, close it, and refresh the page                   | Guess button should remain greyed out and Guess modal should not appear when clicked                                   | Guess button gained colour and Guess modal appeared when clicked | Changed the initial state of Guess component to a function that check its availability | _same_ as Expected Result |
| Open Todo modal and close it                                                      | No change to pet's state                                                                                               | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Todo modal and complete a task                                               | Pet's state changes to productive state for a few seconds before changing back                                         | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Todo modal and delete a subtask                                              | No change to pet's state                                                                                               | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Todo modal and complete a subtask                                            | Pet's state changes to productive state for a few seconds before changing back                                         | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Open Todo modal and delete a subtask                                              | No change to pet's state                                                                                               | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Complete tasks until pet reaches max happiness                                    | Pet's state changes to max happiness state for productive animation ends                                               | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Complete tasks/subtasks while pet's in max happiness state                        | Pet's state changes to productive state before changing back to max happiness state                                    | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Enable Night mode                                                                 | Pet's state changes to sleeping state and does not change back                                                         | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Click on pet while in Night mode                                                  | Pet reacts and changes back to normal/max happiness state                                                              | _same_ as Expected Result                                        | -                                                                                      | -                         |
| Disable Night mode                                                                | Pet's state changes back from sleeping state                                                                           | _same_ as Expected Result                                        | -                                                                                      | -                         |
