const mainTextInput = document.getElementById('mainText');
const subTextInput = document.getElementById('subText');
const generateBtn = document.getElementById('generateBtn');
const slidesContainer = document.getElementById('slidesContainer');

const mainFontSizeInput = document.getElementById('mainFontSize');
const subFontSizeInput = document.getElementById('subFontSize');
const mainTextColorInput = document.getElementById('mainTextColor');
const subTextColorInput = document.getElementById('subTextColor');
const bgColorInput = document.getElementById('bgColor');

generateBtn.addEventListener('click', () => {
  slidesContainer.innerHTML = '';

  const mainText = mainTextInput.value.trim();
  const subText = subTextInput.value.trim();

  if (!mainText && !subText) return;

  const mainLines = mainText.split('\n').filter(l => l.trim() !== '');
  const subLines = subText.split('\n').filter(l => l.trim() !== '');

  const maxSlides = Math.max(mainLines.length, subLines.length);

  for (let i = 0; i < maxSlides; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundColor = bgColorInput.value;

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
    mainDiv.style.fontSize = mainFontSizeInput.value + 'px';
    mainDiv.style.color = mainTextColorInput.value;
    mainDiv.innerText = mainLines[i] || '';

    const subDiv = document.createElement('div');
    subDiv.classList.add('sub');
    subDiv.style.fontSize = subFontSizeInput.value + 'px';
    subDiv.style.color = subTextColorInput.value;
    subDiv.innerText = subLines[i] || '';

    slide.appendChild(mainDiv);
    slide.appendChild(subDiv);
    slidesContainer.appendChild(slide);

    slide.addEventListener('click', () => downloadSlide(slide, `slide-${i + 1}.png`));
  }
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

