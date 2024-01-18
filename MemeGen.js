
function generateMeme() {
   


    const imageUrl = document.getElementById('imageUrl').value.trim();
    const topText = document.getElementById('topText').value.trim();
    const bottomText = document.getElementById('bottomText').value.trim();

    if (!imageUrl || !topText || !bottomText) {
      alert("Please fill out text areas");
      return;
    }

    const memeContainer = document.getElementById('memeContainer');
    const currentMemes = document.querySelectorAll('.meme')
    
    
    
    if (currentMemes.length >= 2) {
      const firstMeme = currentMemes[0]
      memeContainer.removeChild(firstMeme)
    }
    
    

    
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    
    const img = document.createElement('img');
    img.src = imageUrl;

    
    const topTextElement = document.createElement('div');
    topTextElement.classList.add('topText');
    topTextElement.textContent = topText;

    const bottomTextElement = document.createElement('div');
    bottomTextElement.classList.add('bottomText');
    bottomTextElement.textContent = bottomText;

  
    
    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextElement);
    memeDiv.appendChild(bottomTextElement);

    memeContainer.appendChild(memeDiv);

    
    
    document.getElementById('memeForm').reset();
  }



