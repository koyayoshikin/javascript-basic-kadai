const cngBtn = document.getElementById('btn');

cngBtn.addEventListener('click', () => {
  const txtObj = document.getElementById('text');
  txtObj.textContent = "ボタンをクリックしました。";
});