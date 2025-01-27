export const typeDefs = `#graphql
  type Query {
    myProfile : User,
    posts : [Post]
    users : [User]
  }
  type Mutation {
      signup (
      name : String!
      email : String!
      password : String!
      
      ):User
    
    }


  type Post {
    id : ID!
    title: String!
    content: String!
    author: User
    createdAt : String!
    published : Boolean!
  }
  type User {
    id : ID!
    name: String!
    email: String!
    createdAt : String!
    posts:  [Post]
  }

  type Profile {
    id : ID!
    bio: String!
    email: String!
    user : User!
    createdAt : String!
  }
`;
