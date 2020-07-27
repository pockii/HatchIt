# Application of Software Engineering Principles

- Table of Contents
  - [Single Responsibility Principle](#single-responsibility-principle)
  - [Open-Closed Principle](#open-closed-principle)
  - [Interface Segregation Principle](#interface-segregation-principle)
  - [Dependency Inversion Principle](#dependency-inversion-principle)
  - [Separation of Concerns Principle](#separation-of concerns-principle)
  
## Single Responsibility Principle

For authentication, `client\src\components\auth\Login.js` logins a user, `client\src\components\auth\Register.js` registers a user, and `client\src\components\home\Logout.js` logouts a user. Each class is responsible for one function.

`Login.js` only has methods related to login such as `loginUser`.

`Register.js` only has methods related to register such as `registerUser`.

`Logout.js` only has methods related to register such as `onLogoutClick`.

## Open-Closed Principle

For account, `client\src\components\home\popups\Account\Account.js` can be extended to add a happiness breakdown button to trigger the happiness breakdown modal instead of the current design of adding a happiness breakdown button and modal in the class directly.

## Interface Segregation Principle

For guess, `client\src\components\home\popups\Guess\Guess.js`, `client\src\components\home\popups\Guess\GuessButtons.js`, and `client\src\components\home\popups\Guess\GuessButton.js` only have methods that it uses.

`Guess.js` has access to `onGuessClick`, `onGuessExitClick`, `randomizer`, `isAvailable`, `updateButton`, `callBackAfterGuess` and `messageAfterGuess`, and has access to `updateDateGuessed`, `guessCallBack`, `incrementHappiness`, `incrementCoins`, and `decrementHappiness` from `Home.js`. `Guess.js` do not have access to methods such as `randomizeReward`, `correctChoice`, and `onGuessChoiceClick` which `GuessButtons.js` has access to as it is not using these methods even though they are for the same feature.

`GuessButtons.js` has access to `randomizeReward`, `correctChoice`, and `onGuessChoiceClick`, and has access to `incrementHappiness`, `incrementCoins`, `decrementHappiness`, `randomizer` and `callBackAfterGuess` from `Guess.js`. `GuessButtons.js` do not have access to methods such as `onGuessClick`, `onGuessExitClick`, and `isAvailable` which `Guess.js` has access to as it is not using these methods even though they are for the same feature.

`GuessButton.js` has access to `onGuessChoiceClick`. `GuessButton.js` do not have access to methods such as `randomizeReward`, `correctChoice`, and `onGuessChoiceClick` which `GuessButtons.js` has access to as it is not using these methods even though they are for the same feature.

## Dependency Inversion Principle

For updating coins, without DIP, updateCoins in `client\src\components\home\Home.js` would be

```javascript
updateCoins(newCoins) {
    const newUserData = {
        name: this.name,
        coins: newCoins,
    };
    axios
        .put("/api/users/userdata", newUserData)
        .then(response => {
            dispatch({
                type: UPDATE_USERDATA,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}
```

With DIP, updateCoins in `client\src\components\home\Home.js` is

```javascript
updateCoins(newCoins) {
    const userData = {
        name: this.name,
        coins: newCoins,
    };
    this.props.updateUserData(userData); // imported from client\src\actions\userdataActions.js
}
```

updateUserData from `client\src\actions\userdataActions.js`

```javascript
export const updateUserData = (newUserData) => dispatch => {
    axios
        .put("/api/users/userdata", newUserData)
        .then(response => {
            dispatch(updatingUserData(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
};

export const updatingUserData = userData => {
    return {
        type: UPDATE_USERDATA,
        payload: userData
    };
};

export const getErrors = err => {
    return {
      type: GET_ERRORS,
      payload: err.response.data
    };
};
```

`updateUserData` is method in `userdataActions.js`, which is a low-level module that interacts with the server and the client.

`updateCoins` is a method in `Home.js` which is a high-level module, and relies `updateUserData` abstraction in low-level module `userdataActions.js`.

`updateCoins` is a detail that depend on `updateUserData` abstraction.

## Separation of Concerns Principle

For redux store, reducers are separated into `client\src\reducers\authReducers.js`, `client\src\reducers\errorReducers.js`, `client\src\reducers\happinessBreakdownReducers.js`, `client\src\reducers\petInfoReducers.js` and `client\src\reducers\todoReducers.js`. 

Each reducer has its own concern. `authReducers.js` updates the redux store auth object. `errorReducers.js` updates the redux store error object. `happinessBreakdownReducers.js` updates the redux store happinessBreakdown object. `petInfoReducers.js` updates the redux store petInfo object. `todoReducers.js` updates the redux store todo object.
