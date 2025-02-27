const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tamansameer5@gmail.com', 
    pass: 'bozf yicw eydb doxj'
  },
});

async function sendEmail(emailText, recipientUser) {
  const info = await transporter.sendMail({
    from: '"Farmer-web" <tamansameer5@gmail.com>', 
    to: recipientUser, 
    subject: "Approval ✔", 
    text: emailText, 
    html: emailText, 
  });
}

const registerUser = async (req, res) => {
  const emailExist = await User.exists({ email: req.body.email })
  if (emailExist) return res.status(409).send({ msg: "Email already exist!" })
  req.body.password = await bcrypt.hash(req.body.password, saltRounds);
  User.create(req.body)
  res.send({ msg: req.body.role + " created successfully" })

}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user) return res.status(401).send({ msg: "Invalid Email!!" })

  if ((user?.role == 'student' || user?.role == 'teacher') && !user.isVerified) return res.status(401).send({ msg: "Approval is still pending!! Please wait!" })
  const isPasswordMatched = await bcrypt.compare(password, user.password)

  if (!isPasswordMatched) return res.status(401).send({ msg: "Invalid Password!!" })
  const token = jwt.sign({ email }, process.env.SECRET_KEY);

  res.send({
    token,
    user,
    isLoggednIn: true,
    msg: 'Authorized!!'
  })

}

const getAllUser = async (req, res) => {
  let data
  if(req.query?.role){
    data = await User.find({role: req.query?.role})
  }else{
    data = await User.find()
  }
  res.send(data)
}

const approveUser = async (req, res) => {
  const user = await User.findById(req.params.userId)
  user.isVerified = true
  user.save()
  sendEmail("Dear Farrmer, you have been approved in Farmer-web, Kindly please login now!!", user.email )
  res.send('user approved')
}

const rejectUser = async (req, res) => {
  const user = await User.findById(req.params.userId)
  user.isVerified = false
  user.save()
  res.send('user rejected')
}

module.exports = { getAllUser, approveUser, loginUser, registerUser, rejectUser }