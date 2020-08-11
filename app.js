const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

// Add open event to each image
previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    original.classList.add("open");
    
    // Dynamic change image
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./img/full/${originalSrc}`
    // Change image caption
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

// Close image popup
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  };
});