import Link from 'next/link'

const Products =({products})=>{
  return (
    <>
      <h2>Welcome to products page.</h2>
      
      <h3>hello</h3>
      <div>
        {
          products.map((product)=>{
            return (
              <div key={product.id}>
                <Link href={`products/${product.id}`}>
                  <div>{product.title}  {product.price}$</div>
                  
                </Link>
                <br></br>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
export default Products

export async function getStaticProps(){
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return {
    props:{
      products:data
    }
  }
}