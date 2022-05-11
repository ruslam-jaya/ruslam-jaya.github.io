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
};

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

function strReplace() {
var content		= window.location.href;
contentSegments		= content.split("/").length - 1 - (content.indexOf("https://")==-1?0:2);
urlSegments		= url.split("/").length - 1 - (url.indexOf("https://")==-1?0:2); 
    (function(){
	var data = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"logo": "https://ruslam.id/img/LOGO-TEXT-S.png",
  	"contactPoint": [{
		"@type": "ContactPoint",
		"telephone": "+62(021)4204585",
		"contactType": "customer service"
		}],
	"name": "PT RUSLAM CEMPAKAPUTIH JAYA",
	"image": [
        "https://ruslam.id/img/ogimage/CS.webp",
        "https://ruslam.id/img/ogimage/HS.webp",
        "https://ruslam.id/img/ogimage/SS.webp",
        "https://ruslam.id/img/ogimage/PS.webp"
       ],
    "description": "PT RUSLAM CEMPAKAPUTIH JAYA Perusahaan Penyalur Jasa Kebersihan / Cleaning Sevices, Keamanan / Security Services, Parkiran / parking Services, Klinik Dokter Umum dan Dokter Gigi, General Tradding Kesehatan dan alat kesehatan",	
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
			"ratingValue": document.getElementById('agregat').innerHTML,
			"bestRating": "5"
		},
	"author": {
		"@type": "Person",
		"name": "MUHAMMAD PRIATAMA"
		}},
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": document.getElementById('agregat').innerHTML,
		"reviewCount": document.getElementById('countagregat').innerHTML
      		},	
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": -6.172047,
		"longitude": 106.870841
		},
	"url": "https://ruslam.id/",
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
				"itemOffered": 
					{
					"@type": "Service",
					"name": document.title,
					"url": window.location.href,
					"description": document.head.getElementsByTagName('meta')['description'].getAttribute('content'),
					"image": document.head.getElementsByTagName('meta')['image'].getAttribute('content')
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
	}
var script = document.createElement('script');
script.type = "application/ld+json";
script.innerHTML = JSON.stringify(data);
document.getElementsByTagName('head')[0].appendChild(script); 
})(document)	
}
