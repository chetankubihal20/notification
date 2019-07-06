
const express = require('express');
const router = express.Router();
const notifications = require('./controller')
 

router.get('/show',notifications.notifications_show_all);

router.get('/owners',notifications.notifications_owners_all);

router.get('/search',notifications.notification_search);

router.get('/range',notifications.notification_range);

router.get('/move',notifications.notification_range);






module.exports = router;