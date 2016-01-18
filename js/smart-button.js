/* global KeyEvent */
(function (exports) {
'use strict';

function initSmartButton(button) {

  function handleEvent (evt) {
    switch(evt.type) {
      case 'mousedown':
      case 'touchstart':
        this.classList.add('pressed');
        break;
      case 'keydown':
        if (evt.keyCode === KeyEvent.DOM_VK_RETURN) {
          this.classList.add('pressed');
        }
        break;
      case 'mouseup':
      case 'touchend':
        this.classList.remove('pressed');
        this.classList.add('released');
        break;
      case 'keyup':
        if (evt.keyCode === KeyEvent.DOM_VK_RETURN) {
          this.classList.remove('pressed');
          this.classList.add('released');
          this.click();
        }
        break;
      case 'transitionend':
        if (this.classList.contains('released')) {
          this.classList.remove('released');
        }
        break;
      case 'focus':
        this.classList.add('focused');
        break;
      case 'blur':
        this.classList.remove('pressed');
        this.classList.remove('released');
        this.classList.remove('focused');
    }
  };

  button.addEventListener('mousedown', handleEvent);
  button.addEventListener('mouseup', handleEvent);
  button.addEventListener('touchstart', handleEvent);
  button.addEventListener('touchend', handleEvent);
  button.addEventListener('keydown', handleEvent);
  button.addEventListener('keyup', handleEvent);
  button.addEventListener('focus', handleEvent);
  button.addEventListener('blur', handleEvent);
  button.addEventListener('transitionend', handleEvent);

  // Make sure become focusable
  button.setAttribute('tabIndex', -1);

  return button;
}

exports.initSmartButton = initSmartButton;

})(window);
