'use strict'

const Hash = use('Hash')
const UserHook = (module.exports = {})
const Customer = use('App/Modules/Customer')

/**
 * Hash using password as a Hook
 *
 * @method
 *
 * @param {object} userInstance
 *
 * @return {void}
 *
 */

UserHook.hashPassword = async userInstance => {
  if (userInstance.password) {
    userInstance.password = await Hash.make(userInstance.password)
  }
}

UserHook.setCustomer = async userInstance => {
  let customer = new Customer()
  userInstance.customer().save(customer)
}
