export function createCategory(cardImage, title, index) {
  const col = document.createElement('div');
  col.classList.add('col', 'col-sm-6', 'col-lg-4', 'col-xl-3');
  col.setAttribute('data', index);

  const card = document.createElement('div');
  card.classList.add('card', 'category');

  const image = document.createElement('img');
  image.classList.add('card-img-top');

  image.src = `./data/${cardImage}`;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('title');
  cardTitle.innerHTML = title;
  cardBody.append(cardTitle);

  card.append(image);
  card.append(cardBody);

  col.append(card);
  document.querySelector('.cards').append(col);
}

export function createOffcanvasMenu(categoryName, num) {
  const menu = document.querySelector('.navbar-nav');
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navLink.innerHTML = categoryName;
  navItem.classList.add('nav-item');
  navLink.classList.add('nav-link');
  navLink.setAttribute('data', num);
  navLink.setAttribute('data-bs-dismiss', 'offcanvas');
  navLink.href = '#';
  navItem.append(navLink);
  menu.append(navItem);
}
