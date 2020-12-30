
var users = [{
    name: "John",
    address :"h no.5 wakad pune",
    pin : "401106",
    email: "john@gmail.com",
    password:"qwewere"
    },
    {
        name: "Rahul",
        address :"hinjwadi pune",
        pin : "401107",
        email: "rahul@gmail.com",
        password:"qfrere"
        },
        {
            name: "Karan",
            address :"somatane pune",
            pin : "401506",
            email: "karan@gmail.com",
            password:"qwreere"
            }]
module.exports.getUsers = function(req, res){
    res.send(users); 
   }
module.exports.postUser=(req,res)=>{
    users.push(req.body);
    res.json(users);

}