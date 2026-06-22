import characters from "./data/Characters.js";
import CharacterRepository from "./models/CharacterRepository.js";

const repository = new CharacterRepository()

characters.forEach(character => repository.addCharacter(character));

console.log(repository.findAllNames());
