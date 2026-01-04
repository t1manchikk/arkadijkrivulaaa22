let isAuth = false;

const pizzas = [
 {name:'Маргарита', price:150},
 {name:'Пепероні', price:190},
 {name:'4 Сири', price:210}
];

const cardsContainer = document.getElementById('cards');
const bankContainer = document.getElementById('bankCards');
const modal = document.getElementById('authModal');

// генерація карток піци
function renderPizzas(){
 cardsContainer.innerHTML='';
 pizzas.forEach(p=>{
  cardsContainer.insertAdjacentHTML('beforeend',`
   <div class="card">
    <h3>${p.name}</h3>
    <p>${p.price} грн</p>
   </div>
  `);
 });
}

// делегування подій
cardsContainer.onclick = (e)=>{
 const card = e.target.closest('.card');
 if(!card) return;
 if(!isAuth){
  modal.classList.remove('hidden');
 } else {
  alert('Піца обрана 🍕');
 }
};

// авторизація
document.getElementById('login').onclick = ()=>{
 isAuth = true;
 modal.classList.add('hidden');
};

// додавання банківської картки
document.getElementById('addCard').onclick = ()=>{
 const num = document.getElementById('cardNumber').value;
 const own = document.getElementById('cardOwner').value;
 if(!num || !own) return;

 bankContainer.insertAdjacentHTML('beforeend',`
  <div class="card">
   <p>${num}</p>
   <p>${own}</p>
  </div>
 `);

 document.getElementById('cardNumber').value='';
 document.getElementById('cardOwner').value='';
};

renderPizzas();
