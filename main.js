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
 
function setFirstName(user) {
//    const newName = user.firstName;
//    if 
  }

  function setAge(user) {

  }

function giveBirthday(user) {
  if (user.age === '') {
    return user.age === 1;
  } else {
    return user.age ++;
  }

  
}

function marry(user) {
  
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
