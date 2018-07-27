var unicode = require('./unicodeMap').map;




var CLIENT = {};


CLIENT.error = function(fontType,out){
    if(fontType == 'bold'){
            console.error('%c%s', 'color:red; font: 14px, bold; background: black', unicode.error +'\t'+ out);
    }else if(fontType == 'standart' ){
        console.error('%c%s', 'color:red; font: 14px;', unicode.error +'\t'+ out);
    } else{
        console.error('%c%s', 'font: 14px;', unicode.error +'\t'+ out);
    }
}

    CLIENT.info = function(fontType,out){
        if(fontType == 'bold'){
            console.info('%c%s', 'color: green; font: 14px, bold;',  unicode.info +'\t'+ out);
        }else if(fontType == 'standart'){
            console.info('%c%s', 'color: green; font: 14px;', unicode.info +'\t'+ out);
        }else{
            console.info('%c%s', 'font: 16px;', unicode.info +'\t'+ out);
    
        }
    
    }
    CLIENT.log = function(fontType,out){
        if(fontType == 'bold'){
            console.log('%c%s', 'color: blue; font: 14px, bold;', unicode.success +'\t'+ out);
        } else if(fontType == 'standart'){
            console.log('%c%s', 'color: blue; font: 14px;', unicode.success +'\t'+ out);
        } else{
            console.log('%c%s', 'font: 14px, bold;', unicode.success +'\t'+ out);
        }
    }
    

module.exports = {
        "error":CLIENT.error,
        "info":CLIENT.info,
        "success": CLIENT.log
};