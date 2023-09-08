
const express= require('express')
const app = express();
const cors=require("cors"); 
app.use(cors());



const db=require('./connection');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// const assetRouter=require("./routes/assetRoutes");
// const departmentRouter=require("./routes/departmentRoutes");
// const requestRouter=require("./routes/requestRoutes");
// const userRouter=require("./routes/userRoutes");

// app.use('/assets',assetRouter);
// app.use('/departments',departmentRouter);
// app.use('/users',userRouter);
// app.use('/assetrequests',requestRouter);

const Asset = require('./models/assets');

app.post('/assets',async (req, res) => {
    try {
        const asset = new Asset(req.body);
        await asset.save();
        res.status(201).json(asset);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.get("/assets",async (req, res) => {
    try {
        const asset = await Asset.find();
        // await asset.save();
        res.status(200).json(asset);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.route("/assets").get(async (req, res) => {
  try {
      const availableAssets = await Asset.find({ status: 'available' });
      res.json(availableAssets);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});
app.route("/assets/:id").delete(async(req,res)=>{
      const {id}=req.params;
      try{
        const assetDel=await Asset.findByIdAndRemove(id);
        // await assetDel.remove();
        res.json("Deleted")
      }catch(error){
        res.status(500).send(error)
      }
    })
//To update availability of assets
app.route("/assets/:id").patch(async(req,res)=>{
  try {
      const Id=req.params.id;
      const asset = await Asset.findOneAndUpdate(
          {_id:Id},req.body,
          { new: true }
      );
      res.json(asset);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});
//To lend 
app.route("/assets/:asset_id/students/:student_id").patch(async(req,res)=>{
  try {
      const Id=req.params.asset_id;
      const Id2=req.params.student_id;
      const asset = await Asset.findByIdAndUpdate(
          {_id:Id,student_id:Id2},req.body,
          { new: true }
      );
      res.json(asset);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});
//To update the return 
app.route("/:id").patch(async(req,res)=>{
  try {
      const asset = await Asset.findById(req.params.id);
  
      if (!asset) {
        return res.status(404).json({ message: 'Asset not found' });
      }
  
      if (asset.status === 'available') {
        return res.status(400).json({ message: 'Asset already available' });
      }
  
      const returnDate = new Date(asset.return_date);
      const lendDate = new Date(asset.borrowed_date);
  
      const diffTime = Math.abs(returnDate - lendDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
      const finePerDay = 10; // Change this as required
      const maxFine = 100; // Change this as required
  
      let fine = 0;
      if (diffDays > 5) {
        fine = Math.min(maxFine, finePerDay * (diffDays - asset.maxLendDays));
      }
  
      const updatedAsset = await Asset.findByIdAndUpdate(
        req.params.id,
        {
          status: 'available',
          students: {
            studentId: null,
            borrowed_date:null,
            return_date:Date.now()
        
          },
          fine: fine,
        },
        { new: true }
      );
  
      res.json(updatedAsset);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});
// module.exports = { createAsset };

const Department = require('./models/department');

app.post('/departments' ,async (req, res) => {
    try {
        const department = await Department(req.body);
        await department.save();
        res.status(201).json(department);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.get('/departments',async (req, res) => {
  try {
      const dept = await Department.find();
      res.status(201).json(dept);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});
app.get('departments/labs/:id',async (req, res) => {
  const {id}=req.params;
  try {
      const Labs = await Department.findById(id);
      res.status(201).json(Labs);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// module.exports = { createDepartment };

const User = require('./models/user');

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.get('/users', async (req, res) => {
  try {
      const user = await User.find();
      res.status(201).json(user);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});
app.patch("/users/:id",async(req,res)=>{
  const {id}=req.params;
  const{name,email,password,role,department}= req.body;
  try{
  const user = await User.findByIdAndUpdate(id,{name,email,password,role,department});
  await user.save();
  res.status(201).json(user);
} catch (err) {
    res.status(400).json({ message: err.message });}
});

// module.exports = { createUser };

const AssetRequest = require('./models/assetRequest');

app.post('/assetrequests', async (req, res) => {
    try {
        const assetRequest = new AssetRequest(req.body);
        await assetRequest.save();
        res.status(201).json(assetRequest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.get('/assetrequests', async (req, res) => {
  try {
      const assetRequest = await AssetRequest.find();
      res.status(201).json(assetRequest);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

const Group = require('./models/group');

app.post('/groups',async (req, res) => {
    try {
        const group = new Group(req.body);
        await group.save();
        res.status(201).json(group);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.get("/groups",async (req, res) => {
    try {
        const group = await Group.find();
        // await asset.save();
        res.status(200).json(group);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//To Report
const Report = require('./models/report');

app.post('/reports',async (req, res) => {
    try {
        const report = new Report(req.body);
        await report.save();
        res.status(201).json(report);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.get("/reports",async (req, res) => {
    try {
        const report = await Report.find();
        // await asset.save();
        res.status(200).json(report);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

 


//CRUD operations

// app.post('/', async(req,res)=>{
//   try{
//     const asset= new postAsset(req.body);
//     await asset.save();
//     res.json(asset)
//   }catch(error){
//     res.status(500).send(error)
//   }
// })

// app.get('/', async(req,res)=>{
//   try{
//     const post=await postModel.find();
//     res.json(post)
//   }catch(error){
//     res.status(500).send(error)
//   }
// })
// app.get('/:id', async(req,res)=>{
//   const {id}=req.params;
//   try{
//     const posts=await postModel.findById(id);
//     res.json(posts)
//   }catch(error){
//     res.status(500).send(error)
//   }
// })
// app.put('/:id', async(req,res)=>{
//   const {id}=req.params;
//   const{Lab,Department,Location}= req.body;
//   try{
//     const postUp=await postModel.findByIdAndUpdate(id,{Lab,Department,Location});
//     res.json(postUp)
//   }catch(error){
//     res.status(500).send(error)
//   }
// })
// app.delete('/:id', async(req,res)=>{
//   const {id}=req.params;
//   try{
//     const postDel=await postModel.findByIdAndDelete(id);
//     // await postDel.remove();
//     res.json("Deleted")
//   }catch(error){
//     res.status(500).send(error)
//   }
// })


app.listen(3001,()=>{
  console.log("listening at 3001");
});
// app.set("socketio", io);