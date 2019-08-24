import express from 'express'

const router = express.Router()

// if push DIST folder all good on NOW ZEIT

// GET home page.
router.get('/', (req, res, next) => {
  res.render('index')
})

// GET Privacy policy Page.
router.get('/policy', (req, res, next) => {
  res.render('policy')
})

export default router
