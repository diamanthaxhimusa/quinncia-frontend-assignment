import express from 'express';
import {
  create,
  getOne,
  getMany,
} from '../controllers/tag.controller';

const router = express.Router();

router.post('/', create);
router.get('/many', getMany);
router.get('/:id', getOne);

export default router;
