const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// POST request
router.post('/', (req, res)=> {
    let newSurvey = req.body;
    console.log('Adding new survey', newSurvey);

    let queryText = `INSERT INTO "feedback" ("feeling",
    "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newSurvey.feeling, newSurvey.understanding,
    newSurvey.support, newSurvey.comments])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error adding new survey`, error)
        res.sendStatus(500);
    });
})

module.exports = router;