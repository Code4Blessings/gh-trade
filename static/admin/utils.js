function __select(selector) {
  return document.querySelector(selector);
}

function __selectAll(selector) {
  return document.querySelectorAll(selector);
}

function __toggleClass(element, className) {
  return element.classList.toggle(className);
}

function __addClass(element, className) {
  return element.classList.add(className);
}

function __removeClass(element, className) {
  return element.classList.remove(className);
}

function __delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function __click(element, cb) {
  return element.addEventListener("click", function(e) {
    cb(e);
  });
}

function __selectClick(selector, cb) {
  document.querySelector(selector).addEventListener("click", e => {
    cb(e);
  });
}
