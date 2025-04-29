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

// navbar

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle")
    const mobileMenu = document.getElementById("mobile-menu")

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        mobileMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInsideMenu = mobileMenu.contains(event.target)
        const isClickOnToggle = menuToggle.contains(event.target)

        if (!isClickInsideMenu && !isClickOnToggle && mobileMenu.classList.contains("active")) {
        menuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        }
    })

    // Handle window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992 && mobileMenu.classList.contains("active")) {
        menuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        }
    })
})

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const parent = this.parentElement;
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    if (dropdown !== parent) {
                        dropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                parent.classList.toggle('active');
            }
        });
    });


// tab logic

document.addEventListener('DOMContentLoaded', function() {
    // Find all tab containers on the page
    const tabContainers = document.querySelectorAll('.sec-discover');
    
    // Initialize each tab container separately
    tabContainers.forEach(function(container) {
    // Get elements specific to this container
    const tabButtons = container.querySelectorAll('.tab-btn');
    const tabContents = container.querySelectorAll('.tab-content');
    const mobileTabToggle = container.querySelector('.mobile-tab-toggle');
    const tabHead = container.querySelector('.discover-tab-head');
    const currentTabText = container.querySelector('.current-tab');
    
    // Initialize tabs for this container
    function initTabs() {
        tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button within this container
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Find the tab content within this container
            // Instead of using document.getElementById which searches the whole document
            const targetContent = container.querySelector(`#${tabId}`);
            
            // Update active tab content within this container
            tabContents.forEach(content => content.classList.remove('active'));
            if (targetContent) {
            targetContent.classList.add('active');
            }
            
            // Update mobile dropdown text
            if (currentTabText) {
            currentTabText.textContent = button.textContent.trim();
            }
            
            // Close dropdown on mobile after selection
            if (window.innerWidth <= 768 && tabHead) {
            tabHead.classList.remove('show');
            }
        });
        });
    }
    
    // Mobile dropdown toggle for this container
    if (mobileTabToggle && tabHead) {
        mobileTabToggle.addEventListener('click', () => {
        tabHead.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside for this container
        document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            const isClickInsideTabHead = tabHead.contains(event.target);
            const isClickOnToggle = mobileTabToggle.contains(event.target);
            
            if (!isClickInsideTabHead && !isClickOnToggle && tabHead.classList.contains('show')) {
            tabHead.classList.remove('show');
            }
        }
        });
    }
    
    // Initialize tabs for this container
    initTabs();
    });
    
    // Handle window resize (global)
    window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.discover-tab-head').forEach(head => {
        head.classList.remove('show');
        });
    }
    });
});

// tab logic lightning

document.addEventListener('DOMContentLoaded', function() {
    // Find all tab containers on the page
    const tabContainers = document.querySelectorAll('.sec-discover');
    
    // Initialize each tab container separately
    tabContainers.forEach(function(container) {
    // Get elements specific to this container
    const tabButtons = container.querySelectorAll('.tab-btns');
    const tabContents = container.querySelectorAll('.tab-contents');
    const mobileTabToggle = container.querySelector('.mobile-tab-toggles');
    const tabHead = container.querySelector('.discover-tab-heads');
    const currentTabText = container.querySelector('.current-tabs');
    
    // Initialize tabs for this container
    function initTabs() {
        tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button within this container
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Find the tab content within this container
            // Instead of using document.getElementById which searches the whole document
            const targetContent = container.querySelector(`#${tabId}`);
            
            // Update active tab content within this container
            tabContents.forEach(content => content.classList.remove('active'));
            if (targetContent) {
            targetContent.classList.add('active');
            }
            
            // Update mobile dropdown text
            if (currentTabText) {
            currentTabText.textContent = button.textContent.trim();
            }
            
            // Close dropdown on mobile after selection
            if (window.innerWidth <= 768 && tabHead) {
            tabHead.classList.remove('show');
            }
        });
        });
    }
    
    // Mobile dropdown toggle for this container
    if (mobileTabToggle && tabHead) {
        mobileTabToggle.addEventListener('click', () => {
        tabHead.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside for this container
        document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            const isClickInsideTabHead = tabHead.contains(event.target);
            const isClickOnToggle = mobileTabToggle.contains(event.target);
            
            if (!isClickInsideTabHead && !isClickOnToggle && tabHead.classList.contains('show')) {
            tabHead.classList.remove('show');
            }
        }
        });
    }
    
    // Initialize tabs for this container
    initTabs();
    });
    
    // Handle window resize (global)
    window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.discover-tab-heads').forEach(head => {
        head.classList.remove('show');
        });
    }
    });
});
