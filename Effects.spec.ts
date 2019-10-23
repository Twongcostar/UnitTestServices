import { WeService } from 'service';
import { _throw } from 'rxjs/observable/throw';

describe('Effects', () => {
	let service: WeService
	let mockService;
	let FIELDTYPES;
	let fieldTypes;

	beforeEach(() => {
		
		FIELDTYPES = [
			fieldTypes = [{
				name: 'name',
				fieldTypeKey: 'key'
			}],
			fieldTypes = [{
				name: 'name2',
				fieldTypeKey: 'key2'
			}]
		]

		mockService = jasmine.createSpyObj(['GetFieldTypes']);
		service = new WeService(mockService);

	})

	it('should have no data', () => {
		expect(service.GetFieldTypes.length).toBe(0);
	})

	it('should return data', () => {

		service.GetFieldTypes = FIELDTYPES;

		expect(service.GetFieldTypes.length).toBe(2);
	})
	}
)
