'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();
  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body;
      console.log(text);
      if(!locale||text=== undefined){
        return res.json({ error: 'Required field(s) missing' });
      }
      if(text== undefined){
        return res.json({error: 'Required field(s) missing'})
      }
      if(text===""){
        return res.json({ error: 'No text to translate' })
      }
      
      let translation="";
      if(locale=="american-to-british"){
        translation= translator.atob(text);
      }
      else if(locale=="british-to-american"){
        translation= translator.btoa(text);
      }
      else{
        return res.json({ error: 'Invalid value for locale field' });
      }

      if(translation==text||!translation){
        return res.json({text, translation: "Everything looks good to me!"})
      }
      else{
        translation[1] = translation[1].replace("grosh", "Grosh");
        return res.json({text, translation: cap(translation[1])})
      }
    });
};
