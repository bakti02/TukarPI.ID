// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
  
  // Close when clicking outside
  document.addEventListener('click', function closeMenu(e) {
    if (!menu.contains(e.target) && e.target.id !== 'mobile-menu-button') {
      menu.classList.add('hidden');
      document.removeEventListener('click', closeMenu);
    }
  });
});

// Exchange Calculator
const piAmount = document.getElementById('pi-amount');
const piRange = document.getElementById('pi-range');
const idrAmount = document.getElementById('idr-amount');

const updateCalculation = () => {
  const piValue = piAmount.value;
  const idrValue = piValue * 1500;
  idrAmount.textContent = new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(idrValue);
};

piAmount.addEventListener('input', function() {
  piRange.value = this.value;
  updateCalculation();
});

piRange.addEventListener('input', function() {
  piAmount.value = this.value;
  updateCalculation();
});

// Initialize
updateCalculation();

// Better mobile touch experience
document.querySelectorAll('a, button, input, [role="button"]').forEach(el => {
  el.classList.add('touch-target');
});
