"use client";

const Button = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };
  return (
    <div>
        <button onClick={handleClick} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Read More</button>
    </div>
  )
}

export default Button