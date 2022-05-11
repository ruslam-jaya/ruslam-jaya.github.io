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
						 icoclose.style.display = "none";
					 }  
					 else
					 {  
						 div.style.right = "0px";
						 icomenu.style.display = "none";
						 icoclose.style.display = "inline-block";
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
        };
{
var url         	= window.location.href;
var titlex 			= document.title;
var descriptionx	= document.head.getElementsByTagName('meta')['description'].getAttribute('content');
var imagex			= document.head.getElementsByTagName('meta')['image'].getAttribute('content');
var content         = window.location.href;
contentSegments 	= content.split("/").length - 1 - (content.indexOf("http://")==-1?0:2);
urlSegments 	= url.split("/").length - 1 - (url.indexOf("http://")==-1?0:2);
            if(urlSegments <= 7) {
                var link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                link.setAttribute('href', url);
                document.head.appendChild(link);
            };
            if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('property', 'og:url');
                meta.setAttribute('content', content);
                document.head.appendChild(meta);
            };
			if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('property', 'twitter:url');
                meta.setAttribute('content', content);
                document.head.appendChild(meta);
            };
			if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('property', 'og:title');
                meta.setAttribute('content', titlex);
                document.head.appendChild(meta);
            };
			if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('property', 'twitter:title');
                meta.setAttribute('content', titlex);
                document.head.appendChild(meta);
            };
			if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('property', 'og:description');
                meta.setAttribute('content', descriptionx);
                document.head.appendChild(meta);
            };
			if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('property', 'twitter:description');
                meta.setAttribute('content', descriptionx);
                document.head.appendChild(meta);
            }; 
			if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('property', 'twitter:image');
                meta.setAttribute('content', imagex);
                document.head.appendChild(meta);
            }; 	
			if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('name', 'apple-mobile-web-app-title');
                meta.setAttribute('content', titlex);
                document.head.appendChild(meta);
            };					        
			if(contentSegments <= 7) {
                var meta = document.createElement('meta');
                meta.setAttribute('name', 'msapplication-TileImage');
                meta.setAttribute('content', titlex);
                document.head.appendChild(meta);
            };
}	
function imgleftx1() {
  document.getElementsByClassName("imgleft1")[0].style.opacity = "1.0";
};
function imgleftx2() {
  document.getElementsByClassName("imgleft2")[0].style.opacity = "1.0";
};
function imgrightx1() {
  document.getElementsByClassName("imgright1")[0].style.opacity = "1.0";
};
function imgrightx2() {
  document.getElementsByClassName("imgright2")[0].style.opacity = "1.0";
};

function review() {	
          var url = "https://docs.google.com/spreadsheet/pub?key=1EDWsrhyhPpIl0sShstavd-P4oGmE1m2QCHcLKdExqOE&single=true&gid=1647130226&range=O2&output=csv";
          xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4) {
                  document.getElementById("display").innerHTML = xmlhttp.responseText;
                  //alert(xmlhttp.responseText);
              }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send(null);
}
