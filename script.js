let signUpBtn = document.querySelector(".signUp-btn");
let signInBtn = document.querySelector(".signIn-btn");
let main = document.getElementById("main");

signUpBtn.addEventListener("click",()=>{
    main.classList.add("right-panel-active");
});

signInBtn.addEventListener("click",()=>{
    main.classList.remove("right-panel-active");
});
