
/**
 * Creates a date time creator component
 * Used to dynamically create date time inputs
 * for form elements.
 * 
 * @param {Date[]} dateTimes 
 * @returns 
 */
export default function DateTimeCreator(dateTimes, removeable = true, editable = false) {

    // Create div wrapper
    const dateTimeCreatorWrapper = document.createElement('div');

    // Create default date time input
    const defaultDateTimeInputWrapper = document.createElement('div');
    defaultDateTimeInputWrapper.classList.add('flex');
    const defaultDateTimeInput = createDateTimeInput();
    defaultDateTimeInputWrapper.appendChild(defaultDateTimeInput);

    // Create add new input button
    const addNewInputButton = createAddNewInputButton();

    // Add to wrapper
    dateTimeCreatorWrapper.appendChild(defaultDateTimeInputWrapper);
    dateTimeCreatorWrapper.appendChild(addNewInputButton);

    // Add event listener to add new input button
    addNewInputButton.addEventListener('click', (e) => {
        // Prevent default
        e.preventDefault();

        const newInputWrapper = createDateTimeInputWrapper(true, false);
        dateTimeCreatorWrapper.insertBefore(newInputWrapper, addNewInputButton);
    });

    // If dateTimes is not null
    if (dateTimes) {
        for (let i = 0; i < dateTimes.length; i++) {
            // if the date time is the first date time
            if (i === 0) {
                // Set the default date time input value
                defaultDateTimeInput.value = dateTimes[i].dateTime;

                // If editable
                if (editable) {
                    // Add edit button
                    addEditButtonToWrapper(defaultDateTimeInputWrapper, defaultDateTimeInput, dateTimes[i].id);
                }

            } else {
                // Create new date time input wrapper
                const newInputWrapper = createDateTimeInputWrapper(removeable, editable, dateTimes[i].id);

                // Set value
                newInputWrapper.querySelector('input').value = dateTimes[i].dateTime;

                // Append to wrapper
                dateTimeCreatorWrapper.insertBefore(newInputWrapper, addNewInputButton);
            }
        }
    }

    return dateTimeCreatorWrapper;
}

function createAddNewInputButton() {
    const addNewInputButton = document.createElement('button');
    addNewInputButton.classList.add('button');
    addNewInputButton.classList.add('info');
    addNewInputButton.innerHTML = 'Add New Date';

    return addNewInputButton;
}

function addEditButtonToWrapper(dateTimeInputWrapper, input, dateTimeId) {
    const editButton = createEditButton();

    // Add event listener to edit button
    editButton.addEventListener('click', (e) => {
        // Prevent default
        e.preventDefault();

        // Navigate to edit show date time
        window.router.navigate(`/admin/showdatetimes/${dateTimeId}/edit`);
    });

    dateTimeInputWrapper.appendChild(editButton);

    // Disable input
    input.disabled = true;
}

function createDateTimeInputWrapper(removeable, editable, dateTimeId) {
    const dateTimeInputWrapper = document.createElement('div');
    dateTimeInputWrapper.classList.add('flex');

    const dateTimeInput = createDateTimeInput();
    dateTimeInputWrapper.appendChild(dateTimeInput);

    if (removeable) {
        const removeButton = createRemoveButton();

        // Add event listener to remove button
        removeButton.addEventListener('click', (e) => {
            // Prevent default
            e.preventDefault();

            // Remove date time input wrapper
            dateTimeInputWrapper.remove();
        });

        dateTimeInputWrapper.appendChild(removeButton);
    }

    if (editable) {
        addEditButtonToWrapper(dateTimeInputWrapper, dateTimeInput, dateTimeId);
    }

    return dateTimeInputWrapper;
}

function createEditButton() {
    const editButton = document.createElement('button');
    editButton.classList.add('button');
    editButton.classList.add('info');
    editButton.innerHTML = 'Edit Date';

    return editButton;
}

function createRemoveButton() {
    const removeButton = document.createElement('button');
    removeButton.classList.add('button');
    removeButton.classList.add('secondary');
    removeButton.innerHTML = 'Remove Date';

    return removeButton;
}

function createDateTimeInput() {
    const dateTimeInput = document.createElement('input');
    dateTimeInput.type = 'datetime-local';
    dateTimeInput.name = 'dateTime';
    dateTimeInput.required = true;
    dateTimeInput.classList.add('dateTimeInput');

    return dateTimeInput;
}