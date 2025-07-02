const calculator = document.getElementById("calculator");
const result = document.getElementById("result");


calculator.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', function(){
        if(button.innerHTML === "C"){
            result.innerHTML = "0"
        }
        else if(button.innerHTML !== "="){
            if(result.innerHTML === "0"){
            if(!/^\d/.test(button.innerHTML)){
                alert("You can't use an operator first");
            }
            else{
                result.innerHTML = button.innerHTML;
            }
                
            }
            else{
                result.innerHTML += button.innerHTML;
            }
        }
        else{
            if(!/^\d/.test(result.innerHTML[0])){
                result.innerHTML = "Error";
            }
            else{
                result.innerHTML = eval(result.innerHTML);
            }
            
        }
    })
});