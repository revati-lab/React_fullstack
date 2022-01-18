//This is a custom hook component
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
query{
  characters{
    results{
      id
      name
      image
    }
  }
}
`


export const useCharacters = () => {
    // we get object by querying
    //const obj = useQuery(GET_CHARACTERS);
    //we get three different properties from that obj
    //obj.error
    //obj.loading ---> is a boolean value
    //obj.data ---> actual data.
    //destructing the above line like below
    const {error, loading, data} = useQuery(GET_CHARACTERS);
    
    return {error, loading, data}
}

