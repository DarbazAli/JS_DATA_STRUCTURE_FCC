/* 
    Add Key-Value Pairs to JavaScript Objects
    At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys).
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };

  // adding 3 more properites to food object with dot notation 
  foods.bananas = 13;
  foods.grasp = 35;
  foods.strawberries = 27;

  // we can also add props with bracket notation
  foods['last prop'] = 33;

  console.log(foods);
  




  /* 
    Modify an Object Nested Within an Object
  */

 let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };

  // modify the object so that the online numbers = 45;

  userActivity.data.online = 45;
  console.log(userActivity.data.online);
  






/* 
    Access Property Names with Bracket Notation
*/  
function checkInventory(obj, scannedItem) {

    return obj[scannedItem]

}

console.log(checkInventory(foods, "apples"));




/* 
    Use the delete Keyword to Remove Object Properties
    we use delete keyward to remove a prop from an object
*/

delete foods.apples
delete foods.strawberries;









/* 
    Check if an Object has a Property
    javascript has 2 methodes to check if an object has a certain prop
    obj.hasOwnproperty(prop); // true or false
    'prop' in obj // true or false
*/

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  // create a function that returns true if all users are exist;

  const isEveryoneHere = obj => {
      if ( 
          'Alan' in obj &&
          'Jeff' in obj &&
          'Sarah' in obj &&
          'Ryan' in obj
      ) {
          return true;
      } else {
          return false
      }
  }

  console.log(isEveryoneHere(users));
  





  /* 
    Iterate Through the Keys of an Object with a for...in Statement

    for ( let obj in objects ) {
        log(obj)
    }
  */

 function countOnline(usersObj) {

    let online = 0;
    for ( let user in usersObj ) {
      if (usersObj[user].online) {
        online++;
      }
    }
    return online;

  }

console.log(countOnline(users));







/* 
  Generate an Array of All Object Keys with Object.keys()
*/
function getArrayOfUsers(obj) {

    let users = [];
    for ( let user in obj ) {
      users.push(user)
    }
    return users;

}

console.log(getArrayOfUsers(users));






/* 
    Modify an Array Stored in an Object
*/
// creat a fun to modify the friend list of a user
// firendlist is an array
// firendslit is user.data.friends

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };


function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends
}

console.log(addFriend(user, 'Pete'));

