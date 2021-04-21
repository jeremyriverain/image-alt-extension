window.addEventListener("load", checkAltAttribute);

async function checkAltAttribute() {
  const images = document.querySelectorAll("img");

  let imgWithoutAlt = 0
  images.forEach((img) => {
    const alt = img.getAttribute("alt");
    if (!alt || !alt.length) {
      img.style.border = "3px solid red";
      imgWithoutAlt++
    }
  });

  if (imgWithoutAlt) {
    await chrome.runtime.sendMessage({ type: "setBadge", value: imgWithoutAlt.toString() })
  }

}
