import React from 'react';
import { List, Item, Button, Text } from './StyleItem';
import { TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";

const PhoneItem = ({ deleteTask, contacts }) => {
	const filterValue = useSelector((state) => state.filter);

    const searchItem = () => {
		if (contacts.length > 0) {
			return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
		} else return contacts
	}
    return (
        <>
        <TransitionGroup component={List}>
            {
                searchItem().map((contact) => 
                    <Item key={contact.id} in={true} appear={true} >
                        <Text>{contact.name}: {contact.number}</Text>
                        <Button onClick={() => deleteTask(contact.id)}>Delete</Button>
                    </Item>
                )
            }
            </TransitionGroup>
        </>
    );
};

export default PhoneItem;