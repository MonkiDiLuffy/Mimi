# Gender-Based Image, Text & Visibility Mapping System

## Overview
The quiz now dynamically updates images, text labels, AND option visibility based on the selected gender (male/female). When a user selects their gender in Step 1, all subsequent images, text, and available options throughout the quiz will be customized to show gender-appropriate visuals, language, and choices.

## Implementation Details

### 1. Global Variables
- `selectedGender`: Stores the currently selected gender ('male' or 'female')
- `imageMap`: Object containing mappings of all images for both genders
- `textMap`: Object containing mappings of all text labels for both genders
- `visibilityMap`: Object controlling which options are shown for each gender ⭐ NEW!

### 2. Visibility Control

The `visibilityMap` object determines which options appear for each gender:

#### Example Configuration:
```javascript
visibilityMap: {
    targetZones: {
        arms: ['male'],                    // Only males see this
        pecs: ['male', 'female'],          // Both see this
        belly: ['male', 'female'],         // Both see this
        legs: ['male', 'female'],          // Both see this
        back: ['male', 'female']           // Both see this
    }
}
```

**Result:**
- **Males** see: Arms, Pecs, Belly, Legs, Back (5 options)
- **Females** see: Chest, Belly, Legs, Back (4 options - "Arms" is hidden)

### 3. Image Mapping Structure

The `imageMap` object contains mappings for:

#### Step 3 - Physical Build
- Slender, Medium, Stocky, Obese
- Currently using same images for both genders (can be customized)

#### Step 4 - Dream Body
- Few sizes smaller, Athletic, Shredded, Swole
- **Male-specific**: `shredded.webp`, `swole.webp`
- **Female-specific**: `toned.png` (for shredded), `athletic.webp` (for swole)

#### Step 5 - Target Zones
- Arms, Pecs, Belly, Legs, Back
- **Male-specific**: `pecs.webp`, `belly.webp`, `legs.webp`
- **Female-specific**: `perkyBreasts.png`, `flatBelly.png`, `tonedLegs.png`

#### Step 6 - Best Shape Illustration
- **Male**: `ideal-time.png`
- **Female**: `ideal-time.webp`

### 4. Text Mapping Structure

The `textMap` object contains gender-specific text labels:

#### Step 3 - Physical Build
- **Male**: "Slender", "Medium build", "Stocky", "Obese"
- **Female**: "Slender", "Medium build", "Curvy", "Plus-size"

#### Step 4 - Dream Body
- **Male**: "A few sizes smaller", "Athletic", "Shredded", "Swole"
- **Female**: "A few sizes smaller", "Athletic", "Toned & Fit", "Strong & Sculpted"

#### Step 5 - Target Zones
- **Male**: "Arms", "Pecs", "Belly", "Legs", "Back"
- **Female**: "Arms", "Chest", "Belly", "Legs", "Back"

### 5. Key Functions

#### `updateImagesForGender(gender)`
Updates all images, text, AND visibility in steps 3-6 based on the selected gender. This function:
- Checks `visibilityMap` to determine which options should be shown/hidden
- Hides options not applicable to the selected gender (using `display: none`)
- Updates images and text labels for visible options only
- Automatically deselects hidden options to prevent invalid selections
- Iterates through all build options and updates their images, text, and visibility
- Updates dream body images, text, and visibility
- Updates target zone images, text, and visibility
- Updates the best shape illustration

#### `initGenderSelection()`
Enhanced to:
- Store the selected gender in `selectedGender` global variable
- Call `updateImagesForGender()` when gender is selected
- Ensure images and text update before advancing to the next step

#### `updateUI()`
Enhanced to:
- Re-apply gender-specific images, text, and visibility when navigating between steps
- Ensures consistency when users go back and forth

## How to Customize Images, Text, and Visibility

### To Hide/Show Options by Gender:

Update the `visibilityMap` object:

```javascript
visibilityMap: {
    targetZones: {
        arms: ['male'],                    // Only males see "Arms"
        pecs: ['male', 'female'],          // Both see this option
        belly: ['female']                  // Only females see "Belly"
    }
}
```

### To Add or Modify Images:

1. Add the image file to the `/assets` folder
2. Update the `imageMap` object with the new path:

```javascript
imageMap: {
    targetZones: {
        arms: {
            male: '../assets/male-arms.webp',
            female: '../assets/female-arms.webp'
        }
    }
}
```

### To Change Text Labels:

3. Update the `textMap` object with the gender-specific text:

```javascript
textMap: {
    targetZones: {
        arms: {
            male: 'Biceps',
            female: 'Toned Arms'
        }
    }
}
```

## Testing

Test the following scenarios:
1. ✅ Select Male → Check images and text in steps 3-6
2. ✅ Select Female → Check images and text in steps 3-6
3. ✅ Navigate back to Step 1 and change gender → Images and text should update
4. ✅ Navigate back and forth between steps → Images and text should remain consistent

## Gender-Specific Differences Summary

### Text Changes:
| Option | Male Text | Female Text |
|--------|-----------|-------------|
| **Physical Build - Stocky** | "Stocky" | "Curvy" |
| **Physical Build - Obese** | "Obese" | "Plus-size" |
| **Dream Body - Shredded** | "Shredded" | "Toned & Fit" |
| **Dream Body - Swole** | "Swole" | "Strong & Sculpted" |
| **Target Zone - Pecs** | "Pecs" | "Chest" |

## Current Gender-Specific Images

### Female-Only Images:
- `perkyBreasts.png` (Target zone: Pecs)
- `flatBelly.png` (Target zone: Belly)
- `tonedLegs.png` (Target zone: Legs)
- `toned.png` (Dream body: Shredded)
- `ideal-time.webp` (Best shape illustration)

### Male-Only Images:
- `pecs.webp` (Target zone: Pecs)
- `belly.webp` (Target zone: Belly)
- `legs.webp` (Target zone: Legs)
- `shredded.webp` (Dream body: Shredded)
- `swole.webp` (Dream body: Swole)
- `ideal-time.png` (Best shape illustration)

### Shared Images:
- `slim.webp`, `athletic.webp`, `overweight.webp`
- `arms.webp`, `back.webp`
