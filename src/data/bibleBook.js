import BibleBook from "../models/BibleBook.js";
import Outline from '../models/Outline.js'
import Verse from "../models/Verse.js";
import Videos from "../models/videos.js";



const bibleBook = [
    new BibleBook(
        1,
        "Genêsis",
        "GEN",
        "Pentateuco",
        "Antigo Testamento",
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 43, 99],
        "Primeiro livro da Bíblia",
        "1500–1400 a.C.",
        "Moisés",
        "Narrar a criação do mundo, a queda do homem e a escolha da nação de Israel através dos patriarcas.",
        [
            new Outline({
                beginChapter: 1,
                endChapter: 3,
                description: "A criação do mundo"
            }),
            new Outline({
                beginChapter: 3,
                endChapter: 5,
                description: "A queda do homem"
            }),
            new Outline({
                beginChapter: 6,
                endChapter: 9,
                description: "O dilúvio e a aliança com Noé"
            }),
            new Outline({
                beginChapter: 12,
                endChapter: 25,
                description: "A história de Abraão e a promessa da aliança"
            }),
            new Outline({
                beginChapter: 25,
                endChapter: 36,
                description: "Isaque e Jacó, a continuidade da promessa"
            }),
            new Outline({
                beginChapter: 37,
                endChapter: 50,
                description: "José e a preservação do povo no Egito"
            }),
        ],
        [
            {
                question: "Qual foi o primeiro animal criado por Deus segundo Gênesis?",
                options: ["Leão", "Pássaros e Peixes", "Gado", "Serpente"],
                correctAnswer: 1
            },
            {
                question: "Quem foi o filho de Abraão com a serva Agar?",
                options: ["Isaque", "Jacó", "Ismael", "Esaú"],
                correctAnswer: 2
            },
            {
                question: "Quantos dias durou a chuva do Dilúvio?",
                options: ["7 dias", "40 dias e 40 noites", "100 dias", "1 ano"],
                correctAnswer: 1
            },
            {
                question: "Para onde José foi levado como escravo?",
                options: ["Babilônia", "Assíria", "Egito", "Canaã"],
                correctAnswer: 2
            },
            {
                question: "Qual era o nome da esposa de Isaque?",
                options: ["Sara", "Raquel", "Rebeca", "Lia"],
                correctAnswer: 2
            },
            {
                question: "O que Deus criou no sétimo dia?",
                options: ["O Homem", "O Sol e a Lua", "Nada, Ele descansou", "As Estrelas"],
                correctAnswer: 2
            }
        ],
        [
            new Verse("No princípio, Deus criou os céus e a terra.", "Gênesis 1:1"),
            new Verse("Então, disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança.", "Gênesis 1:26"),
            new Verse("E o Senhor Deus formou o homem do pó da terra e soprou-lhe nas narinas o fôlego de vida.", "Gênesis 2:7"),
        ],
        "Gênesis aponta para Cristo através das promessas feitas a Abraão — 'em ti serão benditas todas as famílias da terra' — que se cumprem em Jesus. José, rejeitado pelos irmãos e depois exaltado para salvar seu povo, é uma sombra clara da obra redentora de Cristo.",
        [
            "Assim como Deus criou ordem a partir do caos, Ele pode trazer ordem e propósito ao caos da nossa vida.",
            "A história de José nos ensina que mesmo nas piores circunstâncias, Deus está trabalhando para o nosso bem e o de outros.",
            "A aliança com Abraão nos lembra que a fé, não as obras, é o que nos torna justos diante de Deus."
        ],
        [
            "A palavra 'Gênesis' significa 'origem' ou 'começo' em grego.",
            "Gênesis cobre o maior período de tempo de qualquer livro da Bíblia — desde a criação até a morte de José.",
            "Moisés provavelmente escreveu Gênesis durante os 40 anos no deserto, usando tradições orais e registros transmitidos pelos patriarcas."
        ],
        [
            new Videos(
                "https://www.youtube.com/embed/Caad4veNpLo",
                "Como Gênesis 1 comunica sobre o tema principal de toda a Bíblia",
                "BibleProject - Português"
            ),

            new Videos(
                "https://www.youtube.com/embed/syzvUKr4f44",
                "Gênesis 1-11 || Bible Project Português ||",
                "BibleProject - Português"
            ),
            new Videos(
                "https://www.youtube.com/embed/VaZdOfekgo8",
                "Gênesis 12-50 || Bible Project Português ||",
                "BibleProject - Português"
            )
        ]
    ),
    new BibleBook(
        2,
        "Êxodo",
        "EXO",
        "Pentateuco",
        "Antigo Testamento",
        [14, 15, 100],
        "Segundo livro da Bíblia",
        "1500–1400 a.C.",
        "Moisés",
        "Mostrar a libertação do povo de Deus e o estabelecimento da aliança.",
        [],
        []
    ),
    new BibleBook(
        3,
        "Levítico",
        "LEV",
        "Pentateuco",
        "Antigo Testamento",
        [14, 15, 100],
        "Terceiro livro da Bíblia",
        "1500–1400 a.C."
    ),
    new BibleBook(
        4,
        "Números",
        "NUM",
        "Pentateuco",
        "Antigo Testamento",
        [14, 15, 16, 17, 100, 101],
        "Quarto livro da Bíblia",
        "1500–1400 a.C."
    ),
    new BibleBook(
        5,
        "Deuteronômio",
        "DEU",
        "Pentateuco",
        "Antigo Testamento",
        [14],
        "Quinto livro da Bíblia",
        "1500–1400 a.C."
    ),
    new BibleBook(
        6,
        "Josué",
        "JOS",
        "Históricos",
        "Antigo Testamento",
        [17, 18, 101],
        "Sexto livro da Bíblia",
        "1400–1370 a.C."
    ),
    new BibleBook(
        7,
        "Juízes",
        "JDG",
        "Históricos",
        "Antigo Testamento",
        [19, 20, 21],
        "Sétimo livro da Bíblia",
        "1370–1050 a.C."
    ),
    new BibleBook(
        8,
        "Rute",
        "RUT",
        "Históricos",
        "Antigo Testamento",
        [22, 103, 104],
        "Oitavo livro da Bíblia",
        "1300–1000 a.C."
    ),
    new BibleBook(
        9,
        "1 Samuel",
        "1SA",
        "Históricos",
        "Antigo Testamento",
        [23, 24, 25, 26, 27, 28, 102],
        "Nono livro da Bíblia",
        "1050–1000 a.C."
    ),
    new BibleBook(
        10,
        "2 Samuel",
        "2SA",
        "Históricos",
        "Antigo Testamento",
        [25, 26, 27, 29, 30, 102, 107],
        "Décimo livro da Bíblia",
        "1000–960 a.C."
    ),
    new BibleBook(
        11,
        "1 Reis",
        "1KI",
        "Históricos",
        "Antigo Testamento",
        [],
        "Décimo primeiro livro da Bíblia",
        "960–586 a.C."
    ),
    new BibleBook(
        12,
        "2 Reis",
        "2KI",
        "Históricos",
        "Antigo Testamento",
        [],
        "Décimo segundo livro da Bíblia",
        "586–536 a.C."
    ),
    new BibleBook(
        13,
        "1 Crônicas",
        "1CH",
        "Históricos",
        "Antigo Testamento",
        [],
        "Décimo terceiro livro da Bíblia",
        "450–425 a.C."
    ),
    new BibleBook(
        14,
        "2 Crônicas",
        "2CH",
        "Históricos",
        "Antigo Testamento",
        [],
        "Décimo quarto livro da Bíblia",
        "450–425 a.C."
    ),
    new BibleBook(
        15,
        "Esdras",
        "EZR",
        "Históricos",
        "Antigo Testamento",
        [],
        "Décimo quinto livro da Bíblia",
        "450–425 a.C."
    ),
    new BibleBook(
        16,
        "Neemias",
        "NEH",
        "Históricos",
        "Antigo Testamento",
        [],
        "Décimo sexto livro da Bíblia",
        "445–425 a.C."
    ),
    new BibleBook(
        17,
        "Ester",
        "EST",
        "Históricos",
        "Antigo Testamento",
        [],
        "Décimo sétimo livro da Bíblia",
        "450–425 a.C."
    ),
    new BibleBook(
        18,
        "Jó",
        "JOB",
        "Poéticos",
        "Antigo Testamento",
        [],
        "Décimo oitavo livro da Bíblia",
        "2000–1000 a.C."
    ),
    new BibleBook(
        19,
        "Salmos",
        "PSA",
        "Poéticos",
        "Antigo Testamento",
        [],
        "Décimo nono livro da Bíblia",
        "1500–400 a.C."
    ),
    new BibleBook(
        20,
        "Provérbios",
        "PRO",
        "Poéticos",
        "Antigo Testamento",
        [],
        "Vigésimo livro da Bíblia",
        "950–700 a.C."
    ),
    new BibleBook(
        21,
        "Eclesiastes",
        "ECC",
        "Poéticos",
        "Antigo Testamento",
        [],
        "Vigésimo primeiro livro da Bíblia",
        "935 a.C."
    ),
    new BibleBook(
        22,
        "Cantares",
        "SNG",
        "Poéticos",
        "Antigo Testamento",
        [],
        "Vigésimo segundo livro da Bíblia",
        "950–900 a.C."
    ),
    new BibleBook(
        23,
        "Isaías",
        "ISA",
        "Profetas Maiores",
        "Antigo Testamento",
        [],
        "Vigésimo terceiro livro da Bíblia",
        "740–680 a.C."
    ),
    new BibleBook(
        24,
        "Jeremias",
        "JER",
        "Profetas Maiores",
        "Antigo Testamento",
        [],
        "Vigésimo quarto livro da Bíblia",
        "626–586 a.C."
    ),
    new BibleBook(
        25,
        "Lamentações",
        "LAM",
        "Poéticos",
        "Antigo Testamento",
        [],
        "Vigésimo quinto livro da Bíblia",
        "586 a.C."
    ),
    new BibleBook(
        26,
        "Ezequiel",
        "EZK",
        "Profetas Maiores",
        "Antigo Testamento",
        [],
        "Vigésimo sexto livro da Bíblia",
        "593–571 a.C."
    ),
    new BibleBook(
        27,
        "Daniel",
        "DAN",
        "Profetas Maiores",
        "Antigo Testamento",
        [],
        "Vigésimo sétimo livro da Bíblia",
        "605–536 a.C."
    ),
    new BibleBook(
        28,
        "Oséias",
        "HOS",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Vigésimo oitavo livro da Bíblia",
        "755–715 a.C."
    ),
    new BibleBook(
        29,
        "Joel",
        "JOL",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Vigésimo nono livro da Bíblia",
        "835–796 a.C."
    ),
    new BibleBook(
        30,
        "Amós",
        "AMO",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo livro da Bíblia",
        "760–750 a.C."
    ),
    new BibleBook(
        31,
        "Obadias",
        "OBA",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo primeiro livro da Bíblia",
        "586 a.C."
    ),
    new BibleBook(
        32,
        "Jonas",
        "JON",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo segundo livro da Bíblia",
        "785–760 a.C."
    ),
    new BibleBook(
        33,
        "Miquéias",
        "MIC",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo terceiro livro da Bíblia",
        "740–686 a.C."
    ),
    new BibleBook(
        34,
        "Naum",
        "NAM",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo quarto livro da Bíblia",
        "663–612 a.C."
    ),
    new BibleBook(
        35,
        "Habacuque",
        "HAB",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo quinto livro da Bíblia",
        "610–605 a.C."
    ),
    new BibleBook(
        36,
        "Sofonias",
        "ZEP",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo sexto livro da Bíblia",
        "640–609 a.C."
    ),
    new BibleBook(
        37,
        "Ageu",
        "HAG",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo sétimo livro da Bíblia",
        "520 a.C."
    ),
    new BibleBook(
        38,
        "Zacarias",
        "ZEC",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo oitavo livro da Bíblia",
        "520–518 a.C."
    ),
    new BibleBook(
        39,
        "Malaquias",
        "MAL",
        "Profetas Menores",
        "Antigo Testamento",
        [],
        "Trigésimo nono livro da Bíblia",
        "450 a.C."
    ),
    new BibleBook(
        40,
        "Mateus",
        "MAT",
        "Evangelhos",
        "Novo Testamento",
        [],
        "Quadragésimo livro da Bíblia",
        "70 d.C."
    ),
    new BibleBook(
        41,
        "Marcos",
        "MRK",
        "Evangelhos",
        "Novo Testamento",
        [],
        "Quadragésimo primeiro livro da Bíblia",
        "70 d.C."
    ),
    new BibleBook(
        42,
        "Lucas",
        "LUK",
        "Evangelhos",
        "Novo Testamento",
        [],
        "Quadragésimo segundo livro da Bíblia",
        "70 d.C."
    ),
    new BibleBook(
        43,
        "João",
        "JHN",
        "Evangelhos",
        "Novo Testamento",
        [],
        "Quadragésimo terceiro livro da Bíblia",
        "90 d.C."
    ),
    new BibleBook(
        44,
        "Atos",
        "ACT",
        "Históricos",
        "Novo Testamento",
        [],
        "Quadragésimo quarto livro da Bíblia",
        "63 d.C."
    ),
    new BibleBook(
        45,
        "Romanos",
        "ROM",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quadragésimo quinto livro da Bíblia",
        "57 d.C."
    ),
    new BibleBook(
        46,
        "1 Coríntios",
        "1CO",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quadragésimo sexto livro da Bíblia",
        "55 d.C."
    ),
    new BibleBook(
        47,
        "2 Coríntios",
        "2CO",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quadragésimo sétimo livro da Bíblia",
        "55 d.C."
    ),
    new BibleBook(
        48,
        "Galátas",
        "GAL",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quadragésimo oitavo livro da Bíblia",
        "55 d.C."
    ),

    new BibleBook(
        49,
        "Efésios",
        "EPH",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quadragésimo nono livro da Bíblia",
        "60 d.C."
    ),
    new BibleBook(
        50,
        "Filipenses",
        "PHP",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quinquagésimo livro da Bíblia",
        "61 d.C."
    ),
    new BibleBook(
        51,
        "Colossenses",
        "COL",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quinquagésimo primeiro livro da Bíblia",
        "60 d.C."
    ),
    new BibleBook(
        52,
        "1 Tessalonicenses",
        "1TH",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quinquagésimo segundo livro da Bíblia",
        "50 d.C."
    ),
    new BibleBook(
        53,
        "2 Tessalonicenses",
        "2TH",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quinquagésimo terceiro livro da Bíblia",
        "51 d.C."
    ),
    new BibleBook(
        54,
        "1 Timóteo",
        "1TI",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quinquagésimo quarto livro da Bíblia",
        "63 d.C."
    ),
    new BibleBook(
        55,
        "2 Timóteo",
        "2TI",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quinquagésimo quinto livro da Bíblia",
        "67 d.C."
    ),
    new BibleBook(
        56,
        "Tito",
        "TIT",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quinquagésimo sexto livro da Bíblia",
        "63 d.C."
    ),
    new BibleBook(
        57,
        "Filemom",
        "PHM",
        "Epístolas de Paulo",
        "Novo Testamento",
        [],
        "Quinquagésimo sétimo livro da Bíblia",
        "60 d.C."
    ),
    new BibleBook(
        58,
        "Hebreus",
        "HEB",
        "Epístolas",
        "Novo Testamento",
        [],
        "Quinquagésimo oitavo livro da Bíblia",
        "60–70 d.C."
    ),
    new BibleBook(
        59,
        "Tiago",
        "JAS",
        "Epístolas",
        "Novo Testamento",
        [],
        "Quinquagésimo nono livro da Bíblia",
        "48–50 d.C."
    ),
    new BibleBook(
        60,
        "1 Pedro",
        "1PE",
        "Epístolas",
        "Novo Testamento",
        [],
        "Sextagésimo livro da Bíblia",
        "60–64 d.C."
    ),
    new BibleBook(
        61,
        "2 Pedro",
        "2PE",
        "Epístolas",
        "Novo Testamento",
        [],
        "Sextagésimo primeiro livro da Bíblia",
        "65–68 d.C."
    ),
    new BibleBook(
        62,
        "1 João",
        "1JN",
        "Epístolas",
        "Novo Testamento",
        [],
        "Sextagésimo segundo livro da Bíblia",
        "85–90 d.C."
    ),
    new BibleBook(
        63,
        "2 João",
        "2JN",
        "Epístolas",
        "Novo Testamento",
        [],
        "Sextagésimo terceiro livro da Bíblia",
        "85–90 d.C."
    ),
    new BibleBook(
        64,
        "3 João",
        "3JN",
        "Epístolas",
        "Novo Testamento",
        [],
        "Sextagésimo quarto livro da Bíblia",
        "85–90 d.C."
    ),
    new BibleBook(
        65,
        "Judas",
        "JUD",
        "Epístolas",
        "Novo Testamento",
        [],
        "Sextagésimo quinto livro da Bíblia",
        "65–70 d.C."
    ),
    new BibleBook(
        66,
        "Apocalipse",
        "REV",
        "Proféticos",
        "Novo Testamento",
        [],
        "Sextagésimo sexto e último livro da Bíblia",
        "95 d.C."
    )

];

export default bibleBook;