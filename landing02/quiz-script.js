// Quiz State
let currentStep = 1;
const totalSteps = 6;
const quizData = {};

// DOM Elements
const progressFill = document.getElementById('progressFill');
const currentStepSpan = document.getElementById('currentStep');
const totalStepsSpan = document.getElementById('totalSteps');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const nextBtnText = document.getElementById('nextBtnText');
const quizSteps = document.querySelectorAll('.quiz-step');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const navMenuBtn = document.querySelector('.nav-menu-btn');

// Initialize
function init() {
    updateUI();
    attachEventListeners();
    
    // Initially disable next button on step 1
    if (currentStep === 1) {
        nextBtn.disabled = true;
    }
    
}

// Update UI based on current step
function updateUI() {
    // Update progress bar
    const progress = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Update step counter
    currentStepSpan.textContent = currentStep;
    totalStepsSpan.textContent = totalSteps;
    
    // Update quiz steps visibility
    quizSteps.forEach((step, index) => {
        if (index + 1 === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Update navigation buttons
    backBtn.disabled = currentStep === 1;
    
    // Update next button state based on validation
    nextBtn.disabled = !validateCurrentStep();
    
    // Update next button text
    if (currentStep === totalSteps) {
        nextBtnText.textContent = 'Complete';
    } else {
        nextBtnText.textContent = 'Next';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigate to next step
function goToNextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateUI();
    } else {
        // Quiz complete
        console.log('Quiz completed!', quizData);
        alert('Quiz completed! Check console for data.');
    }
}

// Navigate to previous step
function goToPreviousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateUI();
    }
}

// Attach event listeners
function attachEventListeners() {
    // Navigation buttons
    nextBtn.addEventListener('click', goToNextStep);
    backBtn.addEventListener('click', goToPreviousStep);
    
    // Step 1 - Gender selection
    initGenderSelection();
    
    // Step 2 - Goal selection
    initGoalSelection();
    
    // Step 3 - Build selection
    initBuildSelection();
    
    // Step 4 - Dream body selection
    initDreamBodySelection();
    
    // Step 5 - Target zones selection
    initTargetZonesSelection();
    
    // Step 6 - Best shape time period selection
    initBestShapeSelection();
    
    // Sidebar menu
    navMenuBtn.addEventListener('click', () => {
        sidebarMenu.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentStep < totalSteps) {
            goToNextStep();
        } else if (e.key === 'ArrowLeft' && currentStep > 1) {
            goToPreviousStep();
        } else if (e.key === 'Escape' && sidebarMenu.classList.contains('active')) {
            closeSidebar();
        }
    });
}

// Close sidebar
function closeSidebar() {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Step 1 - Gender Selection
function initGenderSelection() {
    const genderOptions = document.querySelectorAll('.gender-option');
    
    genderOptions.forEach(option => {
        const button = option.querySelector('.gender-btn');
        
        const handleSelection = () => {
            // Remove selection from all options
            genderOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to current option
            option.classList.add('selected');
            
            // Store the selection
            const gender = option.dataset.value;
            quizData.gender = gender;
            
            // Enable next button if it was disabled
            nextBtn.disabled = false;
            
            console.log('Gender selected:', gender);
        };
        
        // Handle both button click and label click
        button.addEventListener('click', handleSelection);
        option.addEventListener('click', (e) => {
            if (e.target === option || e.target === option.querySelector('.gender-image') || e.target === option.querySelector('img')) {
                handleSelection();
            }
        });
    });
}

// Step 2 - Goal Selection
function initGoalSelection() {
    const goalOptions = document.querySelectorAll('.goal-option');
    
    goalOptions.forEach(option => {
        const handleSelection = () => {
            // Remove selection from all options
            goalOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to current option
            option.classList.add('selected');
            
            // Store the selection
            const goal = option.dataset.value;
            quizData.goal = goal;
            
            // Enable next button
            nextBtn.disabled = false;
            
            console.log('Goal selected:', goal);
        };
        
        // Handle click on the entire option
        option.addEventListener('click', handleSelection);
    });
}

// Step 3 - Build Selection
function initBuildSelection() {
    const buildOptions = document.querySelectorAll('.build-option');
    
    buildOptions.forEach(option => {
        const handleSelection = () => {
            // Remove selection from all options
            buildOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to current option
            option.classList.add('selected');
            
            // Store the selection
            const build = option.dataset.value;
            quizData.build = build;
            
            // Enable next button
            nextBtn.disabled = false;
            
            console.log('Build selected:', build);
        };
        
        // Handle click on the entire option
        option.addEventListener('click', handleSelection);
    });
}

// Step 4 - Dream Body Selection
function initDreamBodySelection() {
    const dreamBodyOptions = document.querySelectorAll('.dream-body-option');
    
    dreamBodyOptions.forEach(option => {
        const handleSelection = () => {
            // Remove selection from all options
            dreamBodyOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to current option
            option.classList.add('selected');
            
            // Store the selection
            const dreamBody = option.dataset.value;
            quizData.dreamBody = dreamBody;
            
            // Enable next button
            nextBtn.disabled = false;
            
            console.log('Dream body selected:', dreamBody);
        };
        
        // Handle click on the entire option
        option.addEventListener('click', handleSelection);
    });
}

// Step 5 - Target Zones Selection
function initTargetZonesSelection() {
    // Wait a bit to ensure DOM is fully ready
    setTimeout(() => {
        const targetZoneOptions = document.querySelectorAll('.target-zone-option');
        
        if (targetZoneOptions.length === 0) {
            return;
        }
        
        targetZoneOptions.forEach((option) => {
            // Simple click handler
            option.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle the selected class
                this.classList.toggle('selected');
                
                // Initialize targetZones if needed
                if (!quizData.targetZones) {
                    quizData.targetZones = [];
                }
                
                const zone = this.dataset.value;
                const isSelected = this.classList.contains('selected');
                
                if (isSelected) {
                    // Add to array if not present
                    if (!quizData.targetZones.includes(zone)) {
                        quizData.targetZones.push(zone);
                    }
                } else {
                    // Remove from array
                    quizData.targetZones = quizData.targetZones.filter(z => z !== zone);
                }
                
                // Update checkbox state
                const checkbox = this.querySelector('.target-zone-checkbox');
                if (checkbox) {
                    checkbox.checked = isSelected;
                }
                
                // Update next button
                nextBtn.disabled = quizData.targetZones.length === 0;
            });
        });
    }, 100);
}

// Step 6 - Best Shape Selection
function initBestShapeSelection() {
    const timePeriodOptions = document.querySelectorAll('.time-period-option');
    
    timePeriodOptions.forEach(option => {
        const handleSelection = () => {
            // Remove selection from all options
            timePeriodOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to current option
            option.classList.add('selected');
            
            // Store the selection
            const timePeriod = option.dataset.value;
            quizData.bestShapeTimePeriod = timePeriod;
            
            // Enable next button
            nextBtn.disabled = false;
            
            console.log('Best shape time period selected:', timePeriod);
        };
        
        // Handle click on the entire option
        option.addEventListener('click', handleSelection);
    });
}

// Validate current step
function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            return quizData.gender !== undefined;
        case 2:
            return quizData.goal !== undefined;
        case 3:
            return quizData.build !== undefined;
        case 4:
            return quizData.dreamBody !== undefined;
        case 5:
            return quizData.targetZones && quizData.targetZones.length > 0;
        case 6:
            return quizData.bestShapeTimePeriod !== undefined;
        default:
            return true;
    }
}

// Override goToNextStep to include validation
const originalGoToNextStep = goToNextStep;
goToNextStep = function() {
    if (!validateCurrentStep()) {
        // Show validation message or highlight required fields
        if (currentStep === 1) {
            alert('Please select your gender to continue.');
        } else if (currentStep === 2) {
            alert('Please select your primary goal to continue.');
        } else if (currentStep === 3) {
            alert('Please select your physical build to continue.');
        } else if (currentStep === 4) {
            alert('Please select your dream body to continue.');
        } else if (currentStep === 5) {
            alert('Please select at least one target zone to continue.');
        } else if (currentStep === 6) {
            alert('Please select when you were in your best shape to continue.');
        }
        return;
    }
    originalGoToNextStep();
};

// Start the quiz when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
