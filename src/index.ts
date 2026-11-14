import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const PORT: number = 8080;

app.use(express.static("."));

// app.get('/', (req: Request, res: Response) => {
//   res.send('Sup, bro?');
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});