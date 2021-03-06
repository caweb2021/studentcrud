import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { AppreciationsService } from '../service/appreciations.service';

import { AppreciationsComponent } from './appreciations.component';

describe('Component Tests', () => {
  describe('Appreciations Management Component', () => {
    let comp: AppreciationsComponent;
    let fixture: ComponentFixture<AppreciationsComponent>;
    let service: AppreciationsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [AppreciationsComponent],
      })
        .overrideTemplate(AppreciationsComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AppreciationsComponent);
      comp = fixture.componentInstance;
      service = TestBed.inject(AppreciationsService);

      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [{ id: 'ABC' }],
            headers,
          })
        )
      );
    });

    it('Should call load all on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.appreciations?.[0]).toEqual(jasmine.objectContaining({ id: 'ABC' }));
    });
  });
});
