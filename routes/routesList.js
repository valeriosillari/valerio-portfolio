import express from 'express'

const router = express.Router()

// GET home page.
router.get('/', (req, res, next) => {
  res.render('index')
})

// GET Privacy policy Page.
router.get('/policy', (req, res, next) => {
  res.render('policy')
})

export default router
