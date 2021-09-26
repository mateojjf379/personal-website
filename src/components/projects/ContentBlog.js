import { useState, useEffect } from 'react';
import './Projects.css';
import { API, Storage } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';

function Car(props){

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
      }, []);

    async function fetchNotes() {
        const filter = {'type': {'eq': props.name}}
        const apiData = await API.graphql({ query: listNotes, variables: { filter: filter}});
        const notesFromAPI = apiData.data.listNotes.items;
        await Promise.all(notesFromAPI.map(async note => {
            if (note.image) {
            const image = await Storage.get(note.image);
            note.image = image;
            }
            return note;
        }))
        const sorted = apiData.data.listNotes.items.slice().sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
        setNotes(sorted);
    }

    function buttonHandler() {
        props.onFunction("projects");
    }

    function moreContent() {
        props.onFunction("content-form");
    }

    return(
        <div>
            <button className="back-button" onClick={() => buttonHandler()}>&#60;&#60; Back</button>
            <div>
                <h1>{props.title}</h1>
            </div>
            
            <div style={{marginBottom: 30}}>
                {
                    notes.map(note => (
                        <div className="blog-card" key={note.id || note.name }>
                            
                                {
                                    note.image && <div className="blog-left-content"><img src={note.image} className="blog-image"/></div>
                                }
                            
                            <div className="blog-right-content">
                                <h2>{note.name}</h2>
                                <p>{note.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick={() => moreContent()}>Add Content</button>
            </div>
        </div>
    )
}

export default Car;