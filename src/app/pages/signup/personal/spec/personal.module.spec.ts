import { SignupPersonalModule } from '../personal.module';

describe('PersonalModule', () => {
  let personalModule: SignupPersonalModule;

  beforeEach(() => {
    personalModule = new SignupPersonalModule();
  });

  it('should create an instance', () => {
    expect(personalModule).toBeTruthy();
  });
});
