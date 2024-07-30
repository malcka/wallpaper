import express from 'express';

const router = express.Router();
router.get('/route', (req, res) => {
    res.send('Route!');
  });
const routesUser = (app) =>{
    app.get('/', (req, res) => {
        res.send('get users work!')
      })
      app.get('/users', (req, res) => {
        res.send('get usersusers work!')
      })
      
      app.put('/',(req,res)=>{
          res.send("put users work")
      });
      app.post('/',(req,res)=>{
          res.send('post users work')
      });
      app.delete('/',(req,res)=>{
          res.send('delete users work')
      });
    
}

  export default routesUser;