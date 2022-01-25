import React,{Component} from 'react';
import axios from 'axios';
import './Filter.css';

const url = "https://zoomat.herokuapp.com/filter";

class CostFilter extends Component {

    costFilter = (event) => {
        let mealId = sessionStorage.getItem('mealId');
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1]
        let filterUrl;
        if(event.target.value === ""){
            filterUrl = `${url}/${mealId}`
        }else{
            filterUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(filterUrl)
        .then((res) => {this.props.restPerCost(res.data)})
    }
    render(){
        return(
            <div>
                <center>Cost Filter</center>
                <div className="radioButton" onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="100-300"/>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="301-500"/>301-500
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="501-700"/>501-700
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="701-1500"/>701-1500
                    </label>
                   
                </div>
            </div>
        )
    }
}

export default CostFilter;