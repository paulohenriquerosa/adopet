import { Router } from 'express'

const usersRouter = Router()

usersRouter.get('/', (request, response) => {
  return response.json({message:'Hello World again again'})
})

export default usersRouter
