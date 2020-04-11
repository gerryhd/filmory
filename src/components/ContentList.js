import React from 'react';

function ContentList(props) {
    let className = props.hidden ? "hidden" : "";

    const isTvFilm = resource => {
        if (resource.episodes === undefined) {
            return false
        } else {
            return resource.episodes.length === 1
        }
    }

    return (
        <div className={className.concat(' content-list')} id={props.name}>
          <ol>
            {props.resources.map((resource, key) => (
              <li key={key}>
                <div>
                  <strong>Name:</strong> {resource.name} {isTvFilm(resource) ? "(TV Film)" : ""}
                </div>
                <div>
                  <strong>Description:</strong> {resource.description}
                </div>
                <div>
                  <strong>Buy price:</strong> {resource.prices.buy}
                </div>
                <div>
                  <strong>Rent price:</strong> {resource.prices.rent}
                </div>
              </li>
            ))}
          </ol>
        </div>
    )
}

export default ContentList;