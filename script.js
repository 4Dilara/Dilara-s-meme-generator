document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("meme-form");
  const topTextInput = document.getElementById("top-text");
  const bottomTextInput = document.getElementById("bottom-text");
  const imageUrlInput = document.getElementById("image-url");
  const gallery = document.getElementById("meme-gallery");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validation (HTML5 required handles this, but double-check)
    if (!topTextInput.value.trim() || !bottomTextInput.value.trim() || !imageUrlInput.value.trim()) {
      alert("Please fill out all fields!");
      return;
    }

    // Create meme container
    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    // Meme image
    const img = document.createElement("img");
    img.src = imageUrlInput.value.trim();
    img.alt = "Meme Image";
    memeDiv.appendChild(img);

    // Top text
    const topText = document.createElement("div");
    topText.classList.add("meme-text", "top");
    topText.innerText = topTextInput.value;
    memeDiv.appendChild(topText);

    // Bottom text
    const bottomText = document.createElement("div");
    bottomText.classList.add("meme-text", "bottom");
    bottomText.innerText = bottomTextInput.value;
    memeDiv.appendChild(bottomText);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.title = "Delete Meme";
    deleteBtn.addEventListener("click", function () {
      memeDiv.remove();
    });
    memeDiv.appendChild(deleteBtn);

    // Add meme to gallery
    gallery.appendChild(memeDiv);

    // Clear form fields
    form.reset();
  });
});