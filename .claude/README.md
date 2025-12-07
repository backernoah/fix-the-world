# Fix the World with $1 Trillion

An interactive website where users can spend a trillion-dollar budget on solving 100 real-world problems across 9 categories.

## Project Overview

- **Tech Stack**: Static HTML/CSS/JavaScript (no frameworks)
- **Icons**: Font Awesome 6.5.1 (replacing all emojis to avoid AI-generated look)
- **Monetization**: Google AdSense integration with 2 ad placements
- **Storage**: LocalStorage for game state persistence
- **Design Philosophy**: Clean, minimal design without gradients (to avoid AI-generated appearance)

## Key Features

1. **Budget System**:
   - Start with $1 trillion
   - Track remaining budget and spent amount side-by-side
   - Single color progress bar (no gradients)

2. **100 Items Across 9 Categories**:
   - Micro Actions ($1K - $10K)
   - Community Projects
   - Regional Development
   - National Scale
   - Global Health & Innovation
   - Mega-Projects
   - Global Tech & Exploration
   - Societal Redesign
   - Weird / Fun / Absurd

3. **Currency Formatting**:
   - `formatCurrency()`: Abbreviated format (K, M, B, T) for headers and summaries
   - `formatFullCurrency()`: Full numbers with commas for item cards to show magnitude

4. **Impact Summary Modal**:
   - Shows purchases grouped by category
   - Displays total spent, purchases made, lives impacted, remaining budget
   - Personalized message that varies based on:
     - Number of lives impacted
     - Categories invested in (formatted with "and" before last item)
     - Percentage of budget spent
   - "Weird / Fun / Absurd" displays as "unconventional projects" in messages

## File Structure

- **index.html**: Main HTML structure, 2 ad placements
- **styles.css**: All styling, single-color design, no gradients
- **app.js**: Game logic, state management, currency formatting
- **data.js**: 100 items with costs, impacts, and real organizations

## Design Decisions

- **No gradients**: All backgrounds are solid colors to avoid AI-generated look
- **Font Awesome icons**: Replaced all emojis with icons
- **Full numbers in cards**: Show dramatic spending amounts like $1,000,000,000 instead of $1B
- **Prominent "Spent" display**: Equal prominence to remaining budget
- **Visual separation**: Category cards in impact summary have spacing and shadows

## Recent Changes

1. Added second ad placement for potential viral traffic
2. Replaced all gradients with solid colors
3. Added "Spent" display alongside "Remaining Budget"
4. Changed item cards to show full numbers instead of abbreviated
5. Changed impact summary background from gradient to solid
6. Added dynamic personalized messages in impact summary
7. Fixed category name formatting (unconventional projects, proper "and" before last item)
8. Improved category card separation in impact summary
