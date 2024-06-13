function addImage(src) {
  // window.quantity_img += 1;
  const ul = document.querySelector('.images_container-list');
  document.querySelector('.btn_pin').style.display = 'none';
  document.querySelector('.images_container').style.display = 'flex';

  const newLi = document.createElement('li');

  const newDiv = document.createElement('div');
  newDiv.className = 'images_container-block';
  newDiv.textContent = 'New Item';
  newLi.appendChild(newDiv);

  ul.insertBefore(newLi, ul.firstChild);
}

export default function addImageButtonHandler() {
  var img = "";

  const pinButton = document.querySelector('.btn_pin');
  pinButton.addEventListener('click', () => {
    addImage(img);
  });

}


