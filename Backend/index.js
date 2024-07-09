import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: "http://localhost:5173", // Change this to the specific origin of your frontend app
  methods: "GET,POST", // Add other methods as needed
  allowedHeaders: "Content-Type,Authorization", // Add other headers as needed
}
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


// async function main() {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}`);

//     console.log("Connected to MongoDB");
    
//     const UserScoreSchema = new mongoose.Schema({
//       userEmail: String,
//       totalScore: Number,
//       Category:{
//       NTCBCH: { type: Number, default: 0 },
//       NTCLAK: { type: Number, default: 0 },
//       NTCWLS: { type: Number, default: 0 },
//       NTCFAL: { type: Number, default: 0 },
//       NTCHLS: { type: Number, default: 0 },
//       NTCISL: { type: Number, default: 0 },
//       NTCNPK: { type: Number, default: 0 },
//       PLPHIN: { type: Number, default: 0 },
//       PLPCHU: { type: Number, default: 0 },
//       HISFRT: { type: Number, default: 0 },
//       HISMUS: { type: Number, default: 0 },
//       HISMON: { type: Number, default: 0 },
//       PREHRG: { type: Number, default: 0 },
//       NOPHRG: { type: Number, default: 0 },
//       FODCON: { type: Number, default: 0 },
//       FODIND: { type: Number, default: 0 },
//       FODCOF: { type: Number, default: 0 },
//       FODNGT: { type: Number, default: 0 },
//       FODPUB: { type: Number, default: 0 },
//       RCNART: { type: Number, default: 0 },
//       RCNCLB: { type: Number, default: 0 },
//       RCNPCB: { type: Number, default: 0 },
//       RCNTHT: { type: Number, default: 0 },
//       RCNAUS: { type: Number, default: 0 },
//       RCNCMP: { type: Number, default: 0 },
//       RCNCSN: { type: Number, default: 0 },
//       RCNGHT: { type: Number, default: 0 },
//       EVTDAN: { type: Number, default: 0 },
//       EVTFOD: { type: Number, default: 0 },
//       EVTCMD: { type: Number, default: 0 },
//       EVTMUS: { type: Number, default: 0 },
//       EVTTHT: { type: Number, default: 0 }
//       }
//     });
  
//     const UserScore = mongoose.model("UserScore", UserScoreSchema);
  
//     app.post("/ScoreBoard", async (req, res) => {
//       // console.log(req.body);
//       const { points, user, category } = req.body;
//       console.log(points, user, category);
    
//       try {
//         const existingUser = await UserScore.findOne({ userEmail: user.email });
    
//         if (!existingUser) {
//           const newUserScore = new UserScore({
//             userEmail: user.email,
//             totalScore: points,
//             // Category: getCategoryWithDefaultValues(category, points)
//           });
    
//           await newUserScore.save();
//         } else {
//           // If the user exists, update their total points and category scores
//           const updatedScores = { ...existingUser.toObject() };
//           updatedScores.totalScore += points;
    
//           category.forEach(cat => {
//             if (updatedScores.Category.hasOwnProperty(cat)) {
//               updatedScores.Category[cat] += points;
//             } else {
//               updatedScores.Category[cat] = points;
//             }
//           });
    
//           await UserScore.updateOne({ userEmail: user.email }, { $set: updatedScores });
//         }
    
//         res.status(200).json({ success: true });
//       } catch (err) {
//         console.error("Error saving user score:", err);
//         res.status(500).json({ success: false, error: "Error saving user score" });
//       }
//     });
    
    
    
// app.get("/fetchData",async(req,res)=>{
//     try{
//       const allUserData=await UserScore.find().select("userEmail totalScore");
//       console.log(allUserData)
//       res.send(allUserData)
//     }catch(error){
//       console.log(error)
//     }
// })
// app.get("/userData",async(req,res)=>{
//   const email=req.query.email
//   console.log(email)
  
//   try{
//     const particularUserData=await UserScore.find({userEmail:email})
  
//     res.send(particularUserData[0])
//   }catch(error){
//     console.log(error)
//   }
// })
// app.post("/",async(req,res)=>{
//      const {
//       type,
//       lat,
//       lng,
//       radius
//      }=req.body;
//      console.log(req.body);
//     const bearerToken = process.env.Bearer_Token;
//     try {
//         const response = await axios.get(`https://atlas.mappls.com/api/places/nearby/json?keywords=${type}&refLocation=${lat},${lng}&radius=${radius}`, {
//             headers: {
//                 'Authorization': `bearer ${bearerToken}`,
//                 'Content-Type': 'application/json'
//             }
//         });
//         res.send(response.data)
//     } catch (error) {
//         console.log(error);
//     }
  
// })

// app.post("/getDistance",async (req,res)=>{
//   const baseUrl = "https://apis.mappls.com/advancedmaps/v1";
//   const MapplsApiKEy = process.env.MAPPLS_API_KEY;
//   const {
//     userLat,
//     userLong,
//     quesLat,
//     quesLong
//   } = req.body;
  
//   const userLat1=parseFloat(userLat.toFixed(4));
//   const userLong1=parseFloat(userLong.toFixed(4));
//   try{
//     const response=await axios.get(`${baseUrl}/${MapplsApiKEy}/distance_matrix/walking/${quesLat},${quesLong};${userLong1},${userLat1}`);
//     const distance = response.data.results.distances;
//     res.status(200).json({ distance });
//   }catch(err){
//     console.log(err);
//   }
// })

app.get("/testing",(req,res)=>{
  res.send("Hello there test successful")
})
app.get("/",(req,res)=>{
  res.send("Hey there i welcome you too MapMyIndia hackthaon project")
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });

//  } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }
// main();
  
export default app;