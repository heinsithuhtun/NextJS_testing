import Link from 'next/link'
import Image from 'next/image'
import img from '../styles/images/p1.jpg'

const Home=()=>{
  return (
    <>
      <h1>Hello NEXT Js</h1>

      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li><br></br>
         <li>
          <Link href='/products'>Products</Link>
        </li>
      </ul>
      
      <Image src={img} width='500' height='500' alt='pict' />
    </>
  ) 
  
}
export default Home