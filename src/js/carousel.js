const carousel = document.querySelector('.grid-carousel');
const slides = carousel.querySelectorAll('.grid-carousel__item');
const leftButton = carousel.querySelector('.js-left');
const rightButton = carousel.querySelector('.js-right');

const getOrder = (elem) => {
  const style = getComputedStyle(elem);
  const orderValue = style.order;
  const order = parseInt(orderValue, 10);
  return order;
};

const featuredItem = (order, slide) => {
  if (order === 3) {
    slide.classList.add('featured');
  } else {
    slide.classList.remove('featured');
  }
};

const moveRight = () => {
  slides.forEach((slide) => {
    let order = getOrder(slide);

    if (order < slides.length) {
      order += 1;
      slide.style.order = order;
    } else {
      slide.style.order = 1;
    }

    featuredItem(order, slide);
  });
};

const moveLeft = () => {
  slides.forEach((slide) => {
    let order = getOrder(slide);

    if (order > 1) {
      order -= 1;
      slide.style.order = order;
    } else {
      slide.style.order = slides.length;
    }

    featuredItem(order, slide);
  });
};

rightButton.addEventListener('click', moveRight);
leftButton.addEventListener('click', moveLeft);
