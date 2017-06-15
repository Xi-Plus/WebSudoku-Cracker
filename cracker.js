javascript:
(function(){

for (var fucka = 0; fucka < 9; fucka++) {
	for (var fuckb = 0; fuckb < 9; fuckb++) {
		var fuckel = document.all["f"+fucka+fuckb];
		if (fuckel.value == "") {
			for (var fuckc = 1; fuckc <= 9; fuckc++) {
				fuckel.value = fuckc;
				j12();
				if (j1() || message.children[0].color === "blue") {
					break;
				}
			}
		}
	}
}
document.forms.board.submit.click();

})();
