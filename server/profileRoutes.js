const profileRouter = require('express').Router();
const employeeController = require('../database/models/employees.js')

const async = require('asyncawait/async');
const await = require('asyncawait/await');

profileRouter.post('/api/update_photo', async (req, res) => {
  try {
    await employeeController.uploadPhoto(req.body)
    res.status(200).end()
  } catch(e) {
    res.status(400).end();
  }
})


module.exports = profileRouter;