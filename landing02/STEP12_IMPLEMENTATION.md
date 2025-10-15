# Step 12 Implementation - Workout Frequency

## Overview
Added Step 12 with the question "How often do you workout?" featuring gender-specific workout illustrations and four frequency options.

## Changes Made

### 1. HTML Structure (`quiz.html`)

#### Step 12 - Workout Frequency
- Question: "How often do you workout?"
- Gender-specific illustration on the left side
- Four options:
  1. "Almost every day"
  2. "Several times per week"
  3. "Several times per month"
  4. "Never" (shown as selected in screenshot)
- Layout similar to Step 6 (Best Shape) with image + options side-by-side
- Different images for male and female users

### 2. CSS Styling (`quiz-styles.css`)

#### Step 12 Styles
- `.workout-frequency-selection` - Container with centered layout
- `.workout-frequency-layout` - Flex layout (image + options side-by-side)
  - Gap: 40px
  - Max-width: 700px
- `.workout-frequency-image` - Illustration container
  - Width: 280px (fixed)
  - Flex-shrink: 0
- `.workout-frequency-options` - Vertical flex layout for options
  - Gap: 12px
  - Flex: 1 (takes remaining space)
- `.workout-frequency-option` - Clickable card with hover effect
- `.workout-frequency-content` - Option content
  - Padding: 16px 20px
  - Background: light gray (#F5F5F5)
  - Border: 2px solid transparent
  - Border-radius: 12px
- `.workout-frequency-option.selected .workout-frequency-content`
  - White background
  - Teal border (--color-primary)
  - Box shadow for emphasis
- `.workout-frequency-text` - 16px font, medium weight

#### Responsive Styles (Mobile)
- Layout changes to column (vertical stack)
- Image centered at top with 200px width
- Options below image
- Reduced padding: 12px 16px
- Smaller text: 15px
- Gap reduced to 24px

### 3. JavaScript Logic (`quiz-script.js`)

#### Updated Step Count
- Changed `totalSteps` from 11 to 12
- Updated HTML step counter from 11 to 12

#### Image Mapping
- Added `workoutFrequency` to `imageMap`:
  ```javascript
  workoutFrequency: {
      male: '../assets/social-MALE.webp',
      female: '../assets/social-FEMALE.webp'
  }
  ```

#### Updated Image Update Function
- Modified `updateImagesForGender()` to update Step 12 illustration
- Dynamically switches between male and female workout images

#### New Function
**`initWorkoutFrequencySelection()`**
- Handles Step 12 option selection
- Removes selection from all options
- Adds selection to clicked option
- Stores selection in `quizData.workoutFrequency`
- Auto-advances to next step after 300ms

#### Modified Functions
1. **`attachEventListeners()`**
   - Added Step 12 initialization call

2. **`updateImagesForGender()`**
   - Added Step 12 workout illustration update

3. **`validateCurrentStep()`**
   - Added validation for Step 12 (case 12)
   - Returns true if `quizData.workoutFrequency` is defined

4. **Validation Alert Messages**
   - Added alert for Step 12: "Please select your workout frequency to continue."

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
    unhealthyHabits: array,
    workoutFrequency: 'almost-every-day' | 'several-per-week' | 'several-per-month' | 'never'
}
```

## Quiz Flow
```
Step 1: Gender
Step 2: Goal
Step 3: Physical Build
Step 4: Dream Body
Step 5: Target Zones (multi-select)
Step 6: Best Shape Timeline (with illustration)
[Intermediate Page 6.5: Keto Info]
Step 7: Keto Knowledge
Step 8: Typical Day Activity
Step 9: Sleep Hours
Step 10: Water Intake (with Continue button)
Step 11: Unhealthy Habits (multi-select)
Step 12: Workout Frequency ← NEW (with gender-specific illustration)
```

## Gender-Specific Images

### Male Image
- `social-MALE.webp` - Shows male figure with dumbbells in workout attire

### Female Image
- `social-FEMALE.webp` - Shows female figure in workout attire

Both images are:
- Displayed on the left side (desktop)
- Displayed at top (mobile)
- Updated dynamically based on gender selection from Step 1

## Layout Comparison

### Desktop (≥480px)
```
┌─────────────────────────────────────┐
│  [Image]    │  ○ Almost every day   │
│  (280px)    │  ○ Several per week   │
│             │  ○ Several per month  │
│             │  ● Never              │
└─────────────────────────────────────┘
```

### Mobile (<480px)
```
┌─────────────────────┐
│      [Image]        │
│      (200px)        │
├─────────────────────┤
│ ○ Almost every day  │
│ ○ Several per week  │
│ ○ Several per month │
│ ● Never             │
└─────────────────────┘
```

## Features
✅ Four workout frequency options  
✅ Gender-specific workout illustrations  
✅ Side-by-side layout (image + options)  
✅ Auto-advance on selection  
✅ Hover effects  
✅ Responsive design (switches to vertical on mobile)  
✅ Validation included  
✅ Dynamic image switching based on gender  
✅ Follows existing design patterns (similar to Step 6)  

## Testing Checklist
- [ ] Step 12 displays correctly after Step 11
- [ ] All four options are clickable
- [ ] Selected option shows teal border
- [ ] Auto-advances to next step (or quiz complete)
- [ ] Back button returns to Step 11
- [ ] Validation alert shows if no selection
- [ ] Male image shows for male users
- [ ] Female image shows for female users
- [ ] Image updates when going back to Step 1 and changing gender
- [ ] Works on mobile devices (vertical layout)
- [ ] Works on desktop (side-by-side layout)
- [ ] Step counter shows "12/12"
- [ ] Quiz completes after Step 12 selection
