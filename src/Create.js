import { useState } from "react"
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const {isPending, setIspending} = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        setIspending(true);
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{ "Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            setIspending(false);
        })
    }

    return ( <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit= {handleSubmit}>
            <label>Blog title:</label>
            <input type="text" 
            required 
            value={ title }
            onChange={(e) => setTitle(e.target.value)}/>
            <label>Blog body:</label>
            <textarea required
            value={ body} 
            onChange={(e) => setBody(e.target.value)} ></textarea>
            <label 
            value={ author} 
            onChange={(e) => setAuthor(e.target.value)}>Blog author:</label>
            <select>
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
            </select>
            { !isPending && <button>Add Blog</button>}
            { isPending && <button disabled>Adding blog...</button>}
        </form>
    </div> );
}
 
export default Create;