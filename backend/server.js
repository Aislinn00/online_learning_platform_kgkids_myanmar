// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userModel = require('./models/User');

// const app = express();
// app.use(cors());
// app.use(express.json());


// mongoose.connect("mongodb://localhost:27017/user")
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// //     app.post('/login', (req, res) => {
// //     const { email, password } = req.body;
// //     userModel.findOne({ email: email })
// //         // .then(user => {
// //         //     // if (user && user.password === password) {
// //         //     //     // res.json({ message: "Success" });
// //         //     //     console.log(user)
// //         //     // } else if (user) {
// //         //     //     res.status(401).json({ message: "The password is incorrect" });
// //         //     // } else {
// //         //     //     res.status(404).json({ message: "No user record existed" });
// //         //     // }
// //         //     console.log(user)
// //         // })
// //         // .catch(err => {
// //         //     console.error('Server error:', err);
// //         //     res.status(500).json({ message: "Server error" });
// //         // });
// //         console.log(email, password)
// // });
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await userModel.findOne({ email: email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
        
//         // Compare the provided password with the password stored in the database
//         if (user.password !== password) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }
        
//         // If the password matches, send a success response
//         res.status(200).json({ message: "Login successful", user: user });
//     } catch (err) {
//         console.error('Server error:', err);
//         res.status(500).json({ message: "Server error" });
//     }
// });


//     app.post('/signup', (req, res) => {
//     console.log('Register endpoint hit with data:', req.body);
//     userModel.create(req.body)
//         .then(users => {
//             console.log('User created:', users);
//             res.json(users);
//         })
//         .catch(err => {
//             console.error('Error creating user:', err);
//             res.status(400).json(err);
//         });
// });

// app.listen(3001, () => console.log('Server is running on http://localhost:3001'));
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth'); // Ensure the path is correct

app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb://localhost:27017/user';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
