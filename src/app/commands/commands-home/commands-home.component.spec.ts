import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsHomeComponent } from './commands-home.component';

describe('CommandsHomeComponent', () => {
  let component: CommandsHomeComponent;
  let fixture: ComponentFixture<CommandsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
