<script>
        // --- DATA ---
        const ZODIAC_DATA = [
            { id: 'aries', name: 'Aries', dateRange: 'March 21 – April 19', svg: '<path d="M4,14 C4,8 12,4 12,12 C12,4 20,8 20,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
            { id: 'taurus', name: 'Taurus', dateRange: 'April 20 – May 20', svg: '<circle cx="12" cy="14" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7,9 C7,4 17,4 17,9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
            { id: 'gemini', name: 'Gemini', dateRange: 'May 21 – June 20', svg: '<path d="M7,5 L17,5 M7,19 L17,19 M9,5 L9,19 M15,5 L15,19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
            { id: 'cancer', name: 'Cancer', dateRange: 'June 21 – July 22', svg: '<circle cx="8" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11,10 C16,7 20,10 18,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="14" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13,14 C8,17 4,14 6,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
            { id: 'leo', name: 'Leo', dateRange: 'July 23 – August 22', svg: '<circle cx="7" cy="17" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10,17 C13,17 18,14 15,9 C12,4 6,8 9,13 C12,18 19,16 19,16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
            { id: 'virgo', name: 'Virgo', dateRange: 'Aug 23 – Sep 22', svg: '<path d="M5,17 L7,7 L11,17 L14,9 C14,9 15,19 18,17 C21,15 19,10 19,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
            { id: 'libra', name: 'Libra', dateRange: 'Sep 23 – Oct 22', svg: '<path d="M4,15 L20,15 M4,18 L20,18 M12,15 C12,10 8,11 6,15 M12,15 C12,10 16,11 18,15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
            { id: 'scorpio', name: 'Scorpio', dateRange: 'Oct 23 – Nov 21', svg: '<path d="M5,14 L7,6 L11,14 L14,7 C14,7 16,14 18,13 C20,12 20,8 20,8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20,8 L22,10 M20,8 L18,10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
            { id: 'sagittarius', name: 'Sagittarius', dateRange: 'Nov 22 – Dec 21', svg: '<path d="M6,18 L18,6 M12,6 L18,6 L18,12 M4,14 L10,20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
            { id: 'capricorn', name: 'Capricorn', dateRange: 'Dec 22 – Jan 19', svg: '<path d="M5,7 L8,17 L12,9 C12,9 18,6 18,11 C18,16 14,20 9,19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
            { id: 'aquarius', name: 'Aquarius', dateRange: 'Jan 20 – Feb 18', svg: '<path d="M3,9 L7,5 L11,9 L15,5 L19,9 M3,15 L7,11 L11,15 L15,11 L19,15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
            { id: 'pisces', name: 'Pisces', dateRange: 'Feb 19 – Mar 20', svg: '<path d="M8,4 C5,10 5,14 8,20 M16,4 C19,10 19,14 16,20 M6,12 L18,12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' }
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

        const TAROT_DECK = Array.from({ length: 78 }, (_, i) => {
            const isMajor = i < 22;
            const suits = ['Wands', 'Cups', 'Swords', 'Pentacles'];
            let arcana = isMajor ? 'Major Arcana' : 'Minor Arcana';
            let suit = isMajor ? null : suits[Math.floor((i - 22) / 14)];
            let number = isMajor ? i : ((i - 22) % 14) + 1;
            let name = isMajor ? `Major Arcana ${i}` : `${number} of ${suit}`;
            if (isMajor && i === 0) name = 'The Fool';
            if (isMajor && i === 1) name = 'The Magician';
            return { name, arcana, number };
        });

        // --- STATE ---
        let currentSpread = null;
        let deckCount = 3;
        let activeDeck = [];
        let drawnCards = [];

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

