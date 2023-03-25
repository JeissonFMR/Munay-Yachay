import { MemoryCarnavalModule } from './memory-carnaval.module';

describe('MemoryCarnavalModule', () => {
  let memoryCarnavalModule: MemoryCarnavalModule;

  beforeEach(() => {
    memoryCarnavalModule = new MemoryCarnavalModule();
  });

  it('should create an instance', () => {
    expect(memoryCarnavalModule).toBeTruthy();
  });
});
