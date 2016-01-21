/* global FTEWizard
*/
'use strict';
(function(exports) {

  var tutorialContainer = document.body;

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
