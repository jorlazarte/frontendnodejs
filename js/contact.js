function validateForm(){
	let oNom = document.getElementById('frm_name')
	let oMail = document.getElementById('frm_email')
	let oPais = document.getElementById('frm_pais')

	let chkDino = document.getElementById('frm_jug1')
	let chkAuto = document.getElementById('frm_jug2')
	let chkOso = document.getElementById('frm_jug3')
	let chkRomp = document.getElementById('frm_jug4')

	let oTxt = document.getElementById('frm_txt')

	let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
	
	if( oNom.value == '' || oNom.value.length <= 3 ){
		alert('Ingrese un nombre y vuelva a intentarlo!')
		oNom.focus()
		return false
	}
	//alert( validEmail.test(oMail.value) );
	if( !validEmail.test(oMail.value) ){
		alert('Ingrese un email correcto y volvé a intentarlo!')
		oMail.focus()
		return false
	}

	if( oPais.value == ''){
		alert('Selecciona su país de origen!')
		return false
	}

	if( !validateFileType( document.getElementById('frm_file') ) ){
		alert('Revise el archivo adjuntado y vuelva a intentarlo por favor, recuerde que solo pueden ser imagenes JPG')
		return false;
	}

	if( !chkDino.checked && !chkDino.checked && !chkDino.checked && !chkDino.checked){
		alert('Selecciona un juguete o un juego que te guste, todos tenemos uno favorito...')
		return false
	}

	if( oTxt.value == '' || oTxt.value.length <= 5){
		alert('Ingrese algo que quiera decirnos por favor, para nosotros todo lo que tenga para contarnos es importante!')
		oTxt.focus()
		return false
	}
	
	alert('Formulario enviado con éxito, nos pondremos en contacto a la brevedad.')
	return false
	
}

function validateFileType( o ) {
	
	let lstTypes = ['image/jpeg']
	//alert( o );
	if ( o.files[0] === undefined )
		return false

	if (!lstTypes.includes( o.files[0].type) ) {
		//alert('Invalid file type. Please upload a JPEG, PNG, or PDF file.');
		//document.getElementById('frm_file').value = '';
		return false
	}
	
	return true
}