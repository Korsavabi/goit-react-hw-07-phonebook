import React, { useState } from 'react';
import {Button, TodoForm, Text, Input} from './StyleForm';

const formInitalState = {
    name: '',
    number: '',
}
const Form = ({ addTask }) => {
    const [{ name, number }, setForm] = useState({ ...formInitalState });

    const submitHendler = (e) => {
        e.preventDefault();
        setForm({ ...formInitalState })
        addTask(name, number)
    }

    const inputHandler = ({ target }) => {
        const { value, name } = target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <>
            <TodoForm autoComplete="on" onSubmit={submitHendler}>
                <Text className="form__text">Name / Surname</Text>
                <Input className="input__form"
                    placeholder='Name'
                    type="text"
                    name="name"
                    value={name}
                    onChange={inputHandler}
                />
                <Text className="form__text">Number</Text>
                <Input className="input__form"
                    placeholder='Number'
                    type="tel"
                    name="number"
                    onChange={inputHandler}
                    value={number} />
                <Button type='submit' className="form__btn">Add contact</Button>
            </TodoForm>
        </>
    );
};

export default Form;