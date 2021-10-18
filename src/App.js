import { useState } from "react";
import destinations  from "./destinations";

function App() {
  const[location, setLocation]= useState('sikkim')

  return (
    <div>
      <header className="container con-holidays">
        <h1 className="holidays-title">✈holidays</h1>
        <p className="holidays-subtitle">Checkout my favorite holiday destinations</p>
      </header>
      <main className="conatiner con-description">
        <section className="holidays-destinations">
          {Object.keys(destinations).map((location) => (
            <button className="holiday-button" onClick={() => setLocation(location)}>{location}</button>
          ))}
        </section>
        <section className="holidays-subdestinations">
          <ul className="holidays-list">
            {/* {console.log(destinations[location])} */}
            {destinations[location].map((book) => (
              <li 
                key={book.destination}
                className="holiday-list-item"
              >
                <div className="holiday-destination-destination"><strong className="dest">City:</strong><a className="destination" href={book.link}> {book.destination}</a></div>
                <div className="holiday-destination-rating"><strong className="dest"> Rating:</strong> {book.rating}</div>
                <div className="holiday-destination-description"><strong className="dest">Description:</strong>{book.description}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="footer con-footer">
      <div className="container con-flex">
          <h3>Connect with me</h3>
          <a href="https://twitter.com/itsmebipul00" class="svg" rel="noreferrer" target="_blank">
                        <img alt="Bipul Sharma | Twitter" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/bipul-sharma-69b7751a0/" class="svg" rel="noreferrer" target="_blank">
                        <img alt="Bipul's LinkdeIN" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
                    </a>
                    <a href="https://github.com/itsmebipul00" class="svg" rel="noreferrer" target="_blank">
                        <img alt="Bipul's Github" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
                    </a>
        </div>
      </footer>
    </div>
  );
}



export default App;

      
// {Object.keys(destinations).map((location) => (
//   <span>{genre}</span>
// ))}