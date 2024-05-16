"use client"
import { useRouter } from 'next/navigation'

const PostPage = ({params}) => {
  const router = useRouter()
//   const { slug } = router.query

  // Fetch data for the post with the given slug

  return (
    <div>
      <h1>The slug is: {params.slug}</h1>
      {/* Render post content */}
    </div>
  )
}

export default PostPage