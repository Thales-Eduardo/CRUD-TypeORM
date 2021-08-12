import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolderPath = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolderPath,

  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),

    filename(req, file, call) {
      const uniqueSuffix = crypto.randomBytes(10).toString('hex');
      const filename = `${uniqueSuffix}-${file.originalname}`;

      return call(null, filename);
    },
  }),
};
