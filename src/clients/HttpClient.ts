import axios from 'axios';
import keys from '../settings/keys'
import {print} from 'graphql'
import {ASTNode} from "graphql/language/ast";

// TODO add interceptors for error messaging

const client = axios.create({
    baseURL: keys.API_URL,
    timeout: 100000,
    headers: { 'content-type': 'application/json' }
});

export const fetchGraphql = (query: ASTNode, variables?: any) => {
   return client.post('/', {
       query: print(query),
       variables
   })
}

export default client;