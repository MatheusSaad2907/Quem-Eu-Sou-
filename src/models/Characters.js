import CharacterSummary from './CharacterSummary.js';

class Character extends CharacterSummary {
    constructor(
        id, name, image, description,
        story = '',
        verses = [],
        lessons = [],
        quiz = [],
        meaning = '',
        function_ = '',
        period = '',
        timeline = [],
        videos = []
    ) {
        super(id, name, image, description);
        this.story = story;
        this.verses = verses;
        this.lessons = lessons;
        this.quiz = quiz;
        this.meaning = meaning;
        this.function = function_;
        this.period = period;
        this.timeline = timeline;
        this.videos = videos;
    }
}

export default Character;