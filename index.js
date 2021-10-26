function debounce (fn,delay,flag) {
    let time = null ;

    return function() {
        clearTimeout(time);
        time = setTimeout(()=>{
            fn();
        },delay)
    }
}