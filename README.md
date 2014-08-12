node-keyziio-agent-sample
====================

Sample Node.js express web application which interfaces to the keyziio-agent library.   It provides an interface 
to provision a client with a user key.   Once it has the user key, the client can request keys from the keyziio web service for encryption.    
   
   
This samnple does not authenticate the clients.  Any real world applicaiton would first authenticate the client before
handing out the user key.   How this authentication is done is application specific.

Run `npm install` to install dependencies, including the Node.js keyziio agent.    

###/user_keys/:id

Returns information for user with that id - no authentication is done for this sample.  If the user doesn't exist, 
it will be created on the keyziio server with a generated friendly name.

