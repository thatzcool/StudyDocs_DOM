window.onload = function () {
	// const header1 = document.querySelector('h1');
	const header = this.document.getElementById('header');

	header.innerHTML = '<i>i 태그입니다.</i><br/>';
	header.innerHTML += '&lt;i&gt;i 태그입니다. &lt;/i&gt;';
	header.textContent = '<i>i 태그입니다.';
};
