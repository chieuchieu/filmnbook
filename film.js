let unrev = document.getElementById('unrev-row')

let randomWord = ["love", "star", "world", "you", "friend", "man", "detective"]
let randomNumber = Math.floor(Math.random() * (randomWord.length -1))

let movieAPI = `http://www.omdbapi.com/?s=${randomWord[randomNumber]}&apikey=thewdb`
        fetch(movieAPI)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data.Search);
            for(let i = 0; i < 9; i++){

                let newFilmCol = document.createElement('div');
                newFilmCol.classList.add('col-lg');

                let newFilmCard = document.createElement('div');
                newFilmCol.classList.add('card');

                let poster = document.createElement('img');
                poster.setAttribute('src', data.Search[i].Poster)
                poster.classList.add('card-img-top');

                let content = document.createElement('div');
                content.classList.add('card-body')

                let title = document.createElement('h4');
                title.classList.add('card-title');
                title.innerHTML = data.Search[i].Title;

                let details = document.createElement('p');
                details.classList.add('card-text')
                details.innerHTML = `
                    Year: ${data.Search[i].Year} <br>
                    imdbID: ${data.Search[i].imdbID}
                `
                content.append(title)
                content.append(details)
                newFilmCard.append(poster)
                newFilmCard.append(content)
                newFilmCol.append(newFilmCard)
                unrev.append(newFilmCol)
                if((i+1)%3==0){
                    let hihi=document.createElement('div')
                    hihi.classList.add('w-100')
                    unrev.append(hihi);
                }
                console.log(unrev)
            }
        })
        .catch(err => {
            console.log(err);
        })