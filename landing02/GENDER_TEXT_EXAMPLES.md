# Gender-Specific Text Changes - Examples

## Overview
This document shows the actual text changes that will appear for male vs female users.

---

## Step 3: Physical Build

### Option 1: Slender
- **Male**: "Slender"
- **Female**: "Slender"
- *No change*

### Option 2: Medium Build
- **Male**: "Medium build"
- **Female**: "Medium build"
- *No change*

### Option 3: Stocky/Curvy
- **Male**: "Stocky" ⚡
- **Female**: "Curvy" ⚡
- *More appropriate and empowering language for women*

### Option 4: Obese/Plus-size
- **Male**: "Obese" ⚡
- **Female**: "Plus-size" ⚡
- *Body-positive language for women*

---

## Step 4: Dream Body

### Option 1: A Few Sizes Smaller
- **Male**: "A few sizes smaller"
- **Female**: "A few sizes smaller"
- *No change*

### Option 2: Athletic
- **Male**: "Athletic"
- **Female**: "Athletic"
- *No change*

### Option 3: Shredded/Toned & Fit
- **Male**: "Shredded" ⚡
- **Female**: "Toned & Fit" ⚡
- *"Shredded" is male-oriented bodybuilding term*
- *"Toned & Fit" is more appealing to female audience*

### Option 4: Swole/Strong & Sculpted
- **Male**: "Swole" ⚡
- **Female**: "Strong & Sculpted" ⚡
- *"Swole" is male gym slang*
- *"Strong & Sculpted" is empowering for women*

---

## Step 5: Target Zones

### Arms
- **Male**: "Arms"
- **Female**: "Arms"
- *No change*

### Pecs/Chest
- **Male**: "Pecs" ⚡
- **Female**: "Chest" ⚡
- *Anatomically appropriate terms*

### Belly
- **Male**: "Belly"
- **Female**: "Belly"
- *No change*

### Legs
- **Male**: "Legs"
- **Female**: "Legs"
- *No change*

### Back
- **Male**: "Back"
- **Female**: "Back"
- *No change*

---

## Visual Example Flow

### Male User Journey:
1. Selects "Male" → Advances to Step 2
2. Step 3 shows: "Slender", "Medium build", **"Stocky"**, **"Obese"**
3. Step 4 shows: "A few sizes smaller", "Athletic", **"Shredded"**, **"Swole"**
4. Step 5 shows: "Arms", **"Pecs"**, "Belly", "Legs", "Back"

### Female User Journey:
1. Selects "Female" → Advances to Step 2
2. Step 3 shows: "Slender", "Medium build", **"Curvy"**, **"Plus-size"**
3. Step 4 shows: "A few sizes smaller", "Athletic", **"Toned & Fit"**, **"Strong & Sculpted"**
4. Step 5 shows: "Arms", **"Chest"**, "Belly", "Legs", "Back"

---

## Benefits of Dynamic Text

✅ **Gender-appropriate language** - Uses terminology that resonates with each audience
✅ **Body-positive** - Avoids potentially negative terms like "Obese" for women
✅ **Culturally relevant** - Uses fitness terms familiar to each gender's community
✅ **More engaging** - Users see content that feels personalized to them
✅ **Better conversion** - Appropriate language increases trust and completion rates

---

## How to Add More Text Variations

Simply add to the `textMap` object in `quiz-script.js`:

```javascript
textMap: {
    build: {
        stocky: {
            male: 'Stocky',
            female: 'Curvy'  // ← Change this text
        }
    }
}
```

The system automatically applies changes when gender is selected!
