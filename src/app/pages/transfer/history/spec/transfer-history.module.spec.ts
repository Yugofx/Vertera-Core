import { HistoryModule } from '../transfer-history.module';

describe('HistoryModule', () => {
  let historyModule: HistoryModule;

  beforeEach(() => {
    historyModule = new HistoryModule();
  });

  it('should create an instance', () => {
    expect(historyModule).toBeTruthy();
  });
});
