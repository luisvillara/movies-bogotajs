const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const config = require('./config');
const bodyParser = require('body-parser');

const app = express();

//graphql
const schema = require('./schema')

app.get('/', (req, res) => {
    res.send({ message: 'Hello bogota.js' })
})

app.use('/graphql', bodyParser.json(),
    graphqlExpress({
        schema
    })
)

app.use('/graphiql',
    graphiqlExpress({
       endpointURL: '/graphql'
    }))

app.listen(config.port, () => {
    console.log('server runing in port', config.port)
})


