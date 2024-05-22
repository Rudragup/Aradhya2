let y=0;
let n=0;
let txt=document.getElementById('txt');
function yes(){
++y;
if(y>0 && n===0)
{
  document.body.innerHTML=`<h1> here is your gift </h1>
<button> <a href="./page.html"> Click this </a> </button>
`
}
else if(n==1){
    txt.innerHTML="Gand marao";
}

}

function nope(){
  ++n;
  switch(n){
    case 1:
        txt.innerHTML="Are u sure??";
        break;
    
    case 2:
        txt.innerHTML="";
        break;
 
  }
}