import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import bodyParser from 'body-parser';

dotenv.config();
const port = 3000;
const app = express();
const privateKey = process.env.PRIVATE_KEY;
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cors({ origin: true}));

app.post("/authenticate", async (req, res) => {
    console.log(req.body);
    const {username}  = req.body;
    // Get or create user on Chat Engine!
    console.log(username);
    console.log(privateKey);
    try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "PRIVATE-KEY": privateKey } }
      );
      console.log("done");
      return res.status(r.status).json(r.data);
    } catch (e) {
      console.log("error");
      return res.status(e.response.status).json(e.response.data);
    }
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
