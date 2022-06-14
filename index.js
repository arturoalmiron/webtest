const options = {
	method: 'GET',
	headers: {
		
		'X-RapidAPI-Host': 'https://v2.jokeapi.dev'
	}
};

fetch('https://v2.jokeapi.dev/joke/Dark?type=twopart', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        document.getElementById('setup').innerHTML = response.setup;
        document.getElementById('delivery').innerHTML = response.delivery;
        console.log(response.setup);
        console.log(response.delivery);
    })
    
	.catch(err => console.error(err));