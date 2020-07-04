import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewexpensePage } from './viewexpense.page';

describe('ViewexpensePage', () => {
  let component: ViewexpensePage;
  let fixture: ComponentFixture<ViewexpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexpensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewexpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
