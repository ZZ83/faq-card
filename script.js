const questions =  document.querySelectorAll(".faq");
const answers   =  document.querySelectorAll(".faq__answer");
questions.forEach( question => {
    question.addEventListener( 'click', () => {
        if(question .lastElementChild.classList.contains("hide-answer")) {
            answers.forEach( answer => {
                answer.classList.remove("show-answer");
                answer.classList.add("hide-answer");
                answer.parentNode.firstElementChild.firstElementChild.style.fontWeight = "400";
                answer.parentNode.firstElementChild.lastElementChild.firstElementChild.style.transform = "rotate(0deg)";
            });
            question.lastElementChild.classList.remove("hide-answer");
            question.lastElementChild.classList.add("show-answer");
            question.firstElementChild.firstElementChild.style.fontWeight = "bold";
            question.firstElementChild.lastElementChild.firstElementChild.style.transform = "rotate(180deg)";
        } else if (question .lastElementChild.classList.contains("show-answer")) {
            question.lastElementChild.classList.remove("show-answer");
            question.lastElementChild.classList.add("hide-answer");
            question.firstElementChild.firstElementChild.style.fontWeight = "400";
            question.firstElementChild.lastElementChild.firstElementChild.style.transform = "rotate(0deg)";
        }
    });
});