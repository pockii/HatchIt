# Day and Night Mode

- Table of Contents
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)

## Unit Testing

| Test Case         | Expected Result                                                      | Actual Result             | Fixes (if any) | Current Result |
| ----------------- | -------------------------------------------------------------------- | ------------------------- | -------------- | -------------- |
| Enable Night mode | Button's colour changes and button's label changes from Night to Day | _same_ as Expected Result | -              | -              |

## Integrated Testing

|    | **Test Case**                           | **Expected Result**                                                                                                                                               | **Actual Result**         | **Remarks** |
|----|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|-------------|
| 1  | enable Night mode                       | Background changes to night, features are greyed out except for Account, Todos, Day, Logout<br>![Night Mode Test 1](../gifs/night/night1.gif "Night Mode Test 1") | _same_ as Expected Result |             |
| 2  | click on Account during Night mode      | Account modal appears<br>![Night Mode Test 2](../gifs/night/night2.gif "Night Mode Test 2")                                                                       | _same_ as Expected Result |             |
| 3  | click on Food during Night mode         | Nothing happens<br>![Night Mode Test 3](../gifs/night/night3.gif "Night Mode Test 3")                                                                             | _same_ as Expected Result |             |
| 4  | click on Todos during Night mode        | Todo modal appears<br>![Night Mode Test 4](../gifs/night/night4.gif "Night Mode Test 4")                                                                          | _same_ as Expected Result |             |
| 5  | complete a task during Night mode       | Coins increase, but no change in pet's state or happiness level<br>![Night Mode Test 5](../gifs/night/night5.gif "Night Mode Test 5")                             | _same_ as Expected Result |             |
| 6  | complete a subtask during Night mode    | Coins increase, but no change in pet's state or happiness level<br>![Night Mode Test 6](../gifs/night/night6.gif "Night Mode Test 6")                             | _same_ as Expected Result |             |
| 7  | delete a task/subtask during Night mode | Nothing happens<br>![Night Mode Test 7](../gifs/night/night7.gif "Night Mode Test 7")                                                                             | _same_ as Expected Result |             |
| 8  | click on Guess during Night mode        | Nothing happens<br>![Night Mode Test 8](../gifs/night/night8.gif "Night Mode Test 8")                                                                             | _same_ as Expected Result |             |
| 9  | click on Rescue during Night mode       | Nothing happens<br>![Night Mode Test 9](../gifs/night/night9.gif "Night Mode Test 9")                                                                             |                           |             |
| 10 | click on Logout during Night mode       | Logged out and sent back to Login page<br>![Night Mode Test 10](../gifs/night/night10.gif "Night Mode Test 10")                                                   | _same_ as Expected Result |             |
