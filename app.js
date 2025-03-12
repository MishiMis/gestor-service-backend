import 'dotenv/config';
import express from 'express';
import projectRouter from './src/routes/project.router.js';

const app = express();
app.use('/projects', projectRouter);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log('Server running on port ' + PORT);
    });
} catch (error) {
    console.log(error);
}