const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require('./models/Users')


const app=express()

app.use(express.json()) //This will convert data in json which we are transferring from frontend to backend
app.use(cors(
    {
        origin:["https://a3-schools-aftab.vercel.app/"],
        methods:["POST","GET"],
        credentials:true
    }
))

// mongoose.connect("mongodb+srv://aftab:aftab@cluster0.lpvpnl0.mongodb.net/?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//   }).then(()=>console.log(`Database connect ho gya`))
//   .catch(()=>console.log(`Tumse na ho payega`));

const uri = "mongodb+srv://diksha:diksha@cluster0.ozdz3di.mongodb.net/A3Schools?retryWrites=true&w=majority";
mongoose.connect(uri,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>console.log(`Database connect ho gya`))
.catch(()=>console.log(`Tumse na ho payega`))
app.get('/',(req,res)=>{
    res.json("Hello");
})
app.get('/',(req,res)=>{
    res.json("Hello");
})
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(users=>{
        if(users){
            if(users.password===password){
                res.json("Success")
            }
            else{
                res.json("Password is incorrect")
            }
        }
        else{
            res.json("No record existed");
        }
    })
})

app.post('/register',async(req,res)=>{
    try {
        const existingUser = await UserModel.findOne({ email: req.body.email });
        if (existingUser) {
          // User with the provided email already exists
          return res.status(409).json({ message: 'User already registered' });
        }
        // Proceed with creating the new user
        const newUser = await UserModel.create(req.body);
        res.json(newUser);
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.listen(3001,()=>{
    console.log("Server is running");
})
