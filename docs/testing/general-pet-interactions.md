# General Pet Interactions

- Table of Contents
  - [Automated Testing](#automated-testing)
  - [Unit Testing](#unit-testing)
  - [Integrated Testing](#integrated-testing)
  - [User Testing](#user-testing)

## Automated Testing

- Backend (with Postman)

  1. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": "name",
       "dateGuessed": "2020-06-24T05:34:37.850Z"
     }
     ```

     Expected Result:

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

     Actual Result: _same_ as Expected Result

  2. Test Case: PUT - <http://localhost:5000/api/users/userdata>

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

  3. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": "name",
       "dateGuessed": "2020-43-24T05:34:37.850Z"
     }
     ```

     Expected Result:

     ```json
     {
       "dateGuessed": "dateGuessed is invalid"
     }
     ```

     Actual Result: _same_ as Expected Result

  4. Test Case: PUT - <http://localhost:5000/api/users/userdata>

     Body:

     ```json
     {
       "name": "namefsrfdzf",
       "dateGuessed": "2020-06-24T05:34:37.850Z"
     }
     ```

     Expected Result:

     ```json
     {
       "message": "Cannot update data of user with username namefsrfdzf. Maybe User was not found!"
     }
     ```

     Actual Result: _same_ as Expected Result

## Unit Testing
| Test Case    	| Expected Result                                                              	| Actual Result             	| Fixes (if any) 	| Current Result 	|
|--------------	|------------------------------------------------------------------------------	|---------------------------	|----------------	|----------------	|
| Click on pet 	| Pet's state changes to reaction state for a few seconds before changing back 	| _same_ as Expected Result 	| -              	| -              	|



## Integrated Testing
| Test Case    | Expected Result   	| Actual Result  	| Fixes (if any)   | Current Result            	|
|-----------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------	|----------------------------------------------	|---------------------------------------------------------------------------------	|---------------------------	|     
| Click on pet and refresh the page                                                 	| Pet starts to react and changes back to normal after page is refreshed                                                 	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Food modal and drag food to pet once                                         	| Pet's state changes to eating state for a few seconds before changing back                                             	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Click on pet while it's eating                                                    	| Pet's state changes to reaction state for a few seconds before changing back                                           	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Keep dragging food to pet while it's eating                                       	| Pet's state remains as eating state until no more food has been dragged to it                                          	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Food modal, drag food to pet and close modal                                 	| Pet's state changes to eating state for a few seconds before changing back                                             	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Feed the pet until it reaches max happiness                                       	| Pet's state changes to max happiness state after eating animation ends                                                 	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Close the Food modal after it reaches max happiness                               	| Pet remains in max happiness state                                                                                     	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Click on pet when it's in max happiness state                                     	| Pet reacts and changes back to max happiness state                                                                     	| Pet reacted but changed back to normal state 	| Changed the base state to max happiness state whenever max happiness is reached 	| _same_ as Expected Result 	|
| Open Guess modal                                                                  	| Pet's state changes to guessing state and does not change back                                                         	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Guess modal and click on pet                                                 	| No change to pet's state                                                                                               	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Guess modal and close it                                                     	| Pet's state changes to guessing state, and changes back when Guess modal is closed                                     	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Guess modal, pick the wrong option while in max happiness state and close it 	| Pet's state changes from max happiness state to guessing state, and changes to normal state when Guess modal is closed 	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Todo modal and close it                                                      	| No change to pet's state                                                                                               	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Todo modal and complete a task                                               	| Pet's state changes to productive state for a few seconds before changing back                                         	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Todo modal and delete a subtask                                              	| No change to pet's state                                                                                               	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Todo modal and complete a subtask                                            	| Pet's state changes to productive state for a few seconds before changing back                                         	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Open Todo modal and delete a subtask                                              	| No change to pet's state                                                                                               	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Complete tasks until pet reaches max happiness                                    	| Pet's state changes to max happiness state for productive animation ends                                               	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Complete tasks/subtasks while pet's in max happiness state                        	| Pet's state changes to productive state before changing back to max happiness state                                    	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Enable Night mode                                                                 	| Pet's state changes to sleeping state and does not change back                                                         	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Click on pet while in Night mode                                                  	| Pet reacts and changes back to normal/max happiness state                                                              	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
| Disable Night mode                                                                	| Pet's state changes back from sleeping state                                                                           	| _same_ as Expected Result                    	| -                                                                               	| -                         	|
