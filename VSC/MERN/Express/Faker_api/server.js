const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;


class User
{
    
    constructor()
    {

        // this.id = _id,
        // this.firstName= firstName,
        // this.lastName=lastName,
        // this.phoneNumber = phoneNumber,
        // this.email = email,
        // this.password = password
        this._id = faker.datatype.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password();
    }
}

class Student
{
    
    constructor()
    {
        this.name = faker.name.firstName()
        this.home_state = "Washington"
        this.lucky_number = faker.datatype.number()
        this.birthday = {
            month: faker.date.month(),
            day: faker.datatype.number(28),
            year: faker.datatype.number({min: 1980, max:2010})
        }
    }
}

class Company 
{
    constructor(_id, name, street, city, state, zip, country)
    {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = 
        {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}


app.get("/api", (req,res)=>{
    
    res.json({message:"this is working"});
});

app.get("/api/users/new", (req,res)=>{
    res.json({user: new User()})
})
app.get("/api/students/new", (req,res)=>{
    res.json({user: new Student()})
})

app.get("/api/companies/new", (req,res)=>{
    res.json({company: new Company()})
})


app.get("/api/user/compnay", (req,res)=>{
    res.json({user: new User(), company: new Company()})
})

app.listen(port, ()=>console.log(`App is ready to rock on port ${port}`))