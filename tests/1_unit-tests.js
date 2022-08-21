const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
console.log(Translator);
suite('Unit Tests', () => {

    test("Mangoes are my favorite fruit atob", () => {
        const input = "mangoes are my favorite fruit.";
        const output = "mangoes are my favourite fruit.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
      });


      test("I ate yogurt for breakfast atbo", (done) => {
        const input = "i ate yogurt for breakfast.";
        const output = "i ate yoghurt for breakfast.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("We had a party at my friend's condo atob", (done) => {
        const input = "we had a party at my friend's condo.";
        const output = "we had a party at my friend's flat.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Can you toss this in the trashcan for me? atob", (done) => {
        const input = "can you toss this in the trashcan for me?";
        const output = "can you toss this in the bin for me?";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("The parking lot was full. atob", (done) => {
        const input = "the parking lot was full.";
        const output = "the car park was full.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Like a high tech Rube Goldberg machine. atob", (done) => {
        const input = "like a high tech Rube Goldberg machine.";
        const output = "like a high tech Heath Robinson device.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("To play hooky means to skip class or work. atob", (done) => {
        const input = "to play hooky means to skip class or work.";
        const output = "to bunk off means to skip class or work.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("No Mr. Bond, I expect you to die. --> atob ", (done) => {
        const input = "no Mr. bond, i expect you to die.";
        const output = "no Mr bond, i expect you to die.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Dr. Grosh will see you now. atob ", (done) => {
        const input = "Dr. grosh will see you now.";
        const output = "Dr grosh will see you now.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Lunch is at 12:15 today. atob", (done) => {
        const input = "lunch is at 12:15 today.";
        const output = "lunch is at 12.15 today.";

        const translation = translator.atob(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("We watched the footie match for a while. btoa", (done) => {
        const input = "we watched the footie match for a while.";
        const output = "we watched the soccer match for a while.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Paracetamol takes up to an hour to work. btoa", (done) => {
        const input = "Paracetamol takes up to an hour to work.";
        const output = "Tylenol takes up to an hour to work.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("First, caramelise the onions. btoa", (done) => {
        const input = "first, caramelise the onions.";
        const output = "first, caramelize the onions.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("I spent the bank holiday at the funfair. btoa", (done) => {
        const input = "i spent the bank holiday at the funfair.";
        const output = "i spent the public holiday at the carnival.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("I had a bicky then went to the chippy. btoa", (done) => {
        const input = "i had a bicky then went to the chippy.";
        const output = "i had a cookie then went to the fish-and-chip shop.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("I've just got bits and bobs in my bum bag. btoa", (done) => {
        const input = "i've just got bits and bobs in my bum bag.";
        const output = "i've just got odds and ends in my fanny pack.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("The car boot sale at Boxted Airfield was called off. btoa", (done) => {
        const input = "the car boot sale at boxted airfield was called off.";
        const output = "the swap meet at boxted airfield was called off.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Have you met Mrs Kalyani? bta", (done) => {
        const input = "have you met Mrs kalyani?";
        const output = "have you met Mrs. kalyani?";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Prof Joyner of King's College, London. btoa", (done) => {
        const input = "Prof joyner of king's college, london.";
        const output = "Prof. joyner of king's college, london.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Tea time is usually around 4 or 4.30. bta", (done) => {
        const input = "tea time is usually around 4 or 4.30.";
        const output = "tea time is usually around 4 or 4:30.";

        const translation = translator.btoa(input)[0];
        assert.strictEqual(translation, output);
        done();
      });

      test("Mangoes are my favorite fruit atob", () => {
        const input = "mangoes are my favorite fruit.";
        const output = 'mangoes are my <span class="highlight">favourite</span> fruit.';

        const translation = translator.atob(input)[1];
        assert.strictEqual(translation, output);
      });


      test("I ate yogurt for breakfast atbo", (done) => {
        const input = "i ate yogurt for breakfast.";
        const output = 'i ate <span class="highlight">yoghurt</span> for breakfast.';

        const translation = translator.atob(input)[1];
        assert.strictEqual(translation, output);
        done();
      });

      test("We watched the footie match for a while. btoa", (done) => {
        const input = "we watched the footie match for a while.";
        const output = 'we watched the <span class="highlight">soccer</span> match for a while.';

        const translation = translator.btoa(input)[1];
        assert.strictEqual(translation, output);
        done();
      });

      test("Paracetamol takes up to an hour to work. btoa", (done) => {
        const input = "Paracetamol takes up to an hour to work.";
        const output = '<span class="highlight">Tylenol</span> takes up to an hour to work.';

        const translation = translator.btoa(input)[1];
        assert.strictEqual(translation, output);
        done();
      });

    });
