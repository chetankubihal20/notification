
  const notifications = require ('../models/notificationDb');
// timeStamp = parseInt(Mongo.ObjectId().toString().substr(0,8), 16)*1000
// date = new Date(timestamp)
    // date = [];
    // time = [];
    // var i=0;
// function convert(value) {

//     timestamp=parseInt(value.toString().substr(0,8), 16)*1000;
//     dates = new Date(timestamp);
//     return dates;

// }

exports.notifications_show_all=(req,res,next) => {
    
    var pageNo = 1
    var size = 10
    query = {};
    query.skip = size * (pageNo - 1);
    query.limit = size;
    //query to fetch all the values from database
    notifications.find({},{},query,function(err,data) {
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = data;
                
            }
            //send response in json format to the frontend 
            res.json(response);                   
        });
 }

 exports.notifications_owners_all=(req,res,next) => {
    
    query = {};

    //query to find all the unique owners 
    notifications.distinct("Owner",query,function(err,data) {
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } 
            else {
                    response=data;
            }

                   res.json(response);
            
        });
 }

 exports.notification_search = (req,res,next) => {

    
      
    var query = {};
    var pageNo = 1
    var size = 10
    query.skip = size * (pageNo - 1);
    query.limit = size;
    var owner = JSON.parse(req.query.array);
    
    


       {

        notifications.find({
            "Owner": {
               "$in": owner
                    }},{},query,function(err,data) {
                
                    if(err) {
                        response = {"error" : true,"message" : "Error fetching data"};
                    } 
                    else {
                    
                        response = data;
                        
                    }
                    console
                    res.json(response);

                    
                });
        }
      
}

 exports.notification_range = (req,res,next) => {

    var pageNo = parseInt(req.query.pageNo) || 1;
    var size = parseInt(req.query.size) || 10;
    var owner = JSON.parse(req.query.array);
    


    if(owner.length>0)
    {
        query = {};
        query.skip = size * (pageNo - 1);
        query.limit = size;
        notifications.find({
            "Owner": {
                "$in": owner
                     }
        },{},query,function(err,data) {
            // Mongo command to fetch all data from collection.
                if(err) {
                    response = {"error" : true,"message" : "Error fetching data"};
                } else {
                    response = data;
                }
                res.json(response);
    
                
            });
    }
    else
    {
        query = {};
        query.skip = size * (pageNo - 1);
        query.limit = size;
        notifications.find({},{},query,function(err,data) {
            // Mongo command to fetch all data from collection.
                if(err) {
                    response = {"error" : true,"message" : "Error fetching data"};
                } else {
                    response = data;
                }
                res.json(response);
    
                
            });
    }
    
}
