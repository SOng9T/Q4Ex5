function verifyOrder() {
	var order = document.getElementbyId('inputChoice').value;

	switch (order) {
	case "B":
		document.getElementbyId('choiceResult').innerHTML = "You ordered Burger";

	case "F":
		document.getElementbyId('choiceResult').innerHTML = "You ordered Fries";

	case "S":
		document.getElementbyId('choiceResult').innerHTML = "You ordered Soda";

	default: 
		document.getElementbyId('choiceResult').innerHTML = "You order is out of the menu";

	}
}

