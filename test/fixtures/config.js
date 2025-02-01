'use strict'
const path = require('path')

module.exports = {
  db: path.join(__dirname, 'tmp', 'data.db'),
  baseUrl: '/statusboard',
  outputDirectory: path.join(__dirname, 'tmp'),
  github: {
    token: process.env.GITHUB_TOKEN
  },

  title: 'StatusBoard Test',
  description: 'A test for StatusBoard',

  // orgs: [
  //   'pkgjs'
  // ],

  projects: [
    'nodejs/package-maintenance',
    {
      name: 'StatusBoard',
      repo: 'pkgjs/statusboard',
      type: 'discussion'
    }
  ],

  people: [
    {
      name: 'Wes Todd',
      email: 'wes@wesleytodd.com',
      website: 'http://www.github.com/wesleytodd',
      npmUsername: 'wesleytodd',
      githubUsername: 'wesleytodd',
      twitterUsername: 'wesleytodd'
    }
  ]
}
