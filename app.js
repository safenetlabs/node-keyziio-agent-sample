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
    for (k in keys)
        if (keys[k].username == req.params.id)
            return res.json(keys[k])

    obj = new Object();
    obj.username = req.params.id
    obj.key = "this_is_" + req.params.id + "'s_key"
    keys.push(obj)
    return res.json(obj)
});

app.listen(process.env.PORT || 3000);

