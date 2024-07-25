import React from 'react';
import '../styles/work.css';
import { PublicationList } from '../helpers/PublicationList';
import PublicationItem from '../components/PublicationItem';

function Work() {
    return (
        <div className="work">
            <h1 className="workTitle">Publications</h1>
            <div className="workList">
                {PublicationList.map((publicationItem, key) => {
                    return (
                        <PublicationItem
                            key={key}
                            image={publicationItem.image}
                            name={publicationItem.name}
                            url = {publicationItem.url}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Work;

