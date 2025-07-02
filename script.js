const calculator = document.getElementById("calculator");
const result = document.getElementById("result");


calculator.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', function(){
        if(button.innerHTML === "C"){
            result.innerHTML = "0"
        }
        else if(button.innerHTML !== "="){
            if(result.innerHTML === "0"){
                result.innerHTML = button.innerHTML;
            }
            else{
                result.innerHTML += button.innerHTML;
            }
        }
        else{
                try{
                    result.innerHTML = eval(result.innerHTML); 
                }
                catch{
                    result.innerHTML = "Error";
                }             
        }
    })
});