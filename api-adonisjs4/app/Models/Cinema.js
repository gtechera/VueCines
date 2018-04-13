'use strict'

const Model = use('Model')

class Cinema extends Model {
  static get createdAtColumn() {
    return null
  }
  static get updatedAtColumn() {
    return null
  }
  movie_showings() {
    return hasMany('App/Models/MovieShowing')
  }
  rooms() {
    return hasMany('App/Models/Room')
  }
}

module.exports = Cinema
