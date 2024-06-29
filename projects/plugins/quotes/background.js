const quotes = [
  "Why prove to a man he is wrong? Is that going to make him like you? Why not let him save his face? He didn’t ask for your opinion. He didn’t want it. Why argue with him? Always avoid the acute angle.",
  "If you argue and rankle and contradict, you may achieve a victory sometimes; but it will be an empty victory because you will never get your opponent’s good will.",
  "If you are going to prove anything, don’t let anybody know it. Do it so subtly, so adroitly, that no one will feel that you are doing it.",
  "As Lord Chesterfield said to his son: 'Be wiser than other people if you can; but do not tell them so.'",
  "Show respect for the other person’s opinions. Never say, 'You’re wrong.'",
  "There is a certain degree of satisfaction in having the courage to admit one’s errors. It not only clears the air of guilt and defensiveness, but often helps solve the problem created by the error.",
  "Freud calls 'the desire to be great.' It is what Dewey calls 'the desire to be important.'",
  "The average young criminal, according to E. P. Mulrooney, onetime police commissioner of New York, is filled with ego, and his first request after arrest is for those lurid newspapers that make him out a hero. The disagreeable prospect of serving time seems remote so long as he can gloat over his likeness sharing space with pictures of sports figures, movie stars, and.",
  "Of course, it doesn’t work. People are not interested in you. They are not interested in me. They are interested in themselves—morning, noon, and after dinner.",
  "When somebody calls you on the phone, use the same psychology. Say 'Hello' in tones that show unquestionably how pleased you are to hear the person’s voice.",
  "We should be aware of the magic contained in a name and realize that this single item is wholly owned by the person with whom we are dealing.",
  "we so richly deserve. Oh yes, I did want something out of that chap. I wanted something priceless. And I got it. I got the feeling that I had done something for him without his being able to do anything whatever in return for me. That is a feeling that flows and sings in your memory long after the incident is past.",
  "Little phrases such as 'I’m sorry to trouble you,' 'Would you be so kind as to ———?' 'Won’t you please?' 'Would you mind?' 'Thank you': Little courtesies like these oil the cogs of the monotonous grind of everyday life.",
  "This lady, left all alone in a big house with her paisley shawls, her French antiques, and her memories, was starving for a little recognition. She had once been young and beautiful and sought after. She had once built a house warm with love and had collected things from all over Europe to make it beautiful. Now, in the isolated loneliness of old age, she craved a little human warmth, a little genuine appreciation—and no one gave it to her. And when she found it, like a spring in the desert, her gratitude couldn’t adequately express itself with anything less than the gift of her cherished Packard.",
  "Scolding parents and domineering bosses and argumentative spouses ought to realize that people don’t want to change their minds. They can’t be forced or driven to agree with you or me. But they may possibly be led to, if we are gentle and friendly, ever so gentle and ever so friendly.",
  "‘What a relief it is,’ he said, ‘to have a satisfied tenant like you.’ And then, without my even asking him to do it, he offered to reduce my rent a little. I wanted more, so I named the figure I could afford to pay, and he accepted without a word.",
  "If I had tried to get the rent reduced by the methods the other tenants were using, I am positive I should have met with the same failure they encountered. It was the friendly, sympathetic, appreciative approach that won.",
  "In talking with people, do not begin by discussing the things on which you differ. Begin by emphasizing—and keep on emphasizing—the things on which you agree.",
  "When a person says ‘No’ and really means it, he or she is doing far more than saying a word of two letters.",
  "The whole neuromuscular system, in short, sets itself on guard against acceptance.",
  "Socratic method,” was based upon getting a “Yes, yes” response. He asked questions with which his opponent would have to agree. He kept on winning one admission after another until he had an armful of yesses. He kept on asking questions until finally, almost without realizing it, his opponents found themselves embracing a conclusion they would have bitterly denied a few minutes previously.",
  "‘He who treads softly goes far.’",
  "Let the other people talk themselves out. They know more about their business and problems than you do. So ask them questions. Let them tell you a few things. If you disagree with them you may be tempted to interrupt. But don’t. It is dangerous. They won’t pay attention to you while they still have a lot of ideas of their own crying for expression. So listen patiently and with an open mind. Be sincere about it. Encourage them to express their ideas fully.",
  "So if we want to win people to our way of thinking: PRINCIPLE 6 Let the other person do a great deal of the talking.",
  "If, as a result of reading this book, you get only one thing—an increased affinity to think always of the other person’s point of view, and see things from that person’s angle as well as your own—if you get only that one thing from this book, it may easily prove to be one of the stepping-stones of your career.",
  "Wouldn’t you like to have a magic phrase that would stop arguments, eliminate ill feeling, create goodwill, and make the other person listen attentively? Yes? All right. Here it is: “I don’t blame you one iota for feeling as you do. If I were you, I would undoubtedly feel just as you do.”",
  "Let Charles Schwab say it in his own words: “The way to get things done,” says Schwab, “is to stimulate competition. I do not mean in a sordid, money-getting way, but in the desire to excel.”"
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const quote = getRandomQuote();
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

// Set an alarm to trigger every 10 seconds
chrome.alarms.create('quoteAlarm', { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'quoteAlarm') {
    console.log("Alarm triggered: ", alarm.name);
    displayQuote();
  }
});

// Initialize by displaying a quote immediately
displayQuote();
