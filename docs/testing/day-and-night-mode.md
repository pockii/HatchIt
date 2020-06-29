# Day and Night Mode

- Table of Contents
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)

## Unit Testing

| Test Case                               | Expected Result                                                                              | Actual Result             | Fixes (if any) | Current Result |
|-----------------------------------------|----------------------------------------------------------------------------------------------|---------------------------|----------------|----------------|
| Enable Night mode                       | Button's colour changes and button's label changes from Night to Day  | _same_ as Expected Result | -              | -              |

## Integrated Testing

| Test Case                               | Expected Result                                                                              | Actual Result             | Fixes (if any) | Current Result |
|-----------------------------------------|----------------------------------------------------------------------------------------------|---------------------------|----------------|----------------|
| Enable Night mode                       | Background changes to night, features are greyed out except for Account, Todos, Day, Logout  | _same_ as Expected Result | -              | -              |
| Click on Account during Night mode      | Account modal appears                                                                        | _same_ as Expected Result | -              | -              |
| Click on Food during Night mode         | Nothing happens                                                                              | _same_ as Expected Result | -              | -              |
| Click on Todos during Night mode        | Todo modal appears                                                                           | _same_ as Expected Result | -              | -              |
| Complete a task during Night mode       | Coins increase, but no change in pet's state or happiness level                              | _same_ as Expected Result | -              | -              |
| Complete a subtask during Night mode    | Coins increase, but no change in pet's state or happiness levle                              | _same_ as Expected Result | -              | -              |
| Delete a task/subtask during Night mode | Nothing happens                                                                              | _same_ as Expected Result | -              | -              |
| Click on Guess during Night mode        | Nothing happens                                                                              | _same_ as Expected Result | -              | -              |
| Click on Logout during Night mode       | Logged out and sent back to Login page                                                       | _same_ as Expected Result | -              | -              |        |                |

## User Testing

| Test Case | Steps Taken | Expected Result | Actual Result |
| --------- | ----------- | --------------- | ------------- |
