var notification = request.body; 
var lightMgr = require("../lightManager.js");
lightMgr.setStatus(notification.payload.delta, notification.bit_id);  
return JSON.stringify(notification);   	
