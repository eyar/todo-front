import React, {FormEvent} from 'React'
import { Form, Button } from 'react-bootstrap'
import style from './TaskForm.style'
import axios from 'axios'

export default () => {
    const handleSubmit = async (evt: FormEvent) => {
        evt.preventDefault();
        console.log(evt.target.username.value)
        const results  = await axios.post('localhost/api/todos',{
            username: evt.target.username.value,
            phone: evt.target.phone.value,
            email: evt.target.email.value
        })
    }

    return <Form inline className='my-4' onSubmit={handleSubmit}>
        <Form.Control
            className="mb-2 mr-sm-2"
            placeholder="שם משתמש"
            name='username'
            />
        <Form.Control
            className="mb-2 mr-sm-2"
            placeholder="טלפון"
            name='phone'
            />
        <Form.Control
            className="mb-2 mr-sm-2"
            placeholder="מייל"
            name='email'
        />
        <Button type="submit" className="mx-2">שמור</Button>
    </Form>
}