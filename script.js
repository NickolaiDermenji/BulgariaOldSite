const openModalBtn = document.getElementById('openSchedule');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', function() {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', function() {
  modal.classList.remove('show');
});
