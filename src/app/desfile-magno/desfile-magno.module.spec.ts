import { DesfileMagnoModule } from './desfile-magno.module';

describe('DesfileMagnoModule', () => {
  let desfileMagnoModule: DesfileMagnoModule;

  beforeEach(() => {
    desfileMagnoModule = new DesfileMagnoModule();
  });

  it('should create an instance', () => {
    expect(desfileMagnoModule).toBeTruthy();
  });
});
