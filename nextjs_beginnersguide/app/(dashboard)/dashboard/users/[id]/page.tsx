import React from 'react'

const Page = ({params}:{params:{id:string}}) => {
    const {id} = params;
    return (
        <>
            <h1 className='text-3xl'>User Profile</h1>
            {/*Alternative 1:*/}
            <div>params.id : {params.id}</div>

            {/*Alternative 2:*/}
            <div>id        : {id}</div>
        </>
    )
}

export default Page