let displays = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons); // give array of buttons
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        let val = e.target.innerHTML;
        if (val === '=') {
            string = eval(string);  // eval function evaluate the string as a code
            displays.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            displays.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            displays.value = string;
        } 

        else
        {
        string +=val;
        displays.value = string; //show whatever is inside string in the input box
        }

})
})