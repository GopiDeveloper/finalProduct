import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';
import './Quickseach.css';

const url = "https://zoomat.herokuapp.com/mealType";

class QuickSearch extends Component {

    constructor(props) {
        super(props)


        this.state={
            MealType:''
        }
    }
   
    render(){
        return(
            <div id="QuickSearch">
                <span id="QuickHeading">
                    Quick Searches
                </span>
                <span id="QuickSubHeading">
                    Discover Restaurants By Type
                </span>
                <QuickDisplay quickData={this.state.MealType}/>
            </div>
        )
    }


    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({MealType:data})
        })
    }
}

export default QuickSearch;