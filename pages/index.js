import Link from 'next/link'

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
    </>
  ) 
  
}
export default Home