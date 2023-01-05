import React, { useState, useEffect, useContext } from "react";
import { Context } from '../../../redux';
import {fetchData, fetchDataById} from './apiCalls'
import AddPost from './postModal'

import Table from "../../common/Table/table";
// import "./App.css";

const Post = () =>{

    const [state, dispatch] = useContext(Context);
    const [openModel, setOpenModel] = useState(false)

  let header = [
    {label: 'Title' , key: 'title'}, 
    {label: 'Body' , key: 'body'}]

    
    const openViewPost = (id) =>{
        fetchDataById(dispatch, id)
        .then(()=>{
            setOpenModel(true)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    const closeModal = () =>{
        dispatch({ type: 'GET_ONE_POST', payload : {} })
        setOpenModel(false)
    }

//   useEffect(() => {
//     (async () => {
//       const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
//       setData(result.data);
//     })();
//   }, []);

    useEffect(()=>{
        fetchData(dispatch)
    },[])

  return( 
    <>
        <div className='dashboard'>
            <h4 className="text-center">Only two api's were given get all post and get post by id on the basis of that i have completed the assignment.</h4>
            <div className='dash-wrap'>
                <div className="btn-wrapper">
                    <button type="button" className="btn btn-primary mb-5" onClick={()=>setOpenModel(true)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Add Post
                    </button>
                </div>
            
            <Table header = {header} data={state.posts || []} onClick={openViewPost}/>
            {openModel && <AddPost closeModal={closeModal} dispatch = {dispatch} />}
            </div>
        </div>
    </>
)
}

export default Post;