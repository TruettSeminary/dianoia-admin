// TODO: add information about how often a deck has been studied
import React from 'react'; 
import { compose } from 'redux'; 
import { connect } from 'react-redux'; 

import { push } from 'connected-react-router'

import { homePageSelector } from './selectors'

import GridContainer from 'md-components/Grid/GridContainer'; 
import GridItem from 'md-components/Grid/GridItem'; 
import Button from "md-components/CustomButtons/Button.jsx";
import Add from '@material-ui/icons/Add'; 

import HomeCard from './HomeCard'; 

import './styles.css'; 

class HomePage extends React.Component {


    generateTranslations() {
        return Object.values(this.props.translations).map((translation) => {
            return (
            <GridItem 
                xs={12} sm={6} md={4} lg={3} xl={2}
                key={translation._id}>
                <HomeCard 
                    translation={translation}
                    studyDeck={() => {
                        this.props.pushPage(`/translation/edit/${translation._id}`)
                    }} 
                />
            </GridItem>); 
        }); 
    }

    render() {
        return (
            <div className="homePageContainer">
                <h1>Create New Translation: 
                    <Button justIcon round color="primary"
                        onClick={() => {
                            this.props.pushPage('/translation/create'); 
                        }}
                    >
                        <Add/>
                    </Button>
                </h1>
                <h1>Existing Translations</h1>
                <GridContainer>
                    {this.generateTranslations()}
                </GridContainer>
            </div>
        );
    }
}

const mapStateToProps = homePageSelector(); 
const mapDispatchToProps = (dispatch) => {
    return {
        pushPage: (route) =>  {
            dispatch(push(route)); 
        },  
        dispatch
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps); 

export default compose( 
    withConnect
)(HomePage); 