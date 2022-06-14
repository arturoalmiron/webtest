const options = {
	method: 'GET',
	headers: {
		
		'X-RapidAPI-Host': 'https://v2.jokeapi.dev'
	}
};

fetch('https://v2.jokeapi.dev/joke/Dark?type=twopart&amount=2', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        document.getElementById('setup').innerHTML = response.jokes[0].setup;
        document.getElementById('delivery').innerHTML = response.jokes[1].delivery;
        console.log(response.jokes[0].setup);
        console.log(response.jokes[1].delivery);
    })
    
	.catch(err => console.error(err));