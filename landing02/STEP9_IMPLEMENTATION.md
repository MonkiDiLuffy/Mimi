# Step 9 Implementation - Sleep Hours

## Overview
Added Step 9 with the question "How much sleep do you usually get?" with four sleep duration options.

## Changes Made

### 1. HTML Structure (`quiz.html`)

#### Step 9 - Sleep Hours
- Question: "How much sleep do you usually get?"
- Four options with emojis:
  1. "Less than 5 hours" 🥱
  2. "5-6 hours" 😴
  3. "7-8 hours" 🌛 (shown as selected in screenshot)
  4. "More than 8 hours" 💫
- Identical for both male and female users

### 2. CSS Styling (`quiz-styles.css`)

#### Step 9 Styles
- `.sleep-hours-selection` - Container with centered layout
- `.sleep-hours-options` - Vertical flex layout with 12px gap, max-width 400px
- `.sleep-hours-option` - Clickable card with hover effect
- `.sleep-hours-content` - Flex layout with space-between
  - Padding: 16px 20px
  - Background: light gray (#F5F5F5)
  - Border: 2px solid transparent
  - Border-radius: 12px
- `.sleep-hours-option.selected .sleep-hours-content`
  - White background
  - Teal border (--color-primary)
  - Box shadow for emphasis
- `.sleep-hours-text` - 16px font, medium weight
- `.sleep-hours-emoji` - 32px emoji display, 40x40px container

#### Responsive Styles (Mobile)
- Reduced padding: 12px 16px
- Smaller text: 15px
- Smaller emoji: 28px

### 3. JavaScript Logic (`quiz-script.js`)

#### Updated Step Count
- Changed `totalSteps` from 8 to 9
- Updated HTML step counter from 8 to 9

#### New Function
**`initSleepHoursSelection()`**
- Handles Step 9 option selection
- Removes selection from all options
- Adds selection to clicked option
- Stores selection in `quizData.sleepHours`
- Auto-advances to next step after 300ms

#### Modified Functions
1. **`attachEventListeners()`**
   - Added Step 9 initialization call

2. **`validateCurrentStep()`**
   - Added validation for Step 9 (case 9)
   - Returns true if `quizData.sleepHours` is defined

3. **Validation Alert Messages**
   - Added alert for Step 9: "Please select your sleep hours to continue."

## Data Structure
```javascript
quizData = {
    gender: 'male' | 'female',
    goal: string,
    build: string,
    dreamBody: string,
    targetZones: array,
    bestShapeTimePeriod: string,
    ketoKnowledge: 'nothing' | 'heard-some' | 'experienced',
    typicalDay: 'sitting' | 'active-breaks' | 'on-feet',
    sleepHours: 'less-than-5' | '5-6' | '7-8' | 'more-than-8'
}
```

## Quiz Flow
```
Step 1: Gender
Step 2: Goal
Step 3: Physical Build
Step 4: Dream Body
Step 5: Target Zones (multi-select)
Step 6: Best Shape Timeline
[Intermediate Page 6.5: Keto Info]
Step 7: Keto Knowledge
Step 8: Typical Day Activity
Step 9: Sleep Hours ← NEW
```

## Features
✅ Four sleep duration options  
✅ Emoji visual indicators  
✅ Same for both genders  
✅ Auto-advance on selection  
✅ Hover effects  
✅ Responsive design  
✅ Validation included  
✅ Follows existing design patterns  

## Sleep Emojis Used
- 🥱 Yawning Face (Less than 5 hours)
- 😴 Sleeping Face (5-6 hours)
- 🌛 First Quarter Moon Face (7-8 hours) - Recommended sleep
- 💫 Dizzy/Stars (More than 8 hours)

## Testing Checklist
- [ ] Step 9 displays correctly after Step 8
- [ ] All four options are clickable
- [ ] Selected option shows teal border
- [ ] Auto-advances to next step (or quiz complete)
- [ ] Back button returns to Step 8
- [ ] Validation alert shows if no selection
- [ ] Works on mobile devices
- [ ] Works for both male and female users
- [ ] Step counter shows "9/9"
- [ ] Quiz completes after Step 9 selection
