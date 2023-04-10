window.onload = function () {
    const entryTable = document.querySelector('.entry-table');
    const tr = entryTable.tBodies[0].insertRow(0);

    const cell0 = tr.insertCell(0);
    cell0.textContent = 'まとめて入力';

    const cell1 = tr.insertCell(1);
    cell1.appendChild(createAllAttendTypeCheckBox());

    const cell2 = tr.insertCell(2);
    cell2.appendChild(createAllSelector('entry-time'));

    const cell3 = tr.insertCell(3);
    cell3.appendChild(createAllSelector('exit-time'));

    const cell4 = tr.insertCell(4);
    cell4.appendChild(createAllSelector('pick-up'));
}

function createAllAttendTypeCheckBox() {
    const attendTypes = Array.from(document.querySelectorAll('.attend-type'));
    const attendType = attendTypes.slice(-1)[0].cloneNode(true);
    attendType.removeAttribute('disabled');
    attendType.removeAttribute('checked');
    attendType.addEventListener('input', (event) => {
        attendTypes.forEach(element => {
            if (element.hasAttribute('disabled')) {
                return;
            }
            element.checked = !!event.target.checked;
        });
    });
    return attendType;
}

function createAllSelector(className) {
    const selectors = Array.from(document.querySelectorAll('.' + className));
    const allSelector = selectors.slice(-1)[0].cloneNode(true);
    allSelector.removeAttribute('disabled');
    allSelector.removeAttribute('style');
    allSelector.addEventListener('change', (event) => {
        selectors.forEach(selector => {
            if (selector.hasAttribute('disabled')) {
                return;
            }
            selector.selectedIndex = event.target.selectedIndex;
        });
    });
    return allSelector;
}
