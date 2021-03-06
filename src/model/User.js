const BaseModel = require('./BaseModel');
const Password = require('objection-password')();

class User extends Password(BaseModel) {
    static get tableName() {
        return 'users';
    }
}

module.exports = User;
