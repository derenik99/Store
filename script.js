function updateUser() {
  const userMoney = document.getElementsByClassName('UserMoney')[0];
  userMoney.innerHTML = user.money;

  const userItems = document.getElementsByClassName('UserItems')[0];
  userItems.innerHTML = user.myItems.length;
}

function updateStoreItem(item) {
  const elementName = `${item.name}-Count`;
  console.log(elementName)
  const itemCount = document.getElementById(elementName);
  itemCount.innerHTML = item.count;
}

function buyItem(item, element) {
  // TODO :: use element instead of item ids

  // use user object
  if (item.count === 0) {
    return alert(`Store doesn\'t have ${item.name} right now!`);
  }

  if (user.money < item.price) {
    return alert(`You don't have enough money`);
  }

  user.money -= item.price;
  user.myItems.push(item);
  item.count -= 1;

  updateUser();
  updateStoreItem(item)
}

function createStoreItem(item) {
  const e = document.createElement('div');
  e.setAttribute('class', 'StoreItem');

  const name = document.createElement('p');
  name.setAttribute('class', 'Name');
  name.innerHTML = item.name;
  e.appendChild(name);

  const image = document.createElement('img');
  image.setAttribute('class', 'Image');
  image.src = item.image;
  e.appendChild(image);

  const price = document.createElement('p');
  price.setAttribute('class', 'Price');
  price.innerHTML = item.price;
  e.appendChild(price);

  const count = document.createElement('p');
  count.setAttribute('class', 'Count');
  count.setAttribute('id', `${item.name}-Count`);
  count.innerHTML = item.count;
  e.appendChild(count);

  const buy = document.createElement('button');
  buy.onclick = () => buyItem(item, e);
  buy.setAttribute('class', 'Buy');
  buy.innerHTML = 'Buy';
  e.appendChild(buy);

  return e;
}

const item = {
  name: 'CocaCola',
  image: './images/CocaCola.png',
  count: 4,
  price: 300
};

function fillStore() {
  const StoreItems = document.getElementById('StoreItems');
  storeItems.forEach(item => {
    const storeElement = createStoreItem(item);
    StoreItems.appendChild(storeElement);
  });
}

function fillUser() {
  // user object
  const e = document.getElementById('User');

  const name = document.createElement('p');
  name.setAttribute('class', 'UserName');
  name.innerHTML = `Hi ${user.name}`;
  e.appendChild(name);

  const userItems = document.createElement('p');
  userItems.setAttribute('class', 'UserItems');
  userItems.innerHTML = user.myItems.length;
  e.appendChild(userItems);

  const userMoney = document.createElement('p');
  userMoney.setAttribute('class', 'UserMoney');
  userMoney.innerHTML = user.money;
  e.appendChild(userMoney);

  return e;
}

fillStore();
fillUser();