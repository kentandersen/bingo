/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License

(function ($) {

  $.fn.shuffleLetters = function (prop) {

    var options = $.extend({
      "step": 8,			// How many times should the letters be changed
      "fps": 25,			// Frames Per Second
      "text": "", 			// Use this text instead of the contents
      "callback": function () { }	// Run once the animation is complete
    }, prop)

    return this.each(function () {

      var el = $(this),
        str = "";


      // Preventing parallel animations using a flag;

      if (el.data('animated')) {
        return true;
      }

      el.data('animated', true);


      if (options.text) {
        str = options.text.split('');
      }
      else {
        str = el.text().split('');
      }

      // The types array holds the type for each character;
      // Letters holds the positions of non-space characters;

      var types = [],
        letters = [];

      // Looping through all the chars of the string

      for (var i = 0; i < str.length; i++) {

        var ch = str[i];

        if (ch == " ") {
          types[i] = "space";
          continue;
        }
        else if (/[a-z]/.test(ch)) {
          types[i] = "lowerLetter";
        }
        else if (/[A-Z]/.test(ch)) {
          types[i] = "upperLetter";
        }
        else {
          types[i] = "symbol";
        }

        letters.push(i);
      }

      el.html("");

      // Self executing named function expression:

      (function shuffle(start) {

        // This code is run options.fps times per second
        // and updates the contents of the page element

        var i,
          len = letters.length,
          strCopy = str.slice(0);	// Fresh copy of the string

        if (start > len) {

          // The animation is complete. Updating the
          // flag and triggering the callback;

          el.data('animated', false);
          options.callback(el);
          return;
        }

        // All the work gets done here
        for (i = Math.max(start, 0); i < len; i++) {

          // The start argument and options.step limit
          // the characters we will be working on at once

          if (i < start + options.step) {
            // Generate a random character at thsi position
            strCopy[letters[i]] = randomChar(types[letters[i]]);
          }
          else {
            strCopy[letters[i]] = "";
          }
        }

        el.text(strCopy.join(""));

        setTimeout(function () {

          shuffle(start + 1);

        }, 1000 / options.fps);

      })(-options.step);


    });
  };

  
})(jQuery);
*/

function randomChar(char) {
    if (char === " ") return char
    const random = (pool) => pool[Math.floor(Math.random() * pool.length)];

    if (/[a-z]/.test(char)) {
        return random('abcdefghijklmnopqrstuvwxyz0123456789');
    }
    if (/[A-Z]/.test(char)) {
        return random('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
    }
    return random(',.?/\\(^)![]{}*&^%$#\'\"');
}

function randomize(text) {
    return [...text].map(randomChar).join('')
}



export default function shuffle(el, text, options) {
    if (!el) {
        return Promise.reject('no el found')
    }

    const _options = {
        "fps": 15,			// Frames Per Second
        ...options,
      }

    return new Promise((resolve) => {
        // const orgLegnth = Math.max(26, name.length)
        // const text = Array(orgLegnth).join("	").splice(name.length / 2 - ((orgLegnth / 2) + name.length), name.length, name);
        const { length } = text

        const shuffle = (start = 0) => {
            if (start > length) {   
                // The animation is complete. Updating the
                return resolve()
            }
            

            const index = Math.max(start, 0);

            const unmasked = text.substring(0, index)
            const masked = randomize(text.substring(index))

            el.textContent = unmasked + masked;

            setTimeout(() => {
                shuffle(start + 1);
            }, 1000 / _options.fps);
        }
        
        shuffle(-20)

        // var i,
        // len = letters.length,
        // strCopy = str.slice(0);	// Fresh copy of the string
        



        // // All the work gets done here
        // for (i = Math.max(start, 0); i < len; i++) {

        //     // The start argument and options.step limit
        //     // the characters we will be working on at once
  
        //     if (i < start + options.step) {
        //       // Generate a random character at thsi position
        //       strCopy[letters[i]] = randomChar(types[letters[i]]);
        //     }
        //     else {
        //       strCopy[letters[i]] = "";
        //     }
        //   }


        //   setTimeout(function () {

        //     shuffle(start + 1);
  
        //   }, 1000 / options.fps);
    })

}
