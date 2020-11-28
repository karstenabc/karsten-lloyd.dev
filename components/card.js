import React from "react"
import ReactHtmlParser from 'react-html-parser';
import styles from '../components/components.module.css'


// Return formatted string for dates
function dateString(start, end) {
  const options = { year: 'numeric', month: 'long' };
  let from = new Date(start).toLocaleDateString("en-UK", options);
  let to = "Present";
  if (end) {
    to = new Date(end).toLocaleDateString("en-UK", options);
  }
  return from + ' - ' + to;
}


// Return specification section
function specifications(specs, table, last) {
  if (specs.length > 0) {
    let list = [];
    let radius = '0%';
    for (let i = 0; i < specs.length; i++) {
      let content = specs[i].spec + ' ' + specs[i].info;
      if (table) {
        content = <table style={{width: '100%'}}>
          <tbody>
          <tr>
            <td>{specs[i].spec}</td>
            <td style={{width: '60px', textAlign: 'right'}}>{specs[i].info}</td>
          </tr>
          </tbody>
        </table>;
      }
      if (i === specs.length - 1 && last) {
        radius = '30px';
      }
      list.push(<li className="list-group-item" style={{borderRadius: radius}}>{content}</li>);
    }
    return <ul className="list-group list-group-flush">{ list }</ul>;
  }
}


// Return footer component
function footer(links, colour) {
  if (links.length > 0) {
    let list = [];
    for (let i = 0; i < links.length; i++) {
      list.push(<a href={links[i].link} target="_blank" rel="noopener">{links[i].title}</a>);
    }
    return <div className={styles.cardFooter} style={{backgroundColor: colour}}>{list}</div>;
  }
}


// Export card component
export default function Card(type, object) {
  let img = '';
  let title = '';
  let body = '';
  let date = '';
  let specs = [];
  let colour = 'black';
  let alt = '';
  let links = [];

  switch (type) {
    case 'experience':
      img = '/experience/'+object.img;
      title = object.job;
      body = object.description;
      date = dateString(object.date_start, object.date_end);
      specs = [{ spec: 'Client: ', info: object.company }, { spec: 'Role: ', info: object.role },
        { spec: '', info: object.languages }];
      colour = object.colour;
      alt = "Company logo";
      links = [{ link: object.link, title: 'Client'}];
      break;

    case 'project':
      img = '/projects/'+object.img;
      title = object.title;
      body = object.description;
      date = dateString(object.date_start, object.date_end);
      if (object.client.toString() === 'Newcastle University CW') {
        if (object.course) {
          specs.push({ spec: 'Course: ', info: object.course });
        }
        if (object.grade) {
          specs.push({ spec: 'Grade: ', info: object.grade });
        }
      }
      if (object.frontend) {
        specs.push({ spec: 'Frontend: ', info: object.frontend });
      }
      if (object.backend) {
        specs.push({ spec: 'Backend: ', info: object.backend });
      }
      if (object.libraries) {
        specs.push({ spec: 'Tech: ', info: object.libraries });
      }
      colour = object.colour;
      alt = "Project Image";
      if (object.link) {
        links = [{ link: object.link, title: 'View Project'}];
      }
      break;

    case 'education':
      img = 'education/'+object.img;
      title = object.establishment;
      body = object.level;
      date = dateString(object.date_start, object.date_end);
      for (let grade of object.grades) {
        specs.push({ spec: grade.subject, info: grade.grade });
      }
      colour = object.colour;
      alt = "hi";
      links = [{link: object.link, title: object.establishment}];
      break;
  }

  let bottomRadius = '0px';
  if (links.length === 0) {
    bottomRadius = '30px';
  }

  return (
      <>
        <div className={styles.card} style={{border: '2px solid ' + colour}}>
          <div className={styles.cardImgContainer}>
            <img src={img} alt={alt} title={alt} />
          </div>

          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>{ title }</h5>
            <p className={styles.cardText}>{ ReactHtmlParser (body) }</p>
            <p className={styles.cardText}>
              <small className="text-muted text-black">{ date }</small>
            </p>
          </div>

          <ul className="list-group list-group-flush" style={{border: '1px solid rgba(0,0,0,.125)',
            borderBottomLeftRadius: bottomRadius, borderBottomRightRadius: bottomRadius}}>
            { specifications(specs, type === 'education', links.length === 0) }
          </ul>
          { footer(links, colour) }
        </div>
      </>
  )
}
