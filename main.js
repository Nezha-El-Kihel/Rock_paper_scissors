window.onload = section_body_height;
function section_body_height(){
	if (document.documentElement.scrollHeight < 750) {
		document.body.style.height = "750px";
		section_height_();
	} else {
		document.body.style.height = "100vh";
		section_height_();
	}
}
function section_height_() {
    var height_body = document.documentElement.scrollHeight;
	if(document.documentElement.scrollWidth <600 && document.documentElement.scrollWidth >400) {
		var height_section = height_body - 141 - 50;
	} else {
		var height_section = height_body - 141;
	}
	var section_height = document.querySelector(".section").style.height = height_section + 'px';
}
//rules modal
var rules_btn = document.querySelector(".rules_btn");
var modal_box = document.querySelector("#myModal");
var close_modal0 = document.querySelectorAll(".close")[0];
var close_modal1 = document.querySelectorAll(".close")[1];

rules_btn.addEventListener("click", open_dialog);
function open_dialog(e) {
	e.preventDefault();
	modal_box.style.display = "block";
}

close_modal0.addEventListener("click", close_dialog);
close_modal1.addEventListener("click", close_dialog);
function close_dialog(e) {
	e.preventDefault();
	modal_box.style.display = "none";
}

document.addEventListener("click", close);
function close(event) {
	if (event.target == modal_box) {
    modal_box.style.display = "none";
  }
}
// array contains all options 
var array = ["rock", "paper", "scissors", "lizard", "spock"];
// get all btns
var btn = document.querySelector(".section_1").querySelectorAll(".btn");
var option_picked;
var option_house_picked;
var score = document.querySelector("#score").innerText;
for (var i = 0; i < btn.length ; i++) {
	btn[i].addEventListener("click", function () {
		var current = this.className;
		// close first section
		document.querySelector(".section_1").style.display = "none";
		// open second section
		document.querySelector(".section_2").style.display = "block";
		document.querySelector(".picked").querySelector(".btn").className = current;
		for (var j = 0; j < array.length; j++) {
			if (document.querySelector(".picked").querySelector(".btn").className.search(array[j]) != -1){
				option_picked = array[j];
				document.querySelector(".picked").querySelector(".btn").querySelector(".bg").innerHTML="<img src='images/icon-"+ option_picked +".svg' alt='icon-"+ option_picked +"'>";
			}
		}
		// house picked
		option_house_picked = array[Math.floor(Math.random() * array.length)];
		var classname = "btn "+ option_house_picked+"_btn";
		document.querySelector(".house_picked").getElementsByTagName("button")[0].className = classname;
		document.querySelector(".house_picked").getElementsByTagName("button")[0].querySelector(".bg").innerHTML="<img src='images/icon-"+ option_house_picked +".svg' alt='icon-"+ option_house_picked +"'>";

		if ((option_picked == "rock" && option_house_picked == "lizard") ||
			(option_picked == "rock" && option_house_picked == "scissors") ||
			(option_picked == "lizard" && option_house_picked == "spock") ||
			(option_picked == "lizard" && option_house_picked == "paper") ||
			(option_picked == "spock" && option_house_picked == "scissors") ||
			(option_picked == "spock" && option_house_picked == "rock") ||
			(option_picked == "scissors" && option_house_picked == "paper") ||
			(option_picked == "scissors" && option_house_picked == "lizard") ||
			(option_picked == "paper" && option_house_picked == "rock") ||
			(option_picked == "paper" && option_house_picked == "spock")) {
				score ++;
				document.querySelector("#score").innerText = score;
				document.querySelectorAll(".lose_msg")[0].style.display = "none";
				document.querySelectorAll(".lose_msg")[1].style.display = "none";
				document.querySelectorAll(".draw_msg")[0].style.display = "none";
				document.querySelectorAll(".draw_msg")[1].style.display = "none";
				document.querySelectorAll(".win_msg")[0].style.display = "block";
				document.querySelectorAll(".win_msg")[1].style.display = "block";
				if(document.documentElement.scrollWidth <600 && document.documentElement.scrollWidth >400) {
					document.querySelectorAll(".result")[0].style.display = "table-cell";
					document.querySelectorAll(".result")[1].style.display = "none";
					document.querySelector(".result_mobile").style.display = "table-cell";
					document.querySelector(".r_1").style.display = "none";
					document.querySelector(".r_3").style.display = "table-row";

				} else {
					document.querySelectorAll(".result")[0].style.display = "table-cell";
					document.querySelectorAll(".result")[1].style.display = "table-cell";
					document.querySelector(".result_mobile").style.display = "none";
					document.querySelector(".r_3").style.display = "none";
					document.querySelector(".r_1").style.display = "table-row";
				}
		}
		else if((option_picked == "lizard" && option_house_picked == "rock") ||
			(option_picked == "scissors" && option_house_picked == "rock") ||
			(option_picked == "spock" && option_house_picked == "lizard") ||
			(option_picked == "paper" && option_house_picked == "lizard") ||
			(option_picked == "scissors" && option_house_picked == "spock") ||
			(option_picked == "rock" && option_house_picked == "spock") ||
			(option_picked == "paper" && option_house_picked == "scissors") ||
			(option_picked == "lizard" && option_house_picked == "scissors") ||
			(option_picked == "rock" && option_house_picked == "paper") ||
			(option_picked == "spock" && option_house_picked == "paper")){
				score --;
				document.querySelector("#score").innerText = score;
				document.querySelectorAll(".win_msg")[0].style.display = "none";
				document.querySelectorAll(".win_msg")[1].style.display = "none";
				document.querySelectorAll(".draw_msg")[0].style.display = "none";
				document.querySelectorAll(".draw_msg")[1].style.display = "none";
				document.querySelectorAll(".lose_msg")[0].style.display = "block";
				document.querySelectorAll(".lose_msg")[1].style.display = "block";
				if(document.documentElement.scrollWidth <600 && document.documentElement.scrollWidth >400) {
					document.querySelectorAll(".result")[0].style.display = "table-cell";
					document.querySelectorAll(".result")[1].style.display = "none";
					document.querySelector(".result_mobile").style.display = "table-cell";
					document.querySelector(".r_1").style.display = "none";
					document.querySelector(".r_3").style.display = "table-row";
				} else {
					document.querySelectorAll(".result")[0].style.display = "table-cell";
					document.querySelectorAll(".result")[1].style.display = "table-cell";
					document.querySelector(".result_mobile").style.display = "none";
					document.querySelector(".r_3").style.display = "none";
					document.querySelector(".r_1").style.display = "table-row";
				}
		}
		else if(option_picked == option_house_picked){
			document.querySelectorAll(".lose_msg")[0].style.display = "none";
			document.querySelectorAll(".lose_msg")[1].style.display = "none";
			document.querySelectorAll(".win_msg")[0].style.display = "none";
			document.querySelectorAll(".win_msg")[1].style.display = "none";
			document.querySelectorAll(".draw_msg")[0].style.display = "block";
			document.querySelectorAll(".draw_msg")[1].style.display = "block";
			if(document.documentElement.scrollWidth <600 && document.documentElement.scrollWidth >400) {
					document.querySelectorAll(".result")[0].style.display = "table-cell";
					document.querySelectorAll(".result")[1].style.display = "none";
					document.querySelector(".result_mobile").style.display = "table-cell";
					document.querySelector(".r_1").style.display = "none";
					document.querySelector(".r_3").style.display = "table-row";
				} else {
					document.querySelectorAll(".result")[0].style.display = "table-cell";
					document.querySelectorAll(".result")[1].style.display = "table-cell";
					document.querySelector(".result_mobile").style.display = "none";
					document.querySelector(".r_3").style.display = "none";
					document.querySelector(".r_1").style.display = "table-row";
				}
		}
	});
}
document.querySelectorAll(".play_again")[0].addEventListener("click",play);
document.querySelectorAll(".play_again")[1].addEventListener("click",play);
function play() {
	// open the second section
	document.querySelector(".section_1").style.display = "flex";
	// close the first section
	document.querySelector(".section_2").style.display = "none";
	document.querySelectorAll(".result")[0].style.display = "none";
	document.querySelectorAll(".result")[1].style.display = "none";
	document.querySelector(".result_mobile").style.display = "none";
	document.querySelector(".lose_msg").style.display = "none";
	document.querySelector(".win_msg").style.display = "none";
	document.querySelector(".draw_msg").style.display = "none";
}