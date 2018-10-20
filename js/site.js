//debugger;
/*var ar;
console.log(ar);
ar = ['h','o','l','a'];
console.log(ar);
console.warn("Longitud de ar:",ar.length,ar);
console.log("Longitud de ar:"+ar.length+ar);*/

/*var miNombre="David Felipe Vera C";
for (var i=0; i<miNombre.length;i++){
    console.log(miNombre[i],"posicion =",i)
}*/
/*var x="palabra";
var y="";
for (var i=0; i<x.length;i++){
    if (i%2 == 0)
    {
        console.log(x[i].toUpperCase(),"=>",i);
        y=y+x[i].toUpperCase();
    }
    else
    {
        console.log(x[i].toLowerCase(),"=>",i)
        y=y+x[i].toLowerCase();
    }
}
console.log(y)*/


function isPair(x){
    return x%2 == 0;
}

function convertChar(c,isUp){
    return isUp?c.toUpperCase():c.toLowerCase();
}

function getLast(d){
    debugger;
    console.log(d[d.length-1]);
}

function mostrarTexto(t){
    debugger;
    var y="";
    for (var i=0; i<t.length; i++){
        y=y+convertChar(t[i],isPair(i));
        console.log(getLast(y),"=>",i)
    }
    console.log(y)
}

var t="palabra";
mostrarTexto("palabra");

/*var ar = [1,2,"3",4,"5"];
ar=ar.map(item => item+1);
console.log(ar);

var ar = [2,4,6,8,10];
var ans=ar.reduce((ac,cur) => {console.log(ac);return cur+ac;},0);
console.log(ans)*/

