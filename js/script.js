console.log("hallo world");

// logic faq

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    if (faqItems.length > 0) {
        const firstAnswer = faqItems[0].querySelector(".faq-item_answer");
        const firstIcon = faqItems[0].querySelector(".icon svg");

        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
        firstIcon.style.transform = "rotate(180deg)";
    }

    faqItems.forEach((item, index) => {
        const question = item.querySelector(".faq-item_question");
        const answer = item.querySelector(".faq-item_answer");
        const icon = item.querySelector(".icon svg");

        question.addEventListener("click", function () {
            faqItems.forEach((faq, i) => {
                if (i !== index) {
                    faq.querySelector(".faq-item_answer").style.maxHeight = null;
                    faq.querySelector(".icon svg").style.transform = "rotate(0deg)";
                }
            });

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.style.transform = "rotate(0deg)";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
            }
        });
    });
});


// logic tab discover

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(button.dataset.tab).classList.add("active");
        });
    });
});

// howmuch slider

const slider = document.getElementById("hashRateSlider");
const valueBubble = document.getElementById("valueBubble");

function updateBubble() {
    const value = parseInt(slider.value);
    valueBubble.innerText = value;
    
    const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
    valueBubble.style.left = `calc(${percent}% - 10px)`;
    valueBubble.style.display = "block";
}

slider.addEventListener("input", updateBubble);
updateBubble();