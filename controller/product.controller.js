var Mall_Product = [
{
    product_name: "cadbury",
    product_id:"1233",
    category: "choclate",
  
    },
    {
        product_name: "Vivo",
        product_id:"1234",
        category: "Phone",
    },
    {
            product_name: "cream",
        product_id:"1232",
        category: "cosmetic",
    }
]

module.exports.getProductId = (req, res)=>res.json(Mall_Product.filter((item)=>item.product_id == req.params.product_id))
    

module.exports.postProduct=(req,res)=>{
    users.push(req.body);
    res.json(My_Product);
}

            //    module.exports.myFun1 = function(req, res){
            //     res.json(Mall_Product.filter((item)=>item.product_id == req.params.product_id)); 
            //    }
            //    module.exports.myFun2 = function(req, res){
            //     Mall_Product.push(req.params) 
            //    }
