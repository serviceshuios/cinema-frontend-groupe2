import { TestBed } from '@angular/core/testing';

import { ProjectionfilmService } from './projectionfilm.service';

describe('ProjectionfilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectionfilmService = TestBed.get(ProjectionfilmService);
    expect(service).toBeTruthy();
  });
});
