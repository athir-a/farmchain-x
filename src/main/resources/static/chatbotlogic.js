let chatRole = 'customer';

// Customer responses
const customerResponses = [
  { keys: ['hello','hi','hey','good morning','good afternoon','good evening','howdy'],
    reply: "👋 Hello! Welcome to FarmChain X. I can help you find fresh produce, check order status, learn about our farms, or get recipe ideas. What can I do for you today?" },
  { keys: ['tomato','tomatoes','heirloom'],
    reply: "🍅 Our **Heirloom Tomatoes** are from Gloria's Sun Valley Farm, rated 4.9★. They're grown without pesticides using heirloom seeds. Price: ₹28/kg. Would you like to add them to your basket?" },
  { keys: ['potato','potatoes','russet'],
    reply: "🥔 **Organic Russet Potatoes** from Highland Root Farm are priced at ₹32/kg — certified organic and mountain-grown. Only 8 units left, so grab them soon!" },
  { keys: ['egg','eggs','brown eggs','free range'],
    reply: "🥚 Our **Free Range Brown Eggs** come from Ethical Pastures — 100% cruelty-free, 5.0★ rated. Priced at ₹90/doz. One of our bestsellers!" },
  { keys: ['ribeye','beef','meat','grass fed'],
    reply: "🥩 **Grass-Fed Ribeye** from Ethical Pastures is ₹249/kg. The cattle are 100% pasture-raised with no hormones. Premium quality, only 5 units in stock!" },
  { keys: ['pepper','peppers','bell pepper','capsicum'],
    reply: "🫑 **Bell Peppers Mix** (red, yellow, green) from Sun Valley Farm — ₹28/kg, rated 4.6★. Only 3 units left — low stock alert! 🚨" },
  { keys: ['apple','apples','honey crisp'],
    reply: "🍎 **Honey Crisp Apples** from Highland Root Farm are ₹168/bag, rated 4.9★. Crisp, sweet, and freshly harvested. 18 units available!" },
  { keys: ['order','orders','my order','track','tracking','status','where is'],
    reply: "📦 You can track your orders in the **'Your Orders'** section on the left menu. Click **'Track'** on any order to see live delivery status. Your most recent order ORD-9921 is currently In Transit and arriving today around 5:30 PM!" },
  { keys: ['delivery','deliver','when','arrive','arrival','shipping'],
    reply: "🚚 FarmChain X delivers within **24–48 hours** of order placement. Same-day delivery is available in select areas. Delivery fee is ₹40 flat. You can track your package live once it's picked up!" },
  { keys: ['price','cost','how much','rate','cheap','expensive','discount','offer'],
    reply: "💰 Here's a quick price guide:\n• Tomatoes: ₹28/kg\n• Potatoes: ₹32/kg\n• Eggs: ₹90/doz\n• Ribeye: ₹249/kg\n• Bell Peppers: ₹28/kg\n• Apples: ₹168/bag\n\nAll prices are direct-from-farm with no middlemen!" },
  { keys: ['farm','farms','farmer','organic','certified','verified'],
    reply: "🌾 FarmChain X has 3 top-rated verified farms:\n• **Gloria's Sun Valley Farm** – Organic, No Pesticides ⭐4.9\n• **Highland Root Farm** – Mountain Grown ⭐4.7\n• **Ethical Pastures** – Cruelty Free ⭐5.0\n\nAll farms are blockchain-verified for authenticity!" },
  { keys: ['basket','cart','checkout','buy','purchase','add'],
    reply: "🛒 To add items to your basket, click any product and hit **'Add to Basket'**. View your basket anytime from the left menu. When ready, click **'Confirm & Pay'** — we accept UPI, cards, and net banking!" },
  { keys: ['recipe','cook','cooking','how to use','meal','dish','idea'],
    reply: "👨‍🍳 Here are some quick recipe ideas using our produce:\n• **Heirloom Tomato Bruschetta** – slice tomatoes, drizzle olive oil, fresh basil\n• **Potato Wedges** – toss with herbs, bake at 200°C\n• **Stuffed Bell Peppers** – fill with rice, cheese, veggies\n• **Herb Ribeye Steak** – season with garlic butter, sear 4 min each side\n\nWant a detailed recipe for any of these?" },
  { keys: ['pay','payment','upi','card','net banking','gpay','phonepe'],
    reply: "💳 We accept multiple payment methods:\n• **UPI** (GPay, PhonePe, Paytm)\n• **Debit/Credit Cards** (Visa, Mastercard, RuPay)\n• **Net Banking**\n• **Cash on Delivery** (select areas)\n\nAll transactions are encrypted and secure!" },
  { keys: ['refund','return','cancel','wrong','damaged','bad quality'],
    reply: "↩️ Our **Fresh Guarantee** policy covers you! If you receive damaged or wrong items:\n1. Report within 24 hours via chat\n2. We'll issue a full refund or replacement\n3. No questions asked for quality issues\n\nYour satisfaction is our priority! 🌟" },
  { keys: ['thank','thanks','great','awesome','perfect','wonderful','good'],
    reply: "😊 You're very welcome! Happy to help. Enjoy your fresh FarmChain X produce! Feel free to ask anything else. 🌱" },
  { keys: ['help','support','problem','issue','contact'],
    reply: "🆘 Need help? I'm here! You can also:\n• Visit **Settings → Help & FAQ** for guides\n• Call our support: **1800-FARMCHAIN** (toll-free)\n• Email: **support@farmchainx.in**\n• Response time: under 2 hours on weekdays!" },
  { keys: ['fresh','quality','safe','pesticide','chemical','natural'],
    reply: "🌿 All FarmChain X produce is:\n✅ Directly sourced from verified farms\n✅ No harmful pesticides or chemicals\n✅ Blockchain-verified freshness\n✅ Harvested-to-order for maximum freshness\n✅ Quality-checked before dispatch" },
  { keys: ['vegetable','vegetables','sabji'],
    reply: "🥦 Our vegetables section includes Heirloom Tomatoes, Organic Russet Potatoes, and Bell Peppers Mix — all from verified local farms. Head to **Categories → Vegetables** to browse. New seasonal items added weekly!" },
  { keys: ['fruit','fruits','sweet'],
    reply: "🍎 Currently we have **Honey Crisp Apples** (₹168/bag, 4.9★) in the fruits section. More seasonal fruits — mangoes, berries, and citrus — are coming soon! Check back weekly for updates." },
];

// Farmer responses
const farmerResponses = [
  { keys: ['hello','hi','hey','good morning','good afternoon'],
    reply: "👋 Hello Gloria! I'm FarmBot. I can help you with managing listings, pricing strategies, harvest planning, inventory alerts, and more. What do you need today?" },
  { keys: ['order','orders','incoming','new order','confirm'],
    reply: "📦 You have **8 pending orders** waiting for confirmation. Head to **Incoming Orders** in the sidebar to review and accept them. Early acceptance improves your response-time score!" },
  { keys: ['price','pricing','how much','set price','increase price','competitive'],
    reply: "💰 Pricing tips for your products:\n• **Tomatoes**: Market avg ₹30–35/kg — you're at ₹28 (competitive!)\n• **Potatoes**: ₹30–40/kg range — consider ₹35 for premium label\n• **Eggs**: ₹80–100/doz — free-range commands premium\n• **Bell Peppers**: ₹25–35/kg\n\nConsider a 10% seasonal hike in winter months!" },
  { keys: ['stock','inventory','restock','low stock','shortage'],
    reply: "📊 Stock alerts:\n🔴 **Bell Peppers** — 3 units left (critical!)\n🟡 **Grass-Fed Ribeye** — 5 units (low)\n🟡 **Potatoes** — 8 units (monitor)\n🟢 All others are healthy\n\nI recommend restocking Bell Peppers within 24 hours to avoid lost sales!" },
  { keys: ['earning','revenue','sales','income','money','profit','payment'],
    reply: "💵 Your farm performance this month:\n• Revenue: **₹48,320** (↑12% vs last month) 🎉\n• Total orders: **142**\n• Platform fee: **10%** per order\n• Next payout: **₹12,400** on Nov 15\n\nAll-time earnings: ₹2,14,850. Keep it up! 🌟" },
  { keys: ['add product','new product','listing','list','create product'],
    reply: "➕ To add a new product:\n1. Click **'Add Product'** in My Products\n2. Enter name, category, unit, price, and stock\n3. Add a product image URL\n4. Hit **'Add Listing'** — it goes live instantly!\n\nTip: High-quality photos increase sales by 40%!" },
  { keys: ['rating','review','feedback','customer feedback','stars','rated'],
    reply: "⭐ Your current rating is **4.9/5** with 128 reviews — excellent! Top tips to maintain it:\n• Confirm orders within 2 hours\n• Pack produce carefully to avoid damage\n• Respond to customer messages promptly\n• Ensure freshness by harvesting close to dispatch time!" },
  { keys: ['harvest','crop','season','when to harvest','grow','growing'],
    reply: "🌱 Harvest tips by product:\n• **Tomatoes**: Pick when fully red, firm to touch. Best early morning.\n• **Potatoes**: Wait until foliage yellows. Dig on dry days.\n• **Bell Peppers**: Harvest after color change for sweeter flavor.\n• **Apples**: Test by twisting — if it comes off easily, it's ready!\n\nWant advice on a specific crop?" },
  { keys: ['profile','farm profile','bio','description','about'],
    reply: "🏡 Your farm profile is looking great! To boost visibility:\n• Add more photos of your farm and process\n• Highlight certifications (Organic, No Pesticides)\n• Keep description updated with seasonal offerings\n• Respond to reviews to show engagement\n\nGo to **Farm Profile** to edit anytime!" },
  { keys: ['payout','payment','bank','transfer','money','withdraw'],
    reply: "💳 Payout information:\n• **Schedule**: Every 2 weeks (1st & 15th)\n• **Next payout**: ₹12,400 on Nov 15\n• **Platform fee**: 10% deducted automatically\n• **Bank**: Linked to your registered account\n\nContact support if any payout is delayed!" },
  { keys: ['tips','advice','improve','better','boost','increase sales'],
    reply: "📈 Top tips to boost your FarmChain X sales:\n1. 🌅 Update stock daily — buyers trust active sellers\n2. 📸 Add fresh product photos regularly\n3. ⚡ Accept orders within 1 hour for better ranking\n4. 💬 Reply to reviews — builds trust\n5. 🏷️ Offer bundle deals (e.g., Tomato+Eggs combo)\n6. 📦 Use eco-friendly packaging — customers love it!" },
  { keys: ['thank','thanks','great','good','awesome','wonderful'],
    reply: "😊 Glad I could help! Wishing you a great harvest season, Gloria. Your farm is one of our top-rated — keep up the excellent work! 🌾" },
  { keys: ['help','support','problem','issue'],
    reply: "🆘 Farmer support is available:\n• **Farmer Helpline**: 1800-FARM-FCX (toll-free)\n• **Email**: farmers@farmchainx.in\n• **Account Manager**: Ravi K. (dedicated to your account)\n• **Response time**: under 1 hour on weekdays\n\nWhat specific issue can I help with?" },
];

function getFakeBotReply(message, role) {
  const lower = message.toLowerCase();
  const responses = role === 'farmer' ? farmerResponses : customerResponses;
  for (const r of responses) {
    if (r.keys.some(k => lower.includes(k))) {
      return r.reply;
    }
  }
  // Fallback responses
  const fallbacks = role === 'farmer'
    ? [
        "🤔 I'm not sure about that specific topic, but I can help with: pricing, inventory, orders, earnings, harvest tips, or profile management. What would you like to know?",
        "🌾 Great question! For detailed farming advice, check the **Farm Profile** section or reach out to our farmer support team. Can I help with anything else?",
        "📊 I can assist with order management, pricing strategies, stock alerts, and payout info. What would you like to explore?"
      ]
    : [
        "🌱 I'm not sure about that! I can help you with: finding products, tracking orders, learning about farms, recipes, or payment options. What would you like?",
        "😊 That's an interesting question! Try browsing the **Categories** section or ask me about specific products, delivery, or your orders!",
        "🛒 I can help you shop smarter! Ask me about fresh produce, farm details, delivery times, or your order status."
      ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function initChatbot(role) {
  chatRole = role;
  document.getElementById('chat-messages').innerHTML = `<div class="chat-msg bot">
    👋 Hi! I'm <strong>FarmBot</strong>, your AI assistant.<br><br>
    ${role === 'farmer'
      ? 'I can help with <strong>orders, pricing, inventory, harvest tips</strong>, and more. How can I help you today, Gloria? 🌾'
      : 'I can help you <strong>find fresh produce, track orders, discover farms</strong>, and get recipe ideas. What are you looking for? 🛒'}
  </div>`;
}

function toggleChat() {
  const w = document.getElementById('chatbot-window');
  w.classList.toggle('open');
  if (w.classList.contains('open')) { document.getElementById('chat-input').focus(); lucide.createIcons(); }
}

function appendMsg(text, sender) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + sender;
  div.innerHTML = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function sendChatMsg() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendMsg(text, 'user');

  // Show typing indicator
  const typingEl = appendMsg('<em>FarmBot is typing…</em>', 'bot typing');

  // Simulate thinking delay (600–1200ms)
  const delay = 600 + Math.random() * 600;
  setTimeout(() => {
    typingEl.remove();
    const reply = getFakeBotReply(text, chatRole);
    const formatted = reply
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    appendMsg(formatted, 'bot');
    lucide.createIcons();
  }, delay);
}