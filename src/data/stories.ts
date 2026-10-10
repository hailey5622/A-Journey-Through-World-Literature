import { Story } from '../types/story';

export const STORIES: Story[] = [
  {
    id: 'alice-in-wonderland',
    title: "Alice's Adventures in Wonderland",
    author: 'Lewis Carroll',
    genre: 'Fantasy',
    genreLabel: 'Fantasy 판타지',
    level: 'Grade 6 · CEFR A1',
    coverImage: '/src/assets/images/alice_wonderland_cover_1791639286144.jpg',
    accentColor: '#3b82f6',
    summary: 'Alice follows an unusual White Rabbit with a pocket watch into a magical hole and discovers an extraordinary world.',
    targetExpressions: ['fall down', 'look at', 'run out of', 'hurry up', 'wake up'],
    glossary: {
      'pocket-watch': {
        id: 'pocket-watch',
        term: 'pocket watch',
        category: 'expression',
        illustrationIcon: 'clock',
        contextSentence: 'The White Rabbit took a golden pocket watch out of his waistcoat.',
        koreanMeaning: '회중시계 (주머니에 넣고 다니는 작은 시계)',
        options: [
          { id: '1', text: '손목에 차는 디지털 시계', isCorrect: false, explanation: '주머니에서 꺼낸 휴대용 태엽 시계예요.' },
          { id: '2', text: '주머니에 넣고 다니는 휴대용 시계', isCorrect: true, explanation: '맞아요! 주머니에 쏙 넣고 다니는 회중시계를 뜻해요.' },
          { id: '3', text: '벽에 거는 커다란 괘종시계', isCorrect: false, explanation: '토끼는 작은 주머니에서 이 시계를 꺼냈어요.' },
          { id: '4', text: '시간을 재는 모래시계', isCorrect: false, explanation: '유리 모래시계가 아니라 바늘이 째깍째깍 돌아가는 시계예요.' },
          { id: '5', text: '아침마다 울리는 자명종 알람시계', isCorrect: false, explanation: '책상에 두는 알람시계가 아니라 주머니용 휴대 시계예요.' }
        ]
      },
      'fall-down': {
        id: 'fall-down',
        term: 'fall down',
        category: 'phrasal_verb',
        illustrationIcon: 'arrow-down',
        contextSentence: 'Alice began to fall down the deep, mysterious rabbit hole.',
        koreanMeaning: '아래로 떨어지다 / 굴러 떨어지다',
        options: [
          { id: '1', text: '위로 빠르게 날아오르다', isCorrect: false, explanation: '위로 날아가는 것과 반대로 아래로 떨어지는 행동이에요.' },
          { id: '2', text: '아래로 깊이 떨어지다', isCorrect: true, explanation: '정답! 아래쪽 깊은 곳으로 떨어지는 뜻이에요.' },
          { id: '3', text: '주변을 천천히 둘러보다', isCorrect: false, explanation: '둘러보는 것이 아니라 몸이 밑으로 떨어지는 상태예요.' },
          { id: '4', text: '바닥에 편안히 눕다', isCorrect: false, explanation: '누워 쉬는 게 아니라 허공에서 떨어지는 모습이에요.' },
          { id: '5', text: '계단을 뛰어 올라가다', isCorrect: false, explanation: '위로 올라가는 것이 아니라 깊은 구멍 아래로 떨어집니다.' }
        ]
      },
      'curious': {
        id: 'curious',
        term: 'curious',
        category: 'word',
        illustrationIcon: 'sparkles',
        contextSentence: 'Alice was very curious and wanted to learn more.',
        koreanMeaning: '호기심 많은, 신기한',
        options: [
          { id: '1', text: '매우 피곤하고 졸린', isCorrect: false, explanation: '앨리스는 잠이 오지 않고 알고 싶은 게 아주 많았어요.' },
          { id: '2', text: '화가 많이 난', isCorrect: false, explanation: '화난 것이 아니라 흥미롭고 신기해하는 마음이에요.' },
          { id: '3', text: '호기심이 많은, 알고 싶어 하는', isCorrect: true, explanation: '딩동댕! 새로운 것을 궁금해하고 신기해하는 뜻이에요.' },
          { id: '4', text: '겁이 나서 떨리는', isCorrect: false, explanation: '앨리스는 무서워하기보다 신기해서 토끼를 쫓아갔어요.' },
          { id: '5', text: '배가 몹시 고픈', isCorrect: false, explanation: '음식에 대한 배고픔이 아닌 지적인 호기심이에요.' }
        ]
      },
      'hurry-up': {
        id: 'hurry-up',
        term: 'hurry up',
        category: 'phrasal_verb',
        illustrationIcon: 'zap',
        contextSentence: '"I must hurry up!" said the White Rabbit.',
        koreanMeaning: '서두르다, 재촉하다',
        options: [
          { id: '1', text: '신발 끈을 단단히 묶다', isCorrect: false, explanation: '옷차림이 아니라 약속에 늦지 않으려고 서두르는 동작이에요.' },
          { id: '2', text: '잠시 멈추고 쉬다', isCorrect: false, explanation: '쉬는 것이 아니라 늦어서 바쁘게 움직이는 뜻이에요.' },
          { id: '3', text: '노래를 크게 부르다', isCorrect: false, explanation: '노래가 아닌 빠른 이동을 뜻해요.' },
          { id: '4', text: '서두르다, 발걸음을 재촉하다', isCorrect: true, explanation: '정답이에요! 시간이나 약속에 늦지 않게 서두를 때 씁니다.' },
          { id: '5', text: '친구에게 작별 인사를 하다', isCorrect: false, explanation: '인사하는 말이 아니라 바삐 뛰어가며 한 말이에요.' }
        ]
      },
      'look-after': {
        id: 'look-after',
        term: 'look after',
        category: 'phrasal_verb',
        illustrationIcon: 'heart',
        contextSentence: 'Alice tried to look after the tiny bottle on the glass table.',
        koreanMeaning: '정성껏 돌보다 / 주의 깊게 살피다',
        options: [
          { id: '1', text: '뒤를 쳐다보다', isCorrect: false, explanation: '단순히 뒤를 보는 것이 아니라 주의 깊게 챙기는 뜻이에요.' },
          { id: '2', text: '깨뜨리다, 부수다', isCorrect: false, explanation: '망가뜨리는 것이 아니라 조심스럽게 다루는 행동이에요.' },
          { id: '3', text: '정성껏 돌보다, 주의 깊게 살피다', isCorrect: true, explanation: '완벽해요! 잘 보살피고 정성껏 챙긴다는 뜻입니다.' },
          { id: '4', text: '멀리 던져버리다', isCorrect: false, explanation: '버리는 것과 정반대예요.' },
          { id: '5', text: '숨기다, 감추다', isCorrect: false, explanation: '숨기는 것이 아니라 잘 보살피는 의미예요.' }
        ]
      },
      'shrink': {
        id: 'shrink',
        term: 'shrink',
        category: 'word',
        illustrationIcon: 'minimize',
        contextSentence: 'Alice drank from the bottle and began to shrink smaller and smaller.',
        koreanMeaning: '줄어들다, 작아지다',
        options: [
          { id: '1', text: '풍선처럼 크게 부풀어 오르다', isCorrect: false, explanation: '크기가 커지는 게 아니라 반대로 줄어들었어요.' },
          { id: '2', text: '몸의 크기가 작아지다, 줄어들다', isCorrect: true, explanation: '정답! 10인치(25cm) 정도로 앙증맞게 줄어들었어요.' },
          { id: '3', text: '다른 동물로 변신하다', isCorrect: false, explanation: '동물로 변한 게 아니라 앨리스 자신의 몸집이 줄어든 거예요.' },
          { id: '4', text: '하늘 높이 둥둥 뜨다', isCorrect: false, explanation: '떠오르는 것이 아니라 크기가 작아지는 변화예요.' },
          { id: '5', text: '빛나며 투명해지다', isCorrect: false, explanation: '투명인간이 된 것이 아니라 크기가 축소되었어요.' }
        ]
      },
      'smile-broadly': {
        id: 'smile-broadly',
        term: 'smile broadly',
        category: 'expression',
        illustrationIcon: 'smile',
        contextSentence: 'The Cheshire Cat began to smile broadly from ear to ear.',
        koreanMeaning: '활짝 환하게 웃다',
        options: [
          { id: '1', text: '입술을 앙다물고 참다', isCorrect: false, explanation: '참는 것이 아니라 입이 귀에 걸리도록 활짝 웃었어요.' },
          { id: '2', text: '슬퍼서 엉엉 울다', isCorrect: false, explanation: '우는 것과 정반대의 표정이에요.' },
          { id: '3', text: '눈을 질끈 감다', isCorrect: false, explanation: '웃는 미소에 대한 표현이에요.' },
          { id: '4', text: '입이 귀에 걸리도록 활짝 웃다', isCorrect: true, explanation: '정답이에요! 체셔 고양이의 시그니처 미소랍니다.' },
          { id: '5', text: '하품을 크게 하다', isCorrect: false, explanation: '하품이 아니라 신비로운 웃음이에요.' }
        ]
      },
      'wake-up': {
        id: 'wake-up',
        term: 'wake up',
        category: 'phrasal_verb',
        illustrationIcon: 'sun',
        contextSentence: 'Alice opened her eyes to wake up by her sister near the tree.',
        koreanMeaning: '잠에서 깨어나다, 눈을 뜨다',
        options: [
          { id: '1', text: '깊은 잠에 빠지다', isCorrect: false, explanation: '잠드는 것이 아니라 꿈에서 깨어나는 동작이에요.' },
          { id: '2', text: '잠에서 깨어나다, 눈을 뜨다', isCorrect: true, explanation: '맞아요! 잠에서 번쩍 깨어나다를 뜻해요.' },
          { id: '3', text: '책을 소리 내어 읽다', isCorrect: false, explanation: '책 읽는 행위가 아니에요.' },
          { id: '4', text: '다른 나라로 떠나다', isCorrect: false, explanation: '원더랜드에서 현실로 깨어나는 장면이에요.' },
          { id: '5', text: '나무 위로 기어오르다', isCorrect: false, explanation: '나무에 오르는 동작이 아니에요.' }
        ]
      }
    },
    pages: [
      {
        pageNumber: 1,
        title: 'Chapter 1: The Sunny Riverbank',
        text: 'Alice was sitting by the river on a warm sunny afternoon. Her sister was reading a book without pictures. Alice felt sleepy until a White Rabbit with pink eyes ran past her.',
        illustrationSvg: 'riverbank',
        interactiveTokens: [
          { text: 'Alice' }, { text: 'was' }, { text: 'sitting' }, { text: 'by' }, { text: 'the' }, { text: 'river' },
          { text: 'on' }, { text: 'a' }, { text: 'warm' }, { text: 'sunny' }, { text: 'afternoon.' },
          { text: 'Her' }, { text: 'sister' }, { text: 'was' }, { text: 'reading' }, { text: 'a' }, { text: 'book' },
          { text: 'without' }, { text: 'pictures.' },
          { text: 'Alice' }, { text: 'felt' }, { text: 'sleepy' }, { text: 'until' }, { text: 'a' }, { text: 'White' }, { text: 'Rabbit' },
          { text: 'with' }, { text: 'pink' }, { text: 'eyes' }, { text: 'ran' }, { text: 'past' }, { text: 'her.' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Chapter 2: The Rabbit and His Watch',
        text: 'The White Rabbit took a golden pocket watch out of his waistcoat. "Oh dear! I shall be too late!" he cried. Alice became very curious because rabbits do not wear waistcoats.',
        illustrationSvg: 'rabbit-watch',
        interactiveTokens: [
          { text: 'The' }, { text: 'White' }, { text: 'Rabbit' }, { text: 'took' }, { text: 'a' }, { text: 'golden' },
          { text: 'pocket watch', glossaryId: 'pocket-watch', isExpression: true },
          { text: 'out' }, { text: 'of' }, { text: 'his' }, { text: 'waistcoat.' },
          { text: '"Oh' }, { text: 'dear!' }, { text: 'I' }, { text: 'shall' }, { text: 'be' }, { text: 'too' }, { text: 'late!"' },
          { text: 'he' }, { text: 'cried.' },
          { text: 'Alice' }, { text: 'became' }, { text: 'very' },
          { text: 'curious', glossaryId: 'curious' },
          { text: 'because' }, { text: 'rabbits' }, { text: 'do' }, { text: 'not' }, { text: 'wear' }, { text: 'waistcoats.' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Chapter 3: Down the Rabbit Hole',
        text: 'Alice ran across the green field after the rabbit. He popped down a large rabbit hole under the hedge. Alice followed him and began to fall down into the deep darkness.',
        illustrationSvg: 'rabbit-hole',
        interactiveTokens: [
          { text: 'Alice' }, { text: 'ran' }, { text: 'across' }, { text: 'the' }, { text: 'green' }, { text: 'field' },
          { text: 'after' }, { text: 'the' }, { text: 'rabbit.' },
          { text: 'He' }, { text: 'popped' }, { text: 'down' }, { text: 'a' }, { text: 'large' }, { text: 'rabbit' }, { text: 'hole' },
          { text: 'under' }, { text: 'the' }, { text: 'hedge.' },
          { text: 'Alice' }, { text: 'followed' }, { text: 'him' }, { text: 'and' }, { text: 'began' }, { text: 'to' },
          { text: 'fall down', glossaryId: 'fall-down', isExpression: true },
          { text: 'into' }, { text: 'the' }, { text: 'deep' }, { text: 'darkness.' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Chapter 4: Falling Through Books and Clocks',
        text: 'The hole went straight on like a tunnel, then dipped suddenly down. Alice floated slowly past shelves of books, floating teacups, and ancient maps hanging on the stone walls.',
        illustrationSvg: 'floating-tunnel',
        interactiveTokens: [
          { text: 'The' }, { text: 'hole' }, { text: 'went' }, { text: 'straight' }, { text: 'on' }, { text: 'like' }, { text: 'a' }, { text: 'tunnel,' },
          { text: 'then' }, { text: 'dipped' }, { text: 'suddenly' }, { text: 'down.' },
          { text: 'Alice' }, { text: 'floated' }, { text: 'slowly' }, { text: 'past' }, { text: 'shelves' }, { text: 'of' }, { text: 'books,' },
          { text: 'floating' }, { text: 'teacups,' }, { text: 'and' }, { text: 'ancient' }, { text: 'maps' }, { text: 'hanging' }, { text: 'on' }, { text: 'the' }, { text: 'stone' }, { text: 'walls.' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Chapter 5: The Hall of Many Doors',
        text: 'Thump! Alice landed safely on dry leaves. In front of her was a long hallway with locked doors. On a glass table, she discovered a tiny golden key and a small bottle labeled "DRINK ME".',
        illustrationSvg: 'glass-table',
        interactiveTokens: [
          { text: 'Thump!' }, { text: 'Alice' }, { text: 'landed' }, { text: 'safely' }, { text: 'on' }, { text: 'dry' }, { text: 'leaves.' },
          { text: 'In' }, { text: 'front' }, { text: 'of' }, { text: 'her' }, { text: 'was' }, { text: 'a' }, { text: 'long' }, { text: 'hallway' },
          { text: 'with' }, { text: 'locked' }, { text: 'doors.' },
          { text: 'On' }, { text: 'a' }, { text: 'glass' }, { text: 'table,' }, { text: 'she' }, { text: 'discovered' }, { text: 'a' },
          { text: 'tiny' }, { text: 'golden' }, { text: 'key' }, { text: 'and' }, { text: 'a' }, { text: 'small' }, { text: 'bottle' },
          { text: 'labeled' }, { text: '"DRINK' }, { text: 'ME".' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Chapter 6: Shrinking Smaller',
        text: 'Alice tasted the sweet bottle. It was delicious like cherry tart and buttered toast. Soon her head began to shrink down until she was only ten inches high!',
        illustrationSvg: 'shrinking-alice',
        interactiveTokens: [
          { text: 'Alice' }, { text: 'tasted' }, { text: 'the' }, { text: 'sweet' }, { text: 'bottle.' },
          { text: 'It' }, { text: 'was' }, { text: 'delicious' }, { text: 'like' }, { text: 'cherry' }, { text: 'tart' }, { text: 'and' }, { text: 'buttered' }, { text: 'toast.' },
          { text: 'Soon' }, { text: 'her' }, { text: 'head' }, { text: 'began' }, { text: 'to' },
          { text: 'shrink', glossaryId: 'shrink' },
          { text: 'down' }, { text: 'until' }, { text: 'she' }, { text: 'was' }, { text: 'only' }, { text: 'ten' }, { text: 'inches' }, { text: 'high!' }
        ]
      },
      {
        pageNumber: 7,
        title: 'Chapter 7: Meeting the Cheshire Cat',
        text: 'Alice walked into the enchanted garden. Up in an oak tree, a striped purple cat appeared. The Cheshire Cat began to smile broadly and said, "We are all mad here!"',
        illustrationSvg: 'cheshire-cat',
        interactiveTokens: [
          { text: 'Alice' }, { text: 'walked' }, { text: 'into' }, { text: 'the' }, { text: 'enchanted' }, { text: 'garden.' },
          { text: 'Up' }, { text: 'in' }, { text: 'an' }, { text: 'oak' }, { text: 'tree,' }, { text: 'a' }, { text: 'striped' }, { text: 'purple' }, { text: 'cat' }, { text: 'appeared.' },
          { text: 'The' }, { text: 'Cheshire' }, { text: 'Cat' }, { text: 'began' }, { text: 'to' },
          { text: 'smile broadly', glossaryId: 'smile-broadly', isExpression: true },
          { text: 'and' }, { text: 'said,' }, { text: '"We' }, { text: 'are' }, { text: 'all' }, { text: 'mad' }, { text: 'here!"' }
        ]
      },
      {
        pageNumber: 8,
        title: 'Chapter 8: The Mad Tea Party',
        text: 'Under a cedar tree, the Mad Hatter and the March Hare were drinking tea. "You must hurry up and take some more tea!" called the Hatter, though the teacups were all empty.',
        illustrationSvg: 'mad-tea-party',
        interactiveTokens: [
          { text: 'Under' }, { text: 'a' }, { text: 'cedar' }, { text: 'tree,' }, { text: 'the' }, { text: 'Mad' }, { text: 'Hatter' }, { text: 'and' }, { text: 'the' }, { text: 'March' }, { text: 'Hare' }, { text: 'were' }, { text: 'drinking' }, { text: 'tea.' },
          { text: '"You' }, { text: 'must' },
          { text: 'hurry up', glossaryId: 'hurry-up', isExpression: true },
          { text: 'and' }, { text: 'take' }, { text: 'some' }, { text: 'more' }, { text: 'tea!"' },
          { text: 'called' }, { text: 'the' }, { text: 'Hatter,' }, { text: 'though' }, { text: 'the' }, { text: 'teacups' }, { text: 'were' }, { text: 'all' }, { text: 'empty.' }
        ]
      },
      {
        pageNumber: 9,
        title: 'Chapter 9: The Queen of Hearts',
        text: 'Trumpets blared loudly as the Queen of Hearts arrived with soldiers made of playing cards. "Off with their heads!" shouted the Queen, but Alice stood tall and was not afraid.',
        illustrationSvg: 'queen-cards',
        interactiveTokens: [
          { text: 'Trumpets' }, { text: 'blared' }, { text: 'loudly' }, { text: 'as' }, { text: 'the' }, { text: 'Queen' }, { text: 'of' }, { text: 'Hearts' }, { text: 'arrived' }, { text: 'with' }, { text: 'soldiers' }, { text: 'made' }, { text: 'of' }, { text: 'playing' }, { text: 'cards.' },
          { text: '"Off' }, { text: 'with' }, { text: 'their' }, { text: 'heads!"' }, { text: 'shouted' }, { text: 'the' }, { text: 'Queen,' }, { text: 'but' }, { text: 'Alice' }, { text: 'stood' }, { text: 'tall' }, { text: 'and' }, { text: 'was' }, { text: 'not' }, { text: 'afraid.' }
        ]
      },
      {
        pageNumber: 10,
        title: 'Chapter 10: Awakening by the Tree',
        text: 'The cards flew up into the air and showered down like autumn leaves. Alice opened her eyes to wake up with her sister gently brushing dead leaves from her face. It was all a wonderful dream!',
        illustrationSvg: 'awakening',
        interactiveTokens: [
          { text: 'The' }, { text: 'cards' }, { text: 'flew' }, { text: 'up' }, { text: 'into' }, { text: 'the' }, { text: 'air' }, { text: 'and' }, { text: 'showered' }, { text: 'down' }, { text: 'like' }, { text: 'autumn' }, { text: 'leaves.' },
          { text: 'Alice' }, { text: 'opened' }, { text: 'her' }, { text: 'eyes' }, { text: 'to' },
          { text: 'wake up', glossaryId: 'wake-up', isExpression: true },
          { text: 'with' }, { text: 'her' }, { text: 'sister' }, { text: 'gently' }, { text: 'brushing' }, { text: 'dead' }, { text: 'leaves' }, { text: 'from' }, { text: 'her' }, { text: 'face.' },
          { text: 'It' }, { text: 'was' }, { text: 'all' }, { text: 'a' }, { text: 'wonderful' }, { text: 'dream!' }
        ]
      }
    ],
    questions: [
      {
        id: 'alice-q1',
        questionNumber: 1,
        questionText: 'What unusual object did the White Rabbit pull out of his waistcoat pocket?',
        targetConcept: 'White Rabbit took out a golden pocket watch',
        hint: 'Think about what you use to tell the time when you are late.',
        expectedAnswerKeywords: 'pocket watch, watch, clock, golden watch',
        sampleAnswer: 'The White Rabbit pulled out a golden pocket watch.'
      },
      {
        id: 'alice-q2',
        questionNumber: 2,
        questionText: 'What happened to Alice when she drank from the small sweet bottle?',
        targetConcept: 'Alice shrank down and became ten inches tall',
        hint: 'Did her body become huge or tiny like a doll?',
        expectedAnswerKeywords: 'shrink, small, smaller, tiny, ten inches',
        sampleAnswer: 'She shrank and became very small, only ten inches high.'
      },
      {
        id: 'alice-q3',
        questionNumber: 3,
        questionText: 'Where was Alice when she finally woke up at the end of the story?',
        targetConcept: 'She woke up on the riverbank next to her sister',
        hint: 'Remember the peaceful tree and riverbank with her sister.',
        expectedAnswerKeywords: 'river, sister, tree, riverbank, grass',
        sampleAnswer: 'She woke up on the riverbank next to her sister under the tree.'
      }
    ],
    sequenceCards: [
      {
        id: 'seq-1',
        originalOrder: 1,
        phaseLabel: 'Beginning',
        title: 'Following the White Rabbit',
        description: 'Alice spots a White Rabbit with a waistcoat and pocket watch, then follows him into a deep hole.',
        sceneSvg: 'seq-rabbit'
      },
      {
        id: 'seq-2',
        originalOrder: 2,
        phaseLabel: 'Middle 1',
        title: 'Falling & Drinking the Magic Bottle',
        description: 'Alice falls down the long tunnel and drinks from a bottle to shrink small enough for the door.',
        sceneSvg: 'seq-bottle'
      },
      {
        id: 'seq-3',
        originalOrder: 3,
        phaseLabel: 'Middle 2',
        title: 'The Cat and The Mad Tea Party',
        description: 'Alice meets the grinning Cheshire Cat and joins the Mad Hatter and March Hare for crazy tea.',
        sceneSvg: 'seq-tea'
      },
      {
        id: 'seq-4',
        originalOrder: 4,
        phaseLabel: 'Ending',
        title: 'Queen of Hearts & Waking Up',
        description: 'Playing cards fly all around Alice, and she wakes up back on the warm riverbank with her sister.',
        sceneSvg: 'seq-wake'
      }
    ]
  },
  {
    id: 'tom-sawyer',
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    genre: 'Adventure',
    genreLabel: 'Adventure 모험',
    level: 'Grade 6 · CEFR A1',
    coverImage: '/src/assets/images/tom_sawyer_adventure_cover_1791639299842.jpg',
    accentColor: '#10b981',
    summary: 'Tom Sawyer tricks his friends into whitewashing Aunt Polly’s fence and sails on a wooden raft down the Mississippi river.',
    targetExpressions: ['look after', 'run away', 'make friends with', 'look forward to'],
    glossary: {
      'whitewash': {
        id: 'whitewash',
        term: 'whitewash',
        category: 'word',
        illustrationIcon: 'brush',
        contextSentence: 'Tom had to whitewash Aunt Polly’s long wooden fence on Saturday.',
        koreanMeaning: '회반죽(흰 페인트)을 칠하다',
        options: [
          { id: '1', text: '흰 옷을 깨끗이 세탁하다', isCorrect: false, explanation: '옷 빨래가 아니라 담장에 흰 칠을 하는 작업이에요.' },
          { id: '2', text: '벽이나 울타리에 흰 페인트를 칠하다', isCorrect: true, explanation: '정답! 울타리를 하얗게 칠한다는 뜻이에요.' },
          { id: '3', text: '나무를 심다', isCorrect: false, explanation: '정원 일이 아닌 페인트칠이에요.' },
          { id: '4', text: '울타리를 도끼로 부수다', isCorrect: false, explanation: '부수는 것이 아니라 깨끗하게 칠하는 벌을 받았어요.' },
          { id: '5', text: '울타리 밑을 파헤치다', isCorrect: false, explanation: '땅을 파는 행위가 아니에요.' }
        ]
      },
      'wooden-raft': {
        id: 'wooden-raft',
        term: 'wooden raft',
        category: 'expression',
        illustrationIcon: 'boat',
        contextSentence: 'Tom and Huck built a wooden raft to float down the river.',
        koreanMeaning: '통나무로 엮은 뗏목',
        options: [
          { id: '1', text: '모터가 달린 현대식 보트', isCorrect: false, explanation: '모터가 아닌 나무를 엮은 원시적인 뗏목이에요.' },
          { id: '2', text: '나무 판자로 만든 뗏목', isCorrect: true, explanation: '맞아요! 나무로 만든 뗏목을 뜻해요.' },
          { id: '3', text: '공기로 띄우는 고무 튜브', isCorrect: false, explanation: '고무가 아닌 진짜 통나무 뗏목이에요.' },
          { id: '4', text: '물속으로 다니는 잠수함', isCorrect: false, explanation: '물속으로 들어가는 배가 아니에요.' },
          { id: '5', text: '물 위에 띄운 통나무 다리', isCorrect: false, explanation: '다리가 아닌 타고 떠내려가는 배 형태예요.' }
        ]
      },
      'look-forward-to': {
        id: 'look-forward-to',
        term: 'look forward to',
        category: 'phrasal_verb',
        illustrationIcon: 'sparkles',
        contextSentence: 'The boys looked forward to sleeping under the twinkling stars.',
        koreanMeaning: '몹시 기대하다 / 고대하다',
        options: [
          { id: '1', text: '앞쪽을 똑바로 쳐다보다', isCorrect: false, explanation: '시선 방향이 아니라 마음속으로 간절히 기대하는 뜻이에요.' },
          { id: '2', text: '몹시 기대하다, 손꼽아 기다리다', isCorrect: true, explanation: '정답입니다! 시험에도 자주 나오는 중요한 표현이에요.' },
          { id: '3', text: '두려워하고 걱정하다', isCorrect: false, explanation: '걱정하는 것이 아니라 신나서 기다리는 거예요.' },
          { id: '4', text: '깜빡 잊어버리다', isCorrect: false, explanation: '잊는 것과 반대로 계속 생각하는 상태예요.' },
          { id: '5', text: '약속 시간에 늦추다', isCorrect: false, explanation: '미루는 행동이 아니에요.' }
        ]
      }
    },
    pages: [
      {
        pageNumber: 1,
        title: 'Chapter 1: The Long Saturday Morning',
        text: 'Saturday was bright and fresh, but Tom was unhappy. Aunt Polly ordered him to whitewash thirty yards of board fence nine feet high.',
        illustrationSvg: 'tom-fence',
        interactiveTokens: [
          { text: 'Saturday' }, { text: 'was' }, { text: 'bright' }, { text: 'and' }, { text: 'fresh,' },
          { text: 'but' }, { text: 'Tom' }, { text: 'was' }, { text: 'unhappy.' },
          { text: 'Aunt' }, { text: 'Polly' }, { text: 'ordered' }, { text: 'him' }, { text: 'to' },
          { text: 'whitewash', glossaryId: 'whitewash' },
          { text: 'thirty' }, { text: 'yards' }, { text: 'of' }, { text: 'board' }, { text: 'fence' },
          { text: 'nine' }, { text: 'feet' }, { text: 'high.' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Chapter 2: The Clever Artist',
        text: 'Tom had a clever idea. When his friend Ben Rogers came by eating an apple, Tom painted with great care like an artist. Ben watched with wide eyes.',
        illustrationSvg: 'tom-ben',
        interactiveTokens: [
          { text: 'Tom' }, { text: 'had' }, { text: 'a' }, { text: 'clever' }, { text: 'idea.' },
          { text: 'When' }, { text: 'his' }, { text: 'friend' }, { text: 'Ben' }, { text: 'Rogers' }, { text: 'came' }, { text: 'by' }, { text: 'eating' }, { text: 'an' }, { text: 'apple,' },
          { text: 'Tom' }, { text: 'painted' }, { text: 'with' }, { text: 'great' }, { text: 'care' }, { text: 'like' }, { text: 'an' }, { text: 'artist.' },
          { text: 'Ben' }, { text: 'watched' }, { text: 'with' }, { text: 'wide' }, { text: 'eyes.' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Chapter 3: Trading for Treasures',
        text: '"Does a boy get a chance to paint a fence every day?" said Tom. Soon Ben traded his sweet apple for a turn to paint. Other boys came and gave marbles, firecrackers, and a dead rat!',
        illustrationSvg: 'tom-treasures',
        interactiveTokens: [
          { text: '"Does' }, { text: 'a' }, { text: 'boy' }, { text: 'get' }, { text: 'a' }, { text: 'chance' }, { text: 'to' }, { text: 'paint' }, { text: 'a' }, { text: 'fence' }, { text: 'every' }, { text: 'day?"' }, { text: 'said' }, { text: 'Tom.' },
          { text: 'Soon' }, { text: 'Ben' }, { text: 'traded' }, { text: 'his' }, { text: 'sweet' }, { text: 'apple' }, { text: 'for' }, { text: 'a' }, { text: 'turn' }, { text: 'to' }, { text: 'paint.' },
          { text: 'Other' }, { text: 'boys' }, { text: 'came' }, { text: 'and' }, { text: 'gave' }, { text: 'marbles,' }, { text: 'firecrackers,' }, { text: 'and' }, { text: 'a' }, { text: 'dead' }, { text: 'rat!' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Chapter 4: The Fence is Finished',
        text: 'By afternoon, the fence had three coats of paint. Aunt Polly was amazed and gave Tom the best choice apple from the basket.',
        illustrationSvg: 'tom-aunt-polly',
        interactiveTokens: [
          { text: 'By' }, { text: 'afternoon,' }, { text: 'the' }, { text: 'fence' }, { text: 'had' }, { text: 'three' }, { text: 'coats' }, { text: 'of' }, { text: 'paint.' },
          { text: 'Aunt' }, { text: 'Polly' }, { text: 'was' }, { text: 'amazed' }, { text: 'and' }, { text: 'gave' }, { text: 'Tom' }, { text: 'the' }, { text: 'best' }, { text: 'choice' }, { text: 'apple' }, { text: 'from' }, { text: 'the' }, { text: 'basket.' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Chapter 5: Adventure on the River',
        text: 'Tom met his best friend Huckleberry Finn near the bank. Together they built a wooden raft from river timber to sail toward Jackson’s Island.',
        illustrationSvg: 'tom-raft',
        interactiveTokens: [
          { text: 'Tom' }, { text: 'met' }, { text: 'his' }, { text: 'best' }, { text: 'friend' }, { text: 'Huckleberry' }, { text: 'Finn' }, { text: 'near' }, { text: 'the' }, { text: 'bank.' },
          { text: 'Together' }, { text: 'they' }, { text: 'built' }, { text: 'a' },
          { text: 'wooden raft', glossaryId: 'wooden-raft', isExpression: true },
          { text: 'from' }, { text: 'river' }, { text: 'timber' }, { text: 'to' }, { text: 'sail' }, { text: 'toward' }, { text: 'Jackson’s' }, { text: 'Island.' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Chapter 6: Campfire Under the Stars',
        text: 'They caught fat fish and cooked them over a wood fire. The boys looked forward to sleeping peacefully under the twinkling summer sky.',
        illustrationSvg: 'tom-campfire',
        interactiveTokens: [
          { text: 'They' }, { text: 'caught' }, { text: 'fat' }, { text: 'fish' }, { text: 'and' }, { text: 'cooked' }, { text: 'them' }, { text: 'over' }, { text: 'a' }, { text: 'wood' }, { text: 'fire.' },
          { text: 'The' }, { text: 'boys' },
          { text: 'looked forward to', glossaryId: 'look-forward-to', isExpression: true },
          { text: 'sleeping' }, { text: 'peacefully' }, { text: 'under' }, { text: 'the' }, { text: 'twinkling' }, { text: 'summer' }, { text: 'sky.' }
        ]
      },
      {
        pageNumber: 7,
        title: 'Chapter 7: The Town Church Surprise',
        text: 'Back in town, the villagers thought the boys were lost. But during church on Sunday, Tom and Huck walked right down the middle aisle!',
        illustrationSvg: 'tom-church',
        interactiveTokens: [
          { text: 'Back' }, { text: 'in' }, { text: 'town,' }, { text: 'the' }, { text: 'villagers' }, { text: 'thought' }, { text: 'the' }, { text: 'boys' }, { text: 'were' }, { text: 'lost.' },
          { text: 'But' }, { text: 'during' }, { text: 'church' }, { text: 'on' }, { text: 'Sunday,' }, { text: 'Tom' }, { text: 'and' }, { text: 'Huck' }, { text: 'walked' }, { text: 'right' }, { text: 'down' }, { text: 'the' }, { text: 'middle' }, { text: 'aisle!' }
        ]
      },
      {
        pageNumber: 8,
        title: 'Chapter 8: Heroes of the Town',
        text: 'Aunt Polly hugged Tom tightly with tears of joy. The town cheered for the brave adventurers who turned hard work into pure fun.',
        illustrationSvg: 'tom-heroes',
        interactiveTokens: [
          { text: 'Aunt' }, { text: 'Polly' }, { text: 'hugged' }, { text: 'Tom' }, { text: 'tightly' }, { text: 'with' }, { text: 'tears' }, { text: 'of' }, { text: 'joy.' },
          { text: 'The' }, { text: 'town' }, { text: 'cheered' }, { text: 'for' }, { text: 'the' }, { text: 'brave' }, { text: 'adventurers' }, { text: 'who' }, { text: 'turned' }, { text: 'hard' }, { text: 'work' }, { text: 'into' }, { text: 'pure' }, { text: 'fun.' }
        ]
      }
    ],
    questions: [
      {
        id: 'tom-q1',
        questionNumber: 1,
        questionText: 'What chore did Aunt Polly tell Tom to do on Saturday morning?',
        targetConcept: 'Tom had to whitewash the big wooden fence',
        hint: 'Think about the brush, the bucket of white paint, and the fence.',
        expectedAnswerKeywords: 'whitewash, paint, fence, wall',
        sampleAnswer: 'Tom had to whitewash Aunt Polly’s wooden fence.'
      },
      {
        id: 'tom-q2',
        questionNumber: 2,
        questionText: 'How did Tom trick Ben and other boys into painting the fence for him?',
        targetConcept: 'He made painting seem like a special fun art, not work',
        hint: 'Did he pretend it was hard work or an enjoyable privilege?',
        expectedAnswerKeywords: 'fun, pretend, artist, trick, traded',
        sampleAnswer: 'He acted like an artist and made it look fun, so boys traded treasures for a turn.'
      },
      {
        id: 'tom-q3',
        questionNumber: 3,
        questionText: 'Where did Tom and Huck Finn go on their wooden raft?',
        targetConcept: 'They sailed down the Mississippi river to Jackson Island',
        hint: 'Think about the river and the island where they camped.',
        expectedAnswerKeywords: 'river, island, jackson, raft',
        sampleAnswer: 'They floated down the river to camp on Jackson’s Island.'
      }
    ],
    sequenceCards: [
      {
        id: 'tom-seq-1',
        originalOrder: 1,
        phaseLabel: 'Beginning',
        title: 'Aunt Polly’s Fence Chore',
        description: 'Tom is ordered to paint the long fence on a sunny Saturday.',
        sceneSvg: 'seq-fence'
      },
      {
        id: 'tom-seq-2',
        originalOrder: 2,
        phaseLabel: 'Middle 1',
        title: 'Trading Apple and Treasures',
        description: 'Tom tricks boys into painting while collecting apples and toys.',
        sceneSvg: 'seq-apple'
      },
      {
        id: 'tom-seq-3',
        originalOrder: 3,
        phaseLabel: 'Middle 2',
        title: 'Raft on the River',
        description: 'Tom and Huck float down the river on a wooden raft to an island.',
        sceneSvg: 'seq-raft'
      },
      {
        id: 'tom-seq-4',
        originalOrder: 4,
        phaseLabel: 'Ending',
        title: 'Returning as Heroes',
        description: 'The boys surprise the whole town at Sunday church and celebrate.',
        sceneSvg: 'seq-church'
      }
    ]
  },
  {
    id: 'poe-mystery',
    title: 'The Mystery of the Gold Bug',
    author: 'Edgar Allan Poe',
    genre: 'Horror',
    genreLabel: 'Mystery & Horror 미스터리',
    level: 'Grade 6 · CEFR A1',
    coverImage: '/src/assets/images/poe_mystery_cover_1791639320541.jpg',
    accentColor: '#8b5cf6',
    summary: 'A clever investigator and his loyal friend find a mysterious gold beetle and decode an ancient pirate cipher to locate lost treasure.',
    targetExpressions: ['search for', 'point at', 'dig up', 'figure out'],
    glossary: {
      'gold-bug': {
        id: 'gold-bug',
        term: 'gold bug',
        category: 'expression',
        illustrationIcon: 'sparkles',
        contextSentence: 'William held a strange gold bug with glittering metallic wings.',
        koreanMeaning: '황금 풍뎅이 (금빛으로 빛나는 곤충)',
        options: [
          { id: '1', text: '진짜 황금으로 빚은 조각상', isCorrect: false, explanation: '조각품이 아닌 금빛을 띤 특별한 풍뎅이 곤충이에요.' },
          { id: '2', text: '금빛 날개를 가진 신비한 풍뎅이', isCorrect: true, explanation: '맞아요! 황금빛 날개를 가진 풍뎅이를 뜻해요.' },
          { id: '3', text: '금을 찾는 기계', isCorrect: false, explanation: '탐지 기계가 아닌 곤충이에요.' },
          { id: '4', text: '황금 동전 주머니', isCorrect: false, explanation: '돈주머니가 아니에요.' },
          { id: '5', text: '반짝이는 금반지', isCorrect: false, explanation: '보석 반지가 아니에요.' }
        ]
      },
      'figure-out': {
        id: 'figure-out',
        term: 'figure out',
        category: 'phrasal_verb',
        illustrationIcon: 'brain',
        contextSentence: 'William used his sharp mind to figure out the secret code.',
        koreanMeaning: '생각해내다 / 비밀을 풀어내다',
        options: [
          { id: '1', text: '그림을 종이에 그리다', isCorrect: false, explanation: '그림 그리기가 아니라 알아내다 혹은 풀어내다라는 의미예요.' },
          { id: '2', text: '숫자를 세다', isCorrect: false, explanation: '단순 계산이 아니라 암호를 해독하는 뜻이에요.' },
          { id: '3', text: '생각해내다, 비밀 암호를 풀어내다', isCorrect: true, explanation: '정답! 문제를 고민하여 해결책을 찾아낼 때 쓰는 핵심 표현이에요.' },
          { id: '4', text: '친구에게 거짓말하다', isCorrect: false, explanation: '거짓말하는 것과 무관해요.' },
          { id: '5', text: '종이를 찢어버리다', isCorrect: false, explanation: '종이를 찢는 행동이 아니에요.' }
        ]
      }
    },
    pages: [
      {
        pageNumber: 1,
        title: 'Chapter 1: Sullivan’s Lonely Island',
        text: 'Near the coast of South Carolina, William Legrand lived in a cozy wooden cottage. He loved walking along the sand dunes collecting rare plants and shells.',
        illustrationSvg: 'poe-island',
        interactiveTokens: [
          { text: 'Near' }, { text: 'the' }, { text: 'coast' }, { text: 'of' }, { text: 'South' }, { text: 'Carolina,' },
          { text: 'William' }, { text: 'Legrand' }, { text: 'lived' }, { text: 'in' }, { text: 'a' }, { text: 'cozy' }, { text: 'wooden' }, { text: 'cottage.' },
          { text: 'He' }, { text: 'loved' }, { text: 'walking' }, { text: 'along' }, { text: 'the' }, { text: 'sand' }, { text: 'dunes' },
          { text: 'collecting' }, { text: 'rare' }, { text: 'plants' }, { text: 'and' }, { text: 'shells.' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Chapter 2: The Golden Beetle',
        text: 'One cool autumn evening, William captured an unusual gold bug with metallic markings that looked like a skull.',
        illustrationSvg: 'poe-beetle',
        interactiveTokens: [
          { text: 'One' }, { text: 'cool' }, { text: 'autumn' }, { text: 'evening,' },
          { text: 'William' }, { text: 'captured' }, { text: 'an' }, { text: 'unusual' },
          { text: 'gold bug', glossaryId: 'gold-bug', isExpression: true },
          { text: 'with' }, { text: 'metallic' }, { text: 'markings' }, { text: 'that' }, { text: 'looked' }, { text: 'like' }, { text: 'a' }, { text: 'skull.' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Chapter 3: The Secret Parchment',
        text: 'He wrapped the beetle in an old piece of yellow parchment found on the seashore. When held near the fireplace, invisible ink appeared on the paper!',
        illustrationSvg: 'poe-fire',
        interactiveTokens: [
          { text: 'He' }, { text: 'wrapped' }, { text: 'the' }, { text: 'beetle' }, { text: 'in' }, { text: 'an' }, { text: 'old' }, { text: 'piece' }, { text: 'of' }, { text: 'yellow' }, { text: 'parchment' }, { text: 'found' }, { text: 'on' }, { text: 'the' }, { text: 'seashore.' },
          { text: 'When' }, { text: 'held' }, { text: 'near' }, { text: 'the' }, { text: 'fireplace,' }, { text: 'invisible' }, { text: 'ink' }, { text: 'appeared' }, { text: 'on' }, { text: 'the' }, { text: 'paper!' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Chapter 4: Cracking the Pirate Code',
        text: 'The paper showed rows of strange numbers and symbols: 53‡‡†305)). William sat late into the night to figure out the pirate cipher.',
        illustrationSvg: 'poe-code',
        interactiveTokens: [
          { text: 'The' }, { text: 'paper' }, { text: 'showed' }, { text: 'rows' }, { text: 'of' }, { text: 'strange' }, { text: 'numbers' }, { text: 'and' }, { text: 'symbols:' }, { text: '53‡‡†305)).' },
          { text: 'William' }, { text: 'sat' }, { text: 'late' }, { text: 'into' }, { text: 'the' }, { text: 'night' }, { text: 'to' },
          { text: 'figure out', glossaryId: 'figure-out', isExpression: true },
          { text: 'the' }, { text: 'pirate' }, { text: 'cipher.' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Chapter 5: The Giant Tulip Tree',
        text: 'The cipher led them through dense pine woods to a magnificent tulip tree. Jupiter, his loyal friend, climbed up seventy feet to a high branch.',
        illustrationSvg: 'poe-tree',
        interactiveTokens: [
          { text: 'The' }, { text: 'cipher' }, { text: 'led' }, { text: 'them' }, { text: 'through' }, { text: 'dense' }, { text: 'pine' }, { text: 'woods' }, { text: 'to' }, { text: 'a' }, { text: 'magnificent' }, { text: 'tulip' }, { text: 'tree.' },
          { text: 'Jupiter,' }, { text: 'his' }, { text: 'loyal' }, { text: 'friend,' }, { text: 'climbed' }, { text: 'up' }, { text: 'seventy' }, { text: 'feet' }, { text: 'to' }, { text: 'a' }, { text: 'high' }, { text: 'branch.' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Chapter 6: Through the Skull’s Eye',
        text: 'On the high branch hung a skull. Jupiter dropped the gold bug on a cord straight through the left eye of the skull to mark the exact spot below.',
        illustrationSvg: 'poe-skull',
        interactiveTokens: [
          { text: 'On' }, { text: 'the' }, { text: 'high' }, { text: 'branch' }, { text: 'hung' }, { text: 'a' }, { text: 'skull.' },
          { text: 'Jupiter' }, { text: 'dropped' }, { text: 'the' }, { text: 'gold' }, { text: 'bug' }, { text: 'on' }, { text: 'a' }, { text: 'cord' }, { text: 'straight' }, { text: 'through' }, { text: 'the' }, { text: 'left' }, { text: 'eye' }, { text: 'of' }, { text: 'the' }, { text: 'skull' }, { text: 'to' }, { text: 'mark' }, { text: 'the' }, { text: 'exact' }, { text: 'spot' }, { text: 'below.' }
        ]
      },
      {
        pageNumber: 7,
        title: 'Chapter 7: Digging in the Dark',
        text: 'They dug deep into the sandy earth with spades under the moonlight. Their metal shovels struck something heavy and hard: an iron chest!',
        illustrationSvg: 'poe-dig',
        interactiveTokens: [
          { text: 'They' }, { text: 'dug' }, { text: 'deep' }, { text: 'into' }, { text: 'the' }, { text: 'sandy' }, { text: 'earth' }, { text: 'with' }, { text: 'spades' }, { text: 'under' }, { text: 'the' }, { text: 'moonlight.' },
          { text: 'Their' }, { text: 'metal' }, { text: 'shovels' }, { text: 'struck' }, { text: 'something' }, { text: 'heavy' }, { text: 'and' }, { text: 'hard:' }, { text: 'an' }, { text: 'iron' }, { text: 'chest!' }
        ]
      },
      {
        pageNumber: 8,
        title: 'Chapter 8: Captain Kidd’s Treasure',
        text: 'The chest opened to reveal heaps of ancient gold coins, sparkling emeralds, and diamond rings buried by Captain Kidd long ago.',
        illustrationSvg: 'poe-chest',
        interactiveTokens: [
          { text: 'The' }, { text: 'chest' }, { text: 'opened' }, { text: 'to' }, { text: 'reveal' }, { text: 'heaps' }, { text: 'of' }, { text: 'ancient' }, { text: 'gold' }, { text: 'coins,' }, { text: 'sparkling' }, { text: 'emeralds,' }, { text: 'and' }, { text: 'diamond' }, { text: 'rings' }, { text: 'buried' }, { text: 'by' }, { text: 'Captain' }, { text: 'Kidd' }, { text: 'long' }, { text: 'ago.' }
        ]
      }
    ],
    questions: [
      {
        id: 'poe-q1',
        questionNumber: 1,
        questionText: 'How did invisible ink appear on the mysterious yellow parchment?',
        targetConcept: 'When held near the warm fireplace, heat revealed the ink',
        hint: 'Was it water or the warm heat from the fireplace?',
        expectedAnswerKeywords: 'fire, heat, fireplace, warm',
        sampleAnswer: 'The ink appeared when the parchment was held near the warm fireplace.'
      },
      {
        id: 'poe-q2',
        questionNumber: 2,
        questionText: 'Where did Jupiter drop the gold bug to mark the digging spot?',
        targetConcept: 'Through the left eye of the skull on the tree branch',
        hint: 'Think about the tree and the skull.',
        expectedAnswerKeywords: 'skull, eye, left eye, tree branch',
        sampleAnswer: 'He dropped it through the left eye of the skull in the tulip tree.'
      },
      {
        id: 'poe-q3',
        questionNumber: 3,
        questionText: 'What was inside the iron chest they dug up?',
        targetConcept: 'Captain Kidd’s gold coins, emeralds, and diamonds',
        hint: 'Think of ancient pirate treasure.',
        expectedAnswerKeywords: 'gold, treasure, coins, jewels, diamonds',
        sampleAnswer: 'There were ancient gold coins, emeralds, and diamonds buried by Captain Kidd.'
      }
    ],
    sequenceCards: [
      {
        id: 'poe-seq-1',
        originalOrder: 1,
        phaseLabel: 'Beginning',
        title: 'Finding the Golden Beetle',
        description: 'William captures a metallic gold bug and wraps it in old parchment.',
        sceneSvg: 'seq-beetle'
      },
      {
        id: 'poe-seq-2',
        originalOrder: 2,
        phaseLabel: 'Middle 1',
        title: 'Decoding the Pirate Cipher',
        description: 'Fire reveals the invisible pirate code, which William decodes with logic.',
        sceneSvg: 'seq-cipher'
      },
      {
        id: 'poe-seq-3',
        originalOrder: 3,
        phaseLabel: 'Middle 2',
        title: 'The Skull in the Tulip Tree',
        description: 'Jupiter drops the bug through the skull’s eye to find the exact point.',
        sceneSvg: 'seq-tree'
      },
      {
        id: 'poe-seq-4',
        originalOrder: 4,
        phaseLabel: 'Ending',
        title: 'Unearthing Captain Kidd’s Treasure',
        description: 'They dig into the sandy soil and discover the chest of glittering gold.',
        sceneSvg: 'seq-chest'
      }
    ]
  },
  {
    id: 'peter-pan',
    title: "Peter Pan: The Boy of Neverland",
    author: 'J.M. Barrie',
    genre: 'Classics',
    genreLabel: 'Classics 고전 명작',
    level: 'Grade 6 · CEFR A1',
    coverImage: '/src/assets/images/peter_pan_cover.svg',
    accentColor: '#0284c7',
    summary: 'Wendy and her brothers learn to fly with fairy dust, traveling with Peter Pan to the magical island of Neverland.',
    targetExpressions: ['fly away', 'look after', 'believe in', 'grow up'],
    glossary: {
      'fairy-dust': {
        id: 'fairy-dust',
        term: 'fairy dust',
        category: 'expression',
        illustrationIcon: 'sparkles',
        contextSentence: 'Tinker Bell sprinkled sparkling fairy dust over the children.',
        koreanMeaning: '요정 가루 (하늘을 날게 해주는 마법 가루)',
        options: [
          { id: '1', text: '매운 고춧가루', isCorrect: false, explanation: '음식 양념이 아닌 요정의 마법 가루예요.' },
          { id: '2', text: '하늘을 날게 해주는 마법 요정 가루', isCorrect: true, explanation: '정답! 팅커벨이 뿌려주는 마법 가루예요.' },
          { id: '3', text: '눈사람을 만드는 눈가루', isCorrect: false, explanation: '차가운 눈이 아니에요.' },
          { id: '4', text: '방을 청소할 때 나오는 먼지', isCorrect: false, explanation: '청소 먼지와 달리 영롱하게 빛나요.' },
          { id: '5', text: '달콤한 설탕 가루', isCorrect: false, explanation: '달콤한 설탕이 아닌 비행 마법이에요.' }
        ]
      },
      'grow-up': {
        id: 'grow-up',
        term: 'grow up',
        category: 'phrasal_verb',
        illustrationIcon: 'user',
        contextSentence: 'Peter Pan was the boy who promised never to grow up.',
        koreanMeaning: '어른이 되다, 성장하다',
        options: [
          { id: '1', text: '식물이 시들어 죽다', isCorrect: false, explanation: '시드는 것이 아니라 사람이 자라는 표현이에요.' },
          { id: '2', text: '키가 줄어들다', isCorrect: false, explanation: '줄어드는 것과 반대예요.' },
          { id: '3', text: '어른으로 자라다, 성장하다', isCorrect: true, explanation: '맞아요! 피터팬은 어른이 되고 싶지 않은 소년이었어요.' },
          { id: '4', text: '학교를 졸업하다', isCorrect: false, explanation: '학교 졸업에만 한정되지 않는 나이 듦을 뜻해요.' },
          { id: '5', text: '새 옷을 사 입다', isCorrect: false, explanation: '옷 입기와 무관해요.' }
        ]
      }
    },
    pages: [
      {
        pageNumber: 1,
        title: 'Chapter 1: The Nursery Window',
        text: 'In London, Wendy and her younger brothers John and Michael slept peacefully in their warm nursery.',
        illustrationSvg: 'peter-nursery',
        interactiveTokens: [
          { text: 'In' }, { text: 'London,' }, { text: 'Wendy' }, { text: 'and' }, { text: 'her' }, { text: 'younger' }, { text: 'brothers' }, { text: 'John' }, { text: 'and' }, { text: 'Michael' }, { text: 'slept' }, { text: 'peacefully' }, { text: 'in' }, { text: 'their' }, { text: 'warm' }, { text: 'nursery.' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Chapter 2: Peter Pan Flies In',
        text: 'A flying boy with a green feather cap flew in through the open window with his tiny bright fairy, Tinker Bell.',
        illustrationSvg: 'peter-fly-window',
        interactiveTokens: [
          { text: 'A' }, { text: 'flying' }, { text: 'boy' }, { text: 'with' }, { text: 'a' }, { text: 'green' }, { text: 'feather' }, { text: 'cap' }, { text: 'flew' }, { text: 'in' }, { text: 'through' }, { text: 'the' }, { text: 'open' }, { text: 'window' }, { text: 'with' }, { text: 'his' }, { text: 'tiny' }, { text: 'bright' }, { text: 'fairy,' }, { text: 'Tinker' }, { text: 'Bell.' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Chapter 3: The Secret of Flying',
        text: '"Think lovely thoughts and believe!" said Peter. Tinker Bell showered fairy dust upon them, and suddenly their feet lifted off the floor.',
        illustrationSvg: 'peter-dust',
        interactiveTokens: [
          { text: '"Think' }, { text: 'lovely' }, { text: 'thoughts' }, { text: 'and' }, { text: 'believe!"' }, { text: 'said' }, { text: 'Peter.' },
          { text: 'Tinker' }, { text: 'Bell' }, { text: 'showered' },
          { text: 'fairy dust', glossaryId: 'fairy-dust', isExpression: true },
          { text: 'upon' }, { text: 'them,' }, { text: 'and' }, { text: 'suddenly' }, { text: 'their' }, { text: 'feet' }, { text: 'lifted' }, { text: 'off' }, { text: 'the' }, { text: 'floor.' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Chapter 4: Flight Over London',
        text: 'They flew out the window into the cool night air, past the giant clock tower of Big Ben, heading toward the second star to the right.',
        illustrationSvg: 'peter-bigben',
        interactiveTokens: [
          { text: 'They' }, { text: 'flew' }, { text: 'out' }, { text: 'the' }, { text: 'window' }, { text: 'into' }, { text: 'the' }, { text: 'cool' }, { text: 'night' }, { text: 'air,' }, { text: 'past' }, { text: 'the' }, { text: 'giant' }, { text: 'clock' }, { text: 'tower' }, { text: 'of' }, { text: 'Big' }, { text: 'Ben,' }, { text: 'heading' }, { text: 'toward' }, { text: 'the' }, { text: 'second' }, { text: 'star' }, { text: 'to' }, { text: 'the' }, { text: 'right.' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Chapter 5: Arriving at Neverland',
        text: 'Below them lay Neverland with blue lagoons, mermaid coves, pirate ships, and the secret underground home of the Lost Boys.',
        illustrationSvg: 'peter-neverland',
        interactiveTokens: [
          { text: 'Below' }, { text: 'them' }, { text: 'lay' }, { text: 'Neverland' }, { text: 'with' }, { text: 'blue' }, { text: 'lagoons,' }, { text: 'mermaid' }, { text: 'coves,' }, { text: 'pirate' }, { text: 'ships,' }, { text: 'and' }, { text: 'the' }, { text: 'secret' }, { text: 'underground' }, { text: 'home' }, { text: 'of' }, { text: 'the' }, { text: 'Lost' }, { text: 'Boys.' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Chapter 6: Captain Hook’s Pirate Ship',
        text: 'The wicked Captain Hook sailed the Jolly Roger. He feared only one thing: the ticking crocodile who swallowed a clock.',
        illustrationSvg: 'peter-hook',
        interactiveTokens: [
          { text: 'The' }, { text: 'wicked' }, { text: 'Captain' }, { text: 'Hook' }, { text: 'sailed' }, { text: 'the' }, { text: 'Jolly' }, { text: 'Roger.' }, { text: 'He' }, { text: 'feared' }, { text: 'only' }, { text: 'one' }, { text: 'thing:' }, { text: 'the' }, { text: 'ticking' }, { text: 'crocodile' }, { text: 'who' }, { text: 'swallowed' }, { text: 'a' }, { text: 'clock.' }
        ]
      },
      {
        pageNumber: 7,
        title: 'Chapter 7: Peter’s Brave Duel',
        text: 'Peter fought Hook on the ship’s mast with courage. Tick-tock! The crocodile arrived, and Hook fell overboard with a huge splash!',
        illustrationSvg: 'peter-duel',
        interactiveTokens: [
          { text: 'Peter' }, { text: 'fought' }, { text: 'Hook' }, { text: 'on' }, { text: 'the' }, { text: 'ship’s' }, { text: 'mast' }, { text: 'with' }, { text: 'courage.' }, { text: 'Tick-tock!' }, { text: 'The' }, { text: 'crocodile' }, { text: 'arrived,' }, { text: 'and' }, { text: 'Hook' }, { text: 'fell' }, { text: 'overboard' }, { text: 'with' }, { text: 'a' }, { text: 'huge' }, { text: 'splash!' }
        ]
      },
      {
        pageNumber: 8,
        title: 'Chapter 8: The Boy Who Never Grew Up',
        text: 'Wendy and her brothers returned home to their parents. But Peter Pan flew back to Neverland, determined never to grow up.',
        illustrationSvg: 'peter-return',
        interactiveTokens: [
          { text: 'Wendy' }, { text: 'and' }, { text: 'her' }, { text: 'brothers' }, { text: 'returned' }, { text: 'home' }, { text: 'to' }, { text: 'their' }, { text: 'parents.' },
          { text: 'But' }, { text: 'Peter' }, { text: 'Pan' }, { text: 'flew' }, { text: 'back' }, { text: 'to' }, { text: 'Neverland,' }, { text: 'determined' }, { text: 'never' }, { text: 'to' },
          { text: 'grow up', glossaryId: 'grow-up', isExpression: true },
          { text: '.' }
        ]
      }
    ],
    questions: [
      {
        id: 'peter-q1',
        questionNumber: 1,
        questionText: 'What did Tinker Bell sprinkle to help the children fly into the sky?',
        targetConcept: 'Sparkling fairy dust',
        hint: 'Think of the tiny fairy and her magical powder.',
        expectedAnswerKeywords: 'fairy dust, dust, magic dust',
        sampleAnswer: 'Tinker Bell sprinkled fairy dust so the children could fly.'
      },
      {
        id: 'peter-q2',
        questionNumber: 2,
        questionText: 'What animal was Captain Hook terrified of?',
        targetConcept: 'The ticking crocodile that swallowed a clock',
        hint: 'It goes tick-tock in the water.',
        expectedAnswerKeywords: 'crocodile, croc, ticking crocodile, clock',
        sampleAnswer: 'Captain Hook was terrified of the ticking crocodile.'
      },
      {
        id: 'peter-q3',
        questionNumber: 3,
        questionText: 'Why did Peter Pan return to Neverland instead of staying in London?',
        targetConcept: 'He wanted to stay a child and never grow up',
        hint: 'Does Peter want to become an adult or stay young forever?',
        expectedAnswerKeywords: 'never grow up, stay child, never adult, young',
        sampleAnswer: 'Peter returned because he wanted to stay a boy and never grow up.'
      }
    ],
    sequenceCards: [
      {
        id: 'peter-seq-1',
        originalOrder: 1,
        phaseLabel: 'Beginning',
        title: 'Fairy Dust in the Nursery',
        description: 'Peter Pan and Tinker Bell visit the children and teach them how to fly.',
        sceneSvg: 'seq-dust'
      },
      {
        id: 'peter-seq-2',
        originalOrder: 2,
        phaseLabel: 'Middle 1',
        title: 'Flight Over London',
        description: 'They fly past Big Ben toward the second star to the right.',
        sceneSvg: 'seq-fly'
      },
      {
        id: 'peter-seq-3',
        originalOrder: 3,
        phaseLabel: 'Middle 2',
        title: 'Battle Against Captain Hook',
        description: 'Peter duels Captain Hook while the ticking crocodile watches below.',
        sceneSvg: 'seq-hook'
      },
      {
        id: 'peter-seq-4',
        originalOrder: 4,
        phaseLabel: 'Ending',
        title: 'Return Home & Neverland',
        description: 'The children return home safely while Peter stays young forever in Neverland.',
        sceneSvg: 'seq-home'
      }
    ]
  }
];
