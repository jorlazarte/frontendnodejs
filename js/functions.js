const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
	dropDownMenu.classList.toggle('open')
	const isOpen = dropDownMenu.classList.contains('open')
	//alert(toggleBtnIcon.classList);
	toggleBtnIcon.classList = isOpen
	? 'fa-solid fa-xmark'
	: 'fa-solid fa-bars'

}

/**************************************************/
function makeDiv(name,totalScore,gamesPlayed) {
//should return an object with three keys:
// name
// totalScore
// gamesPlayed

var obj = {  //note you don't use = in an object definition
 "name": name,
 "totalScore": totalScore,
 "gamesPlayed": gamesPlayed
}
return obj;
}


function recorreTr(){

	const nicknames = document.querySelectorAll('[id="nickname"]');
}

function validateForm(){
	let cNom = document.getElementById('frm_name').value
	let cMail = document.getElementById('frm_email').value

	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if( cNom == '' || cNom.length <= 3 ){
		alert('Ingrese un nombre y vuelva a intentarlo!')
		return false
	}
	
	if( cMail == '' || !filter.test(cMail) ){
		alert('Ingrese un email correcto y vuelva a intentarlo!')
		return false
	}

	alert('ok')
	return true
}

function recorreNodos(){
  
  alert('aaa')
  var children = document.getElementById('tblPrd').childNodes;
  alert('bbbb')
  alert("total"+children.length);
  for (var i = 0; i < children.length; i++) {
    // do something with each child as children[i]
    // NOTE: List is live, adding or removing children will change the list

  	if(children[i].id === undefined){

  	}else{
  		//alert("id: "+children[i].id)
  		//alert("**: "+children[i].id.startsWith("tr_", 0))
	  	if( children[i].id.startsWith("tr_", 0) && children[i].id != 'tr_tit' && children[i].id != 'msgSinReg'){
	  		//alert('qqq');
	  		
	  		//console.log(children[i].childNodes)
	  		tdChild = children[i].childNodes

	  		for (var j = 0; j < tdChild.length; j++) {

	  			if(tdChild[j].id === undefined){

	  			}else{
			  		//alert('ddd_'+tdChild[i].id+'_');
			  		if(tdChild[j].id.startsWith("td_col1_", 0)){
			  			alert("ok__POSICION:"+tdChild[j].innerHTML+"//ID:"+ document.getElementById('prd_'+tdChild[j].innerHTML).value );	
			  		}	  				
	  			}
    		}
	  	}
  	}

  }
  alert('ccc')
}

function delPrd(iId){
	//alert(iId)

	document.getElementById('td_col7_'+iId).classList.add("noDisplay")
	document.getElementById('td_col8_'+iId).classList.remove("noDisplay")
	document.getElementById('td_col8_'+iId).classList.add("divTd")

	document.getElementById('tr_'+iId).classList.add("trElimina")
}

function backTr(iId){
	//alert("__"+iId)

	document.getElementById('td_col7_'+iId).classList.remove("noDisplay")
	document.getElementById('td_col8_'+iId).classList.add("noDisplay")

	document.getElementById('tr_'+iId).classList.remove("trElimina")
}