const express = require('express');
const { handleGenerateNewUrl,handleVisitUrl,handleGetAnalytics } = require('../controllers/url');
const router = express.Router();

router.post('/',handleGenerateNewUrl);

router.get('/:shortId',handleVisitUrl);

router.get('/analytics/:shortId',handleGetAnalytics);

module.exports = router;