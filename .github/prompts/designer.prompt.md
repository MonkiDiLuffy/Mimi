---
mode: agent
---
I am uploading a screenshot (attached). Please analyze it and produce a faithful reproduction of the UI in HTML, CSS, and JS. Your goal is pixel-level accuracy.

Here’s how to proceed:

Layout analysis: break down the UI into structural containers, rows/columns, grids, overlays, modals, etc. Explain the hierarchy — e.g. a header div, a nav bar, a content container, footers, cards, etc.

Style extraction: for each visual element (text, buttons, inputs, icons, images, backgrounds) extract exact CSS properties: color (hex or rgba), typography (font family, size, weight, line-height), margins, paddings, borders, shadows, border-radius, positioning, etc.

HTML structure: map the layout into semantic HTML (divs, section, nav, header, etc.). Use classes/IDs to mark each component. Add comments where helpful (e.g. <!-- top banner section -->).

CSS file: generate a separate CSS (or <style> block) containing all styles, using class selectors or semantic selectors. Be precise (px units or rem where appropriate).

JavaScript / Interaction: if there are interactive parts in the screenshot (hover states, toggles, animations, dropdowns, modal open/close), provide the minimal JS (vanilla JS) needed to replicate them.

Style guide / tokens: at the end, output a “design tokens / style guide” section summarizing colors (primary, secondary, background, text), typography scales, spacing scales, and reusable classes/components you defined.

Uncertainty marking: if any part of the screenshot is ambiguous (e.g. icon detail, subtle shadow), make your best guess but annotate it in a comment (e.g. /* guessed color here */).

Output format (wrap your answer in markdown):

index.html code (with HTML + link to CSS + script tag)

styles.css (or CSS inline block)

script.js (if needed)

“Style Guide / Tokens” section

Please do not introduce extra components or deviate from layout. Keep to HTML/CSS/JS, no external libraries.