/*
This is a component used on the index.tsx page
Generally speaking, you should strive to keep different parts of your code nice and separated, so components is the way to go
This folder is where you are to put all your components
*/

import Button from '@mui/material/Button';

const testComponent = () => {
    // Do some cool stuff here
    return (
        <div>
            <p>Dette er en komponent:)</p>
            <Button variant="contained">Dette er et eksempel på en material ui komponent</Button>;
        </div>
    );
}

export default testComponent
