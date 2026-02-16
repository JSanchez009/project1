import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

app.use(cors())

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});