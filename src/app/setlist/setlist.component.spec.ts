import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SetlistComponent} from './setlist.component';
import {SetlistService} from './setlist.service';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SetlistComponent', () => {
  let mockSetlistService: jasmine.SpyObj<SetlistService>;
  let component: SetlistComponent;
  let fixture: ComponentFixture<SetlistComponent>;

  beforeEach(async () => {
    mockSetlistService = jasmine.createSpyObj('fake Setlist service', [], {
      test: 'Fake Setlist!',
      setlist$: of([
        {name: 'Name1', originalArtist: 'Artist1'},
        {name: 'Name2', originalArtist: 'Artist2'},
      ]),
    });
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SetlistComponent],
      providers: [{provide: SetlistService, useValue: mockSetlistService}],
    }).compileComponents();

    fixture = TestBed.createComponent(SetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get test text from service', () => {
    expect(component.test).toEqual('Fake Setlist!');
  });

  it('should show tracks', () => {
    const trackNames = fixture.nativeElement.querySelectorAll('.track-name');
    expect(trackNames.length).toEqual(2);
    expect(trackNames[0].innerText).toEqual('Name1');
    expect(trackNames[1].innerText).toEqual('Name2');
  });
});
