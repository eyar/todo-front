import React from "react"
import {Container, Form } from 'react-bootstrap'
import Layout from "../components/layout"
import TaskForm from '../components/TaskForm/TaskForm'
import style from './index.style'

export default function Home() {
  return (
    <Layout>
      <Container className={style}>
        <h1>ניהול משימות</h1>
        <input placeholder='חיפוש משימה...'></input>
        <TaskForm/>
      </Container>
    </Layout>
  )
}