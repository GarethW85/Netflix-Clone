
    //Get Movie Data from IMDB ... need to implemnt this for the search option
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '859839a56cmshc14c19ec3cc0281p13b805jsnf834ea070662',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    
    fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
        .then(response => response.json())
        .then (response => {
            const list = response.d;
            
            list.map((item) => {
                const name = item.l;
                const poster = item.i.imageUrl;
                const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`

                document.querySelector('.movies').innerHTML += movie
            })
        })
        // .then(response => console.log(response))
        .catch(err => console.error(err));