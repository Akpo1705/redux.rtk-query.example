import react, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../store/models/IPosts';

const PostContainer = () => {
        const [limit, setLimit] = useState(100);
        const {data: posts, isLoading, error, refetch}  = postAPI.useFetchAllPostQuery(limit);
        const [createPost] = postAPI.useCreatePostMutation();

        // useEffect(()=>{
        //         setTimeout(()=>{setLimit(20)},2000)
        // },[])

        const handleCreate = async () => {
                const title = prompt();
                await createPost({title, body: title} as IPost);
        }

        const remove = (post: IPost) => {
                
        }

        const update = (post: IPost) => {

        }

        return (
                <div>
                        <button onClick={handleCreate}>Add new post</button>
                        <button onClick={() => {refetch()}}>Обновить</button>
                        {isLoading && <h1>Идет загрузка</h1>}
                        {error && <h1>Произошла ошибка при загрузке</h1>}
                        {posts?.map((post)=><PostItem key={post.id} post={post} remove={remove} update={update}/>)}
                </div>
        );
}

export default PostContainer;