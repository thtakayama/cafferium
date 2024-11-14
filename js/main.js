class menuItem {
    constructor(titulo, descricao, preco, tags, imagem){
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        this.tags = tags;
        this.imagem = imagem;
    }

    getMenu() {
      return this;
    }
};

class Lanche extends menuItem{
   #tipo;
   constructor(titulo, descricao, preco, tags, imagem, tipo = 'lanche') {
      super(titulo, descricao, preco, tags, imagem);
      this.#tipo = tipo;
   }
}

class Doce extends menuItem{
   #tipo;
   constructor(titulo, descricao, preco, tags, imagem, tipo = 'doce') {
      super(titulo, descricao, preco, tags, imagem);
      this.#tipo = tipo;
   }
}

class Cafe extends menuItem{
   #tipo;
   constructor(titulo, descricao, preco, tags, imagem, tipo = 'cafe') {
      super(titulo, descricao, preco, tags, imagem);
      this.#tipo = tipo;
   }
}

class Cha extends menuItem{
   #tipo;
   constructor(titulo, descricao, preco, tags, imagem, tipo = 'cha') {
      super(titulo, descricao, preco, tags, imagem);
      this.#tipo = tipo;
   }
}

class Bebida extends menuItem{
   #tipo;
   constructor(titulo, descricao, preco, tags, imagem, tipo = 'bebida') {
      super(titulo, descricao, preco, tags, imagem);
      this.#tipo = tipo;
   }
}

//LANCHES
const saladaQuinoaLegumes = new Lanche('Salada de Quinoa e Legumes', 'Quinoa, vegetais frescos e molho cítrico.', '20,50', ['Vegano', 'Sem Glúten'], './img/menu/pao-de-queijo.jpg');
const wrapAbacateGraoBico = new Lanche('Wrap de Abacate e Grão-de-Bico', 'Tortilha de arroz com abacate e grão-de-bico.', '20,50', ['Vegano', 'Sem Glúten'], './img/menu/pao-de-queijo.jpg');
const quicheEspinafreQueijo = new Lanche('Quiche de Espinafre e Queijo', 'Quiche leve com espinafre e queijo cremoso.', '20,50', ['Vegetariano','Sem Glúten'], './img/menu/pao-de-queijo.jpg');
const espagueteAbobrinha = new Lanche('Espaguete de Abobrinha com Molho Pesto', 'Abobrinha em espiral com molho pesto e frango.', '20,50', ['Sem Glúten'], './img/menu/pao-de-queijo.jpg');
const omeleteQueijoEspinafre = new Lanche('Omelete de Queijo e Espinafre', 'Omelete leve com queijo e espinafre fresco.', '20,50', ['Vegetariano','Sem Glúten'], './img/menu/pao-de-queijo.jpg');

//Doces
const croissantChocolate = new Doce('Croissant de Chocolate', 'Quinoa, vegetais frescos e molho cítrico.', '20,50', ['Vegano', 'Sem Glúten'], './img/menu/pao-de-queijo.jpg');

//Cafes
const cafeEspresso = new Cafe('Café Espresso', 'Quinoa, vegetais frescos e molho cítrico.', '20,50', ['Vegano', 'Sem Glúten'], './img/menu/pao-de-queijo.jpg');

//Chas
const chaJasmim = new Cha('Chá de Jasmim', 'Quinoa, vegetais frescos e molho cítrico.', '20,50', ['Vegano', 'Sem Glúten'], './img/menu/pao-de-queijo.jpg');

//Bebidas
const coca = new Bebida('Coca Cola', 'Quinoa, vegetais frescos e molho cítrico.', '20,50', ['Vegano', 'Sem Glúten'], './img/menu/pao-de-queijo.jpg');

const menu = [saladaQuinoaLegumes, wrapAbacateGraoBico, quicheEspinafreQueijo, espagueteAbobrinha, omeleteQueijoEspinafre, croissantChocolate, cafeEspresso, chaJasmim, coca];

const lanches = menu.filter(lanche => lanche.tipo === 'lanche');
const itemMenu = menu.map((item, index) => item.getMenu().tipo);
console.log(lanches);
console.log(itemMenu);

const markup = `
   <div class="card">
                        <div class="card-img"><img src="${saladaQuinoaLegumes.imagem}" /></div>
                        <div class="card-info">
                            <h5>${saladaQuinoaLegumes.titulo}</h5>
                            <span class="price">R$ ${saladaQuinoaLegumes.preco}</span>
                            <p>${saladaQuinoaLegumes.descricao}</p>
                            <div class="tags">
                                <div class="chip">${saladaQuinoaLegumes.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                            </div>
                        </div>
                    </div>
`;

console.log(saladaQuinoaLegumes);
console.log(wrapAbacateGraoBico);
console.log('Teste');
/* 
Aqui está um menu saudável para a sua cafeteria:

### Menu Saudável

1. **Salada de Quinoa e Legumes**
   - Quinoa, vegetais frescos e molho cítrico.
   - **Tipo:** Vegano, Sem Glúten

2. **Wrap de Abacate e Grão-de-Bico**
   - Tortilha de arroz com abacate e grão-de-bico.
   - **Tipo:** Vegano, Sem Glúten

3. **Smoothie Verde Energético**
   - Espinafre, banana e leite de amêndoas.
   - **Tipo:** Vegano, Sem Lactose

4. **Bolinho de Batata Doce**
   - Batata doce assada com ervas frescas.
   - **Tipo:** Vegetariano, Sem Glúten

5. **Tigela de Açaí**
   - Açaí com granola sem glúten e frutas.
   - **Tipo:** Vegano, Sem Glúten

6. **Sopa de Lentilha**
   - Sopa reconfortante de lentilhas e temperos.
   - **Tipo:** Vegano, Sem Glúten

7. **Torrada de Abacate**
   - Pão sem glúten com abacate e tomate.
   - **Tipo:** Vegano, Sem Glúten

8. **Cookies de Aveia e Banana**
   - Aveia e banana assadas, saudáveis e gostosas.
   - **Tipo:** Vegano, Sem Glúten, Sem Lactose

9. **Salada de Grão-de-Bico**
   - Grão-de-bico, tomate, cebola e tempero fresco.
   - **Tipo:** Vegano, Sem Glúten

10. **Pudim de Chia com Frutas**
    - Chia hidratada com leite de coco e frutas.
    - **Tipo:** Vegano, Sem Lactose, Sem Glúten


    Claro! Aqui está um menu saudável, excluindo opções vegetarianas e veganas:

### Menu Saudável (sem opções vegetarianas e veganas)

1. **Salada Caesar com Frango**
   - Frango grelhado, alface, croutons e molho Caesar.
   - **Tipo:** Sem Glúten (com croutons sem glúten)

2. **Wrap de Peito de Peru**
   - Peito de peru, espinafre e cream cheese.
   - **Tipo:** Sem Glúten (tortilha sem glúten)

3. **Quiche de Espinafre e Queijo**
   - Quiche leve com espinafre e queijo cremoso.
   - **Tipo:** Sem Glúten (massa sem glúten)

4. **Sopa de Frango com Legumes**
   - Sopa caseira de frango e vegetais frescos.
   - **Tipo:** Sem Lactose

5. **Salada de Atum**
   - Atum, alface, ovo cozido e azeitonas.
   - **Tipo:** Sem Glúten

6. **Panqueca de Aveia com Frutas**
   - Aveia, ovos e frutas da estação.
   - **Tipo:** Sem Glúten

7. **Espaguete de Abobrinha com Molho Pesto**
   - Abobrinha em espiral com molho pesto e frango.
   - **Tipo:** Sem Glúten

8. **Bowl de Frango Teriyaki**
   - Frango grelhado com arroz e legumes no molho teriyaki.
   - **Tipo:** Sem Glúten

9. **Torrada com Salmão Defumado**
   - Salmão defumado, cream cheese e cebola roxa.
   - **Tipo:** Sem Lactose

10. **Omelete de Queijo e Espinafre**
    - Omelete leve com queijo e espinafre fresco.
    - **Tipo:** Sem Glúten, Sem Lactose

Espero que você goste desse novo menu!


Claro! Aqui está um menu de pratos doces saudáveis:

### Menu Doces Saudáveis

1. **Bowl de Açaí com Granola**
   - Açaí gelado com granola e frutas frescas.
   - **Tipo:** Vegano, Sem Glúten

2. **Pudim de Chia com Coco**
   - Chia com leite de coco e pedaços de fruta.
   - **Tipo:** Vegano, Sem Lactose, Sem Glúten

3. **Brownie de Feijão Preto**
   - Brownie fudgy feito com feijão preto e cacau.
   - **Tipo:** Vegano, Sem Glúten

4. **Cookies de Aveia e Mel**
   - Aveia, mel e pedaços de chocolate amargo.
   - **Tipo:** Sem Glúten

5. **Torta de Maçã Saudável**
   - Torta com maçãs, canela e massa integral.
   - **Tipo:** Sem Lactose

6. **Mousse de Abacate e Cacau**
   - Abacate cremoso com cacau e mel.
   - **Tipo:** Vegano, Sem Lactose

7. **Gelatina de Frutas Naturais**
   - Gelatina feita com suco de frutas frescas.
   - **Tipo:** Sem Glúten, Sem Lactose

8. **Banana Assada com Canela**
   - Banana assada com canela e mel.
   - **Tipo:** Vegano, Sem Glúten

9. **Picolé de Iogurte com Frutas**
   - Iogurte natural e frutas congeladas em palito.
   - **Tipo:** Sem Glúten

10. **Tapioca Doce com Coco**
    - Tapioca recheada com coco ralado e mel.
    - **Tipo:** Sem Glúten

Espero que esses doces saudáveis façam sucesso na sua cafeteria!

Claro! Aqui está um menu de doces inspirado em uma padaria:

### Menu Doces de Padaria

1. **Pão de Queijo**
   - Deliciosos pãezinhos de queijo quentinhos.
   - **Tipo:** Sem Glúten

2. **Bolo de Fubá com Goiabada**
   - Bolo úmido de fubá com pedaços de goiabada.
   - **Tipo:** Sem Lactose

3. **Croissant de Chocolate**
   - Croissant folhado recheado com chocolate amargo.
   - **Tipo:** Sem Lactose

4. **Biscoito de Polvilho**
   - Leves e crocantes, feitos com polvilho azedo.
   - **Tipo:** Sem Glúten

5. **Pudim de Leite Condensado**
   - Pudim cremoso com calda de caramelo.
   - **Tipo:** Sem Glúten

6. **Torta de Maçã**
   - Torta clássica com maçãs caramelizadas e canela.
   - **Tipo:** Sem Lactose

7. **Sonho Recheado**
   - Bolinho frito recheado com creme de confeiteiro.
   - **Tipo:** Sem Glúten (massa sem glúten)

8. **Queijadinha**
   - Deliciosa tortinha de coco e queijo ralado.
   - **Tipo:** Sem Glúten

9. **Bolo de Chocolate com Cobertura**
   - Bolo de chocolate fofinho com cobertura cremosa.
   - **Tipo:** Sem Lactose

10. **Rocambole de Doce de Leite**
    - Bolo enrolado com recheio de doce de leite.
    - **Tipo:** Sem Glúten

Espero que esse menu de doces de padaria encante seus clientes! */

//NAVBAR
const infoHeader = document.querySelector('.info');
const navbar = document.querySelector('.navbar');

//SLIDE
const containerSlide = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide-item');
const slidesDots = document.querySelectorAll('.dot');

if(containerSlide) {
   window.addEventListener('load', () => {
      let heightInfoHeader = infoHeader.getBoundingClientRect().height;
      let heightNavbar = navbar.getBoundingClientRect().height;
      let heightWindow = window.innerHeight;
      containerSlide.style.height = `${heightWindow - heightNavbar - heightInfoHeader}px`;
      containerSlide.style.opacity = 1;
      console.log(heightWindow);
      console.log(heightInfoHeader);
      console.log(heightNavbar);
      console.log(`${heightWindow - heightNavbar - heightInfoHeader}px`);
   })
}

if(slidesDots.length > 0){
slidesDots[0].classList.add('active');
slidesDots.forEach((btn, index) => {
   btn.addEventListener('click', () => {
      containerSlide.style.transform = `translateX(-${index * 100}%)`;
      slidesDots.forEach(dot => dot.classList.remove('active'));
      btn.classList.add('active');
   })
})}

//TABNAV

const tabNav = document.querySelectorAll('.tabnav a');
const tabContent = document.querySelectorAll('.tabcontent'); 
console.log(tabNav);
console.log(tabContent);

tabNav.forEach((nav, index) => {
   nav.addEventListener('click', () => {
      console.log('tab: ', index);
      if(tabContent[index]) {
         console.log('Existe');
         tabContent.forEach(tab => tab.classList.remove('active'));
         tabContent[index].classList.add('active');
      } else {
         console.log('Não existe');
      }
   })
});

tabContent[0].insertAdjacentHTML('afterbegin', markup);
console.log(tabContent[0]);

//SLIDER LINHA DO TEMPO
const containerTimeline = document.querySelector('.tempo-container');

if(containerTimeline){
const itemsTimeline = document.querySelectorAll('.tempo-item');
const btnLeftTimeline = document.querySelector('.tempo-arrows .arrow-left');
const btnRightTimeline = document.querySelector('.tempo-arrows .arrow-right');

let curTimeline = 0;
let maxItemTimeline = itemsTimeline.length - 3;

const goToItemTimeline = (curTimeline) => {
   let style= getComputedStyle(itemsTimeline[curTimeline]);
   let itemLeftmargin = style.marginLeft;
   containerTimeline.style.transform = `translateX(-${(itemsTimeline[curTimeline].getBoundingClientRect().width) * curTimeline + (parseInt(itemLeftmargin) * curTimeline)}px)`;
}

btnRightTimeline.addEventListener('click', () => {
   if(curTimeline === maxItemTimeline) {
      curTimeline = 0;
   } else {
      curTimeline++;
   }

   goToItemTimeline(curTimeline);
});

btnLeftTimeline.addEventListener('click', () => {
   if(curTimeline === 0) {
      curTimeline = maxItemTimeline;
   } else {
      curTimeline--;
   }

   goToItemTimeline(curTimeline);
});}
