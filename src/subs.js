const countrySelect = document.getElementById("countrySelect");
const priceSpanStart = document.getElementById("priceStarter");
const priceSpanPop = document.getElementById("pricePop");
const priceSpanPlat = document.getElementById("pricePlat")

countrySelect.addEventListener("change", function() {
  const selectedValue = countrySelect.value;
  if (selectedValue === "uk") {
    priceSpanStart.innerText = "8.87£";
    priceSpanPop.innerText = "17.76£";
    priceSpanPlat.innerText = "21.12£";
  } else if (selectedValue === "usa") {
    priceSpanStart.innerText = "10.67$";
    priceSpanPop.innerText = "21.35$";
    priceSpanPlat.innerText = "25.40$"
  } else if (selectedValue === "Suisse") {
    priceSpanStart.innerText = "CHF9.87"
    priceSpanPop.innerText = "CHF19.76"
    priceSpanPlat.innerText = "CHF23.51"
  } else {
    priceSpanStart.innerText = "9,99€";
    priceSpanPop.innerText = "19,99€";
    priceSpanPlat.innerText = "23,78€";
  }
});