import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  // Assuming our container doesn't have an element with id 'dev-products'
  const el = document.querySelector('#dev-products');
  if (el) {
    // We are running in isolation
    mount(el);
  }
}

export { mount };
