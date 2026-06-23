import Character from "../models/Characters.js";
import Verse from "../models/Verse.js";
import Lesson from "../models/Lesson.js";
import Story from "../models/Story.js";
import AdãoImg from "/characters/Adão.png";
import Videos from "../models/Videos.js";

const characters = [

 new Character(
    1,
    "Adão",
    AdãoImg,
    "Adão foi o primeiro ser humano criado por Deus, formado do pó da terra e animado pelo sopro divino. Viveu no Jardim do Éden em comunhão perfeita com Deus, até que a desobediência trouxe a queda da humanidade.",
    [
        new Story(
            "Gênesis",
            2,
            "A Criação de Adão",
            "https://www.bible.com/pt/bible/129/GEN.2.NVI"
        )
    ],
    [
        new Verse(
            "Então o Senhor Deus formou o homem do pó da terra e soprou-lhe nas narinas o fôlego de vida.",
            "Gênesis 2:7",
            "https://www.bible.com/pt/bible/129/GEN.2.NVI"
        ),
        new Verse(
            "E o Senhor Deus plantou um jardim no Éden, e ali colocou o homem que havia formado.",
            "Gênesis 2:8",
            "https://www.bible.com/pt/bible/129/GEN.2.NVI"
        ),
        new Verse(
            "Então Deus disse: Façamos o homem à nossa imagem, conforme a nossa semelhança.",
            "Gênesis 1:26",
            "https://www.bible.com/pt/bible/129/GEN.1.NVI"
        ),
        new Verse(
            "Porque és pó e ao pó tornarás.",
            "Gênesis 3:19",
            "https://www.bible.com/pt/bible/129/GEN.3.NVI"
        ),
    ],
    [
        new Lesson("Responsabilidade e Consequências", "A história de Adão nos ensina que nossas escolhas têm consequências que afetam não apenas a nós, mas a todos ao nosso redor."),
        new Lesson("A Graça de Deus após a Queda", "Mesmo após o pecado, Deus não abandonou Adão — fez vestes para cobri-lo e prometeu um redentor. A graça de Deus é maior que qualquer falha."),
        new Lesson("O Valor da Comunhão com Deus", "Adão vivia em comunhão perfeita com Deus. Isso nos lembra que fomos criados para esse relacionamento e que tudo mais é vazio sem ele."),
    ],
    [],
    "Terra Vermelha ou Ser Humano",
    "Primeiro Homem e Guardião do Éden",
    "Criação — aproximadamente 4000 a.C.",
    [
        {
            label: "Criação de Adão",
            description: "Deus forma Adão do pó da terra e sopra-lhe o fôlego de vida, tornando-o um ser vivente.",
            verse: "Gênesis 2:7",
            url: "https://www.bible.com/pt/bible/129/GEN.2.NVI"
        },
        {
            label: "Vida no Jardim do Éden",
            description: "Adão recebe a missão de cuidar do jardim e dar nome a todos os animais.",
            verse: "Gênesis 2:15",
            url: "https://www.bible.com/pt/bible/129/GEN.2.NVI"
        },
        {
            label: "Criação de Eva",
            description: "Deus cria Eva da costela de Adão para ser sua companheira.",
            verse: "Gênesis 2:21-22",
            url: "https://www.bible.com/pt/bible/129/GEN.2.NVI"
        },
        {
            label: "A Queda",
            description: "Adão e Eva comem do fruto proibido, desobedecendo a Deus e trazendo o pecado ao mundo.",
            verse: "Gênesis 3:6",
            url: "https://www.bible.com/pt/bible/129/GEN.3.NVI"
        },
        {
            label: "A Promessa do Redentor",
            description: "Mesmo julgando o pecado, Deus promete que a semente da mulher esmagará a cabeça da serpente — apontando para Cristo.",
            verse: "Gênesis 3:15",
            url: "https://www.bible.com/pt/bible/129/GEN.3.NVI"
        },
        {
            label: "Expulsão do Éden",
            description: "Adão e Eva são expulsos do jardim, mas Deus faz vestes para cobri-los — um ato de graça.",
            verse: "Gênesis 3:23",
            url: "https://www.bible.com/pt/bible/129/GEN.3.NVI"
        },
    ],
    [
            new Videos(
                "https://www.youtube.com/embed/iOrpNX65k7c",
                "Cristo, FONTE de PRAZER - Talmidim com Douglas Gonçalves & Alessandro Vilas Boas",
                "JesusCopy"
            ),
             new Videos(
                "https://www.youtube.com/embed/Caad4veNpLo",
                "Como Gênesis 1 comunica sobre o tema principal de toda a Bíblia",
                "BibleProject - Português"
            ),
            new Videos(
                "https://www.youtube.com/embed/fQczlodbECE",
                "A CULTURA DO JARDIM DO ÉDEN - Douglas Gonçalves",
                "JesusCopy"
            )
        ]
),

    

    new Character(
        2,
        "Eva",
        "image2.png",
        "Primeira mulher a ser criada por Deus",
        "Story 2",
        [
            new Verse(
                "'E o Senhor Deus disse: Não é bom que o homem esteja só; far-lhe-ei uma ajudadora que esteja como diante dele.'",
                "Gênesis 2:18"
            )
        ],
        [
            new Lesson("Primeira mulher a ser criada", "Eva é a primeira mulher criada por Deus, e sua história é fundamental para entender a origem da humanidade e a relação entre Deus e as pessoas.")
        ]
    ),

    new Character(
        3,
        "Caim",
        "image3.png",
        "Filho de Adão e Eva, conhecido por ter matado seu irmão Abel",
        "Story 3",
        [
            new Verse(
                "'E aconteceu que, ao fim de dias, trouxe Caim do fruto da terra uma oferta ao Senhor.'",
                "Gênesis 4:3"
            )
        ],
        [
            new Lesson("O primeiro homicídio", "A história de Caim e Abel é fundamental para entender a natureza do pecado e suas consequências.")
        ]
    ),



    new Character(
        4,
        "Abel",
        "image4.png",
        "Filho de Adão e Eva, conhecido por ter sido assassinado por seu irmão Caim",
        "Story 4",
        [
            new Verse(
                "'E o Senhor disse a Caim: Onde está Abel, teu irmão? E ele respondeu: Não sei; sou eu o guardador do meu irmão?'",
                "Gênesis 4:9"
            )
        ],
        [
            new Lesson("A vítima do primeiro homicídio", "A história de Abel é fundamental para entender a natureza do pecado e suas consequências.")
        ]
    ),


    new Character(
        5,
        "Enoque",
        "image5.png",
        "Sétimo da linhagem de Adão, conhecido por sua relação próxima com Deus",
        "Story 5",
        [
            new Verse(
                "'E andou Enoque com Deus; e não apareceu mais, porquanto Deus o tomou para si.'",
                "Gênesis 5:24"
            )
        ],
        [
            new Lesson("A vida de Enoque", "A história de Enoque é fundamental para entender a importância de ter um relacionamento próximo com Deus.")
        ]
    ),


    new Character(
        6,
        "Noé",
        "image6.png",
        "Conhecido por ter construído a arca e sobrevivido ao dilúvio",
        "Story 6",
        [
            new Verse(
                "'E Noé fez tudo conforme lhe ordenara Deus.'",
                "Gênesis 6:22"
            )
        ],
        [
            new Lesson("A obediência de Noé", "A história de Noé é fundamental para entender a importância da obediência a Deus.")
        ]
    ),



    new Character(
        7,
        "Cam",
        "image7.png",
        "Filho de Noé, conhecido por ter sido o pai de Canaã",
        "Story 7",
        [
            new Verse(
                "'E Cam, pai de Canaã, viu a nudez de seu pai e saiu a contar a seus dois irmãos.'",
                "Gênesis 9:22"
            )
        ],
        [
            new Lesson("A desobediência de Cam", "A história de Cam é fundamental para entender as consequências da desobediência a Deus.")
        ]
    ),



    new Character(
        8,
        "Abraão",
        "image8.png",
        "Patriarca do povo de Israel, conhecido por sua fé inabalável em Deus",
        "Story 8",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Abraão", "A história de Abraão é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        9,
        "Sara",
        "image9.png",
        "Esposa de Abraão, conhecida por sua beleza e por ter dado à luz a Isaque em sua velhice",
        "Story 9",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Sara", "A história de Sara é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        10,
        "Isaque",
        "image10.png",
        "Filho de Abraão e Sara, conhecido por ser o pai de Esaú e Jacó",
        "Story 10",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Isaque", "A história de Isaque é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        11,
        "Rebeca",
        "image11.png",
        "Esposa de Isaque, conhecida por sua beleza e por ter ajudado Jacó a receber a bênção de seu pai",
        "Story 11",
        [
            new Verse(
                "'E Rebeca disse a Isaque: Estou enfraquecida de tanto viver entre as filhas de Hete; se eu tiver que perder também a minha vida, que me sirva de nada.'",
                "Gênesis 27:46"
            )
        ],
        [
            new Lesson("A fé de Rebeca", "A história de Rebeca é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        12,
        "Jacó",
        "image12.png",
        "Filho de Isaque e Rebeca, conhecido por ter enganado seu pai para receber a bênção",
        "Story 12",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Jacó", "A história de Jacó é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        13,
        "José",
        "image13.png",
        "Filho de Jacó, conhecido por seus sonhos e por ter sido vendido como escravo por seus irmãos",
        "Story 13",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de José", "A história de José é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        14,
        "Moisés",
        "image14.png",
        "Líder do povo de Israel, conhecido por ter libertado os hebreus da escravidão no Egito",
        "Story 14",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Moisés", "A história de Moisés é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),

    new Character(
        15,
        "Arão",
        "image15.png",
        "Irmão de Moisés, conhecido por ter sido o primeiro sumo sacerdote de Israel",
        "Story 15",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Arão", "A história de Arão é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        16,
        "Balaão",
        "image16.png",
        "Profeta que foi contratado para amaldiçoar Israel, mas acabou abençoando-o",
        "Story 16",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Balaão", "A história de Balaão é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        17,
        "Josué",
        "image17.png",
        "Líder do povo de Israel após a morte de Moisés, conhecido por ter conduzido os israelitas na conquista de Canaã",
        "Story 17",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Josué", "A história de Josué é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        18,
        "Raabe",
        "image18.png",
        "Uma mulher de Jericó que ajudou os espias israelitas e se tornou parte da linhagem de Jesus",
        "Story 18",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Raabe", "A história de Raabe é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),

    new Character(
        19,
        "Débora",
        "image19.png",
        "Profetisa e juíza de Israel, conhecida por sua sabedoria e coragem",
        "Story 19",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Débora", "A história de Débora é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        20,
        "Gideão",
        "image20.png",
        "Juiz de Israel, conhecido por sua vitória sobre os midianitas com apenas 300 homens",
        "Story 20",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Gideão", "A história de Gideão é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        21,
        "Sansão",
        "image21.png",
        "Juiz de Israel, conhecido por sua força sobrenatural e sua queda devido à traição de Dalila",
        "Story 21",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Sansão", "A história de Sansão é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        22,
        "Rute",
        "image22.png",
        "Moabita que se tornou parte da linhagem de Jesus ao acompanhar sua sogra Noemi",
        "Story 22",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Rute", "A história de Rute é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        23,
        "Samuel",
        "image23.png",
        "Profeta e juiz de Israel, conhecido por ungir os primeiros reis de Israel",
        "Story 23",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Samuel", "A história de Samuel é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        24,
        "Saul",
        "image24.png",
        "Primeiro rei de Israel, ungido por Samuel, mas que acabou se afastando de Deus",
        "Story 24",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Saul", "A história de Saul é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        25,
        "Davi",
        "image25.png",
        "Rei de Israel, conhecido por sua coragem ao enfrentar Golias e por seu coração segundo Deus",
        "Story 25",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Davi", "A história de Davi é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        26,
        "Mical",
        "image26.png",
        "Filha de Saul e esposa de Davi, conhecida por sua lealdade a Davi",
        "Story 26",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Mical", "A história de Mical é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        27,
        "Bate-Seba",
        "image27.png",
        "Esposa de Davi e mãe de Salomão, conhecida por sua beleza e pela história de seu relacionamento com Davi",
        "Story 27",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Bate-Seba", "A história de Bate-Seba é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        28,
        "Jônatas",
        "image28.png",
        "Filho de Saul e amigo de Davi, conhecido por sua lealdade e coragem",
        "Story 28",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Jônatas", "A história de Jônatas é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),

    new Character(
        29,
        "Obede-Edom",
        "image29.png",
        "Um levita que recebeu a arca da aliança em sua casa e foi abençoado por Deus",
        "Story 29",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Obede-Edom", "A história de Obede-Edom é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        30,
        "Salomão",
        "image30.png",
        "Filho de Davi e Bate-Seba, conhecido por sua sabedoria e por ter construído o Templo de Jerusalém",
        "Story 30",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Salomão", "A história de Salomão é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        31,
        "Jeroboão",
        "image31.png",
        "Rei de Israel, conhecido por ter se rebelado contra Roboão e por ter estabelecido o reino do Norte",
        "Story 31",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Jeroboão", "A história de Jeroboão é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),

    new Character(
        32,
        "Roboão",
        "image32.png",
        "Rei de Judá, conhecido por sua arrogância e pela divisão do reino",
        "Story 32",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Roboão", "A história de Roboão é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),

    new Character(
        33,
        "Zedequias",
        "image33.png",
        "Último rei de Judá, conhecido por sua fraqueza e pela queda de Jerusalém",
        "Story 33",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Zedequias", "A história de Zedequias é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),




    new Character(
        34,
        "Elias",
        "image34.png",
        "Um dos maiores profetas de Israel, conhecido por sua coragem e fé em Deus",
        "Story 34",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Elias", "A história de Elias é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        35,
        "Eliseu",
        "image35.png",
        "Sucessor de Elias, conhecido por seus milagres e por sua fidelidade a Deus",
        "Story 35",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Eliseu", "A história de Eliseu é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        36,
        "Jezabel",
        "image36.png",
        "Rainha de Israel, conhecida por sua idolatria e por ter perseguido os profetas de Deus",
        "Story 36",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Jezabel", "A história de Jezabel é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        37,
        "Josias",
        "image37.png",
        "Rei de Judá, conhecido por sua reforma religiosa e por ter encontrado o Livro da Lei",
        "Story 37",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Josias", "A história de Josias é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),




    new Character(
        38,
        "Esdras",
        "image38.png",
        "Escriba e sacerdote, conhecido por sua liderança na volta do exílio e na reconstrução do templo",
        "Story 38",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Esdras", "A história de Esdras é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        39,
        "Neemias",
        "image39.png",
        "Governador de Judá, conhecido por sua liderança na reconstrução dos muros de Jerusalém",
        "Story 39",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Neemias", "A história de Neemias é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        40,
        "Ester",
        "image40.png",
        "Rainha da Pérsia, conhecida por sua coragem e por ter salvado seu povo da destruição",
        "Story 40",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Ester", "A história de Ester é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),

    new Character(
        41,
        "Mardoqueu",
        "image41.png",
        "Primo de Ester, conhecido por sua fidelidade a Deus e por ter ajudado a salvar seu povo",
        "Story 41",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Mardoqueu", "A história de Mardoqueu é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        42,
        "Jó",
        "image42.png",
        "Um homem justo que sofreu grandes provações, conhecido por sua paciência e fé em Deus",
        "Story 42",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Jó", "A história de Jó é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        43,
        "Ló",
        "image43.png",
        "Sobrinho de Abraão, conhecido por sua vida em Sodoma e Gomorra",
        "Story 43",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Ló", "A história de Ló é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        44,
        "Elifaz, Bildade, Zofar e Eliú",
        "image44.png",
        "Amigos de Jó, conhecidos por suas tentativas de confortá-lo em meio ao sofrimento",
        "Story 44",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé dos amigos de Jó", "A história dos amigos de Jó é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        45,
        "Isaias",
        "image45.png",
        "Profeta do Antigo Testamento, conhecido por suas profecias sobre a vinda do Messias",
        "Story 45",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Isaias", "A história de Isaias é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        46,
        "Jeremias",
        "image46.png",
        "Profeta do Antigo Testamento, conhecido por suas lamentações e por ter anunciado a destruição de Jerusalém",
        "Story 46",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Jeremias", "A história de Jeremias é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),



    new Character(
        47,
        "Ezequiel",
        "image47.png",
        "Profeta do Antigo Testamento, conhecido por suas visões e por ter anunciado a restauração de Israel",
        "Story 47",
        [
            new Verse(
                "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                "Gênesis 17:4"
            )
        ],
        [
            new Lesson("A fé de Ezequiel", "A história de Ezequiel é fundamental para entender a importância da fé e da obediência a Deus.")
        ]
    ),




        new Character(
            48,
            "Daniel",
            "image48.png",
            "Profeta do Antigo Testamento, conhecido por sua sabedoria e por ter interpretado sonhos",
            "Story 48",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Daniel", "A história de Daniel é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            49,
            "Sadraque, Mesaque e Abidego",
            "image49.png",
            "Três jovens hebreus que foram lançados na fornalha ardente por se recusarem a adorar a estátua de Nabucodonosor",
            "Story 49",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Sadraque, Mesaque e Abidego", "A história de Sadraque, Mesaque e Abidego é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),

        

        new Character(
            50,
            "Oséias",
            "image50.png",
            "Profeta do Antigo Testamento, conhecido por suas profecias sobre o amor de Deus por Israel",
            "Story 50",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Oséias", "A história de Oséias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            51,
            "Jonas",
            "image51.png",
            "Profeta do Antigo Testamento, conhecido por ter sido enviado a Nínive e por sua resistência inicial à missão",
            "Story 51",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Jonas", "A história de Jonas é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            52,
            "Obadias",
            "image52.png",
            "Profeta do Antigo Testamento, conhecido por sua profecia contra Edom",
            "Story 52",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Obadias", "A história de Obadias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            53,
            "Joel",
            "image53.png",
            "Profeta do Antigo Testamento, conhecido por suas profecias sobre o dia do Senhor",
            "Story 53",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Joel", "A história de Joel é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            54,
            "Amós",
            "image54.png",
            "Profeta do Antigo Testamento, conhecido por suas profecias sobre a justiça social",
            "Story 54",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Amós", "A história de Amós é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            55,
            "Miquéias",
            "image55.png",
            "Profeta do Antigo Testamento, conhecido por suas profecias sobre o juízo e a esperança",
            "Story 55",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Miquéias", "A história de Miquéias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            56,
            "Naum",
            "image56.png",
            "Profeta do Antigo Testamento, conhecido por sua profecia contra Nínive",
            "Story 56",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Naum", "A história de Naum é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            57,
            "Habacuque",
            "image57.png",
            "Profeta do Antigo Testamento, conhecido por suas perguntas a Deus sobre a injustiça",
            "Story 57",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Habacuque", "A história de Habacuque é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            58,
            "Sofonias",
            "image58.png",
            "Profeta do Antigo Testamento, conhecido por suas profecias sobre o dia do Senhor",
            "Story 58",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Sofonias", "A história de Sofonias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            59,
            "Ageu",
            "image59.png",
            "Profeta do Antigo Testamento, conhecido por suas mensagens de encorajamento para a reconstrução do templo",
            "Story 59",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Ageu", "A história de Ageu é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            60,
            "Zacarias",
            "image60.png",
            "Profeta do Antigo Testamento, conhecido por suas visões e encorajamento ao povo",
            "Story 60",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Zacarias", "A história de Zacarias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            61,
            "Malaquias",
            "image61.png",
            "Profeta do Antigo Testamento, conhecido por suas mensagens sobre a adoração verdadeira",
            "Story 61",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Malaquias", "A história de Malaquias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),

///////////// ------------------   NOVO TESTAMENTO ----------------------- ///////////////////////

        new Character(
            62,
            "Jesus Cristo",
            "image62.png",
            "Figura central do cristianismo, conhecido por seus ensinamentos e sacrifício",
            "Story 62",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé em Jesus Cristo", "A história de Jesus é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            63,
            "Maria",
            "image63.png",
            "Mãe de Jesus, conhecida por sua fé e obediência a Deus",
            "Story 63",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Maria", "A história de Maria é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            64,
            "José",
            "image64.png",
            "Pai adotivo de Jesus, conhecido por sua obediência e fé",
            "Story 64",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de José", "A história de José é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            65,
            "Isabel",
            "image65.png",
            "Mãe de João Batista, conhecida por sua fé e obediência a Deus",
            "Story 65",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Isabel", "A história de Isabel é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            66,
            "Zacarias",
            "image66.png",
            "Pai de João Batista, conhecido por sua fé e obediência a Deus",
            "Story 66",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Zacarias", "A história de Zacarias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            67,
            "João Batista",
            "image67.png",
            "Profeta e precursor de Jesus, conhecido por sua pregação e batismo",
            "Story 67",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de João Batista", "A história de João Batista é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            68,
            "Simeão",
            "image68.png",
            "Um homem justo e temente a Deus, que aguardava a vinda do Messias",
            "Story 68",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Simeão", "A história de Simeão é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            69,
            "Ana",
            "image69.png",
            "Uma profetisa que reconheceu Jesus como o Messias",
            "Story 69",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Ana", "A história de Ana é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            70,
            "Maria Madalena",
            "image70.png",
            "Uma seguidora de Jesus, conhecida por sua devoção e fé",
            "Story 70",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Maria Madalena", "A história de Maria Madalena é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),





        new Character(
            71,
            "Pedro",
            "image71.png",
            "Um dos doze apóstolos, conhecido por sua liderança e fé",
            "Story 71",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Pedro", "A história de Pedro é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            72,
            "Andre",
            "image72.png",
            "Um seguidor de Jesus, conhecido por sua fé e devoção",
            "Story 72",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Ändre", "A história de Ändre é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            73,
            "Tiago, filho de Zebedeu",
            "image73.png",
            "Um dos doze apóstolos, conhecido por sua sabedoria e liderança",
            "Story 73",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Tiago", "A história de Tiago é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            74,
            "João",
            "image74.png",
            "Um dos doze apóstolos, conhecido por seu amor e devoção a Jesus",
            "Story 74",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de João", "A história de João é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            75,
            "Simão,o Zelote",
            "image75.png",
            "Um dos doze apóstolos, conhecido por seu zelo e fervor",
            "Story 75",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Simão Zelote", "A história de Simão Zelote é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),

        new Character(
            76,
            "Judas Tadeu",
            "image76.png",
            "Um dos doze apóstolos, conhecido por sua coragem e fé",
            "Story 76",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Judas Tadeu", "A história de Judas Tadeu é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            77,
            "Judas Iscariotes",
            "image77.png",
            "Um dos doze apóstolos, conhecido por sua traição a Jesus",
            "Story 77",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Judas Iscariotes", "A história de Judas Iscariotes é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            78,
            "Natanael",
            "image78.png",
            "Tambem conhecido como Bartolomeu, um dos doze apóstolos, conhecido por sua sinceridade e busca pela verdade",
            "Story 78",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Natanael", "A história de Natanael é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            79,
            "Felipe",
            "image79.png",
            "Um dos doze apóstolos, conhecido por sua habilidade em evangelizar",
            "Story 79",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Felipe", "A história de Felipe é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            80,
            "Mateus",
            "image80.png",
            "Um dos doze apóstolos, conhecido por sua habilidade em coletar impostos",
            "Story 80",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Mateus", "A história de Mateus é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            81,
            "Tiago, filho de Alfeu",
            "image81.png",
            "Um dos doze apóstolos, conhecido por sua fé e dedicação",
            "Story 81",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Tiago, filho de Alfeu", "A história de Tiago, filho de Alfeu é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            82,
            "Tomé",
            "image82.png",
            "Um dos doze apóstolos, conhecido por sua dúvida e busca por evidências",
            "Story 82",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Tomé", "A história de Tomé é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            83,
            "Matias",
            "image83.png",
            "Um dos doze apóstolos, conhecido por sua dedicação e fé",
            "Story 83",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Matias", "A história de Matias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),




        new Character(
            84,
            "Estevão",
            "image84.png",
            "Um dos primeiros diáconos da igreja, conhecido por sua fé e martírio",
            "Story 84",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Estevão", "A história de Estevão é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            85,
            "Paulo",
            "image85.png",
            "Um dos apóstolos, conhecido por sua conversão e missão",
            "Story 85",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Paulo", "A história de Paulo é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),

        new Character(
            86,
            "Timóteo",
            "image86.png",
            "Um dos discípulos de Paulo, conhecido por sua juventude e fé",
            "Story 86",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Timóteo", "A história de Timóteo é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),

        new Character(
            87,
            "Barnabé",
            "image87.png",
            "Um dos primeiros discípulos da igreja, conhecido por seu encorajamento e apoio a Paulo",
            "Story 87",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Barnabé", "A história de Barnabé é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            88,
            "Silas",
            "image88.png",
            "Um dos companheiros de Paulo em suas viagens missionárias, conhecido por sua fé e coragem",
            "Story 88",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Silas", "A história de Silas é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            89,
            "Priscila e Áquila",
            "image89.png",
            "Um casal de missionários, conhecidos por seu trabalho em equipe e apoio a Paulo",
            "Story 89",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Priscila e Áquila", "A história de Priscila e Áquila é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            90,
            "Apolo",
            "image90.png",
            "Um pregador eloquente e conhecedor das Escrituras, que ajudou a fortalecer a igreja.",
            "Story 90",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Apolo", "A história de Apolo é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            91,
            "Tito",
            "image91.png",
            "Um dos colaboradores de Paulo, conhecido por sua liderança e fé.",
            "Story 91",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Tito", "A história de Tito é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            92,
            "Filemom",
            "image92.png",
            "Um cristão que recebeu uma carta de Paulo, enfatizando a importância do perdão e da reconciliação.",
            "Story 92",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Filemom", "A história de Filemom é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            93,
            "Epafras",
            "image93.png",
            "Um colaborador de Paulo, conhecido por seu trabalho na igreja de Colossos.",
            "Story 93",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Epafras", "A história de Epafras é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            94,
            "Tíquico",
            "image94.png",
            "Um mensageiro de Paulo, conhecido por sua lealdade e serviço.",
            "Story 94",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Tíquico", "A história de Tíquico é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            95,
            "Onésimo",
            "image95.png",
            "Um escravo fugitivo que se tornou um cristão e foi recebido por Paulo.",
            "Story 95",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Onésimo", "A história de Onésimo é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),

        new Character(
            97,
            "Epafrodito",
            "image97.png",
            "Um colaborador de Paulo, conhecido por sua dedicação e serviço.",
            "Story 97",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Epafrodito", "A história de Epafrodito é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            98,
            "Tiago, irmão de Jesus",
            "image98.png",
            "Um líder da igreja em Jerusalém, conhecido por sua sabedoria e fé.",
            "Story 98",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Tiago", "A história de Tiago é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        ///////////// ------------------   NOVAS PESSOAS ADICIONADAS APÓS CONSTRUÇÃO DO DATA ----------------------- ///////////////////////


        new Character(
            99,
            "Melquisedeque",
            "image99.png",
            "Um rei de Salém e sacerdote do Deus Altíssimo, que abençoou Abraão.",
            "Story 99",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Melquisedeque", "A história de Melquisedeque é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            100,
            "Miriã",
            "image100.png",
            "Uma profetisa e líder entre os israelitas, irmã de Moisés e Arão.",
            "Story 100",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Miriã", "A história de Miriã é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            101,
            "Calebe",
            "image101.png",
            "Um dos espias enviados a Canaã, conhecido por sua fé e coragem.",
            "Story 101",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Calebe", "A história de Calebe é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            102,
            "Ana, mãe de Samuel",
            "image102.png",
            "Uma mulher de fé que dedicou seu filho ao serviço de Deus.",
            "Story 102",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Ana", "A história de Ana é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            103, 
            "Boaz",
            "image103.png",
            "Um agricultor rico que se casou com Rute e se tornou o bisavô de Davi.",
            "Story 103",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Boaz", "A história de Boaz é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            104, 
            "Noemi",
            "image104.png",
            "A sogra de Rute, que a encorajou a seguir a Deus.",
            "Story 104",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Noemi", "A história de Noemi é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            105,
            "Ezequias",
            "image105.png",
            "Um rei de Judá que trouxe reformas religiosas e restaurou o culto a Deus.",
            "Story 105",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Ezequias", "A história de Ezequias é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            106,
            "Manassés",
            "image106.png",
            "Um rei de Judá que se desviou de Deus, mas depois se arrependeu.",
            "Story 106",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Manassés", "A história de Manassés é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            107,
            "Natã",
            "image107.png",
            "Um profeta que aconselhou o rei Davi e o confrontou por seu pecado.",
            "Story 107",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Natã", "A história de Natã é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            108,
            "Nicodemos",
            "image108.png",
            "Um fariseu que veio a Jesus à noite e se tornou um seguidor dele.",
            "Story 108",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Nicodemos", "A história de Nicodemos é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),

        new Character(
            109,
            "Zaqueu",
            "image109.png",
            "Um cobrador de impostos que se arrependeu e se tornou seguidor de Jesus.",
            "Story 109",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Zaqueu", "A história de Zaqueu é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            110,
            "Marta, irmã de Maria",
            "image110.png",
            "Uma mulher que serviu a Jesus e teve um papel importante em sua vida.",
            "Story 110",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Marta", "A história de Marta é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            111,
            "Maria, irmã de Marta",
            "image111.png",
            "Uma mulher que serviu a Jesus e teve um papel importante em sua vida.",
            "Story 111",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Maria", "A história de Maria é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),



        new Character(
            112,
            "Lázaro",
            "image112.png",
            "Um homem que foi ressuscitado por Jesus após estar morto por quatro dias.",
            "Story 112",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Lázaro", "A história de Lázaro é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            113,
            "Cornélio",
            "image113.png",
            "Um centurião romano que se tornou o primeiro gentio a se converter ao cristianismo.",
            "Story 113",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Cornélio", "A história de Cornélio é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        ),


        new Character(
            114,
            "Lídia",
            "image114.png",
            "Uma mulher que se converteu ao cristianismo e ajudou a espalhar a mensagem de Jesus.",
            "Story 114",
            [
                new Verse(
                    "'E disse Deus: Quanto a mim, eis a minha aliança contigo: serás pai de uma multidão de nações.'",
                    "Gênesis 17:4"
                )
            ],
            [
                new Lesson("A fé de Lidia", "A história de Lidia é fundamental para entender a importância da fé e da obediência a Deus.")
            ]
        )

    ];

export default characters;
