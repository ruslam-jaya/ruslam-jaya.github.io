        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
		document.querySelector(".topheader").style.top = "-70px";
                document.querySelector("body").style.visibility = "hidden";
		document.querySelector(".design-blogger").style.visibility = "hidden";
		document.querySelector("#loader").style.visibility = "visible";
  		document.querySelector("#loader").style.position  = "fixed";
            } else {
		setTimeout(function(){
                document.querySelector("#loader").style.display = "none";
		document.querySelector(".topheader").style.top = "0px";
		document.querySelector(".design-blogger").style.visibility = "visible";
                document.querySelector("body").style.visibility = "visible";
  		document.querySelector("body").style.height = "auto";
  		document.querySelector("body").style.backgroundColor  = "white";
    		document.querySelector("#loader").style.position  = "relative";
		}, 9000);
            }
        }; 
