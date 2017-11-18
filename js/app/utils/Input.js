class Input {

	static getValue(inputName) {
		return $("input[name=" + inputName + "]").val();
	}

	static clear(id){

		$("input[name=" + id + "]").val("");

	}
}