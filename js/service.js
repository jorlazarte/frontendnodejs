function addProd(iId, iOpc){
	let iPos = parseInt( document.getElementById('iCntProd').value )
	let iTot

	document.getElementById('msgSinReg').style.display = ( iPos > 0 ? 'none' : 'inline'  )

	if( document.getElementById('tr_'+iId) ){

		if(iOpc == 1){
			iTot = parseInt(document.getElementById('td_col4_'+iId).innerHTML) + 1

			document.getElementById('td_col4_'+iId).innerHTML = iTot
		}else{
			iTot = parseInt(document.getElementById('td_col4_'+iId).innerHTML) - 1
			
			if(iTot == 0){
				delPrd(iId)
				return false;
			} 
				

			document.getElementById('td_col4_'+iId).innerHTML = iTot
		}

		document.getElementById('td_col6_'+iId).innerHTML = (iTot * parseFloat(document.getElementById('td_col5_'+iId).innerHTML) ).toFixed(2)

		return false;
	}else{
		iPos++
		document.getElementById('iCntProd').value = iPos
		document.getElementById('divCntProd').innerHTML = iPos
	}

	/***********ME TRAIGO EL OBJETO TABLA*********/
	let objTbl = document.getElementById('tblPrd')

	/***********CREACIÓN DE UN NUEVO TR*************/
	let objDvTr = document.createElement('div')
	objDvTr.setAttribute('class', 'divTr')
	objDvTr.setAttribute('id', 'tr_'+iId)

	/*****************TD 1******************/
	let objDvTd1 = document.createElement('div')
	objDvTd1.setAttribute('class', 'divTd col1')
	objDvTd1.setAttribute('id', 'td_col1_'+iId)
	objDvTd1.append(iPos)
	
	objDvTr.append(objDvTd1)
	
	/*****************TD 2******************/
	let objDvTd2 = document.createElement('div')
	let objDvImg = document.createElement('div')

	objDvTd2.setAttribute('class', 'divTd col2')
	objDvTd2.setAttribute('id', 'td_col2_'+iId)
	objDvImg.setAttribute('class', 'divImg divImg_'+iId)
	objDvTd2.append(objDvImg)
	objDvTr.append(objDvTd2)

	/*****************TD 3******************/
	let objDvTd3 = document.createElement('div')
	objDvTd3.setAttribute('class', 'divTd col3')
	objDvTd3.setAttribute('id', 'td_col3_'+iId)
	objDvTd3.append( document.getElementById('itemDes_'+iId).innerHTML )
	objDvTr.append(objDvTd3)

	/*****************TD 4******************/
	let objDvTd4 = document.createElement('div')
	objDvTd4.setAttribute('class', 'divTd col4')
	objDvTd4.setAttribute('id', 'td_col4_'+iId)
	objDvTd4.append('1')
	objDvTr.append(objDvTd4)
	objTbl.append(objDvTr)	

	/*****************TD 5******************/
	let objDvTd5 = document.createElement('div')
	objDvTd5.setAttribute('class', 'divTd  col5')
	objDvTd5.setAttribute('id', 'td_col5_'+iId)
	objDvTd5.append( document.getElementById('itemPre_'+iId).innerHTML )
	
	objDvTr.append(objDvTd5)
	objTbl.append(objDvTr)

	/*****************TD 6******************/
	let objDvTd6 = document.createElement('div')
	objDvTd6.setAttribute('class', 'divTd col6')
	objDvTd6.setAttribute('id', 'td_col6_'+iId)
	objDvTd6.append( document.getElementById('itemPre_'+iId).innerHTML )
	objDvTr.append(objDvTd6)

	/*****************TD 7******************/
	let objDvTd7 = document.createElement('div')
	objDvTd7.setAttribute('class', 'divTd col7')
	objDvTd7.setAttribute('id', 'td_col7_'+iId)

	let objDvImAdd = document.createElement('div')
	objDvImAdd.setAttribute('class', 'imgAdd')
	objDvImAdd.setAttribute("onclick", 'addProd('+iId+', 1)' )

	let objDvImRem = document.createElement('div')
	objDvImRem.setAttribute('class', 'imgDel')
	objDvImRem.setAttribute("onclick", 'addProd('+iId+', 0)' )

	let objDvImDel = document.createElement('div')
	objDvImDel.setAttribute('class', 'imgRem')
	objDvImDel.setAttribute("onclick", 'delPrd('+iId+')' )

	/*****************TD 8******************/
	let objDvTd8 = document.createElement('div')
	objDvTd8.setAttribute('class', 'noDisplay')
	objDvTd8.setAttribute('id', 'td_col8_'+iId)

	let objDvImBack = document.createElement('div')
	objDvImBack.setAttribute('class', 'imgBack col8')
	objDvImBack.setAttribute("onclick", 'backTr('+iId+')' )

	objDvTd8.append(objDvImBack)

	/*****GENERO UN HIDDEN CON EL ID DEL PROD****/
	let objInp = document.createElement('input')
	objInp.setAttribute('type', 'hidden')
	objInp.setAttribute('id', 'prd_'+iPos)
	objInp.setAttribute('value', iId)
	objInp.setAttribute('style', 'width: 30px')

	objDvTd7.append(objDvImAdd)
	objDvTd7.append(objDvImRem)
	objDvTd7.append(objDvImDel)
	objDvTd7.append(objInp)
	/*******AGREGO EL TR A LA TABLA***********/
	objDvTr.append(objDvTd7)

	/*******AGREGO EL TR A LA TABLA***********/
	objDvTr.append(objDvTd8)

	/*******AGREGO EL TR A LA TABLA***********/
	objTbl.append(objDvTr)			
}

//cierra el listado de productos seleccionados
function closeFullView(){
	document.getElementById('backListaProd').style.display = 'none';
	document.body.style.overflow = 'auto'
}

function verCarrito(){
	document.getElementById('backListaProd').style.display = 'grid'
	document.body.style.overflow = 'hidden'
    //document.body.style.max-height = 100vh
}
