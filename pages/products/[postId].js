import Image from 'next/image'

const Product =({post})=>{
  return (
    <>
      <h2>Welcome to product page.</h2>
      <div>{post.title}</div>
      <Image src={post.image} alt='picture' width='500' height='500' />
    </>
  )
}
export default Product

export async function getStaticPaths(){
  return {
    paths : [
      {
        params : {postId:'1'}
      },
       {
        params : {postId:'2'}
      },
       {
        params : {postId:'3'}
      },
    ],
    fallback : 'blocking',
    
  }
}

export async function getStaticProps(context){
  const { params } = context
  const res = await fetch(`https://fakestoreapi.com/products/${params.postId}`)
  const data = await res.json()
  return {
    props:{
      post:data,
    }
  }
}