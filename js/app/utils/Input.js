class Input {

	static getValue(inputName) {
		return $("input[name=" + inputName + "]").val();
	}
}