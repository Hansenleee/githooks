module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise"
  ],
  "rules": {
    "semi": [1, 'never'],
  },
  "globals": {
    "echo": true,
    "exec": true,
    "which": true,
    "rm": true
  }
}