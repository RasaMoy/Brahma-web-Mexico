	var cardMenu;
	cardMenu = document.getElementById("card_menu");
	var windowWidth;
	windowWidth = window.innerWidth;
	var openMenu;
	openMenu = 0;
	
	function WindowSize(){
		if(windowWidth<767){
			cardMenu.style.display = "none";
			// cardMenu.setAttribute("style", "display: none;");
			openMenu = 0;
		}
		else{
			cardMenu.style.display = "block";
			// cardMenu.setAttribute("style", "display: block;");
			openMenu = 1;
		}
		
	}
	function showMenu(){
		if(openMenu == 0){
			cardMenu.style.display = "block";
			// cardMenu.setAttribute("style", "display: block;");
			openMenu = 1;
		}
		else{
			cardMenu.style.display = "none";
			// cardMenu.setAttribute("style", "display: none;");
			openMenu = 0;
		}
	}
	window.onload=WindowSize;


