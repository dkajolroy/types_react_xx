import Header from "../Components/Common/Header";
import Stack from 'react-bootstrap/esm/Stack';
import {useEffect,useState} from "react";
import axios from "axios";
import { Container,Row } from 'react-bootstrap';
import Product from '../Components/Common/Product';

export default function HomePage() {
    type productType = [{albumId:number,id:number,title:string,url:string,thumbnailUrl:string}]|[]
    const [product, setProduct] = useState<productType>([])
   useEffect(() => {
    const callProduct = async()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
        setProduct(data.slice(0,100))
    }
    callProduct()
   }, [])
   
  
    type productItemType ={albumId:number,id:number,title:string,url:string,thumbnailUrl:string}
  return (
    <Stack>
        <Header/>
        <Container>
            <Row>
               
            </Row>
        </Container>
    </Stack>
  )
}
