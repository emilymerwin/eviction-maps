import { TestBed, async } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { MapToolModule } from './map-tool/map-tool.module';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastModule } from 'ng2-toastr';
import { MenuComponent } from './menu/menu.component';
import { ServicesModule } from './services/services.module';

export class TranslateServiceStub {
  public get(key: any): any {
    Observable.of(key);
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UiModule,
        MapToolModule,
        RouterTestingModule,
        TranslateModule,
        TooltipModule.forRoot(),
        ToastModule.forRoot(),
        ServicesModule.forRoot()
      ],
      declarations: [
        AppComponent, HeaderBarComponent, FooterComponent, MenuComponent
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceStub },
        { provide: Title, useValue: { setTitle: (...args) => {} } }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
