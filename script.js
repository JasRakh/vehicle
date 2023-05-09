const CARS = [
  {
    preview: 'assets/cars/small/0.png',
    img: 'assets/cars/big/0.png',
    name: 'Sprinter executive',
    description: 'Some of the available features of the Sprinter Revel Edition include a rear audio system with radio and CD capabilities and speakers with an amp and a subwoofer',
    to: '#',
    min: 13,
    max: 13
  },
  {
    preview: 'assets/cars/small/1.png',
    img: 'assets/cars/big/1.png',
    name: 'Party Sprinter',
    description: 'Some of the available features of the Sprinter Revel Edition include a rear audio system with radio and CD capabilities and speakers with an amp and a subwoofer',
    to: '#',
    min: 10,
    max: 13
  },
  {
    preview: 'assets/cars/small/2.png',
    img: 'assets/cars/big/2.png',
    name: 'Regular sprinter',
    description: 'Some of the available features of the Sprinter Revel Edition include a rear audio system with radio and CD capabilities and speakers with an amp and a subwoofer',
    to: '#',
    min: 11,
    max: 11
  },
  {
    preview: 'assets/cars/small/3.png',
    img: 'assets/cars/big/3.png',
    name: 'Sprinter luxury',
    description: 'Some of the available features of the Sprinter Revel Edition include a rear audio system with radio and CD capabilities and speakers with an amp and a subwoofer',
    to: '#',
    min: 16,
    max: 16
  },
  {
    preview: 'assets/cars/small/4.png',
    img: 'assets/cars/big/4.png',
    name: 'Minibus',
    description: 'Some of the available features of the Sprinter Revel Edition include a rear audio system with radio and CD capabilities and speakers with an amp and a subwoofer',
    to: '#',
    min: 24,
    max: 24
  },
  {
    preview: 'assets/cars/small/5.png',
    img: 'assets/cars/big/5.png',
    name: 'Minibus',
    description: 'Some of the available features of the Sprinter Revel Edition include a rear audio system with radio and CD capabilities and speakers with an amp and a subwoofer',
    to: '#',
    min: 27,
    max: 27
  },
  {
    preview: 'assets/cars/small/6.png',
    img: 'assets/cars/big/6.png',
    name: 'Minibus',
    description: 'Some of the available features of the Sprinter Revel Edition include a rear audio system with radio and CD capabilities and speakers with an amp and a subwoofer',
    to: '#',
    min: 35,
    max: 35
  },
  {
    preview: 'assets/cars/small/7.png',
    img: 'assets/cars/big/7.png',
    name: 'Motor coach',
    description: 'Some of the available features of the Sprinter Revel Edition include a rear audio system with radio and CD capabilities and speakers with an amp and a subwoofer',
    to: '#',
    min: 35,
    max: 35
  },
];

const getPassengersText = (min, max) => {
  if (min === max) return `${max} passengers`;

  return `${min}-${max} passengers`;
}

const carInfoContainer = document.querySelector('.vehicles__info');

const carImg = carInfoContainer.querySelector('.vehicles__img');
const carName = carInfoContainer.querySelector('.vehicles__img-title');
const carPassengers = carInfoContainer.querySelector('.vehicles__img-passengers');
const carDescription = carInfoContainer.querySelector('.vehicles__img-text');


const handleClickCar = (e, car) => {
  carImg.src = car.img;
  carName.innerHTML = car.name;
  carPassengers.innerHTML = getPassengersText(car.min, car.max);
  carDescription.innerHTML = car.description;
}

const renderCar = (car) => {
  const element = document.createElement('div');
  element.classList.add('swiper-slide', 'vehicles__item');
  element.addEventListener('click', (e) => handleClickCar(e, car));

  element.innerHTML = `
    <div class="vehicles__item-container">
      <div class="vehicles__item-img">
          <img src="${car.preview}" alt="">
      </div>
      <div class="vehicles__item-info">
          <h4 class="vehicles__item-title">${car.name}</h4>
          <p class="vehicles__item-text">${getPassengersText(car.min, car.max)}</p>
          <a class="vehicles__item-link" href="${car.to}">Consider</a>
      </div>
    </div>
  `;

  return element;
}


const swiperContainer = document.querySelector('.vehicles__swiper');
const filterItems = document.querySelectorAll('.vehicles__seats-item');

const renderCars = (cars) => {
  swiperContainer.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.classList.add('swiper-wrapper');

  cars.forEach((item) => {
    wrapper.appendChild(renderCar(item));
  });

  swiperContainer.appendChild(wrapper);
  refreshSlider();
}

filterItems.forEach((item) => {
  const value = item.dataset.value;

  item.addEventListener('click', (e) => {
    filterItems.forEach((item) => item.classList.remove('active'));

    e.currentTarget.classList.add('active');
    handleFilterCars(value);
  });
})

const handleFilterCars = (value) => {
  if (value === 'all') {
    renderCars(CARS);
  } else {
    renderCars(CARS.filter(({ min, max }) => value >= min && value <= max));
  }
}

const refreshSlider = () => {
  new Swiper(".vehicles__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

renderCars(CARS);
