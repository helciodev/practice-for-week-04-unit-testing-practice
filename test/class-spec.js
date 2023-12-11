const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  beforeEach(() => {
    newWord = new Word("world");
  });
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(newWord).to.have.key("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(newWord.word).to.equal("world");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(newWord.removeVowels()).to.equal("wrld");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(newWord.removeConsonants()).to.equal("o");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(newWord.pigLatin()).to.equal("orldway");
    });
  });
});
