    /* -------------------- Debounce -------------------- */

    function debounce(fn, delay) {
      let timerId;

      return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    }

    const debounceOutput = document.getElementById("debounceOutput");
    const debounceInput = document.getElementById("debounceInput");

    const handleDebounce = debounce(function (event) {
      debounceOutput.textContent = event.target.value;
      console.log("Debounced:", event.target.value);
    }, 500);

    debounceInput.addEventListener("input", handleDebounce);


    /* -------------------- Throttle -------------------- */

    function throttle(fn, limit) {
      let lastExecution = 0;

      return function (...args) {
        const now = Date.now();

        if (now - lastExecution >= limit) {
          lastExecution = now;
          fn.apply(this, args);
        }
      };
    }

    const throttleCount = document.getElementById("throttleCount");
    const throttleBtn = document.getElementById("throttleBtn");

    let count = 0;

    const handleThrottle = throttle(function () {
      count++;
      throttleCount.textContent = count;
      console.log("Throttled click");
    }, 1000);

    throttleBtn.addEventListener("click", handleThrottle);
