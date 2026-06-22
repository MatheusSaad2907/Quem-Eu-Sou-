import { BIBLE_BASE_URL, BIBLE_VERSION } from '../config/constant.js'

class BibleBook {
    constructor(
        id, name, identifier,category, testament, characterIds, bookInformation, writtenDate,
        author = '', purpose = '', outline = [], quiz = [],
        keyVerses = [], christInBook = '', practicalApplication = [], trivia = [], videos = []
    ) {
        this.id = id;
        this.name = name;
        this.identifier = identifier;
        this.category = category;
        this.testament = testament;
        this.characterIds = characterIds;
        this.bookInformation = bookInformation;
        this.writtenDate = writtenDate;
        this.author = author;
        this.purpose = purpose;
        this.outline = outline;
        this.quiz = quiz;
        this.keyVerses = keyVerses;
        this.christInBook = christInBook;
        this.practicalApplication = practicalApplication;
        this.trivia = trivia;
        this.videos = videos;
    }

    getBibleUrl(chapter) {
        return `${BIBLE_BASE_URL}${this.identifier}.${chapter}.${BIBLE_VERSION}`
    }
}

export default BibleBook;