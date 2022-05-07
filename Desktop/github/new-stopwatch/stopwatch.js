// creating variables for the respective unit of time.

let hr = 0;
let min = 0;
let sec = 0;
let count = 0; // this variable is basically the millisecond counter.

let timer = false;

// creating functions for the respective buttons i.e. start, stop and reset..
function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
// setting the all values to 0 so that the stopwatch can be reset on clicking the reset button.
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

// these variables cannot be accessed outside this function as it is a function scope, if these variable are again created outside the function block then there will be no problem on accessing them.

// created these variables for keeping the digits of the stopwatch in double digits.
    let hrString = hr;
    let minString = min;
    let secString = sec;
    let countString = count;

        if(hrString < 10){
            hrString = '0' + hrString;
        }
        if(minString < 10){
            minString = '0' + minString;
        }
        if(secString < 10){
            secString = '0' + secString;
        }
        if(countString < 10){
            countString = '0' + countString;
        }

document.getElementById('hr').innerHTML = hrString;
document.getElementById('min').innerHTML = minString;
document.getElementById('sec').innerHTML = secString;    
document.getElementById('count').innerHTML = countString;

}


function stopwatch(){
    if(timer == true){
        count = count + 1;

            if(count == 100){
                sec++;
                count = 0;
            }
            if(sec == 60){
                min++;
                sec = 0;
            }
            if(min == 60){
                hr++;
                min = 0;
            }

                // I have basically created this hrString, minString ,etc. for keeping the counter in double digits.
                let hrString = hr;
                let minString = min;
                let secString = sec;
                let countString = count;

                    if(hrString < 10){
                        hrString = '0' + hrString;
                    }
                    if(minString < 10){
                        minString = '0' + minString;
                    }
                    if(secString < 10){
                        secString = '0' + secString;
                    }
                    if(countString < 10){
                        countString = '0' + countString;
                    }
            
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;    
        document.getElementById('count').innerHTML = countString;

// the main concept of calling stopwatch() function in setTimeout function is to keep repeating the timer until it is stopped or resetted.
        setTimeout( 'stopwatch()', 10)
    }


}