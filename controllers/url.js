const shortId = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewUrl(req,res){
    if(!req.body.url){
        return res.status(400).json({error: 'URL is required'});
    }
    const shortID = shortId();
    await URL.create({
        shortId: shortID,
        redirectUrl: req.body.url,
        visitHistory:[],
    });

    return res.render('home',{id: shortID});
    // return res.status(200).json({shortId: shortID});
}

async function handleVisitUrl(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                }
            }
        }
    );
    if(!entry){
        return res.status(404).json({error: 'URL not found'});
    }
    return res.status(301).redirect(entry.redirectUrl);
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    if(!result){
        return res.status(404).json({error: 'URL not found'});
    }
    return res.status(200).json({totalClicks:result.visitHistory.length,
        analytics: result.visitHistory});
}
module.exports = {handleGenerateNewUrl,handleVisitUrl,handleGetAnalytics};