# Step 11 Implementation - Unhealthy Habits (Multi-Select)

## Overview
Added Step 11 with the question "Do you have any of the following unhealthy habits?" - a multi-select step with checkboxes and a "Next step" button.

## Changes Made

### 1. HTML Structure (`quiz.html`)

#### Step 11 - Unhealthy Habits
- Question: "Do you have any of the following unhealthy habits?"
- **Multi-select** with checkboxes
- Five options with icons:
  1. "I eat late at night" 💤
  2. "I can't give up eating sweets" 🍫
  3. "I love soft drinks" 🥤
  4. "I love fatty or salty foods" 🧂
  5. "None of the above" ❌
- Uses custom checkboxes (not default browser checkboxes)
- Identical for both male and female users

### 2. CSS Styling (`quiz-styles.css`)

#### Step 11 Styles
- `.unhealthy-habits-selection` - Container with centered layout
- `.unhealthy-habits-options` - Vertical flex layout with 12px gap, max-width 500px
- `.unhealthy-habit-option` - Clickable card with hover effect
- `.unhealthy-habit-content` - Flex layout with space-between
  - Padding: 16px 20px
  - Background: light gray (#F5F5F5)
  - Border: 2px solid transparent
  - Border-radius: 12px
- `.unhealthy-habit-option.selected .unhealthy-habit-content`
  - White background
  - Teal border (--color-primary)
  - Box shadow for emphasis
- `.checkbox-wrapper` - Flex layout for checkbox + text
- `.unhealthy-habit-checkbox` - Hidden (display: none)
- `.custom-checkbox-habit` - Custom checkbox design
  - 20x20px square with border
  - Teal background when selected
  - White checkmark (✓) when selected
- `.unhealthy-habit-text` - 16px font, medium weight
- `.unhealthy-habit-icon` - 32px emoji display, 40x40px container

#### Responsive Styles (Mobile)
- Reduced padding: 12px 16px
- Smaller text: 15px
- Smaller icon: 28px
- Smaller checkbox: 18x18px

### 3. JavaScript Logic (`quiz-script.js`)

#### Updated Step Count
- Changed `totalSteps` from 10 to 11
- Updated HTML step counter from 10 to 11

#### Updated Multi-Select Logic
- Modified `updateUI()` to recognize Step 11 as multi-select
- Shows "Next step" button (instead of auto-advancing)
- Button is disabled until at least one option is selected

#### New Function
**`initUnhealthyHabitsSelection()`**
- Handles Step 11 multi-select checkbox logic
- Stores selections in `quizData.unhealthyHabits` array
- **Special Logic**:
  - If "None of the above" is selected, all other options are deselected
  - If any other option is selected, "None of the above" is automatically deselected
  - Multiple habits can be selected (except when "None" is chosen)
- Updates "Next step" button state based on selections
- Uses custom checkbox styling (not native browser checkboxes)

#### Modified Functions
1. **`updateUI()`**
   - Added Step 11 to multi-select check
   - Changed button text to "Next step" for non-final steps
   - Shows navigation buttons for Step 11

2. **`attachEventListeners()`**
   - Added Step 11 initialization call

3. **`validateCurrentStep()`**
   - Added validation for Step 11 (case 11)
   - Returns true if at least one habit is selected

4. **Validation Alert Messages**
   - Added alert for Step 11: "Please select at least one option to continue."

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
    sleepHours: 'less-than-5' | '5-6' | '7-8' | 'more-than-8',
    waterIntake: 'less-than-0.5' | '0.5-1.5' | '1.5-2.5' | 'more-than-2.5' | 'dont-count',
    unhealthyHabits: array // Can contain: 'eat-late', 'eating-sweets', 'soft-drinks', 'fatty-salty-foods', 'none'
}
```

## Quiz Flow
```
Step 1: Gender
Step 2: Goal
Step 3: Physical Build
Step 4: Dream Body
Step 5: Target Zones (multi-select with Next button)
Step 6: Best Shape Timeline
[Intermediate Page 6.5: Keto Info]
Step 7: Keto Knowledge
Step 8: Typical Day Activity
Step 9: Sleep Hours
Step 10: Water Intake (with Continue button)
Step 11: Unhealthy Habits ← NEW (multi-select with Next step button)
```

## Multi-Select Steps in Quiz
1. **Step 5**: Target Zones - Multiple body areas can be selected
2. **Step 11**: Unhealthy Habits - Multiple habits can be selected (with "None" exclusion logic)

## Special Logic: "None of the Above"

### Behavior:
1. **When "None" is clicked**:
   - All other checkboxes are deselected
   - Only "None" remains selected
   - Array becomes: `['none']`

2. **When any other option is clicked**:
   - "None" is automatically deselected (if it was selected)
   - Multiple other options can be selected simultaneously
   - Array contains selected habits: `['eat-late', 'soft-drinks']`

3. **Toggling**:
   - Clicking a selected option deselects it
   - Clicking an unselected option selects it

## Features
✅ Multi-select with checkboxes  
✅ Custom checkbox styling (not native)  
✅ Five habit options + "None"  
✅ Emoji visual indicators  
✅ Same for both genders  
✅ "Next step" button (manual advance)  
✅ Button disabled until selection  
✅ Special "None" exclusion logic  
✅ Hover effects  
✅ Responsive design  
✅ Validation included  

## Testing Checklist
- [ ] Step 11 displays correctly after Step 10
- [ ] All five options are clickable
- [ ] Custom checkboxes show checkmark when selected
- [ ] Multiple options can be selected simultaneously
- [ ] "None of the above" deselects all other options
- [ ] Selecting any option deselects "None"
- [ ] "Next step" button appears at bottom
- [ ] Button is disabled with no selections
- [ ] Button is enabled with at least one selection
- [ ] Clicking "Next step" advances to next step (or quiz complete)
- [ ] Back button returns to Step 10
- [ ] Validation alert shows if no selection
- [ ] Works on mobile devices
- [ ] Works for both male and female users
- [ ] Step counter shows "11/11"
