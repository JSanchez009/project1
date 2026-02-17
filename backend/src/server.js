import app from './app.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import bookRoutes from './routes/book.routes.js';

dotenv.config();

// Connect to database
connectDB();

// this acts as Middleware in our app
app.use(cors());

// Routes
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
