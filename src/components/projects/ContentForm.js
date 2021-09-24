import React from 'react';
import './Projects.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function ContentForm(props){

    return(
        <div>
            <h1>Content</h1>
            <AmplifySignOut />
        </div>
    )
}

export default withAuthenticator(ContentForm);