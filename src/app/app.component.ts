import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from './compontens/person/person.component';
import { MessageComponent } from './compontens/message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat';
}
