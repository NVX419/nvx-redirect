document.getElementById('buy-now-btn').addEventListener('click', () => {
  // رابط الواتساب مع رقم العميل
  const whatsappURL = 'https://api.whatsapp.com/send/?phone=201011580685&text=أنا%مهتم%بعطر%Le%Male%Elixir%من%Loai%Perfumes&app_absent=0&wame_ctl=1';
  window.open(whatsappURL, '_blank');
});
