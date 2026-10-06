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
function getTodayDateString() {
            const now = new Date();
            return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
        }

        function renderDailyCardHTML(card, isReversed) {
            const cardEl = document.getElementById('inline-daily-card');
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
                <p class="text-sm text-gray-600 mb-5 font-cute">Embrace the essence of the ${card.name}. It calls you to focus on your inner feelings today.</p>
                <p class="text-[10px] uppercase tracking-widest text-pink-400 mb-2 font-bold font-cute">Card Message</p>
                <p class="text-sm text-gray-600 italic font-cute">"Trust the journey, breathe, and allow the flow of the universe to guide your steps."</p>
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
            
            // Render Spreads
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

            // Render Zodiacs
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
            for(let i=1; i<=13; i++) {
                const isActive = deckCount === i;
                const cls = isActive ? 'bg-pink-300 text-white shadow-md transform scale-110' : 'bg-white text-gray-600 border border-pink-100 hover:border-pink-300 hover:bg-pink-50';
                html += `<button onclick="updateDeckCount(${i})" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-cute font-bold text-sm transition-all duration-300 ${cls}">${i}</button>`;
            }
            grid.innerHTML = html;
        }

        function updateDeckCount(num) {
            deckCount = num;
            renderConfigNumbers();
        }

        function startDraw() {
            let shuffled = [...TAROT_DECK];
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
                document.getElementById('btn-reveal').classList.remove('hidden');
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
                html += `
                <div class="flex flex-col items-center w-full" style="animation-delay: ${idx * 100}ms">
                    <div class="w-full max-w-[120px] aspect-[2/3.3] bg-white border border-pink-100 rounded-xl flex flex-col items-center justify-center p-2 text-center shadow-md">
                         <div class="text-[9px] text-pink-400 font-cute font-bold mb-1 uppercase tracking-widest">${card.arcana}</div>
                         <div class="text-xs sm:text-sm font-cute font-bold text-gray-800 leading-tight">${card.name}</div>
                         <div class="mt-2 text-pink-200 text-[10px] font-cute">${card.number}</div>
                    </div>
                    <span class="text-xs sm:text-sm font-cute text-gray-700 mt-3 text-center leading-tight">
                        ${card.name} <br> <span class="text-[10px] text-pink-400 italic">${card.isReversed ? '(Reversed)' : ''}</span>
                    </span>
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
            const suit = isMajor ? null : card.name.split(' of ')[1];
            
            let astrology = isMajor ? 'Cosmic / Planetary Rulership' : 
                (suit === 'Wands' ? 'Fire Signs (Aries, Leo, Sag)' : 
                suit === 'Cups' ? 'Water Signs (Cancer, Scorpio, Pisces)' : 
                suit === 'Swords' ? 'Air Signs (Gemini, Libra, Aquarius)' : 
                'Earth Signs (Taurus, Virgo, Capricorn)');
                
            const yesNo = (index % 2 === 0) ? '<span class="text-green-500 font-medium">Yes</span>' : '<span class="text-orange-400 font-medium">No / Caution</span>';

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
                                <p class="font-cute font-bold text-lg text-gray-700">${yesNo}</p>
                            </div>
                            <div class="bg-pink-50/50 p-4 rounded-xl border border-pink-100 shadow-sm">
                                <h4 class="text-[10px] font-bold text-pink-400 uppercase tracking-wider mb-1 font-cute">Astrology / Element</h4>
                                <p class="font-cute text-sm text-gray-700">${astrology}</p>
                            </div>
                        </div>

                        <div class="space-y-5 pt-4">
                            <div>
                                <h3 class="font-cute font-bold text-xl text-purple-800 mb-2 flex items-center"><span class="w-2 h-2 rounded-full bg-pink-300 mr-3"></span> Upright (Tegak)</h3>
                                <p class="text-gray-600 font-cute text-sm leading-relaxed text-justify">Secara upright, <strong>${card.name}</strong> membawa energi murni dan potensial penuh dari sifat dasarnya. Ini adalah masa di mana Anda disarankan untuk merangkul kejelasan pikiran, mengambil langkah maju, dan percaya pada proses yang sedang berlangsung.</p>
                            </div>
                            <div>
                                <h3 class="font-cute font-bold text-xl text-purple-800 mb-2 flex items-center"><span class="w-2 h-2 rounded-full bg-gray-400 mr-3"></span> Reversed (Terbalik)</h3>
                                <p class="text-gray-600 font-cute text-sm leading-relaxed text-justify">Ketika muncul terbalik, energi kartu ini mungkin terhambat, tertunda, atau menuntut Anda untuk melihat ke dalam (introspeksi). Jangan paksakan keadaan; cobalah cari perspektif lain untuk mengurai masalah.</p>
                            </div>
                            <div class="bg-pink-50/30 p-5 rounded-2xl border border-pink-50">
                                <h3 class="font-cute font-bold text-xl text-purple-800 mb-2 flex items-center"><span class="text-pink-400 mr-3 text-lg">♥</span> Relationship & Love</h3>
                                <p class="text-gray-600 font-cute text-sm leading-relaxed">Dalam konteks asmara, kartu ini menyiratkan dinamika emosional yang sedang tumbuh. Jika Anda lajang, ini menunjukkan fokus pada penyembuhan diri. Jika memiliki pasangan, komunikasikan perasaan secara lembut namun transparan.</p>
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
                <div class="text-center mb-10">
                    <div class="text-pink-400 mb-4 w-16 h-16 mx-auto"><svg viewBox="0 0 24 24" class="w-full h-full">${z.svg}</svg></div>
                    <h1 class="font-cute font-bold text-4xl text-purple-800 mb-2">${z.name}</h1>
                    <p class="text-sm text-pink-400 tracking-wider font-cute">${z.dateRange}</p>
                </div>
                <div class="bg-pink-50/30 p-8 rounded-3xl border border-pink-100 text-gray-600 font-cute leading-relaxed text-left">
                    <p>Selamat datang di profil energi <strong>${z.name}</strong>.</p>
                    <p class="mt-4">Zodiak ini dikenal dengan elemen dan karakter utamanya yang khas. Anda bisa menambahkan teks deskripsi astrologi harian, kecocokan (compatibility), maupun karakteristik mendalam Mai Collection di bagian ini ke depannya.</p>
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
                content.innerHTML = `<p>Tarot is a deck of 78 cards used for reflection, introspection, and storytelling. It consists of the Major Arcana representing significant life themes, and the Minor Arcana representing daily situations.</p>`;
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
    </script>
