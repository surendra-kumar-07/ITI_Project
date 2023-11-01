import React from 'react'

const BlogPage = () => {
  return (
  <>
  <div className='w-full h-fit bg-[#f8f8fd] md:px-20 pb-10 md:flex md:justify-center'>
    <div className='flex justify-center flex-col md:w-4/5'>
        <div className='p-4 mt-5'>
        <h1 className='text-xl font-bold mb-1'>Tomorrow Holiday due to deepawali</h1>
        <span className='text-sm'>June 02, 2023 11:16 am</span>
        </div>
        <div>
        <img src={blog_img} alt="image" />
        </div>
        <div className='p-3'>
            <p>
            On Sunday, Prime Minister Narendra Modi inaugurated India’s new Parliament building. “It is not only a building. It is a reflection of the aspirations and dreams of 140 crore Indians. This is the temple of our democracy giving the message of India’s determination to the world,” he said. The Congress-led Opposition boycotted the inauguration.
<br/>
<br/>
With the new building coming into use from the next Parliament session, this is a review of the performance of the MPs in the old building. The 17th Lok Sabha, entering its final year, has functioned for 230 sitting days so far. Of all the Lok Sabhas that completed the full five-year term, the 16th Lok Sabha had the lowest number of sitting days (331). With one more year remaining, and 58 average sitting days a year, the 17th Lok Sabha is unlikely to sit for more than 331 days. This could make it the shortest full-term Lok Sabha since 1952.
            </p>
        </div>
    </div>

   </div>
  </>
  )
}

export default BlogPage