describe('{name}.controller', () => {
    let $componentController
	let $q
	const locals = {}

    beforeEach(angular.mock.module('astreaApp'));
    beforeEach(inject((_$componentController_, _$q_) => {
		$componentController = _$componentController_
		$q = _$q_
	}))
})