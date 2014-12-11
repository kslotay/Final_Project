//Display functions
//Display update function, called by update_display_msg and error handlers
function update_Display(num, type) {
	var msg_box = document.getElementById("ta_Main");
	var message = [];
	switch (type) {
		//General information messages
		case 0:
			message = ["You move to the ",
					   "Welcome to Escape Plan!\n\nFor every time you visit a new location, you will receive 5 points. You must escape the prison to win the game!\n\nYou are currently in the prison cell.",
					   "You take the LOCK PICK.",
					   "You have taken the FOOD!",
					   "You have unlocked the cell door!",
					   "Warden's office unlocked!",
					   "You have eaten FOOD from your inventory!",
					   "You eat the FOOD from the dining tables.",
					   "'ALERT! ALERT! The fence in the courtyard has been breached!'",
					   "Congratulations! You have escaped!",
					   "You have unlocked the safe! There is a rare GOLD COIN inside!",
					   "You have taken the rare GOLD COIN!",
					   "YAASS! You have a Rocket Launcher!",
					   "Outside the prison, a getaway car pulls up to aid your escape. You enter the convertible vehicle, bring out your rocket launcher and turn around. You then take aim and fire straight at the prison as you move away!",
					   "You sit down. The Warden asks you one question: What's 9 + 10?",
					   "You stupid. You are free to leave but you still stupid.",
					   "Wrong answer!",
					   "You wake up and look around. You are lying in bed. In a prison cell.",
					   "You lose! You are a failure.",
					   "Congratulations! You have escaped with more than 50 points! You are Awesome!"];
			break;
		//Navigation error messages
		case 1:
			message = ["You cannot go that way!",
					   "Navigation Error!"];
			break;
		//Gameplay error messages
		case 2:
			message = ["There is nothing to take!",
					   "There is nothing to unlock!",
					   "There is nothing to climb!",
					   "You cannot unlock the Warden's office. You do not have a LOCK PICK!",
					   "There is no food available to eat!",
					   "Please enter a valid command! (Type help for details)",
					   "You cannot unlock the cell door. You do not have a LOCK PICK!",
					   "The Warden's office is locked!",
					   "There is nothing to listen to!",
					   "You cannot unlock the safe! You do not have a LOCK PICK!",
					   "Gameplay Error!"];
			break;
	}
	//Information/General messages
	if (type === 0) {
		//Different display methods as required by different types of actions/events
		if (num === 0) {
			msg_box.value = message[num] + loc[current_loc].loc_name + "\n\n" + loc[current_loc].loc_desc() + "\n\n\n" + msg_box.value;
		}
		else if (num === 1) {
			msg_box.value = message[num];
		}
		else if (num === 9 || num === 13 || num === 18 || num === 19) {
			msg_box.value = message[num];
		}
		else {
			msg_box.value = message[num] + "\n\n\n" + msg_box.value;
		}
	}
	//Error messages
	else if ((type === 1) || (type === 2)) {
		if (num != undefined) {
			msg_box.value = message[num] + "\n\n\n" + msg_box.value;
		}
		else {
			msg_box.value = message[(message.length - 1)] + "\n\n\n" + msg_box.value;
		}	
	}
}

//Updates the display message
function update_display_msg(msg) {
	update_Display(msg, 0);
}