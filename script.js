// Money app — basic interactivity
document.addEventListener('DOMContentLoaded', function () {
  var screen = document.getElementById('screen');
  var eyeBtn = document.getElementById('eyeBtn');
  var lockedPill = document.getElementById('lockedPill');
  var lockLabel = document.getElementById('lockLabel');
  var addMoneyBtn = document.getElementById('addMoneyBtn');
  var withdrawBtn = document.getElementById('withdrawBtn');
  var searchBtn = document.getElementById('searchBtn');

  // Toggle hiding the balance / savings amounts
  eyeBtn.addEventListener('click', function () {
    screen.classList.toggle('balance-hidden');
  });

  // Toggle Locked / Unlocked state on the pill
  lockedPill.addEventListener('click', function () {
    var isLocked = lockLabel.textContent.trim() === 'Locked';
    lockLabel.textContent = isLocked ? 'Unlocked' : 'Locked';
  });

  // Placeholder handlers for the action buttons
  addMoneyBtn.addEventListener('click', function () {
    console.log('Add money tapped');
  });

  withdrawBtn.addEventListener('click', function () {
    console.log('Withdraw tapped');
  });

  searchBtn.addEventListener('click', function () {
    console.log('Search tapped');
  });
});
