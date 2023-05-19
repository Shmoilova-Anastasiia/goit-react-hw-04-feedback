import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ButtonFeedback.styled';

const ButtonFeedback = ({ options, onBtnClick }) =>(
    <div>
        {options.map(option => (
            <Button type="button" key={option} onClick={() => onBtnClick(option)}>
                {option}
            </Button>
        ))}
    </div>
)

ButtonFeedback.propTypes = {
    options: PropTypes.array.isRequired,
    onBtnClick: PropTypes.func.isRequired,
}
export default ButtonFeedback
