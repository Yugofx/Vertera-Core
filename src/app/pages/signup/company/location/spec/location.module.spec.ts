import { AddressModule } from '../location.module';

describe('AddressModule', () => {
  let addressModule: AddressModule;

  beforeEach(() => {
    addressModule = new AddressModule();
  });

  it('should create an instance', () => {
    expect(addressModule).toBeTruthy();
  });
});
