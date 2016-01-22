/* global FTEWizard
*/
'use strict';
(function(exports) {

  var tutorialContainer = document.body;

  // XXX: Bug 1228927.
  // These buttons come from smart-button web components
  // but they are supported only for certified apps in v2.5.
  // We should change them back to web components once we can use them.
  var smartButtons = Array.prototype.slice.call(
    tutorialContainer.querySelectorAll('.smart-button'));
  smartButtons.forEach(btn => window.initSmartButton(btn));

  var tutorial = new FTEWizard('castingTutorial');
  tutorial.init({
    container: tutorialContainer,
    pageClass: 'slide',
    buttonsClass: 'slide-button',
    launchEveryTime: true,
    propagateKeyEvent: true,
    onfinish: function () {
      // Rewrite the location to trigger the mozbrowserlocationchange event
      // to let the outer app know user finishes this tutorial
      window.location.href = window.location.href + '#finished';
    }.bind(tutorial)
  });

  var keyNavAdapter = new KeyNavigationAdapter();
  keyNavAdapter.init();
  keyNavAdapter.on('esc-keyup', function () {
    tutorial.goPrev();
  });

  exports.tutorial = tutorial;

})(window);
