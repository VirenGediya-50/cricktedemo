import React from 'react';
import { Button } from 'reactstrap';
 
const MatchButton = (props) => {
    const { title, onClick } = props;
    return (
        <Button 
            onClick={onClick}
            color="primary">
            {title}
        </Button>
        
    );
}
 
export default MatchButton;