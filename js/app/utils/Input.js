class Input {

	static getValue(inputName) {
		return $("input[name=" + inputName + "]").val();
	}

	static clearForm(f) {
		$(f).closest('form').find("input[type=text], input[type=number], textarea").val("");
	}
}
