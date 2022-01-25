import React,{Component} from 'react';
import axios from 'axios';
import './Filter.css';

const url = "https://zoomat.herokuapp.com/filter";

class SortFilter extends Component {

    sortFilter = (event) => {
        let mealId = sessionStorage.getItem('mealId');
        let sortId = event.target.value;
        let filterUrl;
        if(sortId === ""){
            filterUrl = `${url}/${mealId}`
        }else{
            filterUrl = `${url}/${mealId}?sortKey=${sortId}`
        }
        axios.get(filterUrl)
        .then((res) => {this.props.restPerSort(res.data)})
    }
    render(){
        return(
            <div>
                <center>Sort Filter</center>
                <div className="radioButton" onChange={this.sortFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="-1"/>High To Low
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1"/>Low To High
                    </label>
                </div>
            </div>
        )
    }
}

export default SortFilter;