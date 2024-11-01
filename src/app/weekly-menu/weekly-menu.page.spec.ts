import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { WeeklyMenuPage } from './weekly-menu.page';

describe('WeeklyMenuPage', () => {
  let component: WeeklyMenuPage;
  let fixture: ComponentFixture<WeeklyMenuPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyMenuPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
