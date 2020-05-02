import React, { Component } from 'react'
import { connect } from 'react-redux';
import MatchButton from '../../Components/MatchButton';
import Actions from '../../Actions';

export class Home extends Component {


    render() {
        const { getCrickteScore } = this.props;
        return (
            <div >
                
                <MatchButton 
                    title={"Button 1"}
                    onClick ={() =>getCrickteScore()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('====================================');
    console.log(state);
    console.log('====================================');   
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCrickteScore : () => dispatch(Actions.getCrickteScore)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
