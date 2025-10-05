// RUGCHECK 3000 — meme only. No TX, no advice, just vibes.

// ──────────────────────────────────────────────────────────────
// ASCII BANNER (Matrix terminal vibe)
// ──────────────────────────────────────────────────────────────
export const BANNER = String.raw`
██████╗ ██╗   ██╗ ██████╗ ███████╗ ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗
██╔══██╗██║   ██║██╔════╝ ██╔════╝██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝
██████╔╝██║   ██║██║  ███╗███████╗██║     ███████║█████╗  ██║     █████╔╝ 
██╔══██╗██║   ██║██║   ██║╚════██║██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ 
██║  ██║╚██████╔╝╚██████╔╝███████║╚██████╗██║  ██║███████╗╚██████╗██║  ██╗
╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝
                            3  0  0  0    (meme terminal)
`;

// Mobile-friendly smaller banner
export const MOBILE_BANNER = String.raw`
██████╗ ██╗   ██╗ ██████╗ 
██╔══██╗██║   ██║██╔════╝ 
██████╔╝██║   ██║██║  ███╗
██╔══██╗██║   ██║██║   ██║
██║  ██║╚██████╔╝╚██████╔╝
╚═╝  ╚═╝ ╚═════╝  ╚═════╝ 
 ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗
██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝
██║     ███████║█████╗  ██║     █████╔╝ 
██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ 
╚██████╗██║  ██║███████╗╚██████╗██║  ██╗
 ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝
           3000 (meme terminal)
`;

// Extra small banner za vrlo male ekrane
export const TINY_BANNER = String.raw`
 ▄▄▄▄▄ ▄ ▄ ▄▄▄▄ 
 █▄▄▄▄ █ █ █  ▄▄
 █   █ █▄█ █▄▄▄█
           
 ▄▄▄  █ █ ▄▄▄▄ 
 █  ▄ █▄█ █▄▄▄▄
 ▄▄▄█ █ █ █▄▄▄▄
  RUGCHECK 3000
`;

// Funkcija koja detektuje da li je mobile
export function isMobile() {
  return window.innerWidth < 640; // 640px = sm breakpoint u Tailwind
}

// Funkcija koja detektuje da li je vrlo mali ekran
export function isVerySmall() {
  return window.innerWidth < 400; // 400px za vrlo male telefone
}

// Funkcija koja vraća prikladan banner
export function getBanner() {
  if (isVerySmall()) return TINY_BANNER;
  if (isMobile()) return MOBILE_BANNER;
  return BANNER;
}

// tanki separator (CRT-styled)
export function sep() {
  return "──────────────────────────────────────────────────────────────";
}

// pomoćni util
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// sarkastične “metrike” (malo matrix emojija / simbola)
const SNARKY_METRICS = [
  (t) => `Liquidity depth: ${rand(0, 42)}cm in a kiddie pool. 💦`,
  (t) => `Holder concentration: ${rand(69, 99)}% in top 5 wallets. 🐳`,
  (t) => `Team vesting: ${rand(0, 2)} seconds. Speedrun to exit. 🏃‍♂️`,
  (t) => `Dev wallet pings: ${rand(0, 7)}/h — someone's awake. ☕`,
  (t) => `Contract readability: obfuscated spaghetti detected. 🍝`,
  (t) => `Marketing budget: ${rand(0, 1337)} meme coins. (effective)`,
  (t) => `Auditor: ${["ChatGPT", "some guy on Telegram", "Mom", "None"][rand(0,3)]}. 🕵️‍♂️`,
  (t) => `Social sentiment: ${["copium high", "delusional bullish", "panic yeet", "cultish"][rand(0,3)]}. 📈`,
  (t) => `Top wallet renamed to "devtesting" — surely fine. 🔥`,
  (t) => `Liquidity lock expires in ${rand(1,12)}h. Good luck soldier. ⏳`,
  (t) => `Roadmap phase: ${["idea", "vibes", "pivot", "regret"][rand(0,3)]}. 🗺️`,
  (t) => `Whitepaper: ${["2 pages", "Google Doc", "JPEG", "missing"][rand(0,3)]}. 📄`,
  (t) => `Tokenomics ratio: ${rand(0,100)}% vibes / ${rand(0,100)}% chaos. ⚖️`,
  (t) => `Chart pattern: ${["bull flag", "bear rug", "dying snail", "FOMO candle"][rand(0,3)]}. 📊`,
  (t) => `Dev activity: ${rand(0,10)} commits this year. 🙃`,
  (t) => `Audit status: “self-audited” ✅`,
  (t) => `Security score: ${rand(1,10)}/10 — according to vibes.`,
  (t) => `Marketing phase: ${["airdrop", "influencer shill", "copium tweets"][rand(0,2)]}. 🪂`,
  (t) => `GitHub: last commit ${rand(2018,2025)}. 👴`,
  (t) => `Token launch time: ${rand(1,12)}am. Right after dev’s coffee. ☕`,
  (t) => `Community mods: ${rand(0,4)} and one bot. 🤖`,
  (t) => `Whitelist spots: only for ${["friends", "bots", "insiders"][rand(0,2)]}. 🎟️`,
  (t) => `DEX volume: ${rand(0,999)} USDC — mighty. 💰`,
  (t) => `Transaction fee: ${rand(5,50)}%. Premium exit tax. 🏦`,
  (t) => `LP tokens: ${["burned", "misplaced", "under pillow"][rand(0,2)]}. 🔥`,
  (t) => `Contract comments: ${rand(0,2)} lines. Pure mystery. 🧠`,
  (t) => `Honeypot status: ${["maybe", "probably", "definitely"][rand(0,2)]}. 🍯`,
  (t) => `Token logo: ${["AI-generated", "MS Paint", "stolen JPEG"][rand(0,2)]}. 🖼️`,
  (t) => `Trending on DEXTools: slot #${rand(400,999)}. 🚀`,
  (t) => `Unique holders: ${rand(3,500)} (including 2 dev wallets). 🧍‍♂️`,
  (t) => `Max wallet size: ${rand(1,99)}%. Totally fair launch. 🎯`,
  (t) => `Dev response time: ${rand(1,72)}h (if awake). 💤`,
  (t) => `Audit link: broken. 🔗`,
  (t) => `Influencer coverage: ${rand(0,5)} tweets from “CryptoBob69”. 🐦`,
  (t) => `Launchpad: ${["none", "rugpad.io", "mystery presale"][rand(0,2)]}. 🧨`,
  (t) => `Use case: ${["AI", "gaming", "revolution", "none"][rand(0,3)]}. 🤖`,
  (t) => `DAO votes: ${rand(0,100)}% in favor (by 1 wallet). 🗳️`,
  (t) => `Treasury balance: ${rand(0,99)} USDC. 💼`,
  (t) => `Telegram users: ${rand(5,5000)}, ${rand(0,99)}% bots. 🤖`,
  (t) => `Partnership announced: ${["none", "TBD", "Elon (probably)"][rand(0,2)]}. 🤝`,
  (t) => `Twitter followers: ${rand(10,50000)} (bought in bulk). 📉`,
  (t) => `Token supply: ${rand(1,1000)} trillion. Infinite potential. 💸`,
  (t) => `Utility: ${["staking", "nothing", "future plans"][rand(0,2)]}. 🔋`,
  (t) => `Volume-to-hype ratio: ${rand(0,10)}%. 📉`,
  (t) => `Rug resistance coefficient: ${rand(0,99)}%. ⚙️`,
  (t) => `Exchange listings: ${rand(0,1) ? "soon™️" : "never"}. 💹`,
  (t) => `Holders mood: ${["cope", "hopium", "denial", "euphoria"][rand(0,3)]}. 🧘`,
  (t) => `Launch type: stealth (and it shows). 👻`,
  (t) => `Liquidity lock: ${rand(0,365)} days or until morale improves. 🔒`,
  (t) => `Mint function: suspiciously still public. ⚠️`,
  (t) => `Buy tax: ${rand(0,25)}%. Sell tax: ${rand(0,99)}%. 🔪`,
  (t) => `CEX listing rumor: ${["Binance", "Wish.com"][rand(0,1)]}. 📰`,
  (t) => `Community voted to “go multi-chain” — rug on all networks. 🌐`,
  (t) => `Founder bio: ${["anonymous", "ex-McDonalds", "visionary"][rand(0,2)]}. 🧑‍💼`,
  (t) => `Liquidity ratio: ${rand(0,10)}%. That’s... brave. 💧`,
  (t) => `Chart resembles ${["Niagara Falls", "heart monitor", "ski slope"][rand(0,2)]}. 🎢`,
  (t) => `Telegram pinned message: “no FUD pls”. 🧱`,
  (t) => `Whitepaper font: Comic Sans. 📘`,
  (t) => `Gas efficiency: ${rand(0,100)}%. Burns your wallet and the planet. 🌍`,
  (t) => `Website uptime: ${rand(10,99)}%. Sometimes loads. 🌐`,
  (t) => `Treasury address looks like ${t.slice(0,6)}... suspicious. 🕳️`,
  (t) => `Liquidity pool: ${rand(0,5)}k locked, ${rand(0,100)}% owned by dev. 💰`,
  (t) => `Deployer wallet: last active 3 days ago. Nervous? 👀`,
  (t) => `AI involvement: ${["claims yes", "definitely not", "who knows"][rand(0,2)]}. 🤖`,
  (t) => `Launch announcement: posted ${rand(0,12)} minutes before. ⏱️`,
  (t) => `Discord roles: ${rand(1,20)} — hierarchy of chaos. 🎭`,
  (t) => `Team doxxed: ${["no", "maybe", "AI-generated faces"][rand(0,2)]}. 🕵️‍♀️`,
  (t) => `Marketing phase 2: ${["billboard in the desert", "NFT drop"][rand(0,1)]}. 🌵`,
  (t) => `Governance votes per wallet: unlimited. Democracy! 🗳️`,
  (t) => `Staking APY: ${rand(1000,999999)}%. Sustainability unknown. 📈`,
  (t) => `Contract verified: ${["no", "partially", "copied"][rand(0,2)]}. 🔍`,
  (t) => `Launch date: ${rand(2020,2025)} — timeless project. ⏰`,
  (t) => `Audit PDF hash: ${rand(1000,9999)}abc${rand(100,999)}. Legit. 📑`,
  (t) => `Buyback wallet: ${rand(0,1) ? "empty" : "MIA"}. 💸`,
  (t) => `Chart health: ${rand(0,100)}% FOMO. ❤️‍🔥`,
  (t) => `Token holder 1: owns ${rand(50,99)}%. Equality! 🧍‍♂️`,
  (t) => `Slogan: “Revolutionizing memes with AI.” 🚀`,
  (t) => `DEX pair age: ${rand(0,72)} hours. Infant volatility. 👶`,
  (t) => `Liquidity depth: ${rand(0,420)}$ — double it, dev. 💦`,
  (t) => `Dev said “trust me bro” ${rand(1,9)} times. 🫡`,
  (t) => `NFT integration: ${["promised", "pending", "forgotten"][rand(0,2)]}. 🖼️`,
  (t) => `Community event: ${["AMA soon", "airdrop maybe", "none"][rand(0,2)]}. 🎤`,
  (t) => `Price impact: ${rand(1,40)}% per trade. 💀`,
  (t) => `Telegram sticker pack quality: ${["S-tier", "mid", "unusable"][rand(0,2)]}. 🧩`,
  (t) => `Bot protection: ${["off", "on paper", "unknown"][rand(0,2)]}. 🤖`,
  (t) => `Founder nationality: ${["degen", "decentralized", "mars"][rand(0,2)]}. 🌍`,
  (t) => `Mainnet gas: ${rand(10,999)} gwei. Bring your wallet. ⛽`,
  (t) => `RugCheck confidence score: ${rand(0,100)}%. 🤔`,
  (t) => `AI analysis: ${["dangerously bullish", "terminal cope"][rand(0,1)]}. 💻`,
  (t) => `KYC provider: ${["none", "sketchy.io", "TBD"][rand(0,2)]}. 🧾`,
  (t) => `Top trader made ${rand(1,50)}$ profit. Living large. 💸`,
  (t) => `Launch strategy: YOLO. 💥`,
  (t) => `Community sentiment index: ${rand(1,10)}% faith left. 🙏`,
  (t) => `Liquidity migrator: still active. Brave. 🔥`,
  (t) => `Risk category: ${["nuclear", "experimental", "mild rug"][rand(0,2)]}. ☢️`,
  (t) => `Data source: ${["vibes", "gut feeling", "on-chain nonsense"][rand(0,2)]}. 📡`,
  (t) => `Final verdict: send it. 🚀`
];


const VERDICTS = [
  "Certified: Looks legit 👀 (according to my vibes).",
  "Verdict: Rug potential over 9000. 🔥",
  "Status: Safer than FTX accounting. ✅💀",
  "Community score: 420.69/10 — because memes.",
  "Risk level: Based & confused.",
  "Conclusion: Probably fine. Probably. 🤷‍♂️",
  "Smells like victory... or a slow rug. 🧐",
  "Devs cooking something — hopefully not the investors. 🍳",
  "Integrity score: slightly above Bitconnect. 📈",
  "Certified pre-rug. Collectors edition. 🪙",
  "Seems safe, unless you like keeping your money. 💰💀",
  "Approved by 3 random Telegram mods. 🧙‍♂️",
  "Auditor rating: YOLO-tier. 🪂",
  "Community consensus: cope but hopeful. 💬",
  "Not a rug, just aggressive landscaping. 🌱",
  "Passed 2 out of 7 safety checks. 🎯",
  "Liquidity depth confirmed: deeper than your patience. 💦",
  "Absolutely foolproof — according to the dev’s cousin. 🧾",
  "Could rug, could moon — 50/50 odds. 🎲",
  "Looks bullish until it doesn’t. 📉",
  "Categorized as 'probably not a Ponzi' by 1 AI. 🤖",
  "Technically not a scam, emotionally yes. 💔",
  "Audited by ChatGPT itself. Perfect score. 😇",
  "Too legit to quit, too volatile to hold. 💫",
  "Definitely not a rug — unless it is. 🧵",
  "Backed by vibes, powered by hopium. 💨",
  "Code cleaner than Binance transparency report. 🧼",
  "Slightly safer than crossing the street blindfolded. 🚗",
  "A strong maybe from our analysis team. 🤓",
  "Vibe rating: 8.7/10 — could still implode.",
  "Auditor’s note: “Good luck.” 🧿",
  "Rug-proof (until proven otherwise). 🔒",
  "Project longevity: 3 memes and a dream. 🌙",
  "Technically decentralized, emotionally unstable. 🧠",
  "Code verified by someone’s uncle in IT. 👨‍💻",
  "Looks like a project your ex would invest in. 💔",
  "Smells like hopium and instant noodles. 🍜",
  "Liquidity detected (barely). 💧",
  "Highly advanced rug-detection evasion detected. 🕵️‍♂️",
  "Fake it till you rug it. 🎭",
  "Status: diamond hands shaking violently. 💎✋",
  "Immunity to rugs: -12%. ❌",
  "Feels bullish, looks suspicious. 🧐",
  "Could survive a bear market for 4.2 minutes. 🐻",
  "Technically compliant with nothing. 📜",
  "Main dev last seen tweeting motivational quotes. 🕊️",
  "100% organic volatility. 🌿",
  "Auditor’s last words: 'Should be fine.' ⚰️",
  "Perfectly balanced, like all failed tokens. ⚖️",
  "Definitely not vaporware — just invisible progress. ☁️",
  "Project roadmap: vibes → hype → silence. 🗺️",
  "Potential: unlimited. Delivery: limited. 📦",
  "Community trust index: 3.14/10 (π edition). 🥧",
  "Passed the sniff test, failed the wallet test. 👃💸",
  "Certified to rug in style. 🧥",
  "Tokenomics inspired by ancient chaos magic. 🔮",
  "Looks as stable as Do Kwon’s alibi. 🌋",
  "CEO tweeted once — bullish sign. 🐦",
  "Backed by strong believers and stronger copium. 💨",
  "Rug risk mitigated by denial. 🙈",
  "Almost audited, spiritually approved. 🧘",
  "Survivability rating: lower than TerraUSD. 🪦",
  "Dev activity: 404 not found. 🧱",
  "Investors praying in multiple languages. 🙏",
  "Security level: same as your grandma’s Wi-Fi. 📡",
  "Giga rug energy detected. ⚡",
  "Would recommend to your enemies. 💀",
  "Seems solid — until you zoom in. 🔍",
  "Slightly safer than clicking random airdrop links. 🪂",
  "Mathematically impossible to fail (statistically speaking). 📊",
  "Potential moonshot or public execution. 🚀🔫",
  "Chart looks like my heartbeat during bull runs. ❤️‍🔥",
  "AI predicts rug, humans predict cope. 🤝",
  "Audit passed: 404 page not found. 📑",
  "Price action resembles a crime scene. 🩸",
  "A textbook example of why DYOR exists. 📚",
  "Certified by the Blockchain Astrology Institute. 🔯",
  "Future uncertain, but the memes are eternal. 🕶️",
  "Likely to outlive your patience, not your money. ⏳",
  "Investment strategy: pray and refresh chart. 📈🙏",
  "Transparency score: windowless basement. 🏚️",
  "Project runway: 2 tweets left. 🐦",
  "Community engagement: mostly bots, some souls. 🤖",
  "Smart contract, dumb decisions. 💡",
  "Fear & Greed index: 101 — off the charts. 📉",
  "Definitely something, not sure what. 🤔",
  "Innovation level: invented new ways to rug. ⚙️",
  "Token utility: none, but aesthetics 10/10. ✨",
  "Financial advice quotient: negative. 🧮",
  "Karma alignment: chaotic neutral. ⚡",
  "Big brain energy, small wallet results. 🧠💸",
  "Rug detection: inconclusive — vibes conflicting. 🌪️",
  "Integrity score: rugonomically balanced. 🪄",
  "A masterpiece of short-term optimism. 🎨",
  "Degeneracy level: over the limit. 💀",
  "Bullish divergence on the copium index. 📊",
  "Scamminess: artisanal, handcrafted. 🧵",
  "Backed by vibes and unpaid interns. 👨‍💼",
  "Governance score: 0.69/10 — democratic chaos. 🗳️",
  "Certified degen magnet. 🧲",
  "RugLikelihood™ = 99% ± hopium. 🔮",
  "Conclusion: if it pumps, you’re a genius. If not, rugged. 🤝",
  "End report: hilariously unstable but entertaining. 🎭"
];


// poruke za help/intro (Matrix zeleno će odraditi CSS)
const HELP = `${sep()}
Available commands:
/help                     show this help
/intro                    what is this?
/rugcheck <addr|name>     produce a "totally legit" analysis
/seed                     add demo reports
/theme <hacker|dark|light>
/clear                    clear the screen
${sep()}`;

const INTRO = `${sep()}
RUGSCHECK 3000 — "World’s most unreliable rug detector."
Purely for memes & education. No TX, no advice, only vibes.
Type /rugcheck 9xX4...z to begin. Stay degen, stay safe. ☘
${sep()}`;

const DEMO_TARGETS = [
  "9xX4...z (looks spicy)",
  "DOGGO (the friend's cousin's token)",
  "PUMPY (definitely not a cult)",
  "SHIBAZILLA (moon or extinction event)",
  "RUGLORD (audited by vibes)",
  "HODLON (never selling, ever)",
  "PEPE69 (because of course it exists)",
  "DEGENAI (self-learning how to rug)",
  "SAFEMOON 2.0 (this time for real)",
  "FLOKIETH (powered by barkchain)",
  "ELONSWAP (tweets move charts)",
  "BANANA DAO (organic rugs only)",
  "YOLOX (utility: none, memes: all)",
  "AIPEPE (artificial hopium)",
  "SOLONUTS (fully decentralized chaos)",
  "MCFUD (fast food tokenomics)",
  "MOONBEANS (community-owned copium)",
  "RUGSCANNER (ironic project)",
  "KITTENKOIN (meow or never)",
  "LORDOFTHEDIPS (professional dip buyer)",
  "NFTAX (every JPEG matters)",
  "DEFLATIONARYBRO (printing less sadness)",
  "FOMOBOT (buying top since 2021)",
  "BABYRUG (learning to crawl before rug)",
  "ZOOCOIN (each holder gets a free llama)",
  "ELONRUG (audited by Mars Committee)",
  "CRYPTONITE (kills bags instantly)",
  "FUDSTOPPER (temporal coping device)",
  "METHINU (definitely not that kind of gas)",
  "TENDIESDAO (fried decentralization)",
  "GMEINU (stonks meet memes)",
  "APEWARS (the NFT awakens)",
  "RUGCHECKER (checks itself, ironically)",
  "POORCHAIN (gas paid in tears)",
  "SNAKEINU (slithering liquidity)",
  "DOGERUG (multi-chain betrayal)",
  "CHAINGOBLIN (hoards your ETH)",
  "EXITIFY (instant LP escape routes)",
  "MEMEVAULT (storage for lost dreams)",
  "RUGGPT (AI-generated exit scam)",
  "HYPEPOOL (infinite optimism protocol)",
  "SPACECAT (to the litter box 🚀)",
  "HONEYLOCK (not a honeypot, promise)",
  "WAGMI V2 (copium intensifies)",
  "SIMPCHAIN (for influencers only)",
  "TOKENLESS (redefining nothingness)",
  "FOMOGENESIS (born to buy high)",
  "ZERPETUAL (forever sideways)",
  "COPEPAD (IDO for emotional support)",
  "REKTIFY (making rugs look good)",
  "BLOCKWIZARD (magic with zero logic)",
  "SCAMELON (unstoppable mars rug)",
  "SAFETRUG (oxymoron certified)",
  "YIELDLESS (guaranteed disappointment)",
  "NOTDOGE (but spiritually doge)",
  "SHILLBILL (tokenomics: tweet first)",
  "PUMPALOT (by order of King Arthur)",
  "LUNACYCLE (we repeat history proudly)",
  "MEGACOIN (like bitcoin, but worse)",
  "PEPEPAD (launching only chaos)",
  "DEADFISH (floor price champion)",
  "RUGKONG (apes together rug)",
  "TROLLNET (bridge to nowhere)",
  "BULLTRAP (looks bullish, isn’t)",
  "CRYPTOCARL (your cousin’s pick)",
  "SLOWRUG (it’s happening in real time)",
  "WALRUSWALLET (thicc liquidity 🦭)",
  "SPOOKSWAP (haunted liquidity)",
  "FUDLESS (all hopium, no logic)",
  "DEADCHAIN (EOL achieved)",
  "RUGPUMP (phase 2: betrayal)",
  "AIRDROPX (free nothing for everyone)",
  "MEMENET (where utility goes to die)",
  "HYPEINU (marketing > math)",
  "FISHNFT (JPEGs that swim)",
  "BROKENTOKEN (but community strong)",
  "SHILLTOPIA (multi-level hopium)",
  "MICROCAPGOD (worship or perish)",
  "SCAMMERINU (transparent dishonesty)",
  "MOONCHAIN (gravitationally unstable)",
  "BAGHODLER (living proof of regret)",
  "REKTRO (vintage losses)",
  "MINTON (gas fees included)",
  "YOLONET (bridging delusion across chains)",
  "STABLEGENIUS (0% stability, 100% vibes)",
  "DEGENTRON (rug engine v3)",
  "WIFEXIT (financial freedom, literally)",
  "COPECHAIN (mint your emotions)",
  "SOLANAISH (when uptime optional)",
  "ETHEREALRUG (transcendent losses)",
  "BINANCEBABY (CZ approved*)",
  "MEMEPLEX (powered by confusion)",
  "STAKEDANDRUGGED (double the pain)",
  "PAPERHANDSDAO (instant sell protocol)",
  "FUDCOIN (finally, honesty in branding)",
  "APENOMICS (banana-based finance)",
  "DUMPSTERDAO (sustainable rektonomy)",
  "COINFLIPX (scientifically random returns)",
  "WAGMIRUG (manifestation protocol)",
  "LORDPEPE (on-chain religion)",
  "RUGGENESIS (the original sin)",
  "BOREDTOKEN (dev bored too)",
  "FOMOVAX (immunity to logic)",
  "PEPEGPT (AI-generated memes on-chain)",
  "BROKCHAIN (where dreams go 404)"
];


// generator izvještaja
function genReport(target) {
  const lines = [];
  lines.push(`Analyzing: ${target}`);
  lines.push(sep());
  const shuffled = SNARKY_METRICS.sort(() => 0.5 - Math.random()).slice(0, 3);
  shuffled.forEach((fn) => lines.push(fn(target)));
  lines.push(sep());
  lines.push(VERDICTS[rand(0, VERDICTS.length - 1)]);
  lines.push(`Disclaimer: this is a MEME. Don’t trade on terminal jokes. 🤡`);
  return lines.join("\n");
}

// glavni handler komandi
export async function handleCommand(cmd, ctx) {
  const raw = cmd.startsWith("/") ? cmd.slice(1) : cmd; // dopuštamo /komande
  const [name, ...rest] = raw.split(" ");
  const arg = rest.join(" ").trim();

  switch (name) {
    case "help":
      return HELP;
    case "intro":
      return INTRO;
    case "seed": {
      // Uzmi 5 random demo targetsa umjesto svih
      const shuffledTargets = DEMO_TARGETS.sort(() => 0.5 - Math.random()).slice(0, 5);
      const out = shuffledTargets.map(genReport).join("\n\n\n\n");
      return out;
    }
    case "rugcheck": {
      if (!arg) return `Usage: /rugcheck <address|name>\nTry: /rugcheck 9xX4...z`;
      const looksLikeAddr = /[A-Za-z0-9]{5,}/.test(arg);
      const target = looksLikeAddr ? arg : arg.toUpperCase();
      return genReport(target);
    }
    default:
      return `Unknown command: ${name}\nType /help for available commands.`;
  }
}
