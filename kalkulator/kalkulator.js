const animalButtons = document.querySelectorAll('.buttonKutya, .buttonMacska'); 
const calculateButton = document.querySelector('.calculateButton');
const valaszDiv = document.querySelector('.valasz');
let selectedAnimal = '';
let weight = 0;
let age = '';

animalButtons.forEach(button => {
  button.addEventListener('click', function() {
    // First, remove the 'selected' class from all animal buttons
    animalButtons.forEach(btn => btn.classList.remove('selected'));

    // Then, toggle the 'selected' class on the clicked button
    button.classList.add('selected');
    selectedAnimal = button.value;
    console.log('Selected animal:', selectedAnimal); // Debugging log
  });
});

calculateButton.addEventListener('click', function() {
  weight = document.querySelector('#kilo').value;
  age = document.querySelector('#kor').value;

  console.log('Weight:', weight); // Debugging log
  console.log('Age:', age); // Debugging log

  if (!selectedAnimal || !weight || !age || age === 'valassz') {
    valaszDiv.textContent = 'Kérjük, válassza ki az állat típusát, adja meg a súlyát és az életkorát.';
    return;
  }

  // Perform calculations without using eval
  let result;
  if (selectedAnimal === 'kutya') {
    result = calculateDogFood(weight, age);
  } else if (selectedAnimal === 'macska') {
    result = calculateCatFood(weight, age);
  }

  valaszDiv.textContent = `Az ajánlott napi ételmennyiség: ${result} gramm.`;
});

function calculateDogFood(weight, age) {
  // Example calculation for dog food
  if (age === 'kolyok') {
    return weight * 10;
  } else if (age === 'felnott') {
    return weight * 8;
  } else if (age === 'idos') {
    return weight * 6;
  }
}

function calculateCatFood(weight, age) {
  // Example calculation for cat food
  if (age === 'kolyok') {
    return weight * 5;
  } else if (age === 'felnott') {
    return weight * 4;
  } else if (age === 'idos') {
    return weight * 3;
  }
}