import Bloglist from './Bloglist';
import useFetch from './UseFetch';
const Home = () => {
    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            { error && <div>{error} </div>}
            { isPending && <div>Loading...</div>}
            { blogs && <Bloglist blogs={blogs} title = "All blogs title!" />}
        
        </div>
     );
}
 
export default Home;