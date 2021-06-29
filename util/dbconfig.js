const mysql = require('mysql')
module.exports = {
    config:{
        host : '132.226.231.148',
        port:'3306',
        user:'root',
        password:'880623ll',
        database:'job',
    },
    //连接数据库，使用mysql的连接池连接方式
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            console.log('12345')
            if(err){
                console.log('连接失败');
                return;
            }
            //事件驱动回调
            conn.query(sql,sqlArr,callBack);
            //释放连接
            conn.release();
        })

    }


}
