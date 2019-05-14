import { PasswordModule } from '../password.module';

describe('AccountModule', () => {
  let accountModule: PasswordModule;

  beforeEach(() => {
    accountModule = new PasswordModule();
  });

  it('should create an instance', () => {
    expect(accountModule).toBeTruthy();
  });
});
