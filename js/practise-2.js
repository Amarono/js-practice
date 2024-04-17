class User {
  constructor(email) {
    this.email = email;
  }

  get userEmail() {
    return this.email;
  }

  set userEmail(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.userEmail); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
