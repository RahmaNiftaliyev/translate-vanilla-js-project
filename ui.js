function UI(){

    this.outputWord = document.getElementById("outputWord") ; 
    this.outputImage = document.getElementById("outputImage") ; 
    this.outputLanguage  = document.getElementById("outputLanguage") ; 

    this.languageList = document.getElementById("language") ; 


}

UI.prototype.changeUI = function(){

    this.outputImage.src = `images/${this.languageList.value}.png` ;


}

UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word ; 
}