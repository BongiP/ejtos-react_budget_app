import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        setEditableBudget(event.target.value);
    };
    
    const handleBudgetSave = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(editableBudget)
        });
    };
    
    const handleIncrement = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget + 10
        });
    };
    
    const handleDecrement = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget - 10
        });
    };
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: </span>
            <input
                type='number'
                value={editableBudget}
                onChange={handleBudgetChange}
                onBlur={handleBudgetSave}
                style={{ width: '6em', margin: '0 0.5em' }}
            />
            <button onClick={handleIncrement}><FaCaretUp /></button>
            <button onClick={handleDecrement}><FaCaretDown /></button>
        </div>
    );
};

export default Budget;
