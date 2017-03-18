var i=0;
	var sections = new Array(4);
	sections[0] = "home";
	sections[1] = "aboutme";
	sections[2] = "portafolio";
	sections[3] = "libre";
	var search;

	function setColors(i){
		if (sections[i] == "home") {
			bkgr_body ="#F59d2a";
			bkgr_menu ="#2c3d4f";
			ctc_button = "#34495D"
			}
		else{
			bkgr_body ="#F59d2a";
			bkgr_menu ="#2c3d4f";
			ctc_button = "#2c3d4f";
			}

		// search.style.background = bkgr_body;
		var menu = document.getElementsByTagName("header")[0];
		menu.style.background = bkgr_menu;
		var ctc_btt = document.getElementById("contact_button");
		ctc_btt.style.background = ctc_button;

	}
	function navSection(nav){
		var navMenu = document.getElementById(sections[0]);
		navMenu.style.display = "none";
		navMenu = document.getElementById(sections[1]);
		navMenu.style.display = "none";
		navMenu = document.getElementById(sections[2]);
		navMenu.style.display = "none";
		navMenu = document.getElementById(sections[3]);
		navMenu.style.display = "none";

		var a = sections.indexOf(nav);
		search = document.getElementById(nav);
		i= a;
			
		search.style.display = "block";

		setColors(i);
	}

	function displaySection(nav){
		search = document.getElementById(sections[i]);

		if(nav =="next"){
			search.style.display = "none";
			i++;
			if(i>3) i=0;
			
		}
		if (nav =="prev") {
			search.style.display = "none";
			i--;
			if(i<0) i=3; 
		}
		
		search = document.getElementById(sections[i]);
		search.style.display = "block";
		
		setColors(i);
	}

	function displayFormContact(status){
		var form = document.getElementById("contact_form");
		form.style.display = status;
	}