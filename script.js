var body=document.getElementById("body");
var main=document.getElementById("main");
var inp=document.getElementById("in");
x=1;
function update()
{
    if(x%2!=0)
    {
        body.style.backgroundImage="url('bg2.jpg')";
        main.style.backgroundColor="black";
        main.style.borderColor="white";
        inp.style.borderColor="white";
        inp.style.backgroundColor="white";
        main.style.boxShadow="1px 1px 10px white";
        inp.style.position="relative";
        inp.style.left="100px";
        x++;    
    }
    else{
        inp.style.position="relative";
        inp.style.left="-0px";
        body.style.backgroundImage="url('bg.png')";
        main.style.backgroundColor="white";
        main.style.borderColor="black";
        inp.style.borderColor="black";
        inp.style.backgroundColor="black";
        
        main.style.boxShadow="1px 1px 10px black";
       
        x++;
    
    }
}