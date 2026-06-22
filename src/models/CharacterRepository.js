class CharacterRepository{
    constructor(){
        this.characters = [];
    }

    addCharacter(character){
        this.characters.push(character);
    }

    findCharacterById(id){
        return this.characters.find(character => character.id === id);
    }

    findByBookId(characterIds){
        return this.characters.filter(character => characterIds.includes(character.id));
    }

    findAllNames() {
        return this.characters.map(c => c.name);
    }


}  

export default CharacterRepository;