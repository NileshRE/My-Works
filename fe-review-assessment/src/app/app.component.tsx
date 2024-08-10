import VendorPMLogo from "../assets/logo.png";
import { People } from "./modules/people";
import { AxiosProvider } from "./shared/context";

import "./app.css";

export function App() {
  return (
    <AxiosProvider>
      <div className="App">
        <header className="header">
          <div className="header-item">
            <img src={VendorPMLogo} className="logo" />
          </div>

          <div className="header-item col">
            <h2>Welcome to the VendorPM Frontend Technical Assessment.</h2>

            <p>
              <i>
                Please follow the rules and guidelines in the
                <b> README.</b>
              </i>
            </p>

            <p>Best of Luck! 😉.</p>
          </div>
        </header>

        <section>
          <People />
        </section>
      </div>
    </AxiosProvider>
  );
}
