document.addEventListener("DOMContentLoaded", ()=>{


    /* importing all the HTML elements I'll need*/

    const button = document.getElementById("subscribe"); 
    const input = document.getElementById("insert-email");
    const successContainer = document.getElementById("hidden");
    const mainContainer = document.getElementById("newsletter-form");
    const emailForm = document.getElementById("form");
    const buttonDismiss = document.getElementById("dismiss");

//when the submit button is clicked, it will check if everything is valid, and if valid, it will show the success box

    button.addEventListener("click", () => {
        let inputText = input.value;

        if(inputText === "" ){
            errorInput();
            console.log("input è vuoto");
            return;
        }
        if(inputText.indexOf("@") === -1){
            errorInput();
            console.log("la @ non è inclusa");
            return;
        }
        let x = inputText.split("@");
        let a = x[0];
        let b = x[1];

        if(a === ""){
            errorInput();
            console.log("non c'è nulla prima della chiocciola");
            return;
        }
        if(b === ""){
            errorInput();
            console.log("non c'è nulla dopo la chiocciola");
            return;
        }
        if(b.indexOf(".") === -1){
            errorInput();
            console.log("il punto non è incluso");
            return;
        }
        let y = inputText.split(".");
        let d = y[1];        
    
        if(b.startsWith(".")){
            errorInput();
            console.log("non puoi mettere il punto dopo la chiocciola");
            return;
        }
        if(d === ""){
            errorInput();
            console.log("non c'è nulla dopo il punto");
            return;
        }else{okToProceed();}
    });
     
 
//when the dismiss button is clicked, the newsletter box will be shown again instead of the success box

    buttonDismiss.addEventListener("click", ()=>{
        event.preventDefault();
        successContainer.style.display = "none";
        mainContainer.style.display = "flex";
    })

//a function that will modify the newsletter box with an error message

    function errorInput() {
        event.preventDefault();
        input.setAttribute("class", "button-error"); 
        errorMessage = document.createElement("span");
        errorMessage.textContent = "Valid email required";
        errorMessage.setAttribute("class", "error-message");
        emailForm.appendChild(errorMessage);
    }

//a function that will show the success box instead of the newsletter box

    function okToProceed() {
        event.preventDefault();
        mainContainer.style.display = "none";
        successContainer.style.display = "block";
        input.value = "";
    }

}); 