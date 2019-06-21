import React from 'react'


export default function App({ C, session, database, updateDatabase }){
    return <div>
        Current URL: {session.url}
        <button onClick={C(e => {
            updateDatabase({
                count: database.count + 1
            })
        })}>Clicked {database.count} times</button>
    </div>
}
