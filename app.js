import 'dotenv/config';
import express from 'express';

const app = express();

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log('Server running on port ' + PORT);
    });
}catch(err){
    console.log(err);
}