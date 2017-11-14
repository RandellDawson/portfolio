import React from 'react'

const raisedButtonStyle = { height: 50, margin: '4px 0 4px 0' }
export default () => (
  <nav
    className="uk-navbar-container uk-navbar-transparent uk-margin-top uk-margin-right"
    data-uk-navbar
  >
    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav uk-iconnav">
        <li>
          <a
            title="résumé"
            href="/resume"
            className="uk-background-muted uk-box-shadow-small uk-box-shadow-hover-xlarge uk-border-rounded"
            data-uk-icon="icon: copy"
            data-uk-tooltip="pos: bottom"
            style={raisedButtonStyle}
          >
            <span className="uk-hidden">résumé</span>
          </a>
        </li>
        <li>
          <a
            title="ask me anything"
            href="https://github.com/raisedadead/ama/"
            className="uk-background-muted uk-box-shadow-small uk-box-shadow-hover-xlarge uk-border-rounded"
            data-uk-icon="icon: comment"
            data-uk-tooltip="pos: bottom"
            target="_blank"
            rel="noopener noreferrer"
            style={raisedButtonStyle}
          >
            <span className="uk-hidden">ask me anything</span>
          </a>
        </li>
        <li>
          <a
            title="contact"
            href="/contact"
            className="uk-background-muted uk-box-shadow-small uk-box-shadow-hover-xlarge uk-border-rounded"
            data-uk-icon="icon: mail"
            data-uk-tooltip="pos: bottom"
            style={raisedButtonStyle}
          >
            <span className="uk-hidden">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
