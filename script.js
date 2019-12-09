function correctPoster(id){
var dict = new Object();
 dict ['2baf70d1-42bb-4437-b551-e5fed5a87abe'] = 'imgs/Castle-in-the-Sky.png';
 dict ['12cfb892-aac0-4c5b-94af-521852e46d6a'] = 'imgs/Grave-of-the-Fireflies.png';
 dict ['58611129-2dbc-4a81-a72f-77ddfc1b1b49'] = 'imgs/My-Neighbor-Totoro.png';
 dict ['ea660b10-85c4-4ae3-8a5f-41cea3648e3e'] = 'imgs/Kiki-039-s-Delivery-Service.png';
 dict ['4e236f34-b981-41c3-8c65-f8c9000b94e7'] = 'imgs/Only-Yesterday.png';
 dict ['ebbb6b7c-945c-41ee-a792-de0e43191bd8'] = 'imgs/Porco-Rosso.png';
 dict ['1b67aa9a-2e4a-45af-ac98-64d6ad15b16c'] = 'imgs/Pom-Poko.png';
 dict ['ff24da26-a969-4f0e-ba1e-a122ead6c6e3'] = 'imgs/Whisper-of-the-Heart.png';
 dict ['0440483e-ca0e-4120-8c50-4c8cd9b965d6'] = 'imgs/Princess-Mononoke.png';
 dict ['45204234-adfd-45cb-a505-a8e7a676b114'] = 'imgs/My-Neighbors-the-Yamadas.png';
 dict ['dc2e6bd1-8156-4886-adff-b39e6043af0c'] = 'imgs/Spirited-Away.png';
 dict ['90b72513-afd4-4570-84de-a56c312fdf81'] = 'imgs/The-Cat-Returns.png';
 dict ['cd3d059c-09f4-4ff3-8d63-bc765a5184fa'] = 'imgs/Howl-039-s-Moving-Castle.png';
 dict ['112c1e67-726f-40b1-ac17-6974127bb9b9'] = 'imgs/Tales-from-Earthsea.png';
 dict ['758bf02e-3122-46e0-884e-67cf83df1786'] = 'imgs/Ponyo.png';
 dict ['2de9426b-914a-4a06-a3a0-5e6d9d3886f6'] = 'imgs/The-Secret-World-of-Arrietty.png';
 dict ['45db04e4-304a-4933-9823-33f389e8d74d'] = 'imgs/From-Up-on-Poppy-Hill.png';
 dict ['67405111-37a5-438f-81cc-4666af60c800'] = 'imgs/The-Wind-Rises.png';
 dict ['578ae244-7750-4d9f-867b-f3cd3d6fecf4'] = 'imgs/The-Tale-of-Princess-Kaguya.png';
 dict ['5fdfb320-2a02-49a7-94ff-5ca418cae602'] = 'imgs/When-Marnie-Was-There.png';

return dict[id];
}

const app = document.getElementById('root')
//get the root tagconst app = document.getElementById('root')
const logo = document.createElement('img')
//create the img element and assign it the ghibli logo
logo.src = 'imgs/logo.png'
//create a div element and set the class attribute to container
const container = document.createElement('div')
container.setAttribute('class', 'container')
//place the logo and the container in the website, using appendchild
app.appendChild(logo)
app.appendChild(container)

fetch('https://ghibliapi.herokuapp.com/films')
//access the API
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.forEach(movie =>{
      console.log(movie)
      //create a div with a card class
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      //create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1')
      h1.textContent = movie.title+'-('+movie.release_date+')'

      //create a p and set the text content to the films description
      const p = document.createElement('p')
      //movie.description = movie.description.substring(0, 300)//Limit to 300 charset
      p.textContent = `${movie.description}...`//End with an ellipses

      //create an img object and set it to the corresponding file on the imgs folder
      const poster = document.createElement('img')
      console.log('a punto de entrar al jQuery');
      poster.src = correctPoster(movie.id);
      poster.setAttribute('object-fit', 'contain')

      //Append the cards to the container getElementById
      container.appendChild(card)

      //give an h1 and a p to each cards
      card.appendChild(h1)
      card.appendChild(poster)
      card.appendChild(p)
    })
    console.log(data)
  })
  .catch(err => {
    console.log("something went wrong, unexpected outcome")
  })
