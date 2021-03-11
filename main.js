// Your code here.
function getFirstName(user) {
  return user.firstName;
}

function getLastName(user) {
  return user.lastName;
}

function getFullName(user) {
  const fullName = user.firstName + ' ' + user.lastName;
  return fullName;
}
 
function setFirstName(user, newName) {
//    const newName = user.firstName;
//    if 
   user.firstName = newName;
  }

  function setAge(user, Newage) {
   user.age = Newage;
  }

function giveBirthday(user) {
  if (user.age !== undefined) {
    return user.age ++;
  } else {
    return user.age = 1;
  }

  
}

function marry(user1, user2) {
  user1.married = true;
  user2.married= true;
  user1.spouseName = getFullName(user2);
  user2.spouseName = getFullName(user1);
}

function divorce(user1, user2) {
  user1.married = false;
  user2.married= false;
  delete user1.spouseName;
  delete user2.spouseName;
  

}



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
