const allquestions=document.querySelectorAll(".mainquestion");


allquestions.forEach((question) => {
    const hiddenside=question.childNodes[3];
    console.log(question.childNodes);
    
    question.addEventListener("click", () => {
        if (hiddenside.style.visibility === "collapse")  {
            for (var i=0; i<allquestions.length; i++) {
                allquestions[i].childNodes[3].style.visibility="collapse";
            }
            hiddenside.style.visibility="visible";
        } else {
            hiddenside.style.visibility="collapse";
        }
    })
})
