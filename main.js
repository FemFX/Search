function func() {
	var input , filter , ul ,li , a;
	input = document.getElementById('input')
	filter = input.value.toUpperCase()
	ul = document.getElementById('Ul');
	li = document.getElementsByTagName('li');
	for (var i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('a')[0]
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = 'block'
		}
		else {
			li[i].style.display = 'none'
		}
	}
	

}