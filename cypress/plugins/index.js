/// <reference types="cypress" />

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..', 'sovos-qa-challenge/config', `${file}.json`)
  return fs.readJSON(pathToConfigFile)
}

module.exports = (on, config) => {
  on('task', {
    dbQuery: (query) => require("cypress-postgres")(query.query, config.env.db),
    log (message) {
      console.log(message)
      return null
    }
  })
  const file = config.env.configFile  || 'dev'
  return getConfigurationByFile(file)
}
