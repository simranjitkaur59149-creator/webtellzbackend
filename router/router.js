import express from "express"
import upload from "../middleware/upload.js"
import Review from "../model/reviewModel.js"
const routes =express.Router()
routes.post("/review",upload.single("image"),async (req,res)=>{
    
    try {
        console.log("Body:", req.body);
    console.log("File:", req.file);
        const {user,comment,rating}=req.body
        const newReview=await Review.create({
            user,comment,rating,image:req.file.filename || " "
        })
        console.log("Created Review:", newReview);
        res.status(201).json(newReview)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
routes.get("/allreviews",async (req,res) => {
    try {
        
        const reviews=await Review.find().sort({createdAt:-1}) 
        res.json(reviews)   
    } catch (error) {
     res.status(500).json({message:error.message})   
    }
})
routes.delete("/delete/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default routes;