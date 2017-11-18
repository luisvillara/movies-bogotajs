const {makeExecutableSchema} = require('graphql-tools');

const typeDefs = `

    enum GenderTypes {
        Fiction,
        Horror,
        Drama,
        Animation
    }

    type Movie{
        id: ID!,
        name: String!,
        year: String!,
        description: String!,
        trailerUrl: String!,
        imageUrl: String!,
        gender: GenderTypes!,
        status: Int!
    }

    input MovieInput{
        name: String!,
        year: String!,
        trailerUrl: String!,
        description: String!,
        imageUrl: String!,
        gender: GenderTypes!,
        status: Int!
    }

    type Query{
        allMovies: [Movie],
        movieById(id: ID!): Movie 
    }

    type Mutation{
        registerMovie(input: MovieInput): Movie
    }
`
    const resolvers = {
        Query: {
            allMovies: () => {
                return [{
                    id: 1,
                    name: "prueba name",
                    year: "2017",
                    description: "description movie",
                    trailerUrl: "trailer url test",
                    imageUrl: "imgUrl trailer",
                    gender: "Fiction",
                    status: 4
                }]
            }
        }    
    }

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;