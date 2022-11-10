import express from 'express'
import {AskQuestion, getAllQuestions, deleteQuestion} from '../controllers/Questions.js'
import auth from '../middlewares/auth.js';

const router = express.Router()

router.post('/Ask', auth, AskQuestion)
router.get('/get', getAllQuestions);
router.delete('/delete/:id', deleteQuestion);
export default router