const { text } = require('express');
const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const reverseobj= (obj) =>
  Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({ [v]: k })));

class Translator {

   
    
atob(text){
    const words = {...americanToBritishSpelling, ...americanOnly};
    const titles= americanToBritishTitles;
    const timereg= /([1-9]|1[012]):[0-5][0-9]/g
    const translated = this.translate(
        text,
        words,
        titles,
        timereg,
        "toBritish"
    )
    if(!translated){
        return text
    }
    return translated
}

btoa(text){
    const words = {...reverseobj(americanToBritishSpelling),...britishOnly};
    const titles = reverseobj(americanToBritishTitles);
    const timereg= /([1-9]|1[012]).[0-5][0-9]/g
    const translated = this.translate(
        text,
        words,
        titles,
        timereg,
        "toAmerican"
    );

    if(!translated){
        return text
    }
    return translated
}
translate(text, words, titles, timereg, locale){
    let input =text.toLowerCase();
    let matches = {};

    Object.entries(titles).map(([k, v])=>{
        if(input.includes(k)){
            matches[k]= v.charAt(0).toUpperCase() + v.slice(1)
        }
    });

    const spacewords = Object.fromEntries(
        Object.entries(words).filter(([k,v])=> k.includes(" "))
    );

    Object.entries(spacewords).map(([k,v])=>{
        if(input.includes(k)){
            matches[k]= v;
        }
    });

    input.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).forEach((x)=>{
        if (words[x]) matches[x] = words[x]
    });

    const time = input.match(timereg);

    if(time){
        time.map((e)=>{
            if (locale== "toBritish"){
                return (matches[e] = e.replace(":", "."))
            }

            return (matches[e] = e.replace(".", ":"))
        })
    }

    if(Object.keys(matches).length == 0) return null;
    

    const translation = this.replace(input, matches);
    const translationHighlight = this.highlight(input, matches);

    return [translation, translationHighlight];

}

reverseobj(obj){
    return Object.assign(
        {},
        ...Object.entries(obj).map(([k,v])=> ( {[k]:v} ))
    );
}

 replace(str, mapObj){
    const re = new RegExp(Object.keys(mapObj).join("|"), "gi");
    
    return str.replace(re, (matched) => mapObj[matched.toLowerCase()]);
  };
  
  highlight(str, mapObj){
    const re = new RegExp(Object.keys(mapObj).join("|"), "gi");
  
    return str.replace(re, (matched) => {
        
      return `<span class="highlight">${mapObj[matched.toLowerCase()]}</span>`
    });
  };


}

module.exports = Translator;