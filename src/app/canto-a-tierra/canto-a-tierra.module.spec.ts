import { CantoATierraModule } from './canto-a-tierra.module';

describe('CantoATierraModule', () => {
  let cantoATierraModule: CantoATierraModule;

  beforeEach(() => {
    cantoATierraModule = new CantoATierraModule();
  });

  it('should create an instance', () => {
    expect(cantoATierraModule).toBeTruthy();
  });
});
