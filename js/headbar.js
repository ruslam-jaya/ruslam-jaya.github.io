    function showhide1()
    {
         document.getElementById("sh003").style.top = "-400px";
         document.getElementById("sh002").style.top = "-400px";  
         var div = document.getElementById("sh001");  
         if (div.style.top !== "-400px") 
         {  
             div.style.top = "-400px"; 
         }  
         else
         {  
             div.style.top = "24px"; 
         }  
    }
    function showhide2()
    { 
         document.getElementById("sh001").style.top = "-400px";
         document.getElementById("sh003").style.top = "-400px"; 
         var div = document.getElementById("sh002");  
         if (div.style.top !== "-400px") 
         {  
             div.style.top = "-400px";  
         }  
         else
         {  
             div.style.top = "24px";   
         }  
    } 
    function showhide3()
    {  
         document.getElementById("sh001").style.top = "-400px";
         document.getElementById("sh002").style.top = "-400px";
         var div = document.getElementById("sh003");  
         if (div.style.top !== "-400px") 
         {  
             div.style.top = "-400px";   
         }  
         else
         {  
             div.style.top = "24px"; 
         }  
    }

function openNav() {
         var div = document.getElementById("navigate");  
         if (div.style.right !== "-400px") 
         {  
             div.style.right = "-400px";   
         }  
         else
         {  
             div.style.right = "0px"; 
         }  
}