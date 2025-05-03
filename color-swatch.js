// Utility: compute luminance from RGB
function getLuminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

document.querySelectorAll('.color-box').forEach(box => {
  const hex = box.dataset.hex;
  const rgbArr = box.dataset.rgb.split(',').map(s => +s.trim());
  const hsv = box.dataset.hsv;
  const title = box.dataset.title || hex;

  // create and append title element
  const titleEl = document.createElement('span');
  titleEl.className = 'color-title';
  titleEl.textContent = title;
  box.appendChild(titleEl);

  // apply background color
  box.style.backgroundColor = hex;

  // decide text color based on luminance
  const [r, g, b] = rgbArr;
  const luminance = getLuminance(r, g, b);
  // threshold ~ 128 for light vs dark
  titleEl.style.color = luminance > 128 ? '#000' : '#fff';

  // build the pop-out menu
  const menu = document.createElement('div');
  menu.className = 'color-menu';
  [
    { label: 'HEX', value: hex },
    { label: 'RGB', value: `rgb(${rgbArr.join(', ')})` },
    { label: 'HSV', value: `hsv(${hsv})` }
  ].forEach(item => {
    const row = document.createElement('div');
    row.className = 'color-value';
    row.dataset.value = item.value;
    row.textContent = `${item.label}: ${item.value}`;
    menu.appendChild(row);
  });
  box.appendChild(menu);

  // copy utility
  function copy(text, el, restoreText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        const original = restoreText || el.textContent;
        el.textContent = 'Copied!';
        setTimeout(() => el.textContent = original, 800);
      });
  }

  // default box click: copy HEX
  box.addEventListener('click', e => {
    if (e.target.closest('.color-value')) return;
    copy(hex, titleEl, title);
  });

  // menu item clicks
  menu.querySelectorAll('.color-value').forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      copy(item.dataset.value, item);
    });
  });
});