        /* Storing user's device details in a variable*/
        let details = navigator.userAgent;
  
        /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
        let regexp = /android|iphone|kindle|ipad/i;
  
        /* Using test() method to search regexp in details
        it returns boolean value*/
        let isMobileDevice = regexp.test(details);
  
        if (isMobileDevice) {
				function showhide1()
				{
					 document.getElementById("sh002").style.display = "none";
					 document.getElementById("sh003").style.display = "none"; 
					 var div = document.getElementById("sh001");  
					 if (div.style.display !== "none") 
					 {  
						 div.style.display = "none";   
					 }  
					 else
					 {  
						 div.style.display = "block"; 
					 } 
				}
				function showhide2()
				{
					 document.getElementById("sh001").style.display = "none";
					 document.getElementById("sh003").style.display = "none"; 
					 var div = document.getElementById("sh002");  
					 if (div.style.display !== "none") 
					 {  
						 div.style.display = "none";   
					 }  
					 else
					 {  
						 div.style.display = "block"; 
					 } 
				} 
				function showhide3()
				{
					 document.getElementById("sh001").style.display = "none";
					 document.getElementById("sh002").style.display = "none";
					 var div = document.getElementById("sh003");  
					 if (div.style.display !== "none") 
					 {  
						 div.style.display = "none";   
					 }  
					 else
					 {  
						 div.style.display = "block"; 
					 } 
				}
				function openNav() {
					 var div = document.getElementById("navigate");
				  	 var icomenu = document.getElementById("icomenu");
					 var icoclose = document.getElementById("icoclose");
					 if (div.style.right !== "-380px") 
					 {  
						 div.style.right = "-380px";
						 icomenu.style.display = "inline-block";
						 icoclose.style.right = "none";
					 }  
					 else
					 {  
						 div.style.right = "0px";
						 icomenu.style.display = "none";
						 icoclose.style.right = "inline-block";
					 } 
				}

        } else {
				function showhide1()
				{
					 document.getElementById("sh002").style.top = "-400px";
					 document.getElementById("sh003").style.top = "-400px";  
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
        }
