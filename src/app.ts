import { envs } from "./config/envs";
import { app } from "./server";

app.listen( envs.PORT, ()=> {
    console.log(`server running in port ${ envs.PORT }`);
});



