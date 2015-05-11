function contar (arr){
        "use strict";
        debugger;
    if (Array.isArray(arr)===true){ 
        var objVacio = {};
        arr.reduce(function (prevValue, curValue,curIndex){
        var parts = curValue.split(",");
        var cities = parts[1];
    if (prevValue.hasOwnProperty(cities)){
        prevValue[cities]++;
    } else {
        prevValue[cities] = 1;
    }    return prevValue;    
}, objVacio ); 
    var o00o= objVacio;
    

    };
        return o00o;
    }  