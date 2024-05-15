const Btn = document.getElementById('btn');
const h2Text = document.getElementById('text');

Btn.addEventListener('click', () => {
  setTimeout(() => {
    h2Text.textContent = 'ボタンをクリックしました';
  },2000);
});