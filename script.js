// --- DATA ZODIAC ---
const ZODIAC_DATA = [
    { 
        id: 'aries', 
        name: 'Aries', 
        dateRange: 'March 21 – April 19', 
        element: 'Fire Element',
        tarotMatch: 'The Emperor',
        desc: 'Aries is the first spark in the zodiac wheel—a symbol of pure energy that eagerly welcomes new beginnings. Known for a boldness that often precedes fear, this sign lives in fast motion, high initiative, and the belief that the path of life must be forged rather than merely followed.<br><br>In tarot readings, Aries deeply resonates with <strong>The Emperor</strong>, reflecting authority, assertiveness, and a strong protective spirit. The greatest challenge for an Aries is to tame the ego and learn that patience is not a weakness, but the ultimate strategy to win long-term battles.',
        svg: '<path d="M4,14 C4,8 12,4 12,12 C12,4 20,8 20,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'taurus', 
        name: 'Taurus', 
        dateRange: 'April 20 – May 20', 
        element: 'Earth Element',
        tarotMatch: 'The Hierophant',
        desc: 'Taurus is the physical embodiment of grounded, steady earth. They possess a deep appreciation for aesthetic beauty, sensory comfort, and well-planned life stability. Beneath their calm demeanor lies a determination that is nearly impossible to shake.<br><br>Taurus energy reflects <strong>The Hierophant</strong>—symbolizing guarded traditional values, down-to-earth spiritual searching, and unwavering loyalty in relationships. For Taurus, home is not just a place, but a sanctuary built with immense patience.',
        svg: '<circle cx="12" cy="14" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7,9 C7,4 17,4 17,9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'gemini', 
        name: 'Gemini', 
        dateRange: 'May 21 – June 20', 
        element: 'Air Element',
        tarotMatch: 'The Lovers',
        desc: 'Gemini is the nimble spring breeze, carrying boundless curiosity and captivating intellect. They are explorers of ideas, capable of viewing a single problem from multiple perspectives with a lively, charming communication style.<br><br>Their dynamic character is represented by <strong>The Lovers</strong>, symbolizing not only romance but also life-altering choices and the integration of dualities within the self. Gemini\'s greatest challenge is finding focus amidst the storm of information they absorb daily.',
        svg: '<path d="M7,5 L17,5 M7,19 L17,19 M9,5 L9,19 M15,5 L15,19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'cancer', 
        name: 'Cancer', 
        dateRange: 'June 21 – July 22', 
        element: 'Water Element',
        tarotMatch: 'The Chariot',
        desc: 'Cancer is an ocean of emotion holding extraordinary depths behind protective shells. Ruled by lunar energies, they possess razor-sharp intuition—often sensing shifts in a room\'s energy long before anyone else notices.<br><br>This sign represents <strong>The Chariot</strong>, symbolizing an intense emotional journey where they must learn to navigate powerful tides without losing themselves. Cancer is the safest harbor for those they hold dear.',
        svg: '<circle cx="8" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11,10 C16,7 20,10 18,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="14" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13,14 C8,17 4,14 6,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'leo', 
        name: 'Leo', 
        dateRange: 'July 23 – August 22', 
        element: 'Fire Element',
        tarotMatch: 'Strength',
        desc: 'Leo radiates the solar warmth that brings life to everything around them. Boundless creativity, a generous spirit, and natural charisma ensure a Leo always stands out effortlessly without trying too hard.<br><br>Their energy aligns with <strong>Strength</strong>—not raw physical force, but gentle courage, sincerity, and the ability to tame deep-seated fears through supreme self-confidence. Beneath the spotlight, Leo holds a fiercely loyal heart.',
        svg: '<circle cx="7" cy="17" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10,17 C13,17 18,14 15,9 C12,4 6,8 9,13 C12,18 19,16 19,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'virgo', 
        name: 'Virgo', 
        dateRange: 'Aug 23 – Sep 22', 
        element: 'Earth Element',
        tarotMatch: 'The Hermit',
        desc: 'Virgo is the architect of precision, finding beauty in minute details that others overlook. They are analytical, deeply dedicated, and driven by a sincere impulse to mend and nurture their environment.<br><br>Their reflective character mirrors <strong>The Hermit</strong>—the quest for ultimate truth, the need for solitude to recharge mental clarity, and wisdom born from deep observation. Virgo is love manifested through tangible acts of service.',
        svg: '<path d="M5,17 L7,7 L11,17 L14,9 C14,9 15,19 18,17 C21,15 19,10 19,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'libra', 
        name: 'Libra', 
        dateRange: 'Sep 23 – Oct 22', 
        element: 'Air Element',
        tarotMatch: 'Justice',
        desc: 'Libra is a graceful dancer along the line of equilibrium. Under the banner of aesthetic planets, they possess refined artistic taste, a deep aversion to unnecessary conflict, and a natural gift for weaving peace between opposing forces.<br><br>This sign resonates strongly with <strong>Justice</strong>, symbolizing objectivity, the pursuit of true fairness, and weighing choices with a cool head. Libra teaches us that harmony is an art form requiring daily maintenance.',
        svg: '<path d="M4,15 L20,15 M4,18 L20,18 M12,15 C12,10 8,11 6,15 M12,15 C12,10 16,11 18,15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'scorpio', 
        name: 'Scorpio', 
        dateRange: 'Oct 23 – Nov 21', 
        element: 'Water Element',
        tarotMatch: 'Death',
        desc: 'Scorpio is a mystery living in intense emotional depths. They do not understand half-measures; for a Scorpio, relationships, ambitions, and feelings must be pursued with absolute totality or left behind entirely.<br><br>Their energy is closely tied to <strong>Death</strong>—not a terrifying end, but radical transformation, shedding obsolete pasts, and rising like a phoenix from the ashes of adversity. Scorpio is the ultimate symbol of spiritual rebirth.',
        svg: '<path d="M5,14 L7,6 L11,14 L14,7 C14,7 16,14 18,13 C20,12 20,8 20,8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20,8 L22,10 M20,8 L18,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'sagittarius', 
        name: 'Sagittarius', 
        dateRange: 'Nov 22 – Dec 21', 
        element: 'Fire Element',
        tarotMatch: 'Temperance',
        desc: 'Sagittarius is the free archer viewing the vast horizon as home. Their adventurous spirit hungers for new experiences, life philosophies, and absolute freedom to fly wherever the wind takes them.<br><br>Their character links directly to <strong>Temperance</strong>—symbolizing the synthesis of life experiences into wisdom, spiritual alignment, and maintaining steady optimism. Sagittarius reminds us that life is a sacred journey meant to be savored every step of the way.',
        svg: '<path d="M6,18 L18,6 M12,6 L18,6 L18,12 M4,14 L10,20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'capricorn', 
        name: 'Capricorn', 
        dateRange: 'Dec 22 – Jan 19', 
        element: 'Earth Element',
        tarotMatch: 'The Devil',
        desc: 'Capricorn is the patient mountain climber, disciplined and unfazed by how steep the peak ahead may be. They possess incredible mental resilience, a strong work ethic, and mature long-term vision.<br><br>In spiritual dimensions, they reflect lessons from <strong>The Devil</strong>—recognizing worldly attachments, mastering personal ambitions, and freeing one’s deepest potential from the fear of failure. Capricorn proves true success is built through daily consistency.',
        svg: '<path d="M5,7 L8,17 L12,9 C12,9 18,6 18,11 C18,16 14,20 9,19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'aquarius', 
        name: 'Aquarius', 
        dateRange: 'Jan 20 – Feb 18', 
        element: 'Air Element',
        tarotMatch: 'The Star',
        desc: 'Aquarius is the future dreamer standing outside conventional boxes. Their minds wander far ahead of their time, bringing innovation, strong idealism, and profound care for collective human well-being.<br><br>Their energy shines brightly through <strong>The Star</strong>—bringing pure inspiration, hope after dark times, and spiritual conviction that the universe guides their steps. Aquarius is a spark of renewal for the world.',
        svg: '<path d="M3,9 L7,5 L11,9 L15,5 L19,9 M3,15 L7,11 L11,15 L15,11 L19,15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'pisces', 
        name: 'Pisces', 
        dateRange: 'Feb 19 – Mar 20', 
        element: 'Water Element',
        tarotMatch: 'The Moon',
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

// --- COMPLETE 78 TRADITIONAL TAROT DECK (FULL ENGLISH) ---
const TAROT_DECK = [
    // Major Arcana (0 - 21)
    {
        name: 'The Fool', arcana: 'Major Arcana', number: 0, yesNo: 'Yes', astrology: 'Uranus',
        upright: 'New beginnings, innocence, spontaneity, a leap of faith into the unknown, and taking a bold first step on a grand adventure.',
        reversed: 'Recklessness, risk-taking without foresight, hesitation, folly, or holding back out of unwarranted fear.',
        love: 'A fresh, exciting romance filled with spontaneity. For singles, expect unexpected new romantic potentials.'
    },
    {
        name: 'The Magician', arcana: 'Major Arcana', number: 1, yesNo: 'Yes', astrology: 'Mercury',
        upright: 'Manifestation, willpower, skill, razor-sharp focus, and the ability to turn resources into reality.',
        reversed: 'Manipulation, trickery, squandered potential, lack of focus, or hidden ill intentions.',
        love: 'Magnetic communication in relationships. Time to take concrete actions to draw your crush closer.'
    },
    {
        name: 'The High Priestess', arcana: 'Major Arcana', number: 2, yesNo: 'Yes (Intuitive)', astrology: 'Moon',
        upright: 'Deep intuition, mystery, the subconscious mind, hidden wisdom, and honoring your inner voice.',
        reversed: 'Secrets exposed, ignoring gut feelings, gossip, inner anxiety, or emotional detachment.',
        love: 'A potent, mysterious spiritual bond. A relationship rooted in silent mutual understanding.'
    },
    {
        name: 'The Empress', arcana: 'Major Arcana', number: 3, yesNo: 'Yes', astrology: 'Venus',
        upright: 'Abundance, fertility, aesthetic beauty, nurturing care, boundless creativity, and life comfort.',
        reversed: 'Codependency, creative blocks, neglecting self-care, or over-protective tendencies.',
        love: 'An exceptionally harmonious, caring, and warm relationship leaning toward long-term commitment.'
    },
    {
        name: 'The Emperor', arcana: 'Major Arcana', number: 4, yesNo: 'Yes', astrology: 'Aries',
        upright: 'Authority, structure, firm leadership, stability, self-control, and building solid foundations.',
        reversed: 'Abuse of power, tyranny, rigid thinking, stubbornness, or lack of discipline.',
        love: 'A dependable, protective partner. Avoid letting controlling or overly dominant behaviors seep in.'
    },
    {
        name: 'The Hierophant', arcana: 'Major Arcana', number: 5, yesNo: 'Yes', astrology: 'Taurus',
        upright: 'Tradition, spiritual guidance, established value systems, formal learning, and adherence to rules.',
        reversed: 'Rebellion against traditions, rigid dogmatism, breaking moral codes, or taking shortcuts.',
        love: 'A conventional relationship approved by social circles. Strong commitments like engagement or marriage.'
    },
    {
        name: 'The Lovers', arcana: 'Major Arcana', number: 6, yesNo: 'Yes', astrology: 'Gemini',
        upright: 'Crucial life choices, aligned values, true love, deep soul connection, and harmonious commitment.',
        reversed: 'Misaligned values, relationship friction, poor major decisions, or internal conflict.',
        love: 'The quintessential card of true love and emotional purity. A major choice regarding romantic futures.'
    },
    {
        name: 'The Chariot', arcana: 'Major Arcana', number: 7, yesNo: 'Yes', astrology: 'Cancer',
        upright: 'Victory through discipline, iron will, absolute steering of life direction, and overcoming hurdles.',
        reversed: 'Loss of control, excessive aggression, chaotic direction, or surrender halfway.',
        love: 'Battling through relationship obstacles together. Uniting two differing egos for mutual goals.'
    },
    {
        name: 'Strength', arcana: 'Major Arcana', number: 8, yesNo: 'Yes', astrology: 'Leo',
        upright: 'Inner strength, gentle courage, immense patience, compassion, and mastering negative emotions.',
        reversed: 'Self-doubt, mental weakness, emotional volatility, or feeling helpless against trials.',
        love: 'Patience and gentleness are key to melting your partner’s heart. Supporting each other through hard times.'
    },
    {
        name: 'The Hermit', arcana: 'Major Arcana', number: 9, yesNo: 'No', astrology: 'Virgo',
        upright: 'Soul-searching, deep introspection, mindful retreat, inner wisdom, and spiritual enlightenment.',
        reversed: 'Acute loneliness, social isolation, rejecting wise counsel, or getting lost in rumination.',
        love: 'Time to pause and evaluate yourself before entering deeper commitments. Singles should relish solitude.'
    },
    {
        name: 'Wheel of Fortune', arcana: 'Major Arcana', number: 10, yesNo: 'Yes', astrology: 'Jupiter',
        upright: 'Good luck, turning life cycles, favorable destiny, golden opportunities, and positive shifts.',
        reversed: 'Temporary bad luck, external hurdles, resisting change, or looping in past cycles.',
        love: 'Fateful shifts in romance. An unexpected meeting with someone changing your life trajectory.'
    },
    {
        name: 'Justice', arcana: 'Major Arcana', number: 11, yesNo: 'Neutral / Yes', astrology: 'Libra',
        upright: 'Fairness, objective truth, cause and effect, balanced decisions, and moral integrity.',
        reversed: 'Injustice, dishonesty, evading accountability for mistakes, or skewed perspectives.',
        love: 'Equilibrium in giving and receiving. A fair, honest bond free from exploitation.'
    },
    {
        name: 'The Hanged Man', arcana: 'Major Arcana', number: 12, yesNo: 'No', astrology: 'Neptune',
        upright: 'New perspectives via surrender, temporary sacrifice, letting go of control, and seeing things anew.',
        reversed: 'Futile sacrifice, feeling stuck in limbo, refusing to see truth, or playing the victim.',
        love: 'Extra patience and shifting viewpoints are required to understand your partner’s mindset.'
    },
    {
        name: 'Death', arcana: 'Major Arcana', number: 13, yesNo: 'No', astrology: 'Scorpio',
        upright: 'Total transformation, closing a life chapter, releasing the past, and a rebirth into better beginnings.',
        reversed: 'Fear of change, clinging to worn-out pasts, stagnation, or resisting necessary endings.',
        love: 'The end of a toxic chapter to make space for a far healthier, more meaningful romance.'
    },
    {
        name: 'Temperance', arcana: 'Major Arcana', number: 14, yesNo: 'Yes', astrology: 'Sagittarius',
        upright: 'Balance, moderation, inner harmony, patience, and peaceful synthesis of life elements.',
        reversed: 'Life imbalance, extremes, internal conflicts, or rushing actions recklessly.',
        love: 'A peaceful, understanding relationship marked by graceful mutual compromise.'
    },
    {
        name: 'The Devil', arcana: 'Major Arcana', number: 15, yesNo: 'No', astrology: 'Capricorn',
        upright: 'Materialistic attachments, toxic bonds, addictions, feeling trapped by ego or fears.',
        reversed: 'Breaking toxic chains, newfound freedom, self-awareness, and escaping manipulation.',
        love: 'Unhealthy relationship dynamics, excessive obsession, or possessiveness restricting freedom.'
    },
    {
        name: 'The Tower', arcana: 'Major Arcana', number: 16, yesNo: 'No', astrology: 'Mars',
        upright: 'Sudden shocking upheaval, collapse of false illusions or foundations, lightning-fast awakening.',
        reversed: 'Narrowly avoiding disaster, denial of harsh truths, or delayed trauma.',
        love: 'Major romantic earthquakes. Secrets exposed or fierce arguments changing everything instantly.'
    },
    {
        name: 'The Star', arcana: 'Major Arcana', number: 17, yesNo: 'Yes', astrology: 'Aquarius',
        upright: 'Renewed hope, pure inspiration, inner peace, emotional healing, and faith in the future.',
        reversed: 'Loss of hope, despair, self-doubt, or feeling disconnected from dreams.',
        love: 'An emotional healing phase in romance. High optimism and inner serenity with your partner.'
    },
    {
        name: 'The Moon', arcana: 'Major Arcana', number: 18, yesNo: 'No', astrology: 'Pisces',
        upright: 'Illusions, subconscious anxieties, intuition battling fear, confusion, and hidden matters.',
        reversed: 'Truths emerging from deception, fading anxieties, and clearing confusion.',
        love: 'Doubts, misunderstandings, or unexpressed secrets lurking beneath the surface.'
    },
    {
        name: 'The Sun', arcana: 'Major Arcana', number: 19, yesNo: 'Yes', astrology: 'Sun',
        upright: 'Pure happiness, brilliant success, high vitality, absolute clarity, and joyful living.',
        reversed: 'Delayed happiness, dimming self-confidence, or overly idealized expectations.',
        love: 'Warm, bright, sincere love bringing immense joy to everyday life.'
    },
    {
        name: 'Judgement', arcana: 'Major Arcana', number: 20, yesNo: 'Yes', astrology: 'Pluto',
        upright: 'Life calling, honest self-evaluation, forgiveness, spiritual awakening, and final verdicts.',
        reversed: 'Acute self-doubt, avoiding self-reflection, excessive guilt, or harsh judgment of others.',
        love: 'Re-evaluating past choices in romance. Time for forgiveness and starting clean.'
    },
    {
        name: 'The World', arcana: 'Major Arcana', number: 21, yesNo: 'Yes', astrology: 'Saturn',
        upright: 'Completion of a life cycle, ultimate achievement, perfect fulfillment, and wholeness.',
        reversed: 'Close to the finish line but delayed, lack of fulfillment, or loose ends remaining.',
        love: 'A relationship reaching peak happiness and complete emotional wholeness.'
    },

    // Suit of Wands
    {
        name: 'Ace of Wands', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Fire Signs (Aries, Leo, Sag)',
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
        upupright: 'Fierce competition, clashing egos, differing opinions, and minor group friction.',
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
        name: 'Page of Wands', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Fire (Wands)',
        upright: 'Youthful explorer, exploration enthusiasm, fresh creative ideas, and good news.',
        reversed: 'Aimlessness, half-baked ideas, childishness, or quick boredom.',
        love: 'Playful flirting, renewed spark in courting, or cheerful news from your crush.'
    },
    {
        name: 'Knight of Wands', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Fire (Wands)',
        upright: 'Swift action, fierce passion, risk-taking courage, adventure, and high charisma.',
        reversed: 'Impulsivity, recklessness, hot temper, emotional volatility, and unstable commitments.',
        love: 'A passionate romance driven by intense physical attraction, sometimes lacking long-term planning.'
    },
    {
        name: 'Queen of Wands', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Fire (Wands)',
        upright: 'Independence, high self-confidence, magnetism, warmth, friendliness, and zest for life.',
        reversed: 'Demanding traits, blind jealousy, selfishness, or fading charm from stress.',
        love: 'A warm, confident, loyal partner who effortlessly commands positive attention.'
    },
    {
        name: 'King of Wands', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Fire in Fire (Wands)',
        upright: 'Visionary leadership, successful entrepreneur, master inspirer, bold decision-maker.',
        reversed: 'Dictatorial, authoritarian, impulsive in personal/business decisions, arrogant.',
        love: 'A mature, deeply protective partner with very strong standards and opinions.'
    },

    // Suit of Cups
    {
        name: 'Ace of Cups', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Water Signs (Cancer, Scorpio, Pisces)',
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
        upupright: 'Deep remorse, grief over loss, dwelling on negative outcomes.',
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
        name: 'Page of Cups', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Water (Cups)',
        upright: 'Sweet love messages, subtle intuition, artistic sensitivity, and sincere emotional offers.',
        reversed: 'Emotional anxiety, childishness, over-sensitivity, or unstable moods.',
        love: 'Sweet, romantic declarations filled with sincerity from someone caring.'
    },
    {
        name: 'Knight of Cups', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Water (Cups)',
        upright: 'The romantic suitor, proposals from the heart, grace, and gentle diplomacy.',
        reversed: 'Moody, empty sweet promises, unrealistic romance, emotional deceit.',
        love: 'Moments of extraordinary romance. A deeply attentive partner skilled in love language.'
    },
    {
        name: 'Queen of Cups', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Water (Cups)',
        upright: 'Deep empathy, gentle heart, strong intuition, emotional healer, and loyal listener.',
        reversed: 'Emotional dependency, over-sensitivity, being taken advantage of, or inner drama.',
        love: 'A deeply compassionate, intuitive partner who listens to your heart sincerely.'
    },
    {
        name: 'King of Cups', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Air in Water (Cups)',
        upright: 'High emotional intelligence, inner calm amid storms, wisdom, and fairness.',
        reversed: 'Emotional manipulation, inner coldness, suppressed feelings, or hidden rage.',
        love: 'A mature, emotionally balanced partner capable of calming your storms with wisdom.'
    },

    // Suit of Swords
    {
        name: 'Ace of Swords', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Air Signs (Gemini, Libra, Aquarius)',
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
        upupright: 'Hidden strategies, cunning, stealing opportunities, deceit, or exposed secrets.',
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
        name: 'Ace of Pentacles', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Earth Signs (Taurus, Virgo, Cap)',
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
        upupright: 'Financial hardship, poverty mindset, isolation, cold difficult times.',
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
        upupright: 'Deeply dependable, consistent, true hard worker, patient, slow and steady.',
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

// --- STATE ---
let currentSpread = null;
let deckCount = 3;
let activeDeck = [];
let drawnCards = [];

// --- FREE SPREAD CONFIG OPTIONS ---
let optMajorOnly = false;
let optAutoOpen = false;
let optShowDesc = false;

function toggleOption(opt, val) {
    if (opt === 'majorOnly') optMajorOnly = val;
    if (opt === 'autoOpen') optAutoOpen = val;
    if (opt === 'showDesc') optShowDesc = val;
}

// --- CORE FUNCTIONS ---
function toggleMenu() {
    const menu = document.getElementById('drawer-menu');
    const overlay = document.getElementById('drawer-overlay');
    const isOpen = !menu.classList.contains('-translate-x-full');
    if (isOpen) {
        menu.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    } else {
        menu.classList.remove('-translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
    }
}

function navigate(viewId, anchorOrTitle = null) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById('view-' + viewId).classList.add('active');
    
    if (viewId !== 'home' || !anchorOrTitle) {
        window.scrollTo(0, 0);
    }
    
    if (!document.getElementById('drawer-menu').classList.contains('-translate-x-full')) {
        toggleMenu();
    }

    if (viewId === 'home' && anchorOrTitle) {
        setTimeout(() => {
            const el = document.getElementById(anchorOrTitle);
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }, 50);
    } else if (viewId === 'draw') {
        setDrawPhase('spread');
    } else if (viewId === 'generic') {
        renderGenericPage(anchorOrTitle);
    } else if (viewId === 'all-cards') {
        filterLibrary('All');
    }
}

function getTodayDateString() {
    const now = new Date();
    return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
}

function renderDailyCardHTML(card, isReversed) {
    const cardEl = document.getElementById('inline-daily-card');
    const descText = isReversed ? card.reversed : card.upright;
    
    cardEl.innerHTML = `
        <div class="w-[120px] mb-6">
            <div class="w-full aspect-[2/3.3] bg-white border border-pink-100 rounded-xl flex flex-col items-center justify-center p-2 shadow-md">
                <div class="text-[9px] text-pink-400 font-cute font-bold mb-1 uppercase">${card.arcana}</div>
                <div class="text-sm font-cute font-bold text-gray-800 leading-tight">${card.name}</div>
                <div class="mt-2 text-pink-200 text-xs font-cute">${card.number}</div>
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
        dailyData = { date: todayStr, card: randomCard, isReversed: Math.random() > 0.8 };
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

// --- UI RENDERING ---
function initHome() {
    checkDailyCard(); 
    
    const spreadsGrid = document.getElementById('home-spreads-grid');
    const drawSpreadsGrid = document.getElementById('draw-spreads-grid');
    let spreadHtml = '';
    SPREADS.forEach((s, i) => {
        const card = `
            <div onclick="selectSpread(${i})" class="p-4 rounded-xl border border-pink-50 hover:border-pink-200 bg-white hover:bg-pink-50/30 cursor-pointer transition-all h-full transform hover:-translate-y-1">
                <h3 class="font-cute font-bold text-sm text-purple-800 mb-1">${s.name}</h3>
                <p class="font-cute text-[11px] text-pink-400/90 leading-snug">${s.desc}</p>
            </div>`;
        spreadHtml += card;
    });
    spreadsGrid.innerHTML = spreadHtml;
    drawSpreadsGrid.innerHTML = spreadHtml;

    const zodiacGrid = document.getElementById('home-zodiac-grid');
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

// --- DRAW SYSTEM FLOW ---
function setDrawPhase(phase) {
    ['phase-spread', 'phase-config', 'phase-draw', 'phase-result'].forEach(p => {
        document.getElementById(p).classList.add('hidden');
        document.getElementById(p).classList.remove('flex');
    });
    
    const target = document.getElementById('phase-' + phase);
    target.classList.remove('hidden');
    if(phase === 'draw') target.classList.add('flex');
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
            document.getElementById('btn-reveal').classList.remove('hidden');
        }
    }
}

function updateDrawUI() {
    document.getElementById('draw-counter').innerText = `${drawnCards.length} / ${deckCount} selected`;
    const slots = document.getElementById('draw-slots');
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
    let html = '';
    drawnCards.forEach((card, idx) => {
        const orientationText = card.isReversed ? 'Reversed' : 'Upright';
        const descText = card.isReversed ? card.reversed : card.upright;

        html += `
        <div class="flex flex-col items-center w-full" style="animation-delay: ${idx * 100}ms">
            <div class="w-full max-w-[120px] aspect-[2/3.3] bg-white border border-pink-100 rounded-xl flex flex-col items-center justify-center p-2 text-center shadow-md">
                 <div class="text-[9px] text-pink-400 font-cute font-bold mb-1 uppercase tracking-widest">${card.arcana}</div>
                 <div class="text-xs sm:text-sm font-cute font-bold text-gray-800 leading-tight">${card.name}</div>
                 <div class="mt-2 text-pink-200 text-[10px] font-cute">${card.number}</div>
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
    grid.innerHTML = html;
}

// --- TAROT LIBRARY SYSTEM ---
function renderLibrary(filter = 'All') {
    const grid = document.getElementById('library-grid');
    let html = '';
    TAROT_DECK.forEach((card, index) => {
        const isMajor = card.arcana === 'Major Arcana';
        const suit = isMajor ? null : card.name.split(' of ')[1];
        
        let isMatch = (filter === 'All') || 
                      (filter === 'Major Arcana' && isMajor) || 
                      (filter === suit);
        
        if (isMatch) {
            html += `
                <div onclick="showCardDetail(${index})" class="cursor-pointer transform transition-transform hover:-translate-y-2">
                    <div class="w-full aspect-[2/3.3] bg-white border border-pink-100 rounded-xl flex flex-col items-center justify-center p-2 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div class="text-[9px] text-pink-400 font-cute font-bold mb-1 uppercase tracking-widest">${isMajor ? 'Major' : suit}</div>
                        <div class="text-xs sm:text-sm font-cute font-bold text-gray-800 leading-tight">${card.name}</div>
                        <div class="mt-2 text-pink-200 text-[10px] font-cute">${card.number}</div>
                    </div>
                </div>
            `;
        }
    });
    grid.innerHTML = html;
}

function filterLibrary(filter) {
    const buttons = document.getElementById('card-filters').children;
    for (let btn of buttons) {
        if (btn.innerText.includes(filter) || (filter === 'Major Arcana' && btn.innerText === 'Major')) {
            btn.className = "px-4 py-2 rounded-full border border-pink-200 text-sm font-cute font-bold transition-colors bg-pink-300 text-white shadow-sm";
        } else {
            btn.className = "px-4 py-2 rounded-full border border-pink-200 text-sm font-cute font-bold transition-colors bg-white hover:bg-pink-50 text-gray-600";
        }
    }
    renderLibrary(filter);
}

function showCardDetail(index) {
    const card = TAROT_DECK[index];
    const isMajor = card.arcana === 'Major Arcana';
    
    let yesNoClass = card.yesNo === 'Yes' ? 'text-green-600' : (card.yesNo === 'No' ? 'text-red-500' : 'text-orange-400');

    document.getElementById('card-detail-content').innerHTML = `
        <div class="flex flex-col md:flex-row gap-8 lg:gap-12">
            <div class="w-full md:w-1/3 flex justify-center">
                <div class="w-64 md:w-full aspect-[2/3.3] bg-gradient-to-b from-pink-50 to-white border-2 border-pink-100 rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl relative overflow-hidden group">
                    <div class="absolute inset-2 border border-pink-200/60 rounded-xl"></div>
                    <h2 class="font-cute font-bold text-3xl text-center text-purple-800 z-10 leading-tight">${card.name}</h2>
                    <p class="text-xs text-pink-400 font-cute font-bold uppercase tracking-widest mt-4 z-10">${card.arcana}</p>
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
    
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById('view-card-detail').classList.add('active');
    window.scrollTo(0, 0);
}

function showZodiac(id) {
    const z = ZODIAC_DATA.find(item => item.id === id);
    if (!z) return;
    
    document.getElementById('zodiac-detail-content').innerHTML = `
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
    
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById('view-zodiac').classList.add('active');
    window.scrollTo(0, 0);
}

// --- GENERIC PAGES ---
function renderGenericPage(title) {
    document.getElementById('generic-title').innerText = title;
    const content = document.getElementById('generic-content');
    
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

                <div class="space-y-3">
                    <h3 class="font-cute font-bold text-xl text-purple-800 flex items-center">
                        <span class="w-2 h-2 rounded-full bg-purple-400 mr-3"></span> Core Structure: Major and Minor Arcana
                    </h3>
                    <p class="text-gray-600 font-cute text-sm leading-relaxed">
                        A standard tarot deck consists of 78 cards harmoniously divided into two major groups with distinct narrative functions:
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div class="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm">
                            <h4 class="font-cute font-bold text-base text-purple-800 mb-2">Major Arcana (22 Cards)</h4>
                            <p class="text-xs text-gray-600 leading-relaxed font-cute">
                                Represents "The Fool's Journey"—an allegory of the human life cycle from innocence to spiritual enlightenment. These cards highlight major life events, profound lessons, and overarching themes of destiny.
                            </p>
                        </div>
                        <div class="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm">
                            <h4 class="font-cute font-bold text-base text-purple-800 mb-2">Minor Arcana (56 Cards)</h4>
                            <p class="text-xs text-gray-600 leading-relaxed font-cute">
                                Represents everyday life dynamics, practical challenges, and transient emotions. Divided into 4 primary suits/elements: <strong>Wands</strong> (Fire/Passion), <strong>Cups</strong> (Water/Emotion), <strong>Swords</strong> (Air/Mind), and <strong>Pentacles</strong> (Earth/Matter).
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-3">
                    <h3 class="font-cute font-bold text-xl text-purple-800 flex items-center">
                        <span class="w-2 h-2 rounded-full bg-pink-300 mr-3"></span> The Role and Esoteric Function of Tarot
                    </h3>
                    <p class="text-gray-600 font-cute text-sm leading-relaxed">
                        Many modern practitioners, including renowned psychiatrist Carl Jung, view tarot through the lens of <em>synchronicity</em> and universal archetypes. Tarot functions as a powerful meditative tool for:
                    </p>
                    <ul class="space-y-2 text-gray-600 font-cute text-sm pl-4 border-l-2 border-pink-200">
                        <li><strong>Self-Reflection:</strong> Opening fresh perspectives on problems objectively without personal bias.</li>
                        <li><strong>Decision Making:</strong> Weighing possible actions based on ongoing patterns of energy.</li>
                        <li><strong>Mental Empowerment:</strong> Providing a safe pause for individuals to tune into their inner voice and intuition.</li>
                    </ul>
                </div>
            </div>
        `;
    } else if (title === 'Personal Reading') {
        content.innerHTML = `
            <div class="text-center mb-8"><div class="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-4 border-2 border-pink-200"></div><h2 class="font-cute font-bold text-2xl text-purple-800">Hi, I'm Mai</h2><p class="text-sm text-pink-500 font-['Caveat'] mt-1">Creator of CuTarot</p></div>
            <p class="text-center font-cute">CuTarot was created to bring a soft, elegant, and safe space for reflection.</p>
        `;
    } else if (title === 'Buy Deck') {
        content.innerHTML = `
            <div class="flex flex-col md:flex-row gap-8 items-center"><div class="flex-1 w-full aspect-[3/4] bg-pink-50 rounded-2xl border border-pink-100 flex items-center justify-center"><div class="text-pink-300 font-cute font-bold text-sm">[ Deck Mockup ]</div></div>
            <div class="flex-1"><h2 class="font-cute font-bold text-3xl mb-2 text-purple-800">CuTarot First Edition</h2><p class="text-pink-500 font-cute font-bold mb-6">$45.00</p><p class="text-sm mb-8 font-cute">A beautifully crafted 78-card deck featuring elegant, feminine aesthetics.</p><button class="w-full bg-purple-700 text-white py-4 rounded-xl font-cute font-bold">Purchase via WhatsApp</button></div></div>
        `;
    } else {
        content.innerHTML = `<p>CuTarot by Mai Collection is provided for personal reflection and entertainment purposes.</p>`;
    }
}

// Init App
window.onload = initHome;
