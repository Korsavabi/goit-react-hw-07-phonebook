import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import Form from "../Form/Form";
import FilterForm from "../FilterForm/FilterForm";
import PhoneItem from "../PhoneItem/PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from '../../redux/action/todoList';
import { v4 as uuidv4 } from 'uuid';
import { Title, Div, ERROR } from './StyleTodoPhone';
import { getTodoOperation, postTodoOperation, deleteTodoOperation } from './../../redux/operations/todoOperations';
import Loader from 'react-loader-spinner';

const TodoPhone = () => {
	const [error, setError] = useState('');
	const contacts = useSelector((state) => state.todoList);
	const loader = useSelector((state) => state.loader);
	const errorReducer = useSelector((state) => state.errorReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!!error) {
			setTimeout(() => {
				setError(false)
			}, 1000)

		}
		dispatch(getTodoOperation())
	}, [error, dispatch])

	const addTask = (name, number) => {
		const contact = {
			name: name,
			number: number,
			id: uuidv4()
		}

		if (!name && !number) {
			return
		}

		if (contacts.every((contact) => !contact.name.includes(name))) {
			dispatch(postTodoOperation(contact));
			dispatch(getTodoOperation());
		} else {
			setError(`${name} is already in contacts`);
		}
	}

	const deleteTask = (id) => {
		dispatch(deleteTodoOperation(id))
		dispatch(deleteItem(id))
	}



	return (
		<>
			<Div in={!!error}>
				<p>{error}</p>
			</Div>
			<Title in={true} appear={true}>
				Phonebook
			</Title>
			<Form addTask={addTask} />
			{<ERROR>{errorReducer}</ERROR>}
			{ loader && <Loader type="Puff"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000} />}
			{!errorReducer && !loader && (
				<Section title={"Contacts:"}>
					{contacts.length > 1 && <FilterForm />}
					<PhoneItem deleteTask={deleteTask} contacts={contacts} />
				</Section>)}
		</>
	)
}

export default TodoPhone
