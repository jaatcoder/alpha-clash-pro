function addBackground(id)
{
    const element = document.getElementById(id);
    element.classList.add('bg-orange-500');
}
//Random alphabet generator

function continueGame()
{
    //generate a random Alphabet
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  

    const randomNumber =  Math.floor(Math.random() * 25);  
    
return alphabet[randomNumber];


}


function play()
{
const homeSection = document.getElementById('home-screen');
const playGround = document.getElementById('play-ground');
homeSection.classList.add('hidden');
playGround.classList.remove('hidden');


const randomAlphabet = continueGame();
document.getElementById('screen-text').innerText = randomAlphabet;

const findingId = randomAlphabet.toLowerCase();
addBackground(findingId);

}
