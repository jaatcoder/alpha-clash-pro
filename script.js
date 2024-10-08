function removeBackgroundcolorById(expectedKey)
{
    const element = document.getElementById(expectedKey);
    element.classList.remove('bg-orange-500');
}


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
function handleKeyboardUpevent(event){

    const typedKey = event.key;
    

   const currentKeyElement = document.getElementById('screen-text');
  const  currentKey= currentKeyElement.innerText;
   const expectedKey = currentKey.toLowerCase();
   

//    checking ,score and life upgrading

    if(typedKey === expectedKey){
        removeBackgroundcolorById(expectedKey)
        const currentScoreELement = document.getElementById('current-score')
        const currentScoreText= currentScoreELement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1 ;
        currentScoreELement.innerText = newScore;

        const finalScore = document.getElementById('final-score');  
        finalScore.innerText = newScore;

         play();

    }
    else
    {
        const currentLifeELement = document.getElementById('life-text')
        const currentLifeText= currentLifeELement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeELement.innerText = newLife;
        if(newLife === 0){
            const playGround = document.getElementById('play-ground');
            playGround.classList.add('hidden');
            const gameOver = document.getElementById('game-over');
            gameOver.classList.remove('hidden');

           
        }

    }
   

    
}

document.addEventListener('keyup', handleKeyboardUpevent)


function newGame()
{
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    const gameOverSection = document.getElementById('game-over');
    gameOverSection.classList.add('hidden');
    const finalScore = document.getElementById('current-score');  
    finalScore.innerText = 0 ;
    const currentLifeELement = document.getElementById('life-text')
     currentLifeELement.innerText= 6;
     const currentKeyElement = document.getElementById('screen-text');
     const  currentKey= currentKeyElement.innerText;
      const expectedKey = currentKey.toLowerCase();
     removeBackgroundcolorById(expectedKey)
     play();

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
