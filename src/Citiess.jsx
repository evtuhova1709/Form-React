import React from 'react';
import Data from './cities.json';
import classes from './Citiess.module.css';
const Citiess = () => {

    function sortValues() {
        let filteredData = Data.filter(value => value.population >= 50000);
        let sortedByPopulation = filteredData.sort(function(a, b) {
            return b.population - a.population
        });
        let firstElement = sortedByPopulation[0];
        sortedByPopulation.shift();

        let sortedByAlphabet = sortedByPopulation.sort(function(a, b) {
            return a.city.localeCompare(b.city);
        });
        
        sortedByAlphabet.unshift(firstElement);

        return sortedByAlphabet;

    }

    

    return (
        <div>
            <form className={classes.forms}>
                <label className={classes.labelName}>
                    Ваш город
                    <select className={classes.selectS} value="" >
                        {
                        sortValues().map(value => {
                            return (
                                <option >{value.city}</option>
                            )
                        })}
                    </select>
                </label>
                <hr className={classes.line}/>
            </form>










        </div>
    )
}
export default Citiess;