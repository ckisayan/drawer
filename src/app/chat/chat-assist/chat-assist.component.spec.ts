import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAssistComponent } from './chat-assist.component';

describe('ChatAssistComponent', () => {
  let component: ChatAssistComponent;
  let fixture: ComponentFixture<ChatAssistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatAssistComponent]
    });
    fixture = TestBed.createComponent(ChatAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
