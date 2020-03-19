function Translate(word,language){

    this.apiKey = "trnsl.1.1.20200316T110716Z.a81890e587c67c1f.bbc8edcc5e18a1dda100f124c6f9f2c8e42e1e31" ; 
    this.word = word ; 
    this.language = language ; 

    //XHR Object

    this.xhr = new XMLHttpRequest() ; 

}

Translate.prototype.translateWord = function(callback){

    //Ajax 
    const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}` ;

    this.xhr.open("GET",endPoint,true) ; 

    this.xhr.onload = () => {
            if(this.xhr.status === 200){
                const json = JSON.parse(this.xhr.responseText) ; 
                const text = json.text[0]; 
                
                callback(null,text) ; 
            }else{
                callback("Mistake",null) ; 
            }
    }

    this.xhr.send() ; 

}

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord ; 
    this.language = newLanguage
}