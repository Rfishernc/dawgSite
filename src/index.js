import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import dawgs from './dawgGetter';

const createDogCards = (dogs) => {
  let newString = '';
  dogs.forEach((dog) => {
    newString += `
      <div class="card u-clearfix">
        <div class="card-body">
          <span class="card-number card-circle subtle">${dog.name}</span>
          <span class="card-author subtle">$${dog['add-on-price'].toFixed(0)}</span>
          <h2 class="card-title">${dog.name}</h2>
          <span class="card-description subtle">${dog.specialSkill}</span>
          <div class="card-read"><span class="subtle">Color</span>${dog.color}</div>
        </div>
        <img src="${dog.gif}" alt="" class="card-media" />
      </div>`;
  });
  $('#dawgDiv').html(newString);
};

dawgs.dawgPromise().then((data) => {
  createDogCards(data.data.dogs);
}).catch((error) => {
  console.log(error);
});

$('#dawgDiv').show();
