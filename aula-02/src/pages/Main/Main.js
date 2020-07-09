import React, { Component } from 'react'
import './main.css'

import { Link } from 'react-router-dom'
import api from '../../services/api/api'

class Main extends Component {
  state = {
    biographies: [],
    biographyInfo: {},
    page: 1
  }

  componentDidMount(){
    this.loadBiographies();
  }


  loadBiographies = async (page = 1) =>{
     const response = await api.get(`/biographies?page=${page}`)
     const { docs, ...biographyInfo } = response.data
     this.setState({ biographies: docs, page, biographyInfo })
  }

   nextPage = () => {
     const { page, biographyInfo } = this.state;
    
     if(page === biographyInfo.pages) return;

     const pageNumber = page + 1;

     this.loadBiographies(pageNumber)
   }

   prevPage = () => {
    const { page } = this.state;
    
    if(page === 1) return;

    const pageNumber = page - 1;

    this.loadBiographies(pageNumber)
   }

   render(){
     const { biographies, page, biographyInfo } = this.state;
    return(
       <div className="biography-list">
         {biographies.map(biography => (
            <article key={biography._id}>
            <p className="name-woman">{biography.nome}</p>
            <p className="biography-description">{biography.description}</p>
            <Link className="read-more" to={`/biography/${biography._id}`}>Acessar</Link>
          </article>
         ))}

         <div className="actions">
            <button disable={page === 1} onClick={this.prevPage}>Anterior</button>
            <button disable={page === biographyInfo} onClick={this.nextPage}>Próximo</button>
         </div>
       </div>
     )
   }
}

export default Main