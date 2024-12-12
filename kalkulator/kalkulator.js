const buttons = document.querySelectorAll('button'); 

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // First, remove the 'selected' class from all buttons
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Then, toggle the 'selected' class on the clicked button
    button.classList.add('selected');
  });
});
