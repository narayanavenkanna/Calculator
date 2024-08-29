let display = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons); 
let string = '';

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if (event.target.textContent === 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        } else if (event.target.textContent === 'AC') {
            string = '';
            display.value = string;
        } else if (event.target.textContent === '=') {
            string = eval(string)
            display.value = string
        }else if (event.target.textContent === 'sin') {
            display.value =Math.sin(string);
        }else if (event.target.textContent === 'cos') {
            display.value =Math.cos(string);
        }else if (event.target.textContent === 'tan') {
            display.value =Math.tan(string);
        }else if (event.target.textContent === 'pow') {
            display.value =Math.pow(string,2);
        }else if (event.target.querySelector('img') && event.target.querySelector('img').alt === '') {
            if (event.target.querySelector('img').src.includes('pi-mathematical-constant-symbol')) {
                string += '3.14159265359';
                display.value = string;
            } else if (event.target.querySelector('img').src.includes('square-root-mathematical-symbol')) {
                string = Math.sqrt(eval(string)).toString(); 
                display.value = string;
            }
        }else if (event.target.textContent === 'log') {
            display.value =Math.log(string);
        }else if (event.target.textContent === 'e') {
            display.value =2.71828182846;
        }else if (event.target.textContent === 'x!') {
            var i, num, f;
            f=1
            num=display.value;
            for(i=1; i<=num; i++){
                f=f*i;
            }
            i = i -1; 
            display.value = f;
        }else {
            string += event.target.textContent;
            display.value = string;
        }
    })
})