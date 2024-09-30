const app= require("./app");
const dotenv= require("dotenv");
dotenv.config({path:"backend/config/config.env"})
const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`server is working  on http://localhost:${port}`);
})