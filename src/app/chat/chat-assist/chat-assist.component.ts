import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-assist',
  templateUrl: './chat-assist.component.html',
  styleUrls: ['./chat-assist.component.css']
})
export class ChatAssistComponent implements OnInit {
  conversations: Array<{ title: string, content: string }> = [
    { title: 'Provider sent prior authorization but have not received  a response.  Where do I start?', 
      content: 'Try to get TRN02 or BHT03 number.' },
    { title: 'Got it!  What should I do next?', 
    content: 'Navigate to 278 workspace & view txn logs...' },
    // Add more conversations as needed
  ];
  ngOnInit() {
  }
  
}
