var snowflake = require('snowflake-sdk');
var config = {
    "snowflake":{

    }
};

var connection = snowflake.createConnection(config.snowflake);

function connect (){
    return new Promise((resolve, reject) =>{
        connection.connect(function(err, conn) {
            if (err) {
                if(err.code == 405502){
                    resolve(connection);
                }
                //console.log(JSON.stringify(err) );
                reject(err);
            } else {
                resolve (conn);
            }
        });
    })

};

function runSQL(dbConn, SQL){
    return new Promise((resolve, reject) =>{
        var snowflakeQuery = {
            sqlText: SQL,
            complete: function(err, stmt, rows){
                if(err){
                    reject(err);
                }
                resolve(rows);
            }
        }
        
        dbConn.execute(snowflakeQuery);
    })//end promise  
}

function disconnect(){
    return new Promise((resolve, reject)=>{
        connection.destroy(function(err, conn) {
            if (err) {
                reject(0)
            }
            resolve(1);
        });
    })
}






