const btn = document.getElementById('calculate');

btn.addEventListener('click', () => {
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

  if (height == '' || weight == '') {
    alert("Заполните поля");
    return;
  }

  height = height / 100;
  let BMI = (weight / (height * height));

  BMI = BMI.toFixed(2);

  document.querySelector('#result').innerHTML = BMI;

  let verdict = '';
  if (BMI < 18.5) {
    verdict = 'Недовес';
  }
  if (BMI >= 18.5 && BMI < 25) {
    verdict = 'Норма';
  }
  if (BMI >= 25 && BMI < 30) {
    verdict = 'Перевес';
  }
  if (BMI >= 30) {
    verdict = 'Ожирение';
  }

  document.querySelector('.comment').innerHTML = `Вердикт: <span id="comment">${verdict}</span>`;

});
