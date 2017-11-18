const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const config = require('./config');
const app = express();

//graphql
const schema = require('./schema')
const MovieSchema = require('./models/movie')


app.get('/', (req, res) => {
    res.send({ message: 'Hello bogota.js' })
})

app.use('/graphql', bodyParser.json(),
    graphqlExpress({
        schema,
        context: {
            MovieSchema
        }
    })
)

app.use('/graphiql',
    graphiqlExpress({
       endpointURL: '/graphql'
    }))

mongoose.connect('mongodb://localhost:27017/movies', {useMongoClient: true})
    .then(() => {
        console.log('conexion a la base de datos exitosa');
        app.listen(config.port, () => {
            console.log('server runing in port', config.port)
        })
    })




