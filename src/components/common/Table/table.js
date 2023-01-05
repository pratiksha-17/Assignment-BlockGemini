import React,{memo} from 'react';

const Table = ({data, header, onClick}) =>{

    return( 
        <>
        <div className = 'tableWrap'>
            <table>
                <thead>
                    <tr>
                        {header.map((res,key)=>(<th key={key}>{res.label}</th>))}
                        <th>Action</th>
                    </tr>
                </thead>
            <tbody>
                {data.map((res,key)=>(
                    <>
                    <tr key={key}>
                            {header.map((col,index)=>{
                                return (
                                <td key = {index}>
                                {res[col.key]}
                            </td>
                            )} 
                        )}
                        <td>
                            <div className="btn-wrapper ">
                                <button onClick={() =>onClick(res.id)}>View</button>
                            </div>
                        </td>
                        
                    </tr>
                    
                    </>
                ))}
                
            </tbody>
            </table>
        </div>
    </>
    )

}

export default memo(Table)