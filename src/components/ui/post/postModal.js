import React,{useState, useContext, useEffect} from 'react';
import { Context } from '../../../redux';
import cn from 'classnames';
import {onsubmitValidation} from '../../utils';


const AddPost = (props) =>{

    let {closeModal}  = props;

    const [state] = useContext(Context);

    const [data, setData] = useState({})
    const [error, setError] = useState({})

    const validateFields = {
       
        title : {
            required : true,
            errorMessage : 'Title is required'
        },
        body : {
            required : true,
            errorMessage : 'Body is required'
        },
    }

    useEffect(()=>{
        if(Object.keys(state.post).length){
            setData(state.post)
        }
    },[])

    const changeHandler = (e) =>{
        let {name, value} = e.target;
         setData({ ...data, [name]: value });
         
         delete error[name]
         setError({ ...error});
         
    }

    const handleSubmit = async(event) =>{
        
        event.preventDefault();
        const errorObject = await onsubmitValidation(
            data,
            validateFields,
            setError
        );
        if (!Object.keys(errorObject).length){
            console.log("data----------",data)

            // addPost(dispatch, data) // Add post api call
            closeModal()
        }
    }

    return( 
    <>
        <div id="ModalLoginForm" className="modal ">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h1> Post</h1>
                        <form role="form" method="POST" action="">
                            <div className="form-group mb-3">
                                <label className="control-label">Title</label>
                                <div>
                                    <input type="textfield" className={cn("form-control input-lg", error.title ? 'error' : '') } name="title"  onChange={changeHandler} value={!!state.post ? state.post.title : ''}/>
                                    {error.title && <span className='error-text'>{error.title}</span>}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="control-label">Body</label>
                                <div>
                                    <input type="text" className={cn("form-control input-lg", error.body ? 'error' : '') }  name="body"  onChange={changeHandler} value={!!state.post ? state.post.body : ''}/>
                                    {error.body && <span className='error-text'>{error.body}</span>}
                                </div>
                            </div>
                            
                            
                            
                            <div className="form-group btn-wrapper">
                                <div className='d-flex'>
                                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>
                                        Register
                                    </button>
                                    <button type="submit" className="btn btn-success close" onClick={closeModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}

export default AddPost