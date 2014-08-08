/**
 * Created by dpitard on 8/6/14.
 */

var express = require('express');
var app = express();
var aasguard = require('aasguard');

config = require('./config.json');

if (config.api_token  == null){
    console.error("ERROR: An API Token must be set in the config.json file to connect to SafeX server.  Exiting");
    process.exit(1)
}

aasguard.set_token(config.api_token);

aasguard.check()
    .then(function(){
        console.log("Successfully connected to SafeX using API Token")
    })
    .catch(function(e) {
        console.warn("WARNING: Was unable to verify connection to SafeX using the API Token")
    });

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

app.listen(process.env.PORT || 3000);