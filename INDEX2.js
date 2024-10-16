document.querySelectorAll('.railway-button').forEach(button => {
  button.addEventListener('click', function() {
    alert(this.textContent + ' button clicked!');
  });
});

