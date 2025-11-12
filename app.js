// State management
const state = {
  budget: TOTAL_BUDGET,
  spent: 0,
  purchases: {}, // { itemId: count }
  currentFilter: 'all',
  livesSaved: 0
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderItems();
  updateBudgetDisplay();
  setupEventListeners();
  setupScrollListener();
});

// Load state from localStorage
function loadState() {
  const saved = localStorage.getItem('fixTheWorldState');
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem('fixTheWorldState', JSON.stringify(state));
}

// Setup event listeners
function setupEventListeners() {
  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.currentFilter = e.target.dataset.category;
      renderItems();
    });
  });

  // FAB button
  document.getElementById('showImpactBtn').addEventListener('click', showImpactModal);

  // Modal close buttons
  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('impactModal').classList.remove('active');
  });

  document.getElementById('itemModalClose').addEventListener('click', () => {
    document.getElementById('itemModal').classList.remove('active');
  });

  // Close modals on background click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Share button
  document.getElementById('shareBtn').addEventListener('click', shareResults);

  // Reset buttons
  document.getElementById('resetBtn').addEventListener('click', resetGame);
  document.getElementById('resetBtnMain').addEventListener('click', resetGame);
}

// Format currency
function formatCurrency(amount) {
  if (amount >= 1e12) {
    const val = (amount / 1e12);
    return `$${val % 1 === 0 ? val.toFixed(0) : val.toFixed(2).replace(/\.?0+$/, '')}T`;
  } else if (amount >= 1e9) {
    const val = (amount / 1e9);
    return `$${val % 1 === 0 ? val.toFixed(0) : val.toFixed(2).replace(/\.?0+$/, '')}B`;
  } else if (amount >= 1e6) {
    const val = (amount / 1e6);
    return `$${val % 1 === 0 ? val.toFixed(0) : val.toFixed(2).replace(/\.?0+$/, '')}M`;
  } else if (amount >= 1e3) {
    const val = (amount / 1e3);
    return `$${val % 1 === 0 ? val.toFixed(0) : val.toFixed(2).replace(/\.?0+$/, '')}K`;
  }
  return `$${amount.toLocaleString()}`;
}

// Format full currency with commas
function formatFullCurrency(amount) {
  return `$${amount.toLocaleString()}`;
}

// Render items grid
function renderItems() {
  const grid = document.getElementById('itemsGrid');
  const filteredItems = state.currentFilter === 'all'
    ? ITEMS
    : ITEMS.filter(item => item.category === state.currentFilter);

  if (filteredItems.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🤷</div>
        <div class="empty-state-text">No items in this category</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredItems.map(item => {
    const purchaseCount = state.purchases[item.id] || 0;
    const canAfford = state.budget >= item.cost;

    return `
      <div class="item-card ${purchaseCount > 0 ? 'purchased' : ''}" data-id="${item.id}">
        ${purchaseCount > 0 ? `<div class="purchase-count">${purchaseCount}</div>` : ''}

        <div class="item-header">
          <div class="item-emoji">${item.emoji}</div>
          <div class="item-cost">${formatFullCurrency(item.cost)}</div>
        </div>

        <h3 class="item-name">${item.name}</h3>
        <p class="item-description">${item.description}</p>

        <div class="item-impact">
          <strong>Impact:</strong> ${item.impactPerPurchase}
        </div>

        <div class="item-actions">
          <button class="btn btn-buy"
                  data-id="${item.id}"
                  ${!canAfford ? 'disabled' : ''}>
            ${canAfford ? '<i class="fas fa-shopping-cart"></i> Buy' : '<i class="fas fa-times"></i> Too Expensive'}
          </button>
          <button class="btn btn-info" data-id="${item.id}"><i class="fas fa-info-circle"></i></button>
        </div>
      </div>
    `;
  }).join('');

  // Add event listeners to buy buttons
  document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = parseInt(btn.dataset.id);
      purchaseItem(itemId);
    });
  });

  // Add event listeners to info buttons
  document.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = parseInt(btn.dataset.id);
      showItemDetail(itemId);
    });
  });

  // Add event listeners to cards
  document.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', () => {
      const itemId = parseInt(card.dataset.id);
      showItemDetail(itemId);
    });
  });
}

// Purchase an item
function purchaseItem(itemId) {
  const item = ITEMS.find(i => i.id === itemId);

  if (!item) return;

  if (state.budget < item.cost) {
    showToast('Not enough budget! 😢', 'error');
    shakeElement(document.querySelector(`[data-id="${itemId}"]`));
    return;
  }

  // Update state
  state.budget -= item.cost;
  state.spent += item.cost;
  state.purchases[itemId] = (state.purchases[itemId] || 0) + 1;

  // Calculate lives saved (rough estimate based on impact)
  const livesEstimate = estimateLivesImpacted(item);
  state.livesSaved += livesEstimate;

  // Save state
  saveState();

  // Update UI
  updateBudgetDisplay();
  renderItems();

  // Show toast
  showToast(`Purchased: ${item.emoji} ${item.name}!`, 'success');

  // Animate
  bounceElement(document.querySelector('.budget-amount'));
}

// Estimate lives impacted (simplified)
function estimateLivesImpacted(item) {
  // Extract numbers from impact text
  const impact = item.impactPerPurchase.toLowerCase();

  // Try to extract numbers with multipliers (M for million, B for billion, K for thousand)
  const patterns = [
    /(\d+(?:\.\d+)?)\s*billion/i,
    /(\d+(?:\.\d+)?)\s*million/i,
    /(\d+(?:\.\d+)?)\s*thousand/i,
    /(\d+(?:\.\d+)?)[bm](?:\s|$)/i, // Catches 700M, 5B, etc.
    /(\d+[\d,]+)/  // Regular numbers with commas
  ];

  for (const pattern of patterns) {
    const match = impact.match(pattern);
    if (match) {
      let num = parseFloat(match[1].replace(/,/g, ''));

      // Apply multipliers
      if (impact.includes('billion') || match[0].toLowerCase().includes('b')) {
        num *= 1000000000;
      } else if (impact.includes('million') || match[0].toLowerCase().includes('m')) {
        num *= 1000000;
      } else if (impact.includes('thousand') || match[0].toLowerCase().includes('k')) {
        num *= 1000;
      }

      return Math.floor(num);
    }
  }

  // Check for specific keywords
  if (impact.includes('saves') || impact.includes('impacts') || impact.includes('helps') ||
      impact.includes('provides') || impact.includes('protects') || impact.includes('serves')) {
    // Try to find any number in the text
    const numMatch = impact.match(/(\d+(?:[,\.]\d+)*)/);
    if (numMatch) {
      const num = parseInt(numMatch[1].replace(/,/g, ''));
      if (num > 1000) return num;
    }
  }

  // Category-based estimates as fallback
  if (item.category === 'micro') return 50;
  if (item.category === 'community') return 500;
  if (item.category === 'regional') return 5000;
  if (item.category === 'national') return 50000;
  if (item.category === 'global_health') return 500000;
  if (item.category === 'mega') return 5000000;
  if (item.category === 'space') return 50000;
  if (item.category === 'society') return 10000000;
  if (item.category === 'absurd') return 1000;

  return 500;
}

// Update budget display
function updateBudgetDisplay() {
  const budgetEl = document.getElementById('budgetAmount');
  const spentEl = document.getElementById('spentAmount');
  const barFillEl = document.getElementById('budgetBarFill');
  const itemsPurchasedEl = document.getElementById('itemsPurchased');
  const livesSavedEl = document.getElementById('livesSaved');
  const fabBadge = document.getElementById('fabBadge');

  // Update amounts
  budgetEl.textContent = formatFullCurrency(state.budget);
  spentEl.textContent = formatFullCurrency(state.spent);

  // Update budget bar
  const percentageRemaining = (state.budget / TOTAL_BUDGET) * 100;
  barFillEl.style.width = `${percentageRemaining}%`;

  // Update color based on budget
  budgetEl.classList.remove('warning', 'danger');
  barFillEl.classList.remove('warning');

  if (percentageRemaining < 10) {
    budgetEl.classList.add('danger');
    barFillEl.classList.add('warning');
  } else if (percentageRemaining < 25) {
    budgetEl.classList.add('warning');
  }

  // Update stats
  const totalPurchases = Object.values(state.purchases).reduce((a, b) => a + b, 0);
  itemsPurchasedEl.textContent = totalPurchases.toLocaleString();
  livesSavedEl.textContent = state.livesSaved.toLocaleString();
  fabBadge.textContent = totalPurchases;

  // Hide FAB badge if no purchases
  if (totalPurchases === 0) {
    fabBadge.style.display = 'none';
  } else {
    fabBadge.style.display = 'flex';
  }

  // Update mini header
  const miniBudget = document.getElementById('miniBudget');
  const miniPurchased = document.getElementById('miniPurchased');
  const miniLives = document.getElementById('miniLives');

  if (miniBudget) miniBudget.textContent = formatCurrency(state.budget);
  if (miniPurchased) miniPurchased.textContent = totalPurchases.toLocaleString();
  if (miniLives) miniLives.textContent = state.livesSaved.toLocaleString();
}

// Show item detail modal
function showItemDetail(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const purchaseCount = state.purchases[itemId] || 0;
  const canAfford = state.budget >= item.cost;
  const category = CATEGORIES[item.category];

  const detailHtml = `
    <div class="item-detail-header">
      <div class="item-detail-emoji">${item.emoji}</div>
      <div class="item-detail-info">
        <h2>${item.name}</h2>
        <div class="item-detail-cost">${formatCurrency(item.cost)}</div>
      </div>
    </div>

    <div class="item-detail-section">
      <h3><i class="fas fa-file-alt"></i> Description</h3>
      <p>${item.description}</p>
    </div>

    <div class="item-detail-section">
      <h3><i class="fas fa-globe"></i> Global Context</h3>
      <p>${item.totalNeed}</p>
    </div>

    <div class="item-detail-section">
      <h3><i class="fas fa-chart-line"></i> Impact Per Purchase</h3>
      <p>${item.impactPerPurchase}</p>
    </div>

    <div class="item-detail-section">
      <h3><i class="fas fa-lightbulb"></i> Fun Fact</h3>
      <p>${item.funFact}</p>
    </div>

    <div class="item-detail-section">
      <h3><i class="fas fa-tag"></i> Category</h3>
      <p>${category.emoji} ${category.name}</p>
    </div>

    ${item.organizations && item.organizations.length > 0 ? `
      <div class="item-detail-section">
        <h3><i class="fas fa-handshake"></i> Organizations Working on This</h3>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
          ${item.organizations.map(org => `
            <a href="${org.url}" target="_blank" rel="noopener noreferrer"
               style="color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 5px;">
              <i class="fas fa-external-link-alt"></i> ${org.name}
              <span style="font-size: 0.8rem; opacity: 0.7;">↗</span>
            </a>
          `).join('')}
        </div>
      </div>
    ` : item.category === 'absurd' ? `
      <div class="item-detail-section">
        <h3><i class="fas fa-handshake"></i> Organizations</h3>
        <p style="font-style: italic; opacity: 0.8;"><i class="fas fa-smile"></i> This is just for fun! No real organization is working on building a Death Star... that we know of.</p>
      </div>
    ` : ''}

    ${purchaseCount > 0 ? `
      <div class="item-detail-section">
        <h3><i class="fas fa-check-circle"></i> You've purchased this</h3>
        <p>Times purchased: <strong>${purchaseCount}</strong></p>
        <p>Total spent: <strong>${formatCurrency(item.cost * purchaseCount)}</strong></p>
      </div>
    ` : ''}

    <div class="item-detail-actions">
      <button class="btn-primary" onclick="purchaseItem(${item.id}); document.getElementById('itemModal').classList.remove('active');" ${!canAfford ? 'disabled' : ''}>
        ${canAfford ? '<i class="fas fa-shopping-cart"></i> Purchase Now' : '<i class="fas fa-times"></i> Not Enough Budget'}
      </button>
    </div>
  `;

  document.getElementById('itemDetail').innerHTML = detailHtml;
  document.getElementById('itemModal').classList.add('active');
}

// Show impact summary modal
function showImpactModal() {
  const totalPurchases = Object.values(state.purchases).reduce((a, b) => a + b, 0);

  if (totalPurchases === 0) {
    showToast('Make some purchases first! 🛒', 'error');
    return;
  }

  // Group purchases by category
  const purchasesByCategory = {};

  Object.entries(state.purchases).forEach(([itemId, count]) => {
    const item = ITEMS.find(i => i.id === parseInt(itemId));
    if (!item) return;

    if (!purchasesByCategory[item.category]) {
      purchasesByCategory[item.category] = [];
    }

    purchasesByCategory[item.category].push({
      item,
      count,
      totalCost: item.cost * count
    });
  });

  // Generate HTML
  let summaryHtml = '';

  Object.entries(purchasesByCategory).forEach(([categoryKey, purchases]) => {
    const category = CATEGORIES[categoryKey];
    const categoryTotal = purchases.reduce((sum, p) => sum + p.totalCost, 0);

    // Calculate lives impacted for this category
    const categoryLivesImpacted = purchases.reduce((sum, p) => {
      const livesPerItem = estimateLivesImpacted(p.item);
      return sum + (livesPerItem * p.count);
    }, 0);

    summaryHtml += `
      <div class="impact-category">
        <h3>${category.emoji} ${category.name}</h3>
        ${purchases.map(p => `
          <div class="impact-item">
            <span class="impact-item-name">${p.item.emoji} ${p.item.name}</span>
            <span class="impact-item-count">×${p.count} (${formatCurrency(p.totalCost)})</span>
          </div>
        `).join('')}
        <div class="category-total-section">
          <div class="category-total-header">Category Total</div>
          <div class="category-total-amount">${formatFullCurrency(categoryTotal)}</div>
          <div class="category-total-lives"><i class="fas fa-users"></i> ${categoryLivesImpacted.toLocaleString()} lives impacted</div>
        </div>
      </div>
    `;
  });

  // Generate personalized message based on spending
  const categoriesInvested = Object.keys(purchasesByCategory);
  const percentSpent = ((state.spent / TOTAL_BUDGET) * 100);

  // Format category names nicely
  const categoryNames = categoriesInvested.map(c => {
    const name = CATEGORIES[c].name;
    // Replace "Weird / Fun / Absurd" with something more natural
    return name === "Weird / Fun / Absurd" ? "unconventional projects" : name;
  });

  // Format list with "and" before last item
  const formatList = (items) => {
    if (items.length === 0) return '';
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
  };

  const formattedCategories = formatList(categoryNames);

  let personalMessage = '';

  if (state.livesSaved > 1000000) {
    personalMessage = `You've made a profound impact on over ${state.livesSaved.toLocaleString()} lives by investing in ${formattedCategories}. Your choices show a deep commitment to making the world better. `;
  } else if (state.livesSaved > 100000) {
    personalMessage = `Through your investments in ${formattedCategories}, you've positively impacted ${state.livesSaved.toLocaleString()} lives. That's a powerful legacy. `;
  } else if (state.livesSaved > 10000) {
    personalMessage = `Your focus on ${formattedCategories} has improved ${state.livesSaved.toLocaleString()} lives in meaningful ways. `;
  } else {
    personalMessage = `By investing in ${formattedCategories}, you've made a real difference for ${state.livesSaved.toLocaleString()} people. `;
  }

  if (percentSpent < 10) {
    personalMessage += `You've barely scratched the surface with ${percentSpent.toFixed(1)}% of your budget spent—there's still ${formatCurrency(state.budget)} left to change even more lives.`;
  } else if (percentSpent < 50) {
    personalMessage += `You've used ${percentSpent.toFixed(1)}% of your budget thoughtfully, and still have ${formatCurrency(state.budget)} remaining to continue your mission.`;
  } else if (percentSpent < 90) {
    personalMessage += `With ${percentSpent.toFixed(1)}% of your budget deployed, you've committed seriously to making change, with ${formatCurrency(state.budget)} left for final priorities.`;
  } else if (percentSpent < 100) {
    personalMessage += `You've gone all in, spending ${percentSpent.toFixed(1)}% of your trillion! Only ${formatCurrency(state.budget)} remains—every dollar counts now.`;
  } else {
    personalMessage += `You've spent every last dollar of your trillion on making the world better. Nothing left for yourself, just pure impact.`;
  }

  summaryHtml += `
    <div class="impact-total">
      <h3>Total Impact</h3>
      <div style="margin-bottom: 10px; font-size: 0.9rem; opacity: 0.9;">Total Spent</div>
      <div class="impact-total-value">${formatFullCurrency(state.spent)}</div>
      <div style="margin-top: 15px; font-size: 1.1rem;">
        <div><i class="fas fa-shopping-cart"></i> ${totalPurchases} purchases made</div>
        <div><i class="fas fa-users"></i> ${state.livesSaved.toLocaleString()} lives impacted</div>
        <div><i class="fas fa-wallet"></i> ${formatFullCurrency(state.budget)} remaining</div>
      </div>
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border); font-size: 0.95rem; line-height: 1.6; opacity: 0.9;">
        ${personalMessage}
      </div>
    </div>
  `;

  document.getElementById('modalBody').innerHTML = summaryHtml;
  document.getElementById('impactModal').classList.add('active');
}

// Share results
function shareResults() {
  const totalPurchases = Object.values(state.purchases).reduce((a, b) => a + b, 0);
  const percentageUsed = ((state.spent / TOTAL_BUDGET) * 100).toFixed(1);

  const shareText = `I spent ${formatCurrency(state.spent)} of $1 trillion to fix the world! 🌍\n\n` +
    `💰 ${totalPurchases} purchases made\n` +
    `🌍 ${state.livesSaved.toLocaleString()} lives impacted\n` +
    `📊 Used ${percentageUsed}% of budget\n\n` +
    `Can you do better? Try it at: ${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: 'Fix the World with $1 Trillion',
      text: shareText
    }).catch(err => {
      console.log('Share failed:', err);
      copyToClipboard(shareText);
    });
  } else {
    copyToClipboard(shareText);
  }
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Results copied to clipboard! 📋', 'success');
  }).catch(() => {
    showToast('Could not copy to clipboard 😢', 'error');
  });
}

// Reset game
function resetGame() {
  if (!confirm('Are you sure you want to start over? All progress will be lost.')) {
    return;
  }

  state.budget = TOTAL_BUDGET;
  state.spent = 0;
  state.purchases = {};
  state.livesSaved = 0;

  saveState();
  updateBudgetDisplay();
  renderItems();

  document.getElementById('impactModal').classList.remove('active');
  showToast('<i class="fas fa-redo"></i> Game reset! Start fresh!', 'success');
}

// Show toast notification
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');

  // Limit to max 3 toasts
  while (container.children.length >= 3) {
    container.removeChild(container.firstChild);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Animation utilities
function bounceElement(element) {
  if (!element) return;
  element.classList.remove('bounce');
  void element.offsetWidth; // Trigger reflow
  element.classList.add('bounce');
  setTimeout(() => element.classList.remove('bounce'), 500);
}

function shakeElement(element) {
  if (!element) return;
  element.classList.remove('shake');
  void element.offsetWidth; // Trigger reflow
  element.classList.add('shake');
  setTimeout(() => element.classList.remove('shake'), 300);
}

// Setup scroll listener for mini header
function setupScrollListener() {
  const miniHeader = document.getElementById('miniHeader');
  const mainHeader = document.getElementById('mainHeader');

  let headerHeight = mainHeader ? mainHeader.offsetHeight : 400;

  window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight - 100) {
      miniHeader.classList.add('visible');
    } else {
      miniHeader.classList.remove('visible');
    }
  });

  // Update header height on resize
  window.addEventListener('resize', () => {
    headerHeight = mainHeader ? mainHeader.offsetHeight : 400;
  });
}

// Make functions globally accessible
window.purchaseItem = purchaseItem;
window.showItemDetail = showItemDetail;
