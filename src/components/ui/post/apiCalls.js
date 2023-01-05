import {getPostRoute, postByIdRoute} from './routes';
import {get} from '../../common/axios/axiosResType';

export const fetchData = async (dispatch) =>{ //fetch post data
    await get(getPostRoute()).then((res) =>{
    if(res){ 
        if(res.status === 200){
            return dispatch({ type: 'GET_POST', payload : res.data })
        }
    }
    }).catch((err) =>{
        throw err;
    })
};

export const fetchDataById = async (dispatch, id) =>{ //fetch post data
    await get(postByIdRoute(id)).then((res) =>{
    if(res){ 
        if(res.status === 200){
            return dispatch({ type: 'GET_ONE_POST', payload : res.data })
        }
    }
    }).catch((err) =>{
        throw err;
    })
};

