(function ($, window, document, undefined) {
  'use strict';
  $(function () {
    (async () =>{
      Config.init();
      await Game.init();
      Grid.init();
    })()
  });
})(jQuery, window, document);
