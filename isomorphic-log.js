var ClLogError = require('./clientLog').error;
var ClLogInfo = require('./clientLog').info;
var ClLogSuccess = require('./clientLog').success;

var SrLogError = require('./serverLog').error;
var SrLogInfo = require('./serverLog').info;
var SrLogSuccess = require('./serverLog').success;

var unicode = require('./unicodeMap').map;
var col = require('./colorMap').colMap;



function isBrowser(){
    try{
        return this === window; 
    }catch(e){
    return false;
    }
}


error = function(fontType,out){
        if(isBrowser()){
            ClLogError(fontType,out);
        }else{
            SrLogError(fontType,out);
        } 

}
info = function(fontType,out){
    if(isBrowser()){
        ClLogInfo(fontType,out);
    }else{
        SrLogInfo(fontType,out);
    }
}

log = function(fontType,out){
    if(isBrowser()){
        ClLogSuccess(fontType,out);
    }else{
        SrLogSuccess(fontType,out);
    }
}





_throw = function(typeColor,out){
    if(typeColor == 'bold' ){
        throw new Error(col.font_error_bold + unicode.error + col.font_error_bold + '\r' + out);
    } else if(typeColor == 'standart'){
        throw new Error(col.font_error + unicode.error +  col.font_error +'\r'+ out );
    }

        
}
module.exports = {
        "throw": _throw,
        "error": error,
        "info":info,
        "log":log
};
