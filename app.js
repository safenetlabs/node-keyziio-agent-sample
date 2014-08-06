/**
 * Created by dpitard on 8/6/14.
 */

var express = require('express');
var app = express();

var keys = [
    { username: "test1", key: "this_is_test1's_key"},
    { username: "test2", key: "this_is_test2's_key"},
    { username: "test3", key: "this_is_test3's_key"}
];

app.get('/keys', function(req, res) {
    res.json(keys);
});

app.get('/keys/:id', function(req, res) {
    if(keys.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }
    keys.indexOf()
    for (k in keys)
        if (keys[k].username == req.params.id)
            res.json(keys[k])
});

app.listen(process.env.PORT || 3000);

