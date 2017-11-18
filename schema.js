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
            allMovies: async (parent, args, {MovieSchema}) => {
               const response = await MovieSchema.find()
               return response;
            },
            movieById: async (parent, args, {MovieSchema}) => {            
              const response = await MovieSchema.findOne({_id: args.id})
              return response;
            }
        },
      Mutation:{
          registerMovie: async (parent, args, {MovieSchema}) => {
             const response = await  MovieSchema.create(args.input)
             return response;
          }
      }      

}


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;