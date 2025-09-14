const textInput = document.getElementById('textInput');
const generateBtn = document.getElementById('generateBtn');
const slidesContainer = document.getElementById('slidesContainer');
const fontSizeInput = document.getElementById('fontSize');
const textColorInput = document.getElementById('textColor');
const bgColorInput = document.getElementById('bgColor');

generateBtn.addEventListener('click', () => {
  slidesContainer.innerHTML = ''; // Clear previous slides
  const text = textInput.value.trim();
  if (!text) return;

  const paragraphs = text.split('\n').filter(p => p.trim() !== '');

  paragraphs.forEach((para, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundColor = bgColorInput.value;
    slide.style.color = textColorInput.value;
    slide.style.fontSize = fontSizeInput.value + 'px';
    slide.innerText = para;

    slidesContainer.appendChild(slide);

    // Optional: allow downloading each slide as an image
    slide.addEventListener('click', () => downloadSlide(slide, `slide-${index + 1}.png`));
  });
});

// Function to download a slide as an image
function downloadSlide(slide, filename) {
  html2canvas(slide).then(canvas => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL();
    link.click();
  });
}
