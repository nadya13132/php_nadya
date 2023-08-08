var item = prompt('masukkan nama makana / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink');

switch(item ) {
		case 'nasi' :
		case 'daging' :
		case 'susu' :
			alert('makanan / minuman SEHAT!');
			break;
		case 'hamburger' :
		case 'softdrink' :
			alert('makanan / minuman SEHAT!');
			break;
		 default:
		 	alert('Anda memasukkan nama makanan / minuman yang salah!');
			break;
		}