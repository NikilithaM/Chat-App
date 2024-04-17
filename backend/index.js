const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {username: username, secret: username, first_name: username},
      {headers:{"private-key":"500824c3-e1bb-4bdb-a729-31c5ad2b0336"}}
    );
    return res.status(r.status).json(r.data);
  } catch (e){
    return res.status(e.response.status).json(e.response.data);
  }
 // 500824c3-e1bb-4bdb-a729-31c5ad2b0336
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);