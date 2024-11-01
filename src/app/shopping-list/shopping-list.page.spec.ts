import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShoppingLlistPage } from './shopping-list.page';

describe('ShoppingLlistPage', () => {
  let component: ShoppingLlistPage;
  let fixture: ComponentFixture<ShoppingLlistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingLlistPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingLlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
