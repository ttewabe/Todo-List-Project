import * as React from 'react';


export interface IButtonProps {
    label: string;
}
export const Button = ({label}:IButtonProps) => {
    return (
        <div>
            <button style={{
            backgroundColor:' #4CAF50',
            color: 'white',
            fontSize: 'larger',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '10px',            
            border: 'none',
            outline: 'none',
            transition: 'all 0.3s', 
        }}>{label}</button></div>
        
    );
}
