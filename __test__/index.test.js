import { getAllByRole, getByText, fireEvent, getByRole } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

function shouldExistDOM() {
    const div = document.createElement('div');
    div.innerHTML = `
    `

    return div;
}

describe('should be countdown timer', function(){
    test('', function() {
        const  = getByRole(container, '');
        const  = getAllByRole(contentButtons, '');

        expect().toBeDefined();

        expect().toBe();
    })
})