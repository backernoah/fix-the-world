# Development Context

## User Preferences

- **Design Style**: Clean, minimal, NOT AI-generated looking
  - No gradients (use solid colors)
  - No emojis (use Font Awesome icons)
  - Professional appearance

- **Currency Display**:
  - Item cards: Full numbers with commas ($1,000,000,000)
  - Headers/summaries: Abbreviated (K, M, B, T)
  - Reasoning: Show dramatic impact of spending

- **Messaging**:
  - Dynamic based on user choices
  - Natural language (avoid awkward category names)
  - "Weird / Fun / Absurd" → "unconventional projects"
  - Proper list formatting with "and" before last item

## Key Code Patterns

### Currency Formatting
```javascript
formatCurrency(amount)     // Returns "1.5B", "250M", etc.
formatFullCurrency(amount) // Returns "1,500,000,000"
```

### Category Name Formatting
When displaying category lists in messages, replace "Weird / Fun / Absurd" with "unconventional projects" and use proper list formatting:
```javascript
const formatList = (items) => {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
};
```

### State Management
```javascript
state = {
  budget: remaining amount,
  spent: total spent,
  livesSaved: total lives impacted,
  purchases: { itemId: count }
}
```

## CSS Variables
- `--bg-primary`: Main background (#0f172a)
- `--bg-secondary`: Cards, modals (#1e293b)
- `--bg-tertiary`: Nested elements (#334155)
- `--success`: Green (#10b981)
- `--accent`: Blue (#3b82f6)
- `--danger`: Red (#ef4444)

## Ad Placements
1. Top banner (728x90 or responsive)
2. Bottom banner (728x90 or responsive)
- Designed for Google AdSense
- Not overwhelming, just enough for viral potential

## Future Considerations
- User requested second ad placement "just in case it goes viral"
- All design choices intentionally avoid AI-generated appearance
- Impact messages should feel personal and varied
