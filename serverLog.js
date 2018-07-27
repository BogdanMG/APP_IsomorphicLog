var unicode = require('./unicodeMap').map;
var col = require('./colorMap').colMap;



var SERVER = {};



SERVER.error = function(fontType,out){
    if(fontType == 'standart'){
        process.stderr.write( col.font_error + unicode.error +'\t'+ out);
}else if(fontType == 'bold' ){
    process.stderr.write(col.font_error_bold + unicode.error +'\t'+ out);
} else{
    process.stderr.write( col.font_error + unicode.error +'\t'+ out);
}
}

SERVER.info = function(fontType,out){
    if(fontType == 'standart'){
        process.stdout.write(col.font_info + unicode.info +'\t'+ out);
    }else if(fontType == 'bold'){
        process.stdout.write(col.font_info_bold + unicode.info +'\t'+ out);
    }else{
        process.stdout.write(col.font_info + unicode.info +'\t'+ out);
    
    }
}
SERVER.log = function(fontType,out){
    if(fontType == 'standart'){
        process.stdout.write(col.font_success + unicode.success +'\t'+ out);
    } else if(fontType == 'bold'){
        process.stdout.write(col.font_success_bold + unicode.success +'\t'+ out);
    } else{
        process.stdout.write(col.font_success + unicode.success +'\t'+ out);
    }
}




module.exports = {
    "error": SERVER.error,
    "info": SERVER.info,
    "success": SERVER.log
};