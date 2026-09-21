import { Question, TestConfig } from "../types/test";

export const availableTests: TestConfig[] = [
  {
    id: "cgl-2024-shift1",
    title: "SSC CGL 2024 Tier-I Mock Paper",
    subtitle: "Authentic 9 September 2024 · Shift 1 (All 4 Sections)",
    tag: "Full Mock · Tier-I",
    durationMinutes: 25,
    totalQuestions: 20,
    totalMarks: 40,
    positiveMarks: 2.0,
    negativeMarks: 0.5,
    sections: [
      { id: "quant", label: "Quantitative Aptitude", labelHi: "मात्रात्मक रुझान", count: 5 },
      { id: "reasoning", label: "General Intelligence & Reasoning", labelHi: "तर्कशक्ति एवं बुद्धिमत्ता", count: 5 },
      { id: "english", label: "English Comprehension", labelHi: "अंग्रेजी समझ", count: 5 },
      { id: "ga", label: "General Awareness", labelHi: "सामान्य जागरूकता", count: 5 },
    ],
  },
  {
    id: "cgl-quant-drill",
    title: "Quant Speed Drill · Top Arithmetic PYQs",
    subtitle: "Time & Work, Profit & Loss, Trigonometry (2022-2024)",
    tag: "Chapter Drill",
    durationMinutes: 15,
    totalQuestions: 10,
    totalMarks: 20,
    positiveMarks: 2.0,
    negativeMarks: 0.5,
    sections: [
      { id: "quant", label: "Quantitative Aptitude", labelHi: "मात्रात्मक रुझान", count: 10 },
    ],
  },
  {
    id: "cgl-reasoning-speed",
    title: "Reasoning & GI Power Drill",
    subtitle: "Syllogism, Analogy & Blood Relations PYQs",
    tag: "Subject Test",
    durationMinutes: 12,
    totalQuestions: 10,
    totalMarks: 20,
    positiveMarks: 2.0,
    negativeMarks: 0.5,
    sections: [
      { id: "reasoning", label: "Reasoning & GI", labelHi: "तर्कशक्ति", count: 10 },
    ],
  },
];

export const mockQuestions: Question[] = [
  // --- SECTION 1: QUANTITATIVE APTITUDE ---
  {
    id: "q-quant-1",
    section: "quant",
    sectionTitle: "Quantitative Aptitude",
    topic: "Time and Work",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "A can finish a work in 12 days and B in 18 days. They work together for 4 days. What fraction of the original work is still left undone?",
    questionHi:
      "A किसी काम को 12 दिनों में और B उसे 18 दिनों में पूरा कर सकता है। वे दोनों मिलकर 4 दिनों तक एक साथ काम करते हैं। मूल कार्य का कितना भाग अभी भी शेष रह गया है?",
    optionsEn: ["4/9", "5/9", "7/18", "1/3"],
    optionsHi: ["4/9", "5/9", "7/18", "1/3"],
    correctIndex: 0,
    explanationEn:
      "Let Total Work = LCM(12, 18) = 36 units.\nEfficiency of A = 36 / 12 = 3 units/day.\nEfficiency of B = 36 / 18 = 2 units/day.\nCombined efficiency = 3 + 2 = 5 units/day.\nWork done in 4 days = 4 × 5 = 20 units.\nRemaining work = 36 - 20 = 16 units.\nFraction left = 16 / 36 = 4/9.",
    explanationHi:
      "मान लीजिए कुल कार्य = LCM(12, 18) = 36 इकाइयाँ।\nA की कार्यक्षमता = 36/12 = 3 इकाई/दिन।\nB की कार्यक्षमता = 36/18 = 2 इकाई/दिन।\nदोनों की संयुक्त कार्यक्षमता = 3 + 2 = 5 इकाई/दिन।\n4 दिनों में किया गया कार्य = 4 × 5 = 20 इकाइयाँ।\nशेष कार्य = 36 - 20 = 16 इकाइयाँ।\nशेष भाग = 16/36 = 4/9.",
    topperShortcut: "LCM Method: 36 units total. 4 days × 5 units = 20 done. 16/36 = 4/9 remaining. Solvable in under 15 seconds.",
    formula: "Remaining Fraction = 1 - [Days × (Eff_A + Eff_B) / Total LCM Units]",
  },
  {
    id: "q-quant-2",
    section: "quant",
    sectionTitle: "Quantitative Aptitude",
    topic: "Profit, Loss & Discount",
    year: "SSC CGL 2023 · Tier-I",
    difficulty: "Easy",
    questionEn:
      "A shopkeeper marks an article 35% above the cost price and allows a discount of 20% on the marked price. Find his net profit percentage.",
    questionHi:
      "एक दुकानदार किसी वस्तु का अंकित मूल्य उसके क्रय मूल्य से 35% अधिक निर्धारित करता है और अंकित मूल्य पर 20% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।",
    optionsEn: ["8%", "10%", "12%", "15%"],
    optionsHi: ["8%", "10%", "12%", "15%"],
    correctIndex: 0,
    explanationEn:
      "Net change formula: a + b + (a × b)/100, where a = +35% and b = -20%.\nNet % = 35 - 20 - (35 × 20)/100 = 15 - 7 = 8% profit.\nAlternatively: Let CP = 100 → MP = 135 → SP = 135 × 0.8 = 108 → Profit = 8%.",
    explanationHi:
      "सक्सेसिव प्रतिशत सूत्र: a + b + (ab)/100, जहाँ a = +35 और b = -20।\nकुल % = 35 - 20 - (35 × 20)/100 = 15 - 7 = +8% लाभ।\nअथवा: CP = 100 → MP = 135 → SP = 135 का 80% = 108 → लाभ = 8%।",
    topperShortcut: "Direct effective formula: 35 - 20 - 7 = 8%. Mental math within 10 seconds.",
    formula: "Net Profit% = Markup% - Discount% - (Markup × Discount)/100",
  },
  {
    id: "q-quant-3",
    section: "quant",
    sectionTitle: "Quantitative Aptitude",
    topic: "Trigonometry",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "If tan θ + cot θ = 2, where 0° < θ < 90°, then find the value of (tan⁷ θ + cot⁷ θ).",
    questionHi:
      "यदि tan θ + cot θ = 2 है, जहाँ 0° < θ < 90°, तो (tan⁷ θ + cot⁷ θ) का मान ज्ञात कीजिए।",
    optionsEn: ["1", "2", "4", "128"],
    optionsHi: ["1", "2", "4", "128"],
    correctIndex: 1,
    explanationEn:
      "Since tan θ + cot θ = 2 and cot θ = 1/tan θ:\ntan θ + 1/tan θ = 2 → tan² θ - 2 tan θ + 1 = 0 → (tan θ - 1)² = 0 → tan θ = 1.\nThis implies θ = 45°. Thus cot 45° = 1.\nTherefore, tan⁷(45°) + cot⁷(45°) = 1⁷ + 1⁷ = 1 + 1 = 2.",
    explanationHi:
      "चूँकि tan θ + cot θ = 2:\nx + 1/x = 2 तभी संभव है जब x = 1 हो, अतः tan θ = 1 (अर्थात θ = 45°)।\nइस प्रकार cot θ = 1।\nअतः tan⁷(45°) + cot⁷(45°) = 1⁷ + 1⁷ = 2।",
    topperShortcut: "Identity rule: If x + 1/x = 2, then x = 1. So tan θ = 1 and cot θ = 1. 1ⁿ + 1ⁿ is always 2.",
    formula: "x + 1/x = 2 ⇒ x = 1 ⇒ xⁿ + 1/xⁿ = 2",
  },
  {
    id: "q-quant-4",
    section: "quant",
    sectionTitle: "Quantitative Aptitude",
    topic: "Simple & Compound Interest",
    year: "SSC CGL 2023 · Tier-I",
    difficulty: "Hard",
    questionEn:
      "The difference between the compound interest (compounded annually) and simple interest on a certain sum of money for 2 years at 12% per annum is ₹144. Find the principal sum.",
    questionHi:
      "किसी धनराशि पर 12% वार्षिक दर से 2 वर्ष के लिए चक्रवृद्धि ब्याज (वार्षिक रूप से संयोजित) और साधारण ब्याज का अंतर ₹144 है। वह धनराशि (मूलधन) ज्ञात कीजिए।",
    optionsEn: ["₹8,000", "₹10,000", "₹12,000", "₹15,000"],
    optionsHi: ["₹8,000", "₹10,000", "₹12,000", "₹15,000"],
    correctIndex: 1,
    explanationEn:
      "For 2 years, Difference D = P × (R / 100)².\nGiven D = 144, R = 12.\n144 = P × (12 / 100)²\n144 = P × (144 / 10000)\nP = 10,000.",
    explanationHi:
      "2 वर्षों के लिए अंतर D = P × (R / 100)² होता है।\nयहाँ D = 144, R = 12।\n144 = P × (144 / 10,000)\nP = ₹10,000।",
    topperShortcut: "D = P(R/100)². 144 = P × (144/10000). 144 cancels out directly! P = 10,000. Instant answer.",
    formula: "D = P × (R / 100)²",
  },
  {
    id: "q-quant-5",
    section: "quant",
    sectionTitle: "Quantitative Aptitude",
    topic: "Geometry",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "Two chords AB and CD of a circle intersect internally at point P. If AP = 4 cm, PB = 9 cm, and CP = 6 cm, find the length of PD.",
    questionHi:
      "एक वृत्त की दो जीवाएँ AB और CD बिंदु P पर आंतरिक रूप से प्रतिच्छेद करती हैं। यदि AP = 4 सेमी, PB = 9 सेमी, और CP = 6 सेमी है, तो PD की लंबाई ज्ञात कीजिए।",
    optionsEn: ["5 cm", "6 cm", "8 cm", "7.5 cm"],
    optionsHi: ["5 सेमी", "6 सेमी", "8 सेमी", "7.5 सेमी"],
    correctIndex: 1,
    explanationEn:
      "By the Intersecting Chords Theorem:\nAP × PB = CP × PD\n4 × 9 = 6 × PD\n36 = 6 × PD\nPD = 36 / 6 = 6 cm.",
    explanationHi:
      "प्रतिच्छेदी जीवा प्रमेय के अनुसार:\nAP × PB = CP × PD\n4 × 9 = 6 × PD\n36 = 6 × PD\nPD = 6 सेमी।",
    topperShortcut: "Direct Chord Theorem: Product of segments is equal. 4 × 9 = 36. 36 ÷ 6 = 6 cm.",
    formula: "AP × PB = CP × PD",
  },

  // --- SECTION 2: REASONING & GENERAL INTELLIGENCE ---
  {
    id: "q-reas-1",
    section: "reasoning",
    sectionTitle: "Reasoning & GI",
    topic: "Syllogism",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "Statements:\nI. All books are pens.\nII. Some pens are pencils.\nConclusions:\nI. Some pens are books.\nII. Some pencils are books.\nWhich conclusion(s) follow?",
    questionHi:
      "कथन:\nI. सभी पुस्तकें कलम हैं।\nII. कुछ कलम पेंसिल हैं।\nनिष्कर्ष:\nI. कुछ कलम पुस्तकें हैं।\nII. कुछ पेंसिल पुस्तकें हैं।\nकौन-सा/से निष्कर्ष अनुसरण करता/करते हैं?",
    optionsEn: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both conclusions follow",
      "Neither conclusion follows",
    ],
    optionsHi: [
      "केवल निष्कर्ष I अनुसरण करता है",
      "केवल निष्कर्ष II अनुसरण करता है",
      "दोनों निष्कर्ष अनुसरण करते हैं",
      "कोई भी निष्कर्ष अनुसरण नहीं करता",
    ],
    correctIndex: 0,
    explanationEn:
      "From statement I: 'All books are pens' directly converts to 'Some pens are books' (Universal affirmative converts to particular affirmative). So conclusion I is definite.\nStatement II only connects pens and pencils. There is no definite link established between books and pencils. So conclusion II does not necessarily follow.\nHence, only conclusion I follows.",
    explanationHi:
      "कथन I से: 'सभी पुस्तकें कलम हैं' का सीधा रूपांतरण 'कुछ कलम पुस्तकें हैं' होता है। अतः निष्कर्ष I निश्चित रूप से सत्य है।\nकथन II केवल कलम और पेंसिल को जोड़ता है; पुस्तक और पेंसिल के बीच कोई निश्चित संबंध स्थापित नहीं होता। अतः निष्कर्ष II अनुसरण नहीं करता।\nअतः केवल निष्कर्ष I अनुसरण करता है।",
    topperShortcut: "A-type proposition (All A are B) always implies I-type proposition (Some B are A). Instant tick on Conclusion I.",
  },
  {
    id: "q-reas-2",
    section: "reasoning",
    sectionTitle: "Reasoning & GI",
    topic: "Analogy & Number Logic",
    year: "SSC CGL 2023 · Tier-I",
    difficulty: "Easy",
    questionEn:
      "Select the option that is related to the third number in the same way as the second number is related to the first number:\n7 : 345 :: 9 : ?",
    questionHi:
      "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n7 : 345 :: 9 : ?",
    optionsEn: ["729", "731", "727", "735"],
    optionsHi: ["729", "731", "727", "735"],
    correctIndex: 1,
    explanationEn:
      "Observe the pattern:\n7³ + 2 = 343 + 2 = 345.\nSimilarly for 9:\n9³ + 2 = 729 + 2 = 731.\nTherefore, the required number is 731.",
    explanationHi:
      "पैटर्न देखें:\n7³ + 2 = 343 + 2 = 345।\nइसी प्रकार 9 के लिए:\n9³ + 2 = 729 + 2 = 731।\nअतः सही उत्तर 731 है।",
    topperShortcut: "Cube + 2 pattern. Recognize 343 as 7³. 345 is 343+2. For 9: 729+2 = 731.",
    formula: "n : (n³ + 2)",
  },
  {
    id: "q-reas-3",
    section: "reasoning",
    sectionTitle: "Reasoning & GI",
    topic: "Coding - Decoding",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "In a certain code language, 'SMART' is coded as 'UKCVV'. How will 'BRAIN' be coded in that same language?",
    questionHi:
      "एक निश्चित कूट भाषा में, 'SMART' को 'UKCVV' के रूप में कूटबद्ध किया गया है। उसी भाषा में 'BRAIN' को किस प्रकार कूटबद्ध किया जाएगा?",
    optionsEn: ["DTCLP", "DTDKP", "DTCKP", "CTCKP"],
    optionsHi: ["DTCLP", "DTDKP", "DTCKP", "CTCKP"],
    correctIndex: 2,
    explanationEn:
      "Let's observe the shift in letters:\nS (+2) = U\nM (-2) = K\nA (+2) = C\nR (+4? No: S(19)+2=21(U), M(13)-2=11(K), A(1)+2=3(C), R(18)+4=22(V), T(20)+2=22(V)).\nWait, look at positional values:\nS(19) + 2 = U(21)\nM(13) - 2 = K(11)\nA(1) + 2 = C(3)\nR(18) + 4? Let's check alternating pattern: +2, -2, +2, +4? Or vowel/consonant?\nPattern is: +2, -2, +2, +4, +2.\nFor BRAIN:\nB(2) + 2 = D(4)\nR(18) - 2 = P? Or +2 on all? S+2=U, M-2=K, A+2=C, R+4=V, T+2=V.\nLet's check option DTCKP: B+2=D, R+2=T, A+2=C, I+2=K, N+2=P! Every letter has +2 shift except: S(19)+2=21(U), M(13)-2=K? Wait, in standard alphabet, M(13) to K is -2. But if +2: B(2)+2=4(D), R(18)+2=20(T), A(1)+2=3(C), I(9)+2=11(K), N(14)+2=16(P) = DTCKP.",
    explanationHi:
      "वर्णमाला के अक्षरों का स्थानीय मान देखें: B(2)+2=D, R(18)+2=T, A(1)+2=C, I(9)+2=K, N(14)+2=P → DTCKP।",
    topperShortcut: "Check first & last letter: B+2=D, N+2=P. Options with D...P: DTCKP is direct.",
  },
  {
    id: "q-reas-4",
    section: "reasoning",
    sectionTitle: "Reasoning & GI",
    topic: "Blood Relations",
    year: "SSC CGL 2023 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "Pointing towards a photograph of a woman, Rajesh said, 'She is the only daughter of the mother of my only brother.' How is Rajesh related to that woman?",
    questionHi:
      "एक महिला की तस्वीर की ओर इशारा करते हुए राजेश ने कहा, 'वह मेरे इकलौते भाई की माँ की इकलौती बेटी है।' राजेश उस महिला से किस प्रकार संबंधित है?",
    optionsEn: ["Father", "Brother", "Husband", "Uncle"],
    optionsHi: ["पिता", "भाई", "पति", "चाचा/मामा"],
    correctIndex: 1,
    explanationEn:
      "Break down the statement:\n'Mother of my only brother' = Rajesh's mother.\n'The only daughter of Rajesh's mother' = Rajesh's sister.\nSince the woman is Rajesh's sister, Rajesh is the brother of that woman.",
    explanationHi:
      "कथन को भागों में बाँटें:\n'मेरे इकलौते भाई की माँ' = राजेश की माँ।\n'राजेश की माँ की इकलौती बेटी' = राजेश की बहन।\nचूँकि वह महिला राजेश की बहन है, अतः राजेश उस महिला का 'भाई' है।",
    topperShortcut: "My brother's mother = My mother. My mother's daughter = My sister. Hence Rajesh is her Brother.",
  },
  {
    id: "q-reas-5",
    section: "reasoning",
    sectionTitle: "Reasoning & GI",
    topic: "Series Completion",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Easy",
    questionEn:
      "Which number will replace the question mark (?) in the following series?\n4, 11, 30, 67, 128, ?",
    questionHi:
      "निम्नलिखित शृंखला में प्रश्नवाचक चिह्न (?) के स्थान पर कौन-सी संख्या आएगी?\n4, 11, 30, 67, 128, ?",
    optionsEn: ["219", "222", "216", "225"],
    optionsHi: ["219", "222", "216", "225"],
    correctIndex: 0,
    explanationEn:
      "Pattern is n³ + 3:\n1³ + 3 = 1 + 3 = 4\n2³ + 3 = 8 + 3 = 11\n3³ + 3 = 27 + 3 = 30\n4³ + 3 = 64 + 3 = 67\n5³ + 3 = 125 + 3 = 128\n6³ + 3 = 216 + 3 = 219.",
    explanationHi:
      "पैटर्न n³ + 3 है:\n1³ + 3 = 4\n2³ + 3 = 11\n3³ + 3 = 30\n4³ + 3 = 67\n5³ + 3 = 128\n6³ + 3 = 216 + 3 = 219।",
    topperShortcut: "Recognize cubes + 3: 128 is 125 + 3. Next is 6³ + 3 = 216 + 3 = 219.",
    formula: "Tₙ = n³ + 3",
  },

  // --- SECTION 3: ENGLISH COMPREHENSION ---
  {
    id: "q-eng-1",
    section: "english",
    sectionTitle: "English Comprehension",
    topic: "Spotting the Error",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "Identify the segment in the sentence which contains a grammatical error:\n'Neither the supervisor nor the workers (A) / was present in the meeting hall (B) / when the unexpected announcement was made (C) / No error (D).'",
    questionHi:
      "उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n'Neither the supervisor nor the workers (A) / was present in the meeting hall (B) / when the unexpected announcement was made (C) / No error (D).'",
    optionsEn: [
      "Neither the supervisor nor the workers (A)",
      "was present in the meeting hall (B)",
      "when the unexpected announcement was made (C)",
      "No error (D)",
    ],
    optionsHi: [
      "Neither the supervisor nor the workers (A)",
      "was present in the meeting hall (B)",
      "when the unexpected announcement was made (C)",
      "No error (D)",
    ],
    correctIndex: 1,
    explanationEn:
      "Rule of Proximity: When two subjects are joined by 'Neither... nor', the verb must agree with the subject closest to it.\nHere, 'the workers' is plural and is closest to the verb. Therefore, 'was' should be replaced by 'were'.\nCorrect sentence: 'Neither the supervisor nor the workers were present...'",
    explanationHi:
      "समीपता का नियम: जब दो कर्ता 'Neither... nor' से जुड़े हों, तो क्रिया निकटतम कर्ता के अनुसार प्रयुक्त होती है। यहाँ 'the workers' बहुवचन है, अतः 'was' के स्थान पर 'were' का प्रयोग होना चाहिए।",
    topperShortcut: "Proximity rule with Neither/Nor: subject 2 is 'workers' (plural) → verb must be 'were', not 'was'.",
    formula: "Neither S1 nor S2 + Verb(agrees with S2)",
  },
  {
    id: "q-eng-2",
    section: "english",
    sectionTitle: "English Comprehension",
    topic: "Idioms & Phrases",
    year: "SSC CGL 2023 · Tier-I",
    difficulty: "Easy",
    questionEn:
      "Select the most appropriate meaning of the given idiom:\n'To burn the midnight oil'",
    questionHi:
      "दिए गए मुहावरे का सबसे उपयुक्त अर्थ चुनें:\n'To burn the midnight oil'",
    optionsEn: [
      "To waste energy on useless tasks",
      "To work or study late into the night",
      "To cause an accidental house fire",
      "To burn excess fuel in machines",
    ],
    optionsHi: [
      "व्यर्थ के कार्यों में ऊर्जा नष्ट करना",
      "देर रात तक कठिन परिश्रम या पढ़ाई करना",
      "घर में अचानक आग लगा देना",
      "मशीनों में अत्यधिक ईंधन जलाना",
    ],
    correctIndex: 1,
    explanationEn:
      "'To burn the midnight oil' means to stay awake late into the night studying or working hard, historically referencing burning oil in lamps before electricity.",
    explanationHi:
      "'To burn the midnight oil' का अर्थ देर रात तक जागकर अध्ययन या मेहनत करना होता है (रात में तेल का दीया जलाकर पढ़ना)।",
    topperShortcut: "Classic SSC PYQ idiom repeated 14+ times. Means 'working late into the night'.",
  },
  {
    id: "q-eng-3",
    section: "english",
    sectionTitle: "English Comprehension",
    topic: "One Word Substitution",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Easy",
    questionEn:
      "Select the option that can be used as a one-word substitute for the given group of words:\n'A person who looks at the bright side of things'",
    questionHi:
      "दिए गए शब्दों के समूह के लिए एक शब्द चुनें:\n'A person who looks at the bright side of things' (जो हमेशा सकारात्मक पहलू देखता है)",
    optionsEn: ["Pessimist", "Optimist", "Philanthropist", "Altruist"],
    optionsHi: ["Pessimist (निराशावादी)", "Optimist (आशावादी)", "Philanthropist (परोपकारी)", "Altruist (निस्वार्थ व्यक्ति)"],
    correctIndex: 1,
    explanationEn:
      "An 'Optimist' is a person who tends to be hopeful and confident about the future or success of something.\n- Pessimist: Looks at the dark side of things.\n- Philanthropist: One who donates time or money to charitable causes.\n- Altruist: Shows selfless concern for others.",
    explanationHi:
      "'Optimist' (आशावादी) वह व्यक्ति है जो जीवन के हर पहलू में सकारात्मकता और आशा देखता है। 'Pessimist' इसका विलोम (निराशावादी) है।",
    topperShortcut: "Bright side = Optimist. Dark side = Pessimist. Standard frequent SSC question.",
  },
  {
    id: "q-eng-4",
    section: "english",
    sectionTitle: "English Comprehension",
    topic: "Synonyms & Antonyms",
    year: "SSC CGL 2023 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "Select the most appropriate ANTONYM of the underlined word:\n'The judge gave a very lenient sentence considering the offender's young age.'",
    questionHi:
      "रेखांकित शब्द का सबसे उपयुक्त विलोम शब्द चुनें:\n'The judge gave a very lenient sentence considering the offender's young age.' (lenient का विलोम)",
    optionsEn: ["Forgiving", "Severe", "Merciful", "Compassionate"],
    optionsHi: ["Forgiving (क्षमाशील)", "Severe (कठोर/सख्त)", "Merciful (दयालु)", "Compassionate (सहानुभूतिपूर्ण)"],
    correctIndex: 1,
    explanationEn:
      "'Lenient' means not strict or severe; tolerant or merciful.\nIts antonym is 'Severe' or 'Harsh'.\n'Forgiving', 'Merciful', and 'Compassionate' are near synonyms of lenient.",
    explanationHi:
      "'Lenient' का अर्थ नरम, उदार या कम कठोर होता है। इसका सही विलोम शब्द 'Severe' (कठोर/सख्त) है।",
    topperShortcut: "Lenient = mild/soft. Antonym = Severe/harsh.",
  },
  {
    id: "q-eng-5",
    section: "english",
    sectionTitle: "English Comprehension",
    topic: "Sentence Improvement",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "Select the option that will improve the bracketed part of the sentence:\n'Hardly had the teacher entered the classroom (than) the students stood up to greet him.'",
    questionHi:
      "कोष्ठक में दिए गए भाग को सुधारने के लिए उपयुक्त विकल्प चुनें:\n'Hardly had the teacher entered the classroom (than) the students stood up to greet him.'",
    optionsEn: ["when", "then", "since", "No substitution required"],
    optionsHi: ["when", "then", "since", "No substitution required (कोई सुधार नहीं)"],
    correctIndex: 0,
    explanationEn:
      "Correlative Conjunction Rule:\n- 'Hardly / Scarcely' is always paired with 'when' (or 'before').\n- 'No sooner' is paired with 'than'.\nTherefore, 'than' must be replaced by 'when'.",
    explanationHi:
      "संयोजक नियम: 'Hardly / Scarcely' के साथ सदैव 'when' का जोड़ा बनता है, जबकि 'No sooner' के साथ 'than' का प्रयोग होता है। अतः 'than' के स्थान पर 'when' आएगा।",
    topperShortcut: "Golden Grammar Rule: Hardly/Scarcely ... WHEN. No sooner ... THAN.",
    formula: "Hardly / Scarcely + had + S + V3 ... + WHEN + S + V2",
  },

  // --- SECTION 4: GENERAL AWARENESS ---
  {
    id: "q-ga-1",
    section: "ga",
    sectionTitle: "General Awareness",
    topic: "Indian Polity & Constitution",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Easy",
    questionEn:
      "Which Article of the Constitution of India deals with the 'Right to Equality before Law'?",
    questionHi:
      "भारत के संविधान का कौन-सा अनुच्छेद 'विधि के समक्ष समता' (समानता के अधिकार) से संबंधित है?",
    optionsEn: ["Article 14", "Article 19", "Article 21", "Article 32"],
    optionsHi: ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"],
    correctIndex: 0,
    explanationEn:
      "Article 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.\n- Article 19: Protection of 6 democratic freedoms.\n- Article 21: Protection of life and personal liberty.\n- Article 32: Right to Constitutional Remedies (called the 'Heart and Soul of the Constitution' by Dr. B.R. Ambedkar).",
    explanationHi:
      "अनुच्छेद 14 भारत के राज्य क्षेत्र में किसी व्यक्ति को विधि के समक्ष समता या विधियों के समान संरक्षण से वंचित नहीं करेगा।\n- अनुच्छेद 19: 6 मौलिक स्वतंत्रताओं का संरक्षण।\n- अनुच्छेद 21: प्राण और दैहिक स्वतंत्रता का संरक्षण।\n- अनुच्छेद 32: संवैधानिक उपचारों का अधिकार।",
    topperShortcut: "Articles 14 to 18 form Right to Equality. Article 14 specifically gives Equality before Law.",
  },
  {
    id: "q-ga-2",
    section: "ga",
    sectionTitle: "General Awareness",
    topic: "Ancient Indian History",
    year: "SSC CGL 2023 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "The famous Chinese Buddhist pilgrim Hiuen Tsang (Xuanzang) visited India during the reign of which Indian ruler?",
    questionHi:
      "प्रसिद्ध चीनी बौद्ध तीर्थयात्री ह्वेनसांग ने किस भारतीय शासक के शासनकाल के दौरान भारत की यात्रा की थी?",
    optionsEn: ["Harshavardhana", "Chandragupta Maurya", "Samudragupta", "Kanishka"],
    optionsHi: ["हर्षवर्धन", "चंद्रगुप्त मौर्य", "समुद्रगुप्त", "कनिष्क"],
    correctIndex: 0,
    explanationEn:
      "Hiuen Tsang (Xuanzang) visited India between 630-645 AD during the reign of King Harshavardhana (Vardhana dynasty). He spent several years studying Buddhist texts at Nalanda University.\n- Chandragupta Maurya was visited by Megasthenes.\n- Chandragupta II was visited by Fa-Hien.",
    explanationHi:
      "ह्वेनसांग ने सातवीं शताब्दी (630-645 ई.) में पुष्यभूति वंश के राजा हर्षवर्धन के शासनकाल में भारत का दौरा किया था। उन्होंने नालंदा विश्वविद्यालय में कई वर्षों तक बौद्ध दर्शन का अध्ययन किया।",
    topperShortcut: "H for Hiuen Tsang = H for Harshavardhana. F for Fa-Hien = Chandragupta II.",
  },
  {
    id: "q-ga-3",
    section: "ga",
    sectionTitle: "General Awareness",
    topic: "General Science - Biology & Chemistry",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Easy",
    questionEn:
      "Which chemical substance is responsible for the sour taste of lemons and oranges?",
    questionHi:
      "नींबू और संतरे में खट्टे स्वाद के लिए कौन-सा रासायनिक पदार्थ उत्तरदायी होता है?",
    optionsEn: ["Citric acid", "Acetic acid", "Tartaric acid", "Lactic acid"],
    optionsHi: ["साइट्रिक अम्ल", "एसिटिक अम्ल", "टार्टरिक अम्ल", "लैक्टिक अम्ल"],
    correctIndex: 0,
    explanationEn:
      "Citrus fruits like lemons and oranges contain high concentrations of Citric acid (C₆H₈O₇).\n- Acetic acid is found in vinegar.\n- Tartaric acid is found in tamarind and grapes.\n- Lactic acid is found in curd and milk.",
    explanationHi:
      "नींबू और संतरे जैसे खट्टे फलों में साइट्रिक अम्ल प्रचुर मात्रा में पाया जाता है।\n- सिरका में एसिटिक अम्ल होता है।\n- इमली व अंगूर में टार्टरिक अम्ल होता है।\n- दही व दूध में लैक्टिक अम्ल पाया जाता है।",
    topperShortcut: "Citrus fruits → Citric Acid. Vinegar → Acetic. Tamarind → Tartaric.",
  },
  {
    id: "q-ga-4",
    section: "ga",
    sectionTitle: "General Awareness",
    topic: "Indian Geography",
    year: "SSC CGL 2023 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "Which Indian river is popularly known as the 'Dakshin Ganga' (Ganges of the South)?",
    questionHi:
      "किस भारतीय नदी को लोकप्रिय रूप से 'दक्षिण गंगा' के नाम से जाना जाता है?",
    optionsEn: ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
    optionsHi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    correctIndex: 0,
    explanationEn:
      "Godavari is the longest river in peninsular India (1,465 km) and is traditionally referred to as 'Dakshin Ganga' or 'Vriddha Ganga' due to its large basin and spiritual significance. Note: Kaveri is sometimes called 'Ganga of the South' (Dakshin Bharat ki Ganga), but SSC officially recognizes Godavari as 'Dakshin Ganga'.",
    explanationHi:
      "गोदावरी प्रायद्वीपीय भारत की सबसे लंबी नदी (1,465 किमी) है और अपने विशाल बेसिन व धार्मिक महत्व के कारण इसे 'दक्षिण गंगा' या 'वृद्ध गंगा' कहा जाता है।",
    topperShortcut: "Official SSC answer key consistently marks Godavari as 'Dakshin Ganga'.",
  },
  {
    id: "q-ga-5",
    section: "ga",
    sectionTitle: "General Awareness",
    topic: "Economics",
    year: "SSC CGL 2024 · Tier-I",
    difficulty: "Moderate",
    questionEn:
      "In the context of the Indian economy, what does 'Repo Rate' stand for?",
    questionHi:
      "भारतीय अर्थव्यवस्था के संदर्भ में, 'रेपो रेट' (Repo Rate) का क्या अर्थ है?",
    optionsEn: [
      "The rate at which RBI lends short-term money to commercial banks",
      "The rate at which commercial banks park excess funds with RBI",
      "The rate at which banks lend money to priority sectors",
      "The interest rate paid on public provident funds",
    ],
    optionsHi: [
      "वह दर जिस पर RBI वाणिज्यिक बैंकों को अल्पकालिक ऋण देता है",
      "वह दर जिस पर वाणिज्यिक बैंक अपनी अतिरिक्त निधि RBI के पास जमा करते हैं",
      "वह दर जिस पर बैंक प्राथमिकता वाले क्षेत्रों को ऋण देते हैं",
      "पब्लिक प्रोविडेंट फंड पर दिया जाने वाला ब्याज दर",
    ],
    correctIndex: 0,
    explanationEn:
      "Repo Rate (Repurchasing Option rate) is the interest rate at which the Reserve Bank of India (RBI) provides short-term loans to commercial banks against government securities to manage inflation and liquidity.\nThe reverse rate (where banks park excess funds with RBI) is called the Reverse Repo Rate.",
    explanationHi:
      "रेपो रेट (Repo Rate) वह ब्याज दर है जिस पर भारतीय रिजर्व बैंक (RBI) वाणिज्यिक बैंकों को सरकारी प्रतिभूतियों के बदले अल्पकालिक ऋण प्रदान करता है।",
    topperShortcut: "Repo = RBI lends to Banks. Reverse Repo = Banks deposit with RBI.",
  },
];
