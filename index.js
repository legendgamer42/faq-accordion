const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    const question = accordion.querySelector(".question");
    const icon = question.querySelector("img");
    const answer = accordion.querySelector(".answer");

    question.addEventListener("click", () => {
        const isOpen = answer.classList.contains("active");

        if (!isOpen) {
            answer.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.src = "assets/images/icon-minus.svg";
        } else {
            answer.classList.remove("active");
            answer.style.maxHeight = null;
            icon.src = "assets/images/icon-plus.svg";
        }
    });
});