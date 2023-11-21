import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-sc-chat',
  templateUrl: './sc-chat.component.html',
  styleUrls: ['./sc-chat.component.css']
})
export class ScChatComponent implements OnInit {
  conversations: Array<{ title: string, content: string }> = [
    { title: 'How do I start a new Purchase order?', 
      content: 'Do you have the vendor and item name or number information?' },
    { title: 'Yes!', 
    content: 'Select Purchase menu option then NEW Purchase option...' },
    // Add more conversations as needed
  ];
  ngOnInit() {
  }

}
