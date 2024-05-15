const Btn = document.getElementById('btn');
const h2Text = document.getElementById('text');
Btn.addEventListener('click', () => {
  h2Text.textContent = 'ボタンをクリックしました';
});