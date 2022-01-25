import React,{Component} from 'react';
import './listing.css';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import CuisineFilter from '../Filter/cusineFilter';
import CostFilter from '../Filter/costFilter';
import SortFilter from '../Filter/sortFilter';



const url = "https://zoomat.herokuapp.com/filter";


class Listing extends Component {
    constructor(props) {
        super(props);

        this.state={
            restList:''
        }    
    }
    setDataPerFilter=(data)=>{
        this.setState({restList:data})
      }
    render(){
        return(
            <>
           
            <p className="heading">Listing Page</p>
            <div id="main">
                <div class="filter">
                    <center><h3>Filters</h3></center>
                    <hr/>
                    <CuisineFilter mealId={this.props.match.params.id}
                    restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                    <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                    <SortFilter restPerSort={(data) => {this.setDataPerFilter(data)}}/>
                </div>
                <div className="content">
                    <ListingDisplay restData={this.state.restList}/>
                </div>
            </div>
            </>

        )
    }

    componentDidMount(){
        const mealId = this.props.match.params.id;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}/${mealId}`)
        .then((res) => {
            this.setState({restList:res.data})
        })
    }
}


export default Listing