import { Component, OnInit } from '@angular/core';
import { FetchTranslationService } from "../fetch-translation.service";


@Component({
  selector: 'app-the-dictionary',
  templateUrl: './the-dictionary.component.html',
  styleUrls: ['./the-dictionary.component.css']
})


export class TheDictionaryComponent implements OnInit {

  dictionary = [
    {
      word: 'education',
      translation: 'образование',
    },
    {
      word: 'book',
      translation: 'книга',
    },
    {
      word: 'programming',
      translation: 'программирование',
    },
    {
      word: 'what',
      translation: 'что',
    },
    {
      word: 'around',
      translation: 'вокруг',
    },
    {
      word: 'animals',
      translation: 'животные'
    },
  ];



  constructor(private fetch: FetchTranslationService) { }

  translateWord(searchStr: string) {

    class Translate {
      word: string;
      translation: string;
    }

    let temp: Translate = new Translate();
    // console.log (this.dictionary[0].word)
    this.fetch.getTranslate(searchStr).then((r) => {
    temp.translation = searchStr; temp.word = r.text;
      if (temp.translation != temp.word) this.dictionary.push(temp)
    })

  }

  ngOnInit() {
  }

}
