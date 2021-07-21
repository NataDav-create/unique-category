const categories = ['all', ...new Set(menu.map(item => item.category))];

const result = document.querySelector('.result');
result.innerHtml = categories.map(category => {
  return `<button>${category}</button>`
}
  ).join('');
