import { ProfileModule } from '../settings.module';

describe('ProfileModule', () => {
  let profileModule: ProfileModule;

  beforeEach(() => {
    profileModule = new ProfileModule();
  });

  it('should create an instance', () => {
    expect(profileModule).toBeTruthy();
  });
});
