import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addPosts, fetchPosts, fetchTags } from '../api/api'
import { useState } from 'react';

const Posts = () => {
    const [page, setPage] = useState(1);

   const {data:postData, isLoading, isError, error} = useQuery({
        queryKey:["posts", {page}],
        queryFn:()=> fetchPosts(page),
        staleTime: 1000*60*5,
    });

    const {data:tagsData} = useQuery({
        queryKey:["tags"],
        queryFn: fetchTags,
        staleTime: Infinity,
    })

    const clientQuery = useQueryClient();

    const {mutate, isError:isPostError, isPending, error:postError, reset} = useMutation({
        mutationFn: addPosts,
        onMutate:()=>{
            return {id:1};
        },
        onSuccess:(data, variables, context)=>{
            clientQuery.invalidateQueries({
               queryKey:["posts"],
                exact:true,
            })
        },
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const tags = Array.from(formData.keys()).filter((key)=>formData.get(key)==="on");
        
        if(!title || !tags) return
        mutate({id:postData?.data?.length+1, title, tags});
        e.target.reset();
    }

  return (
    <>
    <div>
        <form className='form-container' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter text...' name='title' />
            <div className="tags-container">
                {tagsData?.map((tag)=>{
                    return (
                        <div key={tag}>
                            <input name={tag} id={tag} type='checkbox' />
                            <label htmlFor={tag}>{tag}</label>
                        </div>
                    )})}
            </div>
            <button>Post</button>
        </form>
    {isLoading && isPending && <p>Loading...</p>} 
    {isError && <p>{error?.message}</p>}
    {isPostError && <p onClick={()=>reset}>{postError}!</p>}

    <div className='pages'>
        <button onClick={()=> setPage((oldPage)=>Math.max(oldPage-1, 0))} disabled={!postData?.prev}>Previous Page</button>
        <span style={{border:'1px solid orange', padding:6, margin:6, fontSize:20}}>{page}</span>
        <button onClick={()=>setPage((oldPage)=>oldPage+1)}>Next Page</button>
    </div>

    {postData?.data.map((post)=>{
        return <div key={post.id} className='stories'>
            <h4>{post.title}</h4>
            <p className='tags'>{post.tags.join(",")}</p>
        </div>
    })} 
    </div>  
    </>
  )
}

export default Posts