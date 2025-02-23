import '../styles/languagesAndTools/languagesAndTools.css';

export const LanguagesAndTools = () => {
  return (
    <div className='languagesAndTools'>
      <h1 className='languages'>Languages</h1>
      <div className="languagesIcons">
        <div className="iconWrapper">
          <img src="img/languages/c-logo.svg" alt="C" width="80" height="80" />
          <span className="tooltip">C</span>
        </div>
        <div className="iconWrapper">
          <img src="img/languages/c-sharp-logo.svg" alt="C#" width="80" height="80" />
          <span className="tooltip">C#</span>
        </div>
        <div className="iconWrapper">
          <img src="img/languages/javascript-logo.svg" alt="JavaScript" width="80" height="80" />
          <span className="tooltip">JavaScript</span>
        </div>
        <div className="iconWrapper">
          <img src="img/languages/python-logo.svg" alt="Python" width="80" height="80" />
          <span className="tooltip">Python</span>
        </div>
      </div>

      <h1 className='tools'>Other tools and technologies</h1>
      <div className="toolsIcons">
        <div className="iconWrapper">
          <img src="img/tools/css-logo.svg" alt="CSS" width="80" height="80" />
          <span className="tooltip">CSS</span>
        </div>
        <div className="iconWrapper">
          <img src="img/tools/html-logo.svg" alt="HTML" width="80" height="80" />
          <span className="tooltip">HTML</span>
        </div>
        <div className="iconWrapper">
          <img src="img/tools/react-logo.svg" alt="React" width="80" height="80" />
          <span className="tooltip">React</span>
        </div>
        <div className="iconWrapper">
          <img src="img/tools/dbeaver-logo.svg" alt="Dbeaver" width="80" height="80" />
          <span className="tooltip">Dbeaver</span>
        </div>
        <div className="iconWrapper">
          <img src="img/tools/postgresql-logo.svg" alt="PostgreSQL" width="80" height="80" />
          <span className="tooltip">PostgreSQL</span>
        </div>
      </div>
    </div>
  );
};
