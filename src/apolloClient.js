import ApollocClient from "apollo-boost"

const client = new ApollocClient({
    //uri: "http://localhost:4000/"
    uri: "https://movieql.now.sh/"
})

export default client;