import FakeSubscription from './FakeSubscription.js';

class User {
  constructor(email, subscription) {
    this.email = email;
    this.subscription = subscription || new FakeSubscription(this);
  }

  getCurrentSubscription() {
    return this.subscription;
  }

  isAdmin() {
    return this.email === 'rakhim@hexlet.io';
  }
}

export default User;

class FakeSubscription {
  constructor(user) {
    this.user = user;
  }

  hasPremiumAccess() {
    return this.user.isAdmin();
  }

  hasProfessionalAccess() {
    return this.user.isAdmin();
  }
}
