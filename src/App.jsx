import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='relative'>
    Nav
    <section className='xl-padding-1 wide:padding-r padding-b'>
      Hero
    </section>
    <section className='padding'>PopularProducts</section>
    <section className='padding-x py-10'>SuperQuality</section>
    <section className='padding'>Services</section>
    <section className='padding'>SpecialOffer</section>
    <section className='bg-pale-blue padding'>CustomerReviews</section>
    <section className='padding'>Subscribe</section>
    <section className='padding'>Footer</section>
   </main>
  )
}

export default App
