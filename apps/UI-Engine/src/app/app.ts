import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1 flex self-center>AI Agent Robin: Dynamic UI Engine (POC)</h1>

    <router-outlet />
  `,
  styles: [],
})
export class App {
}
