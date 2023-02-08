const counters = document.querySelectorAll('.number');

counters.forEach((counter) => {
    // console.log(counter);
    counter.innerHTML = 0;
    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        // console.log(typeof targetCount);
        const StartingCount = Number(counter.innerHTML);
        const incr = targetCount/100;
        if(StartingCount<targetCount){
            counter.innerHTML = ` ${Math.round(StartingCount + incr)}`;
            setTimeout(updateCounter, 10)
        }else{
            counter.innerHTML = targetCount;
        }
    }
    updateCounter();
})