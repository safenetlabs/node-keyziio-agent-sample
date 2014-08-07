/**
 * Created by dpitard on 8/6/14.
 */

var express = require('express');
var request = require('request');
var app = express();
var aasguard = require('aasguard');

app.get('/user_keys', function(req, res) {
    res.json([]);
});

app.get('/user_keys/:id', function(req, res) {
    var id;
    aasguard.get_user(req.params.id, function(user, error){
        if (error){
            aasguard.create_user(req.params.id, "friendly_"+req.params.id, function(user, error){
                return res.json(user)
            })
        } else {
            return res.json(user);
        }
    });
});

aasguard.set_token("slZxxbJai9hOWyRRYBrMWA");

app.listen(process.env.PORT || 3000);
