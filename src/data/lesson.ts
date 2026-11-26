import type { LessonContent, QuizQuestion } from "../appTypes";

export const lesson: LessonContent = {
    lessonDate: "November 29, 2026",
    lessonTitle: "The Sleep That Endangers",

    memoryVerse:
        "And he cometh and findeth them sleeping, and saith unto Peter, Simon, sleepest thou? couldest not thou watch one hour? — Mark 14:37",
    memoryVerseRef: "Mark 14:37",

    introScriptures: ["Matthew 24:43"],
    lessonIntroScriptures: ["Matthew 13:24-30"],

    introduction:
        "Sleep is a temporary state of unconsciousness of the body. Therefore nobody is aware of his environment while asleep. This is the advantage period of the evil ones to invade unsuspecting humanity. Jesus declared that the Good man (A reasonable person) will prevent the thief if he knows his hour of attack — Matt 24:43. Unfortunately, many Christians are neither watching nor careful for Satan's next proposed hit because of the relative peace and comfort they enjoy resulting from previous efforts or grace. If one sleeps with fire on the now, he will be engulfed later.",

    aims: "To awaken Christians that have lost consciousness of eminent dangers in the present world they were delivered from.",
    objectives:
        "That the believer may be equipped and ready to undo the wiles of the enemy.",

    lessonIntro:
        "A man planted good seed in his farm and while all were asleep at due time the enemy. Corrupted the farm with his seed. Removing the evil seed was predicted to be more dangerous than leaving it with the product. Consequently, the good seed and the owner suffered the unforeseen.",

    lessonPoints: [
        {
            title: "While Men Sleep (Vs 25)",
            content:
                "Having defined what sleep is we need to appreciate the fact that there are three types of sleep. The sleep of Death, Carnal rest and unawareness of environment. This lesson is referring more to the last two. The time of sleep is the time of rest, unreadiness, weakness, no watch, etc and that is why it is the enemy's advantage period. Evil is always infused at this period into mankind.",
            refs: ["Matthew 13:25"],
            subPoints: [],
        },
        {
            title: "Time of Sleep (Vs 25)",
            content:
                "Sleep is unavoidable and there is a time when everybody sleeps but Jesus revealed that it is the opportune time of Satan. You may be justified to sleep as others either physically or mentally but refuse to sleep then because an enemy is watching for opportunity.",
            refs: ["Matthew 13:25"],
            subPoints: [],
        },
        {
            title: "Good Intention Corrupted (Vs 24)",
            content:
                "This man no doubt had good intentions for planting his seed but it was the occasion of sleep that allowed for the corrupting of the seed and farm. Don't allow your good intentions, family, jobs or business, health and portion to be corrupted through sleep.",
            refs: ["Matthew 13:24"],
            subPoints: [],
        },
        {
            title: "No Immediate Solution (Vs 28–30)",
            content:
                "There was no immediate solution after the enemy sowed his tare among the good seed. The good seed had to strive to survive the hostility of the tares until the harvest time because of sleep. You don't want that to be your portion.",
            refs: ["Matthew 13:28-30"],
            subPoints: [],
        },
        {
            title: "Watching for Yourself (Mark 14:38)",
            content:
                "When men sleep only you can watch for yourself or else your portion will be corrupted. Isa 59:16. This man sowed and went to sleep but it was his work that was corrupted. See vs 24–25.",
            refs: ["Mark 14:38", "Isaiah 59:16", "Matthew 13:24-25"],
            subPoints: [],
        },
    ],

    conclusion:
        "There are dangers of sleeping just because others do. Stay awake at odd hours to protect your own. Prov 6:9–11.",
    conclusionScriptures: ["Proverbs 6:9-11"],

    application:
        "Assess your spiritual vigilance daily, refuse to sleep spiritually just because others around you do, and stay awake in watchfulness and prayer to protect your family, work, health, and God-given portion.",

    prayerPoints: [
        "Lord, awaken my spirit to the dangers that surround me. Help me to stay vigilant and alert at all times.",
        "Father, give me the grace to watch and pray even when others around me are sleeping spiritually.",
        "Holy Spirit, open my eyes to see the enemy's schemes before they manifest. Let me not be caught unaware.",
        "Lord, protect my family, business, health, and all that concerns me from the corruption that comes during times of spiritual sleep.",
        "Father, help me to be a watchman for my own soul. Give me the strength to stay awake when others sleep, that I may guard what You have entrusted to me.",
    ],
};

// NOTE: the correct answer is always written first here. The app shuffles the
// options every time the quiz starts, so learners can't just tap the first one.
export const quizQuestions: QuizQuestion[] = [
    {
        q: "According to Mark 14:37, what did Jesus ask Peter?",
        a: [
            "Could you not watch one hour?",
            "Why are you afraid?",
            "Do you love me?",
            "Where is your faith?",
        ],
        correct: 0,
        why: "In Mark 14:37, Jesus returned to find the disciples sleeping and asked Peter if he could not watch for even one hour.",
    },
    {
        q: "What happened while men slept in the parable?",
        a: [
            "The enemy sowed tares among the wheat",
            "The harvest was stolen",
            "A storm destroyed the crops",
            "Angels protected the field",
        ],
        correct: 0,
        why: "Matthew 13:25 reveals that while men slept, the enemy came and sowed tares among the wheat and went his way.",
    },
    {
        q: "What is the main aim of this lesson?",
        a: [
            "To awaken Christians who have lost consciousness of eminent dangers",
            "To teach about farming techniques",
            "To explain the benefits of physical rest",
            "To condemn all forms of sleep",
        ],
        correct: 0,
        why: "The lesson aims to awaken believers who have become spiritually unaware of imminent dangers in the world.",
    },
    {
        q: "What is the objective of this lesson?",
        a: [
            "That the believer may be equipped and ready to undo the wiles of the enemy",
            "To help Christians sleep better at night",
            "To teach proper prayer postures",
            "To explain dream interpretation",
        ],
        correct: 0,
        why: "Its objective is to equip and prepare believers to recognize and undo the schemes of the enemy.",
    },
    {
        q: "According to the lesson, when is the enemy's advantage period?",
        a: [
            "During times of sleep, rest, and unreadiness",
            "During prayer meetings",
            "During worship services",
            "During fasting periods",
        ],
        correct: 0,
        why: "Times of sleep, rest, weakness, and lack of watchfulness give the enemy an open window to infuse evil.",
    },
    {
        q: "Why was there no immediate solution after the tares were sown?",
        a: [
            "Removing the tares would uproot the wheat as well",
            "The servants were too lazy",
            "The farmer didn't care",
            "There were no tools available",
        ],
        correct: 0,
        why: "In Matthew 13:29, the owner warned that pulling up the tares prematurely would also uproot the good wheat.",
    },
    {
        q: "According to Matthew 24:43, what would the good man do if he knew when the thief would come?",
        a: [
            "He would have watched and prevented the break-in",
            "He would have called the police",
            "He would have hidden his possessions",
            "He would have moved to another house",
        ],
        correct: 0,
        why: "Jesus stated in Matthew 24:43 that a watchful homeowner who knows the hour of attack stays awake and prevents a break-in.",
    },
    {
        q: "What does the lesson warn will happen if you sleep spiritually?",
        a: [
            "Your good intentions, family, jobs, business, health and portion will be corrupted",
            "You will become physically stronger",
            "You will gain more wisdom",
            "Nothing will happen",
        ],
        correct: 0,
        why: "Spiritual sleep leaves your good intentions, family, career, business, health, and spiritual portion exposed to corruption.",
    },
];

export const quickQuestions = [
    "What are the three types of sleep in this lesson?",
    "Why is sleep the enemy's advantage period?",
    "Why couldn't the servants pull out the tares immediately?",
    "How can I watch for myself spiritually?",
];

interface Topic {
    keys: string[];
    answer: string;
}

const TOPICS: Topic[] = [
    {
        keys: ["three types", "types of sleep", "death", "carnal", "unawareness"],
        answer:
            "The lesson highlights three types of sleep: the sleep of death, carnal rest, and unawareness of one's environment—focusing especially on carnal rest and spiritual unawareness.",
    },
    {
        keys: ["advantage", "opportune", "enemy", "satan", "thief", "matthew 24:43"],
        answer:
            "Sleep is a state of unconsciousness, weakness, and unreadiness. As Matthew 24:43 and Matthew 13:25 show, when people are off guard, the enemy seizes the opportunity to strike and sow corruption.",
    },
    {
        keys: ["tare", "tares", "wheat", "uproot", "immediate solution", "harvest"],
        answer:
            "Once tares are sown while men sleep, there is no immediate fix because pulling them up prematurely would uproot the good wheat too (Matthew 13:28–30). Both must grow together until harvest.",
    },
    {
        keys: ["watch", "yourself", "mark 14:38", "isaiah 59:16", "pray", "odd hours"],
        answer:
            "When others are asleep, only you can watch for yourself through alertness and prayer (Mark 14:38; Isaiah 59:16). Staying awake at odd hours protects your family, work, health, and portion.",
    },
    {
        keys: ["memory verse", "mark 14:37", "peter", "one hour"],
        answer:
            "Our memory verse is Mark 14:37: 'And he cometh and findeth them sleeping, and saith unto Peter, Simon, sleepest thou? couldest not thou watch one hour?'",
    },
    {
        keys: ["proverbs", "sluggard", "poverty", "conclusion"],
        answer:
            "Proverbs 6:9–11 warns that a little sleep and folding of the hands invites poverty and scarcity like an armed man—reminding us not to sleep just because others do.",
    },
    {
        keys: ["pray", "prayer"],
        answer:
            "Check the Prayer tab for five dedicated prayer points asking God to awaken your spirit, keep you watchful, and protect everything entrusted to you.",
    },
    {
        keys: ["hello", "hi ", "blessing", "good morning", "good evening"],
        answer:
            "Blessings! Ask me about the three types of sleep, the parable of the wheat and tares, the enemy's advantage period, or how to stay spiritually vigilant.",
    },
];

const FALLBACK =
    "Spiritual sleep is unawareness of spiritual danger, which gives the enemy room to corrupt good seeds. Try asking about the types of sleep, the wheat and tares, or how to stay watchful.";

/** Rule-based answer: the topic with the most keyword hits wins. */
export function tutorReply(question: string): string {
    const q = ` ${question.toLowerCase()} `;
    let best: Topic | null = null;
    let bestScore = 0;
    for (const t of TOPICS) {
        const score = t.keys.reduce((n, k) => (q.includes(k) ? n + 1 : n), 0);
        if (score > bestScore) {
            best = t;
            bestScore = score;
        }
    }
    return best ? best.answer : FALLBACK;
}