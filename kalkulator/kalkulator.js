const animalButtons = document.querySelectorAll('.buttonKutya, .buttonMacska, .buttonHorse, .buttonGoat'); 
const calculateButton = document.querySelector('.calculateButton');
const valaszDiv = document.querySelector('.valasz');
let selectedAnimal = '';

animalButtons.forEach(button => {
  button.addEventListener('click', function() {
    animalButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedAnimal = button.dataset.animal; // Használjuk a data-animal attribútumot
    console.log('Selected animal:', selectedAnimal);
  });
});

calculateButton.addEventListener('click', function() {
  const weight = parseFloat(document.querySelector('#kilo').value);
  const age = document.querySelector('#kor').value;

  console.log('Weight:', weight); 
  console.log('Age:', age); 

  if (!selectedAnimal || isNaN(weight) || !age || age === 'valassz') {
    valaszDiv.textContent = 'Kérjük, válassza ki az állat típusát, adja meg a súlyát és az életkorát.';
    return;
  }

  let foodAmount = 0;

  switch (selectedAnimal) {
    case 'kutya':
      foodAmount = (age === 'kolyok') ? weight * 50 : 
                   (age === 'felnott') ? weight * 45 : 
                   (age === 'idos') ? weight * 40 : 0;
      break;
    case 'macska':
      foodAmount = (age === 'kolyok') ? weight * 30 : 
                   (age === 'felnott') ? weight * 28 : 
                   (age === 'idos') ? weight * 25 : 0;
      break;
    case 'lo':
      foodAmount = (age === 'kolyok') ? weight * 60 : 
                   (age === 'felnott') ? weight * 55 : 
                   (age === 'idos') ? weight * 50 : 0;
      break;
    case 'kecske':
      foodAmount = (age === 'kolyok') ? weight * 40 : 
                   (age === 'felnott') ? weight * 38 : 
                   (age === 'idos') ? weight * 35 : 0;
      break;
    default:
      foodAmount = 0;
  }

  if (foodAmount === 0) {
    valaszDiv.textContent = 'Hibás életkor vagy állat típus. Kérjük, válassza ki megfelelően!';
  } else {
    valaszDiv.textContent = `Az állatnak szükséges ételmennyiség: ${foodAmount} gramm.`;
  }
});
