/*
 * QUIZ LOGIC TEMPLATE
 * ===================
 * This quiz has 8 steps. Step 1 (gender selection) is complete.
 * Steps 2-8 are blank templates for you to customize.
 * 
 * TO ADD CONTENT TO A STEP:
 * 1. Edit quiz.html - Add your HTML content inside the corresponding step div
 * 2. Update setupEventListeners() - Add event listeners for your inputs/buttons
 * 3. Update isStepValid() - Add validation logic for your step
 * 4. The navigation (Next/Back buttons) and progress bar work automatically
 * 
 * AVAILABLE HELPER FUNCTIONS:
 * - handleSingleSelect(card, answerKey) - For option cards (single choice)
 * - handleMultiSelect(card, answerKey) - For option cards (multiple choice)
 * - handleInputChange(answerKey, value) - For text/number inputs
 * - handleUnitToggle(btn, type) - For unit toggles (kg/lbs, cm/ft)
 * - enableNextButton() / disableNextButton() - Control Next button state
 * 
 * All answers are stored in quizState.answers object
 */

// Quiz State Management
const quizState = {
    currentStep: 1,
    totalSteps: 9,
    answers: {},
    unit: {
        weight: 'kg',
        height: 'cm'
    }
};

// DOM Elements
const progressFill = document.getElementById('progressFill');
const currentStepDisplay = document.getElementById('currentStep');
const totalStepsDisplay = document.getElementById('totalSteps');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const nextBtnText = document.getElementById('nextBtnText');

// Sidebar Elements
const menuBtn = document.querySelector('.menu-btn');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    totalStepsDisplay.textContent = quizState.totalSteps;
    updateProgress();
    setupEventListeners();
    setupSidebarMenu();
});

// Setup Event Listeners
function setupEventListeners() {
    // Next Button
    nextBtn.addEventListener('click', handleNext);
    
    // Back Button
    backBtn.addEventListener('click', handleBack);
    
    // Option Cards - Single Select (Step 1: Gender) - Auto advance
    document.querySelectorAll('.quiz-step[data-step="1"] .option-card').forEach(card => {
        card.addEventListener('click', () => {
            handleSingleSelect(card, 'gender');
            // Auto-advance to next step after a short delay
            setTimeout(() => {
                handleNext();
            }, 300);
        });
    });
    
    // Continue Button on Intermediate Page (Step 2)
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            handleNext();
        });
    }
    
    // Continue Button on Intermediate Page (Step 5)
    const continueBtn2 = document.getElementById('continueBtn2');
    if (continueBtn2) {
        continueBtn2.addEventListener('click', () => {
            handleNext();
        });
    }
    
    // Step 3: Main Goal - Single Select
    document.querySelectorAll('.quiz-step[data-step="3"] .option-card').forEach(card => {
        card.addEventListener('click', () => {
            handleSingleSelect(card, 'mainGoal');
            enableNextButton();
        });
    });
    
    // Step 4: Target Zones - Multi Select
    document.querySelectorAll('.quiz-step[data-step="4"] .option-card').forEach(card => {
        card.addEventListener('click', () => {
            handleMultiSelect(card, 'targetZones');
        });
    });
    
    // Step 6: Height Input
    const heightInput = document.getElementById('heightInput');
    if (heightInput) {
        heightInput.addEventListener('input', (e) => {
            handleInputChange('height', e.target.value);
        });
    }
    
    // Step 6: Height Unit Toggle
    const heightToggleFt = document.getElementById('heightToggleFt');
    const heightToggleCm = document.getElementById('heightToggleCm');
    
    if (heightToggleFt) {
        heightToggleFt.addEventListener('click', () => {
            handleUnitToggle(heightToggleFt, 'height');
        });
    }
    
    if (heightToggleCm) {
        heightToggleCm.addEventListener('click', () => {
            handleUnitToggle(heightToggleCm, 'height');
        });
    }
    
    // Step 7: Weight Input
    const weightInput = document.getElementById('weightInput');
    if (weightInput) {
        weightInput.addEventListener('input', (e) => {
            handleInputChange('weight', e.target.value);
        });
    }
    
    // Step 7: Weight Unit Toggle
    const weightToggleLbs = document.getElementById('weightToggleLbs');
    const weightToggleKg = document.getElementById('weightToggleKg');
    
    if (weightToggleLbs) {
        weightToggleLbs.addEventListener('click', () => {
            handleUnitToggle(weightToggleLbs, 'weight');
        });
    }
    
    if (weightToggleKg) {
        weightToggleKg.addEventListener('click', () => {
            handleUnitToggle(weightToggleKg, 'weight');
        });
    }
    
    // Step 8: Target Weight Input
    const targetWeightInput = document.getElementById('targetWeightInput');
    if (targetWeightInput) {
        targetWeightInput.addEventListener('input', (e) => {
            handleInputChange('targetWeight', e.target.value);
        });
    }
    
    // Step 8: Target Weight Unit Toggle
    const targetWeightToggleLbs = document.getElementById('targetWeightToggleLbs');
    const targetWeightToggleKg = document.getElementById('targetWeightToggleKg');
    
    if (targetWeightToggleLbs) {
        targetWeightToggleLbs.addEventListener('click', () => {
            handleUnitToggle(targetWeightToggleLbs, 'targetWeight');
        });
    }
    
    if (targetWeightToggleKg) {
        targetWeightToggleKg.addEventListener('click', () => {
            handleUnitToggle(targetWeightToggleKg, 'targetWeight');
        });
    }
    
    // Step 9: Age Input
    const ageInput = document.getElementById('ageInput');
    if (ageInput) {
        ageInput.addEventListener('input', (e) => {
            handleInputChange('age', e.target.value);
        });
    }
    
    // Add your custom event listeners for other steps here
    // Example:
    // document.querySelectorAll('.quiz-step[data-step="3"] .option-card').forEach(card => {
    //     card.addEventListener('click', () => handleSingleSelect(card, 'yourKey'));
    // });
}

// Handle Single Select
function handleSingleSelect(selectedCard, answerKey) {
    const step = selectedCard.closest('.quiz-step');
    const allCards = step.querySelectorAll('.option-card');
    
    allCards.forEach(card => card.classList.remove('selected'));
    selectedCard.classList.add('selected');
    
    const value = selectedCard.getAttribute('data-value');
    quizState.answers[answerKey] = value;
    
    enableNextButton();
}

// Handle Multi Select
function handleMultiSelect(card, answerKey) {
    card.classList.toggle('selected');
    
    const step = card.closest('.quiz-step');
    const selectedCards = step.querySelectorAll('.option-card.selected');
    const values = Array.from(selectedCards).map(c => c.getAttribute('data-value'));
    
    quizState.answers[answerKey] = values;
    
    // Always enable next button for multi-select (can skip)
    enableNextButton();
}

// Handle Input Change
function handleInputChange(answerKey, value) {
    quizState.answers[answerKey] = value;
    
    if (value && value.trim() !== '') {
        enableNextButton();
    } else {
        disableNextButton();
    }
}

// Handle Unit Toggle
function handleUnitToggle(selectedBtn, type) {
    const toggleGroup = selectedBtn.parentElement;
    const allBtns = toggleGroup.querySelectorAll('.toggle-btn');
    
    allBtns.forEach(btn => btn.classList.remove('active'));
    selectedBtn.classList.add('active');
    
    const unit = selectedBtn.getAttribute('data-unit');
    quizState.unit[type] = unit;
    
    // Update display
    if (type === 'weight') {
        const weightUnit = document.getElementById('weightUnit');
        if (weightUnit) {
            weightUnit.textContent = unit;
        }
    } else if (type === 'targetWeight') {
        const targetWeightUnit = document.getElementById('targetWeightUnit');
        if (targetWeightUnit) {
            targetWeightUnit.textContent = unit;
        }
    } else if (type === 'height') {
        const heightUnit = document.getElementById('heightUnit');
        if (heightUnit) {
            heightUnit.textContent = unit;
        }
    }
}

// Handle Next
function handleNext() {
    if (!isStepValid(quizState.currentStep)) {
        return;
    }
    
    if (quizState.currentStep < quizState.totalSteps) {
        quizState.currentStep++;
        updateStep();
        updateProgress();
    } else {
        // Final step - submit
        handleSubmit();
    }
}

// Handle Back
function handleBack() {
    if (quizState.currentStep > 1) {
        quizState.currentStep--;
        updateStep();
        updateProgress();
    }
}

// Update Step Display
function updateStep() {
    // Get current active step
    const activeStep = document.querySelector('.quiz-step.active');
    
    // Fade out current step
    if (activeStep) {
        activeStep.classList.add('fade-out');
        
        // Wait for fade out to complete before showing next step
        setTimeout(() => {
            // Hide all steps
            document.querySelectorAll('.quiz-step').forEach(step => {
                step.classList.remove('active', 'fade-out');
            });
            
            // Show current step
            const currentStep = document.querySelector(`.quiz-step[data-step="${quizState.currentStep}"]`);
            if (currentStep) {
                currentStep.classList.add('active');
            }
            
            // Update UI elements after transition
            updateStepUI();
        }, 200); // Match the CSS animation duration
    } else {
        // First load - no fade out needed
        document.querySelectorAll('.quiz-step').forEach(step => {
            step.classList.remove('active', 'fade-out');
        });
        
        const currentStep = document.querySelector(`.quiz-step[data-step="${quizState.currentStep}"]`);
        if (currentStep) {
            currentStep.classList.add('active');
        }
        
        updateStepUI();
    }
}

// Update Step UI Elements
function updateStepUI() {
    // Get progress container and navigation
    const progressContainer = document.querySelector('.progress-container');
    const quizNavigation = document.querySelector('.quiz-navigation');
    const headerRight = document.querySelector('.header-right');
    
    // Step 2 and Step 5 are intermediate pages - hide progress and navigation
    if (quizState.currentStep === 2 || quizState.currentStep === 5) {
        progressContainer.style.display = 'none';
        quizNavigation.style.display = 'none';
        headerRight.style.display = 'none';
        
        // Update the intermediate image based on gender (Step 2)
        if (quizState.currentStep === 2) {
            const intermediateImage = document.getElementById('intermediateImage');
            if (intermediateImage && quizState.answers.gender) {
                if (quizState.answers.gender === 'male') {
                    intermediateImage.src = '../assets/social-MALE.webp';
                } else {
                    intermediateImage.src = '../assets/social-FEMALE.webp';
                }
            }
        }
    } else {
        // Show progress and navigation for all other steps
        progressContainer.style.display = 'block';
        quizNavigation.style.display = 'flex';
        headerRight.style.display = 'flex';
    }
    
    // Update back button visibility
    if (quizState.currentStep > 1 && quizState.currentStep !== 2 && quizState.currentStep !== 5) {
        backBtn.classList.add('visible');
    } else {
        backBtn.classList.remove('visible');
    }
    
    // Update next button text
    if (quizState.currentStep === quizState.totalSteps) {
        nextBtnText.textContent = 'Get My Plan';
    } else {
        nextBtnText.textContent = 'Next';
    }
    
    // Check if step is valid
    checkStepValidity();
}

// Update Progress Bar
function updateProgress() {
    const progress = (quizState.currentStep / quizState.totalSteps) * 100;
    progressFill.style.width = `${progress}%`;
    currentStepDisplay.textContent = quizState.currentStep;
}

// Check Step Validity
function checkStepValidity() {
    if (isStepValid(quizState.currentStep)) {
        enableNextButton();
    } else {
        disableNextButton();
    }
}

// Validate Current Step
function isStepValid(step) {
    switch(step) {
        case 1:
            return quizState.answers.gender ? true : false;
        case 2:
            return true; // Intermediate page - always valid
        case 3:
            return quizState.answers.mainGoal ? true : false;
        case 4:
            return true; // Multi-select - can skip or select multiple
        case 5:
            return true; // Intermediate page - always valid
        case 6:
            return quizState.answers.height && quizState.answers.height > 0 ? true : false;
        case 7:
            return quizState.answers.weight && quizState.answers.weight > 0 ? true : false;
        case 8:
            return quizState.answers.targetWeight && quizState.answers.targetWeight > 0 ? true : false;
        case 9:
            return quizState.answers.age && quizState.answers.age > 0 ? true : false;
        default:
            return false;
    }
}

// Enable/Disable Next Button
function enableNextButton() {
    nextBtn.disabled = false;
}

function disableNextButton() {
    nextBtn.disabled = true;
}

// Handle Submit
function handleSubmit() {
    console.log('Quiz Completed!');
    console.log('Answers:', quizState.answers);
    console.log('Units:', quizState.unit);
    
    // Show completion message
    alert('🎉 Congratulations! Your personalized meal plan is being prepared. This is just a demo - no data was sent.');
    
    // In a real app, you would send data to backend here
    // fetch('/api/submit-quiz', {
    //     method: 'POST',
    //     body: JSON.stringify(quizState),
    //     headers: { 'Content-Type': 'application/json' }
    // });
}

// Sidebar Menu Functions
function setupSidebarMenu() {
    // Open menu
    menuBtn.addEventListener('click', () => {
        sidebarMenu.classList.add('active');
        sidebarOverlay.classList.add('active');
    });
    
    // Close menu
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    
    // Dropdown toggles
    document.querySelectorAll('.menu-item.dropdown .menu-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const menuItem = link.parentElement;
            menuItem.classList.toggle('open');
        });
    });
}

function closeSidebar() {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !nextBtn.disabled) {
        handleNext();
    } else if (e.key === 'Escape') {
        if (sidebarMenu.classList.contains('active')) {
            closeSidebar();
        }
    }
});

// Auto-enable next button for already filled steps when navigating back
document.addEventListener('DOMContentLoaded', () => {
    // Restore selections if going back
    setTimeout(() => {
        checkStepValidity();
    }, 100);
});
