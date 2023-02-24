import Link from 'next/link'
import useRouter from 'next/router'

const About =()=>{
  const router=useRouter
  console.log(router);
  const handleClick=()=>{
    router.push('/products')
  }
  return (
    <>
      <h2>Welcome to about page.</h2>
      <Link href='/'>Back to home</Link>
      <button onClick={handleClick}>Next</button>
    </>
  )
}
export default About