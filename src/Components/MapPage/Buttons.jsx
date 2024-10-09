import React from "react";
import './Buttons.css'

function Buttons ({ onToggle }){

  const handleToggle = (event) => {
    onToggle(event.target.checked);
}

    return(
    <div >
        <label className="button">
            <input type="checkbox" className="checkbox" onChange={handleToggle} />
            <div className="back"></div>
            <svg
              className="animals"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                d="m0,111.37c.3-.82.73-1.61.89-2.45,2.31-12.53,9.31-22.79,16.44-32.85,4.4-6.21,11.27-9.72,17.95-13.12,7.1-3.62,14.3-7.06,21.56-10.36,5.75-2.61,12.02-3.16,18.22-3.82,8.17-.87,16.27-2.33,24.5-2.74,7.83-.39,14.87,2.89,22.33,4.16,26.83,4.57,51.68,14.76,75.48,27.63,10.58,5.72,21.72,10.05,33.03,13.96,4.95,1.71,10.36,1.2,15.51,2.08,1.09.19,2.33.25,3.22.82,7.07,4.52,12.95-.25,15.2-6.5,2.23-6.22,3.68-12.91,7.54-18.26,3.64-5.05,3.98-9.27,1.31-14.83-1.99-4.15.43-8.82,1.41-13.11,1.32-5.8,2.88-11.69,7.67-15.9,3.62-3.18,6-3.16,9.45.09,2.82,2.65,5.59,5.35,7.6,8.71,1.01,1.69,2.21,2.65,4.25,1.28,1.97-1.32,1.28-2.69.29-4.11-3.25-4.68-6.52-9.34-9.5-14.28,4.72,2.56,8.41,6.32,11.78,10.33,1.84,2.19,2.42,2.11,4.23-.18,5.28-6.67,6.28-13.21.31-20.28,3.36.93,4.41,3.82,6.63,5.72,1.38-1.24,1.34-2.97,1.91-4.4.6-1.5.92-3.14,1.69-4.54,3.23-5.86,7.76-5.87,11.25-.25,5.4,8.68,5.74,17.82,1.36,26.7-3.41,6.91-.59,12.12,3.58,16.52,8.91,9.4,15.39,20.34,22.52,31,7.41,11.08,12.86,23.67,23.06,32.86,3.55,3.2,6.18,7.18,4.24,12.24-1.5,3.93-4.64,6.97-8.2,8.83-3.92,2.04-8.39,3.12-12.71,4.25-3.96,1.04-7.98.45-11.72-1.17-8.58-3.71-17.94-4.07-26.84-6.41-2.15-.57-2.85.88-3.62,2.37-6.9,13.42-13.7,26.89-18.93,41.07-1.5,4.06-3.64,7.55-6.91,10.46-3.63,3.22-6.93,6.83-10.54,10.07-11.99,10.74-27.19,14.06-42.11,17.98-.24.06-.49.11-.74.12-5.11.12-6.96,2.63-8.24,7.77-2.22,8.85-2.66,17.93-4.73,26.78-1.24,5.31,1.13,10.81,1.63,16.26,1.2,13.03,6.19,25.13,9.71,37.58,1.03,3.64,4.19,6.12,6.74,8.84.77.82,1.64,1.54,2.35,2.41,2.39,2.96,1.82,4.87-1.89,5.44-8.37,1.28-16.35-.59-24.1-3.61-1.73-.68-2.46-2.5-2.13-4.02.7-3.28-.65-5.9-2.08-8.5-1.57-2.86-1.86-5.68-1.53-8.96,1.04-10.6-.36-21.11-1.56-31.65-1.1-9.69-3.31-18.83-9.3-27.52-1.17,5.48-3.84,10.16-4.23,15.48-.21,2.88-.26,5.8-1.44,8.42-3.79,8.43-.95,16.96-.46,25.42.74,12.7,5.68,24.46,8.92,36.59,1.03,3.83,4.55,6.45,7.17,9.45,1.41,1.61,4.11,3.06,3,5.47-1.02,2.22-3.89,1.76-6.1,1.91-6.48.45-12.64-.94-18.62-3.28-2.7-1.06-4.2-2.98-3.98-6.05.11-1.49.17-3.13-.67-4.38-3.21-4.83-2.55-10.19-2.37-15.51.47-14.01-1.39-27.85-3.02-41.71-.16-1.33-.75-2.63-1.28-3.88-4.55-10.69-8.07-21.72-10.64-33.04-.66-2.92-2.43-5.17-3.83-7.64-2.03-3.57-4.4-6.96-5.74-10.89-.58-1.69-1.74-2.79-3.51-2.96-15.72-1.46-30.1-7.74-44.91-12.47-3.58-1.15-7.27-1.72-10.91-2.57-1.79-.42-3.47,0-5.03.92-3.66,2.14-7.32,4.26-10.94,6.47-.82.5-1.9,1.22-2.09,2.03-1.33,5.62-3.8,11.19-1.61,17.11,3.24,8.77,6.71,17.45,10.8,25.87,1.75,3.61,3.58,7.17,6.38,10.06,3.23,3.34,5.33,7.28,6.26,11.7.98,4.65,3.64,7.75,7.5,10.19,1.47.93,3.77,1.72,3.1,4.08-.6,2.08-2.5,3.01-4.63,3.25-7.35.81-14.37-.57-21.19-3.27-2.39-.95-2.53-2.97-2.25-4.98.58-4.24.37-8.2-2.85-11.48-.5-.51-.86-1.26-1.04-1.96-3.68-14.64-11.92-27.37-17.24-41.32-.71-1.86-1.52-3.69-2.38-5.49-1.56-3.24-3.12-3.76-5.61-1.19-2.75,2.84-4.71,6.27-6.29,10.02-4.07,9.67.24,18.35,2.87,27.15,2.88,9.65,5.92,19.33,12.75,27.19,1.51,1.74,2.17,3.94,2.71,6.11,1.29,5.17,4.2,9.16,8.16,12.65,4.02,3.54,3.58,5.04-1.47,6.73-7.45,2.49-14.29.02-20.96-2.83-2.21-.94-3.36-3.15-2.95-5.93.57-3.82.08-7.41-2.82-10.4-.8-.83-1.21-2.18-1.48-3.37-3.74-16.63-11.05-32.02-17.24-47.75-3.13-7.94-8.09-15.47-14.08-21.93-3.88-4.18-5.66-9.35-7.21-14.6-.77-2.61-.97-5.57.72-7.98,3.89-5.53,2.81-11.67,2.42-17.7-.71-11.15-6.84-20.43-10.75-30.47-.09-.23-.23-.47-.42-.61-7.29-5.54-7.59-13.46-7.42-21.57.02-1.09-.34-2.2-.52-3.3,0-.75,0-1.5,0-2.24Z"
              
              ></path>  
            </svg>
            <svg
              className="plants"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            > <span className="button-text">PLANTS</span>
              <path
                d="m225.93,311.56c-17.76-37.35-3.24-115.07-19.36-155.04-12.3-30.52-38.63-44.72-52.73-46.76,1.79-67.18,64.99-104.17,65.64-104.54l-2.98-5.22c-.48.27-32.98,19.24-53.1,54.79C117.07,2.48,39.95,19.53,0,63.83c45.76,39.89,78.69,52.76,160.84-4.29-7.32,14.28-12.5,31.01-13,50.08-12.74,1.45-41.51,14.56-55.05,44.63-17.69,39.29-6.29,117.53-25.52,154.14-19.23,36.62-51.36,52.25-51.36,52.25,0,0,52.25,13.62,84.4-2.75,0,0,0,0,.01,0,26.58-13.55,41.88-45.52,46.56-64.97v14.8c-5.63,14.45-15.26,31.18-28.98,43.36-3.74,3.32-7.68,6.2-11.74,8.6,11.05,22.28,23.73,37.05,36.92,42.95,2.91-1.55,9.64-5.5,17.93-12.86,8.95-7.95,17.18-17.52,24.49-28.51-20.27-13.05-32.49-35.76-38.61-53.56v-14.82c.02-.07.04-.15.06-.22,3.83,19.59,17.85,52.37,43.99,67.03.11.06.22.11.33.17,31.5,17.39,83.91,5.95,83.91,5.95,0,0-31.48-16.91-49.24-54.26Z"
              ></path>
            </svg>
             <span className="button-text">PLANTS</span>
          </label>
          </div>
    )
}

export default Buttons