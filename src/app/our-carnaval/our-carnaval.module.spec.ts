import { OurCarnavalModule } from './our-carnaval.module';

describe('OurCarnavalModule', () => {
  let ourCarnavalModule: OurCarnavalModule;

  beforeEach(() => {
    ourCarnavalModule = new OurCarnavalModule();
  });

  it('should create an instance', () => {
    expect(ourCarnavalModule).toBeTruthy();
  });
});
