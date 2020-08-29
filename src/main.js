// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

// Para isso, usaremos o "fetch", conforme você deve ter visto nas aulas online.
// Corrija a linha abaixo, para que a requisição funcione.
fetch(API_URL)
  .then(response => response.text())
  .then(result => {
    // Aqui, estamos pegando o resultado da requisição e parseando em JSON, 
    // para que fique mais fácil e amigável, tratarmos esses dados.
    const data = JSON.parse(result);

    // Como é mesmo que percorremos um array? 'hm
    data.map(element => {
      // Desestruture seu objeto, trazendo os seguintes dados:
      // Foto, tipo, nome e preço da propriedade.
      
      const {  photo, property_type, name, price } = element

      // Pegue a linha do container onde serão exibidos os cards.
      const row = document.querySelector("#row");

      // Agora, crie um elemento "div" com a class "col-md-4" do Bootstrap.
      const div = document.createElement("div");
      div.className = "col-md-4";
      

      // Boa! Agora, precisamos criar a "div" do card a ser exibido. Ao criar, atribua a class "card mb-4 box-shadow".
      const card = document.createElement("div");
      card.className = "card mb-4 box-shadow";

      // Humm... Agora que já temos o card, que tal começarmos a popular as informações?
      // Crie um elemento "img" e, atribua a class como "card-img-top";
      let img = document.createElement('img')
      img.className = "card-img-top";
      // Não se esqueça que sua imagem precisa ser referenciada!
     
      img.src = photo

      // Legal! Agora, já podemos começar a construir o "corpo" do card. Bora lá!
      // Obs.: atribua a class "card-body" do Bootstrap, para que fique bonitão. :)
      const cardBody = document.createElement('div')
      cardBody.className = "card-body"

      // Beleza, corpo criado. Seguindo nossa estrutura, o próximo elemento seria os textos, para exibir
      // o tipo da propriedade, nome e preço. Mas, antes, vamos criar um elemento "div" para manter isso
      // tudo organizado. Você pode atribuir a class "card-text" do Bootstrap!
      const cardText = document.createElement('div')
      cardText.className = "card-text"

      // Precisamos agora, listar o tipo, o nome e o preço.
      const propertyType = document.createElement("p");
      propertyType.className = "property-type";
      propertyType.innerHTML = property_type;

      const propertyName = document.createElement("p");
      propertyName.className = "property-name"
      propertyName.innerHTML = name;

      const propertyPrice = document.createElement("p");
      propertyPrice.className = "property-price"
      propertyPrice.innerHTML = `Total de R$ ${price.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`;


      // Temos agora, todos os elementos necessários para percorrer a resposta da API e,
      // anexar um ao outro para exibição ao usuário. Para "anexar" os elementos, nós usaremos
      // o método "appendChild". Se liga na estrutura do componente, para que tudo seja exibido
      // corretamente:

      row.appendChild(div);
      div.appendChild(card)
      card.appendChild(img)
      card.appendChild(cardBody)
      cardBody.appendChild(cardText)
      cardText.appendChild(propertyType)
      cardText.appendChild(propertyName)
      cardText.appendChild(propertyPrice)
     
   
         
    });
  });
