import {db} from "./words.js";

const words = db.split("\n").map(item => {
  const [word, translation] = item.split(/\s*-\s*|\s*–\s*/g);
  return {
    word,
    translation
  }
});
console.log(words);

document.querySelectorAll('.btn')[0].addEventListener('click', randomWord);

const placeForWord = document.querySelector('.card-title');
const placeForTranslation = document.querySelector('.card-text');

function randomWord() {
  let randNumb = Math.floor(Math.random() * words.length);
  placeForWord.textContent = words[randNumb].word;
  placeForTranslation.textContent = words[randNumb].translation;
}

function hideTranstiolation() {
  document.querySelector('.card-text').classList.toggle("hide");

}
document.querySelectorAll('.btn')[1].addEventListener('click', hideTranstiolation);
