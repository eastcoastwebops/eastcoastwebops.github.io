const quotes = [
  "If life gives you lemons, make lemonade. - unknown",
  "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month. - unknown",
  "Get your facts first, then you can distort them as you please. - Mark Twain",
  "My grandmother started walking five miles a day when she was sixty. She's 97 now, and we don't know where the hell she is. - unknown",
  "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
  "When we talk to God, we're praying. When God talks to us, we're schizophrenic. - Jane Wagner",
  "Money won't buy happiness, but it will pay the salaries of a large research staff to study the problem. - Bill Vaughan",
  "What's another word for Thesaurus? - Steven Wright",
  "I love deadlines. I like the whooshing sound they make as they fly by. - Douglas Adams",
  "Always end the name of your child with a vowel, so that when you yell the name will carry. - Bill Cosby",
  "How many people here have telekinetic powers? Raise my hand. - Emo Philips",
  "Boy, those French: they have a different word for everything! - Steve Martin",
  "I was so naive as a kid I used to sneak behind the barn and do nothing. - Johnny Carson",
  "My theory is that all of Scottish cuisine is based on a dare. - Mike Myers",
  "If you tell the truth, you don't have to remember anything. - Mark Twain",
  "When your friends begin to flatter you on how young you look, it's a sure sign you're getting old. - Mark Twain",
  "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools. - Douglas Adams",
  "Constant dripping will wear away a stone. - Greek Proverb",
  "If you would hit the mark, you must aim a little above it. - Henry Wadsworth Longfellow",
  "Why prove to a man he is wrong? Is that going to make him like you? Why not let him save his face? He didn’t ask for your opinion. He didn’t want it. Why argue with him? Always avoid the acute angle.",
  "Wouldn’t you like to have a magic phrase that would stop arguments, eliminate ill feeling, create goodwill, and make the other person listen attentively? Yes? All right. Here it is: “I don’t blame you one iota for feeling as you do. If I were you, I would undoubtedly feel just as you do.”",
  "Let Charles Schwab say it in his own words: “The way to get things done,” says Schwab, “is to stimulate competition. I do not mean in a sordid, money-getting way, but in the desire to excel.”"
];

let currentQuoteIndex = 0;

function getNextQuote() {
  const quote = quotes[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  return quote;
}

function displayQuote() {
  const quote = getNextQuote();
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: "showQuote", quote: quote }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error sending message:", chrome.runtime.lastError.message);
        } else {
          console.log("Message sent to content script:", response);
        }
      });
    } else {
      console.log("No active tab found.");
    }
  });
}

// Display the first quote immediately
displayQuote();

// Set an alarm to trigger every 2 minutes
chrome.alarms.create('quoteAlarm', { periodInMinutes: 1/2 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'quoteAlarm') {
    displayQuote();
  }
});
