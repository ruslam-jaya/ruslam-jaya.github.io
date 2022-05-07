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

var content	= window.location.href;
contentSegments	= content.split("/").length - 1 - (content.indexOf("http://")==-1?0:2);
urlSegments 	= url.split("/").length - 1 - (url.indexOf("http://")==-1?0:2); 
    (function(){
	var data = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"logo": "https://ruslam.id/img/LOGO-TEXT-S.png",
	"title": document.title,
	"description": document.head.getElementsByTagName('meta')['description'].getAttribute('content'),
  	"contactPoint": [{
		"@type": "ContactPoint",
		"telephone": "+62(021)4204585",
		"contactType": "customer service"
		}],
	"image": [
		document.head.getElementsByTagName('meta')['image'].getAttribute('content')
		],
	"name": "PT RUSLAM CEMPAKAPUTIH JAYA",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Jl. Cempaka Putih Tengah VI Cempaka Putih",
		"addressLocality": "Jakarta Pusat",
		"addressRegion": "JKT",
		"postalCode": "10510",
		"addressCountry": "ID"
		},
	"review": {
		"@type": "Review",
		"reviewRating": {
			"@type": "Rating",
			"ratingValue": "4",
			"bestRating": "5"
			},
	"author": {
		"@type": "Person",
		"name": "MUHAMMAD PRIATAMA"
		},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": -6.172047,
		"longitude": 106.870841
		},
	"url": window.location.href,
	"telephone": "+62(021)4204585",
	"priceRange": "IDR",
	"areaServed": {
		"@type": "State",
		"name": "Jabodetabek"
		},
	"hasOfferCatalog": {
		"@type": "OfferCatalog",
		"name": "Service",
		"itemListElement": [
			{
				"@type": "Offer",
				"itemOffered": {
				"@type": "Service",
				"name": "Cleaning Service / Jasa Kebersihan"
				}
			},
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "Security Service / Jasa Keamanan"
					}
				},
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "Parking Service / Jasa Parkiran"
					}
				},
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "Health Service / Klinik Ruslam"
					}
				},
			{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Service",
					"name": "General Trading / Jasa Perdagangan Umum"
					}
				}		
			]
		},
	"openingHoursSpecification": [
		{
		"@type": "OpeningHoursSpecification",
		"dayOfWeek": [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday"		
			],
		"opens": "07:30",
		"closes": "17:00"
		},
		{
		"@type": "OpeningHoursSpecification",
		"dayOfWeek": "Saturday",
		"opens": "08:00",
		"closes": "15:00"
		}
	]
	}}
        var script = document.createElement('script');
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(data);
        document.getElementsByTagName('head')[0].appendChild(script); 
    })(document);
