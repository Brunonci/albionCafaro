//switch por localstorage
const btnSwitch = document.querySelector('#tema');
btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});
// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}


const btn = document.getElementById('alertDescarga')
btn.addEventListener('click', () => {

    Swal.fire({
		title: '<strong><u>Juega Albion Online Gratis</u></strong>',
		icon: 'info',
		html:
		'<a href="https://albiononline.com/es/download">PC</a> ' +
		'<a href="https://apps.apple.com/es/app/id1202788573">IOS</a> ' +
		'<a href="https://play.google.com/store/apps/details?id=com.albiononline&pli=1">ANDROID</a> ',
		showCloseButton: true,
		showCancelButton: true,
		focusConfirm: false,
		confirmButtonText:
		'<i class="fa fa-thumbs-up"></i> Great!',
		confirmButtonAriaLabel: 'Thumbs up, great!',
		cancelButtonText:
		'<i class="fa fa-thumbs-down"></i>',
		cancelButtonAriaLabel: 'Thumbs down'
	})
})

