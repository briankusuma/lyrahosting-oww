console.log("hallo world");

// how much

document.addEventListener('DOMContentLoaded', function() {
    // Get all sliders and their value displays
    const hashRateSlider = document.getElementById('hashRateSlider');
    const hashRateValue = document.getElementById('hashRateValue');
    const hashRateProgress = document.getElementById('hashRateProgress');
    
    const durationSlider = document.getElementById('durationSlider');
    const durationValue = document.getElementById('durationValue');
    const durationProgress = document.getElementById('durationProgress');
    
    const btcRateSlider = document.getElementById('btcRateSlider');
    const btcRateValue = document.getElementById('btcRateValue');
    const btcRateProgress = document.getElementById('btcRateProgress');
    
    // Get all income elements
    const investments = document.getElementById('investments');
    const maintenance = document.getElementById('maintenance');
    const incomeMonth = document.getElementById('incomeMonth');
    const incomeYear = document.getElementById('incomeYear');
    const income3Years = document.getElementById('income3Years');
    const incomeHalving = document.getElementById('incomeHalving');
    
    // Update slider progress based on value
    function updateSliderProgress(slider, progressElement) {
        const min = parseInt(slider.min);
        const max = parseInt(slider.max);
        const value = parseInt(slider.value);
        const percentage = ((value - min) / (max - min)) * 100;
        progressElement.style.width = `${percentage}%`;
    }
    
    // Update bubble position based on slider value
    function updateBubblePosition(slider, bubble) {
        const min = parseInt(slider.min);
        const max = parseInt(slider.max);
        const value = parseInt(slider.value);
        const percentage = ((value - min) / (max - min)) * 100;
        
        // Calculate the left position based on percentage
        bubble.style.left = `${percentage}%`;
    }
    
    // Initialize slider progress and bubble positions
    updateSliderProgress(hashRateSlider, hashRateProgress);
    updateBubblePosition(hashRateSlider, hashRateValue);
    
    updateSliderProgress(durationSlider, durationProgress);
    updateBubblePosition(durationSlider, durationValue);
    
    updateSliderProgress(btcRateSlider, btcRateProgress);
    updateBubblePosition(btcRateSlider, btcRateValue);
    
    // Update values when sliders change
    hashRateSlider.addEventListener('input', function() {
        hashRateValue.textContent = this.value;
        updateSliderProgress(this, hashRateProgress);
        updateBubblePosition(this, hashRateValue);
        calculateIncome();
    });
    
    durationSlider.addEventListener('input', function() {
        durationValue.textContent = this.value;
        updateSliderProgress(this, durationProgress);
        updateBubblePosition(this, durationValue);
        calculateIncome();
    });
    
    btcRateSlider.addEventListener('input', function() {
        btcRateValue.textContent = Number(this.value).toLocaleString();
        updateSliderProgress(this, btcRateProgress);
        updateBubblePosition(this, btcRateValue);
        calculateIncome();
    });
    
    // Calculate income based on slider values
    function calculateIncome() {
        const hashRate = parseInt(hashRateSlider.value);
        const duration = parseInt(durationSlider.value);
        const btcRate = parseInt(btcRateSlider.value);
        
        // These calculations are simplified examples
        // In a real application, you would use more complex formulas
        const investmentAmount = (hashRate * 25).toFixed(2);
        const maintenanceAmount = (hashRate * 0.0428).toFixed(2);
        const monthlyIncome = (hashRate * 2.76).toFixed(2);
        const yearlyIncome = (monthlyIncome * 12).toFixed(2);
        const threeYearIncome = (yearlyIncome * 3).toFixed(2);
        const halvingIncome = (yearlyIncome * 7).toFixed(2);
        
        // Update the display
        investments.textContent = `${Number(investmentAmount).toLocaleString()} USD`;
        maintenance.textContent = `${Number(maintenanceAmount).toLocaleString()} USD`;
        incomeMonth.textContent = `${Number(monthlyIncome).toLocaleString()} USD`;
        incomeYear.textContent = `${Number(yearlyIncome).toLocaleString()} USD`;
        income3Years.textContent = `${Number(threeYearIncome).toLocaleString()} USD`;
        incomeHalving.textContent = `${Number(halvingIncome).toLocaleString()} USD`;
    }
    
    // Initial calculation
    calculateIncome();
    
    // About Halving button
    const aboutHalvingBtn = document.querySelector('.about-halving-btn');
    aboutHalvingBtn.addEventListener('click', function() {
        alert('Bitcoin halving is an event where the reward for mining Bitcoin transactions is cut in half. This event occurs approximately every four years and reduces the rate at which new bitcoins are created, affecting mining profitability.');
    });
});



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


document.addEventListener("DOMContentLoaded", () => {
    const selected = document.querySelectorAll(".select-btn");

    selected.forEach(button => {
        button.addEventListener("click", () => {
            console.log("hallo")
            selected.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");
            // document.getElementById(button.dataset.tab).classList.add("active");
        });
    });
});