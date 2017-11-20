class Input {

	static getValue(inputName) {
		return $("input[name=" + inputName + "]").val();
	}

	// static clear(id){

	// 	$('#' + id).each (function()){
	// 		this.reset();
	// 	}

	// }
}
