const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const x = Math.random() * 10000 / 100;

    if (req.query.x !== undefined) {
        const queryX = parseFloat(req.query.x);
        if (!isNaN(queryX)) {
            x = Math.round(queryX * 100) / 100;
        }
    }

    const res1 = Math.fround(x);
    const res2 = Math.random()*x;
    const res3 = Math.round(x);

    res.render('computation', { x, fround: res1, random: res2, round: res3 });
});

module.exports = router;
