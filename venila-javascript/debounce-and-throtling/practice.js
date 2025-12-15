const debounceOutPut = document.getElementById("debounceOutput");
const debounceInput = document.getElementById("debounceInput");

const debounce = (fn, delay) => {
    let timerId;

    return function(...args){
        clearTimeout(timerId);

        timerId = setTimeout(()=>{
            fn.apply(this, args);
        },delay)
    }
}

const handleDebounce = debounce(function(event){
    debounceOutPut.textContent = event.target.value;
},500)

debounceInput.addEventListener("input", handleDebounce)




const throttleBtn = document.getElementById("throttleBtn");
const throttleCount = document.getElementById("throttleCount");
let count = 0;

const throttle = (fn, limit) => {
    let lastExecution = 0;

    return function(...args){
        const now = Date.now();
        if(now-lastExecution >= limit){
            lastExecution = now;
            fn.apply(this, args);
        }
    }
}

const handleThrottle = throttle(function(){
    count++;
    throttleCount.textContent = count;
},1000)

throttleBtn.addEventListener("click", handleThrottle);