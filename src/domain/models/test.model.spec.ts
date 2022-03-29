import { TestModelHelper } from '../../helpers/test.model.helper';
import { _TestModel } from './Test.model';

describe('Models', () => {
  it('Class Test: should return properly values', () => {
    const testObj: TestModelHelper = {
      content: 'Class test content',
    };

    const testModel = new _TestModel(testObj);

    expect(testModel.content).toEqual('Class test content');
  });
});
