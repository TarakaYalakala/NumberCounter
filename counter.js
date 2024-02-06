let value = 0;

      function inc() {
        value++;
        document.getElementById('counter').innerHTML = value;
      }
      function reset() {
        value = 0;
       document.getElementById('counter').innerHTML = value;
      }
      function dec() {
        value--;
        document.getElementById('counter').innerHTML = value;
      }
    