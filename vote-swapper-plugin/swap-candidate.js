if(document.URL.indexOf("demo.simplyvoting.com/") >= 0){
a="Cassandra De Rolo"; b="Fernanda Rodriguez";
var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false),node;
s="~".repeat(30);
function r(n,x,y){return n.nodeValue.replace(new RegExp(x,"g"),y);}
while (n=w.nextNode()){n.nodeValue = r(n,a,s);n.nodeValue = r(n,b,a);n.nodeValue = r(n,s,b);}}