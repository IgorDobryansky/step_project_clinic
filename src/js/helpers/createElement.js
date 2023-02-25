export function createElement(tagName, className) {
  const htmlElement = document.createElement(tagName);
  if (!className) return htmlElement;
  if (Array.isArray(className)) htmlElement.classList.add(...className);
  else htmlElement.classList.add(className);
  return htmlElement;
}
