import React, { useState } from 'react';

function TodoForm({onSubmit}) {

    const [value, setValue] = useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!onSubmit) {
            return;
        }
        const formValue = {titile : value};
        onSubmit(formValue);

        setValue('');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input value={value} onChange={(e)=> setValue(e.target.value)} type="text" />
        </form>
    );
}

export default TodoForm;