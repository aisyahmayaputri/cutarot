// ==========================================
// --- DATA ZODIAC ---
// ==========================================
const ZODIAC_DATA = [
    { 
        id: 'aries', name: 'Aries', dateRange: 'March 21 – April 19', element: 'Fire Element', tarotMatch: 'The Emperor',
        desc: 'Aries is the first spark in the zodiac wheel—a symbol of pure energy that eagerly welcomes new beginnings. Known for a boldness that often precedes fear, this sign lives in fast motion, high initiative, and the belief that the path of life must be forged rather than merely followed.<br><br>In tarot readings, Aries deeply resonates with <strong>The Emperor</strong>, reflecting authority, assertiveness, and a strong protective spirit. The greatest challenge for an Aries is to tame the ego and learn that patience is not a weakness, but the ultimate strategy to win long-term battles.',
        svg: '<path d="M4,14 C4,8 12,4 12,12 C12,4 20,8 20,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'taurus', name: 'Taurus', dateRange: 'April 20 – May 20', element: 'Earth Element', tarotMatch: 'The Hierophant',
        desc: 'Taurus is the physical embodiment of grounded, steady earth. They possess a deep appreciation for aesthetic beauty, sensory comfort, and well-planned life stability. Beneath their calm demeanor lies a determination that is nearly impossible to shake.<br><br>Taurus energy reflects <strong>The Hierophant</strong>—symbolizing guarded traditional values, down-to-earth spiritual searching, and unwavering loyalty in relationships. For Taurus, home is not just a place, but a sanctuary built with immense patience.',
        svg: '<circle cx="12" cy="14" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7,9 C7,4 17,4 17,9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'gemini', name: 'Gemini', dateRange: 'May 21 – June 20', element: 'Air Element', tarotMatch: 'The Lovers',
        desc: 'Gemini is the nimble spring breeze, carrying boundless curiosity and captivating intellect. They are explorers of ideas, capable of viewing a single problem from multiple perspectives with a lively, charming communication style.<br><br>Their dynamic character is represented by <strong>The Lovers</strong>, symbolizing not only romance but also life-altering choices and the integration of dualities within the self. Gemini\'s greatest challenge is finding focus amidst the storm of information they absorb daily.',
        svg: '<path d="M7,5 L17,5 M7,19 L17,19 M9,5 L9,19 M15,5 L15,19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'cancer', name: 'Cancer', dateRange: 'June 21 – July 22', element: 'Water Element', tarotMatch: 'The Chariot',
        desc: 'Cancer is an ocean of emotion holding extraordinary depths behind protective shells. Ruled by lunar energies, they possess razor-sharp intuition—often sensing shifts in a room\'s energy long before anyone else notices.<br><br>This sign represents <strong>The Chariot</strong>, symbolizing an intense emotional journey where they must learn to navigate powerful tides without losing themselves. Cancer is the safest harbor for those they hold dear.',
        svg: '<circle cx="8" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11,10 C16,7 20,10 18,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="14" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13,14 C8,17 4,14 6,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'leo', name: 'Leo', dateRange: 'July 23 – August 22', element: 'Fire Element', tarotMatch: 'Strength',
        desc: 'Leo radiates the solar warmth that brings life to everything around them. Boundless creativity, a generous spirit, and natural charisma ensure a Leo always stands out effortlessly without trying too hard.<br><br>Their energy aligns with <strong>Strength</strong>—not raw physical force, but gentle courage, sincerity, and the ability to tame deep-seated fears through supreme self-confidence. Beneath the spotlight, Leo holds a fiercely loyal heart.',
        svg: '<circle cx="7" cy="17" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10,17 C13,17 18,14 15,9 C12,4 6,8 9,13 C12,18 19,16 19,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'virgo', name: 'Virgo', dateRange: 'Aug 23 – Sep 22', element: 'Earth Element', tarotMatch: 'The Hermit',
        desc: 'Virgo is the architect of precision, finding beauty in minute details that others overlook. They are analytical, deeply dedicated, and driven by a sincere impulse to mend and nurture their environment.<br><br>Their reflective character mirrors <strong>The Hermit</strong>—the quest for ultimate truth, the need for solitude to recharge mental clarity, and wisdom born from deep observation. Virgo is love manifested through tangible acts of service.',
        svg: '<path d="M5,17 L7,7 L11,17 L14,9 C14,9 15,19 18,17 C21,15 19,10 19,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'libra', name: 'Libra', dateRange: 'Sep 23 – Oct 22', element: 'Air Element', tarotMatch: 'Justice',
        desc: 'Libra is a graceful dancer along the line of equilibrium. Under the banner of aesthetic planets, they possess refined artistic taste, a deep aversion to unnecessary conflict, and a natural gift for weaving peace between opposing forces.<br><br>This sign resonates strongly with <strong>Justice</strong>, symbolizing objectivity, the pursuit of true fairness, and weighing choices with a cool head. Libra teaches us that harmony is an art form requiring daily maintenance.',
        svg: '<path d="M4,15 L20,15 M4,18 L20,18 M12,15 C12,10 8,11 6,15 M12,15 C12,10 16,11 18,15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'scorpio', name: 'Scorpio', dateRange: 'Oct 23 – Nov 21', element: 'Water Element', tarotMatch: 'Death',
        desc: 'Scorpio is a mystery living in intense emotional depths. They do not understand half-measures; for a Scorpio, relationships, ambitions, and feelings must be pursued with absolute totality or left behind entirely.<br><br>Their energy is closely tied to <strong>Death</strong>—not a terrifying end, but radical transformation, shedding obsolete pasts, and rising like a phoenix from the ashes of adversity. Scorpio is the ultimate symbol of spiritual rebirth.',
        svg: '<path d="M5,14 L7,6 L11,14 L14,7 C14,7 16,14 18,13 C20,12 20,8 20,8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20,8 L22,10 M20,8 L18,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'sagittarius', name: 'Sagittarius', dateRange: 'Nov 22 – Dec 21', element: 'Fire Element', tarotMatch: 'Temperance',
        desc: 'Sagittarius is the free archer viewing the vast horizon as home. Their adventurous spirit hungers for new experiences, life philosophies, and absolute freedom to fly wherever the wind takes them.<br><br>Their character links directly to <strong>Temperance</strong>—symbolizing the synthesis of life experiences into wisdom, spiritual alignment, and maintaining steady optimism. Sagittarius reminds us that life is a sacred journey meant to be savored every step of the way.',
        svg: '<path d="M6,18 L18,6 M12,6 L18,6 L18,12 M4,14 L10,20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'capricorn', name: 'Capricorn', dateRange: 'Dec 22 – Jan 19', element: 'Earth Element', tarotMatch: 'The Devil',
        desc: 'Capricorn is the patient mountain climber, disciplined and unfazed by how steep the peak ahead may be. They possess incredible mental resilience, a strong work ethic, and mature long-term vision.<br><br>In spiritual dimensions, they reflect lessons from <strong>The Devil</strong>—recognizing worldly attachments, mastering personal ambitions, and freeing one’s deepest potential from the fear of failure. Capricorn proves true success is built through daily consistency.',
        svg: '<path d="M5,7 L8,17 L12,9 C12,9 18,6 18,11 C18,16 14,20 9,19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'aquarius', name: 'Aquarius', dateRange: 'Jan 20 – Feb 18', element: 'Air Element', tarotMatch: 'The Star',
        desc: 'Aquarius is the future dreamer standing outside conventional boxes. Their minds wander far ahead of their time, bringing innovation, strong idealism, and profound care for collective human well-being.<br><br>Their energy shines brightly through <strong>The Star</strong>—bringing pure inspiration, hope after dark times, and spiritual conviction that the universe guides their steps. Aquarius is a spark of renewal for the world.',
        svg: '<path d="M3,9 L7,5 L11,9 L15,5 L19,9 M3,15 L7,11 L11,15 L15,11 L19,15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'pisces', name: 'Pisces', dateRange: 'Feb 19 – Mar 20', element: 'Water Element', tarotMatch: 'The Moon',
        desc: 'Pisces is the final poet of the zodiac, living between tangible reality and magical dreamscapes. They possess limitless empathy, high artistic sensitivity, and deep inner ties to spiritual dimensions.<br><br>This sign merges closely with <strong>The Moon</strong>—exploring subconscious mysteries, unerring intuition, and facing illusions with graceful soulfulness. Pisces is the sanctuary where art, love, and wonder melt into one.',
        svg: '<path d="M8,4 C5,10 5,14 8,20 M16,4 C19,10 19,14 16,20 M6,12 L18,12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    }
];

const SPREADS = [
    { id: 'free', name: 'Free Spread', desc: 'Draw as many cards as you like (1-13).', count: 3 },
    { id: 'daily', name: 'Daily Draw', desc: 'A single card to guide your focus for the day.', count: 1 },
    { id: 'past-present-future', name: 'Past, Present, Future', desc: 'Understand how the past influences the present.', count: 3 },
    { id: 'relationship', name: 'Relationship', desc: 'Explore relationship dynamics.', count: 3 },
    { id: 'celtic-cross', name: 'Celtic Cross', desc: 'A comprehensive 10-card reading for deep situational insights.', count: 10 },
    { id: 'yearly', name: 'Yearly Spread', desc: 'A 12-card spread offering guidance for each month of the year.', count: 12 },
    { id: 'year-ahead', name: 'Year Ahead', desc: '13 cards revealing the 12 months plus the overarching theme of the year.', count: 13 },
    { id: 'monthly', name: 'Monthly Spread', desc: 'A look at the upcoming weeks and overall energy of the month.', count: 5 },
    { id: 'weekly', name: 'Weekly Spread', desc: 'Daily guidance and overarching theme for the upcoming week.', count: 7 },
    { id: 'seasonal', name: 'Seasonal Reading', desc: 'Guidance to navigate the shifting energies of the new season.', count: 5 },
    { id: 'career', name: 'Career Path', desc: 'Gain clarity on your professional journey and upcoming opportunities.', count: 5 }
];

// ==========================================
// --- COMPLETE 78 TRADITIONAL TAROT DECK ---
// ==========================================
const TAROT_DECK = [
    {
        name: 'The Fool', arcana: 'Major Arcana', number: 0, yesNo: 'Yes', astrology: 'Uranus',
        img: 'assets/major/the-fool.png',
        upright: 'New beginnings, innocence, spontaneity, a leap of faith into the unknown, and taking a bold first step on a grand adventure.',
        reversed: 'Recklessness, risk-taking without foresight, hesitation, folly, or holding back out of unwarranted fear.',
        love: 'A fresh, exciting romance filled with spontaneity. For singles, expect unexpected new romantic potentials.'
    },
    {
        name: 'The Magician', arcana: 'Major Arcana', number: 1, yesNo: 'Yes', astrology: 'Mercury',
        img: 'assets/major/the-magician.png',
        upright: 'Manifestation, willpower, skill, razor-sharp focus, and the ability to turn resources into reality.',
        reversed: 'Manipulation, trickery, squandered potential, lack of focus, or hidden ill intentions.',
        love: 'Magnetic communication in relationships. Time to take concrete actions to draw your crush closer.'
    },
    {
        name: 'The High Priestess', arcana: 'Major Arcana', number: 2, yesNo: 'Yes (Intuitive)', astrology: 'Moon',
        img: 'assets/major/the-high-priestess.png',
        upright: 'Deep intuition, mystery, the subconscious mind, hidden wisdom, and honoring your inner voice.',
        reversed: 'Secrets exposed, ignoring gut feelings, gossip, inner anxiety, or emotional detachment.',
        love: 'A potent, mysterious spiritual bond. A relationship rooted in silent mutual understanding.'
    },
    {
        name: 'The Empress', arcana: 'Major Arcana', number: 3, yesNo: 'Yes', astrology: 'Venus',
        img: 'assets/major/the-empress.png',
        upright: 'Abundance, fertility, aesthetic beauty, nurturing care, boundless creativity, and life comfort.',
        reversed: 'Codependency, creative blocks, neglecting self-care, or over-protective tendencies.',
        love: 'An exceptionally harmonious, caring, and warm relationship leaning toward long-term commitment.'
    },
    {
        name: 'The Emperor', arcana: 'Major Arcana', number: 4, yesNo: 'Yes', astrology: 'Aries',
        img: 'assets/major/the-emperor.png',
        upright: 'Authority, structure, firm leadership, stability, self-control, and building solid foundations.',
        reversed: 'Abuse of power, tyranny, rigid thinking, stubbornness, or lack of discipline.',
        love: 'A dependable, protective partner. Avoid letting controlling or overly dominant behaviors seep in.'
    },
    {
        name: 'The Hierophant', arcana: 'Major Arcana', number: 5, yesNo: 'Yes', astrology: 'Taurus',
        img: 'assets/major/the-hierophant.png',
        upright: 'Tradition, spiritual guidance, established value systems, formal learning, and adherence to rules.',
        reversed: 'Rebellion against traditions, rigid dogmatism, breaking moral codes, or taking shortcuts.',
        love: 'A conventional relationship approved by social circles. Strong commitments like engagement or marriage.'
    },
    {
        name: 'The Lovers', arcana: 'Major Arcana', number: 6, yesNo: 'Yes', astrology: 'Gemini',
        img: 'assets/major/the-lovers.png',
        upright: 'Crucial life choices, aligned values, true love, deep soul connection, and harmonious commitment.',
        reversed: 'Misaligned values, relationship friction, poor major decisions, or internal conflict.',
        love: 'The quintessential card of true love and emotional purity. A major choice regarding romantic futures.'
    },
    {
        name: 'The Chariot', arcana: 'Major Arcana', number: 7, yesNo: 'Yes', astrology: 'Cancer',
        img: 'assets/major/the-chariot.png',
        upright: 'Victory through discipline, iron will, absolute steering of life direction, and overcoming hurdles.',
        reversed: 'Loss of control, excessive aggression, chaotic direction, or surrender halfway.',
        love: 'Battling through relationship obstacles together. Uniting two differing egos for mutual goals.'
    },
    {
        name: 'Strength', arcana: 'Major Arcana', number: 8, yesNo: 'Yes', astrology: 'Leo',
        img: 'assets/major/strength.png',
        upright: 'Inner strength, gentle courage, immense patience, compassion, and mastering negative emotions.',
        reversed: 'Self-doubt, mental weakness, emotional volatility, or feeling helpless against trials.',
        love: 'Patience and gentleness are key to melting your partner\'s heart. Supporting each other through hard times.'
    },
    {
        name: 'The Hermit', arcana: 'Major Arcana', number: 9, yesNo: 'No', astrology: 'Virgo',
        img: 'assets/major/the-hermit.png',
        upright: 'Soul-searching, deep introspection, mindful retreat, inner wisdom, and spiritual enlightenment.',
        reversed: 'Acute loneliness, social isolation, rejecting wise counsel, or getting lost in rumination.',
        love: 'Time to pause and evaluate yourself before entering deeper commitments. Singles should relish solitude.'
    },
    {
        name: 'Wheel of Fortune', arcana: 'Major Arcana', number: 10, yesNo: 'Yes', astrology: 'Jupiter',
        img: 'assets/major/wheel-of-fortune.png',
        upright: 'Good luck, turning life cycles, favorable destiny, golden opportunities, and positive shifts.',
        reversed: 'Temporary bad luck, external hurdles, resisting change, or looping in past cycles.',
        love: 'Fateful shifts in romance. An unexpected meeting with someone changing your life trajectory.'
    },
    {
        name: 'Justice', arcana: 'Major Arcana', number: 11, yesNo: 'Neutral / Yes', astrology: 'Libra',
        img: 'assets/major/justice.png',
        upright: 'Fairness, objective truth, cause and effect, balanced decisions, and moral integrity.',
        reversed: 'Injustice, dishonesty, evading accountability for mistakes, or skewed perspectives.',
        love: 'Equilibrium in giving and receiving. A fair, honest bond free from exploitation.'
    },
    {
        name: 'The Hanged Man', arcana: 'Major Arcana', number: 12, yesNo: 'No', astrology: 'Neptune',
        img: 'assets/major/hanged-man.png',
        upright: 'New perspectives via surrender, temporary sacrifice, letting go of control, and seeing things anew.',
        reversed: 'Futile sacrifice, feeling stuck in limbo, refusing to see truth, or playing the victim.',
        love: 'Extra patience and shifting viewpoints are required to understand your partner\'s mindset.'
    },
    {
        name: 'Death', arcana: 'Major Arcana', number: 13, yesNo: 'No', astrology: 'Scorpio',
        img: 'assets/major/death.png',
        upright: 'Total transformation, closing a life chapter, releasing the past, and a rebirth into better beginnings.',
        reversed: 'Fear of change, clinging to worn-out pasts, stagnation, or resisting necessary endings.',
        love: 'The end of a toxic chapter to make space for a far healthier, more meaningful romance.'
    },
    {
        name: 'Temperance', arcana: 'Major Arcana', number: 14, yesNo: 'Yes', astrology: 'Sagittarius',
        img: 'assets/major/temperance.png',
        upright: 'Balance, moderation, inner harmony, patience, and peaceful synthesis of life elements.',
        reversed: 'Life imbalance, extremes, internal conflicts, or rushing actions recklessly.',
        love: 'A peaceful, understanding relationship marked by graceful mutual compromise.'
    },
    {
        name: 'The Devil', arcana: 'Major Arcana', number: 15, yesNo: 'No', astrology: 'Capricorn',
        img: 'assets/major/the-devil.png',
        upright: 'Materialistic attachments, toxic bonds, addictions, feeling trapped by ego or fears.',
        reversed: 'Breaking toxic chains, newfound freedom, self-awareness, and escaping manipulation.',
        love: 'Unhealthy relationship dynamics, excessive obsession, or possessiveness restricting freedom.'
    },
    {
        name: 'The Tower', arcana: 'Major Arcana', number: 16, yesNo: 'No', astrology: 'Mars',
        img: 'assets/major/the-tower.png',
        upright: 'Sudden shocking upheaval, collapse of false illusions or foundations, lightning-fast awakening.',
        reversed: 'Narrowly avoiding disaster, denial of harsh truths, or delayed trauma.',
        love: 'Major romantic earthquakes. Secrets exposed or fierce arguments changing everything instantly.'
    },
    {
        name: 'The Star', arcana: 'Major Arcana', number: 17, yesNo: 'Yes', astrology: 'Aquarius',
        img: 'assets/major/the-star.png',
        upright: 'Renewed hope, pure inspiration, inner peace, emotional healing, and faith in the future.',
        reversed: 'Loss of hope, despair, self-doubt, or feeling disconnected from dreams.',
        love: 'An emotional healing phase in romance. High optimism and inner serenity with your partner.'
    },
    {
        name: 'The Moon', arcana: 'Major Arcana', number: 18, yesNo: 'No', astrology: 'Pisces',
        img: 'assets/major/the-moon.png',
        upright: 'Illusions, subconscious anxieties, intuition battling fear, confusion, and hidden matters.',
        reversed: 'Truths emerging from deception, fading anxieties, and clearing confusion.',
        love: 'Doubts, misunderstandings, or unexpressed secrets lurking beneath the surface.'
    },
    {
        name: 'The Sun', arcana: 'Major Arcana', number: 19, yesNo: 'Yes', astrology: 'Sun',
        img: 'assets/major/the-sun.png',
        upright: 'Pure happiness, brilliant success, high vitality, absolute clarity, and joyful living.',
        reversed: 'Delayed happiness, dimming self-confidence, or overly idealized expectations.',
        love: 'Warm, bright, sincere love bringing immense joy to everyday life.'
    },
    {
        name: 'Judgement', arcana: 'Major Arcana', number: 20, yesNo: 'Yes', astrology: 'Pluto',
        img: 'assets/major/judgement.png',
        upright: 'Life calling, honest self-evaluation, forgiveness, spiritual awakening, and final verdicts.',
        reversed: 'Acute self-doubt, avoiding self-reflection, excessive guilt, or harsh judgment of others.',
        love: 'Re-evaluating past choices in romance. Time for forgiveness and starting clean.'
    },
    {
        name: 'The World', arcana: 'Major Arcana', number: 21, yesNo: 'Yes', astrology: 'Saturn',
        img: 'assets/major/the-world.png',
        upright: 'Completion of a life cycle, ultimate achievement, perfect fulfillment, and wholeness.',
        reversed: 'Close to the finish line but delayed, lack of fulfillment, or loose ends remaining.',
        love: 'A relationship reaching peak happiness and complete emotional wholeness.'
    },

    // Suit of Wands
    {
        name: 'Ace of Wands', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Fire Signs',
        upright: 'Inspirational spark, burning creative potential, surging enthusiasm, and golden opportunities.',
        reversed: 'Losing momentum, project delays, lack of motivation, or early hesitation.',
        love: 'Explosive romantic passion at the start. Intense physical and emotional attraction.'
    },
    {
        name: 'Two of Wands', arcana: 'Minor Arcana', number: 2, yesNo: 'Yes', astrology: 'Mars in Aries',
        upright: 'Future planning, major choices, crafting expansion strategies, and taking control.',
        reversed: 'Fear of stepping out of comfort zones, flawed planning, or hesitation.',
        love: 'Planning a shared future with a partner or facing pivotal choices regarding relationship direction.'
    },
    {
        name: 'Three of Wands', arcana: 'Minor Arcana', number: 3, yesNo: 'Yes', astrology: 'Sun in Aries',
        upright: 'Waiting for planted efforts to yield results, expansion, broadening horizons, and optimism.',
        reversed: 'Disappointment over delayed results, travel hurdles, or inflated expectations.',
        love: 'Waiting for commitment or remaining optimistic about long-distance dynamics.'
    },
    {
        name: 'Four of Wands', arcana: 'Minor Arcana', number: 4, yesNo: 'Yes', astrology: 'Venus in Aries',
        upright: 'Joyful celebrations, household harmony, weddings, community, and security.',
        reversed: 'Domestic friction, delayed celebrations, or a sense of instability at home.',
        love: 'Weddings, engagements, or joyful celebrations shared with loved ones.'
    },
    {
        name: 'Five of Wands', arcana: 'Minor Arcana', number: 5, yesNo: 'No', astrology: 'Saturn in Leo',
        upright: 'Fierce competition, clashing egos, differing opinions, and minor group friction.',
        reversed: 'Avoiding conflict, reaching a truce, or calming unhealthy rivalries.',
        love: 'Minor arguments fueled by stubborn egos. Open dialogue is required to ease tension.'
    },
    {
        name: 'Six of Wands', arcana: 'Minor Arcana', number: 6, yesNo: 'Yes', astrology: 'Jupiter in Leo',
        upright: 'Triumphant victory, public recognition, appreciated achievements, and strong confidence.',
        reversed: 'Loss of face, excessive arrogance, empty praise, or delayed recognition.',
        love: 'Feeling proud of your partner or enjoying a romance celebrated by those around you.'
    },
    {
        name: 'Seven of Wands', arcana: 'Minor Arcana', number: 7, yesNo: 'Yes', astrology: 'Mars in Leo',
        upright: 'Defending personal principles, holding ground under pressure, and protecting rights.',
        reversed: 'Yielding under pressure, feeling intimidated, or overwhelmed by piling issues.',
        love: 'Guarding your relationship against outside interference or external criticisms.'
    },
    {
        name: 'Eight of Wands', arcana: 'Minor Arcana', number: 8, yesNo: 'Yes', astrology: 'Mercury in Sagittarius',
        upright: 'Lightning-fast momentum, delightful sudden news, efficiency, and swift travel.',
        reversed: 'Chaos from rushing, miscommunications, schedule delays, or scattered energy.',
        love: 'Unexpected loving messages or relationship developments moving at breakneck speed.'
    },
    {
        name: 'Nine of Wands', arcana: 'Minor Arcana', number: 9, yesNo: 'Neutral', astrology: 'Moon in Sagittarius',
        upright: 'Mental resilience at exhaustion\'s edge, vigilance, self-protection, and final reserves.',
        reversed: 'Extreme exhaustion, excessive paranoia, hyper-defensiveness, or burning out.',
        love: 'Feeling emotionally weary due to past relationship scars continuing to haunt you.'
    },
    {
        name: 'Ten of Wands', arcana: 'Minor Arcana', number: 10, yesNo: 'No', astrology: 'Saturn in Sagittarius',
        upright: 'Heavy burdens, carrying excessive responsibilities alone, and exhaustion.',
        reversed: 'Successfully delegating tasks, dropping heavy loads, or learning to say "no".',
        love: 'Carrying the weight of relationship issues entirely on your shoulders without fair sharing.'
    },
    {
        name: 'Page of Wands', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Fire',
        upright: 'Youthful explorer, exploration enthusiasm, fresh creative ideas, and good news.',
        reversed: 'Aimlessness, half-baked ideas, childishness, or quick boredom.',
        love: 'Playful flirting, renewed spark in courting, or cheerful news from your crush.'
    },
    {
        name: 'Knight of Wands', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Fire',
        upright: 'Swift action, fierce passion, risk-taking courage, adventure, and high charisma.',
        reversed: 'Impulsivity, recklessness, hot temper, emotional volatility, and unstable commitments.',
        love: 'A passionate romance driven by intense physical attraction, sometimes lacking long-term planning.'
    },
    {
        name: 'Queen of Wands', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Fire',
        upright: 'Independence, high self-confidence, magnetism, warmth, friendliness, and zest for life.',
        reversed: 'Demanding traits, blind jealousy, selfishness, or fading charm from stress.',
        love: 'A warm, confident, loyal partner who effortlessly commands positive attention.'
    },
    {
        name: 'King of Wands', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Fire in Fire',
        upright: 'Visionary leadership, successful entrepreneur, master inspirer, bold decision-maker.',
        reversed: 'Dictatorial, authoritarian, impulsive in personal/business decisions, arrogant.',
        love: 'A mature, deeply protective partner with very strong standards and opinions.'
    },

    // Suit of Cups
    {
        name: 'Ace of Cups', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Water Signs',
        upright: 'Overflowing affection, clear emotional intuition, and blessed new romantic beginnings.',
        reversed: 'Emotional blockages, emptiness, unrequited love, or inner wounds.',
        love: 'Peak emotional fulfillment. Deep falling in love or healing past heartbreaks.'
    },
    {
        name: 'Two of Cups', arcana: 'Minor Arcana', number: 2, yesNo: 'Yes', astrology: 'Venus in Cancer',
        upright: 'Harmonious soul connection, balanced partnership, mutual respect, and love bonds.',
        reversed: 'Relationship imbalance, misunderstandings, communication breakdowns, or ego clashes.',
        love: 'A deeply romantic mutual bond. Heartfelt agreements between two loving individuals.'
    },
    {
        name: 'Three of Cups', arcana: 'Minor Arcana', number: 3, yesNo: 'Yes', astrology: 'Mercury in Cancer',
        upright: 'Celebrations with friends, social joy, harmonious collaboration, and gatherings.',
        reversed: 'Toxic gossip, excessive exclusivity, too much partying, or social drama.',
        love: 'Receiving wholehearted support from your friend circle regarding your romance.'
    },
    {
        name: 'Four of Cups', arcana: 'Minor Arcana', number: 4, yesNo: 'No', astrology: 'Moon in Cancer',
        upright: 'Apathy, routine boredom, excessive rumination, and rejecting favorable offers.',
        reversed: 'Breaking out of stagnation, accepting reality, and appreciating small surroundings.',
        love: 'Feeling jaded with relationship routines. Overlooking attentive gestures from a partner.'
    },
    {
        name: 'Five of Cups', arcana: 'Minor Arcana', number: 5, yesNo: 'No', astrology: 'Mars in Scorpio',
        upright: 'Deep remorse, grief over loss, dwelling on negative outcomes.',
        reversed: 'Healing past disappointments, forgiving oneself, and spotting glimmers of hope.',
        love: 'Disappointed by romantic expectations. Learning to release painful past baggage.'
    },
    {
        name: 'Six of Cups', arcana: 'Minor Arcana', number: 6, yesNo: 'Yes', astrology: 'Sun in Scorpio',
        upright: 'Sweet nostalgia, childhood memories, innocence, and echoes from past connections.',
        reversed: 'Trapped in the past, resisting adulthood, or rosy illusions fading.',
        love: 'Reconnecting with an ex or rediscovering the warmth of pure, sincere love.'
    },
    {
        name: 'Seven of Cups', arcana: 'Minor Arcana', number: 7, yesNo: 'No', astrology: 'Venus in Scorpio',
        upright: 'Illusory choices, daydreams, confusion over priorities, and wishful thinking.',
        reversed: 'Gaining clear perspective, breaking illusions, and picking a realistic focus.',
        love: 'Getting lost in fantasies of a "perfect" partner instead of seeing reality.'
    },
    {
        name: 'Eight of Cups', arcana: 'Minor Arcana', number: 8, yesNo: 'Neutral', astrology: 'Saturn in Pisces',
        upright: 'Walking away from unfulfilling situations toward higher spiritual or emotional quests.',
        reversed: 'Fear of stepping away, staying in toxic spaces due to loneliness, hesitation.',
        love: 'Difficult choices to leave a hollow relationship and pursue inner peace.'
    },
    {
        name: 'Nine of Cups', arcana: 'Minor Arcana', number: 9, yesNo: 'Yes', astrology: 'Jupiter in Pisces',
        upright: 'Emotional satisfaction, "The Wish Card", fulfilled dreams, gratitude, and joy.',
        reversed: 'Arrogance over achievements, superficial satisfaction, ingratitude, or materialism.',
        love: 'All romantic dreams manifest in reality. Total emotional fulfillment and contentment.'
    },
    {
        name: 'Ten of Cups', arcana: 'Minor Arcana', number: 10, yesNo: 'Yes', astrology: 'Mars in Pisces',
        upright: 'Perfect domestic bliss, lasting peace, true love, and harmony.',
        reversed: 'Family conflicts, fracturing marital harmony, or illusions of happy homes.',
        love: 'Peak happiness in long-term commitments, dream weddings, and warm family bonds.'
    },
    {
        name: 'Page of Cups', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Water',
        upright: 'Sweet love messages, subtle intuition, artistic sensitivity, and sincere emotional offers.',
        reversed: 'Emotional anxiety, childishness, over-sensitivity, or unstable moods.',
        love: 'Sweet, romantic declarations filled with sincerity from someone caring.'
    },
    {
        name: 'Knight of Cups', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Water',
        upright: 'The romantic suitor, proposals from the heart, grace, and gentle diplomacy.',
        reversed: 'Moody, empty sweet promises, unrealistic romance, emotional deceit.',
        love: 'Moments of extraordinary romance. A deeply attentive partner skilled in love language.'
    },
    {
        name: 'Queen of Cups', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Water',
        upright: 'Deep empathy, gentle heart, strong intuition, emotional healer, and loyal listener.',
        reversed: 'Emotional dependency, over-sensitivity, being taken advantage of, or inner drama.',
        love: 'A deeply compassionate, intuitive partner who listens to your heart sincerely.'
    },
    {
        name: 'King of Cups', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Air in Water',
        upright: 'High emotional intelligence, inner calm amid storms, wisdom, and fairness.',
        reversed: 'Emotional manipulation, inner coldness, suppressed feelings, or hidden rage.',
        love: 'A mature, emotionally balanced partner capable of calming your storms with wisdom.'
    },

    // Suit of Swords
    {
        name: 'Ace of Swords', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Air Signs',
        upright: 'Sharp mental clarity, intellectual breakthroughs, truth revealed, and brilliant ideas.',
        reversed: 'Mental fog, fatal misunderstandings, misguided ideas, or illogical choices.',
        love: 'Honest, transparent communication free from secrets. Resolving issues logically.'
    },
    {
        name: 'Two of Swords', arcana: 'Minor Arcana', number: 2, yesNo: 'No', astrology: 'Moon in Libra',
        upright: 'Stalemate, major dilemmas, refusing to face facts, silence, and delayed decisions.',
        reversed: 'Forced removal of blindfolds, difficult choices finally made, truths uncovered.',
        love: 'Hesitation in choosing partners or avoiding vital confrontations to maintain fake peace.'
    },
    {
        name: 'Three of Swords', arcana: 'Minor Arcana', number: 3, yesNo: 'No', astrology: 'Saturn in Libra',
        upright: 'Heartbreak, deep sorrow, betrayal, and sharp, hurtful words.',
        reversed: 'Healing wounds, beginning to forgive, easing pain post-breakup.',
        love: 'Heartbreak caused by betrayal, infidelity, or harsh words from loved ones.'
    },
    {
        name: 'Four of Swords', arcana: 'Minor Arcana', number: 4, yesNo: 'Neutral', astrology: 'Jupiter in Libra',
        upright: 'Deep rest, mental recovery, meditation, stepping back from crowds to heal.',
        reversed: 'Chronic exhaustion from over-pushing, piled-up stress, mental burnout.',
        love: 'Needing cooling-down time away from exhausting relationship dynamics.'
    },
    {
        name: 'Five of Swords', arcana: 'Minor Arcana', number: 5, yesNo: 'No', astrology: 'Venus in Aquarius',
        upright: 'Hollow selfish victories, destructive conflict, feeling defeated, unhealthy friction.',
        reversed: 'Making peace post-conflict, owning mistakes, repairing broken bonds.',
        love: 'Arguments where both sides fight to win rather than care for each other’s feelings.'
    },
    {
        name: 'Six of Swords', arcana: 'Minor Arcana', number: 6, yesNo: 'Yes', astrology: 'Mercury in Aquarius',
        upright: 'Transitioning to calmer shores, leaving hard times behind, recovery journeys.',
        reversed: 'Past issues chasing you, reluctance to leave toxic spaces, delayed travels.',
        love: 'Walking together past crisis points toward a far more stable, peaceful romance.'
    },
    {
        name: 'Seven of Swords', arcana: 'Minor Arcana', number: 7, yesNo: 'No', astrology: 'Moon in Aquarius',
        upright: 'Hidden strategies, cunning, stealing opportunities, deceit, or exposed secrets.',
        reversed: 'Truths uncovered, haunting guilt, failed sly tactics.',
        love: 'Dishonesty, hiding things from partners, or suspicions over sketchy behavior.'
    },
    {
        name: 'Eight of Swords', arcana: 'Minor Arcana', number: 8, yesNo: 'No', astrology: 'Jupiter in Gemini',
        upright: 'Feeling trapped by one’s own thoughts, victim mentality, perceived lack of choices.',
        reversed: 'Mental liberation, breaking self-imposed limits, empowerment.',
        love: 'Feeling constrained in a relationship yet lacking courage to break free.'
    },
    {
        name: 'Nine of Swords', arcana: 'Minor Arcana', number: 9, yesNo: 'No', astrology: 'Mars in Gemini',
        upright: 'Acute anxiety, insomnia from overthinking, guilt, nightmares, and dread.',
        reversed: 'Anxiety lifting, sharing burdens with others eases mental weight.',
        love: 'Excessive overthinking regarding relationship futures or fear of loss.'
    },
    {
        name: 'Ten of Swords', arcana: 'Minor Arcana', number: 10, yesNo: 'No', astrology: 'Sun in Gemini',
        upright: 'Rock bottom, painful endings, outright betrayal, feeling totally ruined.',
        reversed: 'Rising from ruins, post-crisis recovery, new hopes after major storms.',
        love: 'The end of a deeply painful relationship. Absolute betrayal closing past chapters.'
    },
    {
        name: 'Page of Swords', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Swords',
        upright: 'Critical thinking, high curiosity, information-gathering, alertness, and blunt honesty.',
        reversed: 'Cheap gossip, baseless rumors, spreading fake news, rashness.',
        love: 'Investigative texts from partners or deep curiosity regarding your crush’s life.'
    },
    {
        name: 'Knight of Swords', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Swords',
        upright: 'Logic-driven swift action, soaring ambition, blunt speech, high speed.',
        reversed: 'Recklessness, verbal aggression, hurting feelings through harsh words.',
        love: 'Blunt, direct confrontations. Overly sharp communication hurting feelings.'
    },
    {
        name: 'Queen of Swords', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Swords',
        upright: 'Independent woman, objective, sharp, setting firm boundaries, truthful.',
        reversed: 'Emotionally cold, cynical, overly critical, vindictive, closed off to affection.',
        love: 'An independent, logical partner firm on setting healthy boundaries.'
    },
    {
        name: 'King of Swords', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Air in Swords',
        upright: 'Intellectual integrity, law-based fairness, strategic thinker, strong mental authority.',
        reversed: 'Abuse of intellect, manipulative logic, coldness, ruthless decisions.',
        love: 'A partner valuing absolute rationality and intellectual honesty above all.'
    },

    // Suit of Pentacles
    {
        name: 'Ace of Pentacles', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Earth Signs',
        upright: 'New financial ventures, material stability, profitable investments, early prosperity.',
        reversed: 'Missed opportunities, initial financial losses, poor planning, lavish spending.',
        love: 'Stability in tangible reality. Romance grounded in both emotional and material readiness.'
    },
    {
        name: 'Two of Pentacles', arcana: 'Minor Arcana', number: 2, yesNo: 'Neutral', astrology: 'Jupiter in Capricorn',
        upright: 'Juggling life priorities, financial management, adaptability to changes.',
        reversed: 'Overwhelmed by time/money splits, financial stress, losing life balance.',
        love: 'Balancing romance, career, and personal life to avoid dropping the ball.'
    },
    {
        name: 'Three of Pentacles', arcana: 'Minor Arcana', number: 3, yesNo: 'Yes', astrology: 'Mars in Capricorn',
        upright: 'Solid teamwork, successful collaboration, recognized skills, building foundations.',
        reversed: 'Poor team coordination, unappreciated work, group ego clashes.',
        love: 'Great cooperation between you and your partner in building a shared future.'
    },
    {
        name: 'Four of Pentacles', arcana: 'Minor Arcana', number: 4, yesNo: 'No', astrology: 'Sun in Capricorn',
        upright: 'Financial stability, thriftiness, stinginess, fear of losing wealth or control.',
        reversed: 'Overspending, letting go of financial control, generosity, bad investments.',
        love: 'Excessive possessiveness, struggling to open up emotionally due to fear of hurt.'
    },
    {
        name: 'Five of Pentacles', arcana: 'Minor Arcana', number: 5, yesNo: 'No', astrology: 'Mercury in Taurus',
        upright: 'Financial hardship, poverty mindset, isolation, cold difficult times.',
        reversed: 'Emerging from economic crisis, receiving moral/material aid, recovery.',
        love: 'Feeling neglected, lonely within relationships, or economic stress triggering tension.'
    },
    {
        name: 'Six of Pentacles', arcana: 'Minor Arcana', number: 6, yesNo: 'Yes', astrology: 'Moon in Taurus',
        upright: 'Generosity, sharing wealth, giving and receiving balance, acts of charity.',
        reversed: 'Strings attached to giving, problematic debts, financial unfairness.',
        love: 'Reciprocal balance in relationships. Supporting each other emotionally and materially.'
    },
    {
        name: 'Seven of Pentacles', arcana: 'Minor Arcana', number: 7, yesNo: 'Yes', astrology: 'Saturn in Taurus',
        upright: 'Assessing long-term investments, patient harvest waiting, evaluating hard work.',
        reversed: 'Disappointing yields, frustration over wasted effort, impatience.',
        love: 'Reflecting on how far the relationship has grown and whether emotional investments paid off.'
    },
    {
        name: 'Eight of Pentacles', arcana: 'Minor Arcana', number: 8, yesNo: 'Yes', astrology: 'Sun in Virgo',
        upright: 'High dedication, diligent hard work, mastering specific skills, detail focus.',
        reversed: 'Endless fruitless perfectionism, working without real output, losing interest.',
        love: 'Committing to consistently nurture and refine relationship quality through effort.'
    },
    {
        name: 'Nine of Pentacles', arcana: 'Minor Arcana', number: 9, yesNo: 'Yes', astrology: 'Venus in Virgo',
        upright: 'Self-made prosperity, enjoying fruits of labor, personal luxury, life comfort.',
        reversed: 'Financial dependency on others, overspending to flex social status.',
        love: 'Enjoying an independent single life flourishing both financially and emotionally.'
    },
    {
        name: 'Ten of Pentacles', arcana: 'Minor Arcana', number: 10, yesNo: 'Yes', astrology: 'Mercury in Virgo',
        upright: 'Generational wealth, inheritances, long-term security, financial establishment.',
        reversed: 'Family disputes over inheritances, collapsing financial security.',
        love: 'Relationships blessed by family approval and fully secured materially for futures.'
    },
    {
        name: 'Page of Pentacles', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Pentacles',
        upright: 'Learning new skills, promising career beginnings, diligence, good financial news.',
        reversed: 'Lack of study focus, procrastination, failing to seize golden chances.',
        love: 'Sincere small commitments to start serious steps in romance.'
    },
    {
        name: 'Knight of Pentacles', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Pentacles',
        upright: 'Deeply dependable, consistent, true hard worker, patient, slow and steady.',
        reversed: 'Overly rigid, trapped in boring routines, lazy, stubbornly resisting change.',
        love: 'A fiercely loyal, dependable partner, though occasionally lacking romance and monotonous.'
    },
    {
        name: 'Queen of Pentacles', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Pentacles',
        upright: 'Nurturing generosity, skilled financial manager, cozy home, practical, caring.',
        reversed: 'Overly materialistic, sacrificing inner needs for wealth, social vanity.',
        love: 'A deeply maternal partner curating cozy home comfort and wise with material management.'
    },
    {
        name: 'King of Pentacles', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Air in Pentacles',
        upright: 'Successful entrepreneur, absolute financial establishment, generous family protector.',
        reversed: 'Greedy, extreme materialism, using wealth to control others.',
        love: 'A financially secure, stable partner capable of providing total life security.'
    }
];

// ==========================================
// --- DATA ORACLE CARDS (50 CARDS WITH 5 CATEGORIES) ---
// ==========================================
const ORACLE_DECK = [
    {
        id: 1, category: 'Themes', name: 'Beginnings',
        img: 'assets/oracle-themes/01_Beginnings.png',
        desc: 'Something is entering its first stage. Focus on what is beginning to take shape rather than what it may actually becomes.',
        guidance: 'You do not need to have everything figured out before you take your first step; sometimes, clarity arrives only after you begin.'
    },
    {
        id: 2, category: 'Themes', name: 'Ending',
        img: 'assets/oracle-themes/02_Ending.png',
        desc: 'A phase may be reaching completion. Consider what is ready to be conduded, acknowledged, or left behind.',
        guidance: 'Honor what has reached its natural conclusion. Not everything is meant to accompany you into every season of your life, and releasing what has served its purpose can create space for a deeper sense of peace.'
    },
    {
        id: 3, category: 'Themes', name: 'Change',
        img: 'assets/oracle-themes/03_Change.png',
        desc: 'The current situation may not remain as it is. Stay flexible and notice what is shifting, even if the full direction is not yet clear.',
        guidance: 'Let yourself evolve without feeling obligated to remain who you once were. Change may challenge your sense of security, but it can also reveal possibilities that your former perspective could not recognize.'
    },
    {
        id: 4, category: 'Themes', name: 'Growth',
        img: 'assets/oracle-themes/04_Growth.png',
        desc: 'Something is developing through experience and effort. Look for gradual progress rather than demanding immediate results.',
        guidance: 'Be patient with the person you are becoming. Growth is not always visible, and some of your most meaningful preogress may happen quietly through the lessons you choose to understand rather than repeat.'
    },
    {
        id: 5, category: 'Themes', name: 'Pause',
        img: 'assets/oracle-themes/05_Pause.png',
        desc: 'Progress may benefit from a moment of stillness. Give yourself room to reflect before deciding what comes next.',
        guidance: 'Stillness is not a failure to progress; it can be the sacred space in which your mind settles, your heart speaks, and your next direction becomes clearer.'
    },
    {
        id: 6, category: 'Themes', name: 'Movement',
        img: 'assets/oracle-themes/06_Movement.png',
        desc: 'The situation is beginning to move or requires forward motion. Notice where action may be needed.',
        guidance: 'Do not remain where you have already outgrown your purpose simply because familiarity feels comfortable. Take the next step with intention, trusting that progress can be meaningful even when the entire path remains unseen.'
    },
    {
        id: 7, category: 'Themes', name: 'Revelation',
        img: 'assets/oracle-themes/07_Revelation.png',
        desc: 'A realization or new piece of understanding may change how the situation is viewed. Be willing to revise your first impression.',
        guidance: 'Be willing to see what is being revealed, even when it challenges your existing beliefs. Truth can be uncomfortable at first, but honest awareness gives you the freedom to make choices rooted in reality rather than illusion.'
    },
    {
        id: 8, category: 'Themes', name: 'Uncertainty',
        img: 'assets/oracle-themes/08_Uncertainty.png',
        desc: 'Not everything is clear enough for a firm conclusion. Allow unanswered questions to remain open instead of forcing certainty.',
        guidance: 'You are allowed to walk through a season without knowing how everything will unfold. Release the need to control every possible outcome and focus on the wisdom, integrity, and courage you can bring to the present moment.'
    },
    {
        id: 9, category: 'Themes', name: 'Alignment',
        img: 'assets/oracle-themes/09_Alignment.png',
        desc: 'Different parts of the situation may be moving into greater harmony. Notice whether values, intentions, and actions are beginning to match.',
        guidance: 'Examine whether your choices reflect the values you claim to hold. Inner peace often grows when your thoughts, intentions, words, and actions begin moving in the same direction.'
    },
    {
        id: 10, category: 'Themes', name: 'Cycle',
        img: 'assets/oracle-themes/10_Cycle.png',
        desc: 'A familiar phase of recurring pattern may be returning. Ask what has repeated and what could be approached differently this time.',
        guidance: 'Recognize the patterns that continues to return to your life. Some cycles invite you to deepen your understanding, while others ask you to make a different choice so that an old lesson no longer needs to repeat itself.'
    },

// export default oracleThemes;
    // Category 2: Inner State (11-20)
    { id: 11, category: 'Inner State', name: 'Desire', img: '', desc: 'A want, wish, or personal priority is influencing the situation. Identify what is genuinely wanted and how strongly it is shaping choices.', guidance: 'Look beyond what you want and explore what that desire represents to you. Your longing may reveal an unmet need, a meaningful aspiration, or a part of yourself that is ready to be acknowledged with honesty and compassion.' },
    { id: 12, category: 'Inner State', name: 'Fear', img: '', desc: 'Concern about a possible outcome may be shaping reactions. Separate what is known from what is feared or anticipated.', guidance: 'Let fear inform your awareness, not dictate your direction. Identify the actual risk, distinguish it form imagined consequence, and respond according to evidence rather than panic.' },
    { id: 13, category: 'Inner State', name: 'Hope', img: '', desc: 'A sense of possibility is still present. Let hope offer perspective while staying attentive to the reality of the situation.', guidance: 'Keep possibility alive through deliberate action. Protect your vision from premature dismissal, but give it structure, effort, and realistic room to develop.' },
    { id: 14, category: 'Inner State', name: 'Doubt', img: '', desc: 'Confidence in an idea, choice, or interpretation may be unsettled. Revisit the evidence and give yourself time to think clearly.', guidance: 'Question the assumption beneath your hesitation. Seek clarity where information is missing, practice where skill is lacking, and make decisions where endless analysis has ceasd to help.' },
    { id: 15, category: 'Inner State', name: 'Attachment', img: '', desc: 'A strong emotional tie or investment may be influencing judgement. Notice whether care is being confused with control or fear of loss.', guidance: 'Release the belief that your peace depends on retaining a particular person, outcome, or identity. Choose connection without possession and commitment without surrendering your sense of self.' },
    { id: 16, category: 'Inner State', name: 'Avoidance', img: '', desc: 'Something uncomfortable may be getting postponed or left unadressed. Consider what is difficult to face and what a manageable first step could be.', guidance: 'Turn toward the matter you keep postponing. Begin with the smallest honest action available and stop allowing temporary discomfort to make permanent decisions on your behalf.' },
    { id: 17, category: 'Inner State', name: 'Acceptance', img: '', desc: 'There may be value in acknowledging the situation as it is. Acceptance does not mean approval; it means beginning from what is real.', guidance: 'Work with the situation as it exists, not as you wish it had unfolded. Accept the facts, acknowledge your options, and direct your effort toward what remains within your influence.' },
    { id: 18, category: 'Inner State', name: 'Longing', img: '', desc: 'A person, experience, or possibility is being deeply missed or desired. Recognize the feeling without assuming it dictates what must happen.', guidance: 'Identify the need beneath the longing. Seek ways to honor that need in your present life instead of placing all fullfilment in something distant, unavailable, or dependent on another person.' },
    { id: 19, category: 'Inner State', name: 'Confidence', img: '', desc: 'Trust in ones ability or judgement is becoming important. Stand by what is well-considered while remaining open to useful feedback.', guidance: 'Consult your own judgement before seeking external permission. Gather the information you need, make your choice deliberately, and take responsibility for the direction you select.' },
    { id: 20, category: 'Inner State', name: 'Overwhelm', img: '', desc: 'Too many feelings, tasks, or uncertainties may be competing for attention. Simplify the situation and adress one manageable thing at a time.', guidance: 'Reduce the number of things demanding your attention. Establish the immediate priority, postpone what can wait, and address each responsibility in manageable order.' },

    // Category 3: Dynamics (21-30)
    { id: 21, category: 'Dynamics', name: 'Attraction', img: '', desc: 'A pull, interest, or sense of fascination is present. Attraction can invite exploration, but it does not by itself establish compability or commitment.', guidance: 'Be curious about what draws you in. Let interest open the door, but let consistency, compatibility, and discernment determine how far you walk through it.' },
    { id: 22, category: 'Dynamics', name: 'Distance', img: '', desc: 'There may be emotional, physical, or communicative space betwee the parties. Consider whether that space is protective, practical, or creating disconnection.', guidance: 'Allow space to reveal what constant proximity may conceal. Do not rush to close the gap; first determine whether reconnection, continued distance, or a clearer boundary best serves the situation.' },
    { id: 23, category: 'Dynamics', name: 'Connection', img: '', desc: 'A meaningful link or point of understanding may be present. Notice what helps the connection feel mutual, clear, and grounded.', guidance: 'Offer your presence without abandoning your individually. Build connections through honest exchange, shared responsibility, and the freedom for both parties to remain themselves.' },
    { id: 24, category: 'Dynamics', name: 'Conflict', img: '', desc: 'Different needs, aims, or viewpoints are rubbing against one another. Identify the actual disagreement rather than treating the whole relationship as the problem.', guidance: 'Address the actual issue instead of attacking the person associated with it. State your position clearly, listen for what you may have missed, and prioritize a fair resolution over the satisfaction of winning.' },
    { id: 25, category: 'Dynamics', name: 'Cooperation', img: '', desc: 'Progress may depend on shared effort or coordination. Look for a practical way each side can contribute toward a common goal.', guidance: 'Define the common objective before dividing the responsibilities. Contribute what you can, communicate what you can not, and make sure collaboration does not become an excuse for unequal effort.' },
    { id: 26, category: 'Dynamics', name: 'Misunderstanding', img: '', desc: 'A message, intention, or expectation may not be landing as intended. Check assumptions and clarify meaning before drawing conclusions.', guidance: 'Verify before concluding. Ask what was meant, explain what was understood, and give direct communication a chance to resolve what assumption has complicated.' },
    { id: 27, category: 'Dynamics', name: 'Reciprocity', img: '', desc: 'The balance of giving and receiving deserves attention. Notice whether effort, care, and responsibility are being shared in a way that feels fair.', guidance: 'Give with intention, receive without unnecessary guilt, and observe whether effort is mutually sustained. Do not confuse generosity with an obligation to compensate indefinitely for another person absence.' },
    { id: 28, category: 'Dynamics', name: 'Imbalance', img: '', desc: 'One part of the situation may be carrying more weight than another. Identify what is uneven and whether a realistic adjustment is possible.', guidance: 'Identify where the distribution of time, energy, attention, or responsibility has become unsustainable. Adjust the arrangment instead of expecting yourself to compensate endlessly for what is missing.' },
    { id: 29, category: 'Dynamics', name: 'Tension', img: '', desc: 'Pressure or unresolved friction may be present beneath the surface. Notice what is being left unsaid and avoid escalating matters before understanding the source.', guidance: 'Do not let urgency turn discmofort into an impulsive decision. Hold the situatuion long enough to understand its pressure points, then address the issue with precision rather than reactivity.' },
    { id: 30, category: 'Dynamics', name: 'Support', img: '', desc: 'Help, reuassurance, or practical assistance may be available or needed. Consider what suppeort would actually be useful and who can offer it reliably.', guidance: 'Recognize assistance as a resource, not a debt to your identity. Ask clearly for what you need, accept what is genuinely offered, and remain discerning about the conditions attached to that suppport.' },

    // Category 4: Guidance (31-40)
    { id: 31, category: 'Guidance', name: 'Communicate', img: '', desc: 'Say what needs to be said with clarity and care. Ask questions listen to the answer, and make room for a two-way exchange.', guidance: 'Lead with pure heart.' },
    { id: 32, category: 'Guidance', name: 'Observe', img: '', desc: 'Gather information before acting. Pay attention to repeated behavior and concrete details rather than relying only on assumptions.', guidance: 'Nurture genuine bonds.' },
    { id: 33, category: 'Guidance', name: 'Wait', img: '', desc: 'A decision may benefit from more time or better conditions. Waiting is useful when it is intentional, not when it becomes endless avoidance.', guidance: 'Express sincere thanks.' },
    { id: 34, category: 'Guidance', name: 'Release', img: '', desc: 'Consider what you are holding onto that no longer serves the situation. This may mean releasing an expectation, habit, or need to control an outcome.', guidance: 'Celebrate simple moments.' },
    { id: 35, category: 'Guidance', name: 'Protect', img: '', desc: 'Balance giving and receiving in all bonds.', guidance: 'Cultivate peaceful teamwork.' },
    { id: 36, category: 'Guidance', name: 'Trust', img: '', desc: 'Ensure all actions flow from clean motives.', guidance: 'Act with clean integrity.' },
    { id: 37, category: 'Guidance', name: 'Reconsider', img: '', desc: 'Harmonious partnership built on respect.', guidance: 'Support each other.' },
    { id: 38, category: 'Guidance', name: 'Act', img: '', desc: 'Bring playful laughter to your relationships.', guidance: 'Enjoy lighthearted humor.' },
    { id: 39, category: 'Guidance', name: 'Rest', img: '', desc: 'Hold loving space for others to share.', guidance: 'Listen without judgment.' },
    { id: 40, category: 'Guidance', name: 'Clarify', img: '', desc: 'Trust builds the strongest emotional bridges.', guidance: 'Be reliable and open.' },

    // Category 5: Signals (41-50)
    { id: 41, category: 'Signals', name: 'Warning', img: '', desc: 'Your creative energy seeks artistic outlet.', guidance: 'Create art or write today.' },
    { id: 42, category: 'Signals', name: 'Opportunity', img: '', desc: 'Shift to gratitude and unlock rich prosperity.', guidance: 'Count five current gifts.' },
    { id: 43, category: 'Signals', name: 'Hidden Factor', img: '', desc: 'A promising life chapter opens before you.', guidance: 'Prepare for fresh beginnings.' },
    { id: 44, category: 'Signals', name: 'Confirmation', img: '', desc: 'Step forward into boldness with faith.', guidance: 'Take that bold step.' },
    { id: 45, category: 'Signals', name: 'Contradiction', img: '', desc: 'Every life detour carries a golden lesson.', guidance: 'Embrace where you are.' },
    { id: 46, category: 'Signals', name: 'Timing', img: '', desc: 'Rest restores your momentum for action.', guidance: 'Allow guilt-free recharge.' },
    { id: 47, category: 'Signals', name: 'Pattern', img: '', desc: 'Focused thoughts magnetize your reality.', guidance: 'Focus on what you build.' },
    { id: 48, category: 'Signals', name: 'Truth', img: '', desc: 'A rare door opens for your evolution.', guidance: 'Say yes to growth.' },
    { id: 49, category: 'Signals', name: 'Choice', img: '', desc: 'Take back complete command of your life.', guidance: 'Own your choices.' },
    { id: 50, category: 'Signals', name: 'Message', img: '', desc: 'A fresh wave of vitality restores your drive.', guidance: 'Welcome new energy.' }
];

// ==========================================
// --- STATE & HISTORY ---
// ==========================================
let currentSpread = null;
let deckCount = 3;
let activeDeck = [];
let drawnCards = [];
let optMajorOnly = false;
let optAutoOpen = false;
let optShowDesc = false;
let tarotQuestion = '';

let oracleDrawCount = 3;
let activeOracleDeck = [];
let drawnOracleCards = [];
let selectedOracleCategory = 'All';

let navigationHistory = [];
let lastHomepageScrollY = 0;

function toggleOption(opt, val) {
    if (opt === 'majorOnly') optMajorOnly = val;
    if (opt === 'autoOpen') optAutoOpen = val;
    if (opt === 'showDesc') optShowDesc = val;
}

// ==========================================
// --- UI & NAVIGATION FUNCTIONS ---
// ==========================================
/* ============================================================
   DRAWER MENU
   ============================================================ */

function toggleMenu() {
    const menu = document.getElementById('drawer-menu');
    const overlay = document.getElementById('drawer-overlay');
    if (!menu) return;

    const isOpen = !menu.classList.contains('-translate-x-full');

    if (isOpen) {
        menu.classList.add('-translate-x-full');
        if (overlay) overlay.classList.add('opacity-0', 'pointer-events-none');
    } else {
        // ✅ Rebuild menu SETIAP kali dibuka → HTML statis lama otomatis hilang
        updateDrawerMenu();
        menu.classList.remove('-translate-x-full');
        if (overlay) overlay.classList.remove('opacity-0', 'pointer-events-none');
    }
}

function updateDrawerMenu() {
    const drawer = document.getElementById('drawer-menu');
    if (!drawer) return;

    // Pastikan drawer bisa scroll
    drawer.classList.add('flex', 'flex-col', 'h-full');

    // Hapus semua child non-nav (header tetap dipertahankan)
    Array.from(drawer.children).forEach(child => {
        if (child.tagName !== 'NAV' && child.id !== 'drawer-header') child.remove();
    });

    // Buat / reset nav
    let nav = drawer.querySelector('nav');
    if (!nav) {
        nav = document.createElement('nav');
        drawer.appendChild(nav);
    }

    nav.className =
        'flex-1 min-h-0 overflow-y-auto flex flex-col px-3 pb-4 pt-3 ' +
        'font-cute text-sm text-pink-500 space-y-0.5';

    // Helper: section label
    const sectionLabel = (text) => `
        <div class="px-3 pt-4 pb-1.5 text-[9px] uppercase tracking-[0.15em] font-bold text-pink-300 select-none">
            ${text}
        </div>`;

    // Helper: item biasa
    const item = (icon, label, onclick, opts = {}) => `
        <a href="#" onclick="event.preventDefault(); ${onclick}"
           class="group flex items-center gap-3 px-3 py-2.5 rounded-xl
                  text-pink-500 hover:text-pink-600 hover:bg-pink-50
                  transition-colors font-bold ${opts.extra || ''}">
            <i data-lucide="${icon}" class="w-[18px] h-[18px] text-pink-400 group-hover:text-pink-500 transition-colors shrink-0"></i>
            <span class="truncate">${label}</span>
            ${opts.badge ? `<span class="ml-auto text-[9px] font-bold bg-pink-100 text-purple-700 px-2 py-0.5 rounded-full">${opts.badge}</span>` : ''}
        </a>`;

    // Helper: sub-item (lebih kecil, indent)
    const subItem = (icon, label, onclick) => `
        <a href="#" onclick="event.preventDefault(); ${onclick}"
           class="group flex items-center gap-2.5 pl-9 pr-3 py-1.5 rounded-lg
                  text-xs font-normal text-gray-500 hover:text-pink-500 hover:bg-pink-50/60
                  transition-colors">
            <i data-lucide="${icon}" class="w-3 h-3 text-gray-300 group-hover:text-pink-400 transition-colors shrink-0"></i>
            <span class="truncate">${label}</span>
        </a>`;

    nav.innerHTML = `
        ${sectionLabel('Main')}
        ${item('home', 'Home', "navigate('home')")}
        ${item('layout-grid', 'Spreads', "navigate('home', 'home-spreads-grid')")}

        ${sectionLabel('Explore')}
        ${item('layers', 'All Cards', "navigate('all-cards'); filterLibrary('All');")}
        ${subItem('star', 'Major Arcana', "navigate('all-cards'); filterLibrary('Major Arcana');")}
        ${subItem('flame', 'Suit of Wands', "navigate('all-cards'); filterLibrary('Wands');")}
        ${subItem('cup-soda', 'Suit of Cups', "navigate('all-cards'); filterLibrary('Cups');")}
        ${subItem('sword', 'Suit of Swords', "navigate('all-cards'); filterLibrary('Swords');")}
        ${subItem('circle-dollar-sign', 'Suit of Pentacles', "navigate('all-cards'); filterLibrary('Pentacles');")}

        <div class="h-1"></div>
        ${item('sparkles', 'Oracle System', "navigate('home', 'home-oracle-section')", { badge: 'New' })}
        ${subItem('shuffle', 'Draw Oracle Cards', "navigate('oracle-draw')")}
        ${subItem('calendar-heart', "Today's Oracle Card", "toggleDailyOracleCard(); navigate('home', 'home-daily-oracle-section')")}
        ${subItem('book-open', 'Oracle Library', "navigate('oracle-library')")}
        ${subItem('info', 'About Oracle', "navigate('generic', 'About Oracle')")}

        <div class="h-1"></div>
        ${item('newspaper', 'Articles & Insights', "navigate('home', 'home-articles-section')")}
        ${item('orbit', 'Zodiac Guides', "navigate('home', 'home-zodiac-grid')")}

        ${sectionLabel('Info')}
        ${item('book-marked', 'About Tarot', "navigate('generic', 'About Tarot')")}
        ${item('user-round', 'Personal Reading', "navigate('generic', 'Personal Reading')")}
    `;

    // ✅ Shop Now — sticky di bawah, terpisah dari nav
    let shopCta = drawer.querySelector('#drawer-shop-cta');
    if (!shopCta) {
        shopCta = document.createElement('div');
        shopCta.id = 'drawer-shop-cta';
        shopCta.className = 'shrink-0 px-4 py-4 border-t border-pink-100 bg-pink-50/40';
        drawer.appendChild(shopCta);
    }

    shopCta.innerHTML = `
        <a href="#" onclick="event.preventDefault(); navigate('shop');"
           class="flex items-center justify-center gap-2 w-full px-4 py-3
                  bg-purple-700 hover:bg-purple-800 text-white rounded-xl
                  font-cute font-bold text-sm shadow-md transition-all
                  transform hover:-translate-y-0.5">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>Shop Now</span>
        </a>
    `;

    // Render ulang icon Lucide
    if (window.lucide) window.lucide.createIcons();
}

/* ============================================================
   STANDARD NAV BUTTONS (Back / Back to Home)
   ============================================================ */

function injectStandardNavButtons(targetViewId) {
    const targetView = document.getElementById('view-' + targetViewId);
    if (!targetView || targetViewId === 'home') return;

    let navBar = targetView.querySelector('.nav-buttons-bar');
    if (!navBar) {
        navBar = document.createElement('div');
        navBar.className =
            'nav-buttons-bar w-full max-w-2xl mx-auto px-4 pt-4 pb-2 flex justify-between items-center ' +
            'font-cute border-b border-pink-100 mb-4';
        targetView.insertBefore(navBar, targetView.firstChild);
    }

    navBar.innerHTML = `
        <button onclick="goBack()"
                class="flex items-center gap-1 text-pink-500 hover:text-pink-700 font-bold text-xs bg-pink-50 px-3 py-1.5 rounded-xl border border-pink-100 shadow-sm transition-all">
            <i data-lucide="arrow-left" class="w-3 h-3"></i>
            <span>Back</span>
        </button>
        <button onclick="goBackToHome()"
                class="flex items-center gap-1 text-pink-500 hover:text-pink-700 font-bold text-xs bg-pink-50 px-3 py-1.5 rounded-xl border border-pink-100 shadow-sm transition-all">
            <i data-lucide="home" class="w-3 h-3"></i>
            <span>Back to Home</span>
        </button>
    `;

    if (window.lucide) window.lucide.createIcons();
}

/* ============================================================
   NAVIGATION CORE
   ============================================================ */

function navigate(viewId, anchorOrTitle = null, isBackAction = false) {
    // ✅ FIX: Buat #view-shop DULU sebelum guard
    if (viewId === 'shop') {
        let shopView = document.getElementById('view-shop');
        if (!shopView) {
            const homeView = document.getElementById('view-home');
            if (homeView) {
                shopView = document.createElement('div');
                shopView.id = 'view-shop';
                shopView.className = 'view-section pb-24 text-center';
                homeView.parentNode.appendChild(shopView);
            }
        }
    }

    const currentActive = document.querySelector('.view-section.active');
    const currentActiveId = currentActive ? currentActive.id.replace('view-', '') : 'home';

    if (currentActiveId === 'home') {
        lastHomepageScrollY = window.scrollY;
    }

    if (!isBackAction && currentActiveId !== viewId) {
        navigationHistory.push({ viewId: currentActiveId, scrollY: window.scrollY });
    }

    const targetView = document.getElementById('view-' + viewId);
    if (!targetView) {
        console.warn(`[navigate] View "view-${viewId}" tidak ditemukan. Navigasi dibatalkan.`);
        return;
    }

    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    targetView.classList.add('active');

    const drawer = document.getElementById('drawer-menu');
    if (drawer && !drawer.classList.contains('-translate-x-full')) {
        toggleMenu();
    }

    injectStandardNavButtons(viewId);

    if (viewId === 'home') {
        if (anchorOrTitle) {
            setTimeout(() => {
                const el = document.getElementById(anchorOrTitle);
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }, 50);
        } else {
            window.scrollTo({ top: lastHomepageScrollY, behavior: 'smooth' });
        }
    } else {
        window.scrollTo(0, 0);
        if (viewId === 'draw') setDrawPhase('spread');
        else if (viewId === 'generic') renderGenericPage(anchorOrTitle);
        else if (viewId === 'all-cards') { ensureLibrarySearch(); filterLibrary('All'); }
        else if (viewId === 'birth-calculator') initBirthCalculatorPage();
        else if (viewId === 'oracle-library') renderOracleLibrary();
        else if (viewId === 'shop') renderShopPage();   // sekarang aman
        else if (viewId === 'oracle-draw') {
            renderOracleConfigNumbers();
            document.getElementById('oracle-step-config')?.classList.remove('hidden');
            document.getElementById('oracle-step-draw')?.classList.add('hidden');
            document.getElementById('oracle-step-result')?.classList.add('hidden');
        }
    }
}

function goBack() {
    if (navigationHistory.length > 0) {
        const last = navigationHistory.pop();
        navigate(last.viewId, null, true);
        if (last.viewId !== 'home') {
            window.scrollTo({ top: last.scrollY, behavior: 'smooth' });
        }
    } else {
        navigate('home', null, true);
    }
}

function goBackToHome() {
    navigationHistory = [];
    navigate('home', null, true);
}

/* ============================================================
   UTIL
   ============================================================ */

function getTodayDateString() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

/* ============================================================
   INIT — panggil saat halaman siap
   ============================================================ */


// ==========================================
// --- HOMEPAGE LAYOUT RE-ORDER & ARTICLES ---
// ==========================================
function ensureHomeOrder() {
    const homeView = document.getElementById('view-home');
    if (!homeView) return;

    ensureOracleHomeSections();
    ensureBirthCalculatorHome();
    ensureArticlesSection();

    const oracleSec = document.getElementById('home-oracle-section');
    const birthCalcSec = document.getElementById('home-birth-calculator');
    const zodiacSec = document.getElementById('home-zodiac-grid')?.parentElement;
    const articlesSec = document.getElementById('home-articles-section');

    if (oracleSec && birthCalcSec) {
        birthCalcSec.parentNode.insertBefore(oracleSec, birthCalcSec);
    }

    if (articlesSec && zodiacSec) {
        if (zodiacSec.nextSibling) {
            zodiacSec.parentNode.insertBefore(articlesSec, zodiacSec.nextSibling);
        } else {
            zodiacSec.parentNode.appendChild(articlesSec);
        }
    }
}

function ensureArticlesSection() {
    const homeView = document.getElementById('view-home');
    if (!homeView) return;
    if (document.getElementById('home-articles-section')) return;

    const articlesSection = document.createElement('div');
    articlesSection.id = 'home-articles-section';
    articlesSection.className = 'w-full max-w-lg mx-auto mb-6 px-4 text-left font-cute';
    
    articlesSection.innerHTML = `
        <div class="flex justify-between items-center mb-3">
            <div>
                <div class="text-[9px] uppercase tracking-widest text-pink-400 font-bold">CuTarot Reads</div>
                <h3 class="font-bold text-xl text-purple-800">Articles & Guides</h3>
            </div>
            <span class="text-[10px] text-pink-400 font-bold">Swipe &rarr;</span>
        </div>

        <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-none">
            <div onclick="navigate('generic', 'About Tarot')" class="snap-center flex-shrink-0 w-64 bg-white p-4 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div class="w-full h-28 bg-pink-100 rounded-xl mb-3 flex items-center justify-center text-pink-300 font-bold text-xs">Tarot History Cover</div>
                <span class="px-2 py-0.5 bg-pink-50 text-pink-500 text-[9px] font-bold rounded-full">Guide</span>
                <h4 class="font-bold text-sm text-purple-800 mt-2 line-clamp-1">The Roots of Modern Tarot</h4>
                <p class="text-[11px] text-gray-500 mt-1 line-clamp-2">Learn how 15th-century Italian cards evolved into the Rider-Waite system.</p>
            </div>

            <div onclick="navigate('generic', 'About Oracle')" class="snap-center flex-shrink-0 w-64 bg-white p-4 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div class="w-full h-28 bg-purple-100 rounded-xl mb-3 flex items-center justify-center text-purple-300 font-bold text-xs">Oracle Guide Cover</div>
                <span class="px-2 py-0.5 bg-purple-50 text-purple-600 text-[9px] font-bold rounded-full">Oracle</span>
                <h4 class="font-bold text-sm text-purple-800 mt-2 line-clamp-1">Tarot vs Oracle Cards</h4>
                <p class="text-[11px] text-gray-500 mt-1 line-clamp-2">Understanding the fluid freedom of Oracle decks alongside Tarot.</p>
            </div>

            <div onclick="navigate('generic', 'Personal Reading')" class="snap-center flex-shrink-0 w-64 bg-white p-4 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div class="w-full h-28 bg-pink-50 rounded-xl mb-3 flex items-center justify-center text-pink-300 font-bold text-xs">CuTarot Story</div>
                <span class="px-2 py-0.5 bg-pink-50 text-pink-500 text-[9px] font-bold rounded-full">Behind Deck</span>
                <h4 class="font-bold text-sm text-purple-800 mt-2 line-clamp-1">Why CuTarot Was Created</h4>
                <p class="text-[11px] text-gray-500 mt-1 line-clamp-2">A personal journey turning complex symbols into intuitive art.</p>
            </div>
        </div>
    `;

    homeView.appendChild(articlesSection);
}

function ensureHeaderBuyIcon() {
    const header = document.querySelector('header') || document.getElementById('main-header');
    if (!header) return;
    if (document.getElementById('header-buy-btn')) return;

    const buyBtn = document.createElement('button');
    buyBtn.id = 'header-buy-btn';
    buyBtn.className = 'absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-purple-800 transition-all shadow-sm flex items-center justify-center';
    buyBtn.title = 'Buy CuTarot Deck';
    buyBtn.innerHTML = `
        <svg class="w-5 h-5 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
    `;
    buyBtn.onclick = () => navigate('shop');
    
    header.style.position = 'relative';
    header.appendChild(buyBtn);
}

// ==========================================
// --- DAILY CARD FUNCTIONS ---
// ==========================================
function renderDailyCardHTML(card, isReversed) {
    const cardEl = document.getElementById('inline-daily-card');
    if (!cardEl) return;
    const descText = isReversed ? card.reversed : card.upright;
    
    cardEl.innerHTML = `
        <div class="w-[120px] mb-6">
            <div class="w-full aspect-[2/3.3] bg-white border border-pink-100 rounded-xl flex flex-col items-center justify-center p-2 shadow-md relative overflow-hidden">
                ${card.img 
                    ? `<img src="${card.img}" alt="${card.name}" class="w-full h-full object-contain rounded-xl" />`
                    : `<div class="text-[9px] text-pink-400 font-cute font-bold mb-1 uppercase">${card.arcana}</div>
                       <div class="text-sm font-cute font-bold text-gray-800 leading-tight">${card.name}</div>
                       <div class="mt-2 text-pink-200 text-xs font-cute">${card.number}</div>`
                }
            </div>
        </div>
        <h3 class="font-cute font-bold text-2xl text-purple-800 mb-1">${card.name}</h3>
        <p class="text-xs text-pink-500 italic mb-4 font-cute">${isReversed ? 'Reversed' : 'Upright'}</p>
        <div class="w-full h-px bg-pink-200/50 mb-4 max-w-[150px]"></div>
        <p class="text-[10px] uppercase tracking-widest text-pink-400 mb-2 font-bold font-cute">Today's Energy</p>
        <p class="text-sm text-gray-600 mb-5 font-cute">${descText}</p>
        <p class="text-[10px] uppercase tracking-widest text-pink-400 mb-2 font-bold font-cute">Love & Relationship</p>
        <p class="text-sm text-gray-600 italic font-cute">"${card.love}"</p>
    `;
    cardEl.classList.remove('hidden');
    cardEl.classList.add('flex');
}

function toggleDailyCard() {
    const btnEl = document.getElementById('btn-daily-card');
    const todayStr = getTodayDateString();
    let savedData = localStorage.getItem('cutarot_daily');
    let dailyData = null;

    if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.date === todayStr) { dailyData = parsed; }
    }

    if (!dailyData) {
        const randomCard = TAROT_DECK[Math.floor(Math.random() * 78)];
        dailyData = { date: todayStr, card: randomCard, isReversed: Math.random() > 0.5 };
        localStorage.setItem('cutarot_daily', JSON.stringify(dailyData));
    }

    renderDailyCardHTML(dailyData.card, dailyData.isReversed);
    
    if (btnEl) {
        btnEl.innerText = "Card Drawn for Today";
        btnEl.classList.add('opacity-50', 'bg-pink-50');
        btnEl.classList.remove('hover:-translate-y-0.5');
        btnEl.onclick = null;
    }
}

function checkDailyCard() {
    const todayStr = getTodayDateString();
    let savedData = localStorage.getItem('cutarot_daily');
    if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.date === todayStr) {
            renderDailyCardHTML(parsed.card, parsed.isReversed);
            const btnEl = document.getElementById('btn-daily-card');
            if (btnEl) {
                btnEl.innerText = "Card Drawn for Today";
                btnEl.classList.add('opacity-50', 'bg-pink-50');
                btnEl.classList.remove('hover:-translate-y-0.5');
                btnEl.onclick = null;
            }
        }
    }
}

// ==========================================
// --- DRAW SYSTEM FLOW ---
// ==========================================
function ensureQuestionInput() {
    const drawPhaseEl = document.getElementById('phase-draw');
    if (!drawPhaseEl) return;
    
    let container = document.getElementById('tarot-question-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'tarot-question-container';
        container.className = 'w-full max-w-md mb-6 px-4';
        container.innerHTML = `
            <div class="font-cute text-xs font-bold text-purple-800 mb-2 text-center uppercase tracking-wider">What is on your mind?</div>
            <input type="text" id="tarot-question-input" 
                value="${tarotQuestion}" 
                placeholder="Ask CuTarot" 
                oninput="tarotQuestion = this.value"
                class="w-full px-4 py-3 rounded-2xl border-2 border-purple-700/70 focus:border-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-200 font-cute text-sm text-gray-700 bg-white shadow-sm transition-all text-center"
            />
        `;
        drawPhaseEl.insertBefore(container, drawPhaseEl.firstChild);
    } else {
        const input = document.getElementById('tarot-question-input');
        if (input) input.value = tarotQuestion;
    }
}

function setDrawPhase(phase) {
    ['phase-spread', 'phase-config', 'phase-draw', 'phase-result'].forEach(p => {
        const el = document.getElementById(p);
        if (el) {
            el.classList.add('hidden');
            el.classList.remove('flex');
        }
    });
    
    const target = document.getElementById('phase-' + phase);
    if (target) {
        target.classList.remove('hidden');
        if(phase === 'draw') {
            target.classList.add('flex');
            ensureQuestionInput(); 
        }
    }
    window.scrollTo(0,0);
    
    if (phase === 'result') renderResult();
}

function selectSpread(index) {
    currentSpread = SPREADS[index];
    deckCount = currentSpread.count;
    
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById('view-draw').classList.add('active');
    
    if (currentSpread.id === 'free') {
        document.getElementById('config-spread-name').innerText = currentSpread.name;
        renderConfigNumbers();
        setDrawPhase('config');
    } else {
        startDraw(); 
    }
}

function renderConfigNumbers() {
    const grid = document.getElementById('config-numbers-grid');
    if (!grid) return;
    let html = '';
    const maxCards = optMajorOnly ? 22 : 13;
    if (deckCount > maxCards) deckCount = maxCards;

    for(let i=1; i<=maxCards; i++) {
        const isActive = deckCount === i;
        const cls = isActive ? 'bg-pink-300 text-white shadow-md transform scale-110' : 'bg-white text-gray-600 border border-pink-100 hover:border-pink-300 hover:bg-pink-50';
        html += `<button onclick="updateDeckCount(${i})" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-cute font-bold text-sm transition-all duration-300 ${cls}">${i}</button>`;
    }
    grid.innerHTML = html;

    let optionsContainer = document.getElementById('config-options-container');
    if (!optionsContainer) {
        const configBox = grid.parentElement;
        optionsContainer = document.createElement('div');
        optionsContainer.id = 'config-options-container';
        optionsContainer.className = 'mt-6 space-y-2.5 text-left font-cute pt-4 border-t border-pink-100';
        configBox.insertBefore(optionsContainer, configBox.querySelector('button[onclick="startDraw()"]'));
    }

    optionsContainer.innerHTML = `
        <div class="text-xs font-bold text-purple-800 mb-2 uppercase tracking-wider text-center">Free Spread Options & Filters</div>
        <label class="flex items-center space-x-3 cursor-pointer p-2.5 bg-white rounded-xl border border-pink-100 hover:border-pink-300 transition-colors">
            <input type="checkbox" ${optMajorOnly ? 'checked' : ''} onchange="toggleOption('majorOnly', this.checked); renderConfigNumbers();" class="w-4 h-4 text-pink-500 rounded border-pink-300 focus:ring-pink-400">
            <span class="text-xs font-bold text-gray-700">Major Arcana Only <span class="font-normal text-pink-400">(22 main cards only)</span></span>
        </label>
        <label class="flex items-center space-x-3 cursor-pointer p-2.5 bg-white rounded-xl border border-pink-100 hover:border-pink-300 transition-colors">
            <input type="checkbox" ${optAutoOpen ? 'checked' : ''} onchange="toggleOption('autoOpen', this.checked)" class="w-4 h-4 text-pink-500 rounded border-pink-300 focus:ring-pink-400">
            <span class="text-xs font-bold text-gray-700">Open Cards Automatically <span class="font-normal text-pink-400">(Reveal instantly upon selection)</span></span>
        </label>
        <label class="flex items-center space-x-3 cursor-pointer p-2.5 bg-white rounded-xl border border-pink-100 hover:border-pink-300 transition-colors">
            <input type="checkbox" ${optShowDesc ? 'checked' : ''} onchange="toggleOption('showDesc', this.checked)" class="w-4 h-4 text-pink-500 rounded border-pink-300 focus:ring-pink-400">
            <span class="text-xs font-bold text-gray-700">Show the Description <span class="font-normal text-pink-400">(Display card meaning summaries)</span></span>
        </label>
    `;
}

function updateDeckCount(num) {
    deckCount = num;
    renderConfigNumbers();
}

function startDraw() {
    let pool = optMajorOnly ? TAROT_DECK.filter(c => c.arcana === 'Major Arcana') : [...TAROT_DECK];
    if (deckCount > pool.length) deckCount = pool.length;

    let shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    activeDeck = shuffled.map(c => ({...c, isReversed: Math.random() > 0.5, drawn: false}));
    drawnCards = [];
    
    const container = document.getElementById('deck-scroll-area');
    if (container) {
        container.innerHTML = '';
        container.style.width = `${Math.max(800, activeDeck.length * 16 + 100)}px`;
        
        activeDeck.forEach((card, idx) => {
            const distCenter = idx - (activeDeck.length / 2);
            const arcY = Math.pow(distCenter * 0.15, 2);
            const rot = distCenter * 0.3;
            
            const cardEl = document.createElement('div');
            cardEl.className = 'tarot-card-item absolute top-0 cursor-pointer';
            cardEl.style.left = `${idx * 16}px`;
            cardEl.style.transform = `translateY(${arcY}px) rotate(${rot}deg)`;
            cardEl.onclick = () => pickCard(idx, cardEl);
            
            cardEl.innerHTML = `
                <div class="w-[80px] h-[135px] bg-pink-100 border border-pink-200 rounded-xl shadow-sm flex items-center justify-center relative overflow-hidden">
                    <div class="absolute inset-1 border border-pink-200/60 rounded-lg"></div>
                    <div class="w-6 h-6 rounded-full border border-pink-300 opacity-50"></div>
                </div>`;
            container.appendChild(cardEl);
        });
    }
    
    updateDrawUI();
    setDrawPhase('draw');
}

function pickCard(idx, el) {
    if (drawnCards.length >= deckCount) return;
    if (activeDeck[idx].drawn) return;
    
    activeDeck[idx].drawn = true;
    drawnCards.push(activeDeck[idx]);
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    
    updateDrawUI();
    if (drawnCards.length === deckCount) {
        if (optAutoOpen) {
            setDrawPhase('result');
        } else {
            const btn = document.getElementById('btn-reveal');
            if (btn) btn.classList.remove('hidden');
        }
    }
}

function updateDrawUI() {
    const counter = document.getElementById('draw-counter');
    if (counter) counter.innerText = `${drawnCards.length} / ${deckCount} selected`;
    
    const slots = document.getElementById('draw-slots');
    if (!slots) return;
    let html = '';
    for(let i=0; i<deckCount; i++) {
        if (drawnCards[i]) {
            html += `
            <div class="w-[45px] h-[75px] rounded-md bg-white border border-pink-100 flex flex-col items-center justify-center p-1 text-center shadow-sm">
                <div class="text-[6px] text-pink-400 font-cute font-bold uppercase">${drawnCards[i].arcana}</div>
                <div class="text-[8px] font-cute font-bold leading-none mt-1">${drawnCards[i].name}</div>
            </div>`;
        } else {
            html += `<div class="w-[45px] h-[75px] border-2 border-dashed border-pink-100 rounded-md"></div>`;
        }
    }
    slots.innerHTML = html;
}

function renderResult() {
    const grid = document.getElementById('result-grid');
    if (!grid) return;
    let html = '';
    
    let questionHtml = '';
    if (tarotQuestion && tarotQuestion.trim() !== '') {
        questionHtml = `
            <div class="w-full max-w-xl mb-6 bg-pink-50/70 border border-pink-200 p-4 rounded-2xl text-center font-cute shadow-sm">
                <div class="text-[10px] uppercase tracking-widest text-pink-400 font-bold mb-1">Your Question / Intention</div>
                <p class="text-sm sm:text-base font-bold text-purple-800">"${tarotQuestion}"</p>
            </div>
        `;
    }

    drawnCards.forEach((card, idx) => {
        const orientationText = card.isReversed ? 'Reversed' : 'Upright';
        const descText = card.isReversed ? card.reversed : card.upright;

        html += `
        <div class="flex flex-col items-center w-full" style="animation-delay: ${idx * 100}ms">
            <div class="w-full max-w-[120px] aspect-[2/3.3] rounded-xl flex flex-col items-center justify-center text-center shadow-md relative overflow-hidden ${card.img ? '' : 'bg-white border border-pink-100 p-2'}">
                 ${card.img 
                     ? `<img src="${card.img}" alt="${card.name}" class="w-full h-full object-contain" />`
                     : `<div class="text-[9px] text-pink-400 font-cute font-bold mb-1 uppercase tracking-widest">${card.arcana}</div>
                        <div class="text-xs sm:text-sm font-cute font-bold text-gray-800 leading-tight">${card.name}</div>
                        <div class="mt-2 text-pink-200 text-[10px] font-cute">${card.number}</div>`
                 }
            </div>
            <span class="text-xs sm:text-sm font-cute text-gray-700 mt-3 text-center leading-tight">
                ${card.name} <br> <span class="text-[10px] text-pink-400 italic">${orientationText}</span>
            </span>
            ${optShowDesc ? `
            <div class="mt-3 bg-pink-50/60 border border-pink-100 p-3 rounded-2xl text-left w-full font-cute shadow-sm">
                <div class="text-[10px] font-bold text-purple-800 uppercase tracking-wider mb-1 flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-pink-400 mr-2"></span> Summary Meaning</div>
                <p class="text-[11px] text-gray-600 leading-snug">${descText}</p>
            </div>` : ''}
        </div>`;
    });
    
    grid.innerHTML = questionHtml + html;
}

// ==========================================
// --- TAROT LIBRARY SYSTEM ---
// ==========================================
function ensureLibrarySearch() {
    const filtersEl = document.getElementById('card-filters');
    if (!filtersEl) return;
    let container = document.getElementById('library-search-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'library-search-container';
        container.className = 'w-full max-w-md mx-auto mb-6 px-4';
        container.innerHTML = `
            <input type="text" id="library-search-input" 
                placeholder="Find CuTarot card" 
                oninput="filterLibrary(window.currentLibraryFilter || 'All', this.value)"
                class="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-100 font-cute text-sm text-gray-700 bg-white shadow-sm transition-all text-center"
            />
        `;
        filtersEl.parentNode.insertBefore(container, filtersEl.nextSibling);
    }
}

window.currentLibraryFilter = 'All';
function filterLibrary(filter, searchTerm = '') {
    window.currentLibraryFilter = filter;
    const input = document.getElementById('library-search-input');
    const term = searchTerm !== '' ? searchTerm : (input ? input.value : '');
    
    const filtersEl = document.getElementById('card-filters');
    if (filtersEl) {
        const buttons = filtersEl.children;
        for (let btn of buttons) {
            if (btn.innerText.includes(filter) || (filter === 'Major Arcana' && btn.innerText === 'Major')) {
                btn.className = "px-4 py-2 rounded-full border border-pink-200 text-sm font-cute font-bold transition-colors bg-pink-300 text-white shadow-sm";
            } else {
                btn.className = "px-4 py-2 rounded-full border border-pink-200 text-sm font-cute font-bold transition-colors bg-white hover:bg-pink-50 text-gray-600";
            }
        }
    }
    
    const grid = document.getElementById('library-grid');
    if (!grid) return;
    let html = '';
    TAROT_DECK.forEach((card, index) => {
        const isMajor = card.arcana === 'Major Arcana';
        const suit = isMajor ? null : card.name.split(' of ')[1];
        
        let isMatchCategory = (filter === 'All') || 
                              (filter === 'Major Arcana' && isMajor) || 
                              (filter === suit);
        
        let isMatchSearch = term === '' || card.name.toLowerCase().includes(term.toLowerCase());
        
        if (isMatchCategory && isMatchSearch) {
            html += `
                <div onclick="showCardDetail(${index})" class="cursor-pointer transform transition-transform hover:-translate-y-2">
                    <div class="w-full aspect-[2/3.3] rounded-xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${card.img ? '' : 'bg-white border border-pink-100 p-2'}">
                        ${card.img 
                            ? `<img src="${card.img}" alt="${card.name}" class="w-full h-full object-contain" />`
                            : `<div class="text-[9px] text-pink-400 font-cute font-bold mb-1 uppercase tracking-widest">${isMajor ? 'Major' : suit}</div>
                               <div class="text-xs sm:text-sm font-cute font-bold text-gray-800 leading-tight">${card.name}</div>
                               <div class="mt-2 text-pink-200 text-[10px] font-cute">${card.number}</div>`
                        }
                    </div>
                </div>
            `;
        }
    });
    grid.innerHTML = html;
}

function showCardDetail(index) {
    const card = TAROT_DECK[index];
    let yesNoClass = card.yesNo === 'Yes' ? 'text-green-600' : (card.yesNo === 'No' ? 'text-red-500' : 'text-orange-400');

    const detailContent = document.getElementById('card-detail-content');
    if (!detailContent) return;

    detailContent.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8 lg:gap-12">
            <div class="w-full md:w-1/3 flex justify-center">
                <div class="w-64 md:w-full aspect-[2/3.3] rounded-2xl flex flex-col items-center justify-center shadow-xl relative overflow-hidden group ${card.img ? '' : 'bg-gradient-to-b from-pink-50 to-white border-2 border-pink-100 p-6'}">
                    ${card.img 
                        ? `<img src="${card.img}" alt="${card.name}" class="w-full h-full object-contain rounded-2xl" />`
                        : `<div class="absolute inset-2 border border-pink-200/60 rounded-xl"></div>
                           <h2 class="font-cute font-bold text-3xl text-center text-purple-800 z-10 leading-tight">${card.name}</h2>
                           <p class="text-xs text-pink-400 font-cute font-bold uppercase tracking-widest mt-4 z-10">${card.arcana}</p>`
                    }
                </div>
            </div>
            
            <div class="w-full md:w-2/3 space-y-6">
                <div>
                    <h1 class="font-cute font-bold text-4xl md:text-5xl text-purple-800 mb-2">${card.name}</h1>
                    <p class="text-sm text-pink-500 font-medium tracking-widest uppercase font-cute">${card.arcana}</p>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-xl border border-pink-100 shadow-sm">
                        <h4 class="text-[10px] font-bold text-pink-400 uppercase tracking-wider mb-1 font-cute">Yes / No Reading</h4>
                        <p class="font-cute font-bold text-lg ${yesNoClass}">${card.yesNo}</p>
                    </div>
                    <div class="bg-pink-50/50 p-4 rounded-xl border border-pink-100 shadow-sm">
                        <h4 class="text-[10px] font-bold text-pink-400 uppercase tracking-wider mb-1 font-cute">Astrology / Element</h4>
                        <p class="font-cute text-sm text-gray-700">${card.astrology}</p>
                    </div>
                </div>

                <div class="space-y-5 pt-4">
                    <div>
                        <h3 class="font-cute font-bold text-xl text-purple-800 mb-2 flex items-center"><span class="w-2 h-2 rounded-full bg-pink-300 mr-3"></span> Upright Meaning</h3>
                        <p class="text-gray-600 font-cute text-sm leading-relaxed text-justify">${card.upright}</p>
                    </div>
                    <div>
                        <h3 class="font-cute font-bold text-xl text-purple-800 mb-2 flex items-center"><span class="w-2 h-2 rounded-full bg-gray-400 mr-3"></span> Reversed Meaning</h3>
                        <p class="text-gray-600 font-cute text-sm leading-relaxed text-justify">${card.reversed}</p>
                    </div>
                    <div class="bg-pink-50/30 p-5 rounded-2xl border border-pink-50">
                        <h3 class="font-cute font-bold text-xl text-purple-800 mb-2 flex items-center"><span class="text-pink-400 mr-3 text-lg">♥</span> Relationship & Love</h3>
                        <p class="text-gray-600 font-cute text-sm leading-relaxed">${card.love}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    navigate('card-detail');
}

// ==========================================
// --- ZODIAC, GENERIC & SHOP PAGES ---
// ==========================================
function showZodiac(id) {
    const z = ZODIAC_DATA.find(item => item.id === id);
    if (!z) return;
    
    const detailContent = document.getElementById('zodiac-detail-content');
    if (!detailContent) return;

    detailContent.innerHTML = `
        <div class="text-center mb-8">
            <div class="text-pink-400 mb-3 w-16 h-16 mx-auto"><svg viewBox="0 0 24 24" class="w-full h-full">${z.svg}</svg></div>
            <h1 class="font-cute font-bold text-4xl text-purple-800 mb-1">${z.name}</h1>
            <p class="text-sm text-pink-400 tracking-wider font-cute mb-4">${z.dateRange}</p>
            <div class="flex justify-center gap-2">
                <span class="px-3 py-1 bg-pink-100 text-purple-700 text-xs font-cute font-bold rounded-full">${z.element}</span>
                <span class="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-cute font-bold rounded-full border border-purple-100">Tarot: ${z.tarotMatch}</span>
            </div>
        </div>
        <div class="bg-pink-50/30 p-6 sm:p-8 rounded-3xl border border-pink-100 text-gray-600 font-cute leading-relaxed text-left space-y-4 shadow-sm">
            <p class="text-base">Welcome to the energy profile of <strong>${z.name}</strong>.</p>
            <p class="text-sm font-light leading-relaxed">${z.desc}</p>
            <p class="text-xs text-pink-400 italic pt-2">“Use this zodiac energy as a daily reflective guide in your tarot readings with Mai Collection.”</p>
        </div>
    `;
    
    navigate('zodiac');
}

function renderShopPage() {
    let shopView = document.getElementById('view-shop');
    if (!shopView) {
        const homeView = document.getElementById('view-home');
        if (!homeView) return;
        shopView = document.createElement('div');
        shopView.id = 'view-shop';
        shopView.className = 'view-section pb-24 text-center';
        homeView.parentNode.appendChild(shopView);
    }

    shopView.innerHTML = `
        <div class="w-full max-w-2xl mx-auto px-4 mt-6 font-cute text-left space-y-6">
            <div class="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl border border-pink-200 text-center shadow-sm">
                <div class="w-32 aspect-[2/3] bg-pink-200 rounded-2xl mx-auto mb-4 border-2 border-pink-300 shadow-md flex items-center justify-center font-bold text-purple-800 text-xs">CuTarot Deck Box</div>
                <h1 class="text-3xl font-bold text-purple-800 mb-2">Buy Physical CuTarot Deck</h1>
                <p class="text-xs text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">Get your own aesthetic physical deck crafted with love by Mai Collection. Complete with full 78 tarot cards & custom Oracle cards.</p>
                <a href="https://shopee.co.id" target="_blank" class="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold px-8 py-3.5 rounded-2xl shadow-md transition-all">
                    Order via Shopee / Marketplace &rarr;
                </a>
            </div>
        </div>
    `;
}

function renderGenericPage(title) {
    const titleEl = document.getElementById('generic-title');
    if (titleEl) titleEl.innerText = title;
    
    const content = document.getElementById('generic-content');
    if (!content) return;
    
    if (title === 'About Tarot') {
        content.innerHTML = `
            <div class="space-y-8 text-left">
                <div class="bg-pink-50/40 p-6 sm:p-8 rounded-3xl border border-pink-100 shadow-sm">
                    <h3 class="font-cute font-bold text-2xl text-purple-800 mb-3">Discovering the World of Tarot</h3>
                    <p class="text-gray-600 font-cute text-sm leading-relaxed">
                        Tarot is not merely a tool for rigid future-telling, but a mirror of the soul reflecting the depths of the subconscious mind, emotions, and human potential. Through rich visual symbolism, tarot helps us navigate life's questions with serene wisdom.
                    </p>
                </div>
                <div class="space-y-3">
                    <h3 class="font-cute font-bold text-xl text-purple-800 flex items-center">
                        <span class="w-2 h-2 rounded-full bg-pink-300 mr-3"></span> History and Roots of Tarot
                    </h3>
                    <p class="text-gray-600 font-cute text-sm leading-relaxed">
                        The historical roots of tarot trace back to northern Italy in the 15th century (around the 1430s). Initially, European nobility used these cards for a conventional parlor game called <em>Tarocchi</em>. It was not until the 18th and 19th centuries that historians and occultists recognized the profound esoteric symbolism hidden behind the card imagery.
                    </p>
                    <p class="text-gray-600 font-cute text-sm leading-relaxed">
                        The peak of modern tarot evolution occurred in 1909 when Arthur Edward Waite, a prominent mystic, collaborated with brilliant artist Pamela Colman Smith—both members of the Hermetic Order of the Golden Dawn—to publish the Rider-Waite-Smith deck. This legendary deck defined the aesthetic and golden standard of modern tarot today.
                    </p>
                </div>
            </div>
        `;
    } else if (title === 'About Oracle') {
        content.innerHTML = `
            <div class="space-y-8 text-left">
                <div class="bg-pink-50/40 p-6 sm:p-8 rounded-3xl border border-pink-100 shadow-sm">
                    <h3 class="font-cute font-bold text-2xl text-purple-800 mb-3">Understanding Oracle Cards</h3>
                    <p class="text-gray-600 font-cute text-sm leading-relaxed">
                        Unlike traditional Tarot cards which follow a strict 78-card structure and traditional archetypes (Major and Minor Arcana), <strong>Oracle cards are free-form spiritual tools</strong>. They offer direct messages, affirmations, and gentle energetic guidance without complex system rules.
                    </p>
                </div>
                <div class="space-y-4 font-cute text-sm text-gray-600 leading-relaxed">
                    <h4 class="font-bold text-lg text-purple-800">How to Use Oracle alongside Tarot?</h4>
                    <p>Oracle cards can be drawn on their own for daily inspiration, or drawn alongside a Tarot reading as a final "advice" card to clarify the overall theme of your reading.</p>
                </div>
            </div>
        `;
    } else if (title === 'Personal Reading') {
        content.innerHTML = `
            <div class="space-y-8 text-left">
                <div class="text-center mb-8">
                    <div class="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-4 border-2 border-pink-200 flex items-center justify-center text-purple-800 font-cute font-bold text-xl">M</div>
                    <h2 class="font-cute font-bold text-3xl text-purple-800">Hi, I'm Mai</h2>
                    <p class="text-sm text-pink-500 font-['Caveat'] mt-1 tracking-wide">Creator of the CuTarot</p>
                </div>
                <div class="space-y-4 text-gray-600 font-cute text-sm leading-relaxed">
                    <p>CuTarot was initially made for better understanding about what the cards try to speak to me. Rider Waite Smith cards are full of symbolism in every small details. I simply couldn't understand all of them.</p>
                    <p>So, CuTarot was created. I didn't simplify the image nor the message every card try to convey. I just turned every card into something I could understand. Something that if I look at it in my spreads, I could tell directly the story and the message without having to remember the keywords all along.</p>
                </div>
            </div>
        `;
    } else {
        content.innerHTML = `<p>CuTarot by Mai Collection is provided for personal reflection and entertainment purposes.</p>`;
    }
}

// ==========================================
// --- DASHBOARD SEARCH SYSTEM ---
// ==========================================
function ensureDashboardSearch() {
    const homeView = document.getElementById('view-home');
    if (!homeView) return;
    let container = document.getElementById('dashboard-search-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'dashboard-search-container';
        container.className = 'w-full max-w-lg mx-auto mb-8 px-4 pt-4';
        container.innerHTML = `
            <div class="relative">
                <input type="text" id="dashboard-search-input" 
                    placeholder="Explore CuTarot" 
                    oninput="handleDashboardSearch(this.value)"
                    class="w-full px-5 py-3.5 rounded-2xl border-2 border-purple-300 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-100 font-cute text-sm text-gray-700 bg-white shadow-sm transition-all text-center"
                />
                <div id="dashboard-search-results" class="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-pink-100 max-h-60 overflow-y-auto hidden z-50 p-2 space-y-1 font-cute text-xs text-left"></div>
            </div>
        `;
        homeView.insertBefore(container, homeView.firstChild);
    }
}

function handleDashboardSearch(query) {
    const resultsEl = document.getElementById('dashboard-search-results');
    if (!resultsEl) return;
    if (!query || query.trim() === '') {
        resultsEl.classList.add('hidden');
        resultsEl.innerHTML = '';
        return;
    }
    const q = query.toLowerCase();
    let matches = [];

    SPREADS.forEach(s => {
        if (s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)) {
            matches.push({ type: 'Tarot Spread', title: s.name, desc: s.desc, action: () => navigate('draw') });
        }
    });

    ZODIAC_DATA.forEach(z => {
        if (z.name.toLowerCase().includes(q) || z.element.toLowerCase().includes(q)) {
            matches.push({ type: 'Zodiac', title: z.name, desc: z.dateRange, action: () => showZodiac(z.id) });
        }
    });

    TAROT_DECK.forEach((c, idx) => {
        if (c.name.toLowerCase().includes(q) || c.arcana.toLowerCase().includes(q)) {
            matches.push({ type: 'Tarot Card', title: c.name, desc: c.arcana, action: () => showCardDetail(idx) });
        }
    });

    ORACLE_DECK.forEach((o, idx) => {
        if (o.name.toLowerCase().includes(q) || o.desc.toLowerCase().includes(q)) {
            matches.push({ type: 'Oracle Card', title: o.name, desc: o.category, action: () => showOracleDetail(idx) });
        }
    });

    const sections = [
        { name: 'Birth Card Calculator', desc: 'Find your Soul & Personality cards', action: () => { initBirthCalculatorPage(); navigate('birth-calculator'); } },
        { name: 'Oracle Deck & Draw', desc: 'Fluid intuitive card readings', action: () => navigate('oracle-draw') },
        { name: 'Oracle Library', desc: 'Browse all 50 Oracle cards', action: () => navigate('oracle-library') },
        { name: 'About Oracle', desc: 'Learn how to use Oracle cards', action: () => navigate('generic', 'About Oracle') },
        { name: 'Articles & Guides', desc: 'Read CuTarot articles', action: () => navigate('home', 'home-articles-section') },
        { name: 'Buy CuTarot Deck', desc: 'Get your physical deck', action: () => navigate('shop') }
    ];

    sections.forEach(sec => {
        if (sec.name.toLowerCase().includes(q) || sec.desc.toLowerCase().includes(q)) {
            matches.push({ type: 'Page / Section', title: sec.name, desc: sec.desc, action: sec.action });
        }
    });
    
    if (matches.length === 0) {
        resultsEl.innerHTML = `<div class="p-3 text-center text-pink-400">No results found for "${query}"</div>`;
    } else {
        resultsEl.innerHTML = '';
        matches.slice(0, 8).forEach(m => {
            const itemEl = document.createElement('div');
            itemEl.className = 'p-2.5 hover:bg-pink-50 rounded-xl cursor-pointer transition-colors flex justify-between items-center font-cute';
            itemEl.innerHTML = `
                <div>
                    <div class="font-bold text-purple-800">${m.title}</div>
                    <div class="text-[10px] text-gray-500">${m.desc}</div>
                </div>
                <span class="px-2 py-0.5 bg-pink-100 text-purple-700 text-[9px] rounded-full font-bold">${m.type}</span>
            `;
            itemEl.onclick = () => {
                m.action();
                resultsEl.classList.add('hidden');
            };
            resultsEl.appendChild(itemEl);
        });
    }
    resultsEl.classList.remove('hidden');
}

// ==========================================
// --- TAROT BIRTH CALCULATOR SYSTEM ---
// ==========================================
const BIRTH_CARD_MEANINGS = {
    0: { 
        p1: "Sebagai Kartu Kepribadian, The Fool menandakan jalan hidup yang didefinisikan oleh eksplorasi tanpa henti dan jiwa muda yang tidak bisa dipatahkan.",
        s1: "Pada tingkat Jiwa (Soul), inti terdalammu mendambakan kebebasan mutlak dan kebenaran tanpa syarat."
    },
    1: { 
        p1: "Sebagai Kartu Kepribadian, The Magician menandakan bahwa kamu adalah seorang manifestor sejati.",
        s1: "Pada tingkat Jiwa, kamu memiliki koneksi langsung dengan percikan ilahi dari penciptaan."
    }
};

function getBirthCardMeaning(num) {
    if (num > 21) num = 0;
    return BIRTH_CARD_MEANINGS[num] || BIRTH_CARD_MEANINGS[0];
}

function calculateTarotNumerology(mm, dd, yyyy) {
    const sum = parseInt(mm) + parseInt(dd) + parseInt(yyyy);
    const sumDigits = (num) => num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    
    let personality = sumDigits(sum);
    while (personality > 22) personality = sumDigits(personality);
    if (personality === 22) personality = 0; 
    
    let soul = personality;
    if (personality === 0) soul = 4;
    else if (personality > 9 && personality !== 19) soul = sumDigits(personality);
    else if (personality === 19) soul = 10; 
    
    return { pNum: personality, sNum: soul };
}

function ensureBirthCalculatorHome() {
    const homeView = document.getElementById('view-home');
    if (!homeView) return;
    
    let container = document.getElementById('home-birth-calculator');
    if (!container) {
        container = document.createElement('div');
        container.id = 'home-birth-calculator';
        container.className = 'w-full max-w-lg mx-auto mb-10 px-4 cursor-pointer group';
        container.onclick = () => {
            initBirthCalculatorPage(); 
            navigate('birth-calculator'); 
        };
        
        container.innerHTML = `
            <div class="flex flex-row items-center bg-white rounded-3xl border border-pink-100 p-4 shadow-sm hover:shadow-md transition-all group-hover:border-pink-300">
                <div class="w-1/3 aspect-[3/4] bg-pink-50 rounded-2xl border border-pink-200 flex items-center justify-center overflow-hidden relative flex-shrink-0">
                    <div class="absolute inset-1 border border-pink-200/60 rounded-xl"></div>
                    <span class="text-pink-300 font-cute font-bold text-[10px] text-center px-2">Birth Card Cover</span>
                </div>
                <div class="w-2/3 pl-5 text-left flex flex-col justify-center">
                    <div class="text-[9px] uppercase tracking-widest text-pink-400 font-bold mb-1 font-cute">Numerology & Astrology</div>
                    <h3 class="font-cute font-bold text-xl text-purple-800 mb-2 leading-tight">Tarot Birth Calculator</h3>
                    <p class="font-cute text-xs text-gray-500 leading-relaxed mb-3">Discover your Soul and Personality cards based on your birth date.</p>
                    <div>
                        <span class="inline-block px-3 py-1 bg-pink-50 text-pink-500 text-[10px] font-bold rounded-full font-cute border border-pink-100 group-hover:bg-pink-100 transition-colors">Calculate Yours &rarr;</span>
                    </div>
                </div>
            </div>
        `;
        homeView.appendChild(container);
    }
}

function initBirthCalculatorPage() {
    if (document.getElementById('view-birth-calculator')) return;
    const homeView = document.getElementById('view-home');
    if (!homeView) return;
    
    const parentContainer = homeView.parentNode; 
    const viewDiv = document.createElement('div');
    viewDiv.id = 'view-birth-calculator';
    viewDiv.className = 'view-section pb-24 text-center';
    
    viewDiv.innerHTML = `
        <div class="w-full max-w-lg mx-auto px-4 mt-4">
            <div class="w-36 aspect-[3/4] mx-auto bg-pink-50 rounded-2xl border-2 border-pink-100 flex items-center justify-center relative mb-6 shadow-sm">
                <div class="absolute inset-2 border border-pink-200/60 rounded-xl"></div>
                <span class="text-pink-300 font-cute font-bold text-xs text-center px-2">Birth Card Cover</span>
            </div>
            
            <div class="bg-white p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-md">
                <h3 class="font-cute font-bold text-lg text-purple-800 mb-4">Enter Your Birthday</h3>
                <input type="text" id="birthdate-input" 
                    placeholder="MM/DD/YYYY" 
                    oninput="handleBirthInput(event)"
                    class="w-full px-5 py-4 rounded-2xl border-2 border-purple-300 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-100 font-cute text-lg text-center text-gray-800 tracking-widest bg-gray-50 shadow-inner transition-all mb-6"
                />
                
                <button id="btn-find-birth-cards" onclick="processBirthCards()" class="w-full bg-purple-700 text-white py-4 rounded-xl font-cute font-bold text-sm shadow-md transition-all transform hover:-translate-y-1 opacity-50 pointer-events-none">
                    Find My Cards
                </button>

                <div id="birth-cards-result-container" class="mt-6 text-left hidden"></div>
            </div>
        </div>
    `;
    parentContainer.appendChild(viewDiv);
}

function handleBirthInput(e) {
    let val = e.target.value.replace(/\D/g, ''); 
    if (val.length > 8) val = val.substring(0, 8);
    
    let formatted = val;
    if (val.length >= 5) formatted = val.substring(0, 2) + '/' + val.substring(2, 4) + '/' + val.substring(4, 8);
    else if (val.length >= 3) formatted = val.substring(0, 2) + '/' + val.substring(2, 4);
    
    e.target.value = formatted;
    
    const btn = document.getElementById('btn-find-birth-cards');
    if (btn) {
        if (val.length === 8) btn.classList.remove('opacity-50', 'pointer-events-none');
        else btn.classList.add('opacity-50', 'pointer-events-none');
    }
}

function processBirthCards() {
    const inputEl = document.getElementById('birthdate-input');
    if (!inputEl) return;
    const input = inputEl.value; 
    const parts = input.split('/');
    if (parts.length !== 3 || parts[2].length !== 4) return;
    
    const mm = parts[0], dd = parts[1], yyyy = parts[2];
    const { pNum, sNum } = calculateTarotNumerology(mm, dd, yyyy);
    
    const pCardData = TAROT_DECK.find(c => c.arcana === 'Major Arcana' && c.number === pNum);
    const sCardData = TAROT_DECK.find(c => c.arcana === 'Major Arcana' && c.number === sNum);
    
    const pMeaning = getBirthCardMeaning(pNum);
    const sMeaning = getBirthCardMeaning(sNum);
    
    let resultContainer = document.getElementById('birth-cards-result-container');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.id = 'birth-cards-result-container';
        resultContainer.className = 'mt-6 text-left font-cute space-y-4';
        inputEl.parentElement.appendChild(resultContainer);
    }

    resultContainer.innerHTML = `
        <div class="p-4 bg-pink-50/70 border border-pink-200 rounded-2xl">
            <div class="text-[10px] uppercase font-bold text-pink-400">Personality Card</div>
            <h4 class="font-bold text-lg text-purple-800 mb-1">${pCardData ? pCardData.name : 'The Fool'} (${pNum})</h4>
            <p class="text-xs text-gray-600 leading-relaxed">${pMeaning.p1}</p>
        </div>
        <div class="p-4 bg-purple-50/70 border border-purple-200 rounded-2xl">
            <div class="text-[10px] uppercase font-bold text-purple-400">Soul Card</div>
            <h4 class="font-bold text-lg text-purple-800 mb-1">${sCardData ? sCardData.name : 'The Emperor'} (${sNum})</h4>
            <p class="text-xs text-gray-600 leading-relaxed">${sMeaning.s1}</p>
        </div>
    `;
    resultContainer.classList.remove('hidden');
}

// ==========================================
// --- ORACLE SYSTEM LOGIC & UI ---
// ==========================================
function ensureOracleHomeSections() {
    const homeView = document.getElementById('view-home');
    if (!homeView) return;

    let oracleMainSection = document.getElementById('home-oracle-section');
    if (!oracleMainSection) {
        oracleMainSection = document.createElement('div');
        oracleMainSection.id = 'home-oracle-section';
        oracleMainSection.className = 'w-full max-w-lg mx-auto mb-10 px-4';
        oracleMainSection.innerHTML = `
            <div class="bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-3xl border-2 border-pink-200 p-6 shadow-sm text-left relative overflow-hidden">
                <div class="w-full aspect-[16/9] bg-pink-100 rounded-2xl mb-5 overflow-hidden border border-pink-200 shadow-inner flex items-center justify-center">
                    <span class="font-cute font-bold text-pink-300 text-sm">Oracle Deck Cover Banner</span>
                </div>
                <div class="text-[9px] uppercase tracking-widest text-pink-400 font-bold mb-1 font-cute">Companion Intuitive Deck</div>
                <h3 class="font-cute font-bold text-2xl text-purple-800 mb-2">CuTarot Oracle Deck</h3>
                <p class="font-cute text-xs text-gray-600 leading-relaxed mb-6">
                    Oracle cards provide fluid, direct spiritual affirmations and gentle guidance.
                </p>
                <div class="flex flex-col sm:flex-row gap-3">
                    <button onclick="navigate('oracle-draw')" class="flex-1 bg-purple-700 hover:bg-purple-800 text-white py-3.5 rounded-2xl font-cute font-bold text-xs shadow-md transition-all text-center">
                        Draw Oracle Cards &rarr;
                    </button>
                    <button onclick="navigate('oracle-library')" class="bg-white hover:bg-pink-50 border border-pink-200 text-purple-800 py-3.5 px-5 rounded-2xl font-cute font-bold text-xs transition-colors text-center">
                        Oracle Library
                    </button>
                </div>
            </div>
        `;
        homeView.appendChild(oracleMainSection);
    }

    let dailyTarotEl = document.getElementById('inline-daily-card')?.parentElement || document.getElementById('btn-daily-card')?.parentElement;
    let dailyOracleSection = document.getElementById('home-daily-oracle-section');
    if (!dailyOracleSection && dailyTarotEl) {
        dailyOracleSection = document.createElement('div');
        dailyOracleSection.id = 'home-daily-oracle-section';
        dailyOracleSection.className = 'w-full max-w-md mx-auto mt-6 pt-6 border-t border-pink-100 text-center font-cute';
        dailyOracleSection.innerHTML = `
            <div class="bg-white/80 border border-pink-100 rounded-2xl p-4 shadow-sm">
                <div class="text-[9px] uppercase tracking-widest text-pink-400 font-bold mb-1">Gentle Affirmation</div>
                <h4 class="font-bold text-sm text-purple-800 mb-3">Today's Oracle Insight</h4>
                <div id="inline-oracle-daily" class="hidden flex-col items-center mb-3"></div>
                <button id="btn-oracle-daily" onclick="toggleDailyOracleCard()" class="bg-pink-100 hover:bg-pink-200 text-purple-800 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm">
                    Draw Daily Oracle
                </button>
                <div class="mt-3">
                    <span onclick="navigate('generic', 'About Oracle')" class="cursor-pointer text-[10px] text-pink-400 hover:text-pink-600 underline font-bold">What is Oracle & how to use it?</span>
                </div>
            </div>
        `;
        dailyTarotEl.parentNode.insertBefore(dailyOracleSection, dailyTarotEl.nextSibling);
    }
}

function toggleDailyOracleCard() {
    const todayStr = getTodayDateString();
    let savedData = localStorage.getItem('cutarot_oracle_daily');
    let dailyData = null;

    if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.date === todayStr) dailyData = parsed;
    }

    if (!dailyData) {
        const randomCard = ORACLE_DECK[Math.floor(Math.random() * ORACLE_DECK.length)];
        dailyData = { date: todayStr, card: randomCard };
        localStorage.setItem('cutarot_oracle_daily', JSON.stringify(dailyData));
    }

    const container = document.getElementById('inline-oracle-daily');
    if (container) {
        container.innerHTML = `
            <div class="w-[80px] aspect-[2/3.3] rounded-lg border border-pink-100 overflow-hidden mb-2 shadow-sm flex items-center justify-center bg-pink-50">
                ${dailyData.card.img ? `<img src="${dailyData.card.img}" class="w-full h-full object-contain" />` : `<span class="text-[9px] font-bold text-purple-800 p-1 text-center">${dailyData.card.name}</span>`}
            </div>
            <div class="font-bold text-xs text-purple-800">${dailyData.card.name}</div>
            <p class="text-[11px] text-gray-600 italic mt-1 max-w-xs">"${dailyData.card.desc}"</p>
        `;
        container.classList.remove('hidden');
        container.classList.add('flex');
    }

    const btn = document.getElementById('btn-oracle-daily');
    if (btn) {
        btn.innerText = "Oracle Card Drawn";
        btn.classList.add('opacity-50', 'pointer-events-none');
    }
}

function checkDailyOracleCard() {
    const todayStr = getTodayDateString();
    let savedData = localStorage.getItem('cutarot_oracle_daily');
    if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.date === todayStr) {
            toggleDailyOracleCard();
        }
    }
}

function initOracleViews() {
    if (document.getElementById('view-oracle-library')) return;
    const homeView = document.getElementById('view-home');
    if (!homeView) return;
    const parentContainer = homeView.parentNode;

    const libView = document.createElement('div');
    libView.id = 'view-oracle-library';
    libView.className = 'view-section pb-24 text-center';
    libView.innerHTML = `
        <div class="w-full max-w-4xl mx-auto px-4 mt-2">
            <h1 class="font-cute font-bold text-3xl text-purple-800 mt-2 mb-4">Oracle Library</h1>
            <div id="oracle-category-filters" class="flex flex-wrap justify-center gap-2 mb-6 font-cute"></div>
            <div id="oracle-library-grid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"></div>
        </div>
    `;
    parentContainer.appendChild(libView);

    const drawView = document.createElement('div');
    drawView.id = 'view-oracle-draw';
    drawView.className = 'view-section pb-24 text-center';
    drawView.innerHTML = `
        <div class="w-full max-w-lg mx-auto px-4 mt-2">
            <h1 class="font-cute font-bold text-3xl text-purple-800 mt-2 mb-4">Draw Oracle Cards</h1>
            <div id="oracle-step-config" class="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm mb-6">
                <div class="text-xs font-bold text-purple-800 font-cute mb-3">Select How Many Cards (1-10)</div>
                <div id="oracle-num-selector" class="flex flex-wrap justify-center gap-2 mb-6"></div>
                <button onclick="startOracleDrawProcess()" class="w-full bg-purple-700 text-white py-3.5 rounded-xl font-cute font-bold text-sm shadow-md">
                    Start Drawing
                </button>
            </div>
            <div id="oracle-step-draw" class="hidden flex-col items-center">
                <div id="oracle-deck-cards" class="flex justify-center gap-2 my-8 flex-wrap"></div>
                <button id="btn-oracle-reveal" onclick="renderOracleResult()" class="hidden bg-pink-400 text-white px-8 py-3 rounded-xl font-cute font-bold text-sm shadow-md">
                    Reveal Oracle Reading
                </button>
            </div>
            <div id="oracle-step-result" class="hidden flex-col items-center space-y-6"></div>
        </div>
    `;
    parentContainer.appendChild(drawView);

    const detailView = document.createElement('div');
    detailView.id = 'view-oracle-detail';
    detailView.className = 'view-section pb-24 text-center';
    detailView.innerHTML = `
        <div class="w-full max-w-xl mx-auto px-4 mt-2">
            <div id="oracle-detail-content" class="mt-6 text-left"></div>
        </div>
    `;
    parentContainer.appendChild(detailView);
}

function renderOracleLibrary(category = 'All') {
    selectedOracleCategory = category;
    const filterContainer = document.getElementById('oracle-category-filters');
    const categories = ['All', 'Themes', 'Inner State', 'Dynamics', 'Guidance', 'Signals'];
    
    if (filterContainer) {
        let catHtml = '';
        categories.forEach(cat => {
            const active = selectedOracleCategory === cat ? 'bg-pink-400 text-white shadow-sm' : 'bg-white text-gray-600 border border-pink-100 hover:bg-pink-50';
            catHtml += `<button onclick="renderOracleLibrary('${cat}')" class="px-3 py-1.5 rounded-full text-xs font-bold transition-all ${active}">${cat}</button>`;
        });
        filterContainer.innerHTML = catHtml;
    }

    const grid = document.getElementById('oracle-library-grid');
    if (!grid) return;
    let html = '';
    ORACLE_DECK.forEach((card, idx) => {
        if (selectedOracleCategory === 'All' || card.category === selectedOracleCategory) {
            html += `
                <div onclick="showOracleDetail(${idx})" class="cursor-pointer transform transition-transform hover:-translate-y-1">
                    <div class="w-full aspect-[2/3.3] rounded-xl border border-pink-100 bg-white flex flex-col items-center justify-center p-2 text-center shadow-sm overflow-hidden relative">
                        ${card.img 
                            ? `<img src="${card.img}" class="w-full h-full object-contain" />` 
                            : `<div class="text-[9px] uppercase text-pink-400 font-bold mb-1">${card.category}</div>
                               <div class="text-xs font-cute font-bold text-purple-800">${card.name}</div>`
                        }
                    </div>
                </div>
            `;
        }
    });
    grid.innerHTML = html;
}

function showOracleDetail(idx) {
    const card = ORACLE_DECK[idx];
    const content = document.getElementById('oracle-detail-content');
    if (!content) return;

    content.innerHTML = `
        <div class="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-4 font-cute">
            <div class="w-48 aspect-[2/3.3] mx-auto rounded-2xl border border-pink-100 overflow-hidden shadow-md flex items-center justify-center bg-pink-50">
                ${card.img ? `<img src="${card.img}" class="w-full h-full object-contain" />` : `<span class="font-bold text-purple-800">${card.name}</span>`}
            </div>
            <div class="text-center">
                <span class="text-[10px] uppercase font-bold text-pink-400 tracking-wider">${card.category}</span>
                <h2 class="text-2xl font-bold text-purple-800">${card.name}</h2>
            </div>
            <div class="p-4 bg-pink-50/50 rounded-2xl border border-pink-100">
                <h4 class="text-xs font-bold text-pink-500 uppercase tracking-wider mb-1">Oracle Affirmation</h4>
                <p class="text-sm text-gray-700 leading-relaxed">${card.desc}</p>
            </div>
            ${card.guidance ? `
            <div class="p-4 bg-purple-50/50 rounded-2xl border border-purple-100">
                <h4 class="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">Spiritual Guidance</h4>
                <p class="text-sm text-gray-700 leading-relaxed">${card.guidance}</p>
            </div>` : ''}
        </div>
    `;
    navigate('oracle-detail');
}

function renderOracleConfigNumbers() {
    const container = document.getElementById('oracle-num-selector');
    if (!container) return;
    let html = '';
    for (let i = 1; i <= 10; i++) {
        const active = oracleDrawCount === i ? 'bg-purple-700 text-white' : 'bg-pink-50 text-gray-700 border border-pink-100';
        html += `<button onclick="oracleDrawCount=${i}; renderOracleConfigNumbers();" class="w-10 h-10 rounded-full font-cute font-bold text-xs transition-all ${active}">${i}</button>`;
    }
    container.innerHTML = html;
}

function startOracleDrawProcess() {
    document.getElementById('oracle-step-config')?.classList.add('hidden');
    const drawStep = document.getElementById('oracle-step-draw');
    if (drawStep) {
        drawStep.classList.remove('hidden');
        drawStep.classList.add('flex');
    }

    let shuffled = [...ORACLE_DECK].sort(() => Math.random() - 0.5);
    activeOracleDeck = shuffled.slice(0, oracleDrawCount);
    drawnOracleCards = [];

    const container = document.getElementById('oracle-deck-cards');
    if (!container) return;
    container.innerHTML = '';
    activeOracleDeck.forEach((card, idx) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'w-16 h-28 bg-pink-100 border border-pink-200 rounded-xl shadow-sm cursor-pointer hover:-translate-y-1 transition-transform flex items-center justify-center';
        cardEl.innerHTML = `<span class="text-xs text-pink-300 font-bold">Oracle</span>`;
        cardEl.onclick = () => {
            if (drawnOracleCards.includes(card)) return;
            drawnOracleCards.push(card);
            cardEl.classList.add('opacity-40', 'pointer-events-none');
            if (drawnOracleCards.length === oracleDrawCount) {
                document.getElementById('btn-oracle-reveal')?.classList.remove('hidden');
            }
        };
        container.appendChild(cardEl);
    });
}

function renderOracleResult() {
    document.getElementById('oracle-step-draw')?.classList.add('hidden');
    const resStep = document.getElementById('oracle-step-result');
    if (!resStep) return;
    resStep.classList.remove('hidden');
    resStep.classList.add('flex');

    let html = '<h3 class="font-cute font-bold text-2xl text-purple-800 mb-2">Your Oracle Reading</h3>';
    drawnOracleCards.forEach(card => {
        html += `
            <div class="bg-white p-5 rounded-3xl border border-pink-100 shadow-sm w-full text-left font-cute space-y-2">
                <div class="w-24 aspect-[2/3.3] rounded-xl border border-pink-100 overflow-hidden mb-2 shadow-sm flex items-center justify-center bg-pink-50 mx-auto">
                    ${card.img ? `<img src="${card.img}" class="w-full h-full object-contain" />` : `<span class="text-xs font-bold text-purple-800">${card.name}</span>`}
                </div>
                <h4 class="font-bold text-lg text-purple-800 text-center">${card.name}</h4>
                <p class="text-xs text-gray-600 leading-relaxed text-center">${card.desc}</p>
            </div>
        `;
    });
    html += `<button onclick="navigate('oracle-draw')" class="bg-purple-700 text-white px-6 py-3 rounded-xl font-cute font-bold text-xs">Draw Again</button>`;
    resStep.innerHTML = html;
}

function fixFooterPosition() {
    const footer = document.querySelector('footer');
    if (footer) {
        document.body.appendChild(footer);
        footer.classList.add('w-full', 'mt-auto', 'pt-8', 'pb-12');
    }
}

// ==========================================
// --- INITIALIZATION ---
// ==========================================
window.onload = function() {
    ensureDashboardSearch();
    ensureHeaderBuyIcon();
    
    initOracleViews();
    ensureHomeOrder();
    
    updateDrawerMenu();
    checkDailyOracleCard();
    checkDailyCard();
    
    const spreadsGrid = document.getElementById('home-spreads-grid');
    if(spreadsGrid) {
        let spreadHtml = '';
        SPREADS.forEach((s, i) => {
            spreadHtml += `
                <div onclick="selectSpread(${i})" class="p-4 rounded-xl border border-pink-50 hover:border-pink-200 bg-white hover:bg-pink-50/30 cursor-pointer transition-all h-full transform hover:-translate-y-1">
                    <h3 class="font-cute font-bold text-sm text-purple-800 mb-1">${s.name}</h3>
                    <p class="font-cute text-[11px] text-pink-400/90 leading-snug">${s.desc}</p>
                </div>`;
        });
        spreadsGrid.innerHTML = spreadHtml;
        const drawSpreadsGrid = document.getElementById('draw-spreads-grid');
        if (drawSpreadsGrid) drawSpreadsGrid.innerHTML = spreadHtml;
    }

    const zodiacGrid = document.getElementById('home-zodiac-grid');
    if(zodiacGrid) {
        let zodiacHtml = '';
        ZODIAC_DATA.forEach(z => {
            zodiacHtml += `
                <div onclick="showZodiac('${z.id}')" class="p-3.5 rounded-xl border border-gray-100 hover:border-pink-200 text-center transition-all hover:bg-pink-50/30 transform hover:-translate-y-1 flex flex-col items-center cursor-pointer">
                    <div class="text-purple-700 mb-2 w-6 h-6"><svg viewBox="0 0 24 24" class="w-full h-full">${z.svg}</svg></div>
                    <div class="font-cute font-bold text-xs text-purple-700 mb-0.5">${z.name}</div>
                    <div class="font-cute text-[9px] text-pink-400">${z.dateRange}</div>
                </div>`;
        });
        zodiacGrid.innerHTML = zodiacHtml;
    }

    fixFooterPosition();
};
