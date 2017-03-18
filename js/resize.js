
		function Resize(){
			var cardMenu;
			cardMenu = document.getElementById("card_menu");
			var windowWidth;
			windowWidth = window.innerWidth;
			if(windowWidth<767){
				cardMenu.style.display = "none";
				// cardMenu.setAttribute("style", "display: none;");
				openMenu = 0;
			}
			else{
				cardMenu.style.display = "inline-block";
				// cardMenu.setAttribute("style", "display: inline-block;");
				openMenu = 1;
			}
		}
	window.onresize=Resize;