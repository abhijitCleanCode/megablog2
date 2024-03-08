import { useState, useEffect } from 'react';
import { Container, PostCard, Footer, Header } from '../components';
import appwriteService from "../appwrite/config";

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 space-y-5'>
                <Header />
                <Container>
                    <div className="flex flex-wrap">
                        <div className='w-full p-2'>
                            <h1 className='text-2xl text-center font-mono font-bold'>
                                No post available
                            </h1>
                            {console.log(posts)}
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }

    return (
        <div className="py-8 w-full space-y-5">
            <Header />
            <Container>
                <h1 className='font-mono font-bold text-2xl text-cyan-500 text-center'>Explore</h1>
                <div className="flex flex-wrap">
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
            
            <Footer />
        </div>
    )
}

export default Home