const { Model } = require('objection')
const knexConnection = require('./../services/knexConnection')
Model.knex(knexConnection)

const unique = require('objection-unique')({
  fields: ['email', 'username'],
  identifiers: ['id']
});

class User extends unique(Model) {
  static get tableName() {
    return 'user'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        username: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' }
      }
    }
  }
}

module.exports = User