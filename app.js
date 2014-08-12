/**
 * Created by dpitard on 8/6/14.
 */

var express = require('express');
var app = express();
var kagent = require('keyziio-agent');

config = require('./config.json');

if (config.api_token  == null){
    console.error("ERROR: An API Token must be set in the config.json file to connect to keyziio server.  Exiting");
    process.exit(1)
}

kagent.set_token(config.api_token);

kagent.check()
    .then(function(){
        console.log("Successfully connected to keyziio using API Token")
    })
    .catch(function(e) {
        console.warn("WARNING: Was unable to verify connection to keyziio using the API Token")
    });

app.get('/user_keys', function(req, res) {
    res.json([]);
});

app.get('/user_keys/:id', function(req, res) {
    var id;
    kagent.get_user(req.params.id)
        .then(function(data){
            res.json(data);
         })
        .catch(function(e) {
            kagent.create_user(req.params.id, "friendly_"+req.params.id)
                .then(function(data){
                    res.json(data)
                })
                .catch(function(e){
                    res.send(e.res.statusCode, e.message);
                });
        });
});

app.listen(process.env.PORT || 3000);