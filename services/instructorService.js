// in this file we can call the all the databse calls

const instructorModel = require('instructorModel')// import from  instructor user model

async function instructorSignup(fullname, email, password) {
  const alreadyExisting = await instructorModel.findOne({ email })

  if (alreadyExisting) {
    throw new Error('instructor user already exist with this mail id')
  }
  let userInstructor = await instructorModel.create({
    fullname,
    email,
    password,
  })
}
