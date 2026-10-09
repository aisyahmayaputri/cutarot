// Inject Dynamic Styles for Smooth Page Transitions & Layout Fixes
const dynamicStyle = document.createElement('style');
dynamicStyle.innerHTML = `
    .view-section {
        display: none;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }
    .view-section.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
    }
    .scrollbar-none::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-none {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    #main-footer {
        margin-top: auto;
    }
`;
document.head.appendChild(dynamicStyle);

// ==========================================
// --- NAVIGATION HISTORY & SCROLL TRACKING ---
// ==========================================
let navHistory = [{ viewId: 'home', extra: null, scrollY: 0 }];
let lastHomeScrollPosition = 0;
let lastClickedHomeSectionId = null;

function trackHomeScroll() {
    if (document.getElementById('view-home')?.classList.contains('active')) {
        lastHomeScrollPosition = window.scrollY;
    }
}
window.addEventListener('scroll', trackHomeScroll);

function navigate(viewId, anchorOrTitle = null, pushToHistory = true) {
    if (document.getElementById('view-home')?.classList.contains('active')) {
        lastHomeScrollPosition = window.scrollY;
    }

    if (viewId === 'home' && anchorOrTitle) {
        lastClickedHomeSectionId = anchorOrTitle;
    }

    if (pushToHistory) {
        navHistory.push({ viewId, extra: anchorOrTitle, scrollY: window.scrollY });
    }

    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));

    const targetView = document.getElementById('view-' + viewId);
    if (targetView) {
        targetView.classList.add('active');
    }

    const drawer = document.getElementById('drawer-menu');
    if (drawer && !drawer.classList.contains('-translate-x-full')) {
        toggleMenu();
    }

    if (viewId === 'home') {
        if (anchorOrTitle) {
            setTimeout(() => {
                const el = document.getElementById(anchorOrTitle);
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }, 100);
        } else if (lastHomeScrollPosition > 0) {
            window.scrollTo({ top: lastHomeScrollPosition, behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
    } else {
        window.scrollTo(0, 0);
    }

    if (viewId === 'draw') {
        setDrawPhase('spread');
    } else if (viewId === 'generic') {
        renderGenericPage(anchorOrTitle);
    } else if (viewId === 'all-cards') {
        ensureLibrarySearch();
        filterLibrary('All');
    } else if (viewId === 'birth-calculator') {
        initBirthCalculatorPage();
    } else if (viewId === 'oracle-library') {
        renderOracleLibrary('All');
    } else if (viewId === 'oracle-draw') {
        renderOracleConfigNumbers();
        document.getElementById('oracle-step-config')?.classList.remove('hidden');
        document.getElementById('oracle-step-draw')?.classList.add('hidden');
        document.getElementById('oracle-step-result')?.classList.add('hidden');
    }

    ensureFooterPosition();
}

function goBack() {
    if (navHistory.length > 1) {
        navHistory.pop(); // Remove current view
        const prev = navHistory[navHistory.length - 1];
        if (prev) {
            navigate(prev.viewId, prev.extra, false);
            return;
        }
    }
    goBackToHome();
}

function goBackToHome() {
    navHistory = [{ viewId: 'home', extra: null, scrollY: lastHomeScrollPosition }];
    navigate('home', lastClickedHomeSectionId, false);
}

function renderNavHeaderHTML(title = '') {
    return `
        <div class="flex items-center justify-between w-full max-w-xl mx-auto mb-6 px-4 font-cute">
            <button onclick="goBack()" class="flex items-center text-xs font-bold text-pink-500 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 px-3.5 py-2 rounded-xl transition-all shadow-sm">
                &larr; Back
            </button>
            ${title ? `<span class="text-sm font-bold text-purple-800">${title}</span>` : ''}
            <button onclick="goBackToHome()" class="flex items-center text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-3.5 py-2 rounded-xl transition-all shadow-sm">
                Home &rarr;
            </button>
        </div>
    `;
}

// ==========================================
// --- DATA ZODIAC ---
// ==========================================
const ZODIAC_DATA = [
    { 
        id: 'aries', name: 'Aries', dateRange: 'March 21 – April 19', element: 'Fire Element', tarotMatch: 'The Emperor',
        desc: 'Aries is the first spark in the zodiac wheel—a symbol of pure energy that eagerly welcomes new beginnings. Known for a boldness that often precedes fear, this sign lives in fast motion, high initiative, and the belief that the path of life must be forged rather than merely followed.<br><br>In tarot readings, Aries deeply resonates with <strong>The Emperor</strong>, reflecting authority, assertiveness, and a strong protective spirit.',
        svg: '<path d="M4,14 C4,8 12,4 12,12 C12,4 20,8 20,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'taurus', name: 'Taurus', dateRange: 'April 20 – May 20', element: 'Earth Element', tarotMatch: 'The Hierophant',
        desc: 'Taurus is the physical embodiment of grounded, steady earth. They possess a deep appreciation for aesthetic beauty, sensory comfort, and well-planned life stability.',
        svg: '<circle cx="12" cy="14" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7,9 C7,4 17,4 17,9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'gemini', name: 'Gemini', dateRange: 'May 21 – June 20', element: 'Air Element', tarotMatch: 'The Lovers',
        desc: 'Gemini is the nimble spring breeze, carrying boundless curiosity and captivating intellect. They are explorers of ideas, capable of viewing problems from multiple perspectives.',
        svg: '<path d="M7,5 L17,5 M7,19 L17,19 M9,5 L9,19 M15,5 L15,19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'cancer', name: 'Cancer', dateRange: 'June 21 – July 22', element: 'Water Element', tarotMatch: 'The Chariot',
        desc: 'Cancer is an ocean of emotion holding extraordinary depths behind protective shells. Ruled by lunar energies, they possess razor-sharp intuition.',
        svg: '<circle cx="8" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11,10 C16,7 20,10 18,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="14" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13,14 C8,17 4,14 6,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'leo', name: 'Leo', dateRange: 'July 23 – August 22', element: 'Fire Element', tarotMatch: 'Strength',
        desc: 'Leo radiates solar warmth bringing life to everything around them. Boundless creativity, a generous spirit, and natural charisma ensure a Leo always stands out effortlessly.',
        svg: '<circle cx="7" cy="17" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10,17 C13,17 18,14 15,9 C12,4 6,8 9,13 C12,18 19,16 19,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'virgo', name: 'Virgo', dateRange: 'Aug 23 – Sep 22', element: 'Earth Element', tarotMatch: 'The Hermit',
        desc: 'Virgo is the architect of precision, finding beauty in minute details that others overlook. They are analytical, deeply dedicated, and driven by a sincere impulse to nurture.',
        svg: '<path d="M5,17 L7,7 L11,17 L14,9 C14,9 15,19 18,17 C21,15 19,10 19,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'libra', name: 'Libra', dateRange: 'Sep 23 – Oct 22', element: 'Air Element', tarotMatch: 'Justice',
        desc: 'Libra is a graceful dancer along the line of equilibrium. They possess refined artistic taste, an aversion to unnecessary conflict, and a gift for weaving peace.',
        svg: '<path d="M4,15 L20,15 M4,18 L20,18 M12,15 C12,10 8,11 6,15 M12,15 C12,10 16,11 18,15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'scorpio', name: 'Scorpio', dateRange: 'Oct 23 – Nov 21', element: 'Water Element', tarotMatch: 'Death',
        desc: 'Scorpio is a mystery living in intense emotional depths. They do not understand half-measures; relationships and ambitions must be pursued with absolute totality.',
        svg: '<path d="M5,14 L7,6 L11,14 L14,7 C14,7 16,14 18,13 C20,12 20,8 20,8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20,8 L22,10 M20,8 L18,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' 
    },
    { 
        id: 'sagittarius', name: 'Sagittarius', dateRange: 'Nov 22 – Dec 21', element: 'Fire Element', tarotMatch: 'Temperance',
        desc: 'Sagittarius is the free archer viewing the vast horizon as home. Their adventurous spirit hungers for new experiences and absolute freedom to explore.',
        svg: '<path d="M6,18 L18,6 M12,6 L18,6 L18,12 M4,14 L10,20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'capricorn', name: 'Capricorn', dateRange: 'Dec 22 – Jan 19', element: 'Earth Element', tarotMatch: 'The Devil',
        desc: 'Capricorn is the patient mountain climber, disciplined and unfazed by how steep the peak ahead may be. They possess incredible mental resilience.',
        svg: '<path d="M5,7 L8,17 L12,9 C12,9 18,6 18,11 C18,16 14,20 9,19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'aquarius', name: 'Aquarius', dateRange: 'Jan 20 – Feb 18', element: 'Air Element', tarotMatch: 'The Star',
        desc: 'Aquarius is the future dreamer standing outside conventional boxes. Their minds wander far ahead, bringing innovation and profound care for humanity.',
        svg: '<path d="M3,9 L7,5 L11,9 L15,5 L19,9 M3,15 L7,11 L11,15 L15,11 L19,15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' 
    },
    { 
        id: 'pisces', name: 'Pisces', dateRange: 'Feb 19 – Mar 20', element: 'Water Element', tarotMatch: 'The Moon',
        desc: 'Pisces is the final poet of the zodiac, living between tangible reality and magical dreamscapes. They possess limitless empathy and high artistic sensitivity.',
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
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
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

    // Minor Arcana - Wands, Cups, Swords, Pentacles
    { name: 'Ace of Wands', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Fire Signs', upright: 'Inspirational spark, creative potential.', reversed: 'Losing momentum.', love: 'Explosive romantic passion.' },
    { name: 'Two of Wands', arcana: 'Minor Arcana', number: 2, yesNo: 'Yes', astrology: 'Mars in Aries', upright: 'Future planning, major choices.', reversed: 'Fear of stepping out of comfort zones.', love: 'Planning a shared future.' },
    { name: 'Three of Wands', arcana: 'Minor Arcana', number: 3, yesNo: 'Yes', astrology: 'Sun in Aries', upright: 'Expansion, broadening horizons.', reversed: 'Disappointment over delayed results.', love: 'Optimistic about long-distance.' },
    { name: 'Four of Wands', arcana: 'Minor Arcana', number: 4, yesNo: 'Yes', astrology: 'Venus in Aries', upright: 'Joyful celebrations, household harmony.', reversed: 'Domestic friction.', love: 'Weddings and engagements.' },
    { name: 'Five of Wands', arcana: 'Minor Arcana', number: 5, yesNo: 'No', astrology: 'Saturn in Leo', upright: 'Fierce competition, clashing egos.', reversed: 'Avoiding conflict.', love: 'Minor arguments fueled by egos.' },
    { name: 'Six of Wands', arcana: 'Minor Arcana', number: 6, yesNo: 'Yes', astrology: 'Jupiter in Leo', upright: 'Triumphant victory, public recognition.', reversed: 'Loss of face, arrogance.', love: 'Proud of your partner.' },
    { name: 'Seven of Wands', arcana: 'Minor Arcana', number: 7, yesNo: 'Yes', astrology: 'Mars in Leo', upright: 'Defending principles, holding ground.', reversed: 'Yielding under pressure.', love: 'Guarding relationship from interference.' },
    { name: 'Eight of Wands', arcana: 'Minor Arcana', number: 8, yesNo: 'Yes', astrology: 'Mercury in Sagittarius', upright: 'Lightning-fast momentum, sudden news.', reversed: 'Miscommunications, delays.', love: 'Unexpected loving messages.' },
    { name: 'Nine of Wands', arcana: 'Minor Arcana', number: 9, yesNo: 'Neutral', astrology: 'Moon in Sagittarius', upright: 'Resilience at exhaustion edge, vigilance.', reversed: 'Extreme exhaustion, paranoia.', love: 'Feeling emotionally weary.' },
    { name: 'Ten of Wands', arcana: 'Minor Arcana', number: 10, yesNo: 'No', astrology: 'Saturn in Sagittarius', upright: 'Heavy burdens, excessive responsibilities.', reversed: 'Delegating tasks, dropping loads.', love: 'Carrying weight alone.' },
    { name: 'Page of Wands', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Fire', upright: 'Exploration enthusiasm, fresh ideas.', reversed: 'Aimlessness, childishness.', love: 'Playful flirting.' },
    { name: 'Knight of Wands', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Fire', upright: 'Swift action, fierce passion.', reversed: 'Impulsivity, recklessness.', love: 'Passionate romance.' },
    { name: 'Queen of Wands', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Fire', upright: 'High self-confidence, magnetism.', reversed: 'Jealousy, selfishness.', love: 'Warm, confident partner.' },
    { name: 'King of Wands', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Fire in Fire', upright: 'Visionary leadership, bold decisions.', reversed: 'Authoritarian, dictatorial.', love: 'Mature, protective partner.' },

    // Suit of Cups
    { name: 'Ace of Cups', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Water Signs', upright: 'Overflowing affection, new beginnings.', reversed: 'Emotional blockages.', love: 'Peak emotional fulfillment.' },
    { name: 'Two of Cups', arcana: 'Minor Arcana', number: 2, yesNo: 'Yes', astrology: 'Venus in Cancer', upright: 'Harmonious soul connection, mutual respect.', reversed: 'Relationship imbalance.', love: 'Deeply romantic mutual bond.' },
    { name: 'Three of Cups', arcana: 'Minor Arcana', number: 3, yesNo: 'Yes', astrology: 'Mercury in Cancer', upright: 'Celebrations with friends, social joy.', reversed: 'Gossip, drama.', love: 'Friend circle support.' },
    { name: 'Four of Cups', arcana: 'Minor Arcana', number: 4, yesNo: 'No', astrology: 'Moon in Cancer', upright: 'Apathy, routine boredom, rumination.', reversed: 'Breaking out of stagnation.', love: 'Jaded with routines.' },
    { name: 'Five of Cups', arcana: 'Minor Arcana', number: 5, yesNo: 'No', astrology: 'Mars in Scorpio', upright: 'Remorse, grief over loss.', reversed: 'Healing past disappointments.', love: 'Disappointed by expectations.' },
    { name: 'Six of Cups', arcana: 'Minor Arcana', number: 6, yesNo: 'Yes', astrology: 'Sun in Scorpio', upright: 'Sweet nostalgia, innocent memories.', reversed: 'Trapped in the past.', love: 'Reconnecting with pure love.' },
    { name: 'Seven of Cups', arcana: 'Minor Arcana', number: 7, yesNo: 'No', astrology: 'Venus in Scorpio', upright: 'Illusory choices, wishful thinking.', reversed: 'Gaining clear perspective.', love: 'Fantasies of a perfect partner.' },
    { name: 'Eight of Cups', arcana: 'Minor Arcana', number: 8, yesNo: 'Neutral', astrology: 'Saturn in Pisces', upright: 'Walking away from unfulfilling situations.', reversed: 'Fear of stepping away.', love: 'Leaving hollow relationships.' },
    { name: 'Nine of Cups', arcana: 'Minor Arcana', number: 9, yesNo: 'Yes', astrology: 'Jupiter in Pisces', upright: 'Emotional satisfaction, wish card.', reversed: 'Arrogance, ingratitude.', love: 'All romantic dreams manifest.' },
    { name: 'Ten of Cups', arcana: 'Minor Arcana', number: 10, yesNo: 'Yes', astrology: 'Mars in Pisces', upright: 'Perfect domestic bliss, lasting peace.', reversed: 'Family conflicts.', love: 'Happiness in long-term commitments.' },
    { name: 'Page of Cups', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Water', upright: 'Sweet love messages, artistic sensitivity.', reversed: 'Emotional anxiety.', love: 'Romantic declarations.' },
    { name: 'Knight of Cups', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Water', upright: 'Romantic suitor, proposals from heart.', reversed: 'Empty sweet promises.', love: 'Extraordinary romance.' },
    { name: 'Queen of Cups', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Water', upright: 'Deep empathy, gentle heart.', reversed: 'Emotional dependency.', love: 'Compassionate, intuitive partner.' },
    { name: 'King of Cups', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Air in Water', upright: 'High emotional intelligence, calm.', reversed: 'Emotional manipulation.', love: 'Mature, emotionally balanced partner.' },

    // Suit of Swords
    { name: 'Ace of Swords', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Air Signs', upright: 'Sharp mental clarity, breakthroughs.', reversed: 'Mental fog, misunderstandings.', love: 'Transparent communication.' },
    { name: 'Two of Swords', arcana: 'Minor Arcana', number: 2, yesNo: 'No', astrology: 'Moon in Libra', upright: 'Stalemate, major dilemmas, silence.', reversed: 'Forced removal of blindfolds.', love: 'Avoiding vital confrontations.' },
    { name: 'Three of Swords', arcana: 'Minor Arcana', number: 3, yesNo: 'No', astrology: 'Saturn in Libra', upright: 'Heartbreak, deep sorrow, betrayal.', reversed: 'Healing wounds, forgiving.', love: 'Heartbreak caused by betrayal.' },
    { name: 'Four of Swords', arcana: 'Minor Arcana', number: 4, yesNo: 'Neutral', astrology: 'Jupiter in Libra', upright: 'Deep rest, mental recovery.', reversed: 'Mental burnout.', love: 'Needing cooling-down time.' },
    { name: 'Five of Swords', arcana: 'Minor Arcana', number: 5, yesNo: 'No', astrology: 'Venus in Aquarius', upright: 'Hollow selfish victories, conflict.', reversed: 'Making peace post-conflict.', love: 'Arguments to win instead of care.' },
    { name: 'Six of Swords', arcana: 'Minor Arcana', number: 6, yesNo: 'Yes', astrology: 'Mercury in Aquarius', upright: 'Transitioning to calmer shores.', reversed: 'Past issues chasing you.', love: 'Moving past crisis points.' },
    { name: 'Seven of Swords', arcana: 'Minor Arcana', number: 7, yesNo: 'No', astrology: 'Moon in Aquarius', upright: 'Hidden strategies, cunning, deceit.', reversed: 'Truths uncovered.', love: 'Dishonesty or sketchy behavior.' },
    { name: 'Eight of Swords', arcana: 'Minor Arcana', number: 8, yesNo: 'No', astrology: 'Jupiter in Gemini', upright: 'Feeling trapped by thoughts.', reversed: 'Mental liberation.', love: 'Constrained in relationship.' },
    { name: 'Nine of Swords', arcana: 'Minor Arcana', number: 9, yesNo: 'No', astrology: 'Mars in Gemini', upright: 'Acute anxiety, insomnia, guilt.', reversed: 'Anxiety lifting.', love: 'Excessive overthinking.' },
    { name: 'Ten of Swords', arcana: 'Minor Arcana', number: 10, yesNo: 'No', astrology: 'Sun in Gemini', upright: 'Rock bottom, painful endings.', reversed: 'Rising from ruins.', love: 'Painful relationship ending.' },
    { name: 'Page of Swords', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Swords', upright: 'Critical thinking, high curiosity.', reversed: 'Cheap gossip, rumors.', love: 'Investigative texts.' },
    { name: 'Knight of Swords', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Swords', upright: 'Logic-driven swift action.', reversed: 'Verbal aggression.', love: 'Blunt confrontations.' },
    { name: 'Queen of Swords', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Swords', upright: 'Independent, objective, firm boundaries.', reversed: 'Cynical, cold.', love: 'Independent, logical partner.' },
    { name: 'King of Swords', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Air in Swords', upright: 'Intellectual integrity, authority.', reversed: 'Manipulative logic.', love: 'Values absolute rationality.' },

    // Suit of Pentacles
    { name: 'Ace of Pentacles', arcana: 'Minor Arcana', number: 1, yesNo: 'Yes', astrology: 'Earth Signs', upright: 'New financial ventures, stability.', reversed: 'Missed opportunities.', love: 'Grounded in reality.' },
    { name: 'Two of Pentacles', arcana: 'Minor Arcana', number: 2, yesNo: 'Neutral', astrology: 'Jupiter in Capricorn', upright: 'Juggling life priorities.', reversed: 'Losing life balance.', love: 'Balancing romance and career.' },
    { name: 'Three of Pentacles', arcana: 'Minor Arcana', number: 3, yesNo: 'Yes', astrology: 'Mars in Capricorn', upright: 'Solid teamwork, collaboration.', reversed: 'Poor team coordination.', love: 'Building shared future together.' },
    { name: 'Four of Pentacles', arcana: 'Minor Arcana', number: 4, yesNo: 'No', astrology: 'Sun in Capricorn', upright: 'Financial stability, stinginess.', reversed: 'Overspending.', love: 'Possessiveness, fear of hurt.' },
    { name: 'Five of Pentacles', arcana: 'Minor Arcana', number: 5, yesNo: 'No', astrology: 'Mercury in Taurus', upright: 'Financial hardship, isolation.', reversed: 'Emerging from crisis.', love: 'Feeling neglected, lonely.' },
    { name: 'Six of Pentacles', arcana: 'Minor Arcana', number: 6, yesNo: 'Yes', astrology: 'Moon in Taurus', upright: 'Generosity, giving and receiving balance.', reversed: 'Strings attached.', love: 'Reciprocal balance in love.' },
    { name: 'Seven of Pentacles', arcana: 'Minor Arcana', number: 7, yesNo: 'Yes', astrology: 'Saturn in Taurus', upright: 'Assessing long-term investments.', reversed: 'Disappointing yields.', love: 'Reflecting on relationship growth.' },
    { name: 'Eight of Pentacles', arcana: 'Minor Arcana', number: 8, yesNo: 'Yes', astrology: 'Sun in Virgo', upright: 'High dedication, mastering skills.', reversed: 'Fruitless perfectionism.', love: 'Consistently nurturing quality.' },
    { name: 'Nine of Pentacles', arcana: 'Minor Arcana', number: 9, yesNo: 'Yes', astrology: 'Venus in Virgo', upright: 'Self-made prosperity, personal luxury.', reversed: 'Financial dependency.', love: 'Flourishing independent single life.' },
    { name: 'Ten of Pentacles', arcana: 'Minor Arcana', number: 10, yesNo: 'Yes', astrology: 'Mercury in Virgo', upright: 'Generational wealth, long-term security.', reversed: 'Family disputes.', love: 'Blessed by family approval.' },
    { name: 'Page of Pentacles', arcana: 'Minor Arcana', number: 11, yesNo: 'Yes', astrology: 'Earth in Pentacles', upright: 'Learning new skills, diligence.', reversed: 'Procrastination.', love: 'Sincere small commitments.' },
    { name: 'Knight of Pentacles', arcana: 'Minor Arcana', number: 12, yesNo: 'Yes', astrology: 'Fire in Pentacles', upright: 'Deeply dependable, consistent.', reversed: 'Trapped in boring routines.', love: 'Loyal, dependable partner.' },
    { name: 'Queen of Pentacles', arcana: 'Minor Arcana', number: 13, yesNo: 'Yes', astrology: 'Water in Pentacles', upright: 'Nurturing generosity, cozy home.', reversed: 'Overly materialistic.', love: 'Wise, maternal partner.' },
    { name: 'King of Pentacles', arcana: 'Minor Arcana', number: 14, yesNo: 'Yes', astrology: 'Air in Pentacles', upright: 'Successful entrepreneur, stability.', reversed: 'Greedy materialism.', love: 'Provides total life security.' }
];

// ==========================================
// --- DATA ORACLE CARDS (50 CARDS IN 5 CATEGORIES) ---
// ==========================================
const ORACLE_DECK = [
    // Category 1: Inner Peace & Healing (1 - 10)
    { id: 1, name: 'Inner Peace', category: 'Inner Peace & Healing', img: '', desc: 'Take a deep breath and reconnect with your inner silence. Peace is found in a quiet mind.', guidance: 'Meditate for 5 minutes today.' },
    { id: 2, name: 'Self Transformation', category: 'Inner Peace & Healing', img: '', desc: 'You are shedding old layers that no longer serve your growth. Embrace your subtle metamorphosis.', guidance: 'Do not fear changing tides.' },
    { id: 3, name: 'Sacred Boundaries', category: 'Inner Peace & Healing', img: '', desc: 'Protect your light and energy. Setting clear boundaries is a profound act of self-love.', guidance: 'Politely say no to draining commitments.' },
    { id: 4, name: 'Emotional Healing', category: 'Inner Peace & Healing', img: '', desc: 'Allow old wounds to breathe so they can finally turn into wisdom.', guidance: 'Journal your unexpressed feelings.' },
    { id: 5, name: 'Forgiveness', category: 'Inner Peace & Healing', img: '', desc: 'Releasing resentment frees you, not the person who hurt you.', guidance: 'Let go of heavy emotional luggage.' },
    { id: 6, name: 'Patience & Stillness', category: 'Inner Peace & Healing', img: '', desc: 'In moments of uncertainty, the best action is gentle stillness.', guidance: 'Pause before making big decisions.' },
    { id: 7, name: 'Nurture Yourself', category: 'Inner Peace & Healing', img: '', desc: 'Treat your body and soul with gentle care today.', guidance: 'Take time for a relaxing bath or rest.' },
    { id: 8, name: 'Serenity', category: 'Inner Peace & Healing', img: '', desc: 'Find calm in the center of life\'s busy motion.', guidance: 'Breathe slowly when stress arises.' },
    { id: 9, name: 'Deep Compassion', category: 'Inner Peace & Healing', img: '', desc: 'Extend gentle kindness to yourself and everyone around you.', guidance: 'Be soft in a hard world.' },
    { id: 10, name: 'Healing Waves', category: 'Inner Peace & Healing', img: '', desc: 'Soothing energy is washing away past emotional strain.', guidance: 'Let yourself heal at your own pace.' },

    // Category 2: Guidance & Wisdom (11 - 20)
    { id: 11, name: 'Intuitive Clarity', category: 'Guidance & Wisdom', img: '', desc: 'Trust the quiet whispers of your gut instincts over loud logical chatter.', guidance: 'Listen closely to first impressions today.' },
    { id: 12, name: 'Divine Timing', category: 'Guidance & Wisdom', img: '', desc: 'Everything is unfolding at the exact moment it needs to. Patience is your key.', guidance: 'Release your urge to rush outcomes.' },
    { id: 13, name: 'Spiritual Alignment', category: 'Guidance & Wisdom', img: '', desc: 'Your mind, body, and spirit are moving in total harmony with the universe.', guidance: 'Stay true to your core values.' },
    { id: 14, name: 'Higher Purpose', category: 'Guidance & Wisdom', img: '', desc: 'Your life carries a sacred meaning that impacts the world around you.', guidance: 'Align your actions with your passions.' },
    { id: 15, name: 'Wisdom Within', category: 'Guidance & Wisdom', img: '', desc: 'All the answers you seek are already resting inside your heart.', guidance: 'Spend quiet time in nature.' },
    { id: 16, name: 'Clarity of Thought', category: 'Guidance & Wisdom', img: '', desc: 'Clear away mental clutter to see your path forward.', guidance: 'Focus on one priority at a time.' },
    { id: 17, name: 'Spiritual Guidance', category: 'Guidance & Wisdom', img: '', desc: 'Signs and synchronicities are guiding your steps.', guidance: 'Pay attention to repeating numbers or symbols.' },
    { id: 18, name: 'Truth & Integrity', category: 'Guidance & Wisdom', img: '', desc: 'Speak your truth gently yet firmly.', guidance: 'Honesty breeds lasting freedom.' },
    { id: 19, name: 'Soul Expansion', category: 'Guidance & Wisdom', img: '', desc: 'Your consciousness is broadening into higher understanding.', guidance: 'Read uplifting or spiritual books.' },
    { id: 20, name: 'Protection', category: 'Guidance & Wisdom', img: '', desc: 'You are safe and shielded by spiritual warmth.', guidance: 'Visualize a protective bubble around you.' },

    // Category 3: Mindset & Clarity (21 - 30)
    { id: 21, name: 'Abundance Flow', category: 'Mindset & Clarity', img: '', desc: 'Shift your mindset from scarcity to gratitude and watch prosperity grow.', guidance: 'Count five blessings right now.' },
    { id: 22, name: 'Release Control', category: 'Mindset & Clarity', img: '', desc: 'Surrender your worries to the universe and let life flow naturally.', guidance: 'Stop forcing things that aren\'t working.' },
    { id: 23, name: 'Authenticity', category: 'Mindset & Clarity', img: '', desc: 'Strip away expectations and step boldly into your true, unedited self.', guidance: 'Stop seeking external approval.' },
    { id: 24, name: 'Grace & Gratitude', category: 'Mindset & Clarity', img: '', desc: 'Approach every challenge with grace and a grateful heart.', guidance: 'Thank someone who helped you.' },
    { id: 25, name: 'Trust the Journey', category: 'Mindset & Clarity', img: '', desc: 'Every detour is teaching you something valuable.', guidance: 'Embrace where you are right now.' },
    { id: 26, name: 'Release Fear', category: 'Mindset & Clarity', img: '', desc: 'Fear is an illusion constructed by an anxious mind.', guidance: 'Replace worry with quiet trust.' },
    { id: 27, name: 'Purity of Intent', category: 'Mindset & Clarity', img: '', desc: 'Ensure your motives are rooted in honesty and goodwill.', guidance: 'Act with clean intentions.' },
    { id: 28, name: 'Self-Acceptance', category: 'Mindset & Clarity', img: '', desc: 'Embrace both your strengths and imperfections wholeheartedly.', guidance: 'Stop comparing yourself to others.' },
    { id: 29, name: 'Inner Sanctuary', category: 'Mindset & Clarity', img: '', desc: 'Build a quiet mental refuge where peace always reigns.', guidance: 'Retreat inward when overwhelmed.' },
    { id: 30, name: 'Lightheartedness', category: 'Mindset & Clarity', img: '', desc: 'Laugh freely and lighten heavy thoughts.', guidance: 'Find humor in daily situations.' },

    // Category 4: Soul & Spirit (31 - 40)
    { id: 31, name: 'Unconditional Love', category: 'Soul & Spirit', img: '', desc: 'Open your heart to give and receive pure affection without keeping score.', guidance: 'Forgive a small past mistake.' },
    { id: 32, name: 'Boundless Creativity', category: 'Soul & Spirit', img: '', desc: 'Your soul is an endless reservoir of fresh artistic ideas waiting to bloom.', guidance: 'Express yourself through art or writing.' },
    { id: 33, name: 'Soul Connection', category: 'Soul & Spirit', img: '', desc: 'A meaningful bond is drawing near to elevate your spiritual journey.', guidance: 'Nurture deep relationships.' },
    { id: 34, name: 'Light Expansion', category: 'Soul & Spirit', img: '', desc: 'Shine your inner light bright enough to inspire others.', guidance: 'Share a gentle smile today.' },
    { id: 35, name: 'Harmony', category: 'Soul & Spirit', img: '', desc: 'Balance your work, rest, play, and spiritual pursuits.', guidance: 'Adjust areas feeling out of sync.' },
    { id: 36, name: 'Inner Child', category: 'Soul & Spirit', img: '', desc: 'Connect with the playful wonder inside your soul.', guidance: 'Revisit a childhood hobby.' },
    { id: 37, name: 'Sacred Union', category: 'Soul & Spirit', img: '', desc: 'A harmonious partnership based on mutual upliftment.', guidance: 'Cultivate healthy teamwork.' },
    { id: 38, name: 'Grounded Spirit', category: 'Soul & Spirit', img: '', desc: 'Anchor your energy deep into the earth.', guidance: 'Walk barefoot on grass or earth.' },
    { id: 39, name: 'Renewal', category: 'Soul & Spirit', img: '', desc: 'A fresh wave of energy is restoring your stamina.', guidance: 'Welcome a clean slate.' },
    { id: 40, name: 'Wholeness', category: 'Soul & Spirit', img: '', desc: 'You are complete, worthy, and enough just as you are.', guidance: 'Rest in total self-fulfillment.' },

    // Category 5: Life Journey & Action (41 - 50)
    { id: 41, name: 'Inner Strength', category: 'Life Journey & Action', img: '', desc: 'You possess a quiet resilience capable of weathering any storm.', guidance: 'Stand tall in your personal truth.' },
    { id: 42, name: 'Joyful Expression', category: 'Life Journey & Action', img: '', desc: 'Celebrate small wins and allow spontaneous happiness into your day.', guidance: 'Do something purely for fun.' },
    { id: 43, name: 'New Horizon', category: 'Life Journey & Action', img: '', desc: 'A fresh chapter is opening before you filled with hope.', guidance: 'Prepare to welcome new chances.' },
    { id: 44, name: 'Courageous Leap', category: 'Life Journey & Action', img: '', desc: 'Take a step forward even if your knees tremble slightly.', guidance: 'Fear is just excitement without breath.' },
    { id: 45, name: 'Sacred Rest', category: 'Life Journey & Action', img: '', desc: 'Resting is productive work for your soul.', guidance: 'Allow yourself guilt-free downtime.' },
    { id: 46, name: 'Manifesting Dreams', category: 'Life Journey & Action', img: '', desc: 'Your thoughts are magnetic seeds planting your tomorrow.', guidance: 'Focus on what you want to build.' },
    { id: 47, name: 'Transformation', category: 'Life Journey & Action', img: '', desc: 'Welcome shifts that bring you closer to your potential.', guidance: 'Embrace change without resistance.' },
    { id: 48, name: 'Golden Opportunity', category: 'Life Journey & Action', img: '', desc: 'A rare door is opening for your personal expansion.', guidance: 'Say yes to new invitations.' },
    { id: 49, name: 'Reclaiming Power', category: 'Life Journey & Action', img: '', desc: 'Take back authority over your life choices.', guidance: 'Stop letting others decide for you.' },
    { id: 50, name: 'Infinite Possibilities', category: 'Life Journey & Action', img: '', desc: 'Do not limit your visions; the universe is vast.', guidance: 'Dream bigger without self-doubt.' }
];

// ==========================================
// --- STATE ---
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

function toggleOption(opt, val) {
    if (opt === 'majorOnly') optMajorOnly = val;
    if (opt === 'autoOpen') optAutoOpen = val;
    if (opt === 'showDesc') optShowDesc = val;
}

// ==========================================
// --- DASHBOARD / DRAWER MENU FIX ---
// ==========================================
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

function updateDrawerMenu() {
    const drawer = document.getElementById('drawer-menu');
    if (!drawer) return;
    
    drawer.innerHTML = ''; // Clean completely to remove duplicate sections

    const nav = document.createElement('nav');
    nav.className = 'flex flex-col space-y-1 p-5 font-cute text-sm font-bold text-gray-700 overflow-y-auto max-h-screen';
    
    nav.innerHTML = `
        <div class="text-xs uppercase tracking-widest text-pink-400 font-bold mb-2">CuTarot Navigation</div>
        
        <a href="#" onclick="event.preventDefault(); navigate('home');" class="px-4 py-2.5 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors">Home</a>
        <a href="#" onclick="event.preventDefault(); navigate('home', 'home-spreads-section');" class="px-4 py-2.5 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors">Spreads</a>
        
        <!-- All Cards Submenu -->
        <div class="py-1">
            <a href="#" onclick="event.preventDefault(); navigate('all-cards'); filterLibrary('All');" class="px-4 py-2 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors block">All Cards</a>
            <div class="pl-6 space-y-1">
                <a href="#" onclick="event.preventDefault(); navigate('all-cards'); filterLibrary('Major Arcana');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">Major Arcana</a>
                <a href="#" onclick="event.preventDefault(); navigate('all-cards'); filterLibrary('Wands');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">Suit of Wands</a>
                <a href="#" onclick="event.preventDefault(); navigate('all-cards'); filterLibrary('Cups');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">Suit of Cups</a>
                <a href="#" onclick="event.preventDefault(); navigate('all-cards'); filterLibrary('Swords');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">Suit of Swords</a>
                <a href="#" onclick="event.preventDefault(); navigate('all-cards'); filterLibrary('Pentacles');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">Suit of Pentacles</a>
            </div>
        </div>

        <!-- Oracle System Main Menu -->
        <div class="py-1">
            <a href="#" onclick="event.preventDefault(); navigate('oracle-draw');" class="px-4 py-2 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors block">Oracle System</a>
            <div class="pl-6 space-y-1">
                <a href="#" onclick="event.preventDefault(); navigate('oracle-draw');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">Draw Oracle Cards</a>
                <a href="#" onclick="event.preventDefault(); toggleDailyOracleCard(); navigate('home', 'home-daily-oracle-section');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">Today's Oracle Card</a>
                <a href="#" onclick="event.preventDefault(); navigate('oracle-library');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">Oracle Library</a>
                <a href="#" onclick="event.preventDefault(); navigate('generic', 'About Oracle');" class="block py-1 text-xs text-gray-500 hover:text-purple-800">About Oracle</a>
            </div>
        </div>

        <a href="#" onclick="event.preventDefault(); initBirthCalculatorPage(); navigate('birth-calculator');" class="px-4 py-2.5 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors">Birth Calculator</a>
        <a href="#" onclick="event.preventDefault(); navigate('home', 'home-zodiac-section');" class="px-4 py-2.5 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors">Zodiac Guides</a>
        <a href="#" onclick="event.preventDefault(); navigate('home', 'home-articles-section');" class="px-4 py-2.5 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors">Articles & Insights</a>
        <a href="#" onclick="event.preventDefault(); navigate('generic', 'About Tarot');" class="px-4 py-2.5 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors">About Tarot</a>
        <a href="#" onclick="event.preventDefault(); navigate('generic', 'Personal Reading');" class="px-4 py-2.5 hover:bg-pink-50 text-purple-800 rounded-xl transition-colors">Personal Reading</a>
        
        <!-- Shop Now Button -->
        <a href="#" onclick="event.preventDefault(); navigate('generic', 'Shop Now');" class="px-4 py-3 bg-pink-100 hover:bg-pink-200 text-purple-800 font-bold rounded-xl transition-all mt-4 text-center shadow-sm">Shop Now 🛍️</a>
    `;
    
    drawer.appendChild(nav);
}

function ensureHeaderBuyIcon() {
    const header = document.querySelector('header') || document.getElementById('main-header');
    if (!header) return;
    if (document.getElementById('header-buy-btn')) return;

    const buyBtn = document.createElement('button');
    buyBtn.id = 'header-buy-btn';
    buyBtn.className = 'absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-purple-800 transition-all shadow-sm flex items-center justify-center';
    buyBtn.title = 'Shop CuTarot Deck';
    buyBtn.innerHTML = `
        <svg class="w-5 h-5 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
    `;
    buyBtn.onclick = () => navigate('generic', 'Shop Now');
    
    header.style.position = 'relative';
    header.appendChild(buyBtn);
}

// ==========================================
// --- HOMEPAGE SECTION REORDERING ---
// ==========================================
function ensureHomepageLayout() {
    const homeView = document.getElementById('view-home');
    if (!homeView) return;

    // 1. Spreads Section
    const spreadsGrid = document.getElementById('home-spreads-grid');
    let spreadsSection = spreadsGrid?.parentElement;
    if (spreadsSection) spreadsSection.id = 'home-spreads-section';

    // 2. Oracle Section (Positioned right under Spreads)
    let oracleSection = document.getElementById('home-oracle-section');
    if (!oracleSection) {
        oracleSection = document.createElement('div');
        oracleSection.id = 'home-oracle-section';
        oracleSection.className = 'w-full max-w-lg mx-auto mb-8 px-4';
        oracleSection.innerHTML = `
            <div class="bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-3xl border-2 border-pink-200 p-6 shadow-sm text-left relative overflow-hidden">
                <div class="w-full aspect-[16/9] bg-pink-100 rounded-2xl mb-5 overflow-hidden border border-pink-200 shadow-inner flex items-center justify-center">
                    <span class="font-cute font-bold text-pink-300 text-sm">Oracle Deck Cover Banner</span>
                </div>
                <div class="text-[9px] uppercase tracking-widest text-pink-400 font-bold mb-1 font-cute">Companion Intuitive Deck</div>
                <h3 class="font-cute font-bold text-2xl text-purple-800 mb-2">CuTarot Oracle Deck</h3>
                <p class="font-cute text-xs text-gray-600 leading-relaxed mb-6">
                    Oracle cards provide fluid, direct spiritual affirmations and gentle guidance. Use Oracle cards to set your intention for the day or seek immediate clarity for your heart.
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
    }

    // 3. Birth Calculator Section
    ensureBirthCalculatorHome();
    const birthCalcSection = document.getElementById('home-birth-calculator');

    // 4. Zodiac Section
    const zodiacGrid = document.getElementById('home-zodiac-grid');
    let zodiacSection = zodiacGrid?.parentElement;
    if (zodiacSection) zodiacSection.id = 'home-zodiac-section';

    // 5. Articles Section (Positioned below Zodiac)
    ensureArticlesSection();
    const articlesSection = document.getElementById('home-articles-section');

    // REORDER IN DOM
    if (spreadsSection && oracleSection) {
        spreadsSection.parentNode.insertBefore(oracleSection, spreadsSection.nextSibling);
    }
    if (oracleSection && birthCalcSection) {
        oracleSection.parentNode.insertBefore(birthCalcSection, oracleSection.nextSibling);
    }
    if (zodiacSection && articlesSection) {
        zodiacSection.parentNode.insertBefore(articlesSection, zodiacSection.nextSibling);
    }
}

function ensureArticlesSection() {
    let articlesSection = document.getElementById('home-articles-section');
    if (articlesSection) return;

    articlesSection = document.createElement('div');
    articlesSection.id = 'home-articles-section';
    articlesSection.className = 'w-full max-w-lg mx-auto mb-8 px-4 text-left font-cute';
    
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

            <div onclick="navigate('generic', 'About Oracle')" class="snap-center flex-shrink-0 w-64 bg-purple-100 p-4 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div class="w-full h-28 bg-purple-200/50 rounded-xl mb-3 flex items-center justify-center text-purple-400 font-bold text-xs">Oracle Guide Cover</div>
                <span class="px-2 py-0.5 bg-white text-purple-600 text-[9px] font-bold rounded-full">Oracle</span>
                <h4 class="font-bold text-sm text-purple-800 mt-2 line-clamp-1">Tarot vs Oracle Cards</h4>
                <p class="text-[11px] text-gray-600 mt-1 line-clamp-2">Understanding the fluid freedom of Oracle decks alongside Tarot.</p>
            </div>

            <div onclick="navigate('generic', 'Personal Reading')" class="snap-center flex-shrink-0 w-64 bg-white p-4 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <div class="w-full h-28 bg-pink-50 rounded-xl mb-3 flex items-center justify-center text-pink-300 font-bold text-xs">CuTarot Story</div>
                <span class="px-2 py-0.5 bg-pink-50 text-pink-500 text-[9px] font-bold rounded-full">Behind Deck</span>
                <h4 class="font-bold text-sm text-purple-800 mt-2 line-clamp-1">Why CuTarot Was Created</h4>
                <p class="text-[11px] text-gray-500 mt-1 line-clamp-2">A personal journey turning complex symbols into intuitive art.</p>
            </div>
        </div>
    `;
}

// ==========================================
// --- FOOTER POSITION FIX ---
// ==========================================
function ensureFooterPosition() {
    const footer = document.getElementById('main-footer') || document.querySelector('footer');
    if (footer) {
        document.body.appendChild(footer);
    }
}

// ==========================================
// --- BIRTH CARD CALCULATOR FIX ---
// ==========================================
const BIRTH_CARD_MEANINGS = {
    0: { p1: "The Fool: Jalur hidup berbasis eksplorasi dan keberanian jiwa muda.", s1: "Jiwa mendambakan kebebasan mutlak dan kepolosan bijak." },
    1: { p1: "The Magician: Manifestor sejati dengan keterampilan tinggi.", s1: "Koneksi penciptaan ilahi dan penguasaan niat batin." },
    2: { p1: "The High Priestess: Intuisi tajam dan kebijaksanaan tersembunyi.", s1: "Pemahaman spiritual mendalam dan kedamaian batin." },
    3: { p1: "The Empress: Kelimpahan, kreativitas, dan energi mengayomi.", s1: "Penciptaan keindahan dan kenyamanan hidup sejati." },
    4: { p1: "The Emperor: Kepemimpinan, struktur, dan kestabilan fondasi.", s1: "Penguasaan diri dan perlindungan terhadap sesama." },
    5: { p1: "The Hierophant: Penjaga tradisi dan spiritualitas terstruktur.", s1: "Pencarian nilai kebenaran dan keteladanan moral." },
    6: { p1: "The Lovers: Pilihan hidup krusial dan hubungan jiwa harmonis.", s1: "Penyatuan dualitas dan cinta murni tanpa syarat." },
    7: { p1: "The Chariot: Kemenangan melalui tekad dan disiplin tinggi.", s1: "Navigasi emosi menuju tujuan hidup sejati." },
    8: { p1: "Strength: Keberanian lembut dan kesabaran menaklukkan rasa takut.", s1: "Kekuatan jiwa mengendalikan ego dengan kasih." },
    9: { p1: "The Hermit: Pencarian kebenaran melalui introspeksi dan kesendirian.", s1: "Cahaya kebijaksanaan batin untuk menerangi sesama." },
    10: { p1: "Wheel of Fortune: Adaptasi terhadap siklus dan takdir hidup.", s1: "Memahami perubahan sebagai tangga evolusi jiwa." },
    11: { p1: "Justice: Keseimbangan, kebenaran objektif, dan integritas.", s1: "Kejujuran nurani dan keadilan sejati." },
    12: { p1: "The Hanged Man: Cara pandang baru melalui kepasrahan bijak.", s1: "Pelepasan ego demi pencerahan jiwa." },
    13: { p1: "Death: Transformasi radikal dan kelahiran kembali.", s1: "Pelepasan masa lalu menuju kebangkitan diri." },
    14: { p1: "Temperance: Moderasi, kesabaran, dan sintesis harmonis.", s1: "Kedamaian jiwa dan keseimbangan hidup." },
    15: { p1: "The Devil: Pembelajaran lepas dari kemelekatan materi dan ketakutan.", s1: "Kebebasan sejati dari ilusi dan manipulasi." },
    16: { p1: "The Tower: Pencerahan kilat merubuhkan fondasi ilusi.", s1: "Kebangkitan jiwa menemukan kebenaran murni." },
    17: { p1: "The Star: Harapan abadi, penyembuhan, dan inspirasi suci.", s1: "Iman murni bahwa alam semesta selalu membimbing." },
    18: { p1: "The Moon: Penjelajahan alam bawah sadar dan misteri intuisi.", s1: "Penguasaan bayangan diri dan intuisi tajam." },
    19: { p1: "The Sun: Kejelasan mutlak, kebahagiaan, dan vitalitas.", s1: "Kecerahan jiwa dan kehangatan tulus." },
    20: { p1: "Judgement: Evaluasi diri jujur dan panggilan jiwa sejati.", s1: "Pengampunan dan kebangkitan spiritual." },
    21: { p1: "The World: Penyelesaian siklus agung dan kepenuhan hidup.", s1: "Kutuhan jiwa menyatu dengan alam semesta." }
};

function getBirthCardMeaning(num) {
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
        container.className = 'w-full max-w-lg mx-auto mb-8 px-4 cursor-pointer group';
        container.onclick = () => navigate('birth-calculator');
        
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
    let viewDiv = document.getElementById('view-birth-calculator');
    if (!viewDiv) {
        const homeView = document.getElementById('view-home');
        if (!homeView) return;
        
        viewDiv = document.createElement('div');
        viewDiv.id = 'view-birth-calculator';
        viewDiv.className = 'view-section pb-24 text-center';
        homeView.parentNode.appendChild(viewDiv);
    }

    viewDiv.innerHTML = `
        ${renderNavHeaderHTML('Birth Card Calculator')}
        
        <div class="w-full max-w-lg mx-auto px-4 mt-2 font-cute">
            <div class="w-36 aspect-[3/4] mx-auto bg-pink-50 rounded-2xl border-2 border-pink-100 flex items-center justify-center relative mb-6 shadow-sm">
                <div class="absolute inset-2 border border-pink-200/60 rounded-xl"></div>
                <span class="text-pink-300 font-bold text-xs text-center px-2">Birth Card Calculator</span>
            </div>
            
            <div class="bg-white p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-md text-center">
                <h3 class="font-bold text-lg text-purple-800 mb-2">Enter Your Birthday</h3>
                <p class="text-xs text-gray-500 mb-4">Format: MM/DD/YYYY</p>
                <input type="text" id="birthdate-input" 
                    placeholder="MM/DD/YYYY" 
                    oninput="handleBirthInput(event)"
                    class="w-full px-5 py-3.5 rounded-2xl border-2 border-purple-300 focus:border-purple-700 focus:outline-none font-cute text-base text-center text-gray-800 tracking-widest bg-gray-50 shadow-inner mb-6"
                />
                
                <button id="btn-find-birth-cards" onclick="processBirthCards()" class="w-full bg-purple-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all opacity-50 pointer-events-none">
                    Find My Cards
                </button>
            </div>

            <!-- Inline Result Section -->
            <div id="birth-cards-output" class="mt-8 hidden space-y-6 text-left"></div>
        </div>
    `;
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
        if (val.length === 8) {
            btn.classList.remove('opacity-50', 'pointer-events-none');
        } else {
            btn.classList.add('opacity-50', 'pointer-events-none');
        }
    }
}

function processBirthCards() {
    const inputEl = document.getElementById('birthdate-input');
    if (!inputEl) return;
    const parts = inputEl.value.split('/');
    if (parts.length !== 3 || parts[2].length !== 4) return;
    
    const mm = parts[0], dd = parts[1], yyyy = parts[2];
    const { pNum, sNum } = calculateTarotNumerology(mm, dd, yyyy);
    
    const pCardData = TAROT_DECK.find(c => c.arcana === 'Major Arcana' && c.number === pNum) || TAROT_DECK[0];
    const sCardData = TAROT_DECK.find(c => c.arcana === 'Major Arcana' && c.number === sNum) || TAROT_DECK[0];
    
    const pMeaning = getBirthCardMeaning(pNum);
    const sMeaning = getBirthCardMeaning(sNum);
    
    const outputContainer = document.getElementById('birth-cards-output');
    if (!outputContainer) return;

    outputContainer.innerHTML = `
        <div class="bg-gradient-to-br from-pink-50 to-white p-6 rounded-3xl border border-pink-200 shadow-sm space-y-4">
            <div class="text-xs uppercase tracking-widest text-pink-400 font-bold text-center">Your Numerology Result</div>
            
            <!-- Personality Card -->
            <div class="bg-white p-4 rounded-2xl border border-pink-100 flex items-center space-x-4 shadow-sm">
                <div class="w-16 aspect-[2/3.3] rounded-lg border border-pink-100 overflow-hidden flex-shrink-0 bg-pink-50 flex items-center justify-center">
                    ${pCardData.img ? `<img src="${pCardData.img}" class="w-full h-full object-contain" />` : `<span class="text-[8px] font-bold text-purple-800 p-1 text-center">${pCardData.name}</span>`}
                </div>
                <div>
                    <div class="text-[9px] uppercase tracking-wider text-pink-400 font-bold">Personality Card</div>
                    <h4 class="font-bold text-base text-purple-800">${pCardData.name}</h4>
                    <p class="text-xs text-gray-600 mt-1 leading-relaxed">${pMeaning.p1}</p>
                </div>
            </div>

            <!-- Soul Card -->
            <div class="bg-white p-4 rounded-2xl border border-purple-100 flex items-center space-x-4 shadow-sm">
                <div class="w-16 aspect-[2/3.3] rounded-lg border border-purple-100 overflow-hidden flex-shrink-0 bg-purple-50 flex items-center justify-center">
                    ${sCardData.img ? `<img src="${sCardData.img}" class="w-full h-full object-contain" />` : `<span class="text-[8px] font-bold text-purple-800 p-1 text-center">${sCardData.name}</span>`}
                </div>
                <div>
                    <div class="text-[9px] uppercase tracking-wider text-purple-400 font-bold">Soul Card</div>
                    <h4 class="font-bold text-base text-purple-800">${sCardData.name}</h4>
                    <p class="text-xs text-gray-600 mt-1 leading-relaxed">${sMeaning.s1}</p>
                </div>
            </div>
        </div>
    `;
    
    outputContainer.classList.remove('hidden');
    outputContainer.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// --- ORACLE SYSTEM LOGIC & CATEGORIES ---
// ==========================================
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
        if (parsed.date === todayStr) toggleDailyOracleCard();
    }
}

function initOracleViews() {
    const homeView = document.getElementById('view-home');
    if (!homeView) return;
    const parentContainer = homeView.parentNode;

    // 1. Oracle Library View
    if (!document.getElementById('view-oracle-library')) {
        const libView = document.createElement('div');
        libView.id = 'view-oracle-library';
        libView.className = 'view-section pb-24 text-center';
        libView.innerHTML = `
            ${renderNavHeaderHTML('Oracle Library')}
            <div class="w-full max-w-4xl mx-auto px-4 mt-2 font-cute">
                <h1 class="font-bold text-3xl text-purple-800 mb-4">Oracle Library</h1>
                
                <!-- 5 Oracle Categories Filter Tabs -->
                <div id="oracle-category-filters" class="flex flex-wrap justify-center gap-2 mb-6"></div>

                <div id="oracle-library-grid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"></div>
            </div>
        `;
        parentContainer.appendChild(libView);
    }

    // 2. Oracle Draw View
    if (!document.getElementById('view-oracle-draw')) {
        const drawView = document.createElement('div');
        drawView.id = 'view-oracle-draw';
        drawView.className = 'view-section pb-24 text-center';
        drawView.innerHTML = `
            ${renderNavHeaderHTML('Draw Oracle')}
            <div class="w-full max-w-lg mx-auto px-4 mt-2 font-cute">
                <h1 class="font-bold text-3xl text-purple-800 mb-4">Draw Oracle Cards</h1>
                
                <div id="oracle-step-config" class="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm mb-6">
                    <div class="text-xs font-bold text-purple-800 mb-3">Select How Many Cards (1-10)</div>
                    <div id="oracle-num-selector" class="flex flex-wrap justify-center gap-2 mb-6"></div>
                    <button onclick="startOracleDrawProcess()" class="w-full bg-purple-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md">
                        Start Drawing
                    </button>
                </div>

                <div id="oracle-step-draw" class="hidden flex-col items-center">
                    <div id="oracle-deck-cards" class="flex justify-center gap-2 my-8 flex-wrap"></div>
                    <button id="btn-oracle-reveal" onclick="renderOracleResult()" class="hidden bg-pink-400 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md">
                        Reveal Oracle Reading
                    </button>
                </div>

                <div id="oracle-step-result" class="hidden flex-col items-center space-y-6"></div>
            </div>
        `;
        parentContainer.appendChild(drawView);
    }

    // 3. Oracle Detail View
    if (!document.getElementById('view-oracle-detail')) {
        const detailView = document.createElement('div');
        detailView.id = 'view-oracle-detail';
        detailView.className = 'view-section pb-24 text-center';
        detailView.innerHTML = `
            ${renderNavHeaderHTML('Oracle Detail')}
            <div class="w-full max-w-xl mx-auto px-4 mt-2">
                <div id="oracle-detail-content" class="text-left"></div>
            </div>
        `;
        parentContainer.appendChild(detailView);
    }
}

let activeOracleCategory = 'All';
function renderOracleLibrary(category = 'All') {
    activeOracleCategory = category;
    
    const categories = [
        'All',
        'Inner Peace & Healing',
        'Guidance & Wisdom',
        'Mindset & Clarity',
        'Soul & Spirit',
        'Life Journey & Action'
    ];

    const filterContainer = document.getElementById('oracle-category-filters');
    if (filterContainer) {
        let filterHtml = '';
        categories.forEach(cat => {
            const active = activeOracleCategory === cat ? 'bg-purple-700 text-white shadow-sm' : 'bg-pink-50 text-purple-800 border border-pink-100 hover:bg-pink-100';
            filterHtml += `<button onclick="renderOracleLibrary('${cat}')" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${active}">${cat}</button>`;
        });
        filterContainer.innerHTML = filterHtml;
    }

    const grid = document.getElementById('oracle-library-grid');
    if (!grid) return;
    let html = '';
    
    ORACLE_DECK.forEach((card, idx) => {
        if (activeOracleCategory === 'All' || card.category === activeOracleCategory) {
            html += `
                <div onclick="showOracleDetail(${idx})" class="cursor-pointer transform transition-transform hover:-translate-y-1">
                    <div class="w-full aspect-[2/3.3] rounded-xl border border-pink-100 bg-white flex flex-col items-center justify-center p-2 text-center shadow-sm overflow-hidden relative">
                        ${card.img 
                            ? `<img src="${card.img}" class="w-full h-full object-contain" />` 
                            : `<div class="text-[10px] font-bold text-purple-800 leading-tight">${card.name}</div>
                               <div class="text-[8px] text-pink-400 mt-1">${card.category.split(' ')[0]}</div>`
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
                <span class="px-3 py-1 bg-pink-100 text-pink-600 text-[10px] font-bold rounded-full">${card.category}</span>
                <h2 class="text-2xl font-bold text-purple-800 mt-2">${card.name}</h2>
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
                    ${card.img ? `<img src="${card.img}" class="w-full h-full object-contain" />` : `<span class="text-xs font-bold text-purple-800 text-center">${card.name}</span>`}
                </div>
                <h4 class="font-bold text-lg text-purple-800 text-center">${card.name}</h4>
                <p class="text-xs text-gray-600 leading-relaxed text-center">${card.desc}</p>
            </div>
        `;
    });
    html += `<button onclick="navigate('oracle-draw')" class="bg-purple-700 text-white px-6 py-3 rounded-xl font-cute font-bold text-xs">Draw Again</button>`;
    resStep.innerHTML = html;
}

// ==========================================
// --- GENERIC PAGES & SHOP NOW PAGE ---
// ==========================================
function renderGenericPage(title) {
    const titleEl = document.getElementById('generic-title');
    if (titleEl) titleEl.innerText = title;
    
    const content = document.getElementById('generic-content');
    if (!content) return;
    
    let htmlHeader = renderNavHeaderHTML(title);

    if (title === 'Shop Now' || title === 'Buy CuTarot Deck') {
        content.innerHTML = `
            ${htmlHeader}
            <div class="space-y-6 text-left font-cute max-w-xl mx-auto">
                <div class="bg-gradient-to-br from-pink-100 via-purple-50 to-white p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-md text-center">
                    <div class="w-48 aspect-[3/4] mx-auto bg-pink-200/60 rounded-2xl mb-4 border-2 border-pink-300 flex items-center justify-center shadow-inner">
                        <span class="font-bold text-purple-800 text-sm">CuTarot Physical Deck Box</span>
                    </div>
                    <h2 class="font-bold text-2xl text-purple-800">CuTarot Deck Edition</h2>
                    <p class="text-xs text-pink-500 font-bold mt-1">Include 78 Tarot Cards + 50 Oracle Cards + Guidebook</p>
                    
                    <div class="mt-6 space-y-3">
                        <a href="https://shopee.co.id" target="_blank" class="block w-full bg-purple-700 hover:bg-purple-800 text-white py-3.5 rounded-2xl font-bold text-sm shadow-md text-center transition-all">
                            Order on Shopee
                        </a>
                        <a href="https://tokopedia.com" target="_blank" class="block w-full bg-white hover:bg-pink-50 border-2 border-pink-200 text-purple-800 py-3.5 rounded-2xl font-bold text-sm text-center transition-all">
                            Order on Tokopedia
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else if (title === 'About Tarot') {
        content.innerHTML = `
            ${htmlHeader}
            <div class="space-y-6 text-left font-cute max-w-xl mx-auto">
                <div class="bg-pink-50/40 p-6 sm:p-8 rounded-3xl border border-pink-100 shadow-sm">
                    <h3 class="font-bold text-2xl text-purple-800 mb-3">Discovering the World of Tarot</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Tarot is a mirror of the soul reflecting the depths of the subconscious mind, emotions, and human potential through visual symbolism.
                    </p>
                </div>
            </div>
        `;
    } else if (title === 'About Oracle') {
        content.innerHTML = `
            ${htmlHeader}
            <div class="space-y-6 text-left font-cute max-w-xl mx-auto">
                <div class="bg-pink-50/40 p-6 sm:p-8 rounded-3xl border border-pink-100 shadow-sm">
                    <h3 class="font-bold text-2xl text-purple-800 mb-3">Understanding Oracle Cards</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Oracle cards are fluid, direct spiritual tools without rigid system rules. They offer affirmations and gentle daily guidance.
                    </p>
                </div>
            </div>
        `;
    } else if (title === 'Personal Reading') {
        content.innerHTML = `
            ${htmlHeader}
            <div class="space-y-6 text-left font-cute max-w-xl mx-auto">
                <div class="text-center mb-6">
                    <div class="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-3 border-2 border-pink-200 flex items-center justify-center text-purple-800 font-bold text-xl">M</div>
                    <h2 class="font-bold text-2xl text-purple-800">Hi, I'm Mai</h2>
                    <p class="text-xs text-pink-500 font-bold">Creator of CuTarot</p>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">
                    CuTarot was created to make Rider Waite Smith symbolism friendly, intuitive, and easy to understand for everyone.
                </p>
            </div>
        `;
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
        container.className = 'w-full max-w-lg mx-auto mb-6 px-4 pt-4';
        container.innerHTML = `
            <div class="relative font-cute">
                <input type="text" id="dashboard-search-input" 
                    placeholder="Explore CuTarot cards, spreads, sections..." 
                    oninput="handleDashboardSearch(this.value)"
                    class="w-full px-5 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-700 focus:outline-none font-cute text-sm text-gray-700 bg-white shadow-sm transition-all text-center"
                />
                <div id="dashboard-search-results" class="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-pink-100 max-h-60 overflow-y-auto hidden z-50 p-2 space-y-1 text-xs text-left"></div>
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
            matches.push({ type: 'Spread', title: s.name, desc: s.desc, action: () => navigate('draw') });
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
        if (o.name.toLowerCase().includes(q) || o.category.toLowerCase().includes(q)) {
            matches.push({ type: 'Oracle Card', title: o.name, desc: o.category, action: () => showOracleDetail(idx) });
        }
    });

    const sections = [
        { name: 'Birth Card Calculator', desc: 'Find Soul & Personality cards', action: () => navigate('birth-calculator') },
        { name: 'Oracle Deck & Draw', desc: 'Fluid intuitive card readings', action: () => navigate('oracle-draw') },
        { name: 'Oracle Library', desc: 'Browse all 50 Oracle cards', action: () => navigate('oracle-library') },
        { name: 'Articles & Guides', desc: 'Read CuTarot articles', action: () => navigate('home', 'home-articles-section') },
        { name: 'Shop Now', desc: 'Get physical CuTarot deck', action: () => navigate('generic', 'Shop Now') }
    ];

    sections.forEach(sec => {
        if (sec.name.toLowerCase().includes(q) || sec.desc.toLowerCase().includes(q)) {
            matches.push({ type: 'Section', title: sec.name, desc: sec.desc, action: sec.action });
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
// --- TAROT LIBRARY & CARD DETAILS ---
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
                class="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-purple-700 focus:outline-none font-cute text-sm text-gray-700 bg-white shadow-sm transition-all text-center"
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
                <div onclick="showCardDetail(${index})" class="cursor-pointer transform transition-transform hover:-translate-y-1">
                    <div class="w-full aspect-[2/3.3] rounded-xl flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden ${card.img ? '' : 'bg-white border border-pink-100 p-2'}">
                        ${card.img 
                            ? `<img src="${card.img}" alt="${card.name}" class="w-full h-full object-contain" />`
                            : `<div class="text-[9px] text-pink-400 font-cute font-bold uppercase mb-1">${isMajor ? 'Major' : suit}</div>
                               <div class="text-xs font-cute font-bold text-gray-800 leading-tight">${card.name}</div>`
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
    const detailContent = document.getElementById('card-detail-content');
    if (!detailContent) return;

    detailContent.innerHTML = `
        ${renderNavHeaderHTML(card.name)}
        <div class="flex flex-col md:flex-row gap-8 lg:gap-12 font-cute max-w-2xl mx-auto">
            <div class="w-full md:w-1/3 flex justify-center">
                <div class="w-48 md:w-full aspect-[2/3.3] rounded-2xl flex flex-col items-center justify-center shadow-md relative overflow-hidden bg-pink-50 border border-pink-100">
                    ${card.img 
                        ? `<img src="${card.img}" alt="${card.name}" class="w-full h-full object-contain rounded-2xl" />`
                        : `<h2 class="font-bold text-2xl text-purple-800 text-center p-4">${card.name}</h2>`
                    }
                </div>
            </div>
            
            <div class="w-full md:w-2/3 space-y-4 text-left">
                <div>
                    <h1 class="font-bold text-3xl text-purple-800">${card.name}</h1>
                    <p class="text-xs text-pink-500 font-bold uppercase tracking-wider">${card.arcana}</p>
                </div>

                <div class="p-4 bg-pink-50/50 rounded-2xl border border-pink-100 space-y-2">
                    <h3 class="font-bold text-sm text-purple-800">Upright Meaning</h3>
                    <p class="text-xs text-gray-600 leading-relaxed">${card.upright}</p>
                </div>

                <div class="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <h3 class="font-bold text-sm text-gray-700">Reversed Meaning</h3>
                    <p class="text-xs text-gray-600 leading-relaxed">${card.reversed}</p>
                </div>
            </div>
        </div>
    `;
    
    navigate('card-detail');
}

function showZodiac(id) {
    const z = ZODIAC_DATA.find(item => item.id === id);
    if (!z) return;
    
    const detailContent = document.getElementById('zodiac-detail-content');
    if (!detailContent) return;

    detailContent.innerHTML = `
        ${renderNavHeaderHTML(z.name)}
        <div class="text-center font-cute max-w-xl mx-auto">
            <div class="text-pink-400 mb-2 w-12 h-12 mx-auto"><svg viewBox="0 0 24 24" class="w-full h-full">${z.svg}</svg></div>
            <h1 class="font-bold text-3xl text-purple-800 mb-1">${z.name}</h1>
            <p class="text-xs text-pink-400 font-bold mb-4">${z.dateRange}</p>
            <div class="bg-pink-50/40 p-6 rounded-3xl border border-pink-100 text-gray-600 text-sm leading-relaxed text-left space-y-3">
                <p>${z.desc}</p>
            </div>
        </div>
    `;
    
    navigate('zodiac');
}

// ==========================================
// --- INITIALIZATION ---
// ==========================================
window.onload = function() {
    ensureDashboardSearch();
    ensureHeaderBuyIcon();
    
    initOracleViews();
    ensureHomepageLayout();
    
    updateDrawerMenu();
    checkDailyOracleCard();
    checkDailyCard();
    
    const spreadsGrid = document.getElementById('home-spreads-grid');
    if (spreadsGrid) {
        let spreadHtml = '';
        SPREADS.forEach((s, i) => {
            spreadHtml += `
                <div onclick="selectSpread(${i})" class="p-4 rounded-xl border border-pink-50 hover:border-pink-200 bg-white hover:bg-pink-50/30 cursor-pointer transition-all h-full transform hover:-translate-y-1">
                    <h3 class="font-cute font-bold text-sm text-purple-800 mb-1">${s.name}</h3>
                    <p class="font-cute text-[11px] text-pink-400/90 leading-snug">${s.desc}</p>
                </div>`;
        });
        spreadsGrid.innerHTML = spreadHtml;
    }

    const zodiacGrid = document.getElementById('home-zodiac-grid');
    if (zodiacGrid) {
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

    ensureFooterPosition();
};
