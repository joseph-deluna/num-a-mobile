import React from 'react'
import { get } from '../utils/api'
import { Text, View, Card, CardItem } from 'native-base'
import Movie from '../components/Movie/Movie'
import { ScrollView } from 'react-native-gesture-handler'





class Movies extends React.Component{

    constructor(){
        super()
        this.state = {
            loading: false,
            movies: [],
        }
    }

    async getData() {
        this.setLoading(true)
        try {
        const res = await get('movie/popular')
        this.setState((state) => {
          return {
            ...state,
            movies: res.results,
          }
        })
        console.log(res)
      } catch(err){
          console.log(err)
      } finally {
        this.setLoading(false)
      }
    }

    componentDidMount() {
        this.getData()
    }
  
    setLoading(loading) {
      this.setState((state) => {
        return {
          ...state,
          loading: loading,
          //loading,    
        }
      })
    }
    render(){
        const { loading, movies } = this.state
        console.log(this.state.movies)
        return(
           <ScrollView style={{ padding: 15 }}>
           {
               movies.map((movies) => (
                <Movie title={ movies.title}/>
                ) 
            )
           }
              
           </ScrollView>
            
        )
    }
}

export default Movies