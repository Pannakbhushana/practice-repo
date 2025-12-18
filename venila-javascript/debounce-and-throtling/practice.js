const debounceInput = document.getElementById("debounceInput");
const debounceOutput = document.getElementById("debounceOutput");

const debounce = (fn, delay) => {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}
const handleDebounce = debounce(function(event, name){
    debounceOutput.textContent = event.target.value + " "+name
},500)

debounceInput.addEventListener("input", (event)=>{
    handleDebounce(event, "mishra")
})



const throttleCount = document.getElementById("throttleCount");
const throttleBtn = document.getElementById("throttleBtn");

const throttle = (fn, limit) => {
    let lastExecution = 0;

    return function (...args){
       const now = Date.now();
       if(now-lastExecution >= limit){
          lastExecution = now;
          fn(...args);
       }
    }
}

let count = 0;
const handleThrottle = throttle((str)=>{
    count++;
    throttleCount.textContent = str +" " + count
},1000)

throttleBtn.addEventListener("click", (event)=>{
    handleThrottle("your count is")
})