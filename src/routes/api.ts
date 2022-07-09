import { Router } from 'express';
import multer from 'multer';
import * as UploadFilesControler from '../controllers/uploadFiles.controller';

const upload = multer({
    dest: './tmp'
});

const router = Router();

router.post('/upload', upload.single('avatar'), UploadFilesControler.uploadFile);

export default router;