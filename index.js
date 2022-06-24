const options = {
	method: 'GET',
	headers: {
		
		'X-RapidAPI-Host': 'https://v2.jokeapi.dev'
	}
};
fetch('https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?type=twopart&amount=2', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        document.getElementById('setup').innerHTML = response.jokes[0].setup;
        document.getElementById('delivery').innerHTML = response.jokes[1].delivery;
        console.log(response.jokes[0].setup);
        console.log(response.jokes[1].delivery);
    })
    
	.catch(err => console.error(err));

document.querySelector('#getJoke').addEventListener('click', function () {
    fetch('https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=religious,political,racist,sexist&type=twopart&amount=2', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        document.getElementById('setup').innerHTML = response.jokes[0].setup;
        document.getElementById('delivery').innerHTML = response.jokes[1].delivery;
        console.log(response.jokes[0].setup);
        console.log(response.jokes[1].delivery);
    })
    
	.catch(err => console.error(err));
  
  }, false);






document.querySelector('#capture').addEventListener('click', function () {
    html2canvas(document.getElementById("jokeArea")).then((canvas) => {
        let a = document.createElement("a");
    a.download = "capturejoke.png";
    a.href = canvas.toDataURL("image/png");
    a.click(); // MAY NOT ALWAYS WORK!
    })
    
	.catch(err => console.error(err));
  
  }, false);