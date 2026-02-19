import app from './app.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import bookRoutes from './routes/book.routes.js';
import authorRoutes from './routes/author.routes.js';
import genreRoutes from './routes/genre.routes.js'

dotenv.config();

// Connect to database
connectDB();

// this acts as Middleware in our app
app.use(cors());

// Routes
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/authors", authorRoutes);
app.use("/api/v1/books", genreRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
