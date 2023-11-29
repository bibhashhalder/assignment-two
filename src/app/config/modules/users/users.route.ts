import express from 'express'
import { userControlar } from './users.controler'

const router =express.Router()
router.post('/user', userControlar.createUser)

export const userRoutes =router