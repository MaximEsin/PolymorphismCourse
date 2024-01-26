// User.js
class User {
  constructor(name) {
    this.name = name;
    this.isGuestFlag = false;
  }

  getName() {
    return this.name;
  }

  isGuest() {
    return this.isGuestFlag;
  }
}

export default User;

class Guest {
  constructor() {
    this.isGuestFlag = true;
    this.name = 'Guest';
  }

  getName() {
    return this.name;
  }

  isGuest() {
    return this.isGuestFlag;
  }
}

function getGreeting(user) {
  if (user.isGuest()) {
    return `Nice to meet you ${user.getName()}!`;
  } else {
    return `Hello ${user.getName()}!`;
  }
}
