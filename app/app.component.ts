import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
      <label for="hero-id">id: </label>
      {{hero.id}}
    </div>
    <div>
      <label for="hero-name">name: </label>
      <input id="hero-name" placeholder="name" [(ngModel)]="hero.name">
    </div>`
})
export class AppComponent {
  title = 'Tour of Heros';
  hero: Hero = {
    id: 1,
    name: 'WindStrom'
  }
}
