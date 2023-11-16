import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-assist',
  templateUrl: './chat-assist.component.html',
  styleUrls: ['./chat-assist.component.css']
})
export class ChatAssistComponent implements OnInit {
  conversations: Array<{ title: string, content: string }> = [
    { title: 'Conversation 1', content: 'Content for Conversation 1' },
    { title: 'Conversation 2', content: 'Content for Conversation 2' },
    // Add more conversations as needed
  ];
  ngOnInit() {
  }
  
}
