

import { InMemoryDbService} from 'angular-in-memory-web-api'
import { Hero } from './hero'


export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      {id: 11, name: 'Mr. Thien'},
      {id: 12, name: 'Mr. Duong'},
      {id: 13, name: 'Mr. Quang'},
      {id: 14, name: 'Mr. Thao'},
      {id: 15, name: 'Mr. Chuong'},
      {id: 16, name: 'Mr. Anh'},
      {id: 17, name: 'Mr. Nam'},
      {id: 18, name: 'Mr. Quy'},
    ];

    return {heroes};
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  // constructor() { }
}
