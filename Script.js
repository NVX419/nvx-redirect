document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".install-btn");

  btn.addEventListener("click", () => {
    btn.innerText = "⏳ جاري التحضير...";
    setTimeout(() => {
      btn.innerText = "تثبيت التطبيق";
    }, 2000);
  });
});
