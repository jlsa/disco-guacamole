// const weather = require('./modules/weather.js');
// console.log(weather.getWeatherData());

const form = document.querySelector('form');
const input = document.getElementById('search');
const msg = document.getElementById('msg');
const list = document.querySelector('.ajax-section .cities');

const clearBtn = document.getElementById('clear-list-btn');

const apiKey = '4d8fb5b93d4af21d66a2948710284366';

form.addEventListener('submit', e => {
  console.log(submit, e);
  e.preventDefault();
  let inputVal = input.value;
  if (inputVal.length === 0) {
    msg.textContent = 'Please fill something!';
    form.reset();
    input.focus();
  };

  // check if there's already a city
  const listItems = list.querySelectorAll('.ajax-section .city');
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = '';
      // athens,gr
      if (inputVal.includes(',')) {
        // athens,grrrrrr -> invalid country code, so we keep only the first part of inputVal
        if (inputVal.split(',')[1].length > 2) {
          inputVal = inputVal.split(',')[0]; // perhaps keep the first two letters as well
          content = el
            .querySelector('.city-name span')
            .textContent.toLowerCase();
        } else {
          content = el.querySelector('.city-name').dataset.name.toLowerCase();
        }
      } else {
        // athens
        content = el.querySelector('.city-name span').textContent.toLowerCase();
      }

      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector('.city-name span').textContent
      } ... otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return;
    }
  }

  // AJAX here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const { main, name, sys, weather } = data;

      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;
      // const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
      const flag = `https://www.countryflags.io/${sys.country.toLowerCase()}/flat/16.png`;

      const li = document.createElement('li');
      li.classList.add('city');
      li.classList.add(
        'gap-3',
        'w-64',
        'border',
        'b-gray-400',
        'rounded',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'text-center',
        'p-6',
        'bg-white',
        'm-3'
      );
        // <div class="w-64 border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
        // <div class="w-64 border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6">

      const markup = `
        <div>
        Hai
        </div>
        <div
          class="city-name text-md font-bold flex flex-row text-gray-900"
          data-name="${name},${sys.country}"
        >
          <span class="uppercase">
            <span>${name}</span> <sup>NL<img src="${flag}" alt="${sys.country}"/></sup>
          </span>
        </div>
        <div class="text-md font-bold flex flex-row text-gray-900">
          <span
            class="font-normal text-gray-700 text-sm">July 29</span>
        </div>
        <h2>
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
         <div class="text-3xl font-bold text-gray-700 mb-6">
            <span class="high-temp">${Math.round(main.temp_max)}<sup>°</sup></span>
            <span class="font-normal text-gray-600 mx-1">/</span>
            <span class="low-temp">${Math.round(main.temp_min)}<sup>°</sup></span>
          </div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${weather[0]['description']}" />
          <figcaption>${weather[0]['description']}</figcaption>
        </figure>
      `;

      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = 'Please search for a valid city 😩';
    });

    msg.textContent = '';
    form.reset();
    input.focus();
});

clearBtn.onclick = () => {
  msg.textContent = 'clear success';
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
};