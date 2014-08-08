/**
 * Created by dpitard on 8/6/14.
 */

var express = require('express');
var app = express();
var aasguard = require('aasguard');

app.get('/user_keys', function(req, res) {
    res.json([]);
});

app.get('/user_keys/:id', function(req, res) {
    var id;
    aasguard.get_user(req.params.id)
        .then(function(data){
            res.json(data);
         })
        .catch(function(e) {
            aasguard.create_user(req.params.id, "friendly_"+req.params.id)
                .then(function(data){
                    res.json(data)
                })
                .catch(function(e){
                    res.send(e.res.statusCode, e.message);
                });
        });
});

aasguard.set_token("slZxxbJai9hOWyRRYBrMWA");

app.listen(process.env.PORT || 3000);