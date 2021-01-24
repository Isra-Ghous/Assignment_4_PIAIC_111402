var str = "<p><strong><em>Only Print this</em></strong></p>";
var b = str.replace(/<p>/gi,);
var c= str.replace(/</p>/gi,'');
var d = str.replace(/<strong>/gi,'');
var e = str.replace(/</strong>/gi,'');
var f = str.replace(/<em>/gi,'');
var g = str.replace(/</em>/gi,'');
console.log (a,b,c,d,e,f,g) 